const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware(["/members", "members/new"], {
            target: "http://52.79.85.130",
            changeOrigin: true,
            ws: true,
        })
    );
};
