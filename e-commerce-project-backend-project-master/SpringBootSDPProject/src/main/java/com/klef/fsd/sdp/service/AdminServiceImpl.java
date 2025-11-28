package com.klef.fsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.Seller;
import com.klef.fsd.sdp.repository.AdminRepository;
import com.klef.fsd.sdp.repository.CustomerRepository;
import com.klef.fsd.sdp.repository.SellerRepository;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Admin checkadminlogin(String username, String password) {
        return adminRepository.findByUsernameAndPassword(username, password);
    }

    @Override
    public String addseller(Seller seller) {
        sellerRepository.save(seller);
        return "Item Seller Added Successfully";
    }

    @Override
    public List<Seller> displayitemsellers() {
        return sellerRepository.findAll();
    }

    @Override
    public List<Customer> displaycustomers() {
        return customerRepository.findAll();
    }

    @Override
    public String deletecustomer(int cid) {
        Optional<Customer> customer = customerRepository.findById(cid);
        if (customer.isPresent()) {
            customerRepository.deleteById(cid);
            return "Customer Deleted Successfully";
        } else {
            return "Customer ID Not Found";
        }
    }

    @Override
    public String deleteseller(int sid) {
        Optional<Seller> seller = sellerRepository.findById(sid);
        if (seller.isPresent()) {
            sellerRepository.deleteById(sid);
            return "Seller Deleted Successfully";
        } else {
            return "Seller ID Not Found";
        }
    }

    // ✅ Get admin count
    @Override
    public int getAdminCount() {
        return (int) adminRepository.count();
    }

    // ✅ Get seller count
    @Override
    public long getSellerCount() {
        return sellerRepository.count();
    }

    // ✅ Get customer count
    @Override
    public long getCustomerCount() {
        return customerRepository.count();
    }
}
