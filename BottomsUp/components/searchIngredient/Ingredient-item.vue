<template>
    <li>
        <button>{{ingredient.title}}</button>
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
