package catchroom.backend.repository;

import catchroom.backend.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberImplRepository extends JpaRepository<Member,String> {
    Optional<Member> findByEmail(String email);
    boolean existsByEmail(String email);
}
