package catchroom.backend.dto;

import catchroom.backend.domain.*;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PresidentRequestDto {


    private String name;
    private String email;
    private String password;
    private String number;

    private String city;
    private String district; //구
    private String detail; //상세 주소
    private String zipcode; //우편 번호


    private List<Room> rooms;

    public President toPresident(PasswordEncoder passwordEncoder) {
        Address address = new Address(city,district,detail,zipcode);
        President president  = new President();
        president.setName(this.getName());
        president.setRooms(new ArrayList<>());
        president.setAddress(address);
        president.setEmail(this.getEmail());
        president.setPassword(passwordEncoder.encode(this.password));
        president.setNumber(this.getNumber());
        president.setAuthority(Authority.ROLE_USER);
        return president;
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
