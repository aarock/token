export class TokenNotFoundError extends Error {
    name = "TokenNotFoundError";
    message = "A valid token could not be found in the current request context";
}
export class TokenExpiredError extends Error {
    name = "TokenExpiredError";
    message = "The bearer token in the current request has expired";
}
export class RefreshTokenExpiredError extends Error {
    name = "RefreshTokenExpiredError";
    message = "The refresh token in the current request has expired";
}
export class TokenParseError extends Error {
    name = "TokenParseError";
    message = "The bearer token in the current request context is invalid";
}
export class RefreshTokenParseError extends Error {
    name = "RefreshTokenParseError";
    message = "The refresh token in the current request context is invalid";
}
export class ScopeError extends Error {
    name = "ScopeError";
    constructor(scope) { super(`Insufficient scope: ${scope}`); }
}
//# sourceMappingURL=errors.js.map