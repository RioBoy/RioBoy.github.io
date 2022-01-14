// event pada saat di klik
$('.page-scroll').on('click', function (event) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    //  tangkap emelen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    event.preventDefault();

});


// paralax
// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });


    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });


    }


});


const apikey = '3235a5a779321928adf8ad39bfc3e3b9';
const urlEndpoint = 'https://sms114.xyz/sms/api_sms_masking_balance_json.php';

const data = JSON.stringify({
  apikey: apikey,
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(this.responseText);
  }
});

xhr.open('POST', urlEndpoint);
xhr.setRequestHeader('apikey', apikey);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('mode', 'cors');

xhr.send(data);
