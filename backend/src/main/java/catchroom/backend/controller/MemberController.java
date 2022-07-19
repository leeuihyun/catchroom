package catchroom.backend.controller;


import catchroom.backend.domain.Address;
import catchroom.backend.domain.Member;
import catchroom.backend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


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
    public String createMember(@RequestBody MemberForm form) {
        Address address = new Address(form.getCity(),
                form.getDistrict(), form.getDetail(), form.getZipcode());

        Member member = new Member();
        member.setName(form.getName());
        member.setAddress(address);
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setNumber(form.getNumber());
        memberService.join(member);

        return "ok";
    }

    //조회
    @GetMapping("/{id}")
    public ResponseEntity<?> searchMember(@PathVariable("id") String email) {
        Member findMember = memberService.findOne(email);

        return new ResponseEntity<>(findMember, HttpStatus.OK);
    }

    //수정
    @PostMapping("/{id}/update")
    public ResponseEntity<?> updateMember(@PathVariable("id") String email, @RequestBody MemberForm form) {
        Address address = new Address(form.getCity(),
                form.getDistrict(), form.getDetail(), form.getZipcode());
        Member updateMember = memberService.updateMember(email,
                form.getName(), address, form.getPassword(), form.getNumber());

        return new ResponseEntity<>(updateMember, HttpStatus.OK);
    }


    //삭제
    @PostMapping("/{id}/delete")
    public ResponseEntity<?> deleteMember(@PathVariable("id") String email){
        memberService.deleteId(email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
