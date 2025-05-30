// Menu Button
  const menuButton = document.querySelector(".Header_MenuButton");
  const menuIcon = document.getElementById("menuIcon");
  const menu = document.querySelector(".Menu_Menu");
  const headerCont = document.querySelector(".Header_List");

  function toggleMenu() {
    headerCont.classList.toggle("Header_MenuOpen");
    menu.classList.toggle("Menu_Open");

    // Toggle between ☰ (menu) and ✖ (close)
    if (menu.classList.contains("Menu_Open")) {
      menuIcon.textContent = "Close";
    } else {
      menuIcon.textContent = "Menu";
    }
  }

  menuButton.addEventListener("click", toggleMenu);

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      if (menu.classList.contains("Menu_Open")) {
        toggleMenu();
      }
    }
  });


// TYPING ANIMATION
const texts = ["மரம் வேலைகள்", "மரம் டிசைன்கள்", "கபோர்டு வேலைகள்"];
let index = 0;
let element = document.getElementById("animatedText");

function typeEffect(element, text, i, callback) {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1);
    setTimeout(() => typeEffect(element, text, i + 1, callback), 100);
  } else {
    setTimeout(callback, 2000);
  }
}

function startAnimation() {
  typeEffect(element, texts[index], 0, () => {
    setTimeout(() => {
      element.innerHTML = "";
      index = (index + 1) % texts.length;
      startAnimation();
    }, 500);
  });
}

startAnimation();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  const themeIcon = document.getElementById("theme-icon");

  if (isDarkMode) {
    themeIcon.innerHTML =
      '<path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>'; // Moon icon with white stroke
  } else {
    themeIcon.innerHTML =
      '<path d="M12 3V2M12 22V21M21 12H22M2 12H3M18.5 5.5L20 4M4 20L5.5 18.5M4 4L5.5 5.5M18.5 18.5L20 20" stroke="black" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="4" stroke="black" stroke-width="2" stroke-linecap="round" fill="yellow"/>'; // Sun icon with yellow fill and black stroke
  }
}

// WhatsApp & Email
function handleMobileButtonClick() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "tel:9788893014";
  } else {
    window.open("tel:+9788893014", "_blank");
  }
}

function handleWhatsappButtonClick() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "https://wa.me/919788893014";
  } else {
    window.open("https://web.whatsapp.com/send?phone=919788893014", "_blank");
  }
}



$(document).ready(function () {
  $(".filter-btn").click(function () {
    var filter = $(this).data("filter");

    if (filter === "*") {
      $(".product-card").show();
    } else {
      $(".product-card").each(function () {
        if ($(this).hasClass(filter)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  $('.filter-btn[data-filter="*"]').click();
});




document.getElementById("sendBtn").addEventListener("click", sendWhatsApp);

async function sendWhatsApp() {
    let phoneNumber = "+7823999388";

    let name = document.querySelector(".name")?.value.trim() || "";
    let email = document.querySelector(".email")?.value.trim() || "";
    let subject = document.querySelector(".Subject")?.value.trim() || "";
    let message = document.querySelector(".Message")?.value.trim() || "";

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    let textMessage = `*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    let encodedMessage = encodeURIComponent(textMessage);
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    try {
        window.open(whatsappURL, '_blank').focus();
    } catch (error) {
        console.error("Error opening WhatsApp:", error);
        alert("Failed to open WhatsApp. Please try again.");
    }
}
