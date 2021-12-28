module.exports = {
  purge: {
    enabled: true,
    content: [
      'src/pages/**/*.njk'
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      'sans': "'Epilogue', sans-serif",
      'serif': "'Nanum Myeongjo', serif",
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
