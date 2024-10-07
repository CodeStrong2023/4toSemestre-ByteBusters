package utn.tienda_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class TiendaLibrosApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext contextoSpring = 
			new SpringApplicationBuilder(TiendaLibrosApplication.class)	
				.headless(false)
				.web(WebApplicationType.NONE)
				.run(args);

		java.awt.EventQueue.invokeLater(() ->{//Metodo Lambda
			//Obtenemos el objeto form a travez del Sping
			LibroForm libroForm = contextoSpring.getBean(LibroForm.class);
			libroForm.setVisible(true);
		});
	}

}
