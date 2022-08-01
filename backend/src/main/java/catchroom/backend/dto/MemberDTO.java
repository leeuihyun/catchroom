package catchroom.backend.dto;

import catchroom.backend.domain.WishRoom;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class MemberDTO
{

    private String email;
    private String name;
    private String number;
    private String city;

    private List<WishRoom> wishes;

    public MemberDTO(String email, String name, String number, List<WishRoom> wishes) {
        this.email = email;
        this.name = name;
        this.number = number;
//        this.city = city;
        this.wishes = wishes;
    }
}
