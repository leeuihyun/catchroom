package catchroom.backend.repository;

import catchroom.backend.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member){
        em.persist(member);
    }

    public Member findOne(String identity){
        return em.find(Member.class,identity);
    }

    public List<Member> findByIdentity(String identity) {
        return em.createQuery("select m from Member m where m.id = :id", Member.class)
                .setParameter("id", identity)
                .getResultList();
    }
}
