// navbar sticky
// document.addEventListener("scroll", () => {
//   const navbar1 = document.querySelector(".navbar1");
//   const navbar2 = document.querySelector(".banner-header");

//   let scrollPosition = window.scrollY;
//   console.log(scrollPosition);
//   // Check the scroll position
//   if (scrollPosition > 100) {
//     navbar1.style.transform = "translateY(-100%)";

//     // Show the second navbar
//     navbar2.style.top = "100px";
//   } else {
//     // Show the first navbar
//     navbar1.style.transform = "translateY(0)";

//     // Hide the second navbar
//     navbar2.style.top = "-100px";
//   }
// });

// const mainNavbar = document.querySelector(".navbar1");
// const stickyNavbar = document.querySelector(".banner-header");

// // Scroll event listener
// window.addEventListner("scroll", () => {
//   // Check scroll position
//   if (window.scrollY > 100) {
//     // When scrolled 100px or more
//     mainNavbar.style.display = "none"; // Hide main navbar
//     stickyNavbar.classList.add("show"); // Show sticky navbar
//   } else {
//     mainNavbar.style.display = "block"; // Show main navbar
//     stickyNavbar.classList.remove("show"); // Hide sticky navbar
//   }
// });
// youtube video
document.getElementById("play-btn").addEventListener("click", () => {
  const frame = getElementById("frame2");
  const videoUrl =
    "https://www.youtube.com/embed/OTJX8yjiIMs?si=orfXw_BnaZoVDdI-";
  frame.src = videoUrl;
  frame.style.display = "block";
  // document.getElementById("play-btn").style.display = "none";
});
// ham close and open
const coutBtn = document.querySelector(".cout-icon-width");
coutBtn.addEventListener("click", () => {
  const sideNav = document.querySelector(".ham-overlay");
  sideNav.classList.remove("open-nav");
});
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const sideNav = document.querySelector(".ham-overlay");
  sideNav.classList.add("open-nav");
});
// popup
$(function() {
  $(".chat-open-dialog").click(function() {
    $(this).toggleClass("active");
    $('.chat-popup').toggleClass("active");
    $('.chat-button-destroy').toggleClass("active");
  });
});

$(function() {
  $(".chat-button-start").click(function() {
    $(this).toggleClass("active");
    $('.chat-popup').toggleClass("chat-init");
  });
});

$(function() {
  $(".chat-button-destroy").click(function() {
    $('.chat-popup').removeClass("active");
    $('.chat-open-dialog').removeClass("active");
    $(this).removeClass("active");
  });
});


var chatConfig = {};
function createChatConfig(){
  if (document.getElementById('firstName').value == '') {
    document.getElementById('firstName').value = "Customer";
  }
  var firstName = document.getElementById('firstName').value;
  var agentEmail = document.getElementById('agentEmail').value;



  chatConfig = {
    // Web chat application URL
    "webchatAppUrl": "https://apps.mypurecloud.com/webchat",

    // Web chat service URL
    "webchatServiceUrl": "https://realtime.mypurecloud.com:443",

    // Numeric organization ID
    "orgId": 14685,
    //"orgId": "3b17c007-e31c-44de-a3e3-805ed380e833",
    //"orgId": "ca1cfce4-d807-46ef-82a2-4354931c8ea2",

    // Organization name
    "orgName": "mohawkgroup",

    // Requested agent language skill (Agent must have this language skill to receive chat)
    //"language": "English - Written",

    // Requested agent skills (Agent must have these skills to receive chat)
    //"skills": ["Computers", "Printers"],
    // OR
    "skills": [],

    // Priority
    //"priority": 0,

    // Queue Name
    "queueName" : "Customer Service",

    // Target agent email (OPTIONAL)
    //"agentEmail": agentEmail,

    // Log level
    "logLevel": "DEBUG",

    // Locale code
    "locale": "en",

    // Data that will be included with interaction
    "data": {
      "firstName": firstName,
      "addressStreet": "64472 Brown Street",
      "addressCity": "Lindgrenmouth",
      "addressPostalCode": "50163-2735",
      "addressState": "FL",
      "phoneNumber": "1-916-892-2045 x293",
      "phoneType": "Cell",
      "customerId": 59606
    },

    // Logo used at the top of the chat window
    "companyLogo": {
      "width": 600,
      "height": 149,
      "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-large-cea5ee47.png"
    },

    // Logo used within the chat window
    "companyLogoSmall": {
      "width": 149,
      "height": 149,
      "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-small-9c9fe09b.png"
    },

    // Image used for agent
    "agentAvatar": {
      "width": 462,
      "height": 462,
      "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/agent-e202505f.png"
    },

    // Text displayed with chat window is displayed
    // "welcomeMessage": "Thanks for chatting.",

    // CSS class applied to the chat window
    "cssClass": "webchat-frame",

    // Custom style applied to the chat window
    "css": {
      "width": "100%",
      "height": "100%"
    }


  };
}


function startEmbeddedChat() {
  createChatConfig();
  ININ.webchat.create(chatConfig, function(err, webchat) {
    if (err) {
      throw err;
    }

    // Render to frame
    webchat.renderFrame({
      containerEl: 'chatContainer'
    });
  });
}

function startPopupChat() {
  createChatConfig();
  ININ.webchat.create(chatConfig, function(err, webchat) {
    if (err) {
      throw err;
    }
    // Render to popup
    webchat.renderPopup({
      width: 400,
      height: 400,
      title: 'Chat'
    });
  });
}
