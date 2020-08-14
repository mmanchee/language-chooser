function questCalc(que1, que2, que3, que4, que5) {
  const queTotal = que1 + que2 + que3 + que4 + que5;
  return queTotal;
}

function prefCalc(pref1, pref2) {
  if (pref1 === pref2) {
    return pref1;
  } else if (pref1 === 1 || pref1 === 4 || pref1 === 6) {
    
  }
}

function suggCalc(questTotal, preferance, salary, que6, que7) {

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

    const pTotal = prefCalc(first, second);

    const result = suggCalc(pTotal, pTotal, salary, question6, question7);

    $("#suggested-language").text(result);

    $("#language").show();

  });
});