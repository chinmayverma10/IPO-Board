package com.example.IPOBoard.Services;


import com.example.IPOBoard.DAO.IPODao;
import com.example.IPOBoard.Entities.IPOData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IpoService {

    @Autowired
    private IPODao ipoDao;

    public List<IPOData> getIpo(){
        return  ipoDao.findAll();
    }


    public void addIpo(IPOData ipo){
        ipoDao.save(ipo);
    }

    public void updateIpo(String companyName,IPOData updatedIpo){
        ipoDao.save(updatedIpo);
    }


}


