package catchroom.backend.dto;

import catchroom.backend.domain.Member;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class MemberResponseDto {
    private String email;
    private String name;
    private String number;
    private String city;

    public static MemberResponseDto of(Member member) {


        return MemberResponseDto.builder()
                .email(member.getEmail())
                .name(member.getName())
                .city(member.getAddress().getCity())
                .number(member.getNumber())
                .build();
    }

//    @Override
//    public String toString() {
//        return "MemberVo [email=" + email + ", name=" + name + ", number=" + number + ", city="+
//                city+", wishes="+ wishes + "]";
//    }
}