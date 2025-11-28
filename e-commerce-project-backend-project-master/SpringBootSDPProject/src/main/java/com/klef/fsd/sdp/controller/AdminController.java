package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.Seller;
import com.klef.fsd.sdp.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ✅ Admin Login
    @PostMapping("/checkadminlogin")
    public ResponseEntity<?> checkadminlogin(@RequestBody Admin admin) {
        try {
            Admin a = adminService.checkadminlogin(admin.getUsername(), admin.getPassword());
            if (a != null) {
                return ResponseEntity.ok(a);
            } else {
                return ResponseEntity.status(401).body("Invalid Username or Password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }

    // ✅ View all Customers
    @GetMapping("/viewallcustomers")
    public ResponseEntity<List<Customer>> viewallcustomers() {
        List<Customer> customers = adminService.displaycustomers();
        return ResponseEntity.ok(customers);
    }

    // ✅ Delete a Customer
    @DeleteMapping("/deletecustomer")
    public ResponseEntity<String> deletecustomer(@RequestParam int cid) {
        try {
            String output = adminService.deletecustomer(cid);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Delete Customer: " + e.getMessage());
        }
    }

    // ✅ Add Seller
    @PostMapping("/addseller")
    public ResponseEntity<String> additemseller(@RequestBody Seller seller) {
        try {
            String output = adminService.addseller(seller);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Add Seller: " + e.getMessage());
        }
    }

    // ✅ View all Sellers
    @GetMapping("/viewallsellers")
    public ResponseEntity<List<Seller>> viewallsellers() {
        List<Seller> sellers = adminService.displayitemsellers();
        return ResponseEntity.ok(sellers);
    }

    // ✅ Delete a Seller
    @DeleteMapping("/deleteseller")
    public ResponseEntity<String> deleteseller(@RequestParam int sid) {
        try {
            String output = adminService.deleteseller(sid);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Delete Seller: " + e.getMessage());
        }
    }

    // ✅ Admin Count
    @GetMapping("/admincount")
    public ResponseEntity<Long> getAdminCount() {
        try {
            long count = adminService.getAdminCount();
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(0L);
        }
    }

    // ✅ Seller Count
    @GetMapping("/sellercount")
    public ResponseEntity<Long> getSellerCount() {
        try {
            long count = adminService.getSellerCount();
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(0L);
        }
    }

    // ✅ Customer Count
    @GetMapping("/customercount")
    public ResponseEntity<Long> getCustomerCount() {
        try {
            long count = adminService.getCustomerCount();
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(0L);
        }
    }
}
