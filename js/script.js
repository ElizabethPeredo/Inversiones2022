// Obtener una referencia al elemento canvas del DOM
const $inversiones = document.querySelector("#inversiones");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// Podemos tener varios conjuntos de datos
const Inversion1 = {
  label: "2001621	Estudios de Preinversión",
  data: [0, 82131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
};
const Inversion2 = {
  label: "2230368	Sitio Arqueológico de Wari (Huamanga)",
  data: [0, 0, 41440, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(174, 234, 0, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion3 = {
  label: "2233917	Archivo General de la Nación (AGN)",
  data: [0, 0, 890748, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(255, 15, 64, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion4 = {
  label: "2251549	Museo Nacional del Perú (MUNA)",
  data: [210380,322536, 163640, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(255, 19, 154, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion5 = {
  label: "2313253	Programa Centros Históricos (GyA)",
  data: [23440, 110112, 7618, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(78, 52, 46, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion6 = {
  label: "2320691	Museo Nacional de AAH (Pueblo Libre)",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(255, 61, 0, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion7 = {
  label: "2430924	Huaca 26 (Lima)",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(0, 200, 83, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion8 = {
  label: "2446487	Ceviche",
  data: [0, 105000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(0, 131, 143, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion9 = {
  label: "2456689	Batalla de Ayacucho (obelisco)",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(156, 39, 176, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion10 = {
  label: "2456690	Batalla de Junín",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(251, 229, 64, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion11 = {
  label: "2459183	Centro Histórico de Rímac (Lima)",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(48, 79, 254, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};

const Inversion12 = {
  label: "2459198	Centro Histórico de Huamanga (Ayacucho)",
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'transparent',// Color de fondo
  borderColor: 'rgba(21, 101, 192, 1)',// Color del borde
  borderWidth: 3,// Ancho del borde
};


new Chart($inversiones, {
  type: 'line',// Tipo de gráfica
  data: {
    labels: etiquetas,
    datasets: [
      Inversion1,
      Inversion2,
      Inversion3,
      Inversion4,
      Inversion5,
      Inversion6,
      Inversion7,
      Inversion8,
      Inversion9,
      Inversion10,
      Inversion11,
      Inversion12,

      // Aquí más datos...
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    },
  }
});