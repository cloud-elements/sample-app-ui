const dummyContacts = [{
        id: 1,
        "First Name": 'Jack',
        "Last Name": 'Black',
        "Email": 'jack@funny.com',
        "Phone": '123-456-7890'
    },
    {
        id: 2,
        "First Name": 'Steve',
        "Last Name": 'Martin',
        "Email": 'steve@laughs.com',
        "Phone": '555-000-4422'
    }
]

const dummyAccounts = [{
    id: 1,
    "Company Name": "Acme Inc",
    "Zip Code": "09876",
    "Phone": "800-555-1234"
}]

const dummyOrders =[{
    id: 1,
    "Order Total": "$10.09",
    "Customer Name": "Charlie Bucket",
    "Email": "charlie@chocolate.com",
    "Status": "paid"
}]

const dummyDataGenerator = (contentType) => {
    let data;
    switch (contentType) {
        case 'contacts':
            // return dummy contact data
            data = dummyContacts;
            break;
        case 'accounts':
            // return dummy account data
            data = dummyAccounts;
            break;
        case 'orders':
            // return dummy account data
            data = dummyOrders;
            break;
        default:
            data = [];
            break;
    }
    return data;
}

const dummyHeaderGenerator = (contentType) => {
    let headers;
    switch (contentType) {
        case 'contacts':
            headers = Object.keys(dummyContacts[0]).filter(key => key !== 'id');
            break;
        case 'accounts':
            headers = Object.keys(dummyAccounts[0]).filter(key => key !== 'id');
            break;
        case 'orders':
            headers = Object.keys(dummyOrders[0]).filter(key => key !== 'id');
            break;
        default:
            headers = [];
            break;
    }
    return headers;
}

export {
    dummyDataGenerator,
    dummyHeaderGenerator
};