window.onload = function() {
    let btn = document.querySelector(".btn");

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('Error')
                }
            })
            .then(data => {
               alert(data);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
}