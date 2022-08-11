package catchroom.backend.service;

import catchroom.backend.domain.Member;
import catchroom.backend.domain.President;
import catchroom.backend.repository.MemberImplRepository;
import catchroom.backend.repository.PresidentImplRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class MemberPresidentDetailsService implements UserDetailsService {

    private final MemberImplRepository memberImplRepository;
    private final PresidentImplRepository presidentImplRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (AuthService.user.equals("member")) {
            return memberImplRepository.findByEmail(username)
                    .map(this::createUserDetails)
                    .orElseThrow(() -> new UsernameNotFoundException(username + " 을 DB에서 찾을 수 없습니다"));
        } else {
            return presidentImplRepository.findByEmail(username)
                    .map(this::createPresidentDetails)
                    .orElseThrow(() -> new UsernameNotFoundException(username + " 을 DB에서 찾을 수 없습니다"));
        }

    }
    private UserDetails createUserDetails(Member member) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getAuthority().toString());

        return new User(
                String.valueOf(member.getEmail()),
                member.getPassword(),
                Collections.singleton(grantedAuthority)
        );
    }
    private UserDetails createPresidentDetails(President president) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(president.getAuthority().toString());

        return new User(
                String.valueOf(president.getEmail()),
                president.getPassword(),
                Collections.singleton(grantedAuthority)
        );
    }
}
