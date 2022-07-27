<template>
    <li>
        {{ingredient.title}}
        <button @click="$emit('remove')">Delete</button>
    </li>
</template>

<script>
export default {
    name: 'IngredientItem',
    props: ['ingredient'],
}
</script>
<style>
body{
    color: white;
}
</style>
