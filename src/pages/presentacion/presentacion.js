import styles from "./presentacion.module.css";

const Presentacion = () => {
  return (
    <div className={styles.presentacion}>
      {/* Portada */}
      <header>
        <h1>SIC - Servicios Informáticos Carrasco</h1>
      </header>

      {/* Misión */}
      <section>
        <h2>Misión</h2>
        <div className={styles.contentBlock}>
          <img src="/imgs/mision.jpg" alt="Misión" />
          <div>
            En SIC, nuestra misión es brindar valor y visibilidad digital a
            nuestros clientes mediante el diseño y desarrollo de páginas web
            afines a sus servicios.
          </div>
        </div>
      </section>

      {/* Visión */}
      <section>
        <h2>Visión</h2>
        <div className={styles.contentBlock}>
          <img src="/imgs/vision.avif" alt="Visión" />
          <div>
            Nuestra visión es ser líderes en entregar presencia digital a
            pequeñas y medianas empresas a lo largo del país.
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section>
        <h2>Servicios</h2>
        <div className={styles.servicios}>
          <div className={styles.servicio}>
            <h3>
              Página Web para servicios – <span>Con Mantención Semanal</span>
            </h3>
            <p>
              Este plan incluye una página web con dominio personalizado, y
              mantenciones semanales como cambios de información, fotos, etc.
            </p>
            <span>Tiene un costo mensual + creación de la página</span>
          </div>

          <div className={styles.servicio}>
            <h3>
              Página Web para servicio – <span>Sin Mantención</span>
            </h3>
            <p>
              Este plan incluye solamente la creación de la página web, que
              tendrá un dominio unido a un prefijo. No incluye mantenciones
              semanales.
            </p>
            <span>Solo costo de creación</span>
          </div>

          <div className={styles.servicio}>
            <h3>
              Página web para Carta - <span>Con Mantención Semanal</span>
            </h3>
            <p>
              Este plan incluye una página web para mostrar la carta y/o eventos
              si el local tiene, con un dominio propio, y mantenciones semanales
              como actualización de carta, fotos, eventos, etc.
            </p>
            <span>Tiene un costo mensual + creación de la página</span>
          </div>

          <div className={styles.servicio}>
            <h3>
              Demo -{" "}
              <span
                onClick={() => {
                  window.open("/carta", "_blank");
                }}
              >
                Haz click acá
              </span>
            </h3>
            <p>
              En nuestra Demo puede ver el ejemplo de como puede quedar una
              carta, aunque el estilo y estructura de esta página depende de
              cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section>
        <h2>Contacto</h2>
        <div className={styles.contacto}>
          <p>
            <strong>Correo:</strong>{" "}
            <a href="mailto:aaroncarrasco.sic@gmail.com">Enviar correo</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/56953745275?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensaje
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/sic_empresa"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sic_empresa
            </a>
          </p>
        </div>
      </section>

      <footer>© 2025 SIC - Servicios Informáticos Carrasco</footer>
    </div>
  );
};

export default Presentacion;
