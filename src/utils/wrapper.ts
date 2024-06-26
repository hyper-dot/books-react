import { NextFunction, Request, Response, RequestHandler } from 'express'

export const asyncWrapper = (handler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (error) {
      next(error) // Pass any caught errors to Express error handler
    }
  }
}
