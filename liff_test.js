window.onload = function (e) {
    liff
        .init({
            liffId: '1653591503-97y46Wm0'
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            //document.getElementById("liffAppContent").classList.add('hidden');
            //document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}

function initializeApp(data) {
    document.getElementById('uid').value = data.context.userId;
}

