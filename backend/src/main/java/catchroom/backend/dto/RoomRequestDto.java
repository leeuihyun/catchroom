package catchroom.backend.dto;

import catchroom.backend.domain.Room;
import catchroom.backend.domain.Room_Info;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class RoomRequestDto {

    private String name;

    private String 주소;
    private String 대학교;
    private String 가격;
    private String 룸타입;
    private String 면적;
    private String 층;
    private String 방_화장실;
    private String 관리비;

    public Room toRoom(){
        Room_Info room_info = new Room_Info();
        Room room = new Room();
        room.setName(this.getName());
        room_info.set주소(this.get주소());
        room_info.set대학교(this.get대학교());
        room_info.set가격(this.get가격());
        room_info.set룸타입(this.get룸타입());
        room_info.set면적(this.get면적());
        room_info.set층(this.get층());
        room_info.set방_화장실(this.get방_화장실());
        room_info.set관리비(this.get관리비());
        room.setRoom_info(room_info);
        return  room;
    }
}
