import "./App.css";

const dishes = [
  {
    name: "Ravioles Caseros",
    price: "$12.990",
    description: "Rellenos de ricotta y espinaca con salsa pomodoro.",
    image: "/imgs/raviolis.avif",
  },
  {
    name: "Ensalada Mediterránea",
    price: "$9.500",
    description: "Tomates cherry, aceitunas, pepino y queso feta.",
    image: "/imgs/ensalada.jpeg",
  },
  {
    name: "Lomo a la Parrilla",
    price: "$18.000",
    description: "Acompañado con papas rústicas y chimichurri.",
    image: "/imgs/lomo.webp",
  },
];

const desserts = [
  {
    name: "Tiramisú",
    price: "$6.000",
    description: "Clásico postre italiano con café y queso mascarpone.",
    image: "/imgs/tiramisu.jpg",
  },
  {
    name: "Cheesecake de Frutos Rojos",
    price: "$5.500",
    description: "Suave cheesecake con salsa de frutos rojos.",
    image: "/imgs/cheese.jpg",
  },
];

const drinks = [
  {
    name: "Mojito",
    price: "$7.000",
    description: "Ron, menta, azúcar, lima y soda.",
    image: "/imgs/mojito.webp",
  },
  {
    name: "Vino Malbec",
    price: "$8.500",
    description: "Copa de vino tinto argentino.",
    image: "/imgs/vino.jpg",
  },
];

const PriceTag = ({ price }) => <div className="price-tag">{price}</div>;

const Section = ({ title, items, sectionId }) => (
  <section className="menu-section" id={sectionId}>
    <h2>{title}</h2>
    {items.map((item, i) => (
      <div className="dish" key={i}>
        <img className="dish-image" src={item.image} alt={item.name} />
        <div className="dish-info">
          <div className="dish-title">
            <h3>{item.name}</h3>
            <PriceTag price={item.price} />
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </section>
);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="overlay">
          <h1 className="restaurant-name">
            Restaurante <br /> El Sabor
          </h1>
          <p className="restaurant-desc">
            Una experiencia gastronómica auténtica
          </p>
        </div>
      </header>

      <section className="menu-filter">
        <h2 className="filter-title">¿Qué deseas pedir?</h2>
        <div className="chip-container">
          <div className="chip-container">
            <button className="chip" onClick={() => scrollToSection("platos")}>
              Platos
            </button>
            <button className="chip" onClick={() => scrollToSection("postres")}>
              Postres
            </button>
            <button className="chip" onClick={() => scrollToSection("tragos")}>
              Tragos
            </button>
          </div>
        </div>
      </section>

      <main className="menu">
        <Section title="Platos" items={dishes} sectionId="platos" />
        <Section title="Postres" items={desserts} sectionId="postres" />
        <Section title="Tragos" items={drinks} sectionId="tragos" />

        <section className="gallery-section">
          <h2>Nosotros</h2>
          <p>
            Somos un restaurant local con más de 20 años de historia y
            tradición, te invitamos a crear recuerdos únicos tan como nuestros
            platos.
          </p>

          <div className="carousel">
            {[
              "/imgs/rest1.png",
              "/imgs/rest2.jpg",
              "/imgs/rest3.jpg",
              "/imgs/rest4.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Foto ${index + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2>Ubicación</h2>
          <p>Dirección: Av. Siempre Viva 123, Chillán</p>
          <div className="map-container">
            <iframe
              title="Ubicación Restaurante El Sabor"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12179.104097155898!2d-72.11722404210876!3d-36.595776501506194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9668d7ce40d1aee7%3A0xcc4e547731967766!2sRestaurante%20Sabor%20a%20Mar!5e1!3m2!1sen!2scl!4v1749744456078!5m2!1sen!2scl"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p>
            Lunes a Jueves 9:00 - 21:00 <br /> Viernes 10:00 - 23:00
          </p>
        </section>
        <section className="contact-section">
          <h2>Contacto</h2>
          <p>Teléfono: +569 12345678</p>
          <p>Email: contacto@elsabor.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
