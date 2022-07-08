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

    public Member findOne(String email){
        return em.find(Member.class,email);
    }

    public List<Member> findByIdentity(String email) {
        return em.createQuery("select m from Member m where m.id = :email", Member.class)
                .setParameter("email", email)
                .getResultList();
    }

    public void delete(Member member) {em.remove(member); }
}
