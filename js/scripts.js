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
  let choiceSugg;
  if (que6 >= 4 && que7 >= 4) {
    choice = 1;
  } else if (que6 >= 3 && que7 >= 3) {
    choice = 2;
  } else {
    choice = 3;
  }

  if (pref1 === 1) {
    suggestion = "Front-end - JavaScript";
  } else if (pref1 === 2) {
    if (choice === 1) {
      suggestion = "Back-End - Python";
      choiceSugg = "Back-End - Ruby or PHP";
    } else if (choice === 2) {
      suggestion = "Back-End - Ruby or PHP";
      choiceSugg = "Back-End - Python";
    } else {
      suggestion = "Back-End - JavaScript";
      choiceSugg = "Back-End - Python";
    }
  } else if (pref1 === 3) {
    if (choice === 1) {
      suggestion = "Mobile - Java";
      choiceSugg = "Mobile - C#";
    } else {
      suggestion = "Mobile - C#";
      choiceSugg = "Mobile - Java";
    }
  } else if (pref1 === 4) {
    suggestion = "Game - C#";
  } else if (pref1 === 5) {
    if (choice === 1) {
      suggestion = "Desktop - C#";
      choiceSugg = "Desktop - Go";
    } else {
      suggestion = "Desktop - Go";
      choiceSugg = "Desktop - C#";
    }
  } else {
    suggestion = "System - Go";
  }

  if (preferance === "both") {
    if (pref2 === 1) {
      suggestion = "1. " + suggetion + ", and 2. Front-end - JavaScript";
    } else if (pref2 === 2) {
      if (choice === 1) {
        suggestion = "1. " + suggetion + ", and 2. Back-End - Python";
      } else if (choice === 2) {
        suggestion = "1. " + suggetion + ", and 2. Back-End - Ruby or PHP";
      } else {
        suggestion = "1. " + suggetion + ", and 2. Back-End - JavaScript";
      }
    } else if (pref2 === 3) {
      if (choice === 1) {
        suggestion = "1. " + suggetion + ", and 2. Mobile - Java";
      } else {
        suggestion = "1. " + suggetion + ", and 2. Mobile - C#";
      }
    } else if (pref2 === 4) {
      suggestion = "1. " + suggetion + ", and 2. Game - C#";
    } else if (pref2 === 5) {
      if (choice === 1) {
        suggestion = "1. " + suggetion + ", and 2. Desktop - C#";
      } else {
        suggestion = "1. " + suggetion + ", and 2. Desktop - Go";
      }
    } else {
      suggestion = "1. " + suggetion + ", and 2. System - Go";
    } 
  } else if (pref1 === 1 || pref1 === 4 || pref1 === 6){
    suggestion = suggestion + ". I would suggest looking at some other programs too"
  } else {
    if (choice === 1 || choice === 3) {
      choice = 2;
    } else {
      choice = 1;
    }
    if (pref1 === 2) {
      if (choice === 1) {
        suggestion = "1. " + suggetion + ", and 2. Back-End - Python";
      } else {
        suggestion = "1. " + suggetion + ", and 2. Back-End - Ruby or PHP"
      }
    }
    if (pref1 === 3) {
      if (choice === 1) {
        suggestion = "1. " + suggetion + ", and 2. Mobile - Java"
      } else {
        suggestion = "1. " + suggetion + ", and 2. Mobile - C#"
      }
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