public interface IlibroServicio {
    public List<Libro> listarLibros();

    public Libro buscarLibroPorId(Integer idLibro);

    public void guargarLibro(Libro libro);

    public void eliminarLibro(Libro libro);
}
