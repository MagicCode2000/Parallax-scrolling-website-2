window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
    // Existing code in main.js

window.addEventListener('scroll', () => {
  document.querySelector('#Home h1').style.marginTop = `${window.scrollY * 1.5}px`;
  document.querySelector('#Mountain1').style.marginBottom = `${106 - window.scrollY}px`;
  document.querySelector('#leftCloud').style.marginLeft = `-${window.scrollY}px`;
  document.querySelector('#mainCloud').style.marginTop = `-${window.scrollY}px`;
  document.querySelector('#rightCloud').style.marginRight = `-${window.scrollY}px`;
});

// typing animation code below

function typeText(element, text, delay) {
  let index = 0;
  element.innerHTML = '';

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }

  type();
}

const typingElement = document.getElementById('typing-animation');

})
