package catchroom.backend.controller;


import catchroom.backend.domain.Address;
import catchroom.backend.domain.Member;
import catchroom.backend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    //회원가입
//    @PostMapping("/new")
//    public String create(@Valid MemberForm form, BindingResult result) {
//
//
//        Address address = new Address(form.getCity(),
//                form.getDistrict(), form.getDetail(), form.getZipcode());
//
//        Member member = new Member();
//        member.setName(form.getName());
//        member.setAddress(address);
//        member.setEmail(form.getEmail());
//        member.setPassword(form.getPassword());
//        member.setNumber(form.getNumber());
//
//        memberService.join(member);
//        return "redirect:/";
//    }

    //회원가입
    @PostMapping("/new")
    public void ExMember(@RequestBody MemberForm form) {
        Address address = new Address(form.getCity(),
                form.getDistrict(), form.getDetail(), form.getZipcode());

        Member member = new Member();
        member.setName(form.getName());
        member.setAddress(address);
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setNumber(form.getNumber());
        memberService.join(member);

    }
}
