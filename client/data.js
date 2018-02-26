export const about = {
  image: "https://i.imgur.com/zGYLktc.png",
  description: `Hi, I'm Tom. I am a Front-end Developer and graduate of Website Development. I build everything, from small web components to large scale interactive applications. Check out my skills and development tools below or view some of my recent work in the Projects section.`,
  skills: [
    {
      heading: "Languages",
      subheading: "I am proficient in the following languages",
      items: ["JavaScript", "Java", "C#", "HTML", "CSS", "SQL"]
    },
    {
      heading: "Frameworks",
      subheading: "Web frameworks I've used",
      items: ["React", "Vue.js", ".NET MVC"]
    },
    {
      heading: "State Management",
      subheading:
        "State Management tools I've used",
      items: ["Redux", "Mobx"]
    },
    {
      heading: "Databasing",
      subheading: "Database types and technologies I've used",
      items: ["SQL", "Firebase", "mongoDB"]
    },
    {
      heading: "Dev Tools",
      subheading: "Tools and utilities I use in my development environment",
      items: [
        "Node JS",
        "NPM",
        "Git",
        "Github",
        "Webpack",
        "Jest",
        "Travis CI",
        "Husky",
        "Semantic Release",
        "VS Code",
        "Atom Editor"
      ]
    }
  ]
};

/* 
const example_project = {
  projectName: {
    name: "projectname",
    heading: "PROJ_NAME",
    subheading: "PROJ_SUBHEADING",
    description: "PROJ_DESCRIPTION",
    images: [{ original: "" }, { original: "" }, { original: "" }],
    technologies: [
      { name: "TECH_NAME", description: "TECH_DESC", link: "TECH_LINK" }
    ],
    links: {
      github: "EXT_LINK",
      npm: "EXT_LINK",
      demo: "EXT_LINK"
    },
    resources: [
      { name: "", alias: "", link: "" },
      { name: "", alias: "", link: "" }
    ],
    tags: ["tag_one", "tag_one"]
  }
};
*/

export const projects = {
  palettetown: {
    name: "palettetown",
    heading: "Palette Town",
    subheading:
      "A sophisticated color palette generation utility for designers & developers",
    description: `Palette Town is a tool for creating and refining unique color palettes for your website or other project. With it, you can generate triadic, tetradic, square, pentagonal color harmonies or alternatively an entirely randomized color palette. 
    Reorder a generated palette by dragging and dropping its swatches or by clicking the shuffle and reverse buttons. Modify a given swatch's color values within your preferred color space or, alternatively, add and remove swatches at will. 
    With Palette Town you can save and name your palettes to the Favorites section and easily export its hex, rgb, hsl or cmyk color values to your project.`,
    images: [
      { original: "https://i.imgur.com/3iG9kU9.png" },
      { original: "https://i.imgur.com/KnP4AzG.png" },
      { original: "https://i.imgur.com/134eGjO.png" },
      { original: "https://i.imgur.com/8B91few.png" }
    ],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      },
      {
        name: "mobx",
        description: "Simple, scalable state management",
        link: "https://github.com/mobxjs/mobx"
      },
      {
        name: "react-sortable-hoc",
        description:
          "A set of higher-order components to turn any list into an animated, touch-friendly, sortable list",
        link: "https://github.com/clauderic/react-sortable-hoc"
      },
      {
        name: "react flip move",
        description:
          "Effortless animation between DOM changes (eg. list reordering) using the FLIP technique",
        link: "https://github.com/joshwcomeau/react-flip-move"
      },
      {
        name: "color-convert",
        description: "Plain color conversion functions in JavaScript",
        link: "https://github.com/Qix-/color-convert"
      },

      {
        name: "color-namer",
        description:
          "Converts a provided color to the Lab* color space and calculates its Euclidean distance from a set of colors with known names.",
        link: "https://github.com/zeke/color-namer"
      },
      {
        name: "static-site-generator-webpack-plugin",
        description:
          "Minimal, unopinionated static site generator powered by webpack",
        link:
          "https://github.com/markdalgleish/static-site-generator-webpack-plugin"
      },
      {
        name: "css modules",
        description:
          "Seamless mapping of class names to CSS modules inside of React components",
        link: "https://github.com/css-modules/css-modules"
      },
      {
        name: "font awesome",
        description: "Popular vector icons and logos library",
        link: "https://fontawesome.com/"
      },
      {
        name: "webpack",
        description:
          "A bundler for javascript and friends. Packs many modules into a few bundled assets",
        link: "https://github.com/webpack/webpack"
      },
      {
        name: "travis ci",
        description:
          "Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.",
        link: "https://travis-ci.org/"
      }
    ],
    links: [
      { name: "github", link: "https://github.com/plexey/palette-town" },
      { name: "view live", link: "http://palettetown.surge.sh/" }
    ],
    resources: [
      {
        name: "This project is online at ",
        alias: "palettetown.surge.sh",
        link: "http://palettetown.surge.sh/"
      },
      {
        name: "View the source code on my ",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/palette-town"
      }
    ],
    tags: [
      "javascript",
      "react",
      "mobx",
      "css modules",
      "server rendering",
      "travis ci"
    ]
  },
  reactdepthoffield: {
    name: "reactdepthoffield",
    heading: "React Depth of Field",
    subheading:
      "A React module for applying a dynamic, animated depth of field effect to a set of elements",
    description: `This module is a React component designed to apply an adjustable, animatable depth of field effect to a set of provided children. Amongst other props, it takes a set of children and a designated focus point. The focus point is the index of the child element to be in focus. 
      From the designed focus point, the module applies a depth of field effect to its children centered on a given child by programmatically applying CSS blur filters of increasing strengths to each of its children above and below the focus point. 
      Changing the focus point to a different child index will initiate an animated transition from the original index to the new index, simulating a camera focus pull. The module also accepts a provided blur increment as well as an animation time prop. The former controls the strength of depth of field effect while the latter controls the time it takes for the focus point to transition from one child to an adjacent child.`,
    images: [
      { original: "https://i.imgur.com/CzyYmg4.png", thumbnail: "" },
      { original: "https://i.imgur.com/o4cFNqy.png", thumbnail: "" },
      { original: "https://i.imgur.com/AVLO0Hc.png", thumbnail: "" }
    ],
    links: [
      { name: "github", link: "https://react-depth-of-field" },
      {
        name: "npm",
        link: "https://www.npmjs.com/package/react-depth-of-field"
      },
      { name: "view demo", link: "http://react-depth-of-field.surge.sh/" }
    ],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      },
      {
        name: "webpack",
        description:
          "A bundler for javascript and friends. Packs many modules into a few bundled assets",
        link: "https://github.com/webpack/webpack"
      },
      {
        name: "husky",
        description: "Git hooks made easy",
        link: "https://github.com/typicode/husky"
      },
      {
        name: "semantic-release",
        description:
          "Fully automated version management and package publishing",
        link: "https://github.com/semantic-release/semantic-release"
      },
      {
        name: "travis ci",
        description:
          "Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.",
        link: "https://travis-ci.org/"
      }
    ],
    resources: [
      {
        name: "This project is online at ",
        alias: "react-depth-of-field.surge.sh",
        link: "http://react-depth-of-field.surge.sh/"
      },
      {
        name: "View this package is online at ",
        alias: "MY NPM",
        link: "https://www.npmjs.com/package/react-depth-of-field"
      },
      {
        name: "View the source code on my ",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/react-depth-of-field"
      }
    ],
    tags: ["javascript", "react", "husky", "travis ci"]
  },

  reactreduxtodo: {
    name: "reactreduxtodo",
    heading: "React Redux Todo",
    subheading: "A todo app built with React & Redux",
    description:
      "A simple todo app built with React & Redux featuring animated list items using the react-flip-move package. This application adheres to the Ducks: Redux Reducer Bundles philosophy.",
    images: [
      { original: "https://i.imgur.com/lTugTvJ.png", thumbnail: "" },
      { original: "https://i.imgur.com/oU4cqW3.png", thumbnail: "" },
      { original: "https://i.imgur.com/6cTh9mo.png", thumbnail: "" }
    ],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      },
      {
        name: "redux",
        description: "Predictable state container for JavaScript apps",
        link: "https://github.com/reactjs/redux"
      },
      {
        name: "css modules",
        description:
          "Seamless mapping of class names to CSS modules inside of React components",
        link: "https://github.com/css-modules/css-modules"
      },
      {
        name: "react flip move",
        description:
          "Effortless animation between DOM changes (eg. list reordering) using the FLIP technique",
        link: "https://github.com/joshwcomeau/react-flip-move"
      },
      {
        name: "font awesome",
        description: "Popular vector icons and logos library",
        link: "https://fontawesome.com/"
      },
      {
        name: "webpack",
        description:
          "A bundler for javascript and friends. Packs many modules into a few bundled assets",
        link: "https://github.com/webpack/webpack"
      },
      {
        name: "travis ci",
        description:
          "Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.",
        link: "https://travis-ci.org/"
      }
    ],

    links: [
      { name: "github", link: "https://github.com/plexey/react-redux-todo" },
      { name: "view demo", link: "http://reactreduxtodo.surge.sh/" }
    ],
    resources: [
      {
        name: "This project is online at ",
        alias: "reactreduxtodo.surge.sh",
        link: "http://reactreduxtodo.surge.sh/"
      },
      {
        name: "View the source code on my ",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/react-redux-todo"
      }
    ],
    tags: ["javascript", "react", "redux"]
  },

  personalwebsite: {
    name: "personalwebsite",
    heading: "Personal Website",
    subheading:
      "Built from the ground up in React and custom styled components.",
    description:
      "This website functions as a portfolio of my recent web development projects. It features a simple UI built with contemporary web technologies in order to produce a consistent and fast user experience across different screen sizes and platforms.",
    images: [
      { original: "https://i.imgur.com/tBng7lG.png" },
      { original: "https://i.imgur.com/XVLTKAS.png" }
    ],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      },
      {
        name: "react-router",
        description: "Declarative routing for React",
        link: "https://github.com/ReactTraining/react-router"
      },

      {
        name: "styled-components",
        description:
          "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress",
        link: "https://github.com/styled-components/styled-components"
      },
      {
        name: "firebase",
        description: "a mobile and web application development platform ",
        link: "https://firebase.google.com/"
      },
      {
        name: "webpack",
        description:
          "A bundler for javascript and friends. Packs many modules into a few bundled assets",
        link: "https://github.com/webpack/webpack"
      },
      {
        name: "travis ci",
        description:
          "Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.",
        link: "https://travis-ci.org/"
      },
      {
        name: "font awesome",
        description: "Popular vector icons and logos library",
        link: "https://fontawesome.com/"
      }
    ],
    links: [
      { name: "github", link: "https://github.com/plexey/personal-website" }
    ],
    resources: [
      {
        name: "View the source code on my ",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/personal-website"
      }
    ],
    tags: ["javascript", "react", "css in js", "firebase"]
  },

  firebaseauthentication: {
    name: "firebaseauthentication",
    heading: "Firebase Authentication",
    subheading:
      "A React + Redux application showcasing Firebase user authentication and databasing",
    description:
      "A web app showcasing Firebase user authentication via the email/password sign-in method. This project functions as a highly extensible foundation for building out modern web apps. The application view layer is built with React, with all state management controlled via Redux and application routing controled via React Router. The application view layer was prototyped mostly via the CSS in JS solution: Styled Components.",
    images: [
      { original: "https://i.imgur.com/wOGstnV.png" },
      { original: "https://i.imgur.com/sUoKdZN.png" }
    ],
    technologies: [
      {
        name: "firebase",
        description: "a mobile and web application development platform ",
        link: "https://firebase.google.com/"
      },
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      },
      {
        name: "redux",
        description: "Predictable state container for JavaScript apps",
        link: "https://github.com/reactjs/redux"
      },
      {
        name: "react-router",
        description: "Declarative routing for React",
        link: "https://github.com/ReactTraining/react-router"
      },
      {
        name: "styled-components",
        description:
          "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress",
        link: "https://github.com/styled-components/styled-components"
      }
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/plexey/firebase-authentication"
      }
    ],
    resources: [
      {
        name: "This project can be viewed on my",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/firebase-authentication"
      }
    ],
    tags: ["firebase", "react", "redux", "css in js"]
  },

  reactstack: {
    name: "reactstack",
    heading: "React Stack",
    subheading:
      "A React component facilitating stacking of and animated iteration through an set of elements",
    description:
      "Reack Stack is a react component that functions like an image gallery.",
    images: [
      { original: "https://i.imgur.com/V8U10g5.png" },
      { original: "https://i.imgur.com/2MRHBs8.png" },
      { original: "https://i.imgur.com/NnNURRG.png" }
    ],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      }
    ],
    links: [
      { name: "github", link: "https://github.com/plexey/react-stack" },
      { name: "live demo", link: "http://react-stack.surge.sh/" }
    ],
    resources: [
      {
        name: "this project is online at ",
        alias: "react-stack.surge.sh",
        link: "http://react-stack.surge.sh/"
      },
      {
        name: "source code available at ",
        alias: "MY GITHUB",
        link: "https://github.com/plexey/react-stack"
      }
    ],
    tags: ["javascript", "react"]
  },

  unaryclock: {
    name: "unaryclock",
    heading: "unary clock",
    subheading: "A simple unary clock web component",
    description: "A unary clock built with React and styled using CSS Grid",
    images: [{ original: "https://i.imgur.com/MchaUbd.png" }],
    technologies: [
      {
        name: "react",
        description: "A JavaScript library for building user interfaces",
        link: "https://reactjs.org/"
      }
    ],
    links: [
      { name: "github", link: "https://github.com/plexey/react-unary-clock" },
      { name: "codepen", link: "https://codepen.io/Trinca/pen/YrrGoN" }
    ],
    resources: [
      {
        name: "See it working at",
        alias: "codepen",
        link: "https://codepen.io/Trinca/pen/YrrGoN"
      },
      {
        name: "View code on my",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/react-unary-clock"
      }
    ],
    tags: ["css", "react", "javascript"]
  }
};
