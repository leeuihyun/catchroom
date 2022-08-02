package catchroom.backend.repository;


import catchroom.backend.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RoomRepository {

    private final EntityManager em;

    public void save(Room room) {
        em.persist(room);
    }

    public Room findOne(Integer roomId){
        return em.find(Room.class,roomId);
    }

    public List<Room> findAll(RoomSearch roomSearch) {
        return em.createQuery("select r from Room r join r.address a" +
                        "a.address like :address", Room.class)
                .setParameter("address", roomSearch.getAddressName())
                .setMaxResults(1000)
                .getResultList();

    }
}
