package catchroom.backend.controller;

import catchroom.backend.domain.Room;
import catchroom.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RoomController {

    private final RoomService roomService;

    //찜목록 임시
    @GetMapping("/rooms")
    public ResponseEntity<?> roomSearch(@RequestParam("search") String search){

        List<Room> getWish = roomService.findRooms(search);

        return ResponseEntity.ok(getWish);
    }
}
