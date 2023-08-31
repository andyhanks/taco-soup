// Harry Potter Titles
/*var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(var i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
  }*/

  /* Student GradesHow many students got A's?
How many students got B's?
Which was the most common letter grade?
What was the average percentage grade in the class? */
 /* var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
let aceCount = 0
let bCount = 0
let cGrades = 0
let dGrades = 0
let fGrades = 0
let mostCommonGrade = ''
let mostCommonGradeCount = 0
let 
  for(var i = 0; i < grades.length; i++) {
if(grades[i] >= 0 && grades[i] <= 69){
    console.log('You got an F')
    fGrades++
}
if(grades[i] >= 70 && grades[i] <= 76){
    console.log('You got a D')
    dGrades++
}
if(grades[i] >= 77 && grades[i] <= 84){
    console.log('You got a C')
    cGrades++
}
if(grades[i] >= 84 && grades[i] <= 92){
    console.log('You got a B')
   // Counting B for Student Grades 2.2 
    bCount++;
}
if(grades[i] >= 93 && grades[i] <= 100){
    console.log('You got an A')
 // this bit is for student grades 2.1  
     aceCount++;
} for(let i = 0; i < grades.length; i++){
    if (mostCommonGradeCount < aceCount){
        mostCommonGradeCount = aceCount
        mostCommonGrade = "A"
    } else if(mostCommonGradeCount < bCount){
        mostCommonGradeCount = bCount
        mostCommonGrade = "B"
    } else if (mostCommonGradeCount < cGrades){
        mostCommonGradeCount = cGrades
        mostCommonGrade = "C"
    } else if (mostCommonGradeCount < dGrades){
        mostCommonGradeCount = dGrades
        mostCommonGrade = "D"
    } else if (mostCommonGradeCount < fGrades){
        mostCommonGradeCount = fGrades
        mostCommonGrade = "F"
    }
}

let letterGrades =[aceCount, bCount, cGrades, dGrades, fGrades]
let highScore = {
    score: 0,
    actualGrade: ""
}
for(let i = 0; i < letterGrades.length; i++){
    if(letterGrades[i].score > highScore.score){
    highScore = letterGrades[i]
}

}

percentageGrades = totalGradePoints / grades.length
console.log(mostCommonGrade, mostCommonGradeCount, "Most common grade")

console.log(`There are ${aceCount} students with an A.`) 

console.log(`There are ${bCount} students with a B.`)


//Come Back to this!!!!! /\ */

// 3. Write a loop that counts by 2's and creates the following output.
/* console.log('2')
let startingNumber = 2
for(let i = 2; i < 5; i++) {
    startingNumber += 2;
    console.log( `${startingNumber} `)
    
}

console.log('Who do we appreciate?') */

 /*Interrupting Cow
Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator. */

/*var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let moo ="MOOOOOO"

for(var i = 0; i < sentenceArray.length; i++){
    console.log(sentenceArray[i]);
    if(i % 4) {
        console.log(moo)
    }
  }*/

  // nearly there

/*Beatles 

${bandName} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.

Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. */

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            bandName: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            bandName: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            bandName: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            bandName: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
for(let i = 0; i < beatles.members.length; i++){
    console.log(`${beatles.members.bandName} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members.birth}. He contributed heavily to the ${beatles.albums} Albums.`)
}

// returns an undefined name. What do?