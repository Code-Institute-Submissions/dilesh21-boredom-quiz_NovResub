function lightMode() {
    var elementBody = document.body;
    var elementH1 = document.querySelector('#heading1');
    var elementBtn1 = document.querySelector('#btn1');
    var elementBtn2 = document.querySelector('#scores-button');
    var elementBtn3 = document.querySelector('#btn2');

    
    elementBody.classList.toggle("light-mode");
    elementH1.classList.toggle("light-h1");
    elementBtn1.classList.toggle("light-btn");
    elementBtn2.classList.toggle("light-btn");
    elementBtn3.classList.toggle("light-btn");
  }