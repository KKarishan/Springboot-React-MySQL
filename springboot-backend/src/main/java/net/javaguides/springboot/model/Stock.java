package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stocks")
public class Stock{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long stockId;
	
	@Column(name = "stock_count")
	private String stockCount;
	
	@Column(name = "stock_date")
	private String stockDate;
	
	public Stock() {
		
	}
	
	public Stock(String stockCount, String stockDate) {
		super();
		this.stockCount = stockCount;
		this.stockDate = stockDate;
	}
	public long getStockId() {
		return stockId;
	}
	public void setStockId(long stockId) {
		this.stockId = stockId;
	}
	public String getStockCount() {
		return stockCount;
	}
	public void setStockCount(String stockCount) {
		this.stockCount = stockCount;
	}
	public String getStockDate() {
		return stockDate;
	}
	public void setStockDate(String stockDate) {
		this.stockDate = stockDate;
	}
	
}