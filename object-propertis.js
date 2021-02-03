const students =[
    {id: 21, name:'asif'},
    {id: 31, name:'arif'},
    {id: 41, name:'asraf'},
    {id: 35, name:'asrhaf'}
]
const names =students.map(s => s.name);
const ids =students.map(s => s.id);
const bigger =students.filter(s => s.id < 40);
const bigger11 =students.find(s => s.id < 40);
console.log(bigger11);