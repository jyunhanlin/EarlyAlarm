const firebaseService = require('../services/firebase');

async function authenticate(req, res, next) {
  // const token = req.header('x-auth');

  console.log('auth middleware enter');
  const idToken = req.get('auth-token') || 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2OTExYjU1NjU5YTI5YmU3NTYyMDYzYmIxNzc2NWI1NDk4ZTgwZDYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWFybHktYWxhcm0tcHdhIiwibmFtZSI6Iuael-Wdh-e_sCIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLVBPMzBSUWdFWFE0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUU0LzVPdHBmWElXY3BvL3Bob3RvLmpwZyIsImF1ZCI6ImVhcmx5LWFsYXJtLXB3YSIsImF1dGhfdGltZSI6MTUzMjk2MTg0MywidXNlcl9pZCI6IjR1UHBBVGVYeG9SZmxMRUcwRFlUelRxOU40djIiLCJzdWIiOiI0dVBwQVRlWHhvUmZsTEVHMERZVHpUcTlONHYyIiwiaWF0IjoxNTMyOTYxODQ0LCJleHAiOjE1MzI5NjU0NDQsImVtYWlsIjoianl1bmhhbmxpbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNzc5NDIyMjQ4MDcxNzQzMjI1OSJdLCJlbWFpbCI6WyJqeXVuaGFubGluQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.FNwP36AzPAWt5lR4yY_gh1vSMOtU71JN8xGhJQwsqjqNOQUzgWSmtBUWtydDEaycHOhZw21xlUggIyBa_MaMf-k9_6sXbIn-9z1t57S0eSk-jkqGSSRmRSpPBRaNjKTbi3Tgw-h2ygceg7kmGx0t3sZdNfGfS9SA7A3S_gYUVfIpshl_sy9PQZshyVT52iU2Ii-1tW_CfN-9sQFN25eyza5y7FgPpZ_Ullg63M_MWl2Spawq-JlJt_Qn0e5ER09WuK2ErnKNcSS8o_Cu0ZWmof6bQNooAkd6sWQfeEVTPV_7O5Z9HGq7Ph2P1ceKSiBbVJf4mdOmezP5BP9eygsCXQ';
  try {
    const checkRevoked = true;
    const decodedToken = await firebaseService.verifyToken(idToken, checkRevoked);

    const uid = decodedToken.uid;
    console.log('uid', uid);
    // console.log('decodedToken', JSON.stringify(decodedToken));
    req.uid = uid;
    next();
  } catch(err) {
    console.log(err);
    res.status(401).send('unauth 88');

  }
}

module.exports = authenticate;