window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const h = 150;
  const containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    const objHeight = container.getBoundingClientRect().top;
    if (objHeight < windowHeight - h) {
      container.classList.add("show");
    }
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.classList.add("loaded");
  }, 2000);
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.classList.add("second");
  }, 2400);
});

try {
  const navbarBtn = document.querySelector("nav .right .btn");

  navbarBtn.addEventListener("click", (e) => {
    const extra = e.currentTarget.parentElement.querySelector(".extra");
    extra.classList.toggle("hidden");
  });
} catch {
  console.log("");
}

try {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  let currentSlide = 0;

  function showSlide(event) {
    const clickedDot = event.currentTarget;
    Array.from(dots).forEach((dot, index) => {
      dot.classList.remove("current");
      if (dot === clickedDot) {
        currentSlide = index;
      }
    });
    clickedDot.classList.add("current");
    Array.from(slides).forEach((slide, index) => {
      slide.style.transform = `translateX(-${index - currentSlide}00%)`;
    });
  }

  Array.from(dots).forEach((dot) => {
    dot.addEventListener("click", showSlide);
  });

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide({ currentTarget: dots[currentSlide] });
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide({ currentTarget: dots[currentSlide] });
    }
  }

  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  function automatic() {
    if (currentSlide < slides.length - 1) {
      nextSlide();
    } else {
      currentSlide = 0;
      showSlide({ currentTarget: dots[currentSlide] });
    }
  }

  setInterval(automatic, 7000);
} catch {
  console.log("");
}

function handleHover(element) {
  const extra = element.querySelector(".extra");
  extra.classList.remove("hidden");
}

function handleLeave(element) {
  const extra = element.querySelector(".extra");
  extra.classList.add("hidden");
}

try {
  const sened = document.querySelector(".sened");
  const xidmet = document.querySelector(".xidmet");
  const faktorinq = document.querySelector(".faktorinq");
  const kredit = document.querySelector(".kredit");
  const biznes = document.querySelector(".biznes");

  sened.addEventListener("mouseenter", () => handleHover(sened));
  sened.addEventListener("mouseleave", () => handleLeave(sened));

  xidmet.addEventListener("mouseenter", () => handleHover(xidmet));
  xidmet.addEventListener("mouseleave", () => handleLeave(xidmet));

  faktorinq.addEventListener("mouseenter", () => handleHover(faktorinq));
  faktorinq.addEventListener("mouseleave", () => handleLeave(faktorinq));

  kredit.addEventListener("mouseenter", () => handleHover(kredit));
  kredit.addEventListener("mouseleave", () => handleLeave(kredit));

  biznes.addEventListener("mouseenter", () => handleHover(biznes));
  biznes.addEventListener("mouseleave", () => handleLeave(biznes));
} catch {
  console.log("");
}

try {
  function openClose(event) {
    const allLi = event.currentTarget.parentElement.getElementsByTagName("li");
    const allIcons = event.currentTarget.parentElement.getElementsByClassName(
      "rightIcon"
    );

    Array.from(allLi).forEach((li, index) => {
      if (li.classList.contains("active") && li !== event.currentTarget) {
        li.style.height = "65px";
        li.classList.remove("active");
        allIcons[index].innerHTML = "<h1>+</h1>";
      }
    });

    const icon = event.currentTarget.querySelector(".rightIcon");
    const isActive = event.currentTarget.classList.contains("active");

    if (!isActive) {
      icon.innerHTML = "<h1>-</h1>";
      event.currentTarget.classList.add("active");
      const newHeight =
        85 + event.currentTarget.querySelector(".bottom").offsetHeight;
      event.currentTarget.style.height = `${newHeight}px`;
    } else {
      event.currentTarget.style.height = "65px";
      icon.innerHTML = "<h1>+</h1>";
      event.currentTarget.classList.remove("active");
    }
  }

  const tops = document.querySelector(".accordion").getElementsByTagName("li");

  Array.from(tops).forEach((top) => {
    top.addEventListener("click", openClose);
  });
} catch {
  console.log("");
}

function handleChoiceClick(choices, boxes) {
  return (e) => {
    const clickedChoice = e.currentTarget;
    Array.from(choices).forEach((choice) => {
      choice.classList.remove("active");
    });
    clickedChoice.classList.add("active");

    const isActive = (choice) => choice.classList.contains("active");

    Array.from(boxes).forEach((box, index) => {
      if (index === 0) {
        box.classList.toggle("visible", isActive(choices[0]));
      } else {
        box.classList.toggle("visible", isActive(choices[index]));
      }
    });
  };
}

try {
  const emekHaqqiLayihesiChoices = document
    .querySelector(".emekHaqqiLayihesi .advantages .choice")
    .getElementsByTagName("li");

  const emekHaqqiLayihesiBoxes = document
    .querySelector(".emekHaqqiLayihesi")
    .getElementsByClassName("about");

  Array.from(emekHaqqiLayihesiChoices).forEach((choice) => {
    choice.addEventListener(
      "click",
      handleChoiceClick(emekHaqqiLayihesiChoices, emekHaqqiLayihesiBoxes)
    );
  });
} catch {
  console.log("");
}

try {
  const bankQarantiyasiChoices = document
    .querySelector(".bankQarantiyasi .advantages .choice")
    .getElementsByTagName("li");

  const bankQarantiyasiBoxes = document
    .querySelector(".bankQarantiyasi")
    .getElementsByClassName("about");

  Array.from(bankQarantiyasiChoices).forEach((choice) => {
    choice.addEventListener(
      "click",
      handleChoiceClick(bankQarantiyasiChoices, bankQarantiyasiBoxes)
    );
  });
} catch {
  console.log("");
}

try {
  window.addEventListener("load", () => {
    const container = document.querySelector(
      "main > section > .container"
    );
    container.classList.add("show");
  });
} catch {
  console.log("");
}
