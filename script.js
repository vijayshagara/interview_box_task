function clickFun(data) {
  let splitdata = data.split("__");
  let num = splitdata[1];
  let allParentCards = document.querySelectorAll('[id^="parent_card__"]');
  let alldisplayNone = document.querySelectorAll('[class^="d-none"]');
  allParentCards.forEach((card) => {
    card.classList.remove("onClickcard");
    card.style.display = "flex";
  });

  alldisplayNone.forEach((dN) => {
    dN.style.display = "none";
  });

  let inputElement = document.getElementById(`radio_${num}`);
  if (inputElement) {
    inputElement.checked = true;

    let parentDivCard = document.getElementById(`parent_card__${num}`);
    if (parentDivCard) {
      parentDivCard.classList.add("onClickcard");
      parentDivCard.style.display = "block";

      let cardDisplayNoneElements = parentDivCard.querySelectorAll(".d-none");
      cardDisplayNoneElements.forEach((dN) => {
        dN.style.display = "block";
      });
    }
  } else {
    console.log(`Element with ID radio_${num} not found.`);
  }
}
