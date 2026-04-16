let currentState = welcoming;

let oOrder = {
  aItems: [],
  bExtraItem: false
};

let sItem = "";
let sOptionOne = "";

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
  oOrder = { aItems: [], bExtraItem: false };
  sItem = "";
  sOptionOne = "";
}

function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn[0] = "Welcome to Simple Salon";
  aReturn[1] = "What would you like?";
  aReturn[2] = "Choose haircut or hair colour";

  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("haircut") || input.includes("colour")) {

    if (input.includes("haircut")) {
      sItem = "Haircut";
    } else {
      sItem = "Hair Colour";
    }

    currentState = choosingOptionOne;
    aReturn[0] = "Hair length? (short or long)";
    return aReturn;
  }

  aReturn[0] = "Type haircut or colour";
  return aReturn;
}

function choosingOptionOne(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("short") || input.includes("long")) {

    if (input.includes("short")) {
      sOptionOne = "Short";
    } else {
      sOptionOne = "Long";
    }

    currentState = choosingOptionTwo;
    aReturn[0] = "Service type? (basic or full)";
    return aReturn;
  }

  aReturn[0] = "Type short or long";
  return aReturn;
}

function choosingOptionTwo(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("basic") || input.includes("full")) {

    let sOptionTwo = "";

    if (input.includes("basic")) {
      sOptionTwo = "Basic";
    } else {
      sOptionTwo = "Full";
    }

    oOrder.aItems[oOrder.aItems.length] = {
      sItem: sItem,
      sOptionOne: sOptionOne,
      sOptionTwo: sOptionTwo
    };

    sItem = "";
    sOptionOne = "";

    currentState = anotherItem;
    aReturn[0] = "Added.";
    aReturn[1] = "Add another? (yes/no)";
    return aReturn;
  }

  aReturn[0] = "Type basic or full";
  return aReturn;
}

function anotherItem(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("yes")) {
    currentState = choosingItem;
    aReturn[0] = "Choose haircut or colour";
    return aReturn;
  }

  if (input.includes("no")) {
    currentState = upsell;
    aReturn[0] = "Add hair treatment? (yes/no)";
    return aReturn;
  }

  aReturn[0] = "yes or no?";
  return aReturn;
}

function upsell(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("yes")) {
    oOrder.bExtraItem = true;
    currentState = done;
    aReturn[0] = "Booked with treatment";
    return aReturn;
  }

  if (input.includes("no")) {
    oOrder.bExtraItem = false;
    currentState = done;
    aReturn[0] = "Booked";
    return aReturn;
  }

  aReturn[0] = "yes or no?";
  return aReturn;
}

function done() {
  let aReturn = [];
  aReturn[0] = "Done. Thanks!";
  return aReturn;
}

