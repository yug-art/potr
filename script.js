
  const sections = document.querySelectorAll("section");
  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;
      if (secTop < triggerBottom) sec.classList.add("show");
    });
  };
  window.addEventListener("scroll", showOnScroll);
  showOnScroll();
