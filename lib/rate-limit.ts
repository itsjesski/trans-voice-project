import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import { type Request } from "express-serve-static-core";
import slowDown from "express-slow-down";
import { NextApiRequest, NextApiResponse } from "next";

const applyMiddleware =
  (middleware: RateLimitRequestHandler) =>
  (request: NextApiRequest, response: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(request as any, response as any, (result) =>
        result instanceof Error ? reject(result) : resolve(result)
      );
    });

const getIP = (request: Request) =>
  request.ip ||
  request.headers["x-forwarded-for"] ||
  request.headers["x-real-ip"] ||
  request.connection.remoteAddress;

export const createCustomRateLimitMiddlewares = ({
  limit = 10,
  windowMs = 60 * 1000,
  delayAfter = Math.round(10 / 2),
  delayMs = 500,
} = {}) => [
  slowDown({
    keyGenerator: getIP as any,
    windowMs,
    delayAfter,
    delayMs: () => delayMs,
  }),
  rateLimit({ keyGenerator: getIP as any, windowMs, max: limit }),
];

export async function applyRateLimitMiddleware(
  request: NextApiRequest,
  response: NextApiResponse,
  middlewares: RateLimitRequestHandler[]
) {
  await Promise.all(
    middlewares
      .map(applyMiddleware)
      .map((middleware) => middleware(request, response))
  );
}

const defaultMiddlewares = createCustomRateLimitMiddlewares();

async function applyDefaultRateLimit(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await applyRateLimitMiddleware(request, response, defaultMiddlewares);
}
export default applyDefaultRateLimit;
