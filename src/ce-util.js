// Function to return the correct instance body for a given vendor, this is an area where individual nuances pertaining a vendor (Element) must be known - documentation for these nuances can be found here: https://developers.cloud-elements.com/docs/elements.html
// At the end of the authentication flow, the correct vendor code/token/whatever needs to be sent to Cloud Elements in order to successfully return an `Element Token` to be used to make API calls against the correct vendor instance
const createInstanceBody = (elementKey, code, appURL, vendorData, bonusObj) => {
    if (elementKey && code && vendorData) {
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
            "name": "Boilerplate_Demo_" + elementKey + " " + (new Date()).getTime()
        };
        // Deal with realmId and scope for Quickbooks!
        if (elementKey === "quickbooks") {
            postInstanceBody.configuration["use_sandbox"] = true;
            postInstanceBody.configuration["scope"] = "com.intuit.quickbooks.accounting openid profile email phone address"
            postInstanceBody.providerData.realmId = bonusObj.realmId;
        };
        if (elementKey === "shopify") {
            postInstanceBody.configuration["shopify.site.address"] = "cloudelements-demo";
            postInstanceBody.configuration["oauth.scope"] = "write_orders,write_products,write_customers,read_orders,read_all_orders";
        };
        return postInstanceBody;
    } else {
        throw new Error("missing required parameters for instance body");
    }
};


module.exports = {
    instanceBody: createInstanceBody
}