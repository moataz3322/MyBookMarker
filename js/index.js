var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteList = [];
var subBtn = document.getElementById("subBtn");

// For validation
function validationName() {
  var regex = /^[a-zA-Z\s]{3,}$/;
  var text = siteName.value;

  if (regex.test(text)) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");

    subBtn.removeAttribute("data-bs-toggle");
    subBtn.removeAttribute("data-bs-target");

    return true;
  } else {
    siteName.classList.add("is-invalid");
    subBtn.setAttribute("data-bs-toggle", "modal");
    subBtn.setAttribute("data-bs-target", "#exampleModal");

    return false;
  }
}
function validationUrl() {
  var regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|net|org)(\/.*)?$/;
  var url = siteUrl.value;

  if (regex.test(url)) {
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
    subBtn.removeAttribute("data-bs-toggle");
    subBtn.removeAttribute("data-bs-target");

    return true;
  } else {
    siteUrl.classList.add("is-invalid");
    subBtn.setAttribute("data-bs-toggle", "modal");
    subBtn.setAttribute("data-bs-target", "#exampleModal");

    return false;
  }
}

// For local storage check
if (localStorage.getItem("siteContainer") !== null) {
  siteList = JSON.parse(localStorage.getItem("siteContainer"));

  displayData();
}

// Add site
function addSite() {
  if (validationName() && validationUrl()) {
    var site = {
      name: siteName.value,
      url: siteUrl.value,
    };

    // check if value includes https or auto added
    if (site.url.includes("https://")) {
      siteList.push(site);
      localStorage.setItem("siteContainer", JSON.stringify(siteList));

      displayData();
      console.log(siteList);
      clearData();
    } else {
      site.url = "https://" + siteUrl.value;
      siteList.push(site);

      localStorage.setItem("siteContainer", JSON.stringify(siteList));

      displayData();
      clearData();
      console.log(siteList);
    }
  }
}

function displayData() {
  var cartona = "";
  for (let i = 0; i < siteList.length; i++) {
    cartona += `  <tr>
      <th scope="row">${i + 1}</th>
      <td>${siteList[i].name}</td>
      <td> <a href="${
        siteList[i].url
      } " target="_blank" rel="noopener noreferrer"><button class="visit-btn" id="visitBtn"  ><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
      <td><button onclick="delData(${i})" class="del-btn" id="delBtn"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
  }
  document.getElementById("tableData").innerHTML = cartona;
}

function clearData() {
  siteName.value = null;
  siteUrl.value = null;
}

function delData(index) {
  siteList.splice(index, 1);

  localStorage.setItem("siteContainer", JSON.stringify(siteList));

  console.log(siteList);

  displayData();
}

//todo======================

var quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "Hustle in silence and let your success make the noise.",
    author: "Frank Ocean",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Me",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Me",
  },
];

function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `-- ${randomQuote.author}`;
}

showRandomQuote();

setInterval(showRandomQuote, 10000);
