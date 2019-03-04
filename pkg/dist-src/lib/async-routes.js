// based on https://github.com/davesag/route-async
// https://itnext.io/using-async-routes-with-express-bcde8ead1de8
const asyncRoute = route => (req, res, next) => {
  Promise.resolve(route(req, res)).catch(next);
};

export default asyncRoute;