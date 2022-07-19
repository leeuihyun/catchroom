package catchroom.backend.service;

import catchroom.backend.domain.President;
import catchroom.backend.domain.Room;
import catchroom.backend.repository.PresidentRepository;
import catchroom.backend.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PresidentService {

    private final PresidentRepository presidentRepository;
    private final RoomRepository roomRepository;

    @Transactional
    public String join(President president){
        validateDuplicatePresident(president);
        presidentRepository.save(president);

        return president.getEmail();
    }


    private void validateDuplicatePresident(President president){
        List<President> findPresident = presidentRepository.findByEmail(president.getEmail());
        if(!findPresident.isEmpty())
            throw  new IllegalStateException("이미 존재하는 회원입니다.");
    }


    @Transactional
    public Room createRoom(String presidentId){
        President president = presidentRepository.findOne(presidentId);
        Room room = Room.createRoom(president);
        room.setPresident(president);


        return room;
    }

}
