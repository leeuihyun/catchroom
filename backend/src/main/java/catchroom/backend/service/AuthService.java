package catchroom.backend.service;

import catchroom.backend.domain.Member;
import catchroom.backend.domain.President;
import catchroom.backend.dto.*;
import catchroom.backend.jwt.TokenProvider;
import catchroom.backend.repository.MemberImplRepository;
import catchroom.backend.repository.PresidentImplRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final MemberImplRepository memberImplRepository;
    private final PresidentImplRepository presidentImplRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
//    private final RedisUtil redisUtil;

    public MemberResponseDto signup(MemberRequestDto requestDto) {
        if (memberImplRepository.existsByEmail(requestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        Member member = requestDto.toMember(passwordEncoder);
        return MemberResponseDto.of(memberImplRepository.save(member));
    }

    public TokenDto login(MemberRequestDto requestDto) {
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        return tokenProvider.generateTokenDto(authentication);
    }

    public PresidentResponseDto presidentSignup(PresidentRequestDto requestDto) {
        if (memberImplRepository.existsByEmail(requestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        President president = requestDto.toPresident(passwordEncoder);
        return PresidentResponseDto.of(presidentImplRepository.save(president));
    }

    public TokenDto presidentLogin(PresidentRequestDto requestDto) {
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        return tokenProvider.generateTokenDto(authentication);
    }

//    public void logout(String accessToken) {
//        redisUtil.setBlackList(accessToken, "accessToken", 1800);
//    }

}
