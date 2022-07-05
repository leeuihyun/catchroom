package catchroom.backend.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class President {

    @Id @GeneratedValue
    @Column(name = "president_id")
    private Long id;

    private String name;

    private String password;

    @Embedded
    private Address address;

    private String number;

    @OneToMany(mappedBy = "president")
    private List<Room> rooms = new ArrayList<>();

}
