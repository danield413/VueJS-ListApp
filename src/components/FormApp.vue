<script setup>
    import { readLocalStorage, saveLocalStorage } from '@/utils/localstorage';
import { onMounted, ref } from 'vue'
    import FormBasics from './FormBasics.vue';
    import Listitems from './ListItems.vue'

    const items = ref([])

    const addItem = (newItem) => {
        items.value.push(newItem)
        saveLocalStorage('items', newItem)
    }

    const removeItem = (item) => {
        items.value = items.value.filter(i => i != item)
        localStorage.setItem('items', JSON.stringify(items.value))
    }

    onMounted(() => {
        items.value = readLocalStorage('items')
    })

</script>

<template>
    <FormBasics v-bind:add="addItem" />
    <Listitems v-bind:items="items" v-bind:remove="removeItem" />
</template>

<style>

</style>