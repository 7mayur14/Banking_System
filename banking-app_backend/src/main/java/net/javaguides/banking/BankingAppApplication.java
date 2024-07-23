package net.javaguides.banking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("net.javaguides.banking")
public class BankingAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(BankingAppApplication.class, args);			
	}
}
 