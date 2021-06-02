module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://nestoracerbo.vercel.app/`,
    // Your Name
    name: 'Néstor Acerbo',
    // Main Site Title
    title: `Néstor Acerbo | React Front End Developer`,
    // Description that goes under your name in main bio
    description: `React Front End Developer`,
    // Optional: Twitter account handle
    author: `@nlacerbo`,
    // Optional: Github account URL
    github: `https://github.com/NestorLA`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nestorleonelacerbo`,
    resume: `https://www.dropbox.com/s/mqqc692gsx8fdif/CV%20Nestor%20Acerbo%202021.pdf?dl=0`,
    // Content of the About Me section
    about: `Hola 👋. Soy Néstor Acerbo, desarrollador de Front End con experiencia en crear sitios y aplicaciones web en JavaScript y React. Mi principal objetivo es crear atractivas, accesibles y eficientes interfaces para las personas. Tengo mucha confianza en que puedo solucionar cualquier problema y ser una gran adición a cualquier equipo de trabajo.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Wizard Multistepper',
        description:
          'Trabajo freelance realizado en Next.js el cual es un formulario con multiples pasos. Se utiliza Context para el manejo de estados global, Reacstrap y Material-UI como herramientas de UI. Formik + Yup para el formulario y su validación. Para la traducción se utilizó next-translate.',
        link:
          'https://nextjs-argon-dashboard-master-nestorla.vercel.app/auth/wizard',
      },
      {
        name: 'Pokecommerce',
        description:
          'Proyecto final para el curso de React de Coderhouse. E-commerce de pokemons con carrito. Se utiliza Context para el manejo de estados, estilos con React-Bootstrap y Firebase para el back mediante conexión con API. Para el routeo se utilizó react-router-dom.',
        link: 'https://github.com/NestorLA/pokecommerce',
      },
      {
        name: 'NotasApp',
        description:
          'Aplicación web para guardar notas de forma simple y rápida. Confeccionado con Firebase, Bootswatch como herramienta CSS.',
        link: 'https://github.com/NestorLA/notasapp',
      },
      {
        name: 'CMYK Panel',
        description:
          'Una herramienta para gestión automatizada de los proyectos CMYK de FrontEndCafé. Hecho de forma grupal en el transcurso de 2 meses. Utiliza KeystoneJS como headlessCMS, conexión con Knex y ApolloGraphQL. Como framework de React usa Next.js. TailwindCSS para los estilos.',
        link: 'https://github.com/frontendcafe/cmyk-forest',
      },
      {
        name: 'Mecánica Yogui Landing Page',
        description:
          'Landing page responsive para negocio local. Construido con HTML5, Bootstrap4 y Netlify Forms para recibir los datos de contacto, conectado a Google Maps y Whatsapp.',
        link: 'https://github.com/NestorLA/mecanica-yogui-landing-page',
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Freelance',
        description: 'Front End Developer, Abril 2021 - Presente',
        link: 'https://github.com/NestorLA',
      },
            {
        name: 'FrontEndCafé',
        description: 'Front End Developer, Diciembre 2020 - Enero 2021',
        link: 'https://github.com/frontendcafe/cmyk-forest',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages & Frameworks',
        description: 'JavaScript (ES6+), React, React Hooks, Next.js.',
      },
      {
        name: 'Other',
        description: 'Firebase, Bootstrap4, Material-UI, Git, Netlify, Vercel.',
      },
      {
        name: 'Languages',
        description: 'English: B2 level.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nestor Acerbo portfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
