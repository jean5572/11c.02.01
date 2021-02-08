"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#button").addEventListener("click", readOptionValues);
}

function readOptionValues() {
  const readInput = document.querySelector("#input").value;
  const operatorInput = document.querySelector("#operator");

  const firstSpace = readInput.indexOf(" ");
  const lastSpace = readInput.lastIndexOf(" ");
  const lastPng = readInput.lastIndexOf(".");
  const lastJpg = readInput.lastIndexOf(".");
  const findPng = readInput.substring(lastPng + 1);
  const findJpg = readInput.substring(lastJpg + 1);
  const star = "*";

  let finalOutput = "";
  //if-statements....
  if (operatorInput.value === "1") {
    finalOutput = readInput.substring(0, 1).toUpperCase() + readInput.substring(1);
    console.log(finalOutput);
    printOutput();
  } else if (operatorInput.value === "2") {
    finalOutput = readInput.substring(0, firstSpace);
    console.log(finalOutput);
    printOutput();
  } else if (operatorInput.value === "3") {
    finalOutput = readInput.substring(0, firstSpace).length;
    console.log(finalOutput);
    printOutput();
  } else if (operatorInput.value === "4") {
    finalOutput = readInput.substring(firstSpace + 1, lastSpace).trim();
    console.log(finalOutput);
    printOutput();
  } else if (operatorInput.value === "5") {
    if (findJpg === "jpg" || findPng === "png") {
      console.log("true");
      finalOutput = readInput;
      console.log(finalOutput);
      printOutput();
    } else {
      finalOutput = "ERROR! use a filename!";
      console.log(finalOutput);
      printOutput();
    }
  } else if (operatorInput.value === "6") {
    finalOutput = star.repeat(readInput.length);
    console.log(finalOutput);
    printOutput();
  } else if (operatorInput.value === "7") {
    const let1 = readInput.substring(0, 2).toLowerCase();
    const let2 = readInput[2].toUpperCase();
    const let3 = readInput.substring(3).toLowerCase();

    finalOutput = let1 + let2 + let3;
    console.log(finalOutput);
    printOutput();
  } else {
    finalOutput = "Peter I don't want to do this one";
    printOutput();
  }

  function printOutput() {
    console.log("print Output");
    document.querySelector("#output").value = finalOutput.toString();
  }
}
