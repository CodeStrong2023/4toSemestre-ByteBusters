
@Service
public class libroServicio implements IlibroServicio{
    @Autowired
    private LibroRepositorio libroRepositorio;  

    @Override
    public List<Libro> listarLibros(){
        return libroRepositorio.findAll();
    }

    @Override
    public Libro buscarLibroPorId(Integer idLibro){
        Libro libro = libroRepositorio.findById(idLibro).orElse(null);
        return libro;
    }

    @Override
    public void guardarLibro(Libro libro){
        libroRepositorio.save(libro);
    }

    @Override
    public void eliminarLibro(Libro libro){
        libroRepositorio.delete(libro);
    }

}
