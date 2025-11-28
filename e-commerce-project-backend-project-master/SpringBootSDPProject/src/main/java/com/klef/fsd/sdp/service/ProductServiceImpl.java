
package com.klef.fsd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Product;
import com.klef.fsd.sdp.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService
{
	@Autowired
	private ProductRepository productRepository;

	@Override
	public String addProduct(Product product) {
	    try {
	        productRepository.save(product);
	        return "Product Added Successfully";
	    } catch (Exception e) {
	        e.printStackTrace();
	        return "Error while saving product: " + e.getMessage();
	    }
	}


	@Override
	public List<Product> viewallProduct() 
	{
	    return productRepository.findAll();
	}

	@Override
	public Product viewProductById(int pid) 
	{
	   return productRepository.findById(pid).orElse(null);
	}

	@Override
	public List<Product> viewProductsByCategory(String category) 
	{
		return productRepository.findByCategory(category);
	}
	@Override
	public String deleteProduct(int id) {
	    Product p = productRepository.findById(id).orElse(null);
	    if (p != null) {
	        productRepository.deleteById(id);
	        return "Product with ID " + id + " deleted successfully.";
	    } else {
	        return "Product with ID " + id + " not found.";
	    }

}
}