package catchroom.backend.repository;

import catchroom.backend.domain.President;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface PresidentImplRepository extends JpaRepository<President,String> {
    Optional<President> findByEmail(String email);
    boolean existsByEmail(String email);
}
