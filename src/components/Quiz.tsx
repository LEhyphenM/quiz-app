//Quiz.tsx
import React, { useState } from 'react';
import Question from './Question';
 
const questions = [
    // {
    //   question: '',
    //   choices: ['', '', ''],
    //   answer: '',
    // },
    {
      question: "If a woman does not respond to me 'liking' her profile on a dating app, I should.. ",
      choices: [
                "Not give it a second thought and leave her alone", 
                "Fiendishly search linkedin until I find her profile", 
                "Take it out on other women"
              ],
      answer: "Not give it a second thought and leave her alone",
    },
    {
      question: "If I do come across her linkedin (on purpose or otherwise) I should..",
      choices: [
                "Request to be a connection with her", 
                "Do nothing at all because contacting her would be creepy and disrespectful of her boundaries", 
                "Get my friend to connect with her on linkedin"
              ],
      answer: "Do nothing at all because contacting her would be creepy and disrespectful of her boundaries",
    },
    {
      question: "If by some weird-turn-of-events, I do become a connection with her, I should..",
      choices: [
                "Immediately ask her about her skincare-regiment", 
                "Tell her that I originally saw her on a dating app", 
                "Say nothing, because I would respect her boundaries and clear disinterest in regards to dating me"
              ],
      answer: "Say nothing, because I would respect her boundaries and clear disinterest in regards to dating me",
    },
    {
      question: "If I do talk to her on linkedin and she continues to ignore or show disinterest in me, I should..",
      choices: [
                "Accept that I came off as a complete creeper and keep my fingers crossed in hopes that she did not report me", 
                "Continue to bombard her with various forms of communications until she finally agrees to date me", 
                "Send her flowers so that she is keenly aware that I have her home address"
              ],
      answer: "Accept that I came off as a complete creeper and keep my fingers crossed in hopes that she did not report me",
    },
    {
      question: `When she continues to ignore my communcation-efforts on linkedin (or any other platform) I should..`,
      choices: [  
                "Create another hinge profile, but this time adding two-inches to my height along with a different/shorter version of my name so that she will be able to recognize me but also see that I'm *way cooler* now so she will definitely match with me this time",
  
                "Pat myself on the back for having the gumption and follow-through for going after what I had wanted (realizing that even if I meant well, I went about it the entirely wrong way), then deciding to take a step back for quiet introspection whilst wishing her well but ultimately leaving her alone/in peace",
              
                "Wallow in self-pity, hype myself up, get angry again, self-medicate (because too  many feelings), man-cry, punch a wall, send her a few more messages in which I beg her to give me a chance, then call her various slurs/names when she does not respond/declines, sober-up, get a membership at the closest gym to me and make that my entire personality because I will definitely not be going to therapy for at least another 2-6 years and/or until mandated by the court",
              ],
      answer: "Pat myself on the back for having the gumption and follow-through for going after what I had wanted (realizing that even if I meant well, I went about it the entirely wrong way), then deciding to take a step back for quiet introspection whilst wishing her well but ultimately leaving her alone/in peace",
    },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(1);

  function handleAnswer(answer: string) {
    if (answer === questions[currentQuestion].answer) {
      // alert('Correct!');
      setScore(score + 1);
    } 
    // else {
      // alert('Well.. you tried, but no.');
    // }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score >= 4) {
        alert(`Congrats! You're not a creep! You scored: ${score}/${questions.length}`);
      } else if (score >= 2) {
        alert(`You *might* be a bit of a creep.. You scored: ${score}/${questions.length}`);
      } else if (score >= 0) {
        alert(`Major CREEP vibes. Have you considered trying therapy..? You scored: ${score}/${questions.length}`);
      }
    }
    console.log(`${currentQuestion+1}/${questions.length}`);
    // console.log(`${score}/${questions.length}`);
  }
  // view score in console
  console.log(`${score}/${questions.length}`);

  const addLeadingZero = (number: number) => (number > 9 ? number : `0${number}`)

  return (
    <div>
        <h1 className="text-center">'Are You Being A Total Fucking Creep?' Quiz</h1>
          <span className="current-question-no">{addLeadingZero(currentQuestion + 1)}</span>
          <span className="total-question">/{addLeadingZero(questions.length)}</span>
        
        {currentQuestion < questions.length ? (
            <Question
                question={questions[currentQuestion].question}
                choices={questions[currentQuestion].choices}
                answer={questions[currentQuestion].answer}
                onAnswer={handleAnswer}
            />
        ) : "null"
        }
    </div>
)
}

export default Quiz;