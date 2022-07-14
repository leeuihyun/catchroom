//package catchroom.backend.service;
//
//
//import catchroom.backend.domain.Address;
//import catchroom.backend.domain.Member;
//import catchroom.backend.domain.Room;
//import catchroom.backend.domain.WishRoom;
//import catchroom.backend.repository.MemberRepository;
//import catchroom.backend.repository.RoomRepository;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.ArrayList;
//
//
//@SpringBootTest
//@Transactional
//public class MemberServiceTest {
//
//    @Autowired MemberService memberService;
//    @Autowired MemberRepository memberRepository;
//    @Autowired RoomRepository roomRepository;
//    @Autowired RoomService roomService;
//
//
//    @Test
//    public void 회원가입() throws Exception{
//        //given
//        Member member = new Member();
//        member.setName("지상일");
//        member.setEmail("gsl0515");
//        member.setPassword("1234");
//
//        //when
//        String saveEmail = memberService.join(member);
//
//        //then
//        Assertions.assertEquals(member,memberRepository.findOne(saveEmail));
//    }
//
//    @Test
//    public void 중복회원가입() throws Exception{
//        //given
//        Member memberA = new Member();
//        memberA.setName("지상일");
//        memberA.setEmail("gsl0515");
//        memberA.setPassword("1234");
//
//        Member memberB = new Member();
//        memberB.setName("지상일");
//        memberB.setEmail("gsl0515");
//        memberB.setPassword("1234");
//
//        //when
//        memberService.join(memberA);
//
//
//
//        //then
//        Assertions.assertThrows(IllegalStateException.class, () -> {
//            memberService.join(memberB);
//        });
//    }
//
//    @Test
//    public void 회원탈퇴() throws Exception{
//        //given
//        Member member = new Member();
//        member.setName("지상일");
//        member.setEmail("gsl0515");
//        member.setPassword("1234");
//        member.setWishes(new ArrayList<>());
//
//        Room room = new Room();
//        room.setName("방1");
//
//        String saveEmail = memberService.join(member);
//        Long saveRoom = roomService.addRoom(room);
//
//        WishRoom wishRoom = memberService.wish(saveEmail, saveRoom);
//        //when
//
//        memberService.deleteId(saveEmail);
//
//        //then
//        Assertions.assertEquals(null,memberRepository.findOne(saveEmail));
//    }
//
///*
//    @Test
//    public void 찜기능() throws Exception{
//        //given
//        Member member = new Member();
//        member.setName("지상일");
//        member.setEmail("gsl0515");
//        member.setPassword("1234");
//
//        Room room = new Room();
//        room.setName("방1");
//
//        String saveEmail = memberService.join(member);
//        Long saveRoom = roomService.addRoom(room);
//        //when
//
//
//        WishRoom wishRoom = memberService.wish(saveEmail, saveRoom);
//        //then
//
//        Assertions.assertEquals(member.getWishes().get(0),wishRoom);
//    }
//*/
//    @Test
//    public void 멤버_수정() throws Exception{
//        //given
//        Member member = new Member();
//        member.setName("지상일");
//        member.setEmail("gsl0515");
//        member.setPassword("1234");
//
//        memberService.join(member);
//        //when
//        Member updateMember = memberService.updateMember(member.getEmail(), "지상일1", new Address("a", "a", "a", "a"), "123", "1234");
//
//        //then
//        Assertions.assertEquals(member.getName(),updateMember.getName());
//    }
//}
