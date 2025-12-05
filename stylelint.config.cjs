/* stylelint.config.cjs */
module.exports = {
  extends: [
    "stylelint-config-standard-scss"
  ],
  
  // FORZAR LA SINTAXIS
  customSyntax: "postcss-scss",

  rules: {
    // REGLAS PRINCIPALES
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // REGLAS PERSONALIZADAS
    "max-nesting-depth": 3,
    "color-named": "never",
    "selector-max-id": 0,
    "no-descending-specificity": null,

    // BEM
    "selector-class-pattern": [
  "^[a-z]+(?:-[a-z]+)*(?:__(?:[a-z]+(?:-[a-z]+)*))?(?:--(?:[a-z]+(?:-[a-z]+)*))?$",
  { message: "La clase debe seguir BEM: bloque__elemento--modificador" }
],

    // SCSS PATTERNS
    "scss/percent-placeholder-pattern": [
      "^_[a-z0-9\\-]+$",
      { message: "Placeholder SCSS en minúscula y guiones" }
    ],
    "scss/at-mixin-pattern": "^mixin-[a-z0-9\\-]+$",
    "scss/at-function-pattern": "^[a-z0-9\\-]+$",
  }
};