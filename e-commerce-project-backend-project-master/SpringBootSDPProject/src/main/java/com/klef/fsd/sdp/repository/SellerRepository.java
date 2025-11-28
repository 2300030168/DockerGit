package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.klef.fsd.sdp.model.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer> 
{
    public Seller findByUsernameAndPassword(String username, String password);
    
   
}
