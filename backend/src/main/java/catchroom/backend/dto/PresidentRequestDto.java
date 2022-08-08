package catchroom.backend.dto;

import catchroom.backend.domain.Address;
import catchroom.backend.domain.President;
import catchroom.backend.domain.Room;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

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
        return president;
    }
}
