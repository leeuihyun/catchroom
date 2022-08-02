package catchroom.backend.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    private String name;

    @Id
    @Column(name = "member_id")
    private String email;

    private String password;

    @Embedded
    private Address address;

    private String number;

    @OneToMany(mappedBy = "member")
    private List<WishRoom> wishes = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Authority authority;


    //연관관계 메소드//
    public void createWish(WishRoom wishRoom) {
        wishRoom.setMember(this);
        wishes.add(wishRoom);

    }
}
