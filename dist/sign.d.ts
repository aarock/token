import { Payload } from './verify.js';
export default function sign(payload: Partial<Payload>, pkcs8?: string, alg?: string): Promise<string>;
