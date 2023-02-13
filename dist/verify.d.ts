export type Payload = {
    jti: string;
    ref: string;
    iss: string;
    sub: string;
    aud: string[];
    sco: string[];
    nbf: number;
    iat: number;
    exp: number;
};
export type Token = Payload & {
    assert: (scope: string) => void;
};
export default function verify(jwt: string, spki?: string, alg?: string): Promise<Token>;
