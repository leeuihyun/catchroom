package catchroom.backend.service;

import catchroom.backend.domain.Member;
import catchroom.backend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    //회원 가입
    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);

        return member.getId();
    }
    //중복 아이디 검출
    private void validateDuplicateMember(Member member) {
        List<Member> findMember = memberRepository.findByIdentity(member.getIdentity());
        if(!findMember.isEmpty())
            throw new IllegalStateException("이미 존재하는 회원입니다.");
    }

    public Member findOne(String identity){return memberRepository.findOne(identity);}
}
