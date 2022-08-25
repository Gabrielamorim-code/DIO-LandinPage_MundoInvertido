
import { getHellfireClubSubscriptions, subscribeToHellfireClub } from "./firebase/hellfire-clube.js";


const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscribe = document.getElementById('btnSubscribe');

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name: txtName.value, 
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no banco de Dados!
    const subscriptionId =  await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})

async function loadData() {
    const subscriptions =  await getHellfireClubSubscriptions()

    /*subscriptionsList.innerHTML = subscriptions.map(sub =>`
        <li>
            ${sub.name}
        </li>
    `).join('')*/
    console.log(subscriptions)
}

loadData()