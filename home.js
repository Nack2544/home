function myFunction(x) {
    x.classList.toggle("change");
  }

  document.getElementById('scroll-down').addEventListener('click', function () {
    const targetSection = document.getElementById('target-section');
    const navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar

    // Scroll to the target section, minus the nav bar height
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
    });
});


function myFunction(x) {
  x.classList.toggle("change"); // Toggles hamburger menu animation
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("show"); // Toggles full-page menu visibility
}



function toggleNav(x) {
  x.classList.toggle("change"); // Toggles hamburger menu animation
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("show"); // Toggles full-screen menu visibility

  // Toggle scrolling on the main page
  const body = document.body;
  if (navList.classList.contains("show")) {
      body.classList.add("no-scroll");
  } else {
      body.classList.remove("no-scroll");
  }
}

