function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarHeader = document.querySelector(".header__logo.sidebar-header");
  if (sidebarHeader.textContent == "Feature Tester") {
    sidebarHeader.textContent = "FT";
  } else {
    sidebarHeader.textContent = "Feature Tester";
  }
  sidebar.classList.toggle("close");
}

const sortButton = document.querySelector(".sort-button");
const taskGrid = document.querySelector(".tasks-section");
sortButton.addEventListener("click", () => {
  taskGrid.classList.toggle("task-section-nongrid");
});

const customerData = [
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Deutsche Bundespost. Apple products monthly discount",
    Company: "Deutsche Bundespost",
    Contract: "Signed",
    Assignee: "Haydn Schäfer",
    Due_date: "August 17, 2021",
    tasks_status: "In Progress",
    items: ["iMac Pro 2020", "Delivery"],
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Wolfsburg, Poststraße 28",
    establishment:
      "Volkswagen Group. Samsung laptops discount and extended warranty for 5 years",
    Company: "Volkswagen Group",
    Contract: "In Progress",
    Assignee: "Wanda Herrmann",
    Due_date: "July 30, 2021",
    tasks_status: "Completed",
    items: [
      "x12 iPad Pro 2020",
      "x12 Extended Apple Warranty (5 years)",
      " Delivery",
    ],
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment:
      "Volkswagen Group. Samsung laptops discount and extended warranty for 5 years",
    Company: "Volkswagen Group",
    Contract: "Building",
    Assignee: "",
    Due_date: "June 5, 2021",
    tasks_status: "Cancelled",
    items: [
      "x40 iPad Pro 2021 11",
      "x40 Extended Apple Warranty (5 years)",
      "x10 iPhone 12 Pro",
    ],
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Halle (Saale), Brüderstraße 13",
    establishment:
      "Volkswagen Group. Samsung laptops discount and extended warranty for 5 years",
    Company: "Volkswagen Group",
    Contract: "Building",
    Assignee: "",
    Due_date: "June 5, 2021",
    tasks_status: "Cancelled",
    items: ["iPad Pro 2021", "Delivery"],
  },
];

populateTaskBoard(customerData);
function populateTaskBoard(customerData) {
  let tasksSections = document.querySelector(".tasks-section");
  for (data of customerData) {
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    let taskCardHeader = document.createElement("div");
    taskCardHeader.classList.add("task-card-header");
    let taskCardHeaderTitle = document.createElement("p");
    taskCardHeaderTitle.classList.add("card-header-title");
    taskCardHeaderTitle.innerText = data["establishment"];
    let taskCardHeaderProgress = document.createElement("p");
    taskCardHeaderProgress.classList.add("card-header-progress");
    if (data["tasks_status"] == "In Progress") {
      taskCardHeaderProgress.classList.add("progress");
    } else if (data["tasks_status"] == "Completed") {
      taskCardHeaderProgress.classList.add("completed");
    } else {
      taskCardHeaderProgress.classList.add("cancelled");
    }
    taskCardHeaderProgress.innerText = data["tasks_status"];
    taskCardHeader.appendChild(taskCardHeaderTitle);
    taskCardHeader.appendChild(taskCardHeaderProgress);
    taskCard.appendChild(taskCardHeader);
    let taskCardOtherDetails = document.createElement("div");
    taskCardOtherDetails.classList.add("card-other-details");
    let taskDetailsHeader = document.createElement("p");
    taskDetailsHeader.classList.add("detail-item");
    let cardDueDateLabel = document.createElement("span");
    cardDueDateLabel.classList.add("item-label");
    cardDueDateLabel.innerText = "Due date:";
    let cardDueDateContent = document.createElement("span");
    cardDueDateContent.classList.add("item-content");
    cardDueDateContent.innerText = data["Due_date"];
    taskDetailsHeader.appendChild(cardDueDateLabel);
    taskDetailsHeader.appendChild(cardDueDateContent);
    taskCardOtherDetails.appendChild(taskDetailsHeader);
    let cardLocationDetails = document.createElement("p");
    cardLocationDetails.classList.add("detail-item");
    let cardLocationLabel = document.createElement("span");
    cardLocationLabel.classList.add("item-label");
    cardLocationLabel.innerText = "Location:";
    let cardLocationContent = document.createElement("span");
    cardLocationContent.classList.add("item-content");
    cardLocationContent.innerText = data["location"];
    cardLocationDetails.appendChild(cardLocationLabel);
    cardLocationDetails.appendChild(cardLocationContent);
    taskCardOtherDetails.appendChild(cardLocationDetails);
    let carditemDetails = document.createElement("p");
    carditemDetails.classList.add("detail-item");
    let cardItemLabel = document.createElement("span");
    cardItemLabel.classList.add("item-label");
    cardItemLabel.innerText = "Items:";
    let cardItemContent = document.createElement("span");
    cardItemContent.classList.add("item-content");
    cardItemContent.classList.add("items-list");
    for (let i = 0; i < data["items"].length; i++) {
      let item = document.createElement("li");
      item.textContent = data["items"][i];
      cardItemContent.appendChild(item);
    }
    carditemDetails.appendChild(cardItemLabel);
    carditemDetails.appendChild(cardItemContent);
    taskCardOtherDetails.appendChild(carditemDetails);
    userDetailsHolder = document.createElement("div");
    userDetailsHolder.classList.add("user-holder");
    userIcon = document.createElement("div");
    userIcon.classList.add("user-icon-holder");
    userIconImage = document.createElement("img");
    userIconImage.setAttribute("src", "/images/icon.svg");
    userIconImage.classList.add("userIcon");
    userIcon.appendChild(userIconImage);
    detailsUserName = document.createElement("span");
    detailsUserName.innerText = data["Name"];
    detailsUserName.classList.add("userName");
    userIcon.appendChild(detailsUserName);
    userDetailsHolder.appendChild(userIcon);
    dotIconHolder = document.createElement("div");
    taskCardOtherDetails.appendChild(userDetailsHolder);
    taskCard.appendChild(taskCardOtherDetails);
    dotIcon = document.createElement("div");
    dotIcon.classList.add("dot-icon");
    userDetailsHolder.appendChild(dotIcon);
    userDetailsHolder.appendChild(dotIconHolder);
    taskCardOtherDetails.appendChild(userDetailsHolder);
    tasksSections.appendChild(taskCard);
  }
  
  const dotIconSelector = document.getElementsByClassName("dot-icon");
  for (let i = 0; i < dotIconSelector.length; i++) 
    dotIconSelector[i].innerHTML = `<svg class="svg">
    <use xlink:href="#dot__icon"></use>
  </svg>`;
  }

