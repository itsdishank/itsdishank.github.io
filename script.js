// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no");
    const yesBtn = document.getElementById("yes");
  
    // When the mouse hovers over the "No" button, reposition it anywhere on the page.
    noBtn.addEventListener("mouseover", () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      // Get the current size of the "No" button (its fixed dimensions)
      const btnRect = noBtn.getBoundingClientRect();
  
      // Calculate the maximum X and Y coordinates to keep the button fully in view.
      const maxX = screenWidth - btnRect.width;
      const maxY = screenHeight - btnRect.height;
  
      // Generate random positions within these bounds
      const randomX = Math.random() * (maxX/2);
      const randomY = Math.random() * (maxY/2);
  
      // Apply the new position
      noBtn.style.position = "absolute";
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
      yesBtn.style.left = "0px";
    });
  
    // When the "Yes" button is clicked:
    yesBtn.addEventListener("click", () => {
      // Launch a confetti celebration using canvas-confetti.
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
  
      // Replace the container’s content with a loving message.
      document.querySelector(".container").innerHTML = `
        <h1 style="font-family: 'Dancing Script', cursive; font-size: 3rem; color: #d6336c;">
          Ding ding! Jackpot! 🎰 You just won a million kisses! ❤️💋
        </h1>
        <p style="font-size: 1.2rem; color: #555; margin-top: 20px;">
          Awee, I knew you'd say yes! You’re the best thing that ever happened to me! 💖
        </p>
      `;
    });
  
    // Generate floating background hearts for extra cuteness.
    const bgContainer = document.querySelector(".background-hearts");
    const numHearts = 30; // Number of hearts to generate
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart-bg");
  
      // Randomize size (between 10px and 30px)
      const size = Math.random() * 20 + 10;
      heart.style.width = size + "px";
      heart.style.height = size + "px";
  
      // Random horizontal placement
      heart.style.left = Math.random() * 100 + "%";
  
      // Randomize the duration (between 5 and 10 seconds) and start delay
      const duration = Math.random() * 5 + 5;
      heart.style.animationDuration = duration + "s";
      heart.style.animationDelay = Math.random() * 5 + "s";
  
      bgContainer.appendChild(heart);
    }
  });
  