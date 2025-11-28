package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.Customer;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>
{
  public Customer findByUsernameAndPassword(String username, String password);

  public Optional<Customer> findByUsername(String username);  // ✅ Added for profile retrieval

  @Query("select c from Customer c where c.gender=?1")
  public List<Customer> displaycustomerbygender(String gender);

  @Modifying
  @Transactional
  @Query("delete from Customer c where c.location=?1")
  public Long deletecustomerbylocation(String location);
}
