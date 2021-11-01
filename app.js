window.onload = function() {

    let btn = document.querySelector(".btn");
    let text = document.querySelector("#text");
    let result = document.querySelector(".result");
    let h3 = document.querySelector("h3");
    let h4 = document.querySelector("h4");
    let p = document.querySelector("p");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        fetch("superheroes.php?query="+text.value)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Error")
                }
            })
            .then(data => {

                var res = data.split(",");
                let rlength = res.length


                if (text.value.length == 0) {
                    h3.textContent= "";
                    h4.textContent= "";
                    p.textContent= "";
                    result.innerHTML= data;
                }

                else if (text.value == res[1]) {
                    h3.textContent= res[2].toUpperCase();
                    h4.textContent= "A.K.A " + res[1].toUpperCase();
                    p.textContent= res.splice(3,rlength);
                    result.innerText="";
                } 
                
                else if (text.value == res[2]) {
                    h3.textContent= res[2].toUpperCase();
                    h4.textContent= "A.K.A " + res[1].toUpperCase();
                    p.textContent= res.splice(3,rlength);
                    result.innerText="";
                }
                
                else if (text.value.length != 0){
                    h3.textContent= "";
                    h4.textContent= "";
                    p.textContent= "";
                    result.innerHTML= ("SUPERHERO NOT FOUND").fontcolor("red");

                }
            })        
    });
}
