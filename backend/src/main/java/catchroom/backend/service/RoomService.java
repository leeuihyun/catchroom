package catchroom.backend.service;

import catchroom.backend.domain.Room;
import catchroom.backend.repository.RoomRepository;
import catchroom.backend.repository.RoomSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    //임시 방 추가
    @Transactional
    public Long addRoom(Room room){
        roomRepository.save(room);
        return room.getId();
    }

    //조회
    public List<Room> findRooms(RoomSearch roomSearch) { return roomRepository.findAll(roomSearch);}

}
