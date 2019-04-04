// CODE here for your Lambda Classes
class Person
{
    constructor(att)
    {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    this.gender = att.gender;
    }
    greet() 
    {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

};

class Instructor extends Person
{
    constructor(props)
    {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrases = props.catchPhrases;
    }
    demo(subject)
    {
        return`Today we are learning about ${subject}`
    }
    grade(subject, student)
    {
        return`${student} recives a perfect score on ${subject}`
    }
}

class Student extends Person
{
    constructor (p)
    {
        super(p)
        this.previousBackground = p.previousBackground;
        this.className = p.className;
        this.favSubjects = p.favSubjects;
    }
    listsSubjects ()
    {
        return this.favSubjects;
    }
    PRAssignment(subject) { 
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`
    }
}

class ProjectManager extends Student 
{
    constructor(attributes) 
    {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
        standUp(channel) 
        {
            return `${this.name} announces to ${channel}, @channel standy times!`
        }

        debugsCode(studentName, subject) 
        {
            return `${this.name} debugs ${studentName}'s code on ${subject}.`
        }
    };

    const justin = new Student({
        name: 'Justin',
        location: 'New Bedford',
        age: 26,
        gender: 'male',
        previousBackground: 'Customer Service',
        className: 'WebPT4',
        favSubjects: ['Math', 'JavaScript', 'HTML', 'CSS']
      });
    
      const kyran = new ProjectManager({
        name: 'Kyran',
        location: 'California',
        age: 30,
        gender: 'female',
        gradClassName: 'CS14',
        favInstructor: 'Josh Knell',
    
      });
    
      const cam = new Instructor({
        name: 'Cam',
        location: 'Utah',
        age: 30,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'teaching',
        catchPhrase: `When in doubt, search it out!`
      });
    
    
      console.log(justin.greet());
      console.log(cam.demo('JavaScript'));
      console.log(cam.grade(justin.name,'JavaScript'));
      console.log(justin.listsSubjects());
      console.log(justin.PRAssignment('JavaScript IV'));
      console.log(justin.sprintChallenge('JavaScript Fundamentals'));
      console.log(kyran.standUp('webpt4_kyran'));
      console.log(kyran.debugsCode(justin.name,'JavaScript')); 