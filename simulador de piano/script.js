document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", () => {
      const note = key.dataset.note;
      playSound(note);
    });
  });
  
  function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
  }
  