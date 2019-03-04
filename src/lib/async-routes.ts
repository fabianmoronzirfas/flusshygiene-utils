// based on https://github.com/davesag/route-async
// https://itnext.io/using-async-routes-with-express-bcde8ead1de8
type Route = (req: Request, res: Response) => AsyncRoute;
type AsyncRoute = (req: Request, res: Response, next: () => void) => void;
const asyncRoute = (route: Route) => (req: Request, res: Response, next: () => void) => {
  Promise.resolve(route(req, res)).catch(next);
};

export default asyncRoute;
