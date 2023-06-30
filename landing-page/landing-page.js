// open + close popup
let bgOverlayProductDetail = document.getElementById("popup-landing-page");
let closeProductDetail = document.getElementById(
  "btn-close-popup-landing-page"
);
closeProductDetail.onclick = function () {
  bgOverlayProductDetail.style.display = "none";
};

// count down time
function countdown() {
  var currentTime = new Date();
  var targetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 7, 0, 0);
  if (currentTime > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  targetTime.setHours(targetTime.getHours() + 8);

  var countdownEndTime = targetTime.getTime();

  var countdownTimer = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownEndTime - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours < 10) {
      document.getElementById("text-hour-1").innerHTML = "0" + hours;
    } else {
      document.getElementById("text-hour-1").innerHTML = hours;
    }
    if (minutes < 10) {
      document.getElementById("text-minute-1").innerHTML = "0" + minutes;
    } else {
      document.getElementById("text-minute-1").innerHTML = minutes;
    }
    if (seconds < 10) {
      document.getElementById("text-second-1").innerHTML = "0" + seconds;
    } else {
      document.getElementById("text-second-1").innerHTML = seconds;
    }
    if (distance <= 0) {
      clearInterval(countdownTimer);

      currentTime = new Date();
      targetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 7, 0, 0);

      if (currentTime > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
      }

      targetTime.setHours(targetTime.getHours() + 8);

      countdownEndTime = targetTime.getTime();

      countdown();
    }
  }, 1000);
}
countdown();

// show popup infomation user
var data = [
  {
    phoneNumber: "090534****",
    status: "Đã đặt hàng thành công <br /> Vừa xong",
  },
  {
    phoneNumber: "090568****",
    status: "Đã đặt hàng thành công <br /> Vừa xong",
  },
  {
    phoneNumber: "094448****",
    status: "Đã đặt hàng thành công <br /> Vừa xong",
  },
  {
    phoneNumber: "090558****",
    status: "Đã đặt hàng thành công <br /> Vừa xong",
  },
  {
    phoneNumber: "098491****",
    status: "Đã đặt hàng thành công <br /> Vừa xong",
  },
  {
    phoneNumber: "093581****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "090179****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "096679****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "086852****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "093110****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "090827****",
    status: "Đã đặt hàng thành công <br/> 1 phút trước",
  },
  {
    phoneNumber: "076854****",
    status: "Đã đặt hàng thành công <br/> 2 phút trước",
  },
  {
    phoneNumber: "077475****",
    status: "Đã đặt hàng thành công <br/> 2 phút trước",
  },
  {
    phoneNumber: "093480****",
    status: "Đã đặt hàng thành công <br/> 2 phút trước",
  },
  {
    phoneNumber: "090425****",
    status: "Đã đặt hàng thành công <br/> 3 phút trước",
  },
  {
    phoneNumber: "090308****",
    status: "Đã đặt hàng thành công <br/> 3 phút trước",
  },
  {
    phoneNumber: "096129****",
    status: "Đã đặt hàng thành công <br/> 3 phút trước",
  },
  {
    phoneNumber: "097955****",
    status: "Đã đặt hàng thành công <br/> 3 phút trước",
  },
  {
    phoneNumber: "090363****",
    status: "Đã đặt hàng thành công <br/> 4 phút trước",
  },
  {
    phoneNumber: "091125****",
    status: "Đã đặt hàng thành công <br/> 4 phút trước",
  },
  {
    phoneNumber: "055900****",
    status: "Đã đặt hàng thành công <br/> 4 phút trước",
  },
  {
    phoneNumber: "090925****",
    status: "Đã đặt hàng thành công <br/> 5 phút trước",
  },
  {
    phoneNumber: "098348****",
    status: "Đã đặt hàng thành công <br/> 5 phút trước",
  },
  {
    phoneNumber: "097281****",
    status: "Đã đặt hàng thành công <br/> 5 phút trước",
  },
  {
    phoneNumber: "093365****",
    status: "Đã đặt hàng thành công <br/> 6 phút trước",
  },
  {
    phoneNumber: "089819****",
    status: "Đã đặt hàng thành công <br/> 6 phút trước",
  },
  {
    phoneNumber: "039995****",
    status: "Đã đặt hàng thành công <br/> 6 phút trước",
  },
  {
    phoneNumber: "091475****",
    status: "Đã đặt hàng thành công <br/> 7 phút trước",
  },
  {
    phoneNumber: "098687****",
    status: "Đã đặt hàng thành công <br/> 7 phút trước",
  },
  {
    phoneNumber: "090106****",
    status: "Đã đặt hàng thành công <br/> 8 phút trước",
  },
  {
    phoneNumber: "036355****",
    status: "Đã đặt hàng thành công <br/> 8 phút trước",
  },
  {
    phoneNumber: "034560****",
    status: "Đã đặt hàng thành công <br/> 8 phút trước",
  },
  {
    phoneNumber: "098271****",
    status: "Đã đặt hàng thành công <br/> 9 phút trước",
  },
  {
    phoneNumber: "093251****",
    status: "Đã đặt hàng thành công <br/> 9 phút trước",
  },
  {
    phoneNumber: "033726****",
    status: "Đã đặt hàng thành công <br/> 9 phút trước",
  },
  {
    phoneNumber: "090722****",
    status: "Đã đặt hàng thành công <br/> 10 phút trước",
  },
  {
    phoneNumber: "097631****",
    status: "Đã đặt hàng thành công <br/> 10 phút trước",
  },
  {
    phoneNumber: "096268****",
    status: "Đã đặt hàng thành công <br/> 10 phút trước",
  },
  {
    phoneNumber: "070562****",
    status: "Đã đặt hàng thành công <br/> 11 phút trước",
  },
  {
    phoneNumber: "090452****",
    status: "Đã đặt hàng thành công <br/> 11 phút trước",
  },
  {
    phoneNumber: "093717****",
    status: "Đã đặt hàng thành công <br/> 11 phút trước",
  },
  {
    phoneNumber: "097763****",
    status: "Đã đặt hàng thành công <br/> 12 phút trước",
  },
  {
    phoneNumber: "090928****",
    status: "Đã đặt hàng thành công <br/> 12 phút trước",
  },
  {
    phoneNumber: "093819****",
    status: "Đã đặt hàng thành công <br/> 12 phút trước",
  },
  {
    phoneNumber: "090883****",
    status: "Đã đặt hàng thành công <br/> 13 phút trước",
  },
  {
    phoneNumber: "097535****",
    status: "Đã đặt hàng thành công <br/> 13 phút trước",
  },
  {
    phoneNumber: "077339****",
    status: "Đã đặt hàng thành công <br/> 14 phút trước",
  },
  {
    phoneNumber: "098996****",
    status: "Đã đặt hàng thành công <br/> 14 phút trước",
  },
  {
    phoneNumber: "094955****",
    status: "Đã đặt hàng thành công <br/> 15 phút trước",
  },
  {
    phoneNumber: "097699****",
    status: "Đã đặt hàng thành công <br/> 15 phút trước",
  },
  {
    phoneNumber: "096908****",
    status: "Đã đặt hàng thành công <br/> 15 phút trước",
  },
  {
    phoneNumber: "098239****",
    status: "Đã đặt hàng thành công <br/> 16 phút trước",
  },
  {
    phoneNumber: "093911****",
    status: "Đã đặt hàng thành công <br/> 16 phút trước",
  },
  {
    phoneNumber: "090899****",
    status: "Đã đặt hàng thành công <br/> 17 phút trước",
  },
  {
    phoneNumber: "091811****",
    status: "Đã đặt hàng thành công <br/> 17 phút trước",
  },
  {
    phoneNumber: "090633****",
    status: "Đã đặt hàng thành công <br/> 17 phút trước",
  },
  {
    phoneNumber: "090246****",
    status: "Đã đặt hàng thành công <br/> 18 phút trước",
  },
  {
    phoneNumber: "079785****",
    status: "Đã đặt hàng thành công <br/> 18 phút trước",
  },
  {
    phoneNumber: "078984****",
    status: "Đã đặt hàng thành công <br/> 18 phút trước",
  },
  {
    phoneNumber: "093924****",
    status: "Đã đặt hàng thành công <br/> 19 phút trước",
  },
  {
    phoneNumber: "091376****",
    status: "Đã đặt hàng thành công <br/> 20 phút trước",
  },
  {
    phoneNumber: "091692****",
    status: "Đã đặt hàng thành công <br/> 20 phút trước",
  },
  {
    phoneNumber: "093575****",
    status: "Đã đặt hàng thành công <br/> 21 phút trước",
  },
  {
    phoneNumber: "039367****",
    status: "Đã đặt hàng thành công <br/> 21 phút trước",
  },
  {
    phoneNumber: "098610****",
    status: "Đã đặt hàng thành công <br/> 22 phút trước",
  },
  {
    phoneNumber: "093324****",
    status: "Đã đặt hàng thành công <br/> 22 phút trước",
  },
  {
    phoneNumber: "094866****",
    status: "Đã đặt hàng thành công <br/> 22 phút trước",
  },
  {
    phoneNumber: "093800****",
    status: "Đã đặt hàng thành công <br/> 23 phút trước",
  },
  {
    phoneNumber: "090640****",
    status: "Đã đặt hàng thành công <br/> 23 phút trước",
  },
  {
    phoneNumber: "091138****",
    status: "Đã đặt hàng thành công <br/> 23 phút trước",
  },
  {
    phoneNumber: "091373****",
    status: "Đã đặt hàng thành công <br/> 24 phút trước",
  },
  {
    phoneNumber: "097301****",
    status: "Đã đặt hàng thành công <br/> 24 phút trước",
  },
  {
    phoneNumber: "094573****",
    status: "Đã đặt hàng thành công <br/> 24 phút trước",
  },
  {
    phoneNumber: "094448****",
    status: "Đã đặt hàng thành công <br/> 25 phút trước",
  },
  {
    phoneNumber: "079785****",
    status: "Đã đặt hàng thành công <br/> 25 phút trước",
  },
  {
    phoneNumber: "090717****",
    status: "Đã đặt hàng thành công <br/> 25 phút trước",
  },
  {
    phoneNumber: "091283****",
    status: "Đã đặt hàng thành công <br/> 26 phút trước",
  },
  {
    phoneNumber: "098802****",
    status: "Đã đặt hàng thành công <br/> 26 phút trước",
  },
  {
    phoneNumber: "084170****",
    status: "Đã đặt hàng thành công <br/> 26 phút trước",
  },
  {
    phoneNumber: "079239****",
    status: "Đã đặt hàng thành công <br/> 27 phút trước",
  },
  {
    phoneNumber: "085977****",
    status: "Đã đặt hàng thành công <br/> 27 phút trước",
  },
  {
    phoneNumber: "073443****",
    status: "Đã đặt hàng thành công <br/> 27 phút trước",
  },
  {
    phoneNumber: "078717****",
    status: "Đã đặt hàng thành công <br/> 28 phút trước",
  },
  {
    phoneNumber: "056408****",
    status: "Đã đặt hàng thành công <br/> 28 phút trước",
  },
  {
    phoneNumber: "039835****",
    status: "Đã đặt hàng thành công <br/> 29 phút trước",
  },
  {
    phoneNumber: "072617****",
    status: "Đã đặt hàng thành công <br/> 29 phút trước",
  },
  {
    phoneNumber: "037409****",
    status: "Đã đặt hàng thành công <br/> 30 phút trước",
  },
  {
    phoneNumber: "057193****",
    status: "Đã đặt hàng thành công <br/> 30 phút trước",
  },
  {
    phoneNumber: "088848****",
    status: "Đã đặt hàng thành công <br/> 31 phút trước",
  },
  {
    phoneNumber: "081163****",
    status: "Đã đặt hàng thành công <br/> 32 phút trước",
  },
  {
    phoneNumber: "097707****",
    status: "Đã đặt hàng thành công <br/> 33 phút trước",
  },
  {
    phoneNumber: "066546****",
    status: "Đã đặt hàng thành công <br/> 34 phút trước",
  },
  {
    phoneNumber: "093413****",
    status: "Đã đặt hàng thành công <br/> 35 phút trước",
  },
  {
    phoneNumber: "082314****",
    status: "Đã đặt hàng thành công <br/> 36 phút trước",
  },
  {
    phoneNumber: "092827****",
    status: "Đã đặt hàng thành công <br/> 37 phút trước",
  },
  {
    phoneNumber: "089950****",
    status: "Đã đặt hàng thành công <br/> 38 phút trước",
  },
  {
    phoneNumber: "096385****",
    status: "Đã đặt hàng thành công <br/> 39 phút trước",
  },
  {
    phoneNumber: "054245****",
    status: "Đã đặt hàng thành công <br/> 40 phút trước",
  },
  {
    phoneNumber: "087391****",
    status: "Đã đặt hàng thành công <br/> 41 phút trước",
  },
  {
    phoneNumber: "074848****",
    status: "Đã đặt hàng thành công <br/> 42 phút trước",
  },
  {
    phoneNumber: "083952****",
    status: "Đã đặt hàng thành công <br/> 43 phút trước",
  },
  {
    phoneNumber: "077772****",
    status: "Đã đặt hàng thành công <br/> 44 phút trước",
  },
  {
    phoneNumber: "094510****",
    status: "Đã đặt hàng thành công <br/> 45 phút trước",
  },
  {
    phoneNumber: "086703****",
    status: "Đã đặt hàng thành công <br/> 46 phút trước",
  },
  {
    phoneNumber: "075485****",
    status: "Đã đặt hàng thành công <br/> 47 phút trước",
  },
  {
    phoneNumber: "095928****",
    status: "Đã đặt hàng thành công <br/> 48 phút trước",
  },
  {
    phoneNumber: "058643****",
    status: "Đã đặt hàng thành công <br/> 49 phút trước",
  },
  {
    phoneNumber: "062447****",
    status: "Đã đặt hàng thành công <br/> 50 phút trước",
  },
  {
    phoneNumber: "079777****",
    status: "Đã đặt hàng thành công <br/> 51 phút trước",
  },
  {
    phoneNumber: "076414****",
    status: "Đã đặt hàng thành công <br/> 52 phút trước",
  },
  {
    phoneNumber: "099729****",
    status: "Đã đặt hàng thành công <br/> 53 phút trước",
  },
  {
    phoneNumber: "076641****",
    status: "Đã đặt hàng thành công <br/> 54 phút trước",
  },
  {
    phoneNumber: "071295****",
    status: "Đã đặt hàng thành công <br/> 55 phút trước",
  },
  {
    phoneNumber: "098193****",
    status: "Đã đặt hàng thành công <br/> 56 phút trước",
  },
  {
    phoneNumber: "091957****",
    status: "Đã đặt hàng thành công <br/> 57 phút trước",
  },
  {
    phoneNumber: "090486****",
    status: "Đã đặt hàng thành công <br/> 58 phút trước",
  },
  {
    phoneNumber: "097651****",
    status: "Đã đặt hàng thành công <br/> 59 phút trước",
  },

  {
    phoneNumber: "093234****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "092109****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "095678****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "099012****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "088345****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "087901****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086729****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "085478****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "084512****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "083290****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "082496****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "081098****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "080765****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "089432****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086543****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "082901****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "087890****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086789****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "084567****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086789****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "087901****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "088732****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "083356****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "089012****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086789****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "085678****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "086789****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "087654****",
    status: "Đang chờ vận chuyển",
  },
  {
    phoneNumber: "088901****",
    status: "Đang chờ vận chuyển",
  },
];
var popupElement = document.getElementById("popupInfo");
var textPhone = document.getElementById("text-phone");
var textStatus = document.getElementById("text-status");
function displayRandomPopup() {
  var randomIndex = Math.floor(Math.random() * data.length);
  var item = data[randomIndex];

  textPhone.innerHTML = item.phoneNumber;
  textStatus.innerHTML = item.status;

  popupElement.style.display = "block";

  setTimeout(function () {
    popupElement.style.display = "none";
    setTimeout(displayRandomPopup, 5000);
  }, 3000);
}
displayRandomPopup();

// send mail
var productList = [];
var productNames = [];

jQuery('.product-select').on('click', function () {
  jQuery(this).closest('.img-btn').find('input[type="checkbox"]').click();

  var productId = jQuery(this).data('product-id').toString();
  var productName = jQuery(this).data('product-name');

  if (jQuery(this).hasClass('selected')) {
    var index = productList.indexOf(productId);

    jQuery(this).removeClass('selected')

    if (index !== -1) {
      productList.splice(index, 1);
      productNames.splice(index, 1)
    }
  } else {
    jQuery(this).addClass('selected');
    productList.push(productId);
    productNames.push(productName);
  }

  jQuery('#product_names').val(productNames.join(", "));
});

document.addEventListener('wpcf7mailsent', function (event) {
  if (event.detail.contactFormId == '21943') {
    var inputs = event.detail.inputs;
    var customerName = null;
    var customerPhone = null;
    var customerEmail = null;

    for (var i = 0; i < inputs.length; i++) {
      if ('nameUser' == inputs[i].name) {
        customerName = inputs[i].value
        continue;
      }

      if ('phone' == inputs[i].name) {
        customerPhone = inputs[i].value
        continue;
      }

      if ('emailUser' == inputs[i].name) {
        customerEmail = inputs[i].value
        continue;
      }
    }

    jQuery.ajax({
      url: ajaxUrl,
      method: "POST",
      data: {
        action: "mbc_add_request_landing_page",
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_email: customerEmail,
        product_ids: productList
      },
      success: function (res) {
        if (res.success) {
          if (dataLayer) {
            dataLayer.push({
              'event': 'lead-form',
              'email': res.data.customer_email,
              'phone_number': res.data.customer_phone,
              'contents': null,
              'content_type': null,
              'value': null,
              'currency': null,
              'transaction_id': null,
              'ecommerce': null,
              'items': null,
              '_clear': true,
            });
          }
        }
      }
    });

    productList = [];
    productNames = [];
    jQuery('.product-select').removeClass('selected');
    bgOverlayProductDetail.style.display = "block";
  }
}, false);


