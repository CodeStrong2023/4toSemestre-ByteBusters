package UTN.presentacion;
import UTN.dominio.Estudiante;
import UTN.datos.EstudianteDAO;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false; //Booleano para romper el ciclo while
        Scanner scanner = new Scanner(System.in);
        var estudianteDao = new EstudianteDAO(); //Unica instancia
        while(!salir){
            try {
                mostrarMenu();
                salir = ejecutarOpciones(scanner, estudianteDao);

            } catch (Exception e){
                System.out.println("Ocurrió un error al ejecutar la operación: "+e.getMessage());

            }
        } //Fin while

    }// Fin Main

    private static void mostrarMenu(){
        System.out.print("""
                    ********** SISTEMA DE ESTUDIANTES **********
                    1. Listar estudiantes
                    2. Buscar estudiante
                    3. Agregar estudiante
                    4. Modificar estudiante
                    5. Eliminar estudiante
                    6. Salir
                    Elige una opción: 
                    """);
    } //Fin metodo mostrarMenú

    private static boolean ejecutarOpciones(Scanner scanner, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(scanner.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> {
                System.out.println("Listado de estudiantes");
                var estudiantes = estudianteDAO.listarEstudiantes();
                estudiantes.forEach(System.out::println);
            } //Fin caso 1
            case 2 -> {
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(scanner.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("Estudiante encontrado: "+estudiante);
                else
                    System.out.println("Estudiante NO encontrado: "+estudiante);
            } //Fin caso 2
            case 3 -> {
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = scanner.nextLine();
                System.out.println("Apellido: ");
                var apellido = scanner.nextLine();
                System.out.println("Teléfono: ");
                var telefono = scanner.nextLine();
                System.out.println("Email: ");
                var email = scanner.nextLine();
                //crea objeto estudiante (sin id)
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if(agregado)
                    System.out.println("Estudiante agregado: "+estudiante);
                else
                    System.out.println("Estudiante NO agregado: "+estudiante);
            } //Fin caso 3
            case 4 -> {
                System.out.println("Modificar estudiante: ");
                //primero el id del elemento a modificar
                System.out.println("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(scanner.nextLine());
                System.out.println("Nombre: ");
                var nombre = scanner.nextLine();
                System.out.println("Apellido: ");
                var apellido = scanner.nextLine();
                System.out.println("Teléfono: ");
                var telefono = scanner.nextLine();
                System.out.println("Email: ");
                var email = scanner.nextLine();
                //objeto estudiante
                var estudiante =
                        new Estudiante(idEstudiante,nombre,apellido,telefono,email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: "+estudiante);
                else
                    System.out.println("Estudiante NO modificado: "+estudiante);
            } //Fin caso 4
            case 5 -> {
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(scanner.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("Estudiante eliminado: "+estudiante);
                else
                    System.out.println("Estudiante NO eliminado: "+estudiante);
            } //Fin caso 5
            case 6 -> {
                System.out.println("Hasta pronto!");
                salir = true;
            } //Fin caso 6
            default -> {
                System.out.println("Opción no reconocida, intente con otra opción");
            } //Fin default
        } //Fin switch
        return salir;
    } //Fin ejecutarOpciones

} //Fin clase SistemaEstudiantesApp