// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  const userNumber = parseInt(document.getElementById("user-number").value)
  if (userNumber == randomNumber) {
    document.getElementById("answer").innerHTML = 
      "<p>You have guessed the correct number!</p>"
  }
  if (userNumber != randomNumber) {
    document.getElementById("answer").innerHTML = 
      "<p>You guessed incorrectly" +
      "<br/>The correct answer was: " + randomNumber + "</p>"
  }
}
