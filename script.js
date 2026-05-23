/* ============================================================
   EDUCLIC — script.js 
   ========================================================== */
   const API_URL = "https://6a03dbbc2afe8349b4b58ebc.mockapi.io/api/v1/Equipo";

async function cargarEquipo() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data); // ✅ útil para ver qué trae

    const container = document.getElementById("equipo-container");

    container.innerHTML = data.map(persona => `
      <div class="card">
        <img src="${persona.Foto}" alt="Foto" width="100">
        <h3>${persona.Nombre}</h3>
        <p><strong>Rol:</strong> ${persona.Rol}</p>
        <p>${persona.Descripcion}</p>
      </div>
    `).join('');

  } catch (error) {
    console.error("Error cargando equipo:", error);
  }
}

/* ============================================================
   1. DATOS — Credenciales y base de cursos
============================================================ */
const VALID_USER = "educlic";
const VALID_PASS = "1234";

const COURSES_DB = {
  dev: {
    title: "💻 Desarrollo de Software",
    courses: [
      {
        id: "html-css",
        name: "HTML y CSS",
        icon: "🌐",
        shortDesc: "Construye páginas web desde cero.",
        desc: "Aprende los fundamentos del desarrollo web: estructura con HTML5 y estilo con CSS3. Crearás layouts modernos, formularios y animaciones desde cero.",
        price: "$299.000 COP",
        video: "https://www.youtube.com/embed/iWfncDG3M90",
        teacher: {
          name: "Carlos Mendoza",
          bio: "Desarrollador frontend con 10 años de experiencia. Ha trabajado en startups de Silicon Valley y actualmente imparte cursos en universidades de América Latina.",
           img: ""
        }
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "⚡",
        shortDesc: "Domina el lenguaje de la web.",
        desc: "Desde variables y funciones hasta manipulación del DOM, eventos y fetch. Al final construirás una aplicación web interactiva completa.",
        price: "$345.000 COP",
        video: "https://www.youtube.com/embed/W6NZfCO5SIk",
        teacher: {
          name: "Jose Lopez",
          bio: "Ingeniera de software especializada en JavaScript y Node.js. Contribuidora activa en proyectos open source y mentora en bootcamps de programación.",
           img: ""
        }
      },
      {
        id: "java",
        name: "Java",
        icon: "☕",
        shortDesc: "Programación orientada a objetos.",
        desc: "Domina uno de los lenguajes más demandados. Aprenderás POO, colecciones, excepciones y conexión con bases de datos usando JDBC.",
        price: "$399.000 COP",
        video: "https://www.youtube.com/embed/eIrMbAQSU34",
        teacher: {
          name: "Andrés Torres",
          bio: "Arquitecto de software con 15 años de experiencia en Java Enterprise. Certificado Oracle y conferencista en eventos internacionales de tecnología.",
           img: ""
        }
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: "🗄️",
        shortDesc: "Gestión y consulta de bases de datos.",
        desc: "Aprende a diseñar bases de datos relacionales, escribir consultas SQL complejas, optimizar rendimiento y administrar usuarios y permisos.",
        price: "$247.000 COP",
        video: "https://www.youtube.com/embed/7S_tz1z_5bA",
        teacher: {
          name: "Mario Castillo",
          bio: "DBA certificada en MySQL y PostgreSQL. Con experiencia en empresas de e-commerce manejando bases de datos de millones de registros diarios.",
           img: ""
        }
      }
    ]
  },
  design: {
    title: "🎨 Diseño Gráfico",
    courses: [
      {
        id: "fundamentos",
        name: "Fundamentos de Diseño",
        icon: "🖼️",
        shortDesc: "Teoría del color, tipografía y composición.",
        desc: "Comprende los principios esenciales del diseño visual: jerarquía, contraste, ritmo, color y tipografía. La base para cualquier área del diseño.",
        price: "$190.000 COP",
        video: "https://www.youtube.com/embed/YqQx75OPRa0",
        teacher: {
          name: "Valentina Cruz",
          bio: "Diseñadora con maestría en Comunicación Visual. Ha trabajado para agencias creativas en Colombia y España, especializada en branding y diseño editorial.",
          img: "imagenes/Valentina-Cruz.svg"
        }
      },
      {
        id: "photoshop",
        name: "Photoshop",
        icon: "🖌️",
        shortDesc: "Edición profesional de imágenes.",
        desc: "Domina Photoshop desde cero: capas, máscaras, retoque fotográfico, composición y exportación para web y print. Proyectos reales en cada módulo.",
        price: "$293.000 COP",
        video: "https://www.youtube.com/embed/SU9CvRsECVQ",
        teacher: {
          name: "Miguel Rojas",
          bio: "Retocador fotográfico profesional con clientes en la industria de la moda y publicidad. Adobe Certified Expert y tutor con más de 50.000 estudiantes.",
          img: "imagenes/Miguel-Rojas.svg"
        }
      },
      {
        id: "illustrator",
        name: "Illustrator",
        icon: "✏️",
        shortDesc: "Ilustración vectorial profesional.",
        desc: "Crea logotipos, iconos, ilustraciones e infografías con Illustrator. Aprende a usar la pluma, trazados, degradados y tipografía vectorial.",
        price: "$240.000 COP",
        video: "https://www.youtube.com/embed/Ib8UBwu3yGA",
        teacher: {
          name: "Diana Morales",
          bio: "Ilustradora y diseñadora de identidad visual. Sus trabajos han sido publicados en revistas internacionales y ha creado marcas para más de 200 empresas.",
          img: "imagenes/Diana-Morales.svg"
        }
      },
      {
        id: "uxui",
        name: "UX/UI Design",
        icon: "📱",
        shortDesc: "Diseña experiencias digitales centradas en el usuario.",
        desc: "Aprende metodologías UX (investigación, wireframes, prototipos) y principios UI (sistemas de diseño, componentes, accesibilidad) usando Figma.",
        price: "$440.000 COP",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
        teacher: {
          name: "Camilo Sánchez",
          bio: "UX Lead en una fintech con presencia en 12 países. Experto en Design Thinking y Lean UX, con certificaciones de Google e Interaction Design Foundation.",
          img: "imagenes/Camilo-Sanchez.svg"
        }
      }
    ]
  }
};


/* ============================================================
   2. ESTADO GLOBAL
============================================================ */
let appState = {
  loggedUser: "",
  currentCategory: "",
  currentCourse: null
};


/* ============================================================
   3. NAVEGACIÓN ENTRE VISTAS
   
   Además de mostrar/ocultar vistas, controlamos el botón
   flotante de WhatsApp: solo se muestra cuando el usuario
   está autenticado (cualquier vista excepto login).
============================================================ */
function showView(viewId) {
  // Seleccionamos todas las vistas y removemos "active"
  const allViews = document.querySelectorAll(".view");
  for (const view of allViews) {
    view.classList.remove("active");
  }

  // Activamos solo la vista destino
  document.getElementById(viewId).classList.add("active");

  // Mostramos el botón flotante de WhatsApp solo si no estamos en login
  const whatsappBtn = document.getElementById("whatsapp-float");
  whatsappBtn.classList.toggle("visible", viewId !== "view-login");

  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ============================================================
   4. LOGO NAVEGABLE
   
   Usamos querySelectorAll para seleccionar TODOS los logos
   y con forEach les agregamos el mismo evento.
   Esto evita repetir addEventListener para cada topbar.
============================================================ */
function initLogoNav() {
  // Seleccionamos todos los elementos con clase .logo-nav
  const logoLinks = document.querySelectorAll(".logo-nav");

  logoLinks.forEach(function (logo) {
    logo.addEventListener("click", function () {
      // Solo navega al home si el usuario está autenticado
      if (appState.loggedUser) {
        // Si hay un video activo, lo pausamos al salir
        document.getElementById("detail-video").src = "";
        showView("view-home");
      }
    });
  });
}


/* ============================================================
   5. LOGIN — Máximo 3 intentos
   
   ✅ getElementById para capturar inputs
   ✅ addEventListener en el botón
   ✅ .value para leer los inputs
   ✅ .textContent para mostrar mensajes
============================================================ */
let loginAttempts = 0;
const MAX_ATTEMPTS = 3;

function initLogin() {
  const btnLogin  = document.getElementById("btn-login");
  const inputUser = document.getElementById("input-user");
  const inputPass = document.getElementById("input-pass");
  const loginMsg  = document.getElementById("login-message");

  btnLogin.addEventListener("click", function () {
    // Si ya está bloqueado, salimos inmediatamente
    if (loginAttempts >= MAX_ATTEMPTS) return;

    const user = inputUser.value.trim();
    const pass = inputPass.value.trim();

    // Lógica simplificada: un intento por click
    if (user === VALID_USER && pass === VALID_PASS) {
      // Credenciales correctas
      loginMsg.className   = "login-msg success";
      loginMsg.textContent = `✅ ¡Bienvenido, ${user}!`;
      appState.loggedUser  = user;
      loginAttempts = 0; // resetear contador al iniciar sesión correctamente

      setTimeout(() => {
        showView("view-home");
        renderHome();
      }, 800);

    } else {
      // Credenciales incorrectas — incrementamos contador
      loginAttempts++;

      if (loginAttempts >= MAX_ATTEMPTS) {
        // Bloqueamos el formulario
        loginMsg.className   = "login-msg blocked";
        loginMsg.textContent = "🔒 Acceso bloqueado. Demasiados intentos fallidos.";
        btnLogin.disabled    = true;
        btnLogin.style.opacity = "0.5";
        inputUser.disabled   = true;
        inputPass.disabled   = true;
      } else {
        loginMsg.className   = "login-msg error";
        loginMsg.textContent = `❌ Credenciales incorrectas. Intento ${loginAttempts} de ${MAX_ATTEMPTS}.`;
      }

      inputPass.value = "";
      inputUser.focus();
    }
  });

  // Iniciar sesión con la tecla Enter
  inputPass.addEventListener("keydown", function (e) {
    if (e.key === "Enter") btnLogin.click();
  });
  // También permitir Enter desde el campo de usuario
  inputUser.addEventListener("keydown", function (e) {
    if (e.key === "Enter") btnLogin.click();
  });
}


/* ============================================================
   6. HOME — Bienvenida y selección de categoría
============================================================ */
function renderHome() {
  document.getElementById("home-welcome").textContent = `Hola, ${appState.loggedUser}. ¡Bienvenido a EDUCLIC!`;
  document.getElementById("nav-username").textContent  = `👤 ${appState.loggedUser}`;
}

function initHome() {
  // Botones de categoría — forEach con querySelectorAll
  const catBtns = document.querySelectorAll(".btn-cat");
  catBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cat = btn.getAttribute("data-cat");

      // NUEVA VISTA
      if (cat === "cont") {
      showView("view-cont");
      return;
    }

      appState.currentCategory = cat;
      showView("view-courses");
      renderCourses(cat);
    });
  });

  // Logout: reinicia todo el estado
  document.getElementById("btn-logout").addEventListener("click", function () {
    loginAttempts = 0;
    appState = { loggedUser: "", currentCategory: "", currentCourse: null };

    // Rehabilitamos el formulario de login
    const btnLogin  = document.getElementById("btn-login");
    const inputUser = document.getElementById("input-user");
    const inputPass = document.getElementById("input-pass");

    btnLogin.disabled      = false;
    btnLogin.style.opacity = "1";
    inputUser.disabled     = false;
    inputPass.disabled     = false;
    inputUser.value        = "";
    inputPass.value        = "";
    document.getElementById("login-message").textContent = "";

    showView("view-login");
  });
}


/* ============================================================
   7. CURSOS — Renderizado dinámico con createElement
   
   ✅ document.createElement para crear tarjetas
   ✅ appendChild para agregarlas al DOM
   ✅ .innerHTML para el contenido interno
   ✅ addEventListener en cada tarjeta
============================================================ */
function renderCourses(categoryKey) {
  const category = COURSES_DB[categoryKey];

  // Actualizamos el título de la sección
  document.getElementById("courses-title").textContent = category.title;

  const grid = document.getElementById("courses-grid");
  // Insertar/actualizar switcher de categorías (permite cambiar entre dev/design con un clic)
  const coursesContent = document.querySelector("#view-courses .courses-content");
  let switcher = coursesContent.querySelector(".category-switcher");
  if (!switcher) {
    switcher = document.createElement("div");
    switcher.className = "category-switcher";
    coursesContent.insertBefore(switcher, grid);
  }

  // Rellenamos botones para cada categoría
  switcher.innerHTML = switcher.innerHTML = `
  <button class="btn-switch ${categoryKey === "dev" ? "active" : ""}" data-cat="dev">
    Desarrollo de Software
  </button>

  <button class="btn-switch ${categoryKey === "design" ? "active" : ""}" data-cat="design">
    Diseño Gráfico
  </button>

  <button class="btn-switch" data-cat="about">
    Sobre Nosotros
  </button>
`;

  // Eventos en los botones del switcher
 switcher.querySelectorAll(".btn-switch").forEach(function (btn) {

  btn.addEventListener("click", function () {

    const newCat = btn.getAttribute("data-cat");

    // NUEVA VISTA SOBRE NOSOTROS
    if (newCat === "about") {

      showView("view-equipo");
      cargarEquipo();

      return;
    }

    if (newCat === categoryKey) return;

    appState.currentCategory = newCat;

    renderCourses(newCat);

  });

});

  grid.innerHTML = ""; // Limpiamos antes de renderizar

  // Ciclo FOR para crear una tarjeta por cada curso
  for (let i = 0; i < category.courses.length; i++) {
    const course = category.courses[i];

    const card = document.createElement("div");  // createElement
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-main">
        <span class="course-icon">${course.icon}</span>
        <h3>${course.name}</h3>
        <p>${course.shortDesc}</p>
        <span class="course-price">${course.price}</span>
      </div>
      <div class="course-actions" aria-hidden="true">
        <button class="action-btn btn-detail">Ver detalle</button>
        <button class="action-btn btn-enroll-small">Inscribirme</button>
      </div>
    `;

    // Al hacer clic en la tarjeta → detalle del curso
    card.addEventListener("click", function () {
      appState.currentCourse = course;
      showView("view-detail");
      renderCourseDetail(course);
    });

    // Botones laterales (evitar que el click burbujee al card)
    const btnDetail = card.querySelector('.btn-detail');
    const btnEnrollSmall = card.querySelector('.btn-enroll-small');

    btnDetail.addEventListener('click', function (e) {
      e.stopPropagation();
      appState.currentCourse = course;
      showView('view-detail');
      renderCourseDetail(course);
    });

    btnEnrollSmall.addEventListener('click', function (e) {
      e.stopPropagation();
      appState.currentCourse = course;
      showView('view-payment');
      renderPayment();
    });

    grid.appendChild(card); // appendChild
  }
}

function initCourses() {
  document.getElementById("back-from-equipo")
  .addEventListener("click", function () {
    showView("view-home");
});

document.getElementById("btn-change-equipo")
  .addEventListener("click", function () {
    showView("view-home");
});}


/* ============================================================
   8. DETALLE DEL CURSO
   
   ✅ Actualiza múltiples elementos del DOM con .textContent
   ✅ Modifica atributos (iframe src, img src/alt)
============================================================ */
function renderCourseDetail(course) {
  document.getElementById("detail-title").textContent = `${course.icon} ${course.name}`;
  document.getElementById("detail-desc").textContent  = course.desc;
  document.getElementById("detail-video").src         = course.video;
  document.getElementById("teacher-name").textContent = course.teacher.name;
  document.getElementById("teacher-bio").textContent  = course.teacher.bio;

  // Simplificado: usar placeholder remoto para el avatar (evita rutas rotas)
  const teacherImg = document.getElementById("teacher-img");
  teacherImg.alt = course.teacher.name;
  teacherImg.onerror = null;
  teacherImg.src = 'https://via.placeholder.com/160?text=Profesor';
}

function initDetail() {
  // Botón "Volver" → lista de cursos (pausamos el video)
  document.getElementById("back-from-detail").addEventListener("click", function () {
    document.getElementById("detail-video").src = "";
    showView("view-courses");
  });

  // Botón "Inscribirme" → pasarela de pago
  document.getElementById("btn-enroll").addEventListener("click", function () {
    showView("view-payment");
    renderPayment();
  });
}


/* ============================================================
   9. PAGO SIMULADO — REFACTORIZADO
   
   ANTES: 3 bloques if-else repetidos con el mismo patrón.
   AHORA: Array de reglas → iteramos con find() para mostrar
          el primer error encontrado (Early Return Pattern).
   
   ✅ Captura de datos con .value
   ✅ Validación con array de reglas (sin if-else repetidos)
   ✅ Muestra resultado dinámico con .innerHTML
============================================================ */
function renderPayment() {
  const course = appState.currentCourse;
  document.getElementById("payment-course-name").textContent =
    `📘 Curso seleccionado: ${course.name} — ${course.price}`;

  // Ocultamos resultado previo y limpiamos campos
  const resultEl = document.getElementById("payment-result");
  resultEl.className = "payment-result";
  resultEl.innerHTML = "";

  ["pay-name", "pay-card", "pay-date", "pay-cvv"].forEach(function (id) {
    document.getElementById(id).value = "";
  });
}

function initPayment() {
  // Botón "Volver" → detalle del curso
  document.getElementById("back-from-payment").addEventListener("click", function () {
    showView("view-detail");
  });

  // Formateo automático del número de tarjeta (grupos de 4)
  document.getElementById("pay-card").addEventListener("input", function () {
    let val = this.value.replace(/\D/g, "").substring(0, 16);
    this.value = val.replace(/(.{4})/g, "$1 ").trim();
  });

  // Formateo automático de la fecha MM/AA
  document.getElementById("pay-date").addEventListener("input", function () {
    let val = this.value.replace(/\D/g, "").substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + "/" + val.substring(2);
    this.value = val;
  });

  // Botón "Pagar ahora"
  document.getElementById("btn-pay").addEventListener("click", function () {
    const name = document.getElementById("pay-name").value.trim();
    const card = document.getElementById("pay-card").value.replace(/\s/g, "");
    const date = document.getElementById("pay-date").value.trim();
    const cvv  = document.getElementById("pay-cvv").value.trim();

    const resultEl = document.getElementById("payment-result");

    /* ---------------------------------------------------------
       REFACTORIZACIÓN: Array de reglas de validación.
       Cada regla es un objeto con:
         - test: función que devuelve true si HAY error
         - msg:  mensaje a mostrar si falla
       
       Usamos .find() para buscar la PRIMERA regla que falle.
       Esto reemplaza los 3 bloques if-else repetidos.
    --------------------------------------------------------- */
    const validationRules = [
      {
        test: () => !name || !card || !date || !cvv,
        msg:  "⚠️ Por favor completa todos los campos."
      },
      {
        test: () => card.length !== 16,
        msg:  "⚠️ El número de tarjeta debe tener 16 dígitos."
      },
      {
        test: () => cvv.length !== 3,
        msg:  "⚠️ El CVV debe tener 3 dígitos."
      }
    ];

    // find() devuelve la primera regla que falle, o undefined si todo está bien
    const failedRule = validationRules.find(function (rule) {
      return rule.test();
    });

    // Si encontramos un error, lo mostramos y salimos
    if (failedRule) {
      resultEl.className = "payment-result error-pay";
      resultEl.innerHTML = failedRule.msg;
      return; // Early return: no continuamos si hay error
    }

    // ✅ Todas las validaciones pasaron — pago exitoso
    const course = appState.currentCourse;
    resultEl.className = "payment-result success";
    resultEl.innerHTML = `
      ✅ ¡Pago exitoso!<br>
      <small>
        Hola <strong>${name}</strong>, te has inscrito en
        <strong>${course.name}</strong>.<br>
        Recibirás acceso completo en tu correo. ¡A aprender!
      </small>
    `;

    // Deshabilitamos el botón para evitar pagos duplicados
    this.disabled     = true;
    this.style.opacity = "0.5";
  });
}


/* ============================================================
   10. PUNTO DE ENTRADA — DOMContentLoaded
============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  initLogin();
  initLogoNav();   // NUEVO: logos navegables
  initHome();
  initCourses();   // incluye el botón "Cambiar categoría"
  initDetail();
  initPayment();
  

  showView("view-login");
  console.log("✅ EDUCLIC inicializado correctamente.");
});

function irAEquipo() {
  showView("view-equipo");
  cargarEquipo();
}


