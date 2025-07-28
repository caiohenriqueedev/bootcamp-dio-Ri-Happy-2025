const windows = document.querySelectorAll('.window');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let activeIndex = -1;
    let ralphElement;

    function criarRalph() {
      const img = document.createElement('img');
      img.src = 'https://upload.wikimedia.org/wikipedia/en/5/5a/Wreck-It_Ralph.png';
      img.alt = 'Ralph';
      img.classList.add('ralph');
      return img;
    }

    function mostrarRalph() {
      if (activeIndex !== -1 && ralphElement) {
        windows[activeIndex].removeChild(ralphElement);
      }
      let novoIndex;
      do {
        novoIndex = Math.floor(Math.random() * windows.length);
      } while (novoIndex === activeIndex);
      activeIndex = novoIndex;
      ralphElement = criarRalph();
      windows[activeIndex].appendChild(ralphElement);
      ralphElement.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        windows[activeIndex].removeChild(ralphElement);
        activeIndex = -1;
      });
    }

    setInterval(mostrarRalph, 1000);