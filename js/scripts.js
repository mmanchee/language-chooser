function questCalc(que1, que2, que3, que4, que5) {
  const queTotal = que1 + que2 + que3 + que4 + que5;
  return queTotal;
}

function prefCalc(pref1) {
  let pref;
  if (pref1 === 1 || pref1 === 4 || pref1 === 6) {
    pref = "both";
  } else {
    pref = pref1;
  }
  return pref;
}

function suggCalc(questTotal, preferance, salary, que6, que7, pref1, pref2) {
  let suggestion = 0;
  let choice;
  if (que6 >= 4 && que7 >= 4) {
    choice = 1;
  } else if (que6 >= 3 && que7 >= 3) {
    choice = 2;
  } else {
    choice = 3;
  }

  if (pref1 === 1) {
    suggestion = "1. Front-end - JavaScript, ";
  } else if (pref1 === 2) {
    if (coice === 1) {
      suggestion = "1. Back-End - Python, ";
    } else if (choice === 2) {
      suggestion = "1. Back-End - Ruby or PHP, "
    } else {
      suggestion = "1. Back-End - JavaScript, "
    }
  } else if (pref1 === 3) {
    if (choice === 1) {
      suggestion = "1. Mobile - Java, "
    } else {
      suggestion = "1. Mobile - C#, "
    }
  } else if (pref1 === 4) {
    suggestion = "1. Game - C# "
  } else if (pref1 === 5) {
    if (choice === 1) {
      suggestion = "1. Desktop - C#, "
    } else {
      suggestion = "1. Mobile - Python, "
    }
  } else if (pref1 === 6) {
    suggestion = "1. System - Go "
  }
  if (preferance === "both") {
    

    if (pref1 === 2 || pref2 === 2) {

    } else if (pref1 === 3 || pref2 === 3) {

    } else if (pref1 === 4 || pref2 === 4) {

    } else if (pref1 === 5 || pref2 === 5) {

    } else if (pref1 === 6 || pref2 === 6) {

    }
  }

  return suggestion;
}

$(document).ready(function() {
  $("#survey").submit(fuction(event) {
    event.preventDefault();
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const question6 = parseInt($("input:radio[name=question6]:checked").val());
    const question7 = parseInt($("input:radio[name=question7]:checked").val());
    const salery = parseInt($("input:radio[name=salery]:checked").val());
    const first = parseInt($("#first").val());
    const second = parseInt($("#second").val());

    const qTotal = questCalc(question1, question2, question3, question4, question5);

    const pTotal = prefCalc(first);

    const result = suggCalc(pTotal, pTotal, salary, question6, question7, first, second);

    $("#suggested-language").text(result);

    $("#language").show();

  });
});