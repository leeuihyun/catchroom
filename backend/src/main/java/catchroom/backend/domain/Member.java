package catchroom.backend.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @NotNull
    private String name;

    @Id
    @Column(name = "member_id")
    @NotNull
    private String email;

    @NotNull
    private String password;

    @Embedded
    private Address address;

    @NotNull
    private String number;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<WishRoom> wishes = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Authority authority;


    //연관관계 메소드//
    public void createWish(WishRoom wishRoom) {
        wishRoom.setMember(this);
        this.wishes.add(wishRoom);

    }
}
