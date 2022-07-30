const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware(["/members", "/me"], {
            target: "http://52.79.85.130",
            changeOrigin: true,
            ws: true,
        })
    );
};
