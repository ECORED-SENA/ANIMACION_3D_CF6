export default {
  global: {
    componenteFormativo: 'Modelado 3D',
    descripcionCurso:
      'El presente componente aborda técnicas de modelado para animación 3D, así mismo, presenta el desarrollo de elementos orgánicos e inorgánicos, que a partir de la topología, consolida una correcta realización de objetos; en este sentido, se presenta el uso de <i>software</i> especializado que posibilita la realización de las diversas acciones necesarias para el modelado 3D.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción Audiovisual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blender. (2019). Loop Cut - Blender 2.80 Fundamentals [Archivo de vídeo]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=-pCf3DjsEBg&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=17&ab_channel=Blender',
    },
    {
      referencia: 'Blender. (2021). Sculpting — Blender Manual. ',
      link:
        'https://docs.blender.org/manual/es/2.93/sculpt_paint/sculpting/index.html',
    },
    {
      referencia: 'Blender Foundation. (2021). Support. ',
      link: 'https://www.blender.org/support/',
    },
    {
      referencia:
        'Hemel, J. (2021). Blender Secrets (1st ed.). Jan van den Hemel.',
    },
    {
      referencia: 'MAXIMUM 3D WORLD. (2021). La topología facial. ',
      link:
        'http://3dtricksmaster.blogspot.com/2017/06/la-topologia-facial-cuantas-veces-nos.html',
    },
    {
      referencia:
        'MMasterbrock. (2021). Retopología en Blender [Archivo de vídeo]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=IBmIm9iqmGI&ab_channel=MMasterbrock',
    },
    {
      referencia:
        'Trazos. (2021). Retopología en 3D ¿Qué es y para qué sirve? ',
      link: 'https://trazos.net/retopologia-en-3d-que-es-y-para-que-sirve/',
    },
    {
      referencia: '3DMX Studio. (2020). Modelado Orgánico. ',
      link:
        'https://www.3d-mx.com/single-post/2019/09/17/modelado-org%C3%A1nico',
    },
  ],
  glosario: [
    {
      termino: '<i>Blocking</i>',
      significado:
        'Son elementos básicos, que permiten dar forma rápidamente a un objeto, con la finalidad de entender su forma general y a partir de ella empezar a esculpir.',
    },
    {
      termino: '<i>Highpoly</i>',
      significado:
        'Objeto con alta densidad poligonal, suele usarse para esculpido digital y para la creación de normal <i>maps</i>, no es óptimo para animación.',
    },
    {
      termino: '<i>Loops</i>',
      significado:
        'Conjunto de polígonos que tienen una orientación fluida y se conecta su primer y su último polígono.',
    },
    {
      termino: '<i>Lowpoly</i>',
      significado:
        'Objeto con baja densidad poligonal, conveniente para usarse en animación.',
    },
    {
      termino: 'Modelado',
      significado:
        'Es el proceso de representación de un objeto en 3 dimensiones, utilizando los ejes X, Y, Z.',
    },
    {
      termino: 'Normal map',
      significado:
        'Técnica de generar relieve a partir de las sombras de las texturas, generando profundidad y simulación de alto poligonaje.',
    },
    {
      termino: 'Retopología',
      significado:
        'Construcción de modelos de bajo poligonaje a partir de modelos de alto poligonaje.',
    },
    {
      termino: 'Subdivisiones',
      significado:
        'Permite a una malla de baja cantidad de polígonos, subdividir estos elementos en más cantidad, lo que permite un mejor detalle. ',
    },
    {
      termino: 'Textura',
      significado:
        'Es la forma artística para representar un elemento del mundo real en un objeto 2D que luego será asignado a un elemento 3D.',
    },
    {
      termino: 'UV mapping',
      significado:
        'Es el traspaso de información de un objeto 3D a un objeto 2D. ',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Johnier Felipe Perafan',
        cargo: 'Experto Temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto Temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia.',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseño Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital.',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
