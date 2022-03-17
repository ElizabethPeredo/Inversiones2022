// Obtener una referencia al elemento canvas del DOM
const $inversiones = document.querySelector("#inversiones");
// Las etiquetas son las que van en el eje X. 
const data = {
    labels: ['2001621	Estudios de Preinversión', 
    '2230368	Sitio Arqueológico de Wari (Huamanga)', 
    '2233917	Archivo General de la Nación (AGN)', 
    '2251549	Museo Nacional del Perú (MUNA)', 
    '2313253	Programa Centros Históricos (GyA)', 
    '2320691	Museo Nacional de AAH (Pueblo Libre)', 
    '2430924	Huaca 26 (Lima)',
    '2446487	Ceviche',
    '2456689	Batalla de Ayacucho (obelisco)',
    '2456690	Batalla de Junín',
    '2459183	Centro Histórico de Rímac (Lima)',
    '2459198	Centro Histórico de Huamanga (Ayacucho)',
],
    datasets: [{
      label: 'Avance (01ENE22 - 16MAR22)',
      data: [100.0, 6.3, 56.8, 5.2, 8.8, 0.0,0.0, 70.0, 0.0, 0.0, 0.0,0.0],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)',
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }]
  };



new Chart($inversiones, {
    type: 'bar',
    data,
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});