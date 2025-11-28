package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.Seller;

public interface AdminService 
{
    // Existing methods
    public Admin checkadminlogin(String username, String password);
    
    public String addseller(Seller seller);
    public List<Seller> displayitemsellers();
    public String deleteseller(int sid);

    public List<Customer> displaycustomers();
    public String deletecustomer(int cid);

    // ✅ New methods for dashboard counts
    public int getAdminCount();
    public long getSellerCount();
    public long getCustomerCount();
}
