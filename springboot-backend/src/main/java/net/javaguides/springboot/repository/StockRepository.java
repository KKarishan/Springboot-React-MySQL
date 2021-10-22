package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long>{

}
