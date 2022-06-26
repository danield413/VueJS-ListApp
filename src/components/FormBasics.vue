<script setup>
  import { ref, watch, defineProps } from "vue";

  const props = defineProps(['add'])

  const textValue = ref("")
  const radioValue = ref('')
  const disabled = ref(true)

  const onSubmit = () => {
    const text = textValue.value
    const radio = radioValue.value
    props.add({
      text,
      radio,
      date: new Date().getTime()
    })
    textValue.value = ''
    radioValue.value = ''
    disabled.value = true
  }

  watch([textValue, () => radioValue.value], ([newText, newRadio]) => {
    if (newText.length >= 6 && newRadio.length > 0) disabled.value = false
  })

</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <label for="name" class="lbl">What's your name?</label>
    <input
      ref="inputText"
      autocomplete="off"
      id="name"
      type="text"
      placeholder="Your name"
      v-model="textValue"
      :class="`${textValue.length > 6 ? 'success' : 'normal'}`"
    />
    <label class="lbl">What's your group?</label>
    <div class="options">
      <label for="one" :class="`${radioValue === 'one' && 'success'}`">
        <input type="radio" value="one" id="one" v-model="radioValue"/>
        <span>One</span>
      </label>
      <label for="two" :class="`${radioValue === 'two' && 'success'}`">
        <input type="radio" value="two" id="two" v-model="radioValue"/>
        <span>Two</span>
      </label>
    </div>
    <div></div>

    <input type="submit" value="Save" :disabled="disabled" />
  </form>
</template>

<style>
  .form {
    margin: 0 auto;
    width: 500px;
    padding: 20px;
  }

  .lbl {
    display: block;
    margin: 10px 0;
  }

  input {
    display: block;
    margin: 10px 0;
    border: none;
    transition: 0.3s ease;
  }

  input[type="text"].normal {
    background-color: rgba(128, 128, 128, 0.438);
  }

  input[type="text"] {
    padding: 15px;
    outline: none;
    border: 3px solid transparent;
  }

  input[type="text"]:focus {
    border: 3px solid rgb(0, 195, 255);
  }

  input[type="text"],
  input[type="submit"] {
    width: 100%;
  }

  input[type="submit"] {
    height: 40px;
    background-color: crimson;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;
  }

  input[type="submit"]:disabled {
    background-color: rgb(177, 0, 35);
    outline: none;
  }

  input:not([disabled])[type="submit"]:hover {
    background-color: rgb(255, 0, 51);
  }

  .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  .options label {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }

  .options span {
    background-color: transparent;
  }

  .success {
    transition: 0.3s ease;
    background-color: rgba(0, 195, 255, 0.486);
  }

  @media screen and (max-width: 650px) {
    .form {
      width: 100%;
    }
  }
</style>