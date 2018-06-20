const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/v1/MarketData/*': '/$1',
  }))

function filterProperty(data, propNameArr, whereKey, whereArr) {
    return data.map((item) => {
        let obj = {};
        for (var whr = 0; whr < whereArr.length; whr++) {
            if (item[whereKey] && item[whereKey] == whereArr[whr]) {
                for (var i = 0; i < propNameArr.length; i++) {
                    obj[propNameArr[i]] = item[propNameArr[i]];
                }
            }
        }
        return obj;
    });
}

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  else if (req.query['what'])
  {
      var whatArr = req.query['what'].split(",");
      var whereKey = req.query['where'].split("=")[0];
      var whereArr = req.query['where'].split("=")[1].split(",");
      var newWhereArr = [];
      for (var i = 0; i < whereArr.length; i++)
      {
          newWhereArr.push(whereArr[i].replace("{", "").replace("}", "").replace(",", "").replace("'", "").replace("'", ""));
      }
      db = router.db;

      resource = req.url.substring(req.url.indexOf("/") + 1, req.url.indexOf("?"));
      arrObjs = db.get(resource).value();

      resp = filterProperty(arrObjs, whatArr, whereKey, newWhereArr);

      res.json(resp);
  }
  else {
      // proceed normally if no querystring
    // Continue to JSON Server router
    next()
  }
})

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})