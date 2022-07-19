package catchroom.backend.domain;


import lombok.Builder;
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


    @Builder
    public Member(String email, String password, String name, Address address, String number){
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.number = number;
    }

    //연관관계 메소드//
    public void createWish(WishRoom wishRoom) {
        wishes.add(wishRoom);
        wishRoom.setMember(this);
    }
}
