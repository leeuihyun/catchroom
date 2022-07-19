package catchroom.backend.service;

import catchroom.backend.domain.Address;
import catchroom.backend.domain.Member;
import catchroom.backend.domain.Room;
import catchroom.backend.domain.WishRoom;
import catchroom.backend.repository.MemberRepository;
import catchroom.backend.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final RoomRepository roomRepository;

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
    public Member findOne(String email){return memberRepository.findOne(email);}


    //찜 기능
    @Transactional
    public WishRoom wish(String memberId, Long roomId){
        //엔티티 조회
        Member member = memberRepository.findOne(memberId);
        Room room = roomRepository.findOne(roomId);

        WishRoom wishRoom = WishRoom.createWish(room);
        member.createWish(wishRoom);
        return wishRoom;
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
