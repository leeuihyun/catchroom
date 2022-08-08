package catchroom.backend.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "wish_room")
@Getter @Setter
@ToString
public class WishRoom {

    @Id @GeneratedValue
    @Column(name = "wish_room_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id")
    private Room room;

    @Enumerated(EnumType.STRING)
    private WishStatus status;

    //연관관계 메소드//
    public void setMember(Member member) {
        this.member = member;
        member.getWishes().add(this);
    }

    //생성 메소드
    public static WishRoom createWish(Room room){
        WishRoom wishRoom = new WishRoom();
        wishRoom.setRoom(room);
        wishRoom.setStatus(WishStatus.WISH);
        return wishRoom;
    }


    //비지니스 로직
    public void cancel(Member member) {
        if (member.equals(this.getMember())){
            this.setStatus(WishStatus.CANCEL);
        }
    }


}
