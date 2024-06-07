<template>
    <form @submit.prevent="submit">
      <label for="sequence" >Secuencia (separada por comas):</label>
      <input class="rounded-input" type="text" v-model="sequence" required  />
      <label for="head">Cabeza:</label>
      <input class="rounded-input"type="number" v-model.number="head" required />
      <button class="btn primary btn-block" type="submit">Ejecutar</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    name: 'ScanForm',
    emits: ['submit'],
    setup(props, { emit }) {
      const sequence = ref('');
      const head = ref(0);
  
      const submit = () => {
        const seqArray = sequence.value.split(',').map(Number);
        emit('submit', { sequence: seqArray, head: head.value });
      };
  
      return {
        sequence,
        head,
        submit
      };
    }
  };
  </script>
  
  <style scoped>
  .rounded-input {
    border: 2px solid #3498db;
    border-radius: 20px;
    padding: 12px;
    width: 300px;
}
.btn-block{
width: 100%;
display: block;
margin-bottom: 5px;
}
.btn {
  border: none; 
  color: white; 
  padding: 14px 28px; 
  cursor: pointer; 
  border-radius: 5px; 
}
.primary {background-color: #007bff;} 
.primary:hover {background: #0b7dda;}

label {
    margin-bottom: 5px;
    text-align: center;
}

  form {
    width:350px;
	padding:16px;
	border-radius:10px;
	margin:auto;
	background-color:#fa8c8c;
  }
  input {
    margin: 10px 0;
    display: block;
  }
  button {
    display: block;
  }
  </style>
  