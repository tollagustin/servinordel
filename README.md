# servinordel
Página web de Servinordel
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servinordel - Servicios a Domicilio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
        }
        header {
            background-color: #ff6600;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        nav {
            background-color: #000000;
            overflow: hidden;
        }
        nav a {
            float: left;
            display: block;
            color: #ffffff;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }
        nav a:hover {
            background-color: #ff6600;
            color: white;
        }
        .container {
            padding: 20px;
        }
        .services {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .service {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin: 10px;
            padding: 20px;
            flex-basis: 30%;
            box-sizing: border-box;
        }
        footer {
            background-color: #000000;
            color: #ffffff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Servinordel</h1>
        <p>Atención rápida y eficiente. Soluciones confiables y duraderas.</p>
    </header>
    <nav>
        <a href="#about">Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
    </nav>
    <div class="container" id="about">
        <h2>Sobre Nosotros</h2>
        <p>En Servinordel, ofrecemos una amplia gama de servicios a domicilio en Buenos Aires, Tigre y Nordelta. Nuestro equipo de profesionales está dedicado a brindar soluciones rápidas, eficientes y de alta calidad para todas sus necesidades de pintura, arreglos, albañilería, plomería y electricidad.</p>
    </div>
    <div class="container" id="services">
        <h2>Servicios</h2>
        <div class="services">
            <div class="service">
                <h3>Pintura</h3>
                <p>Servicios de pintura interior y exterior para todo tipo de propiedades.</p>
            </div>
            <div class="service">
                <h3>Arreglos</h3>
                <p>Reparaciones y mantenimiento general para mantener su hogar en perfecto estado.</p>
            </div>
            <div class="service">
                <h3>Albañilería</h3>
                <p>Trabajos de albañilería de alta calidad para proyectos grandes y pequeños.</p>
            </div>
            <div class="service">
                <h3>Plomería</h3>
                <p>Soluciones de plomería confiables para cualquier problema de agua o desagüe.</p>
            </div>
            <div class="service">
                <h3>Electricidad</h3>
                <p>Servicios eléctricos seguros y eficientes para su hogar o negocio.</p>
            </div>
        </div>
    </div>
    <div class="container" id="contact">
        <h2>Contacto</h2>
        <p>Teléfono: (011) 3246-3318</p>
        <p>Dirección: Buenos Aires, Tigre, Nordelta</p>
        <p>Correo Electrónico: <a href="mailto:servinordel@gmail.com">servinordel@gmail.com</a></p>
    </div>
    <footer>
        <p>&copy; 2024 Servinordel. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
