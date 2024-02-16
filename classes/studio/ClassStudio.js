//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
        return this.scores;
      }
      average(){
        let totalScore =  0;
        for (let i = 0; i < this.scores.length; i ++){
        totalScore += this.scores[i];
        }
        
        let average = Math.round((totalScore / this.scores.length) * 10) / 10;
        return average;
    }
    status(){
        let average = this.average();
        
        if (average > 90){
            return 'accepted';
        }
        else if (average >= 80 && average > 90){
            return 'Reserve'
        } else if (average >= 70 && average < 80) {
            return "Probationary";
          } else {
            return "Rejected";
          }
        }
      }

  let candidateA = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
  let candidateB =  new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
  let candidateC =  new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
  let candidates = [candidateA, candidateB, candidateC];
  candidateA.addScore(83);

  for (let candidate of candidates){
    const average = this.candidates.average
    const status = this.candidates.status
  console.log(`${candidate.name} earned an average test score of ${average} and has a status of ${status}`)
  }

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.