export default function pluck ( ctx: any ): string {

	const authorization = ctx?.req?.headers?.authorization
		|| ctx?.req?.headers?.Authorization
		// as an expressjs request
		|| ctx?.headers?.Authorization
		|| ctx?.headers?.authorization
		// as a yoga + graphql-ws subscription param
		|| ctx?.params?.extensions?.headers?.Authorization
		|| ctx?.params?.extensions?.headers?.authorization
		// as a get request query parameter
		|| ctx?.req?.query?.token
		|| ctx?.query?.token

	return authorization?.replace( "Bearer ", "" )

}