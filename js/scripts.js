
function questCalc(que1, que2, que3, que4, que5) {
  const queTotal = que1 + que2 + que3 + que4 + que5;
  return queTotal;
}

function suggCalc(questTotal, que6, que7, pref1, pref2) {
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
      choiceSugg = ", Ruby, and PHP";
    } else if (choice === 2) {
      suggestion = "Back-End - Ruby or PHP";
      choiceSugg = ", and Python";
    } else {
      suggestion = "Back-End - JavaScript";
      choiceSugg = ", and Python";
    }
  } else if (pref1 === 3) {
    if (choice === 1) {
      suggestion = "Mobile - Java";
      choiceSugg = ", and C#";
    } else {
      suggestion = "Mobile - C#";
      choiceSugg = ", and Java";
    }
  } else if (pref1 === 4) {
    suggestion = "Game - C#";
  } else if (pref1 === 5) {
    if (choice === 1) {
      suggestion = "Desktop - C#";
      choiceSugg = ", and Go";
    } else {
      suggestion = "Desktop - Go";
      choiceSugg = ", and C#";
    }
  } else {
    suggestion = "System - Go";
  }

  if (pref1 !== pref2) {
    if (pref2 === 1) {
      suggestion = "1. " + suggestion + ", and 2. Front-end - JavaScript";
    } else if (pref2 === 2) {
      if (choice === 1) {
        suggestion = "1. " + suggestion + ", and 2. Back-End - Python";
      } else if (choice === 2) {
        suggestion = "1. " + suggestion + ", and 2. Back-End - Ruby or PHP";
      } else {
        suggestion = "1. " + suggestion + ", and 2. Back-End - JavaScript";
      }
    } else if (pref2 === 3) {
      if (choice === 1) {
        suggestion = "1. " + suggestion + ", and 2. Mobile - Java";
      } else {
        suggestion = "1. " + suggestion + ", and 2. Mobile - C#";
      }
    } else if (pref2 === 4) {
      suggestion = "1. " + suggestion + ", and 2. Game - C#";
    } else if (pref2 === 5) {
      if (choice === 1) {
        suggestion = "1. " + suggestion + ", and 2. Desktop - C#";
      } else {
        suggestion = "1. " + suggestion + ", and 2. Desktop - Go";
      }
    } else {
      suggestion = "1. " + suggestion + ", and 2. System - Go";
    } 
  } else if (pref1 === 1 || pref1 === 4 || pref1 === 6){
    suggestion = suggestion + ". I would suggest looking at some other programs too";
  } else {
    suggestion = suggestion + choiceSugg;
  }

  if (questTotal >= 17) {
    suggestion = "Work hard and you will do well. Your starter language should be " + suggestion + ".";
  } else if (questTotal >= 10) {
    suggestion = "You may have some hard times, but with a few extra skills you will do ok. Your starter language should be " + suggestion + ".";
  } else {
    suggestion = "Maybe programming is not your thing. If you really want to, you should look into some problem solving and critical thinking skills before you get started.";
  }
  
  return suggestion;
}


$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const question6 = parseInt($("input:radio[name=question6]:checked").val());
    const question7 = parseInt($("input:radio[name=question7]:checked").val());
    const first = parseInt($("#first").val());
    const second = parseInt($("#second").val());
    alert(first);
    alert(second);
    const qTotal = questCalc(question1, question2, question3, question4, question5);

    const result = suggCalc(qTotal, question6, question7, first, second);

    $("#suggested-language").text(result);

    $("#language").show();
    $(".survey").toggle();

  });
});