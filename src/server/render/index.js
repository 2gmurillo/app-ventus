import getManifest from '../getManifest';

let files = false;
if (process.env.NODE_ENV !== 'development') files = getManifest();

const render = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="${
          files ? files['main.css'] : 'assets/app.css'
        }" type="text/css"></link>
        <title>Ventus</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="${
          files ? files['main.js'] : 'assets/app.js'
        }" type="text/javascript"></script>
          <script src="${
            files ? files['vendors.js'] : 'assets/vendor.js'
          }" type="text/javascript"></script>
      </body>
    </html>
    `;
};

export default render;
