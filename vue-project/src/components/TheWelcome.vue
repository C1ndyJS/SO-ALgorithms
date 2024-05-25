// ScanChart.vue

<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      // Simulación de solicitudes de acceso a bloques de datos
      solicitudes: [10, 20, 5, 35, 45, 15, 25],
      tamañoDisco: 100, // Tamaño del disco
      posiciónCabezal: 0 // Posición inicial del cabezal de lectura/escritura
    };
  },
  mounted() {
    this.renderChart(this.procesarSolicitudes(), this.options);
  },
  methods: {
    procesarSolicitudes() {
      // Ordenar las solicitudes de acceso
      this.solicitudes.sort((a, b) => a - b);

      // Calcular la dirección del movimiento del cabezal de lectura/escritura
      const derecha = this.solicitudes.filter(s => s >= this.posiciónCabezal);
      const izquierda = this.solicitudes.filter(s => s < this.posiciónCabezal).reverse();

      // Simular el movimiento del cabezal de lectura/escritura utilizando el algoritmo SCAN
      const recorrido = [...derecha, this.tamañoDisco, ...izquierda, 0];
      
      // Preparar datos para el gráfico
      const data = {
        labels: Array.from({ length: recorrido.length }, (_, i) => i.toString()),
        datasets: [{
          label: 'Posición del Cabezal',
          borderColor: 'blue',
          data: recorrido
        }]
      };

      return data;
    }
  },
  computed: {
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tiempo'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Posición del Cabezal'
            }
          }
        }
      };
    }
  }
};
</script>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
