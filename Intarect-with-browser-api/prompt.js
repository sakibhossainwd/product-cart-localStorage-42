// alert('How are you')
const showAlert = () => {
    alert('Do you have? if Have! then give me some');
}

const lendMoney = () => {
   const result = confirm('I need 100k');
   console.log(result);
   if(result === true){
    alert('thanks for geving money')
   }
   else(
    console.log('Note it and i will see you in your bad time')
   )
}

const getInfo = () => {
    const name = prompt('tell your name');
    console.log(name);
    if(name === null){
        alert('please enter you name')
    }
    else{
        console.log('Thanks for give you name')
    }
}