package catchroom.backend.repository;


import catchroom.backend.domain.President;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class PresidentRepository {

    private final EntityManager em;

    public void save(President president) {
        em.persist(president);
    }

    public President findOne(String email) {
        return em.find(President.class, email);
    }

    public List<President> findByEmail(String email){
        return em.createQuery("select p from President p where p.id = :email",President.class)
                .setParameter("email",email)
                .getResultList();
    }

    public void delete(President president){em.remove(president);}
}
