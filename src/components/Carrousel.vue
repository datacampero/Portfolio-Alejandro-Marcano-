<template>
    <button
    v-on:click="presionar"
     class="bg-transparent hover:bg-red-500 text-orange-700 font-semibold hover:text-white py-2 px-2 border border-orange-500 hover:border-transparent rounded">
        <slot></slot>
    </button>
</template>