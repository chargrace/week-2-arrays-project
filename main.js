console.log("Hello world");

const songs = [{name: "Blame Brett", artist: "The Beaches"}, 
                {name: "Pon de Replay", artist: "Rihannah"}, 
                {name: "Hung Up", artist: "Madonna"}, 
                {name: "The Hills", artist: "Rachel Chinouriri"}, 
                {name: "HOT TO GO!", artist: "Chappell Roan"}]

console.log(songs.length);

console.log(Array.isArray(songs));
console.log(songs[1]);
console.log(songs[0]);

songs[4]= {name: "baby shark", artist: "idk"};
console.log(songs[4]);

let cookiesOrdered = [15, 3, 67, 1, 22, 100];

function multiplyCookiesOrdered (cookiesOrdered) {
    for (let i=0; i < cookiesOrdered.length; i++) {
        let newNum= cookiesOrdered[i]* 10;
        cookiesOrdered[i]= newNum;
    }
    console.log(cookiesOrdered);
}


//ticket 5- automated pub quiz

let quizQuestions= [{num:1, question: "How many sovereign states does Russia border?", answer: "14"}, 
                    {num:2, question: "What is the capital of Malta?", answer: "Valetta"},
                    {num:3, question: "Mount Vesuvius casts a shadow over which modern Italian city?", answer: "Naples"},
                    {num:4, question: "Which country is the newest in the world to be recognised by the UN?", answer: "South Sudan"},
                    {num:5, question: "Which river flows through Glasgow?", answer:"Clyde"}]

function checkUserAnswers (questions) {
let score=0;
for (let i=0; i < questions.length; i++) {
    let Userinput= prompt(`Question ${questions[i].num}: ${questions[i].question}`);
    if (Userinput.toLowerCase()!==questions[i].answer.toLowerCase()) {
        console.log(`Your answer is incorrect, the answer was ${questions[i].answer}`);
        console.log(`Your score is ${score}`);
    } else {
        console.log('Your answer was correct, +1 point')
        score++;
        console.log(`Your score is ${score}`);
    }
}
console.log(`Congratulations, your score is ${score} and you answered ${score} questions correctly`)
};