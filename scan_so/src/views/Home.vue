<template>
    <div>
      <h1>Algoritmo SCAN</h1>
      <ScanForm @submit="handleSubmit" />
      <div  class="chart-container" v-if="result.length > 0">
        <canvas ref="scanChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { Chart as ChartJS, registerables } from 'chart.js';
  import ScanForm from '../components/ScanForm.vue';
  
  // Registrar todos los componentes de Chart.js
  ChartJS.register(...registerables);
  export default {
    name: 'Home',
    components: {
      ScanForm
    },
    setup() {
      const result = ref([]);
      const scanChart = ref(null);
  
      const handleSubmit = async ({ sequence, head }) => {
        const response = await axios.post('http://localhost:3000/api/scan', { sequence, head });
        result.value = response.data;
        drawChart();
      };
  
      const drawChart = () => {
        if (scanChart.value) {
            const ctx = scanChart.value.getContext('2d');
            new ChartJS(ctx, {
            type: 'line',
            data: {
                labels: result.value,
                datasets: [
                {
                    label: 'SCAN Algorithm',
                    data: result.value.map((value, index) => ({ x: index, y: value })),
                    borderColor: 'blue',
                    fill: false,
                    tension: 0
                }
                ]
            },
            options: {
                scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Pista'
                    }
                },
                y: {
                    title: {
                    display: true,
                    text: 'Orden'
                    }
                }
                }
            }
            });
        }
        };
  
      onMounted(() => {
        if (result.value.length > 0) {
          drawChart();
        }
      });
  
      return {
        result,
        scanChart,
        handleSubmit
      };
    }
  };
  </script>
  
  <style scoped>
    chart-container {
    width: 50%; /* Ancho del contenedor del gráfico */
    max-width: 100px; /* Ancho máximo del contenedor del gráfico */
    height: 100px; /* Altura del contenedor del gráfico */
    margin: 100px; /* Centrar el contenedor del gráfico horizontalmente */
    }
    h1{
     
        text-align: center;
        color: #3498db;

    }
</style>
  