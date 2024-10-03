import javax.annotation.processing.Generated;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Data;
import jakarta.persistence.NoArgConstructor;
import jakarta.persistence.AllArgConstructor;
import jakarta.persistence.ToString;
@Entity
//boilerplate - Repetitivo
@Data
@NoArgConstructor
@AllArgConstructor
@ToString
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GeneratedType.IDENTITY)
    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
