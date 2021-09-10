'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active')
}



const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

    //CRUD - CREATE READ UPDATE DELETE
// CRUD - DELETE
    const deleteClient = (index) =>{
        const dbClient = readClient()
        dbClient.splice(index,1)
        setLocalStorage(dbClient)
    }

//CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);

}
// crud  - READ
const readClient = () => getLocalStorage();



// CRUD - CREATE
const createClient =  (client) =>{
    const dbClient = getLocalStorage ();
    dbClient.push (client);
    setLocalStorage(dbClient);
    
}
    const isValidFields = () =>{
        return document.getElementById('form').reportValidity()
    }
    //interação com o layout

const  clearFields = () =>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "");
}
//salvando dados do cliente
const saveClient = () =>{
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        } 
        const index = document.getElementById('nome').dataset.index
        if(index == 'new'){
        createClient(client)
        updateTable()
        closeModal()
        }else{
           updateClient(index, client);
           updateTable();
           closeModal();
        }

   
    }
}
//criando linha
const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow);
}
//limpar linhas
const clearTable = () =>{
    const rows = document.querySelectorAll('#tableClient>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () =>{
    
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
    

}
//linhas da tabela
const fillFields = (client) =>{
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
    document.getElementById('nome').dataset.index = client.index
}

//para editar os dados do cliente
const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client);
    openModal();
}
//deletar os dados
const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (response) {
                deleteClient(index);
                updateTable();
            }
        }
    }
}

//atualizar a tabela
updateTable()

    //eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose') //fechando apos clicar fazer a ação
    .addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click', saveClient); //ação para o botao salvar

document.querySelector('#tableClient>tbody').addEventListener('click', editDelete); //pegando dados do html