  const submitBtn = document.getElementById('submit-btn');


  const quizData = [
    {
      image: "images/blur/bike1.jpg",
      original: "images/original/bike1.jpg",
      answer: ["dedacciai", "데다차이"]
    },
    {
      image: "images/blur/bike2.jpg",
      original: "images/original/bike2.jpg",
      answer: ["dolan", "도란"]
    },
    {
      image: "images/blur/bike3.jpg",
      original: "images/original/bike3.jpg",
      answer: ["dosnoventa", "도스노벤타", "도스노"]
    },
    {
      image: "images/blur/bike4.jpg",
      original: "images/original/bike4.jpg",
      answer: ["rogas", "로가스"]
    },
    {
      image: "images/blur/bike5.jpg",
      original: "images/original/bike5.jpg",
      answer: ["rotus", "로터스"]
    },
    {
      image: "images/blur/bike6.jpg",
      original: "images/original/bike6.jpg",
      answer: ["rucy", "루시"]
    },
    {
      image: "images/blur/bike7.jpg",
      original: "images/original/bike7.jpg",
      answer: ["look", "룩"]
    },
    {
      image: "images/blur/bike8.jpg",
      original: "images/original/bike8.jpg",
      answer: ["leader", "리더"]
    },
    {
      image: "images/blur/bike9.jpg",
      original: "images/original/bike9.jpg",
      answer: ["liberty", "리버티"]
    },
    {
      image: "images/blur/bike10.jpg",
      original: "images/original/bike10.jpg",
      answer: ["merida", "메리다", "멕라렌"]
    },
    {
      image: "images/blur/bike11.jpg",
      original: "images/original/bike11.jpg",
      answer: ["missile", "미사일"]
    },
    {
      image: "images/blur/bike12.jpg",
      original: "images/original/bike12.jpg",
      answer: ["velobike", "벨바", "벨로바이크"]
    },
    {
      image: "images/blur/bike13.jpg",
      original: "images/original/bike13.jpg",
      answer: ["black taipan", "블탄", "블랙타이판", "블랙 타이판"]
    },
    {
      image: "images/blur/bike14.jpg",
      original: "images/original/bike14.jpg",
      answer: ["bianchi", "비앙키"]
    },
    {
      image: "images/blur/bike15.jpg",
      original: "images/original/bike15.jpg",
      answer: ["bmc", "비엠씨", "비엠시"]
    },
    {
      image: "images/blur/bike16.jpg",
      original: "images/original/bike16.jpg",
      answer: ["supernova", "슈퍼노바", "수퍼노바"]
    },
    {
      image: "images/blur/bike17.jpg",
      original: "images/original/bike17.jpg",
      answer: ["cervelo", "써벨로"]
    },
    {
      image: "images/blur/bike18.jpg",
      original: "images/original/bike18.jpg",
      answer: ["tsunami", "쓰나미"]
    },
    {
      image: "images/blur/bike19.jpg",
      original: "images/original/bike19.jpg",
      answer: ["archive", "아카이브"]
    },
    {
      image: "images/blur/bike20.jpg",
      original: "images/original/bike20.jpg",
      answer: ["specialized", "알레", "스페셜라이즈드"]
    },
    {
      image: "images/blur/bike21.jpg",
      original: "images/original/bike21.jpg",
      answer: ["unknown", "언노운", "언노운 펄스", "펄스"]
    },
    {
      image: "images/blur/bike22.jpg",
      original: "images/original/bike22.jpg",
      answer: ["age", "에이지 수프라", "에이지수프라", "수프라", "에이지"]
    },
    {
      image: "images/blur/bike23.jpg",
      original: "images/original/bike23.jpg",
      answer: ["ecologix", "에콜", "에콜로직스"]
    },
    {
      image: "images/blur/bike24.jpg",
      original: "images/original/bike24.jpg",
      answer: ["engine11", "엔진", "엔진11", "dcc", "DCC"]
    },
    {
      image: "images/blur/bike25.jpg",
      original: "images/original/bike25.jpg",
      answer: ["wiawis", "위아위스"]
    },
    {
      image: "images/blur/bike26.jpg",
      original: "images/original/bike26.jpg",
      answer: ["interpro", "인터프로"]
    },
    {
      image: "images/blur/bike27.jpg",
      original: "images/original/bike27.jpg",
      answer: ["zipp", "짚"]
    },
    {
      image: "images/blur/bike28.jpg",
      original: "images/original/bike28.jpg",
      answer: ["cinelli", "치넬리"]
    },
    {
      image: "images/blur/bike29.jpg",
      original: "images/original/bike29.jpg",
      answer: ["cipollini", "치폴리니"]
    },
    {
      image: "images/blur/bike30.jpg",
      original: "images/original/bike30.jpg",
      answer: ["cabeza", "카베자"]
    },
    {
      image: "images/blur/bike31.jpg",
      original: "images/original/bike31.jpg",
      answer: ["cannondale", "케논데일"]
    },
    {
      image: "images/blur/bike32.jpg",
      original: "images/original/bike32.jpg",
      answer: ["corima", "코리마"]
    },
    {
      image: "images/blur/bike33.jpg",
      original: "images/original/bike33.jpg",
      answer: ["constantine", "콘스탄틴", "콘탄"]
    },
    {
      image: "images/blur/bike34.jpg",
      original: "images/original/bike34.jpg",
      answer: ["twitter", "트위터"]
    },
    {
      image: "images/blur/bike35.jpg",
      original: "images/original/bike35.jpg",
      answer: ["fastforward", "ffwd", "페포", "페스트포어워드"]
    },
    {
      image: "images/blur/bike36.jpg",
      original: "images/original/bike36.jpg",
      answer: ["pelle", "펠레"]
    },
    {
      image: "images/blur/bike37.jpg",
      original: "images/original/bike37.jpg",
      answer: ["felt", "펠트"]
    },
    {
      image: "images/blur/bike38.jpg",
      original: "images/original/bike38.jpg",
      answer: ["poloandbike", "폴로앤바이크"]
    },
    {
      image: "images/blur/bike39.jpg",
      original: "images/original/bike39.jpg",
      answer: ["planetx", 'planet x', "플래닛엑스", '플래닛x', '플래닛 x']
    },
    {
      image: "images/blur/bike40.jpg",
      original: "images/original/bike40.jpg",
      answer: ["pinarello", '피나렐로', '피나렐로 멧']
    }
  ];

    
    // 랜덤으로 10개 선택
    const shuffled = quizData.sort(() => 0.5 - Math.random());
    let selectedQuiz = shuffled.slice(0, 10);
    
    let currentIndex = 0;
    let score = 0;
    
    const imageEl = document.getElementById('bike-image');
    const inputEl = document.getElementById('answer-input');
    const resultMsg = document.getElementById('result-message');
    const progressEl = document.getElementById('progress');
    const resultSection = document.getElementById('result-section');
    const quizSection = document.getElementById('quiz-section');
    const scoreText = document.getElementById('score-text');
    const restartBtn = document.getElementById('restart-btn');
    
    function showQuestion() {
      const currentQuiz = selectedQuiz[currentIndex];
      imageEl.src = currentQuiz.image;
      inputEl.value = "";
      resultMsg.textContent = "";
      progressEl.textContent = `문제 ${currentIndex + 1} / ${selectedQuiz.length}`;
      inputEl.focus();
    }
    
    function normalizeAnswer(str) {
      if (typeof str !== "string") return "";
      return str
        .toLowerCase()
        .normalize('NFC')
        .replace(/\s+/g, '')
        .replace(/[-_.]/g, ''); 
    }
    let isProcessing = false;

    function checkAnswer() {
      if (isProcessing) return;
      isProcessing = true;

      const container = document.querySelector('.container');
      const currentQuiz = selectedQuiz[currentIndex];
      const userAnswerRaw = inputEl.value.trim();
    
      if (userAnswerRaw === "") {
        isProcessing = false; 
        return;
      }

    
      submitBtn.disabled = true;
    
      const userAnswer = normalizeAnswer(userAnswerRaw);
    
      const rawAnswer = currentQuiz.answer;
      const correctAnswers = Array.isArray(rawAnswer)
        ? rawAnswer.map(a => normalizeAnswer(a))
        : [normalizeAnswer(rawAnswer)];
    
      if (correctAnswers.includes(userAnswer)) {
        resultMsg.style.color = "green";
        resultMsg.textContent = "✅ 정답!";
        container.style.border = "5px solid green";
        score++;
      } else {
        resultMsg.style.color = "red";
        resultMsg.textContent = `❌ 틀렸습니다! 정답은 "${currentQuiz.answer[0]}" 입니다.`;
        container.style.border = "5px solid red";
      }
    
      imageEl.src = currentQuiz.original;
    
      progressEl.textContent = `${currentIndex + 1} / ${selectedQuiz.length}`;
    
      setTimeout(() => {
        currentIndex++;
        if (currentIndex < selectedQuiz.length) {
          container.style.border = "none";
          showQuestion();
          submitBtn.disabled = false;
        } else {
          showResult();
        }
        isProcessing = false;
      }, 1500);
    }  
    
  function showResult() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    scoreText.textContent = `총 ${selectedQuiz.length}문제 중 ${score}문제를 맞추셨습니다!`;
  }



  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    quizSection.classList.remove("hidden");
    resultSection.classList.add("hidden");

    const reshuffled = quizData.sort(() => 0.5 - Math.random());
    selectedQuiz = reshuffled.slice(0, 10);  // 새 배열로 재할당

    showQuestion();
  }


  submitBtn.addEventListener("click", checkAnswer);
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  });
  restartBtn.addEventListener("click", restartQuiz);

  showQuestion();

  const showAnswerBtn = document.getElementById('show-answer-btn');

  showAnswerBtn.addEventListener("click", () => {
    const currentQuiz = selectedQuiz[currentIndex];
    const container = document.querySelector('.container');
  
    resultMsg.style.color = "blue";
    resultMsg.textContent = `📌 정답은 "${currentQuiz.answer[0]}" 입니다.`;
    container.style.border = "3px dashed blue";
  
    imageEl.src = currentQuiz.original;
  });
  