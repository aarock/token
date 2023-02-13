import { importSPKI, jwtVerify } from 'jose'
import { ScopeError } from "./errors.js"
import url from "url"
import fs from "fs"

export type Payload = {
	jti: string
	ref: string
	iss: string
	sub: string
	aud: string[]
	sco: string[],
	nbf: number
	iat: number
	exp: number
}

export type Token = Payload & {
	assert: ( scope: string ) => void
}

export default async function verify ( jwt: string, spki?: string, alg?: string ) {
	const publicKey = await importSPKI( spki || defaultPublicKey(), alg || 'RS256' )
	const { payload } = await jwtVerify( jwt, publicKey )
	return {
		...payload,
		assert: ( scope: string ) => {
			if ( !( payload.sco as string )?.includes( scope ) ) {
				throw new ScopeError( scope )
			}
		}
	} as Token
}

function defaultPublicKey () {
	const keyPath = url.fileURLToPath( new URL( "../keys/public.pem", import.meta.url ) )
	return fs.readFileSync( keyPath ).toString()
}