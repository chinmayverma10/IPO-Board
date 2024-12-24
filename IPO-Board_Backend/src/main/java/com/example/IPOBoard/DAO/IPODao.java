package com.example.IPOBoard.DAO;

import com.example.IPOBoard.Entities.IPOData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPODao extends JpaRepository<IPOData, String> {


}
