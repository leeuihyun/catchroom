package catchroom.backend.domain;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Embeddable;

@Embeddable
@Getter @Setter
@ToString
public class Room_info {


    private String 주소;
    private String 대학교;
    private String 가격;
    private String 룸타입;
    private String 면적;
    private String 층;
    private String 방_화장실;
    private String 관리비;
}
