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

const showMore = document.querySelector(".show-more");
showMore.addEventListener("click", () => {
  const scrollContent = document.querySelector(".dashboard-content-left");
  scrollContent.classList.add("show-more-toggle");
  showMore.remove();
});

function monthdrop() {
  const dropDown = document.querySelector(".monthly-drop-down");
  dropDown.classList.toggle("active");
}
function thisWeek() {
  const dropDown = document.querySelector(".this-week-drop-down");
  dropDown.classList.toggle("active");
}

function thismonthdrop() {
  const dropDown = document.querySelector(".this-month-drop-down");
  dropDown.classList.toggle("active");
}

const customerData = [
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Kaiserswerther Str. 16-18",
    establishment: "Berlin University iPad Pro 2020 (25 items)",
    status: "In Progress",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Leipzig, Riemannstraße 44",
    establishment: "BLeipzig Coffee Shop iPhone 12 Mini (6 items)",
    status: "In Progress",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Berlin Post Office (156 items)",
    status: "Completed",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Leipzig, Riemannstraße 44",
    establishment: "BLeipzig Coffee Shop iPhone 12 Mini (6 items)",
    status: "In Progress",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Berlin Post Office (156 items)",
    status: "Completed",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Leipzig, Riemannstraße 44",
    establishment: "BLeipzig Coffee Shop iPhone 12 Mini (6 items)",
    status: "In Progress",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Berlin Post Office (156 items)",
    status: "Completed",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Leipzig, Riemannstraße 44",
    establishment: "BLeipzig Coffee Shop iPhone 12 Mini (6 items)",
    status: "In Progress",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Berlin Post Office (156 items)",
    status: "Completed",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Leipzig, Riemannstraße 44",
    establishment: "BLeipzig Coffee Shop iPhone 12 Mini (6 items)",
    status: "In Progress",
  },
];
populateDashBoard(customerData);
function populateDashBoard(customerData) {
  let length = customerData.length;
  let completed = customerData.filter(
    (item) => item["status"] == "Completed"
  ).length;
  let detailsHeader = document.querySelector(
    ".details-header__completed-details"
  );
  detailsHeader.innerText = `${completed} task completed out of ${length}`;
  document.querySelector(".progress-bar").value = completed;
  let detailSection = document.querySelector(
    ".dashboard-content-left__task-details"
  );
  for (data of customerData) {
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    let taskCardHeader = document.createElement("div");
    taskCardHeader.classList.add("task-card-header");
    let taskCardOtherDetails = document.createElement("div");
    taskCardOtherDetails.classList.add("item-other-details");
    taskCard.appendChild(taskCardHeader);
    let taskCardHeaderTitle = document.createElement("p");
    taskCardHeaderTitle.classList.add("task-card-header-title");
    taskCardHeaderTitle.innerText = data["establishment"];
    let taskCardHeaderProgress = document.createElement("p");
    taskCardHeaderProgress.classList.add("task-card-header-progress");
    if (data["status"] == "In Progress") {
      taskCardHeaderProgress.classList.add("progress");
    } else {
      taskCardHeaderProgress.classList.add("completed");
    }
    taskCardHeaderProgress.innerText = data["status"];
    taskCardHeader.appendChild(taskCardHeaderTitle);
    taskCardHeader.appendChild(taskCardHeaderProgress);
    taskCardHeader.classList.add("task-card-header");
    taskCardLocationLabel = document.createElement("span");
    taskCardLocationLabel.classList.add("task-card-location-label");
    taskCardLocationLabel.innerText = "Location:";
    taskCardLocationContent = document.createElement("span");
    taskCardLocationContent.classList.add("task-card-location-content");
    taskCardLocationContent.innerText = data["location"];
    taskCardOtherDetails.appendChild(taskCardLocationLabel);
    taskCardOtherDetails.appendChild(taskCardLocationContent);
    userIconHolder = document.createElement("div");
    userIconHolder.classList.add("user-icon-holder");
    userIconImage = document.createElement("img");
    userIconImage.setAttribute("src", "/images/icon.svg");
    userIconImage.classList.add("userIcon");
    userIconHolder.appendChild(userIconImage);
    detailsUserName = document.createElement("span");
    detailsUserName.innerText = data["Name"];
    detailsUserName.classList.add("user-name");
    userIconHolder.appendChild(detailsUserName);
    taskCardOtherDetails.appendChild(userIconHolder);
    dotIcon = document.createElement("div");
    dotIcon.classList.add("dot-icon");
    taskCardOtherDetails.appendChild(dotIcon);
    taskCard.appendChild(taskCardOtherDetails);
    detailSection.appendChild(taskCard);
  }
  const dotIconSelector = document.getElementsByClassName("dot-icon");
  for (let i = 0; i < dotIconSelector.length; i++) {
    dotIconSelector[i].innerHTML = `<svg class="svg">
    <use xlink:href="#dot__icon"></use>
  </svg>`;
  }
}
