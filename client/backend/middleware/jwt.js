import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401,"You are not authenticated!"))


  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isEnterprise = payload.isEnterprise;
    req.isPlanMember = payload.isPlanMember;
    next()
  });
};

export function localVariables(req, res, next) {
  res.app.locals = {
    OTP: null,
    resetSession: false,
  }
  next();
}