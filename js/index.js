$(function () {
    // 设置开关 不能多次点击
    var flag = true;
    // 记录下标
    var index = 0;
    $('#start').click(function () {
        if (flag) {
            flag = false;
            $('li').addClass('toout');
            setTimeout(function () {
                $('.warp').addClass('active');
            }, 1000)
            setTimeout(function () {
                $('li').removeClass('toout');
            }, 4000);
            setTimeout(function () {
                $('.warp').removeClass('active')
                $('li').addClass('repeat').addClass('rotate');
                var timeID = setInterval(function () {
                    var card = Math.floor(Math.random() * 148);
                    $('li').eq(index).removeClass('rotate').children().attr('src', data[card]);
                    index == $('li').length ? index = 0 : index++;
                }, 500)
                setTimeout(function () {
                    clearInterval(timeID);
                }, 5600)
            }, 5000)
        };
    });

    $('#startagain').click(function () {
        if ($('li').eq($('li').length - 1).children().attr('src') != '') {
            $('li').removeClass('repeat').children().attr('src', '');
            flag = true;
            setTimeout(function () {
                $('#start').click();
            }, 1000);
        }
    })
})