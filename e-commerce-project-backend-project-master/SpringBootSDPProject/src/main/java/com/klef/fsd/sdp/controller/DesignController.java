package com.klef.fsd.sdp.controller;

import com.klef.fsd.sdp.dto.DesignDTO;
import com.klef.fsd.sdp.model.Design;
import com.klef.fsd.sdp.repository.DesignRepository;
import com.klef.fsd.sdp.service.DesignService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*") // Allow React frontend
@RequestMapping("/api/design")
public class DesignController {

    @Autowired
    private DesignService designService;

    @PostMapping("/submit")
    public String submitDesign(@RequestParam("category") String category,
                                @RequestParam("color") String color,
                                @RequestParam("designName") String designName,
                                @RequestParam("description") String description,
                                @RequestParam("image") MultipartFile image) {
        try {
            DesignDTO dto = new DesignDTO();
            dto.setCategory(category);
            dto.setColor(color);
            dto.setDesignName(designName);
            dto.setDescription(description);
            dto.setImage(image.getBytes());
            return designService.saveDesign(dto);
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
    
    
    
    @Autowired
    private DesignRepository designRepository; // ✅ autowired instance

    @GetMapping("/all")
    public List<DesignDTO> getAllDesigns() {
        List<Design> designs = designRepository.findAll(); // ✅ correct usage

        List<DesignDTO> dtos = new ArrayList<>();
        for (Design d : designs) {
            DesignDTO dto = new DesignDTO();
            dto.setCategory(d.getCategory());
            dto.setColor(d.getColor());
            dto.setDesignName(d.getDesignName());
            dto.setDescription(d.getDescription());
            dto.setImage(d.getImage());
            dtos.add(dto);
        }
        return dtos;
    }
    
}