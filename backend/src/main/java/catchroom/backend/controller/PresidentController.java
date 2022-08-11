package catchroom.backend.controller;


import catchroom.backend.dto.PresidentRequestDto;
import catchroom.backend.dto.PresidentResponseDto;
import catchroom.backend.service.AuthService;
import catchroom.backend.service.PresidentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/presidents")
@Slf4j
public class PresidentController {

    private final AuthService authService;
    private final PresidentService presidentService;

    //사장님 회원가입
    @PostMapping("/signup")
    public ResponseEntity<PresidentResponseDto> signup(@RequestBody PresidentRequestDto requestDto){

        return  ResponseEntity.ok(authService.presidentSignup(requestDto));
    }
    //로그인
    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestBody PresidentRequestDto requestDto) {
        log.info("암호화가 됬는지 확인하기:"+requestDto.getPassword());
        Map<String, Object> map = new HashMap<>();
        map.put("token", authService.presidentLogin(requestDto));
        map.put("info",presidentService.loginFind(requestDto.getEmail()));

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

//    //회원가입
//    @PostMapping("/new")
//    public ResponseEntity<?> createPresident(@RequestBody MemberForm form){
//        Address address = new Address(form.getCity(),
//                form.getDistrict(), form.getDetail(), form.getZipcode());
//
//        President president = new President();
//        president.setName(form.getName());
//        president.setAddress(address);
//        president.setEmail(form.getEmail());
//        president.setPassword(form.getPassword());
//        president.setNumber(form.getNumber());
//        presidentService.join(president);
//
//        return new ResponseEntity<>(president, HttpStatus.OK);
//    }
}
