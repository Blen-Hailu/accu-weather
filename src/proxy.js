const {createProxyMiddleware} = require ("http-proxy-middleware")

module.exports =app =>{
  app.use
  createProxyMiddleware('/',
  {target: "http://dataservice.accuweather.com/locations/v1/cities/search",
  changeOrigin: true,

  })
}