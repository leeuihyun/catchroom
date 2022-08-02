package catchroom.backend.controller;


import catchroom.backend.domain.*;
import catchroom.backend.dto.MemberRequestDto;
import catchroom.backend.dto.MemberResponseDto;
import catchroom.backend.dto.RoomRequestDto;
import catchroom.backend.service.AuthService;
import catchroom.backend.service.MemberService;
import catchroom.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;


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
    public ResponseEntity<Map<String,Object>> login(@RequestBody MemberRequestDto requestDto) {
        log.info("암호화가 됬는지 확인하기:"+requestDto.getPassword());
        Map<String, Object> map = new HashMap<>();
        map.put("token", authService.login(requestDto));
        map.put("info",requestDto.getEmail());

        return ResponseEntity.ok(map);
    }

    //로그아웃
    @DeleteMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            bearerToken = bearerToken.substring(7);
        }
        //authService.logout(bearerToken);

        return ResponseEntity.ok(bearerToken);
    }


    //토큰 조회
    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        System.out.println(myInfoBySecurity.getName());
        System.out.println("myInfoBySecurity = " + myInfoBySecurity.getCity());
        return ResponseEntity.ok((myInfoBySecurity));
        // return ResponseEntity.ok(memberService.getMyInfoBySecurity());
    }

    //찜목록 임시
    @GetMapping("/wishes")
    public ResponseEntity<?> getWishes(@RequestBody MemberRequestDto requestDto){
//        Member member = memberService.findOne(requestDto.getEmail());
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        System.out.println("myInfoBySecurity.toString() = " + myInfoBySecurity.toString());
        return ResponseEntity.ok("ok");
    }

    //찜하기
    @PostMapping("/{id}/wish")
    public ResponseEntity<?> roomWish(@PathVariable("id") Integer roomId){
        MemberResponseDto member = memberService.wish(roomId);
        System.out.println("wish.getMember().getWishes().size() = " + member.getWishes().size());
        return ResponseEntity.ok(member.getEmail());
    }

    //임시
    @PostMapping("/createRoom")
    public ResponseEntity<?> createRoom(@RequestBody RoomRequestDto requestDto){
        Room room = new Room();
        room.setName(requestDto.getName());
        roomService.addRoom(room);
        return new ResponseEntity<>(requestDto, HttpStatus.OK);
    }
//    @PostMapping("/wishRoom")
//    public ResponseEntity<?> createWishRoom(){
//        Member member = memberService.wish(27);
//        System.out.println("wish.getId() = " + member.getWishes().size());
//        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
//
//        return new ResponseEntity<>(myInfoBySecurity.getWishes(), HttpStatus.OK);
//    }


//    //회원가입
//    @PostMapping("/new")
//    public String createMember(@RequestBody MemberForm form) {
//        Address address = new Address(form.getCity(),
//                form.getDistrict(), form.getDetail(), form.getZipcode());
//
//        Member member = new Member();
//        member.setName(form.getName());
//        member.setAddress(address);
//        member.setEmail(form.getEmail());
//        member.setPassword(form.getPassword());
//        member.setNumber(form.getNumber());
//        member.setAuthority(Authority.ROLE_USER);
//        memberService.join(member);
//
//        return "ok";
//    }
//
//    //조회
//    @GetMapping("/{id}")
//    public ResponseEntity<?> searchMember(@PathVariable("id") String email) {
//        Member findMember = memberService.findOne(email);
//
//        return new ResponseEntity<>(findMember, HttpStatus.OK);
//    }
//
//    //수정
//    @PostMapping("/{id}/update")
//    public ResponseEntity<?> updateMember(@PathVariable("id") String email, @RequestBody MemberForm form) {
//        Address address = new Address(form.getCity(),
//                form.getDistrict(), form.getDetail(), form.getZipcode());
//        Member updateMember = memberService.updateMember(email,
//                form.getName(), address, form.getPassword(), form.getNumber());
//
//        return new ResponseEntity<>(updateMember, HttpStatus.OK);
//    }
//
//
//    //삭제
//    @PostMapping("/{id}/delete")
//    public ResponseEntity<?> deleteMember(@PathVariable("id") String email){
//        memberService.deleteId(email);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }


}
