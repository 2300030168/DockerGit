package com.klef.fsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.klef.fsd.sdp.dto.DesignDTO;
import com.klef.fsd.sdp.model.Design;
import com.klef.fsd.sdp.repository.DesignRepository;

@Service
public class DesignServiceImpl implements DesignService {

    @Autowired
    private DesignRepository designRepository;

    @Override
    public String saveDesign(DesignDTO dto) {
        Design design = new Design();
        design.setCategory(dto.getCategory());
        design.setColor(dto.getColor());
        design.setDesignName(dto.getDesignName());
        design.setDescription(dto.getDescription());
        design.setImage(dto.getImage());
        designRepository.save(design);
        return "Design submitted successfully";
    }
}