module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],

  rules: {
    /* Aceptar BEM: block__element--modifier */
    "selector-class-pattern": [
      "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$",
      {
        message: "Clases deben seguir BEM: block__element--modifier"
      }
    ],

    /* PERMITIR bloques vacíos (porque estás estructurando las páginas) */
    "block-no-empty": null,

    /* PERMITIR selectores anidados sin & */
    "selector-nested-pattern": null,

    /* SCSS moderno */
    "scss/at-rule-no-unknown": true,

    /* Variables SCSS y CSS */
    "value-keyword-case": null,

    /* Autoprefixer se encarga de los prefijos */
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "selector-no-vendor-prefix": null,
    "media-feature-name-no-vendor-prefix": null,

    /* Permitir @layer, @container, @supports */
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "use",
          "mixin",
          "include",
          "extend",
          "layer",
          "container",
          "supports"
        ]
      }
    ]
  }
};
