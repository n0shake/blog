const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("link", {
      key: "google-fonts-barlow",
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    }),
    React.createElement("link", {
      key: "google-fonts-gstatic",
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    }),
    React.createElement("link", {
      key: "google-fonts-barlow-css",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400&display=swap",
    }),
  ])
}
