interface Person {
  name: string
  age?: number
}

interface Developer extends Person {
  skills: string[]
}

const person: Person ={
  name: '김사랑',
  age: 17
}

const expert: Developer = {
  skills: [],
  name: ""
}