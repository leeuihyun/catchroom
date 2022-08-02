package catchroom.backend.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Room {

    @Id @GeneratedValue
    @Column(name = "room_id")
    private Integer id;

    private String name;

    @Embedded
    private Room_Info room_info;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "president_id")
    private President president;

    @Embedded
    private Address address;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "room")
    private WishRoom wishRoom;

    //연관관계 메소드//
    public void setPresident(President president) {
        this.president = president;
        president.getRooms().add(this);
    }

    //생성 메소드//
    public static Room createRoom(President president) {
        Room room = new Room();
        room.setPresident(president);

        return room;
    }
}
