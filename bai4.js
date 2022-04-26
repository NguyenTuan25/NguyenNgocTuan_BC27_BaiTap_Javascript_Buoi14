function edge() {
    // + ép kiểu thành string thành number
    var edgeone = +document.getElementById("edgeone").value;
    var edgetwo = +document.getElementById("edgetwo").value;
    var edgethree = +document.getElementById("edgethree").value;
    var typeEl = document.getElementById("type");
    typeEl.style.display = "block";
    if (edgeone == "" || edgetwo == "" || edgethree == "") {
      typeEl.innerHTML = "Bạn chưa nhập cạnh ?";
    } else if (
      edgeone + edgetwo < edgethree ||
      edgeone + edgethree < edgetwo ||
      edgethree + edgetwo < edgeone
    ) {
      typeEl.innerHTML = "không phải tam giác";
    } else if (edgeone === edgethree && edgethree === edgetwo) {
      typeEl.innerHTML = "Đây là tam giác đều";
    } else if (edgeone === edgetwo) {
      typeEl.innerHTML = "đây là tam giác cân";
    } else if (edgeone === edgethree) {
      typeEl.innerHTML = "Đây là tam giác cân";
    } else if (edgetwo === edgethree) {
      typeEl.innerHTML = "Đây là tam giác cân";
    } else if (edgeone * edgeone === edgetwo * edgetwo + edgethree * edgethree) {
      typeEl.innerHTML = "đây là tam giác vuông";
    } else if (edgetwo * edgetwo === edgeone * edgeone + edgethree * edgethree) {
      typeEl.innerHTML = "đây là tam giác vuông";
    } else if (edgethree * edgethree === edgeone * edgeone + edgetwo * edgetwo) {
      typeEl.innerHTML = "đây là tam giác vuông";
    } else {
      typeEl.innerHTML = "Đây là tam giác nhọn";
    }
  }