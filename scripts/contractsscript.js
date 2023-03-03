function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".sidebar-toggle");
  sidebar.classList.toggle("close");
}

const customerData = [
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment: "Deutsche Bundespost. Apple products monthly discount",
    Company: "Deutsche Bundespost",
    Contract: "Signed",
    Assignee: "Haydn Schäfer",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Wolfsburg, Poststraße 28",
    establishment:
      "Volkswagen Group. Samsung laptops discount and extended warranty for 5 years",
    Company: "Volkswagen Group",
    Contract: "In Progress",
    Assignee: "Wanda Herrmann",
  },
  {
    Name: "Aldrich Vogel",
    location: "Germany, Berlin, Rathausstraße 5",
    establishment:
      "Volkswagen Group. Samsung laptops discount and extended warranty for 5 years",
    Company: "Volkswagen Group",
    Contract: "Building",
    Assignee: "",
  },
];

populateDashBoard(customerData);
function populateDashBoard(customerData) {
  let contractsSection = document.querySelector(".contracts-section");
  for (data of customerData) {
    let contractsCard = document.createElement("div");
    contractsCard.classList.add("contracts-card");
    let contractsCardHeader = document.createElement("div");
    contractsCardHeader.classList.add("contracts-card-header");
    let contractsCardHeaderTitle = document.createElement("p");
    contractsCardHeaderTitle.classList.add("card-header-title");
    contractsCardHeaderTitle.innerText = data["establishment"];
    let contractsCardHeaderProgress = document.createElement("p");

    contractsCardHeaderProgress.classList.add("card-header-progress");
    if (data["Contract"] == "In Progress") {
      contractsCardHeaderProgress.classList.add("progress");
    } else if (data["Contract"] == "Signed") {
      contractsCardHeaderProgress.classList.add("signed");
    } else {
      contractsCardHeaderProgress.classList.add("building");
    }
    contractsCardHeaderProgress.innerText = data["Contract"];
    contractsCardHeader.appendChild(contractsCardHeaderTitle);
    contractsCardHeader.appendChild(contractsCardHeaderProgress);
    contractsCard.appendChild(contractsCardHeader);
    let contractsCardOtherDetails = document.createElement("div");
    contractsCardOtherDetails.classList.add("card-other-details");
    let cardCompanyDetails = document.createElement("p");
    let cardCompanyLabel = document.createElement("span");
    cardCompanyLabel.classList.add("item-label");
    cardCompanyLabel.innerText = "Company:";
    let cardCompanycontent = document.createElement("span");
    cardCompanycontent.classList.add("item-content");
    cardCompanycontent.innerText = data["Company"];
    cardCompanyDetails.appendChild(cardCompanyLabel);
    cardCompanyDetails.appendChild(cardCompanycontent);
    contractsCardOtherDetails.appendChild(cardCompanyDetails);
    let cardLocationDetails = document.createElement("p");
    let cardLocationLabel = document.createElement("span");
    cardLocationLabel.classList.add("item-label");
    cardLocationLabel.innerText = "Location:";
    let cardLocationContent = document.createElement("span");
    cardLocationContent.classList.add("item-content");
    cardLocationContent.innerText = data["location"];
    cardLocationDetails.appendChild(cardLocationLabel);
    cardLocationDetails.appendChild(cardLocationContent);
    contractsCardOtherDetails.appendChild(cardLocationDetails);
    let cardContractDetails = document.createElement("p");
    let cardContractLabel = document.createElement("span");
    cardContractLabel.classList.add("item-label");
    cardContractLabel.innerText = "Contract:";
    let cardContractContent = document.createElement("span");
    cardContractContent.classList.add("item-content");
    if (data["Contract"] != "Building") {
      cardContractContent.innerHTML = `<a>Show conditions</a>`;
      cardContractContent.classList.add("blue");
    } else {
      cardContractContent.innerHTML = `<a>Add conditions</a>`;
      cardContractContent.classList.add("red");
    }
    cardContractDetails.appendChild(cardContractLabel);
    cardContractDetails.appendChild(cardContractContent);
    contractsCardOtherDetails.appendChild(cardContractDetails);
    let cardAssigneeDetails = document.createElement("p");
    let cardAssigneeLabel = document.createElement("span");
    cardAssigneeLabel.classList.add("item-label");
    cardAssigneeLabel.innerText = "Assignee:";
    let cardAssigneeContent = document.createElement("span");
    cardAssigneeContent.classList.add("item-content");
    if (data["Contract"] != "Building") {
      cardAssigneeContent.innerHTML = `<a>${data["Assignee"]}</a>`;
      cardAssigneeContent.classList.add("blue");
    } else {
      cardAssigneeContent.innerHTML = `<a>Add Assignee</a>`;
      cardAssigneeContent.classList.add("red");
    }
    cardAssigneeDetails.appendChild(cardAssigneeLabel);
    cardAssigneeDetails.appendChild(cardAssigneeContent);
    contractsCardOtherDetails.appendChild(cardAssigneeDetails);
    userIconHolder = document.createElement("div");
    userIconHolder.classList.add("user-icon-holder");
    userIconImage = document.createElement("img");
    userIconImage.setAttribute("src", "/images/icon.svg");
    userIconImage.classList.add("userIcon");
    userIconHolder.appendChild(userIconImage);
    detailsUserName = document.createElement("span");
    detailsUserName.innerText = data["Name"];
    detailsUserName.classList.add("userName");
    userIconHolder.appendChild(detailsUserName);
    contractsCardOtherDetails.appendChild(userIconHolder);
    contractsCard.appendChild(contractsCardOtherDetails);
    dotIcon = document.createElement("div");
    dotIcon.classList.add("dot-icon");
    contractsCardOtherDetails.appendChild(dotIcon);
    contractsSection.appendChild(contractsCard);
  }
  const dotIconSelector = document.getElementsByClassName("dot-icon");
  for (let i = 0; i < dotIconSelector.length; i++) {
    dotIconSelector[i].innerHTML = `<svg class="svg">
    <use xlink:href="#dot__icon"></use>
  </svg>`;
  }
}
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
let addContactsBtn = document.querySelector(".add-contracts");
const addContracts = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  modal.classList.add("top");
};
const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.remove("top");
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
addContactsBtn.addEventListener("click", addContracts);
