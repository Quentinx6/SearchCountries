document.addEventListener("DOMContentLoaded", () => {
    fetch("http://api.countrylayer.com/v2/all?access_key=fc91c1fe5b588cfc0ea5a55073d0761f")
    
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            let select = document.getElementsByClassName("select")[0];
            let namePays = document.getElementsByClassName("namePays")[0];
            let populationPays = document.getElementsByClassName("populationPays")[0];
            let capitalPays = document.getElementsByClassName("capitalPays")[0];
            let options = document.getElementsByTagName("option");
            select.addEventListener("change", () => {
                let code3 = select.value;
                populationPays.innerHTML = data[code3]["capital"];
                console.log(data[code3]);
            });
            let name = "";
            let tableauName = [];
            for(let i = 0 ; i < data.length ; i++ ){
                name = data[i]["name"];
                code = [i];
                let option = document.createElement("option");
                select.appendChild(option);
                option.setAttribute("value", code)
                option.innerHTML += name;
            }
            // function leChoix(e){
            //     let choice = select.selectIndex;
            //     let value = select.options[e].value;
            //     console.log(value);

            // }
            console.log(select);
            console.log(namePays);
            console.log(populationPays)
            console.log(capitalPays)
        })
        .catch((err) => console.log(err));
})
