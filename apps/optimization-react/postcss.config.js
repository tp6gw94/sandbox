// apps/<app-name>/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      config: 'apps/optimization-react/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
