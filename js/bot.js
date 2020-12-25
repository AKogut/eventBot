let buttonSend = document.getElementById("send");


buttonSend.onclick = function (){
    let fieldName = document.getElementById("name").value;
    let fieldPhone = document.getElementById("phone").value;
    let fieldMessage = document.getElementById("message").value;
    console.log(fieldName);
    console.log(fieldPhone);
    console.log(fieldMessage);
    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1422093257:AAGqVI8_uGbHTCrMLqDIB6mGYgIs-rGcTWw/sendMessage?text= Name: ${fieldName}%0APhone: ${fieldPhone}%0AMessage: ${fieldMessage}&chat_id=-463520394`, false);
    postInfo.send();
}