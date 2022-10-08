/*linking the html to the javascript*/

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-para'));
const progressPara = document.querySelector('#progressPara');
const scoreTxt = document.querySelector('#score');
const progressDisplayFull = document.querySelector('#progressDisplayFull');

/*Deafault values*/
let currentQuestion = {};
let answersAccept = true;
let score = 0;
let questionNumb = 0;
let questionsLeft = [];

let questions = [
    {
        question: 'In which Italian city can you find the Colosseum?',
        choice1: 'Venice',
        choice2: 'Rome',
        choice3: 'Naples',
        choice4: 'Milan',
        answer: '2'
    },
    {
        question: 'In the TV show New Girl, which actress plays Jessica Day?',
        choice1: 'Zooey Deschanel',
        choice2: 'Kaley Cuoco',
        choice3: 'Jennifer Aniston',
        choice4: 'Alyson Hannigan',
        answer: '1'
    },
    {
        question: 'What is the largest canyon in the world?',
        choice1: 'Verdon Gorge, France',
        choice2: "King's Canyon, Australia",
        choice3: 'Grand Canyon, USA',
        choice4: 'Fjaðrárgljúfur Canyon, Iceland',
        answer: '3'
    },
    {
        question: 'How long is the border between the United States and Canada?',
        choice1: '3,525 miles',
        choice2: '4,525 miles',
        choice3: '5,525 miles',
        choice4: '6,525 miles',
        answer: '3'
    },
    {
        question: 'What is the largest active volcano in the world?',
        choice1: 'Mount Etna',
        choice2: 'Mount Vesuvius',
        choice3: 'Mouna Loa',
        choice4: 'Mount Batur',
        answer: '3'
    },
    {
        question: 'When did Lenin die?',
        choice1: '21 January 1924',
        choice2: '21 January 1934',
        choice3: '21 January 1944',
        choice4: '21 January 1954',
        answer: '1'
    },
    {
        question: 'In which US state did the Scopes Monkey Trial happen?',
        choice1: 'Maryland',
        choice2: 'South Dakota',
        choice3: 'Indiana',
        choice4: 'Tennessee',
        answer: '4'
    },
    {
        question: "When was the book 'To Kill a Mockingbird' by Harper Lee published?",
        choice1: '1950',
        choice2: '1960',
        choice3: '1970',
        choice4: '1980',
        answer: '2'
    },
    {
        question: "In which museum can you find Leonardo Da Vinci's Mona Lisa?",
        choice1: 'Le Louvre',
        choice2: 'Uffizi Museum',
        choice3: 'British Museum',
        choice4: 'Metropolitan Museum of Art',
        answer: '1'
    },
    {
    question: 'In which city can you find the Prado Museum?',
        choice1: 'Buenos Aires',
        choice2: 'Barcelona',
        choice3: 'Santiago',
        choice4: 'Madrid',
        answer: '4'
    },
    {
        question: 'When did Salt Lake City host the Winter Olympics?',
        choice1: '1992',
        choice2: '1998',
        choice3: '2002',
        choice4: '2008',
        answer: '3'
    },
    {
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard's neighbour?",
        choice1: 'Penny',
        choice2: 'Patty',
        choice3: 'Lily',
        choice4: 'Jessie',
        answer: '1'
    },
    {
        question: 'When did Hitler invade Poland?',
        choice1: '1st September 1939',
        choice2: '11th November 1939',
        choice3: '8th May 1940',
        choice4: '1st December 1940',
        answer: '1'
    },
    {
        question: 'What is the largest continent in size?',
        choice1: 'Asia',
        choice2: 'Africa',
        choice3: 'Europe',
        choice4: 'North America',
        answer: '1'
    },
    {
        question: "Which French king was nicknamed the 'Sun King'?",
        choice1: 'Louis XVI',
        choice2: 'Charlemagne',
        choice3: 'Francis I',
        choice4: 'Louis XIV',
        answer: '4'
    },
    {
        question: "Who was George W. Bush' vice president?",
        choice1: 'Kamala Harris',
        choice2: 'Joe Biden',
        choice3: 'Dick Cheney',
        choice4: 'Al Gore',
        answer: '3'
    },
    {
        question: 'Which famous inventor invented the telephone?',
        choice1: 'Thomas Edison',
        choice2: 'Benjamin Franklin',
        choice3: 'Alexander Graham Bell',
        choice4: 'Nikola Tesla',
        answer: '3'
    },
    {
        question: 'If you are born on the 1st of January, which star sign are you?',
        choice1: 'Scorpio',
        choice2: 'Capricorn',
        choice3: 'Libra',
        choice4: 'Aries',
        answer: '2'
    },
    {
        question: 'How many wives had Henry VIII?',
        choice1: '1',
        choice2: '3',
        choice3: '4',
        choice4: '6',
        answer: '4'
    },
    {
        question: 'In which city is the Juventus Football Club based?',
        choice1: 'Turin',
        choice2: 'Barcelona',
        choice3: 'Manchester',
        choice4: 'Marseille',
        answer: '1'
    },
    {
        question: 'Which artist and author made the Smurfs comic strips?',
        choice1: 'Hergé',
        choice2: 'Peyo',
        choice3: 'Morris',
        choice4: 'Edgar P. Jacobs',
        answer: '2'
    },
    {
        question: 'What does the Richter scale measure?',
        choice1: 'Wind Speed',
        choice2: 'Temperature',
        choice3: 'Tornado Strength',
        choice4: 'Earthquake intensity',
        answer: '4'
    },
    {
        question: 'Which country is the footballer Cristiano Ronaldo from?',
        choice1: 'Spain',
        choice2: 'Brazil',
        choice3: 'Uruguay',
        choice4: 'Portugal',
        answer: '4'
    },
    {
        question: 'What is the longest river in the world?',
        choice1: 'Amazon River',
        choice2: 'Nile',
        choice3: 'Yellow River',
        choice4: 'Congo River',
        answer: '2'
    },
    {
        question: 'How many sides has a Hexagon?',
        choice1: '5',
        choice2: '6',
        choice3: '7',
        choice4: '8',
        answer: '2'
    },
    {
        question: 'Which country does not share a border with Romania?',
        choice1: 'Ukraine',
        choice2: 'Bulgaria',
        choice3: 'Hungary',
        choice4: 'Poland',
        answer: '4'
    },
    {
        question: 'What is the name of the main character in Pride and Prejudice?',
        choice1: 'Bernadette Smith',
        choice2: 'Poppy Williams',
        choice3: 'Elizabeth Bennet',
        choice4: 'Maggie Johnson',
        answer: '3'
    },
    {
        question: 'In which country was the airline Ryanair founded?',
        choice1: 'Germany',
        choice2: 'Ireland',
        choice3: 'Scotland',
        choice4: 'Spain',
        answer: '2'
    },
    {
        question: 'When were Guy Fawkes and The Gunpowder Plot discovered?',
        choice1: '1505',
        choice2: '1605',
        choice3: '1705',
        choice4: '1805',
        answer: '2'
    },
    {
        question: 'Who wrote Catch-22?',
        choice1: 'Mark Twain',
        choice2: 'Ernest Hemingway',
        choice3: 'Charles Dickens',
        choice4: 'Joseph Heller',
        answer: '4'
    },
    {
        question: 'Who was assassinated on the 22nd of November 1963?',
        choice1: 'Martin Luther King',
        choice2: 'JFK',
        choice3: 'Gandhi',
        choice4: 'Malcolm X',
        answer: '2'
    },
    {
        question: 'When was the first Harry Potter book published?',
        choice1: '1997',
        choice2: '1999',
        choice3: '2001',
        choice4: '2003',
        answer: '1'
    },
    {
        question: 'Which author is known for creating Hercule Poirot?',
        choice1: 'James Patterson',
        choice2: 'Stephen King',
        choice3: 'Arthur Conan Doyle',
        choice4: 'Agatha Christie',
        answer: '4'
    },
    {
        question: 'If you are eating chicken jalfrezi, what type of food are you eating?',
        choice1: 'French food',
        choice2: 'Italian food',
        choice3: 'Indian Food',
        choice4: 'Mexican Food',
        answer: '3'
    },
    {
        question: 'Which battle did William the Conqueror win in 1066?',
        choice1: 'Battle of Hastings',
        choice2: 'Battle of Waterloo',
        choice3: 'Battle of Borodino',
        choice4: 'Battle of the Somme',
        answer: '1'
    },
    {
        question: 'Who is the CEO of Amazon?',
        choice1: 'Elon Musk',
        choice2: 'Tim Cook',
        choice3: 'Mark Zuckerberg',
        choice4: 'Jeff Bezos',
        answer: '4'
    },
    {
        question: 'Which country was not part of the Axis Powers during WWII?',
        choice1: 'Germany',
        choice2: 'Italy',
        choice3: 'Soviet Union',
        choice4: 'Japan',
        answer: '3'
    },
    {
        question: 'Which band released the song “Wonderwall” in the 90s?',
        choice1: 'Oasis',
        choice2: 'Joy Division',
        choice3: 'The Verge',
        choice4: 'Nirvana',
        answer: '1'
    },
    {
        question: '“When I find myself in times of trouble, Mother Mary comes to me” is the opening line of which song?',
        choice1: 'Smells like teen spirit - Nirvana',
        choice2: 'Get lucky - Daft Punk',
        choice3: "Sweet Child O' Mine - Gun N' Roses",
        choice4: 'Let it be - The Beatles',
        answer: '4'
    },
    {
        question: 'What was Euclid?',
        choice1: 'A philosopher',
        choice2: 'A poet',
        choice3: 'A painter',
        choice4: 'A mathematician',
        answer: '4'
    },
    {
        question: 'Which ballroom dance originated in Germany and Austria?',
        choice1: 'Salsa',
        choice2: 'Waltz',
        choice3: 'Jive',
        choice4: 'Cha Cha',
        answer: '2'
    },
    {
        question: 'What is the capital of Iraq?',
        choice1: 'Baghdad',
        choice2: 'Islamabad',
        choice3: 'Tehran',
        choice4: 'Amman',
        answer: '1'
    },
    {
        question: 'Which country won the first Football World Cup in 1930?',
        choice1: 'Brazil',
        choice2: 'Portugal',
        choice3: 'Italy',
        choice4: 'Uruguay',
        answer: '4'
    },
    {
        question: 'In which country is the baht the currency?',
        choice1: 'Vietnam',
        choice2: 'Malaysia',
        choice3: 'Indonesia',
        choice4: 'Thailand',
        answer: '4'
    },
    {
        question: 'In which city were the 2000 Summer Olympics held?',
        choice1: 'London',
        choice2: 'Paris',
        choice3: 'Barcelona',
        choice4: 'Sydney',
        answer: '4'
    },
    {
        question: "What colour is the “m” from the McDonald's logo?",
        choice1: 'Blue',
        choice2: 'Red',
        choice3: 'Yellow',
        choice4: 'Black',
        answer: '3'
    },
    {
        question: 'In which city was Martin Luther King Jr. assassinated?',
        choice1: 'New York',
        choice2: 'Austin',
        choice3: 'Miami',
        choice4: 'Memphis',
        answer: '4'
    },
    {
        question: 'What is the name of the dog in Tintin?',
        choice1: 'Snowy',
        choice2: 'Flakes',
        choice3: 'Dottie',
        choice4: 'Luna',
        answer: '1'
    },
    {
        question: 'Who released the song “Girls Just Want To Have Fun” in the 80s?',
        choice1: 'Blondie',
        choice2: 'Cyndi Lauper',
        choice3: 'A-ha',
        choice4: 'Bonnie Tyler',
        answer: '2'
    },
    {
        question: 'What is guacamole made of?',
        choice1: 'Banana',
        choice2: 'Yoghurt',
        choice3: 'Avocado',
        choice4: 'Chick Pea',
        answer: '3'
    },
    {
        question: '“Onze” is the french number for?',
        choice1: '3',
        choice2: '8',
        choice3: '9',
        choice4: '11',
        answer: '4'
    },
    {
        question: 'Which month is the aquamarine the birthstone of?',
        choice1: 'January',
        choice2: 'March',
        choice3: 'June',
        choice4: 'September',
        answer: '2'
    },
    {
        question: 'Which natural landmark is not in Australia?',
        choice1: 'Moeraki Boulders',
        choice2: 'The Great Barrier Reef',
        choice3: 'Uluru',
        choice4: '12 Apostles',
        answer: '1'
    },
    {
        question: 'Which one of the following islands is not in Scotland?        ',
        choice1: 'Isle of Skye',
        choice2: 'Islay',
        choice3: 'Isle of Mull',
        choice4: 'Caladesi Island',
        answer: '4'
    },
    {
        question: 'Who was the 40th President of the United States?',
        choice1: 'Franklin D. Roosevelt',
        choice2: 'Ronald Reagan',
        choice3: 'Bill Clinton',
        choice4: 'George W. Bush',
        answer: '2'
    },
    {
        question: 'How many players are in a cricket team?',
        choice1: '8',
        choice2: '9',
        choice3: '10',
        choice4: '11',
        answer: '4'
    },
    {
        question: 'Which actress played Sally Draper in Mad Men?',
        choice1: 'January Jones',
        choice2: 'Christina Hendricks',
        choice3: 'Kiernan Shipka',
        choice4: 'Elisabeth Moss',
        answer: '3'
    },
    {
        question: 'What does NASA stand for?',
        choice1: 'National Aeronautics and Space Administration',
        choice2: 'Nautical And Space Association',
        choice3: 'National Aeronautics and Space Association',
        choice4: 'New Aeronautics and Spacial Administration',
        answer: '1'
    },
    {
        question: 'What is “the Marbella” in Jane the Virgin?',
        choice1: 'A dance',
        choice2: 'A telenovela',
        choice3: 'A hotel',
        choice4: 'A police operation code name',
        answer: '3'
    },
    {
        question: 'Who was the first woman to win a Nobel Prize?',
        choice1: 'Mother Teresa',
        choice2: 'Marie Curie',
        choice3: 'Jane Adams',
        choice4: 'Alva Myrdal',
        answer: '2'
    },
    {
        question: 'Which Friends characters famous pickup line is "How you doin"?',
        choice1: 'Joey',
        choice2: 'Ross',
        choice3: 'Chandler',
        choice4: 'Mike',
        answer: '1'
    },
    {
        question: 'On which streaming service did The Morning show premiere in 2019?',
        choice1: 'Netflix',
        choice2: 'Amazon Prime',
        choice3: 'Apple TV+',
        choice4: 'Disney +',
        answer: '3'
    },
    {
        question: 'What is the name of the gem in the movie Titanic?',
        choice1: 'Call of the Ocean',
        choice2: 'Heart of Love',
        choice3: 'Heart of the Ocean',
        choice4: 'Call of Love',
        answer: '3'
    },
    {
        question: 'What is the national animal of England?',
        choice1: 'Puffin',
        choice2: 'Lion',
        choice3: 'Rabbit',
        choice4: 'Fox',
        answer: '2'
    },
    {
        question: 'Which constellation is on the Australian flag?',
        choice1: 'The southern cross',
        choice2: 'Orion',
        choice3: 'Ursa Minor',
        choice4: 'Scorpius',
        answer: '1'
    },
    {
        question: 'What is the capital of New Zealand?',
        choice1: 'Christchurch',
        choice2: 'Wellington',
        choice3: 'Auckland',
        choice4: 'Dunedin',
        answer: '2'
    },
    {
        question: 'Which one of the following companies has a mermaid in its logo?',
        choice1: 'Twitter',
        choice2: 'HSBC',
        choice3: 'Target',
        choice4: 'Starbucks',
        answer: '4'
    },
    {
        question: 'Apart from water, what is the most popular drink in the world?',
        choice1: 'Tea',
        choice2: 'Coffee',
        choice3: 'Beer',
        choice4: 'Orange Juice',
        answer: '1'
    },
    {
        question: "In The Lion King, who is Simba's uncle?",
        choice1: 'Mufasa',
        choice2: 'Scar',
        choice3: 'Timon',
        choice4: 'Zazu',
        answer: '2'
    },
    {
        question: "What is Marshall's job in How I met your mother?",
        choice1: 'Architect',
        choice2: 'Lawyer',
        choice3: 'Teacher',
        choice4: 'Journalist',
        answer: '2'
    },
    {
        question: 'How many bones are there in an adult human body?',
        choice1: '186',
        choice2: '206',
        choice3: '286',
        choice4: '306',
        answer: '2'
    },
    {
        question: 'What is the currency in Poland?',
        choice1: 'Polish Pounds',
        choice2: 'Polish Krone',
        choice3: 'Polish Dollars',
        choice4: 'Polish Zloty',
        answer: '4'
    },
    {
        question: "What was Daniel Craig's first James Bond movie?",
        choice1: 'No time to Die',
        choice2: 'Casino Royale',
        choice3: 'Skyfall',
        choice4: 'Quantum of Solace',
        answer: '2'
    },
    {
        question: "Which fruit is at the top of the Wimbledon gentlemen's singles trophy?",
        choice1: 'Strawberry',
        choice2: 'Pineapple',
        choice3: 'Mango',
        choice4: 'Apple',
        answer: '2'
    },
    {
        question: "During which historical period is the movie Schindler's List set?",
        choice1: 'Vietnam War',
        choice2: 'WWI',
        choice3: 'WWII',
        choice4: 'War of Roses',
        answer: '3'
    },
    {
        question: 'Who famously said “Veni, vidi, vici”?',
        choice1: 'Winston Churchill',
        choice2: 'Charles de Gaulle',
        choice3: 'Julius Caesar',
        choice4: 'Alexander the Great',
        answer: '3'
    },
    {
        question: 'Who discovered the tomb of Tutankhamun?',
        choice1: 'Howard Carter',
        choice2: 'Arthur Evans',
        choice3: 'Mortimer Wheeler',
        choice4: 'Kathleen Kenyon',
        answer: '1'
    },
    {
        question: 'Which city was covered in ashes during the eruption of Mount Vesuvius in 79 AD?',
        choice1: 'Rome',
        choice2: 'Catania',
        choice3: 'Pompeii',
        choice4: 'Naples',
        answer: '3'
    },
    {
        question: 'What was the first national park in the US?',
        choice1: 'Yellowstone National Park',
        choice2: 'Great Smoky Mountains National Park',
        choice3: 'Zion National Park',
        choice4: 'Rocky Mountain National Park',
        answer: '1'
    },
    {
        question: 'Which historical battle is featured in the TV series “Outlander”?',
        choice1: 'Battle of Trafalgar',
        choice2: 'Battle of Culloden',
        choice3: 'Battle of Inkerman',
        choice4: 'Battle of the Alma',
        answer: '2'
    },
    {
        question: 'Mallorca is part of which archipelago?',
        choice1: 'Balearic Islands',
        choice2: 'Canary Islands',
        choice3: 'Whitsunday Islands',
        choice4: 'Galapagos Islands',
        answer: '1'
    },
    {
        question: "The Union Jack is the name of which country's flag?",
        choice1: 'USA',
        choice2: 'UK',
        choice3: 'Australia',
        choice4: 'New Zealand',
        answer: '2'
    },
    {
        question: 'Which Nobel Prize did Winston Churchill win?',
        choice1: 'Literature',
        choice2: 'Peace',
        choice3: 'Chemistry',
        choice4: 'Physics',
        answer: '1'
    },
    {
        question: 'In Home Alone, where were the McCallister flying to when they left Kevin?',
        choice1: 'England',
        choice2: 'Florida',
        choice3: 'France',
        choice4: 'Mexico',
        answer: '3'
    },
    {
        question: "In Mamma Mia, which one of the following actors didn't play one of Sophie's dad?",
        choice1: 'Pierce Brosman',
        choice2: 'Colin Firth',
        choice3: 'Hugh Grant',
        choice4: 'Stellan Skarsgård',
        answer: '3'
    },
    {
        question: 'What type of pastry is used to make a Mille-feuille?',
        choice1: 'Puff pastry',
        choice2: 'Flaky Pastry',
        choice3: 'Choux Pastry',
        choice4: 'Shortcrust Pastry',
        answer: '1'
    },
    {
        question: 'In which Disney movie can you see a character named Mr. Banks?',
        choice1: 'The Aristocats',
        choice2: 'Mary Poppins',
        choice3: 'Pinocchio',
        choice4: 'The Beauty and the Tramp',
        answer: '2'
    },
    {
        question: 'Which actress played Emily Cooper in “Emily in Paris”?',
        choice1: 'Lily Collins',
        choice2: 'Lily James',
        choice3: 'Gal Gadot',
        choice4: 'Anna Kendrick',
        answer: '1'
    },
    {
        question: 'Which one of the following is the correct spelling?',
        choice1: 'Mantenance',
        choice2: 'Maintenance',
        choice3: 'Miantenance',
        choice4: 'Maintenence',
        answer: '2'
    },
    {
        question: 'Which one of the following is not a character in the cartoon “The Powerpuff Girls”?',
        choice1: 'Blossom',
        choice2: 'Butterfly',
        choice3: 'Bubbles',
        choice4: 'Buttercup',
        answer: '2'
    },
    {
        question: "Who lives at the following address '10 Downing Street'?",
        choice1: 'US President',
        choice2: 'French President',
        choice3: 'UK Prime Minister',
        choice4: 'Scotland First Minister',
        answer: '3'
    },
    {
        question: "Which one of the following artists wasn't part of the Rolling Stones?",
        choice1: 'Mick Jagger',
        choice2: 'Keith Richards',
        choice3: 'Charlie Watts',
        choice4: 'Jimmy Page',
        answer: '4'
    },
    {
        question: "What's Garfield favourite food?",
        choice1: 'Pizza',
        choice2: 'Lasagna',
        choice3: 'Burger',
        choice4: 'Sandwich ',
        answer: '2'
    },
    {
        question: 'How many years did Nelson Mandela spend in prison?',
        choice1: '7',
        choice2: '17',
        choice3: '27',
        choice4: '37',
        answer: '3'
    },
    {
        question: 'What is the highest mountain in Japan?',
        choice1: 'Mount Tate',
        choice2: 'Mount Kita',
        choice3: 'Mount Fuji',
        choice4: 'Mount Yari',
        answer: '3'
    },
    {
        question: 'How high is Mount Everest?',
        choice1: '5849 m',
        choice2: '6849 m',
        choice3: '7849 m',
        choice4: '8849 m',
        answer: '4'
    },
    {
        question: 'Which chemical element has Ag as a symbol?',
        choice1: 'Gold',
        choice2: 'Silver',
        choice3: 'Iron',
        choice4: 'Carbon',
        answer: '2'
    },
    {
        question: 'How many elements are there on the periodic table?',
        choice1: '58',
        choice2: '78',
        choice3: '98',
        choice4: '118',
        answer: '4'
    },
    {
        question: "When is St. Patrick's Day?",
        choice1: '7 March',
        choice2: '17 March',
        choice3: '27 March',
        choice4: '7 April',
        answer: '2'
    },
    {
        question: "Who painted 'Girl with a Pearl Earring'?",
        choice1: 'Johannes Vermeer',
        choice2: 'Vincent Van Gogh',
        choice3: 'Leonardo da Vinci',
        choice4: 'Sandro Botticelli',
        answer: '1'
    }
]

/*100 questions where 25 random questions are selected can increase and decrease number of questions if needed*/
/*Every correct answer will give the user '100 points'*/
const correct_ans_points = 100;
const total_questions = 25;

startQuiz = () => {
    questionNumb = 0;
    score = 0;
    questionsLeft = [...questions];
    getNextQuestion();
}

/*Contiunes to next question till total number of questions reached*/
/*Once last question is answered, score is stored and user is redirected to score-end page*/
getNextQuestion = () => {
    if(questionsLeft.length === 0 || questionNumb === total_questions) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/score-end.html');
    }

    questionNumb++;
    progressPara.innerText = `Question ${questionNumb} of ${total_questions}`;
    /*Green progress fills up with every question answered*/
    progressDisplayFull.style.width = `${(questionNumb/total_questions) * 100}%`;

    const questionIndicator = Math.floor(Math.random() * questionsLeft.length);
    currentQuestion = questionsLeft[questionIndicator];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    questionsLeft.splice(questionIndicator, 1);

    answersAccept = true;
}
/*What happens when an answer is chosen*/
choices.forEach(choice => {
    choice.addEventListener('click', a => {
    if(!answersAccept) return;

    answersAccept = false;
    const answerSelected = a.target;
    const answerChosen = answerSelected.dataset['number'];

    let applyClass = answerChosen == currentQuestion.answer ? 'correct' : 'incorrect';

    if(applyClass === 'correct') {
        incrementScore(correct_ans_points);
    }

    answerSelected.parentElement.classList.add(applyClass);

    setTimeout(() => {
        answerSelected.parentElement.classList.remove(applyClass);
        getNextQuestion();
    }, 1000);

    })
})

incrementScore = num => {
    score += num;
    scoreTxt.innerText = score;
}

startQuiz();
