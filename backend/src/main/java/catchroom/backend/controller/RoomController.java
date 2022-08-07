package catchroom.backend.controller;

import catchroom.backend.domain.Room;
import catchroom.backend.dto.RoomRequestDto;
import catchroom.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RoomController {

    private final RoomService roomService;

    //검색
    @GetMapping("/rooms")
    public ResponseEntity<?> roomSearch(@RequestParam("search") String search, @RequestParam("page") int offset){
        offset = (offset-1)*20;
        Map<String,Object> map = new HashMap<>();
        List<Room> getWish = roomService.findRooms(search, offset);
        map.put("searchCount",roomService.findRoomsSize(search).size());
        map.put("Rooms",getWish);

        return ResponseEntity.ok(map);
    }



    //대학교 추가용
    @PostMapping("/createRoom")
    public ResponseEntity<?> createRoom(@RequestBody List<RoomRequestDto> requestDto){
        for (RoomRequestDto roomRequestDto: requestDto) {
            Room room = roomRequestDto.toRoom();
//            room.getRoomInfo().set대학교("홍익대학교(세종캠퍼스)");
            System.out.println("room = " + roomRequestDto.toString());
            roomService.addRoom(room);
        }

        return new ResponseEntity<>(requestDto.toString(), HttpStatus.OK);
    }
}
