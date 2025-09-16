export const playAudio = (audioSrc: string, volume: number = 0.7): void => {
  try {
    const audio = new Audio(audioSrc);
    audio.volume = volume;
    void audio.play();
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.debug("playAudio: failed to play audio", err);
  }
};

export const playAudioWithFallback = (audioSrc: string, volume: number = 0.7): void => {
  try {
    const audio = new Audio(audioSrc);
    audio.volume = volume;
    const tryPlay = () => audio.play();
    
    tryPlay().catch(() => {
      // If autoplay is blocked, wait for user gesture
      const once = () => {
        tryPlay().finally(() => {
          document.removeEventListener("pointerdown", once);
          document.removeEventListener("click", once);
          document.removeEventListener("touchstart", once);
          document.removeEventListener("keydown", once);
        });
      };
      document.addEventListener("pointerdown", once, { once: true });
      document.addEventListener("click", once, { once: true });
      document.addEventListener("touchstart", once, { once: true });
      document.addEventListener("keydown", once, { once: true });
    });
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.debug("playAudioWithFallback: failed to setup audio", err);
  }
};
