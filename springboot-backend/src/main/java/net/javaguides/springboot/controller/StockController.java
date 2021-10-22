package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Stock;
import net.javaguides.springboot.repository.StockRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StockController {
	
	@Autowired
	private StockRepository stockRepository;
	
//	get all stocks
	@GetMapping("/stocks")
	public List<Stock> getAllStocks(){
		return stockRepository.findAll();
	}
	
//	create stock rest API
	@PostMapping("/stocks")
	public Stock createStock(@RequestBody Stock stock) {
		return stockRepository.save(stock);
	}
	
//	GET STOCK BY ID REST API
	@GetMapping("/stocks/{stockId}")
	public ResponseEntity<Stock> getStockById(@PathVariable Long stockId) {
		
		Stock stock = stockRepository.findById(stockId)
				.orElseThrow(()-> new ResourceNotFoundException("Stock not exit with stockId:"+stockId));
		return ResponseEntity.ok(stock);
	}
	
//	UPDATE STOCK REST API
	@PutMapping("/stocks/{stockId}")
	public ResponseEntity<Stock> updateStock(@PathVariable Long stockId, @RequestBody Stock stockDetails){
		
		Stock stock = stockRepository.findById(stockId)
				.orElseThrow(()-> new ResourceNotFoundException("Stock not exit with id:"+stockId));
		
		stock.setStockCount(stockDetails.getStockCount());
		stock.setStockDate(stockDetails.getStockDate());
		
		Stock updatedStock = stockRepository.save(stock);
		return ResponseEntity.ok(updatedStock);
	}
}
