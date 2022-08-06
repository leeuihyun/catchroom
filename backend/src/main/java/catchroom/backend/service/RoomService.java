package catchroom.backend.service;

import catchroom.backend.domain.Room;
import catchroom.backend.repository.RoomRepository;
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
    public Integer addRoom(Room room){
        roomRepository.save(room);
        return room.getId();
    }

    //조회 동적쿼리
    public List<Room> findRooms(String search,int offset) { return roomRepository.findSearch(search, offset,20);}

    //한개 조회
    public Room findOne(Integer roomId){

        return roomRepository.findOne(roomId);
    }

    public List<Room> findRoomsSize(String search) {
        return roomRepository.findSearch(search,0,1000);
    }
}
