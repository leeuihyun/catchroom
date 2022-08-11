package catchroom.backend.service;

import catchroom.backend.config.SecurityUtil;
import catchroom.backend.domain.President;
import catchroom.backend.domain.Room;
import catchroom.backend.dto.PresidentResponseDto;
import catchroom.backend.repository.PresidentImplRepository;
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
    private final PresidentImplRepository presidentImplRepository;
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


    public PresidentResponseDto loginFind(String email){
        return presidentImplRepository.findById(email).map(PresidentResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 에러"));
    }

    //토큰 방식 정보 넘기기
    public PresidentResponseDto getMyInfoBySecurity() {
        return presidentImplRepository.findById(SecurityUtil.getCurrentMemberId())
                .map(PresidentResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }

    @Transactional
    public Room createRoom(String presidentId){
        President president = presidentRepository.findOne(presidentId);
        Room room = Room.createRoom(president);
        room.setPresident(president);

        return room;
    }

}
