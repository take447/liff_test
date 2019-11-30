window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('uid').value = data.context.userId;

    // closeWindow call
    //document.getElementById('closewindowbutton').addEventListener('click', function () {
    //    liff.closeWindow();
    //});

}
