package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.fsd.sdp.model.Design;

public interface DesignRepository extends JpaRepository<Design, Integer> {
}