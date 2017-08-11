import apigClientFactory from 'aws-api-gateway-client';

let config = {
    region: 'us-east-1',
    IdentityPoolId: 'us-east-1:4c3255a0-a10e-437d-84e5-2a7a2257eaf1',
    UserPoolId: 'us-east-1_herGd1bhX',
    ClientId: '6m0k1kfufqqlr0gkkmb1v6hfb8'
};


var apigClient = apigClientFactory.newClient(config);

export default apigClient;