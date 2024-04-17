function toggleDarkMode() {
    const body = document.body;
    const image = document.getElementById('image');

    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Change image source based on current mode
    if (body.classList.contains('dark-mode')) {
      image.src = 'dark-image.jpg'; // Replace 'dark-image.jpg' with your dark mode image URL
    } else {
      image.src = 'light-image.jpg'; // Replace 'light-image.jpg' with your light mode image URL
    }
  }

  // Event listener for button click
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);