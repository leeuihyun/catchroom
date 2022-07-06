package catchroom.backend.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address {

    private String city; //도시
    private String district; //구

    @Column(name = "address_detail")
    private String detail; //상세 주소
    private String zipcode; //우편 번호

    protected Address(){
    }

    public Address(String city, String district, String detail, String zipcode) {
        this.city = city;
        this.district = district;
        this.detail = detail;
        this.zipcode = zipcode;
    }
}
