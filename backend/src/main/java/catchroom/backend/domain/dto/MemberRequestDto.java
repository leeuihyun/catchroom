package catchroom.backend.domain.dto;

import catchroom.backend.domain.Address;
import catchroom.backend.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {
    private String email;
    private String password;
    private String name;
    private String number;

    private String city;
    private String district;
    private String detail;
    private String zipcode;

    public Member toMember(PasswordEncoder passwordEncoder) {
        Address address = new Address(city,district,detail,zipcode);

        return Member.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .name(name)
                .address(address)
                .number(number)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}