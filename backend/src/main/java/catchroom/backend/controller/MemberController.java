package catchroom.backend.controller;


import catchroom.backend.domain.Room;
import catchroom.backend.dto.MemberRequestDto;
import catchroom.backend.dto.MemberResponseDto;
import catchroom.backend.service.AuthService;
import catchroom.backend.service.MemberService;
import catchroom.backend.service.WishRoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final AuthService authService;
    private final WishRoomService wishRoomService;
//    private final RoomService roomService;

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
        map.put("info",memberService.loginFind(requestDto.getEmail()));
        map.put("wishRooms",wishRoomService.loginWish(requestDto.getEmail()));

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
    public ResponseEntity<Map<String ,Object>> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        Map<String, Object> map = new HashMap<>();
        map.put("info", memberService.getMyInfoBySecurity());
        map.put("wishRooms",wishRoomService.getWish());
        return ResponseEntity.ok(map);
    }

    //찜목록 임시
    @GetMapping("/wishes")
    public ResponseEntity<?> getWishes(){
//        Member member = memberService.findOne(requestDto.getEmail());
        List<Room> getWish = wishRoomService.getWish();
//        System.out.println("myInfoBySecurity.toString() = " + myInfoBySecurity.toString());
        return ResponseEntity.ok(getWish);
    }

    //찜하기
    @PostMapping("/{id}/wish")
    public ResponseEntity<?> roomWish(@PathVariable("id") Integer roomId){
        MemberResponseDto member = wishRoomService.wish(roomId);
        return ResponseEntity.ok(member.getEmail());
    }


    //찜취소
    @PostMapping("/{id}/cancel")
    public ResponseEntity<?> wishCancel(@PathVariable("id") Integer wishRoomId){

        List<Room> getWish =  wishRoomService.wishCancel(wishRoomId);
        System.out.println("rooms = " + getWish.toString());
        return ResponseEntity.ok(getWish);
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
