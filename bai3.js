function parity() {
    var oneEl = +document.getElementById("one").value;
    var twoEl = +document.getElementById("two").value;
    var threeEl = +document.getElementById("three").value;
    var ketQuaEl = document.getElementById("ketQuaa");
    var resultsEl = document.getElementById("results");
    ketQuaEl.style.display = "block";
    if (oneEl == "" || twoEl == "" || threeEl == "") {
      resultsEl.innerHTML = "bạn chưa nhập số";
    } else if ((oneEl % 2 == 0) & (twoEl % 2 == 0) & (threeEl % 2 == 0)) {
      resultsEl.innerHTML = "Có 3 số chẵn";
    } else if ((oneEl % 2 == 0) & (twoEl % 2 == 0) & (threeEl % 2 > 0)) {
      resultsEl.innerHTML = "có 2 sổ chẵn" + " và " + "có 1 số lẻ";
    } else if ((oneEl % 2 > 0) & (twoEl % 2 > 0) & (threeEl % 2 > 0)) {
      resultsEl.innerHTML = "có 3 số lẻ";
    } else if ((oneEl % 2 > 0) & (twoEl % 2 > 0) & (threeEl % 2 == 0)) {
      resultsEl.innerHTML = "có 2 số lẻ" + " và " + "có 1 số chẵn";
    } else if ((oneEl % 2 > 0) & (twoEl % 2 == 0) & (threeEl % 2 == 0)) {
      resultsEl.innerHTML = "có 1 số lẻ" + " và " + "có 2 số chẵn";
    } else if ((oneEl % 2 == 0) & (twoEl % 2 > 0) & (threeEl % 2 == 0)) {
      resultsEl.innerHTML = "có 1 số lẻ" + " và " + "có 2 số chẵn";
    } else {
      resultsEl.innerHTML = "có 2 số lẻ" + " và " + "có 1 số chẵn";
    }
    // if (oneEl % 2 > 0 & twoEl % 2 == 0 & threeEl % 2 > 0)
  }