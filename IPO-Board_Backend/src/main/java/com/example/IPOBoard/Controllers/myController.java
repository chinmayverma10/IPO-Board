package com.example.IPOBoard.Controllers;

import com.example.IPOBoard.Entities.IPOData;
import com.example.IPOBoard.Services.IpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class myController {

    @Autowired
    private IpoService ipoService;

    @GetMapping("/ipo")
    public List<IPOData> getIpo(){
        return this.ipoService.getIpo();
    }

    @PostMapping("/ipo")
    public ResponseEntity<Void> addIpo(@RequestBody IPOData ipo){
        this.ipoService.addIpo(ipo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/ipo/{companyName}")
    public ResponseEntity<Void> updateIpo(@PathVariable String companyName, @RequestBody IPOData updatedIpo){
        System.out.println("Received request for "+companyName);
        ipoService.updateIpo(companyName,updatedIpo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
