import { importPKCS8, SignJWT } from 'jose'
import { generate } from "@aarock/flake"
import { fileURLToPath } from "url"
import { readFileSync } from "fs"
import { Payload } from './verify.js'

export default async function sign ( payload: Partial<Payload>, pkcs8?: string, alg?: string ) {
	const privateKey = await importPKCS8( pkcs8 || defaultPrivateKey(), alg || 'RS256' )
	return await new SignJWT( payload )
		.setJti( payload.jti || generate() )
		.setProtectedHeader( { alg: alg || 'RS256' } )
		.setIssuedAt()
		.setExpirationTime( payload.exp || '1h' )
		.sign( privateKey )
}

function defaultPrivateKey () {
	const keyPath = fileURLToPath( new URL( "../keys/private.pem", import.meta.url ) )
	return readFileSync( keyPath ).toString()
}