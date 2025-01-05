particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#8000FF"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "opacity_min": 0.1,
        "speed": 1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "size_min": 0.1,
        "speed": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8000FF",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

let clickCount = 0;
const clickCounter = document.getElementById('clickCounter');
const clickImage = document.getElementById('clickImage');
const clickMessage = document.getElementById('clickMessage');

clickImage.addEventListener('click', () => {
    clickCount++;
    clickCounter.textContent = clickCount;

    clickMessage.textContent = "+1";
    clickMessage.style.opacity = 1;
    setTimeout(() => {
        clickMessage.style.opacity = 0;
    }, 500);

    clickCounter.style.transform = "scale(1.2)";
    setTimeout(() => {
        clickCounter.style.transform = "scale(1)";
    }, 200);
});
