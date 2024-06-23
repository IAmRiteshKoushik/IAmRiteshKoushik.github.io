import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {},
    },
  plugins: [],
});

