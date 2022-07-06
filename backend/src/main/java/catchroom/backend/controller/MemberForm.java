package catchroom.backend.controller;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberForm {

    private String name;
    private String email;
    private String password;
    private String number;

    private String city;
    private String district;
    private String detail;
    private String zipcode;
}
