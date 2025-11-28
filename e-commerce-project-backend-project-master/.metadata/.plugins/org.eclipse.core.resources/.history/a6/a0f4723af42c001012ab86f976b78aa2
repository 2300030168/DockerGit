package com.klef.fsd.sdp.controller;

import com.klef.fsd.sdp.model.Product;
import com.klef.fsd.sdp.model.Seller;
import com.klef.fsd.sdp.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.sql.Blob;
import java.util.List;

@RestController
@RequestMapping("/seller")
@CrossOrigin(origins = "*")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    // ✅ Seller Login
    @PostMapping("/checksellerlogin")
    public ResponseEntity<?> checkSellerLogin(@RequestBody Seller seller) {
        Seller foundSeller = sellerService.checkSellerLogin(seller.getUsername(), seller.getPassword());
        if (foundSeller != null) {
            return ResponseEntity.ok(foundSeller);
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    // ✅ Fetch Seller Profile by ID
    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getSellerProfile(@PathVariable int id) {
        try {
            Seller seller = sellerService.getSellerById(id);
            if (seller != null) {
                return ResponseEntity.ok(seller);
            } else {
                return ResponseEntity.status(404).body("Seller not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to fetch seller profile: " + e.getMessage());
        }
    }

    // ✅ Update Seller Profile (excluding username and email)
    @PutMapping("/updateprofile")
    public ResponseEntity<?> updateSellerProfile(@RequestBody Seller updatedSeller) {
        try {
            Seller existingSeller = sellerService.getSellerById(updatedSeller.getId());

            if (existingSeller == null) {
                return ResponseEntity.status(404).body("Seller not found");
            }

            // Update allowed fields
            existingSeller.setName(updatedSeller.getName());
            existingSeller.setGender(updatedSeller.getGender());
            existingSeller.setDob(updatedSeller.getDob());
            existingSeller.setMobileno(updatedSeller.getMobileno());
            existingSeller.setCompany_name(updatedSeller.getCompany_name());
            existingSeller.setCompany_location(updatedSeller.getCompany_location());

            String result = sellerService.updateSeller(existingSeller);
            return ResponseEntity.ok(result);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to update seller profile: " + e.getMessage());
        }
    }

    // ✅ Get All Products
    @GetMapping("/viewallproducts")
    public ResponseEntity<?> getviewAllProducts() {
        try {
            List<Product> products = sellerService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to fetch products: " + e.getMessage());
        }
    }

    // ✅ Get Products by Seller ID
    @GetMapping("/products/{sellerId}")
    public ResponseEntity<?> getProductsBySeller(@PathVariable int sellerId) {
        try {
            List<Product> products = sellerService.getProductsBySellerId(sellerId);
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to fetch seller products: " + e.getMessage());
        }
    }

    // ✅ Delete Product
    @DeleteMapping("/deleteproduct")
    public ResponseEntity<?> deleteProduct(@RequestParam int productId) {
        try {
            String result = sellerService.deleteProduct(productId);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to delete product: " + e.getMessage());
        }
    }
}
