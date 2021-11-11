<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Modelado orgánico

    .row.justify-content-center.align-items-center
      .col-lg-12.bg-img-2.p-5
        p(data-aos="fade-down") En la actualidad, el avance en la industria de los videojuegos y el cine, se ha vuelto cada vez más exigente, así como también realista, por ende, el desarrollo del modelado orgánico toma cada vez más fuerza. 
        p(data-aos="fade-down") El modelado orgánico, permite crear personajes y elementos hechos por el <i>concept</i> artist, plasmando dichos diseños en un entorno tridimensional. Básicamente se podría decir que, con el modelado orgánico, busca asemejar los objetos creados en el entorno tridimensional, a los elementos que se encuentran en la naturaleza.  
        img.img-a.img-t.my-5.yoyo(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img37.svg', alt='')               

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down")       
      .col-lg-3.p-0.m-0.bg-card-row-color
        img.p-0.mx-0(src='@/assets/ilustraciones/img42.svg', alt='')       
      .col-lg-6.bg-card-row-color
        p(data-aos="fade-down").pt-5.mt-4 A continuación, se relaciona el desarrollo de los temas principales para el correcto modelado orgánico teniendo en cuenta la topología y su correcta modificación, el cual se encuentra en el documento adjunto para descarga: 
        .row.justify-content-center.align-items-center.mt-5.pb-5(data-aos="fade-down")       
          .col-lg-8         
            a.mb-3.anexo.bg-a-1(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.text-a Modelado orgánico     
      .col-lg-3.p-0.m-0.bg-card-row-color
        img.p-0.mx-0(src='@/assets/ilustraciones/img43.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10 
        p(data-aos="fade-down") Luego de haber revisado el documento en PDF “Modelado Orgánico”, es importante visualizar los siguientes videos, los cuales, permiten reafirmar elementos y uso de herramientas del <i>software</i> Blender, siendo importantes para algunos de los modelados necesarios para el desarrollo del modelado orgánico.  

    h4(data-aos="fade-left").mt-5 Modelado de referencia
    p(data-aos="fade-down") En este apartado se presenta un enlace al canal oficial de Blender en YouTube, donde podrán visualizar más sobre loop cut, lo que permite dar un mejor uso a este <i>software</i>, aportando a la forma práctica del tema:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-down")     
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/ilustraciones/img39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                  h4.mt-1 Loop Cut – Blender 2.80 Fundamentals

                .col-sm-auto
                  a.boton.color-acento-botones.beat(href="https://www.youtube.com/watch?v=-pCf3DjsEBg&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=17&ab_channel=Blender" target="_blank")
                    span.d-black Dar click para ir al lugar
                    i.d-black.fas.fa-external-link-alt            

    h4(data-aos="fade-left").mt-5 Modelado del cuerpo
    p(data-aos="fade-down") De igual manera, que, en el modelado de rostro, el cuerpo en los personajes sigue unas pautas que debemos respetar, para que, al animar las partes, estas se deformen correctamente, tanto para las extremidades como para el tronco lo ideales generar loops específicos. A continuación, veremos los loops necesarios para el correcto modelado: 

    p(data-aos="fade-down") En los videos relacionados a continuación, podrá ver el paso a paso del correcto modelado del rostro para animación 3D utilizando una adecuada topología. 

    .row.mt-5(data-aos="slide-left")
      LineaTiempoD.color-primario
        .row.justify-content-center.align-items-center(numero="1" titulo="Ver Video 4 Modelado de Rostro Parte 1")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
        .row.justify-content-center.align-items-center(numero="2" titulo="Ver Video 5 Modelado de Rostro Parte 2")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
        .row.justify-content-center.align-items-center(numero="3" titulo="Ver Video 6 Modelado de Cuerpo")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    h4(data-aos="fade-left").mt-5 Retopología
    p(data-aos="fade-down") En animación 3D el término retopología se refiere a la construcción de modelos de bajo poligonaje a partir de modelos de alto poligonaje. Es el método que más ha ganado uso en los últimos años desplazando a los métodos como el box modeling. Se hace necesario puesto que los computadores se sobrecargan de muchos cálculos y entorpecen el flujo de trabajo, lo que genera problemas al texturizar, riggear y animar. 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-down")     
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/ilustraciones/img39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                  h4.mt-1 Retopología en Blender

                .col-sm-auto
                  a.boton.color-acento-botones.beat(href="https://www.youtube.com/watch?v=IBmIm9iqmGI&ab_channel=MMasterbrock" target="_blank")
                    span.d-black Dar click para ir al lugar
                    i.d-black.fas.fa-external-link-alt 

    p(data-aos="fade-down").mt-5 A continuación, veremos el video de cómo se realiza retopología en blender: 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-down")      
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                         
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
