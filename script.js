document.addEventListener("DOMContentLoaded", () => {
    // fetch("http://api.countrylayer.com/v2/all?access_key=fc91c1fe5b588cfc0ea5a55073d0761f")
    fetch("https://restcountries.com/v2/all")
    
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            let select = document.getElementsByClassName("select")[0];
            let namePays = document.getElementsByClassName("namePays")[0];
            let populationPays = document.getElementsByClassName("populationPays")[0];
            let capitalPays = document.getElementsByClassName("capitalPays")[0];
            let regionPays = document.getElementsByClassName("regionPays")[0];
            let imgFlag = document.getElementsByClassName("imgFlag")[0];
            let options = document.getElementsByTagName("option");
            let nativename = document.getElementsByClassName("nativename")[0];
            let nameFrench = document.getElementsByClassName("nameFrench")[0];
            let frontiere = document.getElementsByClassName("frontiere")[0];
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
            select.addEventListener("change", () => {
                frontiere.innerHTML = " ";
                let code3 = select.value;
                let popu = data[code3]["population"];
                let front = data[code3]["borders"];
                populationPays.innerHTML = popu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " habitants.";
                capitalPays.innerHTML = data[code3]["capital"];
                regionPays.innerHTML = data[code3]["region"];
                imgFlag.setAttribute("src", data[code3]["flags"]["svg"]);
                nativename.innerHTML = data[code3]["nativeName"];
                nameFrench.innerHTML = data[code3]["translations"]["fr"];
                if(front === undefined){
                    frontiere.innerHTML = "Aucun pays."
                }else{
                    for(let i = 0; i < front.length; i++){
                        frontiere.innerHTML += front[i];
                        if(i < front.length-1){
                            frontiere.innerHTML += ", ";
                        }
    
                    }
                }

                console.log(data[code3]);
            });
        })
        .catch((err) => console.log(err));
})
