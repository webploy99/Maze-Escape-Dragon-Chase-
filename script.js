// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}

// ======== get URL ========
function appUrl() {
    location.href = "https://apps.apple.com/vn/app/maze-escape-dragon-chase/id6478071722";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/29/a8/22/29a822f5-f485-f9bc-fc57-d143f30eafc5/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;


// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/pic1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/pic2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/pic3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/pic4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/pic5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/08/b2/d4/08b2d4b8-81f9-e9c4-e530-4557183369e2/25df9a87-8ed0-4a98-92da-4e8393867749_Des_06.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/1a/f1/c3/1af1c302-a1ff-be70-04f5-2377f1042694/00e1fe5c-84f4-4f00-9656-c6bc73f774a9_Des_07.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/5d/9c/bf/5d9cbfba-fcd5-95ab-ee65-fdd4e88d731b/6d12f2bc-7fe7-4930-bdb1-8516d0468c39_Des_08.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

