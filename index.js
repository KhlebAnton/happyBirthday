const boxs = document.querySelectorAll('.box');
const total = document.getElementById("total");
const prise = document.querySelector('.prise');
boxs.forEach((box) => {

    box.addEventListener('click', () => {
        if (total.innerHTML > 0) {
            if (box.id === 'no') {


                box.id = 'select';
                box.querySelector('.no-answer').classList.add('active');

                total.innerHTML -= 1;
                chek();
            } else if(box.id === 'yes') {
                prise.classList.add('active')
                prise.innerHTML += "<audio src='Arsen_Shakhunts_-_S_Dnem_Rozhdeniya_sample.mp3' autoplay controls='controls'></audio>"
            }


        }

    })
}

)
function chek() {

    if (total.innerHTML == 0) {
        setTimeout(() => {
            alert('Зая, еще одну попытку даю');
            total.innerHTML = +total.innerHTML + 1;
        }, 1000)
    }
}