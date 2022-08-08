package catchroom.backend.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class President {

    private String name;

    @Id
    @Column(name = "president_id")
    private String email;

    private String password;

    @Embedded
    private Address address;

    private String number;

    @OneToMany(mappedBy = "president", cascade = CascadeType.ALL)
    private List<Room> rooms = new ArrayList<>();

}
