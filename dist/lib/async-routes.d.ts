declare type Route = (req: Request, res: Response) => AsyncRoute;
declare type AsyncRoute = (req: Request, res: Response, next: () => void) => void;
declare const asyncRoute: (route: Route) => (req: Request, res: Response, next: () => void) => void;
export default asyncRoute;
