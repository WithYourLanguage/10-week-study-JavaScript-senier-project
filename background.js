const backGround = document.querySelector("#backGround");
//const collectionSelection = document.querySelector(".collection_selection");
// const body = document.querySelector("body");

function GreenForestClick() {
  GreenForestBackground.classList.add("hidden");
  console.log("GreenForestClick");
  localStorage.setItem("collection", "GreenForest");
  console.log(localStorage.getItem("collection"));
  const images = [
    "img/Green Forest/0.jpg",
    "img/Green Forest/1.jpg",
    "img/Green Forest/3.jpg",
    "img/Green Forest/4.jpg",
    "img/Green Forest/5.jpg",
    "img/Green Forest/6.jpg",
    "img/Green Forest/7.jpg",
    "img/Green Forest/8.jpg",
    "img/Green Forest/9.jpg",
    "img/Green Forest/10.jpg",
    "img/Green Forest/11.jpg",
    "img/Green Forest/12.jpg",
    "img/Green Forest/13.jpg",
    "img/Green Forest/14.jpg",
    "img/Green Forest/15.jpg",
    "img/Green Forest/16.jpg",
    "img/Green Forest/17.jpg",
    "img/Green Forest/18.jpg",
    "img/Green Forest/19.jpg",
    "img/Green Forest/20.jpg",
    "img/Green Forest/21.jpg",
  ];
  collectionImg(images);
}
function OceanClick() {
  GreenForestBackground.classList.add("hidden");
  console.log("OceanClick");
  localStorage.setItem("collection", "Ocean");
  console.log(localStorage.getItem("collection"));
  const images = [
    "img/Ocean/1.jpg",
    "img/Ocean/2.jpg",
    "img/Ocean/3.jpg",
    "img/Ocean/4.jpg",
    "img/Ocean/5.jpg",
    "img/Ocean/6.jpg",
    "img/Ocean/7.jpg",
    "img/Ocean/8.jpg",
    "img/Ocean/9.jpg",
    "img/Ocean/10.jpg",
    "img/Ocean/11.jpg",
    "img/Ocean/12.jpg",
    "img/Ocean/13.jpg",
    "img/Ocean/14.jpg",
    "img/Ocean/15.jpg",
    "img/Ocean/16.jpg",
    "img/Ocean/17.jpg",
    "img/Ocean/18.jpg",
    "img/Ocean/19.jpg",
  ];
  collectionImg(images);
}
function mountainClick() {
  GreenForestBackground.classList.add("hidden");
  console.log("mountainClick");
  localStorage.setItem("collection", "mountain");
  console.log(localStorage.getItem("collection"));
  const images = [
    "img/mountain/1.jpg",
    "img/mountain/2.jpg",
    "img/mountain/3.jpg",
    "img/mountain/4.jpg",
    "img/mountain/5.jpg",
    "img/mountain/6.jpg",
    "img/mountain/7.jpg",
    "img/mountain/8.jpg",
    "img/mountain/9.jpg",
    "img/mountain/10.jpg",
    "img/mountain/11.jpg",
    "img/mountain/12.jpg",
    "img/mountain/13.jpg",
    "img/mountain/14.jpg",
    "img/mountain/15.jpg",
    "img/mountain/16.jpg",
    "img/mountain/17.jpg",
    "img/mountain/18.jpg",
    "img/mountain/19.jpg",
  ];
  collectionImg(images);
}
function collectionImg(images) {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  console.log(chosenImage);
  const bgImage = document.createElement("img");

  bgImage.src = `${chosenImage}`; // ????????? bgImage.src = `img/${chosenImage}` ??? ????????????
  console.log("test", bgImage);

  if (chosenImage === "0.jpg") {
    console.log("0.jpg if????????????.");

    document.body.appendChild(bgImage);
    bgImage.classList.add("bgImage");
    body.prepend((bgImage.id = "zeroImg"));
  } else if (chosenImage === "1.jpg") {
    console.log("1.jpg if????????????.");

    document.body.appendChild(bgImage);
    bgImage.classList.add("bgImage");
    body.prepend((bgImage.id = "oneImg"));
  } else {
    console.log("2.jpg if????????????.");

    document.body.appendChild(bgImage);
    bgImage.classList.add("bgImage");
    body.prepend((bgImage.id = "teoImg"));
  }

  document.body.appendChild(bgImage);
  //image.classList.add("bgImage");
  body.prepend((bgImage.id = "img"));

  //image.classList.add("bgImage");

  //document.body.appendChild(bgImage)

  // bg????????? div?????? ???????????? img?????? ????????? ??????(id or class) div?????? ????????? ???????????? ??????
  // css ?????? ???????????? ????????? ??? ????????? ??????

  // ___

  /*function collectionSelectionClick() {
  console.log("????????? ????????????..!");
}

collectionSelection.addEventListener("click", collectionSelectionClick);*/
}
console.log(localStorage.getItem("collection"));

if (localStorage.getItem("collection") === "GreenForest") {
  // GreenForest??? ?????? ????????? ??????
  const images = [
    "img/Green Forest/0.jpg",
    "img/Green Forest/1.jpg",
    "img/Green Forest/3.jpg",
    "img/Green Forest/4.jpg",
    "img/Green Forest/5.jpg",
    "img/Green Forest/6.jpg",
    "img/Green Forest/7.jpg",
    "img/Green Forest/8.jpg",
    "img/Green Forest/9.jpg",
    "img/Green Forest/10.jpg",
    "img/Green Forest/11.jpg",
    "img/Green Forest/12.jpg",
    "img/Green Forest/13.jpg",
    "img/Green Forest/14.jpg",
    "img/Green Forest/15.jpg",
    "img/Green Forest/16.jpg",
    "img/Green Forest/17.jpg",
    "img/Green Forest/18.jpg",
    "img/Green Forest/19.jpg",
    "img/Green Forest/20.jpg",
    "img/Green Forest/21.jpg",
  ];
  collectionImg(images);
} else if (localStorage.getItem("collection") === "Ocean") {
  const images = [
    "img/Ocean/1.jpg",
    "img/Ocean/2.jpg",
    "img/Ocean/3.jpg",
    "img/Ocean/4.jpg",
    "img/Ocean/5.jpg",
    "img/Ocean/6.jpg",
    "img/Ocean/7.jpg",
    "img/Ocean/8.jpg",
    "img/Ocean/9.jpg",
    "img/Ocean/10.jpg",
    "img/Ocean/11.jpg",
    "img/Ocean/12.jpg",
    "img/Ocean/13.jpg",
    "img/Ocean/14.jpg",
    "img/Ocean/15.jpg",
    "img/Ocean/16.jpg",
    "img/Ocean/17.jpg",
    "img/Ocean/18.jpg",
    "img/Ocean/19.jpg",
  ];
  collectionImg(images);
} else {
  const images = [
    "img/mountain/1.jpg",
    "img/mountain/2.jpg",
    "img/mountain/3.jpg",
    "img/mountain/4.jpg",
    "img/mountain/5.jpg",
    "img/mountain/6.jpg",
    "img/mountain/7.jpg",
    "img/mountain/8.jpg",
    "img/mountain/9.jpg",
    "img/mountain/10.jpg",
    "img/mountain/11.jpg",
    "img/mountain/12.jpg",
    "img/mountain/13.jpg",
    "img/mountain/14.jpg",
    "img/mountain/15.jpg",
    "img/mountain/16.jpg",
    "img/mountain/17.jpg",
    "img/mountain/18.jpg",
    "img/mountain/19.jpg",
  ];
  collectionImg(images);
}

if (localStorage.getItem("collection") === null) {
  const images = [
    "img/Green Forest/0.jpg",
    "img/Green Forest/1.jpg",
    "img/Green Forest/3.jpg",
    "img/Green Forest/4.jpg",
    "img/Green Forest/5.jpg",
    "img/Green Forest/6.jpg",
    "img/Green Forest/7.jpg",
    "img/Green Forest/8.jpg",
    "img/Green Forest/9.jpg",
    "img/Green Forest/10.jpg",
    "img/Green Forest/11.jpg",
    "img/Green Forest/12.jpg",
    "img/Green Forest/13.jpg",
    "img/Green Forest/14.jpg",
    "img/Green Forest/15.jpg",
    "img/Green Forest/16.jpg",
    "img/Green Forest/17.jpg",
    "img/Green Forest/18.jpg",
    "img/Green Forest/19.jpg",
    "img/Green Forest/20.jpg",
    "img/Green Forest/21.jpg",
    "img/Ocean/1.jpg",
    "img/Ocean/2.jpg",
    "img/Ocean/3.jpg",
    "img/Ocean/4.jpg",
    "img/Ocean/5.jpg",
    "img/Ocean/6.jpg",
    "img/Ocean/7.jpg",
    "img/Ocean/8.jpg",
    "img/Ocean/9.jpg",
    "img/Ocean/10.jpg",
    "img/Ocean/11.jpg",
    "img/Ocean/12.jpg",
    "img/Ocean/13.jpg",
    "img/Ocean/14.jpg",
    "img/Ocean/15.jpg",
    "img/Ocean/16.jpg",
    "img/Ocean/17.jpg",
    "img/Ocean/18.jpg",
    "img/Ocean/19.jpg",
    "img/mountain/1.jpg",
    "img/mountain/2.jpg",
    "img/mountain/3.jpg",
    "img/mountain/4.jpg",
    "img/mountain/5.jpg",
    "img/mountain/6.jpg",
    "img/mountain/7.jpg",
    "img/mountain/8.jpg",
    "img/mountain/9.jpg",
    "img/mountain/10.jpg",
    "img/mountain/11.jpg",
    "img/mountain/12.jpg",
    "img/mountain/13.jpg",
    "img/mountain/14.jpg",
    "img/mountain/15.jpg",
    "img/mountain/16.jpg",
    "img/mountain/17.jpg",
    "img/mountain/18.jpg",
    "img/mountain/19.jpg",
  ];
  collectionImg(images);
}

collectionSelection.addEventListener("click", GreenForestClick);
OceanBackground.addEventListener("click", OceanClick);
mountainBackground.addEventListener("click", mountainClick);
