function tampil() {
    var nama = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    
    document.getElementById("thanks").innerHTML="<b>Thank for your response. Your data recorded as :</b>"
    document.getElementById("myname").innerHTML="Hello, my name is " + "<b>" + nama + "</b>"
    document.getElementById("contactme").innerHTML="Please contact me through : " + "<b>" + email + "</b>"
    document.getElementById("saysomething").innerHTML="I want to say about : " + "<br>" + "<b>" + message + "</b>"


}

function calculate() {
    var hari = 365;
    var botolplastik = parseInt(document.getElementById("botolplastik").value)
    var sedotan = parseInt(document.getElementById("sedotan").value)
    var rokok = parseInt(document.getElementById("rokok").value)

    var hasil = (botolplastik+sedotan+rokok)*hari;
    document.getElementById("hasil").innerHTML="Jumlah sampah plastik per tahunnya " + "<b>" + hasil + "</b>"


}


// dipake untuk get nama item yang nantinya jadi label 
function addItem() {
  counter++; // Menambah jumlah input field
  
  var inputBaru = document.createElement("input");
  inputBaru.type = "text";
  inputBaru.id = "input" + counter; // Memberikan id unik pada setiap input field

  var buttonBaru = document.createElement("button");
  buttonBaru.type = "text"; 
  buttonBaru.id = "buttonSAVE" + counter; 
  
  var container = document.getElementById("detailInputItemApa");
  container.appendChild(inputBaru);
  container.appendChild(buttonBaru); 
  // buttonBaru adalah button untuk SAVE nilai inputan
}


  

    
    
    
