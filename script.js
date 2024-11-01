document.addEventListener("scroll", function() {
  const contentBox = document.querySelector(".teacher-content1");
  const boxPosition = contentBox.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility

  if (boxPosition < screenPosition) {
    contentBox.classList.add("visible");
  } else {
    contentBox.classList.remove("visible");
  }
});

document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".title-properties");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });

  document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".leader");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });

  document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".vice");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });

  document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".secretary");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });

  document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".security");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });

  document.addEventListener("scroll", function() {
    const contentBox = document.querySelector(".header");
    const boxPosition = contentBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value for earlier or later visibility
  
    if (boxPosition < screenPosition) {
      contentBox.classList.add("visible");
    } else {
      contentBox.classList.remove("visible");
    }
  });