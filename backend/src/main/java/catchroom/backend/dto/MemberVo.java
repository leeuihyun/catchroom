package catchroom.backend.dto;

import catchroom.backend.domain.WishRoom;
import lombok.Getter;

import java.util.List;

@Getter
public class MemberVo
{

    private String email;
    private String name;
    private String number;
    private String city;

    private List<WishRoom> wishes;

    @Override
    public String toString() {
        return "MemberVo [email=" + email + ", name=" + name + ", number=" + number + ", city="+
                city+", wishes="+ wishes + "]";

    }
}
