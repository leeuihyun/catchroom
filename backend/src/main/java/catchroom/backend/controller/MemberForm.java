package catchroom.backend.controller;


import catchroom.backend.domain.WishRoom;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class MemberForm {


    private String email;
    private String password;
    private String name;
    private String number;
    private List<WishRoom> wishes;
    private String city;
    private String district;
    private String detail;
    private String zipcode;
}
