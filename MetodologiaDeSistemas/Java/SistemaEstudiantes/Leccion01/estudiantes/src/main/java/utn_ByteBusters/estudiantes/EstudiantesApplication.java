package utn_ByteBusters.estudiantes;
import java.util.Scanner;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mysql.cj.log.Log;

import UTN.dominio.Estudiante;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner{

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator();

	public static void main(String[] args) {
		
		logger.info("Iniciando la aplicación...");
		//Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicación finalizada");
	}

	@Override
	public void run() throws Exception{
		logger.info(nl+"Ejecutando el matodo run de Spring"+nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while (!salir) {
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}
	}

	private void mostrarMenu(){
		logger.info(nl);
		logger.info("""
				----SISTEMA ESTUDIANTES----
				1.Listar Estudiante
				2.Buscar Estudiante
				3.Agregar Estudiante
				4.Modificar Estudiante
				5.Eliminar Estudiante
				6.Salir
				Eliga una opcion:""");
	}

	private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion) {
			case 1 -> {//Listar Estudiantes
				logger.info(nl+"Listado de estudiantes: "+nl);
				List<Estudiante> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
			}		
			case 2 -> {//Buscar Estudiante por Id
				logger.info("Coloque el id del estudiante a buscar: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiante estudiante = estudianteServicio.BuscarEsrudiantePorId(IdEstudiante);
				if(estudiante != null)
					logger.info("Estudiante encontrado: "+ estudiante + nl);
				else
					logger.info("Estudiante NO encontrado: "+ estudiante + nl);
			} 
			case 3 -> {//Agregar Estudiante
				logger.info("Agregar Estudiante: "+ nl);
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				//Crear el objeto estudiante sin el Id
				var estudiante = new Estudiante();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Estudiante agreado: "+estudiante+nl);
			}
			case 4 -> {//Modificar Estudiante
				logger.info("Modificar Estudiante: "+nl);
				logger.info("Coloque el Id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				//buscamos el estudiante a modificar
				Estudiante estudiante = estudianteServicio.BuscarEsrudiantePorId(idEstudiante);
				if (estudiante != null) {
					logger.info("Nombre: ");
					var nombre = consola.nextLine();
					logger.info("Apellido: ");
					var apellido = consola.nextLine();
					logger.info("Telefono: ");
					var telefono = consola.nextLine();
					logger.info("Email: ");
					var email = consola.nextLine();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante modificado: "+estudiante+nl);
				}
				else
					logger.info("Estudiante NO encontrado con el id: "+idEstudiante+nl);
			}
			case 5 -> {//Eliminar Estudiante
				logger.info("Eliminar estudiante: "+nl);
				logger.info("Coloque el id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				//Buscamos el id del estudiante a eliminar
				var estudiante = estudianteServicio.BuscarEsrudiantePorId(idEstudiante);
				if (estudiante != null) {
					estudianteServicio.eliminarEstudiante(estudiante);
					logger.info("Estudiante Eliminado: "+estudiante+nl);
				}
				else
					logger.info("Estudiante NO encontrado por id: "+estudiante+nl);
			}
			case 6 -> {//Salir
				logger.info("Adios, has salido"+nl+nl);
				salir = true;
			}
			default -> logger.info("Opcion no reconocida: "+opcion+nl);
		}
		return salir;
	}

}
