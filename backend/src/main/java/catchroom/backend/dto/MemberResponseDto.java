package catchroom.backend.dto;

import catchroom.backend.domain.Member;
import catchroom.backend.domain.WishRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberResponseDto {
    private String email;
    private String name;
    private String number;
    private String city;


    private List<WishRoom> wishes;
    public static MemberResponseDto of(Member member) {


        return MemberResponseDto.builder()
                .email(member.getEmail())
                .name(member.getName())
                .city(member.getAddress().getCity())
                .number(member.getNumber())
                .build();
    }
}