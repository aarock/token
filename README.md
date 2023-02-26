# Token

Provides tools for signing and veryifying JSON Web Tokens (JWTs) using best practices.

## Simple Usage

```ts
import { sign, verify } from "@aarock/token"
import { fileURLToPath } from "url"
import { readFileSync } from "fs"

const publicKeyPath = fileURLToPath( new URL( "../keys/public.pem", import.meta.url ) )
const publicKey = return readFileSync( keyPath ).toString()
const jwt = sign( { foo: "bar", exp: "1h" }, publicKey )
const token = await verify( jwt )
console.log( token.foo ) // "bar"
```

## Advanced Usage

```ts
import { sign, verify, Token } from "@aarock/token"
import { fileURLToPath } from "url"
import { readFileSync } from "fs"

const privateKeyPath = fileURLToPath( new URL( "./path/to/private.pem", import.meta.url ) )
const privateKey = return readFileSync( keyPath ).toString()
const jwt = sign( { sco: [ "courses:read", "courses:write" ] }, privateKey, 'RS256', '1h' )

const publicKeyPath = fileURLToPath( new URL( "./path/to/public.pem", import.meta.url ) )
const publicKey = return readFileSync( keyPath ).toString()
const token = await verify( jwt, publicKey, 'RS256' )
token.assert( "courses:read" )
```
