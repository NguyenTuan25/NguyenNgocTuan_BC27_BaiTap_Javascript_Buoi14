function user() {
  var people = document.getElementById("people").value;
  var resultEl = document.getElementById("controller");
  resultEl.style.display = "block";
  resultEl.style.color = "red";

  if (people === "") {
    resultEl.innerHTML = "bạn chưa nhập thông tin";
  } else if (people === "B") {
    resultEl.innerHTML = "Chào Bố";
  } else if (people === "M") {
    resultEl.innerHTML = "chào mẹ";
  } else if (people === "E") {
    resultEl.innerHTML = "chào em";
  } else if (people === "A") {
    resultEl.innerHTML = "chào anh";
  } else if (people === "NT25" || people === "nt25") {
    resultEl.innerHTML = "Chào Nguyễn Ngọc Tuân";  
  } else {
    resultEl.innerHTML = "bạn không phải là thành viên của gia đình" + " ! ";
    resultEl.style.fontWeight = "bold"
  }
}
