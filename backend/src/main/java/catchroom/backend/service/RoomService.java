package catchroom.backend.service;

import catchroom.backend.domain.Room;
import catchroom.backend.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


}
