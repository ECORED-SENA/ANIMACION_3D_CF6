<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 2
      h1 Modelado inorgánico 
    .row.justify-content-center.align-items-center
      .col-lg-12.bg-img-1.p-5
        p(data-aos="fade-down")  El #[i hard surface], es un método que se enfoca en el modelado de objetos artificiales, que generalmente son rígidos y estáticos, los cuales se caracterizan por presentar formas angulares, curvas suaves, bordes y esquinas bien definidas y superficies lisas y planas, como máquinas, estructuras, edificios, armaduras, armas, vehículos, y en general cualquier objeto de apariencia dura o mecánica; a diferencia del modelado orgánico el cual se usa para modelar plantas, árboles, animales, humanos y objetos animados que necesiten deformarse. Pensemos, por ejemplo, en un samurái, en este caso se usarían técnicas de modelado orgánico para moldear al personaje y técnicas #[i hard surface] para modelar su armadura, su catana y demás elementos con apariencia sólida e inanimada. 
        img.img-a.img-t.my-5.yoyo(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img9.svg', alt='')
        p(data-aos="fade-down") Este método es más técnico, puesto que se necesitan medidas exactas, formas controladas y vértices muy bien alineadas, ya que se trabaja generalmente con planos y superficies lisas que deben conservar su forma, por ello tiene mayores restricciones al movernos en el espacio del modelo puesto que si se mueve uno de los vértices se corre el riesgo de que se deforme o se rompa la malla; aquí la topología y las subdivisiones son muy importantes a la hora de definir formas, esquinas y suavizar bordes dándole al modelado mayor realismo. Por estas razones, el #[i hard surface] se trabaja mejor en #[i softwares] industriales como #[i CADs, el solidworks, 3Dmax, inspiration], entre otros, pues permite trabajar con curvas, superficies y datos booleanos, ya que cuentan con herramientas más sofisticadas para trabajar con medidas exactas.

        p(data-aos="fade-down") A continuación, se presentan algunas imágenes que sirven de ejemplo de algunos modelos inorgánicos:

    .row.justify-content-center.align-items-center(data-aos="slide-down")
      .col-lg-12.slide-bg-3.px-5 
        .row.justify-content-start.align-items-center
          .col-5
            h4.mt-5(data-aos="fade-right") Ejemplos modelos Inorgánicos Hard Surface
            .hr-t        
        .tarjeta.tarjeta--azul.slide-bg-2.p-4
          SlyderA
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img10.jpg', alt='')      
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img11.jpg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img12.jpg', alt='')      
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img13.svg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img14.png', alt='')      
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img15.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img16.jpg', alt='')      
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img17.jpg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-a.img-t(src='@/assets/ilustraciones/img18.png', alt='')      


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p(data-aos="fade-down") Por último, al trabajar con el modelado inorgánico, se debe considerar el #[i concept art] del objeto que se va a modelar y buscar referencias, de cómo se ve y cómo funciona en la vida real; es decir, si lo que se va a diseñar es una estructura como una casa o un castillo hay que saber cómo luce, qué proporciones tiene, qué partes lo componen, los materiales de lo que está hecho, las texturas que presenta y demás detalles a tener en cuenta a la hora de modelar pues así lograremos darle un mayor realismo. Además, es necesario construir una topología limpia, para evitar problemas en etapas posteriores como en el mapeado de UVs, el texturizado y renderizado. 

        p(data-aos="fade-down") A continuación, se presenta el proceso a través de imágenes a manera de ejemplo:

    .row.mt-5(data-aos="flip-down")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img19.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.py-5.my-5.text-center Concept Art
              
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img20.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.py-5.my-5.text-center Sin Textura

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img21.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.py-5.my-5.text-center Pintura UV

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img22.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.py-5.my-5.text-center Modelado 3D

    h4(data-aos="fade-left").mt-5 Escenarios
    p(data-aos="fade-down") Las técnicas para crear escenarios son las mismas, salvo que en ciertas ocasiones se deben utilizar algunas herramientas, para crear más rápido terrenos o duplicar elementos en cantidad. Es así, como se puede utilizar modificadores, para generar geometrías y así crear un puente, en el cual emplearemos un nuevo modificador que servirá básicamente para agilizar trabajo a la hora de crear elementos arquitectónicos o elementos modulares, es decir que se repiten cíclicamente. Para ampliar la información de escenarios, lo invitamos a revisar la siguiente presentación:  

    .row.justify-content-center.align-items-center(data-aos="slide-down")
      .col-lg-12.slide-bg-3.px-5     
        .tarjeta.tarjeta--azul.slide-bg-2.p-4
          SlyderA
            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Biselado
                    .hr-t
                p.mt-4 Para ello comenzamos creando un cubo, y le aplicamos biselado en sus bordes para darle suavizado. Le agregamos 2 segmentos en las características de biselado.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img23.png', alt='')      

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Duplicado
                    .hr-t
                p.mt-4 Ahora duplicamos con shift + D 4 veces para generar la base de nuestro puente. 
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img24.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Modificador array
                    .hr-t
                p.mt-4 Como siguiente paso vamos a crear lo que serán los tablones de el puente, para ello los creamos con agregando un cubo a nuestra escena, le modificamos solo el borde frontal para darle un efecto rústico con biselado, ahora, queremos aplicarle el modificador array, que nos va a crear copias simultáneas una seguida de otra, para ello lo primero que debemos realizar es separar ese tablón que creamos de las demás geometrías, para ello seleccionamos el tablón completo y le damos a la tecla P. Con ello, saldrá una pestaña que nos dará la opción de separar, le damos por selección. Con ello nuestro objeto quedará separado de los demás y podremos agregar el modificador array.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img25.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Array 2
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img26.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Array Aplicado
                    .hr-t
                p.mt-4 Ahora duplicamos con shift + D 4 veces para generar la base de nuestro puente. 
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img27.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Puente
                    .hr-t
                p.mt-4 Seleccionamos las escalerillas y las reflejamos con la combinación de teclas cntrl + m, blender nos preguntará en qué eje, oprimimos x y veremos reflejado en el otro eje nuestro elemento.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img28.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Árboles
                    .hr-t
                p.mt-4 Repitiendo los pasos de extruir biselar, y utilizar el modificador array, generamos nuestro puente, con estas herramientas y estos pasos además del puente podremos crear infinidad de elementos en blender. Como por ejemplo a continuación árboles estilo lowpoly, en este caso usamos 3 conos y un cilindro bajando sus segmentos a 8 y para que queden unidos, le damos control + j para unirlos y luego le agregamos array para crear un bosque rápido, en este caso duplicamos nuestro árbol un par de veces y lo posicionamos aleatoriamente.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img29.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Multiplicación
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img30.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Edificios 1
                    .hr-t
                p.mt-4 Como también podemos jugar con loop cut para crear edificios rápidos, y luego agregarles array para generar una manzana de edificaciones.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img31.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Edificios 2
                    .hr-t
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img32.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Cortes y biselado
                    .hr-t
                p.mt-4 Realizamos los cortes y luego biselamos para generar las ventanas.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img33.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Movimiento Caras
                    .hr-t
                p.mt-4 Seleccionamos las caras de la ventana y las movemos hacia adentro con la tecla G. adicionalmente para darle un poco de suavizado se seleccionan todos los bordes externos y se le aplica biselado. 
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img34.png', alt='')   

            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Edificios modificados
                    .hr-t
                p.mt-4 Duplicamos el edificio y le hacemos unas ligeras modificaciones.

                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img35.png', alt='')                                                            
            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-start.align-items-center
                  .col-5
                    h4(data-aos="fade-right") Edificios + Array
                    .hr-t
                p.mt-4 Le damos control + J para unirlos y agregamos el modificador array y con esto generamos una sucesión de dichos edificios.
                img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img36.png', alt='')

    p(data-aos="fade-down").mt-5 Estimado aprendiz, para fortalecer y ampliar los conocimientos respecto al tema, lo invitamos a ver los siguientes videos, en los cuales veremos los principios básicos del modelado <i>hard surface</i> y además pondremos en práctica las técnicas de modelado utilizadas, para la creación de una mesa y una silla: 

    .row.mt-5(data-aos="slide-left")
      LineaTiempoD.color-primario
        .row.justify-content-center.align-items-center(numero="1" titulo="Ver video 1 Modelado hard Surface principios básicos")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
        .row.justify-content-center.align-items-center(numero="2" titulo="Ver video 2 Modelado Mesa")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
        .row.justify-content-center.align-items-center(numero="3" titulo="Ver video 3 Modelado silla")
          .col-lg-12
            figure.mt-3
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                     


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

<style lang="sass"></style>
