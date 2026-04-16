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
  aReturn[2] = "Choose buzz cut or regular cut";

  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (
    input.includes("buzz") ||
    input.includes("regular")
  ) {
    if (input.includes("buzz")) {
      sItem = "Buzz Cut";
    } else {
      sItem = "Regular Cut";
    }

    currentState = choosingOptionOne;
    aReturn[0] = "Blade size? (1 or 2)";
    return aReturn;
  }

  aReturn[0] = "Type buzz or regular";
  return aReturn;
}

function choosingOptionOne(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (
    input.includes("1") ||
    input.includes("2")
  ) {
    if (input.includes("1")) {
      sOptionOne = "1 Blade";
    } else {
      sOptionOne = "2 Blade";
    }

    currentState = choosingOptionTwo;
    aReturn[0] = "Finish? clean or natural";
    return aReturn;
  }

  aReturn[0] = "Type 1 or 2";
  return aReturn;
}

function choosingOptionTwo(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (
    input.includes("clean") ||
    input.includes("natural")
  ) {
    let sOptionTwo = "";

    if (input.includes("clean")) {
      sOptionTwo = "Clean";
    } else {
      sOptionTwo = "Natural";
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

  aReturn[0] = "Type clean or natural";
  return aReturn;
}

function anotherItem(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("yes")) {
    currentState = choosingItem;
    aReturn[0] = "Choose buzz or regular";
    return aReturn;
  }

  if (input.includes("no")) {
    currentState = upsell;
    aReturn[0] = "Add shampoo? (yes/no)";
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
    aReturn[0] = "Booked with shampoo";
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
  aReturn[0] = "Done";
  return aReturn;
}

