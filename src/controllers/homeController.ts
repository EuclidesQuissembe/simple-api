import { Request, Response } from "express";

export const home = (_: Request, res: Response) => {
  res.send({
    message: "Home",
  });
};
