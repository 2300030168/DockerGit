package com.klef.fsd.sdp.service;

import java.util.List;
import com.klef.fsd.sdp.model.Product;
import com.klef.fsd.sdp.model.Seller;

public interface SellerService {

    // ✅ For login
    public Seller checkSellerLogin(String username, String password);

    // ✅ Fetch Seller Profile by ID
    public Seller getSellerById(int id);

    // ✅ Update Seller Profile (NEWLY ADDED)
    public String updateSeller(Seller seller);   // 🔥 added this

    
    // ✅ Get all products for all sellers
    public List<Product> getAllProducts();

    // ✅ Get products for a specific seller by sellerId
    public List<Product> getProductsBySellerId(int sellerId);  // Changed to accept sellerId instead of Seller object

    // ✅ Delete product by ID
    public String deleteProduct(int productId);
    public String addProduct(Product product);
    
    
    
}
