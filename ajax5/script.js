
let antwoord = document.getElementById('txtHint');

function showList(str, typeSearch) {
  console.log(typeSearch);
  if (str == "") {

  }
  if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest(); // instantie aanmaken
  }
  else {

  }
  xmlhttp.onreadystatechange = function() {

  }
  xmlhttp.open("GET", "getdata.php?q=" + str + "&type=" + typeSearch, true);
  xmlhttp.send();
}

function printArray(arr) {
let out = "";//lege string
let i; // lus teller
for (i = 0; i < arr.length; i++) {
  out += '<span id="' + arr[i] + 'onClick="showList" ' + arr[i] + '</span><br>';
}
antwoord.innerHTML = out;
}

function parseJson(result) {

}
