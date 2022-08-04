package catchroom.backend.dto;

import lombok.Getter;

@Getter
public class RoomVo {


    private Integer id;
    private String name;

    @Override
    public String toString() {
        return "Room [id=" + id + ", name=" + name + "]";
    }
}
