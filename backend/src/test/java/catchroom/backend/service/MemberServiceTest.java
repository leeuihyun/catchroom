package catchroom.backend.service;


import catchroom.backend.domain.Member;
import catchroom.backend.repository.MemberRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;


    @Test
    public void 회원가입() throws Exception{
        //given
        Member member = new Member();
        member.setName("지상일");
        member.setEmail("gsl0515");
        member.setPassword("1234");

        //when
        String saveEmail = memberService.join(member);

        //then
        Assertions.assertEquals(member,memberRepository.findOne(saveEmail));

    }
}
