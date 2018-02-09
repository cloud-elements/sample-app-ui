const dummyContacts = [
    {id: 1, "First Name": 'Jack', "Last Name": 'Black', "Email": 'jack@funny.com', "Phone": '123-456-7890'},
    {id: 2, "First Name": 'Steve', "Last Name": 'Martin', "Email": 'steve@laughs.com', "Phone": '555-000-4422'}
]

const dummyGenerator = (contentType) => {
    let data;
    switch (contentType) {
        case 'contacts':
            // return dummy contact data
            data = dummyContacts;
            break;
        default:
            data = null;
            break;
    }
    return data;
}

const headerGenerator = (contentType) => {
    let headers;
    switch (contentType) {
        case 'contacts':
            headers = Object.keys(dummyContacts[0]).filter(key => key !== 'id');
            break;
        default:
            headers = null;
            break;
    }
    return headers;
}

export { dummyGenerator, headerGenerator };