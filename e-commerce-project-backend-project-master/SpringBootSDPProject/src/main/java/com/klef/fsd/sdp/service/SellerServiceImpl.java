package com.klef.fsd.sdp.service;

import com.klef.fsd.sdp.model.Product;
import com.klef.fsd.sdp.model.Seller;
import com.klef.fsd.sdp.repository.ProductRepository;
import com.klef.fsd.sdp.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private ProductRepository productRepository;

    // ✅ For Seller Login
    @Override
    public Seller checkSellerLogin(String username, String password) {
        return sellerRepository.findByUsernameAndPassword(username, password);
    }

    // ✅ Fetch Seller Profile by ID
    @Override
    public Seller getSellerById(int id) {
        Optional<Seller> seller = sellerRepository.findById(id);
        return seller.orElse(null);  // If no seller found, return null
    }

    // ✅ Update Seller Profile
    @Override
    public String updateSeller(Seller seller) {
        Optional<Seller> existingSeller = sellerRepository.findById(seller.getId());
        if (existingSeller.isPresent()) {
            sellerRepository.save(seller);  // Update the seller
            return "Seller profile updated successfully";
        } else {
            return "Seller not found";
        }
    }

    // ✅ Get all products for all sellers
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();  // Fetch all products
    }

    // ✅ Get products for a specific seller by sellerId
    @Override
    public List<Product> getProductsBySellerId(int sellerId) {
        return productRepository.findBySellerId(sellerId);  // Fetch products by sellerId
    }

    // ✅ Delete product by ID
    @Override
    public String deleteProduct(int productId) {
        Optional<Product> product = productRepository.findById(productId);
        if (product.isPresent()) {
            productRepository.delete(product.get());  // Delete the product
            return "Product deleted successfully";
        } else {
            return "Product not found";
        }
    }

    // ✅ Add a new product
    @Override
    public String addProduct(Product product) {
        productRepository.save(product);  // Save the new product
        return "Product added successfully";
    }
}
