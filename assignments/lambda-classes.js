// CODE here for your Lambda Classes
class Person {
  constructor(objAttrs) {
    this.name = objAttrs.name;
    this.age = objAttrs.age;
    this.location = objAttrs.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
};

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(Student, subject) {
    return `${Student.name} receives a perfect score on ${subject}`
  }
};

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
};

class ProjectManager extends Instructor {
  constructor(PMAttrs) {
    super(PMAttrs);
    this.gradClassName = PMAttrs.gradClassName;
    this.favInstructor = PMAttrs.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
  debugsCode(Student, subject) {
    return `${this.name} debugs ${Student.name}'s code on ${subject}`
  }
};

const freda = new Person({
  name: 'Freda',
  location: 'Bedrock',
  age: 37
});

const adrick = new Person({
  name: 'Adrick',
  location: 'Omaha',
  age: 27
});

const jeffb = new Person({
  name: 'Jeffb',
  location: 'Chicago',
  age: 32
});


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const adric = new Instructor({
  name: 'Adric',
  location: 'Omaha',
  age: 27,
  favLanguage: 'COBOL',
  specialty: 'Front-end',
  catchPhrase: `Bloop Bloop`
});

const jeffa = new Instructor({
  name: 'Jeffa',
  location: 'Chicago',
  age: 32,
  favLanguage: 'ASM',
  specialty: 'Back-end',
  catchPhrase: `My name is Jeffa`
});


const fredb = new Student({
  name: 'Fredb',
  location: 'Bedrock',
  age: 37,
  previousBackground: 'Cave Drawing',
  className: 'CS123',
  favSubjects: [
    'Creative Writing',
    'Economics',
    'Dinosaur Handling',
  ]
});

const adricc = new Student({
  name: 'Adricc',
  location: 'Omaha',
  age: 27,
  previousBackground: 'Mainframe',
  className: 'WEBPT9',
  favSubjects: [
    'Math',
    'Science',
    'History',
  ]
});

const jeffc = new Student({
  name: 'Jeffc',
  location: 'Chicago',
  age: 32,
  previousBackground: 'Linguistics',
  className: 'CS321',
  favSubjects: [
    'PE',
    'Science',
    'Lunch',
  ]
});


const fredc = new ProjectManager({
  name: 'Fredc',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'CS1',
  favInstructor: `Barney`
});

const adrich = new ProjectManager({
  name: 'Adrich',
  location: 'Omaha',
  age: 27,
  favLanguage: 'COBOL',
  specialty: 'Mainframe',
  catchPhrase: `Bloop Bloop`,
  gradClassName: 'WEBPT9',
  favInstructor: `Pace`
});

const jeffd = new ProjectManager({
  name: 'Jeffd',
  location: 'Chicago',
  age: 32,
  favLanguage: 'ASM',
  specialty: 'Back-end',
  catchPhrase: `My name is Jeffd`,
  gradClassName: 'CS3',
  favInstructor: `Experience`
});

console.log(adrick.name)
console.log(freda.location)
console.log(jeffb.age)

console.log(adric.favLanguage)
console.log(fred.specialty)
console.log(jeffa.catchPhrase)
console.log(adric.demo('COBOL'))
console.log(fred.grade(fredb, 'Dinosaur Handling'))

console.log(adricc.className)
console.log(fredb.favSubjects)
console.log(jeffc.className)
console.log(adricc.listsSubjects())
console.log(fredb.PRAssignment('Javascript 3'))
console.log(jeffc.sprintChallenge('Javascript 4'))

console.log(adrich.favInstructor);
console.log(fredc.gradClassName);
console.log(jeffd.standUp('jeffd-team'));
console.log(adrich.debugsCode(adricc, 'Javascript'));
