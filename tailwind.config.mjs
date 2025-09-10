export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        "default-ellipse": "polygon(70% 80%, 100% 70%, 100% 100%, 80% 100%)", // First ellipse
        "expanded-ellipse": "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Full card size
        "default-circle": "circle(40% at 80% 85%)", // Circular shape
        "expanded-circle": "circle(100% at 50% 50%)", // Full card size in circular form
        "default-hexagon":
          "polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)", // Hexagon shape
        "expanded-hexagon": "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Expanded full card
        "default-polygon5": "polygon(26% 27%, 100% 63%, 100% 100%, 15% 100%)", // 4th card polygon
        "expanded-polygon5": "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Full card expansion for 4th card
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // First ellipse
        ".clip-default": {
          clipPath: "polygon(36% 63%, 100% 44%, 100% 100%, 54% 100%)",
          WebkitClipPath: "polygon(36% 63%, 100% 44%, 100% 100%, 54% 100%)",
        },
        ".clip-expanded": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        // Second circle
        ".clip-default2": {
          clipPath: "circle(40% at 80% 85%)", // Circle
          WebkitClipPath: "circle(40% at 85% 90%)",
        },
        ".clip-expanded2": {
          clipPath: "circle(100% at 50% 50%)", // Fully expanded circle
          WebkitClipPath: "circle(100% at 50% 50%)",
        },
        // Hexagon
        ".clip-default3": {
          clipPath:
            "polygon(78% 52%, 102% 63%, 110% 27%, 111% 100%, 49% 100%, 44% 67%)",
          WebkitClipPath:
            "polygon(78% 52%, 102% 63%, 110% 27%, 111% 100%, 49% 100%, 44% 67%))",
        },
        ".clip-expanded3": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          WebkitClipPath:
            "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
        },
        ".clip-default5": {
          clipPath: "polygon(46% 49%, 100% 69%, 100% 100%, 44% 100%)",
          WebkitClipPath: "polygon(46% 49%, 100% 69%, 100% 100%, 44% 100%)",
        },
        ".clip-expanded5": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Fully expanded shape
          WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
       

        "@screen sm": {
          ".clip-default": {
            clipPath: "polygon(50% 59%, 100% 44%, 100% 100%, 60% 100%)",
            WebkitClipPath: "polygon(50% 59%, 100% 44%, 100% 100%, 60% 100%)",
          },
          ".clip-expanded": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          ".clip-default3": {
            clipPath:
              "polygon(78% 52%, 103% 63%, 110% 30%, 111% 100%, 59% 100%, 54% 67%)",
            WebkitClipPath:
              "polygon(78% 52%, 103% 63%, 110% 30%, 111% 100%, 59% 100%, 54% 67%)",
          },
          ".clip-expanded3": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
          },
          ".clip-default5": {
            clipPath: "polygon(60% 49%, 100% 69%, 100% 100%, 55% 100%)",
            WebkitClipPath: "polygon(60% 49%, 100% 69%, 100% 100%, 55% 100%)",
          },
          ".clip-expanded5": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Fully expanded shape
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
        },

        "@screen lg": {
          ".clip-default": {
            clipPath: "polygon(42% 59%, 100% 44%, 100% 100%, 51% 100%)",
            WebkitClipPath: "polygon(42% 59%, 100% 44%, 100% 100%, 51% 100%)",
          },
          ".clip-expanded": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          ".clip-default3": {
            clipPath:
              "polygon(78% 52%, 103% 63%, 133% 33%, 119% 100%, 55% 100%, 49% 64%)",
            WebkitClipPath:
              "polygon(78% 52%, 103% 63%, 133% 33%, 119% 100%, 55% 100%, 49% 64%)",
          },
          ".clip-expanded3": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
          },
        },

        "@screen xl": {
          ".clip-default": {
            clipPath: "polygon(50% 59%, 100% 44%, 100% 100%, 60% 100%)",
            WebkitClipPath: "polygon(50% 59%, 100% 44%, 100% 100%, 60% 100%)",
          },
          ".clip-expanded": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          ".clip-default3": {
            clipPath:
              "polygon(78% 52%, 103% 63%, 110% 30%, 111% 100%, 59% 100%, 54% 67%)",
            WebkitClipPath:
              "polygon(78% 52%, 103% 63%, 110% 30%, 111% 100%, 59% 100%, 54% 67%)",
          },
          ".clip-expanded3": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
          },
        },
      });
    },
  ],
};
