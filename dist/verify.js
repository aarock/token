import { importSPKI, jwtVerify } from 'jose';
import { ScopeError } from "./errors.js";
import url from "url";
import fs from "fs";
export default async function verify(jwt, spki, alg) {
    const publicKey = await importSPKI(spki || defaultPublicKey(), alg || 'RS256');
    const { payload } = await jwtVerify(jwt, publicKey);
    return {
        ...payload,
        assert: (scope) => {
            if (!payload.sco?.includes(scope)) {
                throw new ScopeError(scope);
            }
        }
    };
}
function defaultPublicKey() {
    const keyPath = url.fileURLToPath(new URL("../keys/public.pem", import.meta.url));
    return fs.readFileSync(keyPath).toString();
}
//# sourceMappingURL=verify.js.map