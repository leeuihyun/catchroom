package catchroom.backend.controller;


import catchroom.backend.domain.Address;
import catchroom.backend.domain.Authority;
import catchroom.backend.domain.Member;
import catchroom.backend.domain.Room;
import catchroom.backend.dto.MemberRequestDto;
import catchroom.backend.dto.MemberResponseDto;
import catchroom.backend.dto.TokenDto;
import catchroom.backend.service.AuthService;
import catchroom.backend.service.MemberService;
import catchroom.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final AuthService authService;
    private final RoomService roomService;

    //뉴 회원가입
    @PostMapping("/signup")
    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto requestDto){
        return  ResponseEntity.ok(authService.signup(requestDto));
    }
    //로그인
    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto requestDto) {
        log.info("암호화가 됬는지 확인하기:"+requestDto.getPassword());
        TokenDto token = authService.login(requestDto);
        return ResponseEntity.ok(token);
    }

    //토큰 조회
    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        System.out.println(myInfoBySecurity.getName());
        return ResponseEntity.ok((myInfoBySecurity));
        // return ResponseEntity.ok(memberService.getMyInfoBySecurity());
    }

    //찜목록
    @GetMapping("/wish")

    //찜하기
    @PostMapping("/{id}/wish")
    public ResponseEntity<?> roomWish(@PathVariable("id") Long roomId){
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        Room findRoom = roomService.findOne(roomId);
        return ResponseEntity.ok(memberService.wish(myInfoBySecurity.getEmail(),findRoom.getId()));
    }

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
        member.setAuthority(Authority.ROLE_USER);
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
