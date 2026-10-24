(() => {
  const page = document.querySelector("#speakhero");
  if (!page) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealItems = Array.from(page.querySelectorAll("[data-reveal]"));

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  const parallax = page.querySelector("[data-parallax]");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (parallax && finePointer.matches && !reduceMotion.matches) {
    const updateParallax = (event) => {
      const bounds = parallax.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      parallax.style.setProperty("--sh-parallax-x", `${x * 12}px`);
      parallax.style.setProperty("--sh-parallax-y", `${y * 10}px`);
    };

    parallax.addEventListener("pointermove", updateParallax);
    parallax.addEventListener("pointerleave", () => {
      parallax.style.setProperty("--sh-parallax-x", "0px");
      parallax.style.setProperty("--sh-parallax-y", "0px");
    });
  }
})();
