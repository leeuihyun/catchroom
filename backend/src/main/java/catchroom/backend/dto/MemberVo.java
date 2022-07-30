package catchroom.backend.dto;

import catchroom.backend.domain.WishRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberVo
{

    private String email;
    private String name;
    private String number;
    private String city;

    private List<WishRoom> wishes;

}
