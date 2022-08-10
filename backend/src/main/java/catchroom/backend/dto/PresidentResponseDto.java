package catchroom.backend.dto;

import catchroom.backend.domain.President;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PresidentResponseDto {
    private String email;
    private String name;
    private String number;
    private String city;

    public static PresidentResponseDto of(President president) {


        return PresidentResponseDto.builder()
                .email(president.getEmail())
                .name(president.getName())
                .city(president.getAddress().getCity())
                .number(president.getNumber())
                .build();
    }
}
