package catchroom.backend.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;

    @Column(name = "id")
    private String identity;

    private String password;

    @Embedded
    private Address address;

    private String number;

    @OneToMany(mappedBy = "member")
    private List<WishRoom> wishes = new ArrayList<>();



}