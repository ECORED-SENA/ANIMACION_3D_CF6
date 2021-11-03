<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Técnicas de modelado 
    .row.justify-content-center.align-items-start.mt-5
      .col-lg-6.col-color-1.p-5.mt-5(data-aos="zoom-in-down")
        p.mb-0 Para el modelado se emplean varias técnicas, en este caso se mencionan las que pueden utilizarse en el <i>software</i> Blender. Para ello, se debe tener en cuenta la navegación en el <i>software</i> y conocer ciertas acciones que se realizan con el mouse en combinación con algunas teclas.
      .col-lg-5.col-color-2.p-5(data-aos="fade-left")
        .BorTit.mb-3 #[b Figura 1]<br> Mouse  
        img.img-a.img-t(src='@/assets/ilustraciones/img1.svg', alt='')
        figcaption.mt-3 Nota. https://bit.ly/3mjjQGx


    p(data-aos="fade-down").mt-5 En la siguiente tabla se presenta la disposición de los comandos del teclado combinados con el mouse para la interacción en el <i>software</i> Blender:

    .tabla-a.color-acento-botones.mt-5(data-aos="zoom-in-down") 
      table.table 
        thead      
          tr
            td.table-color-1 Clic izquierdo 
            td.table-color-1 Selecciona los elementos de Blender. 
          tr
            td.table-color-1 Clic derecho 
            td.table-color-1 Despliega el menú contextual. 
          tr
            td.table-color-1 Botón medio 
            td.table-color-1 Al girarlo podremos hacer zoom in - zoom out, al presionarlo y mantenerlo, podremos girar la vista en torno al objeto. 
          tr
            td.table-color-2 Alt + botón del medio presionado 
            td.table-color-2 Cambia las vistas en el escenario (frontal, top, lateral). 
          tr
            td.table-color-3 Shift+clic derecho
            td.table-color-3 Posiciona el cursor 3D donde hacemos el clic.
          tr
            td.table-color-4 Alt+clic izquierdo 
            td.table-color-4 Selección con rectángulo.
          tr
            td.table-color-4 Alt+clic izquierdo
            td.table-color-4 Selección libre.
          tr
            td.table-color-4 Alt+botón medio 
            td.table-color-4 Selección libre.
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="slide-left")
        .tarjeta.color-primario.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h5.mb-0 Atendiendo al reconocimiento del mouse para un efectivo uso del <i>software</i> Blender, a continuación, se encuentra un documento que tendrá las indicaciones de cómo instalarlo; así mismo, permite conocer las diferentes interfaces y ventanas directamente en el <i>software</i>, el cual se encuentra en el documento adjunto para descarga:
                .col-sm-auto
                  a.boton.color-acento-contenido.beat(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p(data-aos="fade-down").mt-5 Ahora bien, es momento de conocer las diferentes técnicas de modelado, las cuales se podrán poner en práctica bajo la realización de estas en el software Blender, entre ellas están el Box Modeling, Sculpting, Nurbs. Conozcámoslas:  

    TabsA.color-primario.mt-5(data-aos="fade-down")
      .tarjeta.color-primario--borde.p-4(titulo="Box Modeling")
        h4 Box Modeling
        p Es la técnica más utilizada, se parte de una primitiva o malla preestablecida, como podría ser una esfera, un plano, un cubo, un cono etc. Las cuales vienen integradas en blender. Para lo cual una vez teniéndolas en el escenario, se le agregaran polígonos, extrayendo, biselando, escalando caras, vértices y bordes. 
        img.img-a.img-t(src='@/assets/ilustraciones/img2.jpg', alt='')

      .tarjeta.color-primario--borde.p-4(titulo="Sculpting")
        h4 Sculpting
        p En esta técnica de modelado se parte de un elemento del propio software, y en este caso el modelado se desarrolla como un esculpido en la vida real con masilla, es decir aplicando presión, puliendo, cortando, suavizando. Con él se pueden conseguir resultados visuales muy detallados, los cuales funcionan para mostrar un tipo de estilo, pero no para animar, puesto que la cantidad de polígonos es demasiada para que cualquier hardware la soporte. 
        .tarjeta.tarjeta--azul.slide-bg-1.p-4.mt-4
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-12
                .row.justify-content-center.align-items-center
                  .col-10
                    img.img-a.img-t(src='@/assets/ilustraciones/img3.jpg', alt='')
      
            .row.justify-content-center.align-items-center
              .col-md-12
                .row.justify-content-center.align-items-center
                  .col-10
                    img.img-a.img-t(src='@/assets/ilustraciones/img4.jpg', alt='')

      .tarjeta.color-primario--borde.p-4(titulo="NURBS")
        h4 NURBS
        p Partiendo de líneas se pueden generar superficies que den un aspecto muy orgánico. Como por ejemplo terrenos irregulares de la naturaleza. Luego esa curva la podemos convertir en malla.  
        .tarjeta.tarjeta--azul.slide-bg-1.p-4.mt-4
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-12
                .row.justify-content-center.align-items-center
                  .col-10
                    img.img-a.img-t(src='@/assets/ilustraciones/img5.jpg', alt='')
      
            .row.justify-content-center.align-items-center
              .col-md-12
                .row.justify-content-center.align-items-center
                  .col-10
                    img.img-a.img-t(src='@/assets/ilustraciones/img6.jpg', alt='')

            .row.justify-content-center.align-items-center
              .col-md-12
                .row.justify-content-center.align-items-center
                  .col-10
                    img.img-a.img-t(src='@/assets/ilustraciones/img7.jpg', alt='')                    

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
