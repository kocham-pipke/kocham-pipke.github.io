let currentStep = 0;
let points = 0;
const answersContainer = document.querySelector('.answers');
const questionElement = document.getElementById('question');
const gifcontainer = document.getElementById('gif-ontainer');
const inputContainer = document.getElementById('inputContainer');
const catSound = new Audio('happy-cat.mp3');
const pop = new Audio('pop.mp3');
const gif = document.querySelector('.gif');
const backButton = document.getElementById('backButton');
const pointsDisplay = document.getElementById('pointsDisplay');
const wiad = document.getElementById('wiad');
const ost = document.getElementById('ost');
const muteButton = document.getElementById('muteButton');
const sendButton = document.getElementById('sendButton');
const pointsInput = document.getElementById('pointsInput');
const pow = document.getElementById('pow')
const point = document.getElementById('point')
const down = document.getElementById('down')

let aggressionLevel = 0;
let noButtonScale = 1;
let yesButtonScale = 1;

const aggressiveTexts = [
    "Czy na pewno chcesz to zrobić?",
    "Jesteś tego absolutnie pewien?",
    "Nie rób tego, serio!",
    "Zastanów się jeszcze raz!",
    "Ostatnia szansa, zmień decyzję!",
    "TO NAPRAWDĘ ZŁY WYBÓR!",
    "PRZESTAŃ KLIKAĆ NIE!",
    "MASZ OSTATNIE OSTRZEŻENIE!",
    "NIE MOŻESZ TEGO ZROBIĆ!",
    "JESTEŚ W BŁĘDZIE!"
];

function nextStep(answer) {
    if (currentStep === 0) {
        point.style.display = 'inline-block';
        pointsDisplay.style.display = 'inline-block';
        handleFirstStep(answer);
    } else if (currentStep === 1) {
        handleSecondStep(answer);
    } else if (currentStep === 2) {
        handleThirdStep(answer);
    } else if (currentStep === 3) {
        handleFourthStep(answer);
    } else if (currentStep === 4) {
        handleFifthStep(answer);
    } else if (currentStep === 5) {
        handleSixthStep(answer);
    } else if (currentStep === 6) {
        handleSeventhStep(answer);
    } else if (currentStep === 7) {
        handleEighthStep(answer);
    } else if (currentStep === 8) {
        handleNinthStep(answer);
    } else if (currentStep === 9) {
        handleTenthStep(answer);
    }
}

function handleFirstStep(answer) {
    currentStep = 1;
    questionElement.textContent = "Którego dnia w 2023r. się poznaliśmy?";
    clearAnswers();
    createAnswers(['24.11', '29.11', '26.11'], [handleSecondStep, handleSecondStep, handleSecondStep], 0);
}

function handleSecondStep(answer) {
    currentStep = 2;
    questionElement.textContent = "Ile kotów początkowo mieliśmy mieć?";
    clearAnswers();
    createAnswers(['6 kotków', '10 kotków', '8 kotków'], [handleThirdStep, handleThirdStep, handleThirdStep], 1);
}

function handleThirdStep(answer) {
    currentStep = 3;
    questionElement.textContent = "W ilu miastach byliśmy?";
    clearAnswers();
    createAnswers(['W 8 miastach', 'W 5 miastach', 'W 7 miastach'], [handleFourthStep, handleFourthStep, handleFourthStep], 2);
}

function handleFourthStep(answer) {
    currentStep = 4;
    questionElement.textContent = "Co było pierwsze?";
    clearAnswers();
    createAnswers(['Złapanie się za ręce', 'Pocałunek', 'Wyznanie miłości'], [handleFifthStep, handleFifthStep, handleFifthStep], 3);
}

function handleFifthStep(answer) {
    currentStep = 5;
    questionElement.textContent = "Kiedy pierwszy raz byłem w brodnicy?";
    clearAnswers();
    createAnswers(['09.12', '29.12', 'Ferie 2024'], [handleSixthStep, handleSixthStep, handleSixthStep], 4);
}

function handleSixthStep(answer) {
    currentStep = 6;
    questionElement.textContent = "Jak długo jesteśmy razem?";
    clearAnswers();
    createAnswers(['Rok, miesiąc i 21 dni', 'Rok, miesiąc i 18 dni', 'Rok, miesiąc i 16 dni'], [handleSeventhStep, handleSeventhStep, handleSeventhStep], 5);
}

function handleSeventhStep(answer) {
    currentStep = 7;
    questionElement.textContent = "Gdzie oznaczyłem cię na zdjeciu na instagramie?";
    clearAnswers();
    createAnswers(['W Wiśle', 'Na twojej twarzy', 'Na śniegu'], [handleEighthStep, handleEighthStep, handleEighthStep], 6);
}

function handleEighthStep(answer) {
    currentStep = 8;
    questionElement.textContent = "Pierwsze wspólne zdjęcie?";
    clearAnswers();
    createAnswers(['W meblowym', 'Na rynku', 'Na brzegu'], [handleNinthStep, handleNinthStep, handleNinthStep], 7);
}

function handleNinthStep(answer) {
    currentStep = 9;
    questionElement.textContent = "Jak bardzo mi się spodobała?";
    clearAnswers();
    createAnswers(['Bardzo', 'W ogóle', 'BARDZOASJBIUBEUI'], [handleTenthStep, handleTenthStep, handleTenthStep], 8);
}

function handleTenthStep(answer) {
    currentStep = 10;
    questionElement.textContent = "Chcesz zostać moja walentynką?";
    clearAnswers();
    createAnswers(['Tak', 'Nie'], [showGif, shrinkNoButton], 9);
}

let noClickedcount = 0;

function shrinkNoButton() {
    console.log("shrinkNoButton called");
    noButtonScale *= 0.9;
    console.log("noButtonScale:", noButtonScale);
    event.target.style.transform = `scale(${noButtonScale})`;

    yesButtonScale *= 1.3;
    const yesButton = document.querySelector('.answer-yes');
    if (yesButton) {
        console.log("yesButtonScale:", yesButtonScale);
        yesButton.style.transform = `scale(${yesButtonScale})`;
        noClickedcount++;
    }

    if (aggressionLevel < aggressiveTexts.length - 1) {
        aggressionLevel++;
        console.log("aggressionLevel:", aggressionLevel);
        questionElement.textContent = aggressiveTexts[aggressionLevel];
    }
}

function clearAnswers() {
    answersContainer.innerHTML = '';
}

function checkAnswer(questionIndex, selectedAnswerText) {
    const correctAnswersText = [
        '24.11', '8 kotków', 'W 8 miastach', 'Wyznanie miłości', '09.12',
        'Rok, miesiąc i 16 dni', 'W Wiśle', 'W meblowym', 'BARDZOASJBIUBEUI', 'Tak'
    ];

    const correctAnswer = correctAnswersText[questionIndex].trim().toLowerCase();
    const userAnswer = selectedAnswerText.trim().toLowerCase();

    const pointsFeedback = document.getElementById('pointsFeedback');
    if (correctAnswer === userAnswer) {
        points++;
        console.log(`Correct! Points: ${points}`);
        pointsFeedback.textContent = '+1';
        playPopSound()
    } else {
        console.log(`Incorrect! Points: ${points}`);
        pointsFeedback.textContent = '+0';
    }
    pointsDisplay.textContent = `Punkty: ${points}/10`;

    pointsInput.value = points;
    setTimeout(() => {
        pointsFeedback.textContent = '';
    }, 8000);
}

function playPopSound() {
    pop.volume = 0.1;
    pop.play()
        .then(() => {
            console.log("Dźwięk pop został odtworzony.");
        })
        .catch(error => {
            console.error("Błąd odtwarzania dźwięku:", error);
        });
}

function createAnswers(options, actions, questionIndex) {
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('answer');
        button.textContent = option;
        button.onclick = () => {
            actions[index](index);
            checkAnswer(questionIndex, option);
        };
        if (option === 'Tak') {
            button.classList.add('answer-yes');
        } else if (option === 'Nie') {
            button.classList.add('answer-no');
        }

        button.style.userSelect = 'none';
        answersContainer.appendChild(button);
    });
}

function showGif() {
    questionElement.style.display = 'none';
    answersContainer.style.display = 'none';

    gifcontainer.style.display = 'flex';
    ost.style.display = 'block';
    wiad.style.display = 'block';

    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'row';
    pow.style.display = "inline-block";
    backButton.style.display = 'inline-block';
    muteButton.style.display = 'inline-block';

    let soundFile = '';
    let volumeLevel = 0.008;

    if (points >= 9) {
        gif.src = 'image.gif';
        soundFile = 'happy-cat.mp3';
        volumeLevel = 0.005;
        ost.textContent = "YEYEYE 10/10 PUNKTÓW, BRAWOOO";
    } else if (points > 4) {
        gif.src = 'cat.gif';
        soundFile = 'cat-meow.mp3';
        volumeLevel = 0.008;
        ost.textContent = "Pipeczka zdobyła bardzo dużo punktów hyhy";
    } else {
        gif.src = 'banana.gif';
        soundFile = 'cry-banana-cat.mp3';
        volumeLevel = 0.01;
        ost.textContent = "O nieee pipkooo, ale nic się nie stało, możesz kliknąć powrót";
    }

    gif.alt = 'Odpowiedni GIF';

    catSound.src = soundFile;
    catSound.loop = true;
    catSound.volume = volumeLevel;
    catSound.play();

    const container = document.getElementById('container');
    const screenWidth = window.innerWidth;
    container.style.height = "50000px";
    container.style.width = "850px";
    if (screenWidth > 426) {
        container.style.paddingLeft = "0";
        container.style.paddingRight = "0";
      } else if (screenWidth < 425) {
        container.style.paddingLeft = "15vw";
        container.style.paddingRight = "15vw";
      }
}

backButton.addEventListener('click', function() {
    location.reload();
});

muteButton.addEventListener('click', function() {
    if (catSound.paused) {
        catSound.play();
        muteButton.textContent = 'Wycisz';
    } else {
        catSound.pause();
        muteButton.textContent = 'Wznów';
    }
});

function hideElementsAfterMessage() {
    pointsDisplay.style.display = "none";
    catSound.pause();
    gifcontainer.style.display = "none";
    inputContainer.style.display = "none";
    muteButton.style.display = "none";
    ost.textContent = "A oto wiadomość moja do ciebie kruszynko";
    wiad.style.display = "none"
    point.style.display = "none"
    const screenWidth = window.innerWidth;
    if (screenWidth > 426) {
        container.style.height = "300px"
        container.style.width = "70%"
      } else if (screenWidth < 425) {
        container.style.height = "70px"
        container.style.width = "70%"
      }
    showAudioControls()
    down.style.display = "inline-block"
}

const audio = document.getElementById("customAudio");
const seekBar = document.getElementById("seekBar");
const controls = document.getElementById("audioControls");
const tim = document.getElementById("tim")

function showAudioControls() {
    controls.style.display = "flex";
    tim.style.display = "contents";
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

function download() {
    const audioElement = document.getElementById('customAudio');
    const link = document.createElement('a');
    link.href = audioElement.src;
    link.download = 'audio.mp3';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



document.getElementById("myForm").addEventListener("submit", function(event) {

    const pointsInput = document.getElementById('pointsInput');
    const noClicked = document.getElementById('noClicked');

    pointsInput.value = points;
    noClicked.value = noClickedcount;

    let formData = new FormData(this);

    event.preventDefault()

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            console.log("wiadomość wysłana");
            hideElementsAfterMessage();
        }
    })
    .catch(error => {
        alert("Błąd: " + error);
        console.error("Błąd wysyłania wiadomości:", error);
    });
});
