let button1 = document.querySelectorAll(".update1")
let button2 = document.querySelectorAll(".update2")
let deleteAll = document.querySelector('#delete')
deleteAll.addEventListener('click', del)

button1.forEach((element) => {
  element.addEventListener("click", update1)
});
button2.forEach((el) => {
  el.addEventListener("click", update2);
});


async function update1(){
    const questionS = this.parentNode.childNodes[1].innerText
    const option1S = this.parentNode.childNodes[4].innerText;
    const count1S = Number(this.parentNode.childNodes[6].innerText)
    const option2S = this.parentNode.childNodes[12].innerText;
    const count2S = Number(this.parentNode.childNodes[14].innerText);

    try{
        const response = await fetch('/update1', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'question': questionS,
                'option1': option1S,
                'count1': count1S,
                'option2': option2S,
                'count2': count2S
            })
        })
        const data = await response.json
        console.log(data)
        location.reload()
    } catch(err ){
        console.log(err);
    } 
}


 async function update2(){
    const questionS = this.parentNode.childNodes[1].innerText
    const option1S = this.parentNode.childNodes[4].innerText;
    const count1S = Number(this.parentNode.childNodes[6].innerText);
    const option2S = this.parentNode.childNodes[12].innerText;
    const count2S = Number(this.parentNode.childNodes[14].innerText);

    try{
        const response = await fetch('/update2', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'question': questionS,
                'option1': option1S,
                'count1': count1S,
                'option2': option2S,
                'count2': count2S
            })
        })
        const data = await response.json
        console.log(data)
        location.reload()
    } catch(err ){
        console.log(err);
    } 
}

async function del(){
    const response = await fetch("/delete", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'ques': 'yes'
      })
    })
    const data = await response.json;
    console.log(data);
    location.reload();
}