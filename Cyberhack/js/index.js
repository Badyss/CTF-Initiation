function ouvrirmenu() {
    var entrer = document.getElementById('entrer');
    var fermer = document.getElementById('fermer');
    var menu = document.getElementById('dropdown');

    if (fermer.style.display == 'block') {
        menu.style.display = 'none';
        fermer.style.display = 'none';
        entrer.style.display = 'block';
    } else {
        menu.style.display = 'block';
        fermer.style.display = 'block';
        entrer.style.display = 'none';
    }
}

function textegarde() {
    const letters = "G#L&k-&NAI+@eH4_8V#?7Kj@&W";
  
    const animatedTextElements = document.querySelectorAll(".animated-text");
    let currentIndex = 0;
  
    function animateNext() {
      if (currentIndex < animatedTextElements.length) {
        const h1 = animatedTextElements[currentIndex];
        let interval = null;
        let iteration = 0;
  
        clearInterval(interval);
  
        interval = setInterval(() => {
          const originalText = h1.dataset.value;
          const newText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
  
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
  
          h1.innerHTML = newText;
  
          if (iteration >= originalText.length) {
            clearInterval(interval);
            currentIndex++;
            setTimeout(animateNext, 220); 
          }
  
          iteration += 1 / 3;
        }, 10); 
      }
    }
    
  
    animateNext(); 
  }
  
  window.onload = textegarde;
  


  function darkmode() {
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const menuOrdi = document.querySelector('.menuOrdi'); 
    const name = document.querySelector('.name');
    const maindiv = document.querySelector('.maindiv');
    const maindivLinks = maindiv.querySelectorAll('a');
    let isDarkMode = false;
  
    toggle.addEventListener('click', function () {
      this.classList.toggle('bi-moon');
      isDarkMode = !isDarkMode;
  
      if (isDarkMode) {
        body.style.background = '#F5F0FF';
        body.style.color = 'black';
        menuOrdi.style.background = '#F5F0FF'; 
        name.style.color = 'black'; 
        maindiv.style.color = 'black';
        maindiv.style.background = '#F5F0FF'; 
  
        maindivLinks.forEach(function (link) {
          link.style.color = 'black';
        });
  
        body.style.transition = '2s';
      } else {
        body.style.background = 'black';
        body.style.color = 'white';
        menuOrdi.style.background = 'black'; 
        name.style.color = 'white';
        maindiv.style.color = 'white';
        maindiv.style.background = 'black';
  
        maindivLinks.forEach(function (link) {
          link.style.color = 'white';
        });
  
        body.style.transition = '2s';
      }
    });
  }
  
  darkmode();
  
  
  
