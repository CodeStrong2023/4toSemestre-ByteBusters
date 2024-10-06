public class libroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;

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
    }
}
