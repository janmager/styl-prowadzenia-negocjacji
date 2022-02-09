var startButton = $("#start-btn");
var start = $("#start");
var test = $("#test");
var results = $("#results");
var answerA = $("#answerA");
var answerB = $("#answerB");



async function registerServiceworker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./serviceworker.js');
    } catch (e) {
      console.log('Serviceworker registraction failed');
    }
  }
}

window.onload = function() {
  registerServiceworker();
};

// Baza pytan
var pytania = [
  [
    "Są przypadki kiedy pozwalam innym wziąć odpowiedzialność za rozwiązanie problemu.",
    "Zamiast negocjować zagadnienia sporne, próbuję podkreślić zagadnienia w których się zgadzamy."
  ],
  [
    "Próbuję znaleźć rozwiązanie kompromisowe.",
    "Próbuję rozważyć wszystkie wątpliwości obu stron."
  ],
  [
    "Zazwyczaj twardo dążę do realizacji wyznaczonych celów.",
    "Mógłbym spróbować uspokoić odczucia innych i zachować nasze stosunki."
  ],
  [
    "Próbuję znaleźć rozwiązanie kompromisowe.",
    "Czasami poświęcam własne życzenia dla życzeń innej osoby."
  ],
  [
    "Stale szukam pomocy innych przy wypracowaniu rozwiązania.",
    "Próbuję robić to co jest konieczne aby uniknąć niepotrzebnych napięć."
  ],
  [
    "Próbuję unikać stwarzania sobie nieprzyjemności.",
    "Próbuję wygrać swoją pozycję."
  ],
  [
    "Próbuję odłożyć problem do chwili kiedy mam trochę czasu na przemyślenie go.",
    "Rezygnuję z pewnych punktów w zamian za inne."
  ],
  [
    "Zazwyczaj twardo dążę do realizacji swych celów.",
    "Próbuję natychmiast wyjawić wszystkie zastrzeżenia i problemy."
  ],
  [
    "Uważam że różnice nie zawsze są warte martwienia się o nie.",
    "Wkładam trochę wysiłku w osiągnięcie swojego celu."
  ],
  [
    "Twardo dążą do realizacji swych celów.",
    "Próbuję znaleźć rozwiązanie kompromisowe."
  ],
  [
    "Próbuję natychmiast wyjawić wszystkie zastrzeżenia i problemy.",
    "Mógłbym spróbować uspokoić odczucia innych i zachować nasze stosunki."
  ],
  [
    "Czasem unikam zajmowania stanowiska, które powodowałoby kontrowersje.",
    "Pozwolę mu utrzymać kilka jego punktów jeśli on pozwoli mi utrzymać kilka moich."
  ],
  [
    "Proponuję rozwiązanie pośrednie.",
    "Obstaję przy realizacji swoich punktów."
  ],
  [
    "Przedstawiam mu swoje poglądy i pytam o jego.",
    "Próbuję wykazać mu logiczność i korzyści mojego stanowiska."
  ],
  [
    "Mógłbym spróbować uspokoić odczucia innych i zachować nasze stosunki.",
    "Próbuję robić to co jest konieczne aby uniknąć napięć."
  ],
  [
    "Próbuję nie ranić uczuć innej osoby.",
    "Próbuję przekonać inną osobę o zaletach mojego stanowiska."
  ],
  [
    "Zazwyczaj twardo dążę do realizacji swych celów.",
    "Próbuję robić to, co jest konieczne aby uniknąć niepotrzebnych napięć."
  ],
  [
    "Jeżeli uszczęśliwi to drugą osobę, mogę pozwolić jej na zachowanie swych poglądów.",
    "Pozwolę mu utrzymać kilka jego punktów jeśli on pozwoli mi utrzymać kilka moich."
  ],
  [
    "Próbuję natychmiast wyjawić wszystkie zastrzeżenia i problemy.",
    "Próbuję odłożyć problem do chwili kiedy mam trochę czasu na przemyślenie go."
  ],
  [
    "Próbuję natychmiast zniwelować różnice naszych stanowisk.",
    "Próbuję znaleźć uczciwą kombinację zysków i strat dla nas obu."
  ],
  [
    "W nadchodzących negocjacjach spróbuję zwracać uwagę na życzenia drugiej osoby.",
    "Zawsze skłaniam się ku bezpośredniemu przedyskutowaniu problemu."
  ],
  [
    "Próbuję znaleźć stanowisko pośrednie między jego a moim.",
    "Domagam się uznania swoich życzeń."
  ],
  [
    "Bardzo często staram się zaspokoić wszystkie nasze życzenia.",
    " Są przypadki kiedy pozwalam innym wziąć odpowiedzialność za rozwiązanie problemu."
  ],
  [
    "Jeżeli stanowisko drugiego wydaje się być dla niego bardzo ważne, spróbowałbym wyjść naprzeciw jego życzeniom.",
    "Próbuję zmusić go do rozwiązania kompromisowego."
  ],
  [
    "Próbuję wykazać logiczne korzyści mojego postępowania.",
    "W nadchodzących negocjacjach spróbuję zwracać uwagę na życzenia drugiej strony."
  ],
  [
    "Proponuję rozwiązanie pośrednie.",
    "Prawie zawsze staram się zaspokoić wszystkie nasze życzenia."
  ],
  [
    "Czasem unikam zajmowania stanowiska, które powodowałoby kontrowersje.",
    "Jeżeli uszczęśliwi to drugą osobę, mogę pozwolić jej na zachowanie swych poglądów."
  ],
  [
    "Zazwyczaj twardo dążę do realizacji swych celów.",
    "Zazwyczaj szukam pomocy innych przy wypracowywaniu rozwiązania."
  ],
  [
    "Proponuję rozwiązanie pośrednie.",
    "Uważam, że różnice nie zawsze są warte martwienia się o nie."
  ],
  [
    "Próbuję nie ranić uczuć innej osoby.",
    "Zawsze dzielę się problemem z inną osobą, abyśmy mogli go razem rozwiązać."
  ]
];

// Baza odpowiedzi
var odpowiedzi = [
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false]
];

// System zapisywania odpowiedzi
function saveA(numOfQuestion) {
  odpowiedzi[numOfQuestion][0] = "A";
  odpowiedzi[numOfQuestion][1] = true;
  $("#A").addClass("xActive");
  $("#B").removeClass("xActive");
}

function saveB(numOfQuestion) {
  odpowiedzi[numOfQuestion][0] = "B";
  odpowiedzi[numOfQuestion][1] = true;
  $("#B").addClass("xActive");
  $("#A").removeClass("xActive");
}

// System sprawdzania wybrania odpowiedzi
function checkAnswer(numOfQuestion) {
  if (odpowiedzi[numOfQuestion][1]) {
    if (numOfQuestion == pytania.length - 1) showResults();
    else generateQuestion(numOfQuestion + 1);
  } else alert("Nie wybrano odpowiedzi :(");
}

// System wyswietlania pytan
function generateQuestion(numOfQuestion) {
  document.getElementsByTagName('progress')[0].value = (numOfQuestion+1);
  $("#num-of-question").html(numOfQuestion + 1 + "/" + pytania.length);
  answerA.html(
    '<div class="x" id="A" onclick="saveA(' + numOfQuestion + ')">A</div>'
  );
  answerA.append(
    "<span class='answer-text'>" + pytania[numOfQuestion][0] + "</span>"
  );
  answerB.html(
    '<div class="x" id="B" onclick="saveB(' + numOfQuestion + ')">B</div>'
  );
  answerB.append(
    "<span class='answer-text'>" + pytania[numOfQuestion][1] + "</span>"
  );
  if (numOfQuestion + 1 == pytania.length) {
    $("#next-question").html(
      '<span onclick="checkAnswer(' + numOfQuestion + ')">Pokaż wyniki</span>'
    );
  } else {
    $("#next-question").html(
      '<span onclick="checkAnswer(' + numOfQuestion + ')">Następne</span>'
    );
  }
}

// System generowania wykresów
function wykres1(dane) {
  var ctx = document.getElementById("myChart1").getContext("2d");
  var chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: [dane[0][0], dane[1][0], dane[2][0], dane[3][0], dane[4][0]],
      datasets: [{
        label: "Twój styl negocjacji",
        backgroundColor: [
          "#784f9f",
          "#c15699",
          "#f46b84",
          "#ff936c",
          "#ffc55f"
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [dane[0][1], dane[1][1], dane[2][1], dane[3][1], dane[4][1]]
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function wykres2(dane) {
  var ctx = document.getElementById("myChart2").getContext("2d");

  chart = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: [dane[0][0], dane[1][0], dane[2][0], dane[3][0], dane[4][0]],
      datasets: [{
        label: "Twój styl negocjacji",
        backgroundColor: [
          "#784f9f",
          "#c15699",
          "#f46b84",
          "#ff936c",
          "#ffc55f"
        ],
        borderWidth: 5,
        data: [dane[0][1], dane[1][1], dane[2][1], dane[3][1], dane[4][1]]
      }]
    },
    options: {
      legend: {
        position: "bottom"
      },
      scale: {
        ticks: {
          display: false
        }
      }
    }
  });
}

// System obliczania stylu negocjacji
function obliczStylNegocjacji() {
  // style: unikanie, dostosowanie sie, kompromis, rywalizacja, współpraca
  var style = [
    ["Unikanie", 0],
    ["Dostosowanie", 0],
    ["Kompromis", 0],
    ["Rywalizacja", 0],
    ["Współpraca", 0]
  ];
  for (var i = 0; i < odpowiedzi.length; i++) {
    var numerPytania = i + 1;
    if (odpowiedzi[i][0] == "A") {
      if (
        numerPytania == 10 ||
        numerPytania == 12 ||
        numerPytania == 19 ||
        numerPytania == 21 ||
        numerPytania == 23
      )
        style[0][1] = style[0][1] + 1;
      if (
        numerPytania == 4 ||
        numerPytania == 5 ||
        numerPytania == 6 ||
        numerPytania == 14 ||
        numerPytania == 17 ||
        numerPytania == 28 ||
        numerPytania == 30
      )
        style[1][1] = style[1][1] + 1;
      if (
        numerPytania == 7 ||
        numerPytania == 9 ||
        numerPytania == 11 ||
        numerPytania == 16 ||
        numerPytania == 18
      )
        style[2][1] = style[2][1] + 1;
      if (
        numerPytania == 1 ||
        numerPytania == 3 ||
        numerPytania == 8 ||
        numerPytania == 13 ||
        numerPytania == 15 ||
        numerPytania == 20
      )
        style[3][1] = style[3][1] + 1;
      if (
        numerPytania == 2 ||
        numerPytania == 22 ||
        numerPytania == 24 ||
        numerPytania == 25 ||
        numerPytania == 26 ||
        numerPytania == 27 ||
        numerPytania == 29
      )
        style[4][1] = style[4][1] + 1;
    }
    if (odpowiedzi[i][0] == "B") {
      if (
        numerPytania == 4 ||
        numerPytania == 5 ||
        numerPytania == 6 ||
        numerPytania == 11 ||
        numerPytania == 20 ||
        numerPytania == 22 ||
        numerPytania == 24
      )
        style[0][1] = style[0][1] + 1;
      if (
        numerPytania == 13 ||
        numerPytania == 15 ||
        numerPytania == 16 ||
        numerPytania == 18 ||
        numerPytania == 29
      )
        style[1][1] = style[1][1] + 1;
      if (
        numerPytania == 8 ||
        numerPytania == 10 ||
        numerPytania == 12 ||
        numerPytania == 17 ||
        numerPytania == 25 ||
        numerPytania == 26 ||
        numerPytania == 27
      )
        style[2][1] = style[2][1] + 1;
      if (
        numerPytania == 2 ||
        numerPytania == 7 ||
        numerPytania == 9 ||
        numerPytania == 14 ||
        numerPytania == 19 ||
        numerPytania == 21
      )
        style[3][1] = style[3][1] + 1;
      if (
        numerPytania == 1 ||
        numerPytania == 3 ||
        numerPytania == 23 ||
        numerPytania == 28 ||
        numerPytania == 30
      )
        style[4][1] = style[4][1] + 1;
    }
  }

  // szukanie maxa
  var maxLabel = "";
  var maxPoints = 0;
  for (var i = 0; i < style.length; i++) {
    if (style[i][1] >= maxPoints) {
      if (style[i][1] == maxPoints) {
        maxLabel = maxLabel + " " + style[i][0];
      } else {
        maxLabel = style[i][0];
      }
      maxPoints = style[i][1];
    }
  }

  $(".desc-result").css({
    display: "none"
  });

  var maxes = maxLabel.split(" ");
  for (var i = 0; i < maxes.length; i++) {
    switch (maxes[i]) {
      case "Unikanie":
        $("#result-unikanie").css({
          display: "block"
        });
        break;
      case "Dostosowanie":
        $("#result-dostosowanie").css({
          display: "block"
        });
        break;
      case "Kompromis":
        $("#result-kompromis").css({
          display: "block"
        });
        break;
      case "Rywalizacja":
        $("#result-rywalizacja").css({
          display: "block"
        });
        break;
      case "Współpraca":
        $("#result-wspolpraca").css({
          display: "block"
        });
        break;
      default:
        console.log("err");
    }
  }

  if (maxes.length > 1) {
    var check = true;
    for (var i = 0; i < maxes.length; i++) {
      if (check) {
        $("#main-result").append(maxes[i]);
        check = false;
      } else {
        $("#main-result").append(" <span class='and'>i</span> " + maxes[i]);
      }
    }
  } else {
    $("#main-result").html(maxLabel);
  }

  wykres1(style);
  wykres2(style);
  console.log(style);
}

// System pokazywania wynikow
function showResults() {
  test.css({
    display: "none"
  });
  results.css({
    display: "flex"
  });
  obliczStylNegocjacji();
}

// Start testu
startButton.click(function () {
  start.css({
    display: "none"
  });
  test.css({
    display: "flex"
  });
  generateQuestion(0);
});

// Generowanie podsumowania
var btnGeneruj = $("#generate-result");
btnGeneruj.click(function(){
  alert("Generuj podsumowanie...");
})
