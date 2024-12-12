import express, {Router, Request, Response} from "express";

export const router: Router = express.Router();

// localhost:3000/hello/Jeroen
router.route("/:name")
    .get((req: Request, res: Response) => {
        let name: string = req.params.name;
        res.status(200).send("<b>Hello " + name + "</b>");
    });

    // localhost:3000/hello?name=Jeroen
    router
        .route("/")
        .get((req: Request, res: Response) => {
            let name: any = req.query.name;
            res.set("Content-Type", "text/html");
            res.type("text/html"); //zelfde als bovenstaande
            res.status(200).send("<b>Hello " + name + "</b>");
          })
          .post((req: Request, res: Response) => {
            let data = req.body;
            res.status(200).send(data);
            //res.sendStatus(200); //verkorte methode van bovenstaande
          });