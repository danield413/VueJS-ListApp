<template>
 <FormApp />
</template>

<script>
import FormApp from './components/FormApp.vue'

export default {
  name: 'App',
  components: {
    FormApp
  }
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

	* {
		box-sizing: border-box;
		font-family: Lato, sans-serif;
		padding: 0;
		margin: 0;
		color: white;
	}

	body {
		padding: 10px 0px;
		background-color: rgb(26, 26, 26);
	}

	::-webkit-scrollbar{
		width: 8px;
		background-color: #6d6d6d;
	}
	::-webkit-scrollbar-track{
		background-color: #000000;
	}
	::-webkit-scrollbar-thumb{
		background-color: rgb(15, 170, 111);
	}
</style>
