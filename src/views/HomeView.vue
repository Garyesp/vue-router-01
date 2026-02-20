<template>
  <ul>
    <li>
      <router-link to="/list-articles">Listado de artículos</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'create-article' }">Crear artículo</router-link>
    </li>
  </ul>
</template>
