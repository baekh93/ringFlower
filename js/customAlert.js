window.toast = window.toast || {};

toast = (function () {

    var toast = function (icon, msg, location) {
        var tst = SweetAlert.mixin({
            toast: true,
            position: location,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            onOpen: function (toast) {
                toast.addEventListener('mouseenter', SweetAlert.stopTimer)
                toast.addEventListener('mouseleave', SweetAlert.resumeTimer)
            }
        });
        // target: document.getElementById('roadview-div')
        //타겟없을시 : 기본
        tst.fire({
            // target: document.getElementById('canvas_crop'),
            icon: icon,
            title: msg,
        });
    };

    // var alert = function (title, message) {
    //     Swal(title,message)
    // }


    var messageAlert = async (message,goodsNum) => {


        Swal.fire({
            title: '링플라워',
            text: message,
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        }).then(e =>  {
            window.location.replace(`https://smartstore.naver.com/ringflower/products/${goodsNum}`);
            // debugger
        })

    }

    var module = {
        toast: toast,
        messageAlert:messageAlert,
        // alert:alert
    };

    return module;
})();
