document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          `<div class="inicio-restaurante">
    <h2>Restaurante Paisa</h2>
    <div class="imagenes">
        <img src="restaurantes-1.jpg" alt="Interior del Restaurante">
        <img src="platos tipicos.jfif" alt="Platos Típicos Paisas">
    </div>
    <p>Bienvenidos al Restaurante Paisa, donde podrás disfrutar de la auténtica gastronomía paisa en un ambiente acogedor y familiar.</p>
</div>`
        break;
      case "menu":
        mainContent.innerHTML =
        `  <div class="catalogo">
          <div class="plato">
              <img src="empanadas.jpg" alt="Empanadas Paisas">
              <h3>Empanadas Paisas</h3>
              <p>Precio: $6.00</p>
          </div>
          <div class="plato">
              <img src="bandeja-paisa-.webp" alt="Bandeja Paisa">
              <h3>Bandeja Paisa</h3>
              <p>Precio: $15.00</p>
          </div>
          <div class="plato">
              <img src="ajiaco.webp" alt="Ajiaco Santafereño">
              <h3>Ajiaco Santafereño</h3>
              <p>Precio: $12.00</p>
          </div>
          <!-- Aquí puedes añadir más platos según sea necesario -->
      </div> `;
        break;
      case "about":
        mainContent.innerHTML =
          "<h1>Sobre Nosotros</h1><p>Conoce más sobre nuestra historia.</p>";
        break;
      case "contact":
        mainContent.innerHTML =
          "<h1>Contacto</h1><p>3145543218</p>";
        break;
        case "PAGO":
        mainContent.innerHTML =
        `<div class="forma-pago">
        <img src="efectivo.avif" alt="Efectivo">
        <h3>Efectivo</h3>
    </div>
    <div class="forma-pago">
        <img src="tarjetas-de-credito.webp" alt="Tarjeta de Crédito">
        <h3>Tarjeta de Crédito</h3>
    </div>
    <div class="forma-pago">
        <img src="BBVA-tarjeta-aqua.avif" alt="Tarjeta de Débito">
        <h3>Tarjeta de Débito</h3>
    </div>
    <div class="forma-pago">
        <img src="paypal.jfif" alt="PayPal">
        <h3>PayPal</h3>
    </div>`

        break;
        case "ubicación":
          mainContent.innerHTML =
          `<div class="direccion">
          <h3>Restaurante Paisa La Antioqueñita</h3>
          <p>Carrera 45 # 67-89, Medellín, Colombia</p>
      </div>
      <div class="direccion">
          <h3>Asadero El Paisa</h3>
          <p>Calle 12 # 34-56, Envigado, Colombia</p>
      </div>
      <div class="direccion">
          <h3>La Fonda Paisa</h3>
          <p>Transversal 18 # 23-45, Sabaneta, Colombia</p>
      </div>`

         break;
          break;
    }
  }
});
