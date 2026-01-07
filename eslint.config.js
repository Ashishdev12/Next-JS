import nextConfig from "eslint-config-next";

const config = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: { browser: true, node: true },
    },
    rules: {},
  },
  ...nextConfig,
];

export default config;
export { config }; 