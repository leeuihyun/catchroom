package catchroom.backend.service;

import catchroom.backend.config.SecurityUtil;
import catchroom.backend.domain.Address;
import catchroom.backend.domain.Member;
import catchroom.backend.dto.MemberResponseDto;
import catchroom.backend.repository.MemberImplRepository;
import catchroom.backend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    private final MemberImplRepository memberImplRepository;
    private final PasswordEncoder passwordEncoder;

    //회원 가입
    @Transactional
    public String join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);

        return member.getEmail();
    }

    //중복 아이디 검출
    private void validateDuplicateMember(Member member) {
        List<Member> findMember = memberRepository.findByIdentity(member.getEmail());
        if(!findMember.isEmpty())
            throw new IllegalStateException("이미 존재하는 회원입니다.");
    }

    //아이디 찾기
    public Member findOne(String email){

        return memberRepository.findOne(email);
    }
    //토큰 방식 정보 넘기기
    public MemberResponseDto getMyInfoBySecurity() {
        return memberImplRepository.findById(SecurityUtil.getCurrentMemberId())
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }
    //
    @Transactional
    public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
        Member member = memberImplRepository.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        if (!passwordEncoder.matches(exPassword, member.getPassword())) {
            throw new RuntimeException("비밀번호가 맞지 않습니다");
        }
        member.setPassword(passwordEncoder.encode((newPassword)));
        return MemberResponseDto.of(memberImplRepository.save(member));
    }






    // 아이디 삭제
    @Transactional
    public void deleteId(String email){

        Member member = memberRepository.findOne(email);
        memberRepository.delete(member);
    }

    //아이디 수정
    @Transactional
    public Member updateMember(String email, String name, Address address, String password, String number){
        Member findMember = memberRepository.findOne(email);
        findMember.setName(name);
        findMember.setAddress(address);
        findMember.setPassword(password);
        findMember.setNumber(number);

        return findMember;
    }
}
