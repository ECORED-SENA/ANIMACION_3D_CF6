<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down") Seleccionar las técnicas y herramientas de modelado, requiere de una serie de conocimientos frente a los elementos y la composición para la creación de productos a partir de la manipulación y combinación de elementos digitales, con el fin de generar objetos que den cuenta del proceso; aprendizajes que serán abordados en el presente componente formativo, como se ve a continuación: 
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
