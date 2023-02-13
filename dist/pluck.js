export default function pluck(req) {
    const authorization = req?.headers?.authorization || req?.headers?.Authorization;
    const hasBearerToken = authorization?.split(" ")[0] === "Bearer";
    return hasBearerToken ? authorization.split(" ")[1] : (req?.query?.token || undefined);
}
//# sourceMappingURL=pluck.js.map