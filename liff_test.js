window.onload = function (e) {

    // コールバックを使用する方法
    liff.init({ liffId: "1653591503-97y46Wm0" }, initializeApp,er);

    //とりあえずボタンを押したらLIFFを閉じてみる
    document.getElementById("btn").addEventListener("click", liff.closeWindow);

}

function initializeApp(data) {
    liff.getProfile().then(function(profile){
        document.getElementById('uid').value = profile.userId;
    }); 
}    

function er(data) {
    document.getElementById('uid').value = '失敗';
}
