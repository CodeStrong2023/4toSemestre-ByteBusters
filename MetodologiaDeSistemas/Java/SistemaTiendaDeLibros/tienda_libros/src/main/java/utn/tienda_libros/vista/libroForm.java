import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;

import org.hibernate.boot.model.internal.XMLContext.Default;
import org.springframework.stereotype.Component;

import lombok.val;

@Component
public class libroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public libroForm(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperaion(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900,700);
        Toolkit toolkit = Toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getHeight()/2);
        setLocation(x, y);

    }

    private void createUIComponents(){
        this.tablaModeloLibros = new DefaultTableModel(0,5);
        String[] cabecera = {"ID","Libros","Autor","Precio","Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        this.tablaLibros = new JTable(tablaModeloLibros);
        listarLibros();
    }

    private void listarLibros(){
        //Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener los Libros de la base de datos
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libro.forEach((Libro) ->{
            //Creamos cada registro para agregarlos a la tabla
            Object[] reglonLibro = {
                libro.getIdLibro(),
                libro.getNombreLibro(),
                libro.getAutor(),
                libro.getPrecio(),
                libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(reglonLibro);
        });
    }
}
