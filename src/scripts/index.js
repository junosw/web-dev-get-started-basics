let img1 = "../../assets/toontennis.jpg";
let img2 = "../../assets/tennis-2.jpg";
let curImg = img1;

function buttonClick() {
  console.log("clicked");

  if (curImg == img1) {
    curImg = img2;
  } else {
    curImg = img1;
  }

  $("#image1").attr("src", curImg);
}
