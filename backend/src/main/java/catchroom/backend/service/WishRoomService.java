package catchroom.backend.service;

import catchroom.backend.config.SecurityUtil;
import catchroom.backend.domain.Member;
import catchroom.backend.domain.Room;
import catchroom.backend.domain.WishRoom;
import catchroom.backend.dto.MemberResponseDto;
import catchroom.backend.repository.MemberImplRepository;
import catchroom.backend.repository.RoomRepository;
import catchroom.backend.repository.WishRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class WishRoomService {

    private final WishRoomRepository wishRoomRepository;

    private final MemberImplRepository memberImplRepository;
    private final RoomRepository roomRepository;
    //찜 기능
    @Transactional
    public MemberResponseDto wish(Integer roomId){
        //엔티티 조회
        Member member = memberImplRepository.findById(SecurityUtil.getCurrentMemberId())
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        Room room = roomRepository.findOne(roomId);
        WishRoom wishRoom = WishRoom.createWish(room);
        wishRoomRepository.save(wishRoom);
        member.createWish(wishRoom);
        return MemberResponseDto.of(memberImplRepository.save(member));
    }
    public List<Room> getWish() {
        //엔티티 조회
        Member member = memberImplRepository.findById(SecurityUtil.getCurrentMemberId())
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));

        return roomRepository.findWish(member.getEmail());
    }

    //찜 취소
    @Transactional
    public List<Room> wishCancel(Integer wishRoomId){
        Member member = memberImplRepository.findById(SecurityUtil.getCurrentMemberId())
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        WishRoom wishRoom = wishRoomRepository.findOne(wishRoomId);
        log.info(member.getEmail()+"::"+wishRoom.getId());
        wishRoom.cancel(member);

        log.info("status :" + wishRoom.getStatus());
        return roomRepository.findWish(wishRoom.getMember().getEmail());
    }
}
