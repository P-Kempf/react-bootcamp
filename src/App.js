import ContactosComponente from "./componentes/contenedores/contactos";
import Contacto from "./class/Contacto.class";
function App() {
  const contactoPrueba = new Contacto(
    "Juan",
    "salazar",
    "juansalazar@gmail.com",
    false
  );
  return (
    <div className="App">
      <ContactosComponente contacto={contactoPrueba}></ContactosComponente>
    </div>
  );
}

export default App;
