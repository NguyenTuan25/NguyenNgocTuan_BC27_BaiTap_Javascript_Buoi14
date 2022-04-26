function accenDing() {
  var numberOneEl = +document.getElementById("numberOne").value;
  var numberTwoEl = +document.getElementById("numberTwo").value;
  var numberThreeEl = +document.getElementById("numberThree").value;
  var resultEl = document.getElementById("tangDan");
  var ketQua = document.getElementById("ketQua");
  ketQua.style.display = "block";
  if (numberOneEl == "" || numberTwoEl == "" || numberThreeEl == "") {
    resultEl.innerHTML = "bạn chưa nhập số liệu";
    
  } else if (numberOneEl > numberTwoEl && numberTwoEl > numberThreeEl) {
    resultEl.innerHTML = numberThreeEl + "," + numberTwoEl + "," + numberOneEl;
  } else if (
    numberOneEl > numberTwoEl &&
    numberOneEl > numberThreeEl &&
    numberThreeEl > numberTwoEl
  ) {
    resultEl.innerHTML = numberTwoEl + "," + numberThreeEl + "," + numberOneEl;
  } else if (numberOneEl < numberTwoEl && numberTwoEl < numberThreeEl) {
    resultEl.innerHTML = numberOneEl + "," + numberTwoEl + "," + numberThreeEl;
  } else if (
    numberOneEl < numberTwoEl &&
    numberTwoEl > numberThreeEl &&
    numberOneEl > numberThreeEl
  ) {
    resultEl.innerHTML = numberThreeEl + "," + numberOneEl + "," + numberTwoEl;
  } else if (
    numberOneEl < numberTwoEl &&
    numberTwoEl > numberThreeEl &&
    numberOneEl < numberThreeEl
  ) {
    resultEl.innerHTML = numberOneEl + "," + numberThreeEl + "," + numberTwoEl;
  } else {
    resultEl.innerHTML = numberTwoEl + "," + numberOneEl + "," + numberThreeEl;
  }

  // if(numberOneEl < numberTwoEl && numberOneEl < numberThreeEl){
  //     if(numberTwoEl<numberThreeEl){
  //         resultEl.innerHTML=numberOneEl + "," +numberTwoEl + "," + numberThreeEl
  //     }
  //     if(numberTwoEl>numberThreeEl){
  //         resultEl.innerHTML=numberOneEl + "," +numberThreeEl + "," + numberTwoEl
  //     }
  // }
  // let array = [];
  // array.push(parseInt(numberOneEl));
  // array.push(parseInt(numberTwoEl));
  // array.push(parseInt(numberThreeEl));
  // // console.log(array,"array")
  // array.sort(function (a, b) {
  //     if (a > b) return 1;
  //     if (a < b) return -1;
  //     return 0;
  // });
  // resultEl.innerHTML = array;
}
