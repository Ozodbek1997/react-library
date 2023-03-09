export const oktaConfig = {
    clientId: '0oa8as4r1hfoITdRB5d7',
    issuer: 'https://dev-33200405.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
    
}