import mundo from '../images/mundo.png';
import personas from '../images/personas.png';
import clientes from '../images/realimentacion.png';
import exito from '../images/exito.png';
import tiempo from '../images/24-7.png';
import dinero from '../images/dinero.png';
const ventajapi = [
    {

        id: 1,
        logo: <img src={mundo} className='iconosvg'></img>,
        title: "Aumenta el alcance de tu negocio",
        info: "Una de las ventajas indiscutibles es que aumenta el alcance de tu negocio, ya que no solo te verán los que vayan de manera directa a tus sucursales u oficinas, sino que cualquier persona con acceso a internet podrán ver lo que ofreces.        .",
    },
    {
        id: 2,
        logo:  <img src={dinero} className='iconosvg'></img>,
        title: "Consigue más con Menos Inversión",
        info: "Como ya mencionamos en el punto anterior, con solo abrir una página web puedes llegar a muchísimas personas. En comparación con los medios tradicionales, obtener esto resultaría muy caro. Por ejemplo, tener una tienda abierta donde mostrar tus productos todo el día sería carísimo.",
    },
    {
        id: 3,
        logo:  <img src={personas} className='iconosvg'></img> ,
        title: "Encontrar nuevos colaboradores",
        info: "Con una página web puedes alcanzar muchas personas, pero no solo clientes, sino también personas que quieran trabajar contigo y hacer crecer tu negocio. Si lo deseas puedes implementar una sección de “trabaja con nosotros” en tu web. De este modo puedes ahorrar grandes cantidades de dinero en realizar una gran convocatoria de trabajo.",
    },
    {
        id: 4,
        logo: <img src={clientes} className='iconosvg'></img> ,
        title: "Encuentras nuevos clientes",
        info: "Gracias al alcance que una web te brinda puedes encontrar siempre nuevos clientes. Ya que ellos al tener una necesidad buscarán en Internet. Y si tienes una página web bien posicionada, pueden dar con tu marca e iniciar una relación comercial. Lo mejor es que al igual que la publicidad boca a boca, una web puede ser recomendada, aumentando así la red de contactos.",
    },
    {
        id: 5,
        logo:  <img src={exito} className='iconosvg'></img> ,
        title: "Da confianza y respaldo a la tienda física",
        info: "Ahora la mayoría de tiendas importantes tienen una página web donde pueden mostrar sus productos y decirles de manera tácita a sus clientes que van de la mano con la tecnología. Esto no solo acerca más a los clientes, sino que también da una imagen de profesionalismo.",
    },
    {
        id: 6,
        logo: <img src={tiempo} className='iconosvg'></img> ,
        title: "Abierto 24/7",
        info: "Una web es un escaparate para tu marca los 365 días del año abierto a toda hora. No hay que pagar trabajadores ni alquiler, solo tener una web bien diseñada. De esta manera un cliente con horarios ajustados puede visitar su sitio a la hora que quiera, por el tiempo que quiera. Sin tener miedo que la tienda cierre o que se sienta acosado por los vendedores.",
    },
];
export default ventajapi;

