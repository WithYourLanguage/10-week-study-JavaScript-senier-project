const images = [
  "img/Green Forest/0.jpg",
  "img/Green Forest/1.jpg",
  "img/Green Forest/2.jpg",
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
const backGround = document.querySelector("#backGround");
//const collectionSelection = document.querySelector(".collection_selection");

// const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`; // 애러시 bgImage.src = `img/${chosenImage}` 로 수정바람
console.log("test", bgImage);

if (chosenImage === "0.jpg") {
  console.log("0.jpg if문입니다.");

  document.body.appendChild(bgImage);
  bgImage.classList.add("bgImage");
  body.prepend((bgImage.id = "zeroImg"));
} else if (chosenImage === "1.jpg") {
  console.log("1.jpg if문입니다.");

  document.body.appendChild(bgImage);
  bgImage.classList.add("bgImage");
  body.prepend((bgImage.id = "oneImg"));
} else {
  console.log("2.jpg if문입니다.");

  document.body.appendChild(bgImage);
  bgImage.classList.add("bgImage");
  body.prepend((bgImage.id = "teoImg"));
}

document.body.appendChild(bgImage);
image.classList.add("bgImage");
body.prepend((bgImage.id = "img"));

image.classList.add("bgImage");

//document.body.appendChild(bgImage)

// bg부분에 div테그 이름이나 img태그 이름을 넣어(id or class) div태그 안쪽에 이미지를 넣어
// css 에서 이미지를 불러올 수 있도록 저장

// ___

/*function collectionSelectionClick() {
  console.log("드디어 성공했나..!");
}

collectionSelection.addEventListener("click", collectionSelectionClick);*/
