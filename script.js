const questions = {
    facil: [
        {
            question: "Quem é o vocalista do Queen?",
            options: ["Freddie Mercury", "Axl Rose", "Robert Plant", "Mick Jagger"],
            correct: "Freddie Mercury",
            explanation: "Freddie Mercury foi o icônico vocalista do Queen, conhecido por sua incrível habilidade vocal e presença de palco."
        },
        {
            question: "Qual dessas músicas é da banda Nirvana?",
            options: ["Sweet Child O' Mine", "Smells Like Teen Spirit", "Bohemian Rhapsody", "Hotel California"],
            correct: "Smells Like Teen Spirit",
            explanation: "Smells Like Teen Spirit é um dos maiores sucessos da banda Nirvana, liderada por Kurt Cobain. A música foi lançada em 1991 no álbum Nevermind e marcou o início da era do grunge."
        },
        {
            question: "Qual banda gravou a música Stairway to Heaven?",
            options: ["Led Zeppelin", "The Who", "The Rolling Stones", "Deep Purple"],
            correct: "Led Zeppelin",
            explanation: "Stairway to Heaven, lançada em 1971 no álbum Led Zeppelin IV, é uma das músicas mais famosas do rock. A combinação de melodia suave e solos de guitarra marcantes fez dela um clássico."
        },
        {
            question: "Quem é conhecido como o Deus da Guitarra?",
            options: ["Jimi Hendrix", "Jimmy Page", "Eric Clapton", "Eddie Van Halen"],
            correct: "Jimi Hendrix",
            explanation: "Jimi Hendrix é amplamente reconhecido como um dos maiores guitarristas de todos os tempos. Ele revolucionou a forma como a guitarra era tocada, com técnicas inovadoras e performances memoráveis, como em Purple Haze."
        },
        {
            question: "Qual banda lançou a música Bohemian Rhapsody?",
            options: ["Eagles", "Dire Straits", "Queen", "The Kinks"],
            correct: "Queen",
            explanation: "Bohemian Rhapsody é uma das músicas mais icônicas do Queen, lançada em 1975 no álbum A Night at the Opera. É conhecida por sua estrutura única e pela performance de Freddie Mercury."
        },

    ],
    medio: [
        {
            question: "Quem foi o guitarrista da banda Led Zeppelin?",
            options: ["Jimmy Page", "Jimi Hendrix", "Eric Clapton", "Slash"],
            correct: "Jimmy Page",
            explanation: "Jimmy Page foi o guitarrista da banda Led Zeppelin e é considerado um dos maiores guitarristas de todos os tempos."
        },
        {
            question: " Qual músico é conhecido como O Príncipe das Trevas no rock?",
            options: ["Ronnie James Dio", "Ozzy Ousborne", "Alice Cooper", " Marilyn Manson"],
            correct: "Ozzy Ousborne",
            explanation: "Ozzy Osbourne ganhou o apelido de Príncipe das Trevas devido ao seu papel como vocalista da banda Black Sabbath, pioneira do heavy metal, e por seu estilo sombrio e performances marcantes."
        },
        {
            question: "Qual banda gravou o álbum conceitual American Idiot?",
            options: ["Green Day", "Blink-182", "Foo Fighters", "Linkin Park"],
            correct: "Green Day",
            explanation: "Lançado em 2004, American Idiot é um álbum conceitual do Green Day que critica a sociedade americana da época e inclui hits como Boulevard of Broken Dreams e Wake Me Up When September Ends."
        },
        {
            question: "Qual música do Metallica tem o subtítulo The Unforgiven?",
            options: ["One", "Nothing Else Matters", "Enter Sandman", "The Unforgiven"],
            correct: "The Unforgiven",
            explanation: "The Unforgiven é uma balada pesada lançada no álbum Metallica (também conhecido como The Black Album) em 1991. A música explora temas de arrependimento e autoconhecimento"
        },
        {
            question: "Qual dessas bandas foi formada na década de 1960 nos Estados Unidos?",
            options: ["The Who", "Creedence Clearwater Revival", "The Rolling Stones", "Led Zeppelin"],
            correct: "Creedence Clearwater Revival",
            explanation: "A Creedence Clearwater Revival, ou CCR, foi formada na Califórnia em 1967 e é conhecida por sucessos como Fortunate Son e Have You Ever Seen the Rain."
        },
        {
            question: "Qual banda teve David Bowie como vocalista convidado em uma música?",
            options: ["Deep Purple", "Eagles", "Queen", " Pink Floyd"],
            correct: "Queen",
            explanation: "David Bowie colaborou com o Queen na música Under Pressure, lançada em 1981. A canção é um dos maiores sucessos de ambos os artistas."
        },
        {
            question: "Qual álbum dos Rolling Stones é considerado um dos melhores da história do rock?",
            options: ["Let It Bleed", "Sticky Fingers", "Exile on Main St.", "Beggars Banquet"],
            correct: "Exile on Main St.",
            explanation: "Lançado em 1972, Exile on Main St. é um álbum duplo que combina rock, blues e country, sendo frequentemente listado entre os melhores álbuns de todos os tempos."
        },
        {
            question: "Qual é a música mais longa da discografia do Pink Floyd?",
            options: ["Comfortably Numb", "Echoes", "Money", "Shine On You Crazy Diamond"],
            correct: "Echoes",
            explanation: "Com mais de 23 minutos, Echoes é a música mais longa do Pink Floyd, lançada no álbum Meddle (1971). A faixa é um marco do rock progressivo."
        },
        {
            question: "Qual banda lançou o álbum Nevermind em 1991?",
            options: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"],
            correct: "Nirvana",
            explanation: "Nevermind foi o álbum que consolidou o movimento grunge. Lançado pelo Nirvana, liderado por Kurt Cobain, incluiu hits como Smells Like Teen Spirit e Come as You Are."
        },
        {
            question: "Qual foi o primeiro álbum dos Beatles?",
            options: ["Abbey Road", "Rubber Soul", "Please Please Me", "Revolver"],
            correct: "Please Please Me",
            explanation: "Lançado em 1963, Please Please Me foi o álbum de estreia dos Beatles. Ele incluiu sucessos como Love Me Do e Twist and Shout, marcando o início da Beatlemania."
        },
       
    ],
    dificil: [
        {
            question: "Qual álbum do Black Sabbath introduziu o gênero doom metal?",
            options: ["Black Sabbath", "Paranoid", "Master of Reality", "Vol. 4"],
            correct: "Master of Reality",
            explanation: "Master of Reality, lançado em 1971, é considerado um dos precursores do doom metal devido ao uso de afinações graves e riffs pesados."
        },
        {
            question: "Qual membro dos Beatles lançou o álbum solo All Things Must Pass?",
            options: ["Paul McCartney", "John Lennon", " George Harrison", "Ringo Starr"],
            correct: " George Harrison",
            explanation: "All Things Must Pass, lançado em 1970, foi o primeiro álbum solo de George Harrison após o fim dos Beatles, contendo o hit My Sweet Lord."
        },
        {
            question: "Qual guitarrista foi apelidado de Slowhand?",
            options: ["Eric Clapton", "Jeff Beck", "Jimmy Page", "David Gilmour"],
            correct: "Eric Clapton",
            explanation: "Eric Clapton ganhou o apelido Slowhand por seu estilo único de tocar guitarra e pela reação do público quando ele quebrava cordas e trocava no palco."
        },
        {
            question: "Quem foi o principal compositor de Hotel California?",
            options: ["Don Henley", "Glenn Frey", "Joe Walsh", "Don Felder"],
            correct: "Don Felder",
            explanation: "Don Felder compôs a melodia de Hotel California, enquanto Don Henley e Glenn Frey escreveram as letras."
        },
        {
            question: "Qual álbum do The Who é considerado o primeiro álbum conceitual do rock?",
            options: ["Tommy", " Quadrophenia", "The Who Sell Out", "My Generation"],
            correct: "Tommy",
            explanation: "Tommy, lançado em 1969, é amplamente considerado o primeiro álbum conceitual, contando a história de um garoto cego, surdo e mudo."
        },
        {
            question: "Quem foi o baixista original do Metallica?",
            options: ["Jason Newsted", "Cliff Burton", "Ron McGovney", "Robert Trujillo"],
            correct: "Ron McGovney",
            explanation: "Ron McGovney foi o baixista original do Metallica antes de ser substituído por Cliff Burton, que trouxe um estilo mais técnico à banda."
        },
        {
            question: "Qual banda gravou a música Tuesday's Gone?",
            options: ["Lynyrd Skynyrd", "The Allman Brothers Band", "Creedence Clearwater Revival", "Fleetwood Mac"],
            correct: "Lynyrd Skynyrd",
            explanation: "Tuesday's Gone é uma das músicas mais conhecidas do Lynyrd Skynyrd, lançada no álbum de estreia da banda, Pronounced 'Lĕh-'nérd 'Skin-'nérd."
        },
        {
            question: "Qual membro do Queen era responsável pela maioria das composições da banda?",
            options: ["Brian May", "Roger Taylor", "Freddie Mercury", "John Deacon"],
            correct: "Freddie Mercury",
            explanation: "Embora todos os membros do Queen contribuíssem com composições, Freddie Mercury escreveu grande parte dos sucessos, incluindo Bohemian Rhapsody e We Are the Champions."
        },
        {
            question: "Qual álbum do Led Zeppelin é conhecido como Led Zeppelin IV?",
            options: ["Physical Graffiti", "Houses of the Holy", "Untitled (IV)", "Presence"],
            correct: "Untitled (IV)",
            explanation: "O quarto álbum da banda não possui título oficial e é frequentemente chamado de Led Zeppelin IV. Ele inclui clássicos como Stairway to Heaven."
        },
        {
            question: "Quem escreveu a letra de Gimme Shelter, dos Rolling Stones?",
            options: ["Mick Jagger", "Keith Richards", "Brian Jones", "Ambos Mick Jagger e Keith Richards"],
            correct: "Ambos Mick Jagger e Keith Richards",
            explanation: "Mick Jagger e Keith Richards coescreveram Gimme Shelter, uma das músicas mais marcantes dos Rolling Stones, com forte mensagem social e política."
        },
        {
            question: "Qual banda teve seu nome inspirado por um professor de ginástica?",
            options: ["AC/DC", "The Who", "Lynyrd Skynyrd", "Cream"],
            correct: "Lynyrd Skynyrd",
            explanation: "O nome Lynyrd Skynyrd foi inspirado em Leonard Skinner, um professor de ginástica que implicava com os membros da banda por seus cabelos longos."
        },
        {
            question: "Qual álbum do Pink Floyd é baseado no tema de alienação mental e social?",
            options: ["The Wall", "Wish You Were Here", "Animals", "The Dark Side of the Moon"],
            correct: "The Dark Side of the Moon",
            explanation: "The Dark Side of the Moon aborda temas como loucura, ganância e alienação, inspirados em parte pelo estado mental de Syd Barrett, ex-integrante da banda."
        },
        {
            question: "Qual foi o último álbum lançado por Janis Joplin antes de sua morte?",
            options: ["Cheap Thrills", "Pearl", "Kozmic Blues", "I Got Dem Ol' Kozmic Blues Again Mama!"],
            correct: "Pearl",
            explanation: "Pearl foi lançado postumamente em 1971, após a morte de Janis Joplin. O álbum inclui Me and Bobby McGee e Mercedes Benz."
        },
        {
            question: "Quem foi o compositor principal da música Free Bird do Lynyrd Skynyrd?",
            options: ["Ronnie Van Zant", "Allen Collins", "Gary Rossington", "ED King"],
            correct: "Allen Collins",
            explanation: "Free Bird, um dos maiores clássicos do Lynyrd Skynyrd, foi escrita principalmente por Allen Collins, com letras de Ronnie Van Zant."
        },
        {
            question: "Qual música dos Eagles foi inspirada pelo livro O Mágico de Oz?",
            options: ["Hotel California", "Desperado", "Take It Easy", "The Last Resort"],
            correct: "The Last Resort",
            explanation: "The Last Resort aborda temas de destruição ambiental e perda de paraísos, com uma referência sutil ao desejo humano de encontrar algo perfeito, inspirado por O Mágico de Oz."
        },
        {
            question: "Quem escreveu a música Me and Bobby McGee, famosa na voz de Janis Joplin?",
            options: ["Kris Kristofferson", "Janis Joplin", "Bob Dylan", "Joni Mitchell"],
            correct: "Kris Kristofferson",
            explanation: "Me and Bobby McGee foi composta por Kris Kristofferson e Fred Foster. Janis Joplin gravou uma versão icônica da música em seu álbum Pearl, lançado postumamente."
        },
        {
            question: "Qual músico tocou bateria no primeiro álbum do Black Sabbath?",
            options: ["Cozy Powell", "Bill Ward", "Vinny Appice", "Carmine Appice"],
            correct: "Bill Ward",
            explanation: "Bill Ward foi o baterista original do Black Sabbath e tocou no álbum de estreia autointitulado da banda, lançado em 1970."
        },
        {
            question: "Qual álbum dos Rolling Stones foi gravado em um estúdio improvisado no sul da França?",
            options: ["Sticky Fingers", "Goats Head Soup", "Beggars Banquet", "Exile on Main St."],
            correct: "Exile on Main St.",
            explanation: "Exile on Main St. foi gravado em grande parte no porão da mansão de Keith Richards, chamada Nellcôte, enquanto a banda estava exilada na França por questões fiscais."
        },
        {
            question: "Qual foi a primeira música composta por George Harrison para os Beatles?",
            options: ["Something", "Taxman", "Don't Bother Me", "Here Comes the Sun"],
            correct: "Don't Bother Me",
            explanation: "George Harrison compôs Don't Bother Me em 1963, que foi incluída no álbum With The Beatles. Foi a primeira tentativa dele como compositor"
        },
        {
            question: "Qual música do Blue Öyster Cult, presente no álbum Secret Treaties (1974), faz referência ao piloto alemão da Primeira Guerra Mundial, Manfred von Richthofen, também conhecido como Barão Vermelho?",
            options: ["Flaming Telepaths", "Career of Evil", "Subhuman", "ME 262"],
            correct: "ME 262",
            explanation: "ME 262 é uma música que mistura história militar com ficção, referindo-se ao Messerschmitt Me 262, o primeiro caça a jato operacional da Segunda Guerra Mundial. A letra menciona o Barão Vermelho em um contexto metafórico, ligando a glória dos pilotos alemães à evolução tecnológica bélica. Essa música exemplifica o interesse do Blue Öyster Cult por temas históricos e militares."
        },
    ]
};


let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function startQuiz(difficulty) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    currentQuestions = questions[difficulty];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = ''; // Limpar respostas anteriores
    question.options.forEach(option => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = option;
        answerDiv.onclick = () => checkAnswer(option, question);
        answersDiv.appendChild(answerDiv);
    });

    // Esconder feedback e continuar botão
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('continue-btn').style.display = 'none';
}

function checkAnswer(selected, question) {
    const feedback = document.getElementById('feedback');
    if (selected === question.correct) {
        correctAnswers++;
        feedback.innerHTML = `<p>Acertou! 🎉</p><p>${question.explanation}</p>`;
        showConfetti();
    } else {
        incorrectAnswers++;
        feedback.innerHTML = `<p class="error">Errou! ❌</p><p>${question.explanation}</p>`;
    }

    // Mostrar explicação e botão "Continuar"
    document.getElementById('feedback').style.display = 'block';
    document.getElementById('continue-btn').style.display = 'inline-block';
}

function showConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000); // Remover confete após animação
    }
}

function continueQuiz() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('acertos').textContent = `Acertos: ${correctAnswers}`;
    document.getElementById('erros').textContent = `Erros: ${incorrectAnswers}`;
}

function resetQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function backToMenu() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}