package catchroom.backend.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "wish_room")
@Getter @Setter
public class WishRoom {

    @Id @GeneratedValue
    @Column(name = "wish_room_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne
    @JoinColumn(name = "room_id")
    private Room room;


}
