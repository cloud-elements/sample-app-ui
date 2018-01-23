// Function to return the correct instance body for a given vendor, this is an area where individual nuances pertaining a vendor (Element) must be known - documentation for these nuances can be found here: https://developers.cloud-elements.com/docs/elements.html
// At the end of the authentication flow, the correct vendor code/token/whatever needs to be sent to Cloud Elements in order to successfully return an `Element Token` to be used to make API calls against the correct vendor instance
const createInstanceBody = (elementKey, code, appURL, vendorData) => {
    let postInstanceBody = {
                "element": {
                    "key": elementKey
                },
                "providerData": {
                    "code": code
                },
                "configuration": {
                    "authentication.type": "oauth2",
                    "oauth.callback.url": (appURL || process.env.APP_URL),
                    "oauth.api.key": vendorData.vendorApiKey,
                    "oauth.api.secret": vendorData.vendorSecret
                },
                "tags": [
                    "saas_demo_boilerplate"
                ],
                "name": "SAAS_DEMO_" + (new Date()).getTime()
            };
        return postInstanceBody;
};


module.exports = {
    instanceBody: createInstanceBody
}