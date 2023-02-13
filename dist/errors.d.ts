export declare class TokenNotFoundError extends Error {
    name: string;
    message: string;
}
export declare class TokenExpiredError extends Error {
    name: string;
    message: string;
}
export declare class RefreshTokenExpiredError extends Error {
    name: string;
    message: string;
}
export declare class TokenParseError extends Error {
    name: string;
    message: string;
}
export declare class RefreshTokenParseError extends Error {
    name: string;
    message: string;
}
export declare class ScopeError extends Error {
    name: string;
    constructor(scope: string);
}
