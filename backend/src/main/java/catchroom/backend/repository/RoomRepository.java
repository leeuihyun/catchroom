package catchroom.backend.repository;


import catchroom.backend.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class RoomRepository {

    private final EntityManager em;

    public void save(Room room) {
        em.persist(room);
    }

    public Room findOne(Long roomId){
        return em.find(Room.class,roomId);
    }
}
