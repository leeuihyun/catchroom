package catchroom.backend.controller;


import catchroom.backend.domain.Address;
import catchroom.backend.domain.President;
import catchroom.backend.service.PresidentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/presidents")
public class PresidentController {

    private final PresidentService presidentService;

    //회원가입
    @PostMapping("/new")
    public ResponseEntity<?> createPresident(@RequestBody MemberForm form){
        Address address = new Address(form.getCity(),
                form.getDistrict(), form.getDetail(), form.getZipcode());

        President president = new President();
        president.setName(form.getName());
        president.setAddress(address);
        president.setEmail(form.getEmail());
        president.setPassword(form.getPassword());
        president.setNumber(form.getNumber());
        presidentService.join(president);

        return new ResponseEntity<>(president, HttpStatus.OK);
    }
}
