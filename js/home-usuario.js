window.onload = function() {
    const getDataLocalStorage = localStorage.getItem('profileUserStorage');
    const parsedData = JSON.parse(getDataLocalStorage);
    //console.log(parseData);

    //const getPhotoGoogle = localStorage.getItem('usuario');
<<<<<<< HEAD
    //const parseDataGoogle = JSON.parse(getPhotoGoogle);
    //console.log(parseDataGoogle);

    const gettingData = (parsedData,parsedDataGoogle) => {
        let divProfileForm = document.getElementById('profileDataForm');
        let output;
        let nodeList = Array.from(document.querySelectorAll('.form-control'))
        let userInfo = parsedData[0];
        console.log(userInfo);
        //let userGoogle = parsedDataGoogle;

        let html = `<div class="card">
            <div class="card-header">
            <img id="photo" src="">
            <p id="name"></p>
            </div>
            <div class="card-body">
                <h5 class="card-title">${userInfo.firstInput}</h5>
=======
    //const parsedDataGoogle = JSON.parse(getPhotoGoogle);

    const gettingData = (parsedData) => {
        let divProfileForm = document.getElementById('profile');
        let output;
        let nodeList = Array.from(document.querySelectorAll('.form-control'))
        let userInfo = parsedData[0];
        //console.log(userInfo);
        

        let html = `<div class="card">
            <div class="card-header">
            <img id="photo" src="https://dummyimage.com/100x100/fff/000.png">
            </div>
            <div class="card-body">
                <h5 class="card-title">${userInfo.name}</h5>
                <p class="card-text">${userInfo.secondInput}</p>
>>>>>>> upstream/master
                <p class="card-text">${userInfo.secondInput}</p>
                <p class="card-text">${userInfo.threeInput}</p>
            </div>
        </div>`

<<<<<<< HEAD
        console.log(html);
=======
        //console.log(html);
>>>>>>> upstream/master
        divProfileForm.innerHTML = html;

    };
    
    gettingData(parsedData) 
};

