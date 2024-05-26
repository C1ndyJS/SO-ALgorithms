<template>
  <div>
    <canvas id="miGrafico" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'ScanChart',
  setup() {
    const chartRef = ref(null);

    const crearGrafico = (datosScan) => {
      const ctx = document.getElementById('miGrafico').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: datosScan.etiquetas,
          datasets: [{
            label: 'SCAN',
            data: datosScan.valores,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    };

    const algoritmoDeScan = () => {
      // Aquí generas tus datos de ejemplo
      return {
        etiquetas: ["1", "2", "3", "4", "5"],
        valores: [10, 20, 15, 25, 30]
      };
    };

    onMounted(() => {
      const datosScan = algoritmoDeScan();
      crearGrafico(datosScan);
    });

    return {
      chartRef
    };
  }
};
</script>

<style scoped>
div {
  height: 400px;
}
</style>
