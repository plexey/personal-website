const example = {
  projectName: {
    heading: "PROJ_NAME",
    subheading: "PROJ_SUBHEADING",
    description: "PROJ_DESCRIPTION",
    images: [
      { original: "", thumnail: "" },
      { original: "", thumnail: "" },
      { original: "", thumnail: "" }
    ],
    features: ["FEATURE_NAME", "FEATURE_NAME"],
    technologies: [
      { name: "TECH_NAME", description: "TECH_DESC", link: "TECH_LINK" }
    ],
    links: {
      github: "EXT_LINK",
      npm: "EXT_LINK",
      demo: "EXT_LINK"
    },
    resources: [
      { name: "this project is online at ", link: "" },
      { name: "source code available at ", link: "" }
    ]
  }
};

const content = {
  palettetown: {
    heading: "Palette Town",
    subheading:
      "A sophisticated color palette generation utility for designers & developers",
    description: `A sophisticated color palette generator and manipulation utility. Palette Town allows you to generate an infinite variety of color palettes from selected color harmonies and modifiers.Reorder color palettes arbitrarily by dragging and dropping swatches. Add and remove individual swatches from your palette or modify swatches color values in your preferred color space.`,
    images: [
      { original: "https://i.imgur.com/3iG9kU9.png"},
      { original: "https://i.imgur.com/134eGjO.png"},
      { original: "https://i.imgur.com/8B91few.png"}
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
      }
    ],
    links: {
      github: "https://github.com/plexey/palette-town",
      demo: "http://palettetown.surge.sh/"
    },
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
    ]
  },

  reactdepthoffield: {
    heading: "React Depth of Field",
    subheading:
      "A React module for applying a dynamic depth of field to a set of elements",
    description:
      "A React module for applying a dynamic depth of field effect to a set of elements.",
    images: [
      { original: "https://i.imgur.com/by5zndE.png", thumnail: "" },
      { original: "https://i.imgur.com/o4cFNqy.png", thumnail: "" },
      { original: "https://i.imgur.com/AVLO0Hc.png", thumnail: "" }
    ],
    links: {
      github: "https://github.com/plexey/react-depth-of-field",
      npm: "https://www.npmjs.com/package/react-depth-of-field",
      demo: "http://react-depth-of-field.surge.sh/"
    },
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
    ]
  },

  reactreduxtodo: {
    heading: "React Redux Todo",
    subheading: "A todo app built with React & Redux",
    description:
      "A simple todo app built with React & Redux. This app features animated list items using the react-flip-move package.",
    images: [
      { original: "https://i.imgur.com/lTugTvJ.png", thumnail: "" },
      { original: "https://i.imgur.com/oU4cqW3.png", thumnail: "" },
      { original: "https://i.imgur.com/6cTh9mo.png", thumnail: "" }
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
      }
    ],
    links: {
      github: "https://github.com/plexey/react-redux-todo",
      demo: "http://reactreduxtodo.surge.sh/"
    },
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
    ]
  },

  personalwebsite: {
    heading: "Personal Website",
    subheading: "My own personal website",
    description:
      "This is the project write-up for the website you're using it right now! This website was built with React and features an extremely minimal webpack configuration. The application source code utilises styled-components, an implementation of CSS in JS, and thus contains no CSS files at all!",
    images: [{ original: "https://i.imgur.com/liTvhh1.png", thumnail: "" }],
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
        name: "font awesome",
        description: "Popular vector icons and logos library",
        link: "https://fontawesome.com/"
      }
    ],
    links: {
      github: "https://github.com/plexey/personal-website"
    },
    resources: [
      {
        name: "View the source code on my ",
        alias: "GITHUB PAGE",
        link: "https://github.com/plexey/personal-website"
      }
    ]
  }
};

export default content;
