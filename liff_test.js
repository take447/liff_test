window.onload = function (e) {

    // コールバックを使用する方法
    liff.init({ liffId: "1653591503-97y46Wm0" }, initializeApp,er);

}

function initializeApp(data) {
    document.getElementById('uid').value = data.context.userId;
}

function er(data) {
    document.getElementById('uid').value = '失敗';
}
