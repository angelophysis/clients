const clients = [
    {
    name: 'João',
        email: 'joao@test.com'
    },

    {
        name: 'Paulo',
        email: 'paulo@test.com'
    },

    {
        name: 'Ricardo',
        email: 'ricardo@test.com'
    }
    ]

const list = document.getElementById('clients');

let index = 0;
while(index < clients.length){
    const client = clients[index];
    const listItem = document.createElement('li');
    const text = document.createTextNode(client.name);
    

    listItem.appendChild(text)

    list.appendChild(listItem)
    index ++;
}

