<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 4
      h1 Preparación para texturizado: UV Unwrap, preparación de mallas para baking de textura
    .row.justify-content-center.align-items-center
      .col-lg-12.bg-img-1.p-5.pb-0
        img.img-a.img-t.my-5.yoyo(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img40.svg', alt='')

        p(data-aos="fade-down") Es una técnica que consiste en cortar un modelo 3D en piezas que se aplanan para obtener patrones o proyecciones planas. Se puede comparar con el proceso inverso de elaborar un peluche; es decir, en vez de unir todas sus piezas para armarlo, lo que debemos hacer es cortarlo con mucho cuidado para obtener cada una de las piezas que lo conforman. Para ello, se hace uso de los UV, los cuales representan el modelo 3D aplanado en un espacio 2D (como en el ejemplo del peluche que pasa de ser un modelo tridimensional a un modelo bidimensional) en donde existe un sistema de coordenadas que se hacen coincidir con la geometría del modelo. Siendo así, a continuación, podrá visualizar el proceso UV:

    h4(data-aos="fade-left").mt-5 Proceso UV 


    .row.justify-content-center.align-items-stretch
      .col-lg-3.color-t4-1.p-4(data-aos="flip-down")
        img.img-a.img-t.my-3(data-aos="zoom-in-down")(src='@/assets/ilustraciones/2.svg', alt='')
        p.text-center(data-aos="fade-down") Malla o Modelo 3D inicial

      .col-lg-3.color-t4-1.p-4(data-aos="flip-down")
        img.img-a.img-t.my-3(data-aos="zoom-in-down")(src='@/assets/ilustraciones/3.svg', alt='')
        p.text-center(data-aos="fade-down") Corte 

      .col-lg-3.color-t4-1.p-4(data-aos="flip-down")
        img.img-a.img-t.my-3(data-aos="zoom-in-down")(src='@/assets/ilustraciones/4.svg', alt='')
        p.text-center(data-aos="fade-down") Piezas listas para aplanar 

      .col-lg-3.color-t4-1.p-4(data-aos="flip-down")
        img.img-a.img-t.my-3(data-aos="zoom-in-down")(src='@/assets/ilustraciones/1.svg', alt='')
        p.text-center(data-aos="fade-down") Proyección Plana del modelo  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img41.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta técnica se utiliza para crear diferentes tipos de texturas, detalles y para darle color a las piezas planas (llamadas islas UV o UV <i>shells</i>) que proyectamos al espacio 2D, lo cual se facilita gracias a la asignación de un par de coordenadas a cada vértice de la malla, permitiendo la conexión entre la superficie de la misma, con el mapa de texturas que se le quiere aplicar. Es importante tener en consideración algunas cosas: las islas UV debe conservar su forma evitando distorsiones y estiramientos innecesarios; deben quedar bien acomodadas y ordenadas aprovechando adecuadamente el espacio, evitando que se sobrepongan unas encimas de otras; de antemano se debe trabajar con una topología sin errores que permitan hacer cortes rápidos y adecuados que no se vean fuera de lugar ya que pueden afectar la textura y los detalles de nuestro modelo.  

    p(data-aos="fade-down").mt-5 Veamos algunos ejemplos:

    .row.justify-content-center.align-items-center(data-aos="slide-down")
      .col-lg-12.slide-bg-3.px-5     
        .tarjeta.tarjeta--azul.slide-bg-2.p-4
          SlyderA
            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Preparación para texturizado UV personaje
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img44.jpg', alt='')
                figcaption.mt-3 https://help.autodesk.com/cloudhelp/2017/ENU/Maya/images/GUID-30DA8E8A-FDFB-49F2-B181-C82F15158F46.png

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Preparación para texturizado UV cocodrilo
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img45.jpg', alt='')
                figcaption.mt-3 https://cdnb.artstation.com/p/assets/images/images/023/129/185/large/stalyn-reyes-sharedscreenshot10.jpg?1578204077                      

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Preparación para texturizado Granada Armas
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img46.jpg', alt='')
                figcaption.mt-3 https://resources.turbosquid.com/wp-content/uploads/2017/01/AtlasedUVsSimpleModel.png                      

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Preparación para texturizado Caja UV
                    .hr-t
                    p.mt-4 El ejemplo mas sencillo del UV mapping es el de una caja, el cual se abre en forma de cruz, este al volverse a plegar forma el objeto 3D, en resumen, el objeto 3D esta elaborado en tres coordenadas, X, Y y Z, estas coordenadas se convierten a un escenario 2D: en X y Y.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img47.jpg', alt='')
                figcaption.mt-3 https://cdnb.artstation.com/p/assets/images/images/022/142/571/large/cagatay-demir-repair-stop-10.jpg?1574265832                      

    p(data-aos="fade-down").mt-5 Estimado Aprendiz, con este tema, es el final del componente formativo Modelado 3D, es así, que para afianzar la temática de UV <i>Layout</i>, se le recomienda visualizar el siguiente video:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/AiMB6zpM_9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    p(data-aos="fade-down").mt-5 Por último, recuerda que es necesario conocer y afianzar el uso de las herramientas que se pueden encontrar en Blender, de esta manera es necesario reconocer sus funciones; para ello, puede visitar la página Editor UV Blender, relacionada a continuación:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-down")     
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/ilustraciones/img39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página.
                  h4.mt-1 “Editor UV”

                .col-sm-auto
                  a.boton.color-acento-botones.beat(href="https://docs.blender.org/manual/es/2.93/editors/uv/selecting.html" target="_blank")
                    span.d-black Dar click para ir al lugar
                    i.d-black.fas.fa-external-link-alt 
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start !important
.m-left
  left: 50% !important
@media only screen and (max-width: 992px)
  .m-left
    left: 0 !important
</style>
