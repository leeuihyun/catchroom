package catchroom.backend.repository;

import catchroom.backend.domain.WishRoom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor

public class WishRoomRepository {

    private final EntityManager em;
    public void save(WishRoom wishRoom){
        em.persist(wishRoom);
    }

    public WishRoom findOne(Integer id) {
        return em.find(WishRoom.class,id);
    }
    public void delete(WishRoom wishRoom){
        em.remove(wishRoom);
    }
}
