// const names=['john','mike','Digit']
// console.log(names);

// names.forEach((name,index)=>{
//     names[index]=name.toUpperCase();
// })

// console.log(names);

// let books=[
    
//     { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011},
    
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008},
    
//     {title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012},
    
//     {title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011},

//     { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'LeaVerou', year: 2015},
//     { title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014},
//     { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },

//     { title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016},

//     { title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014},
    
//     { title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004}
//     ];

//     let searchterm='HTML'.toLowerCase();
// let year=2011;
//     let filteredbooks=books.filter(book=>{
//         return book.title.toLowerCase().includes(searchterm) || (book.year==year)
//     });

//     console.log(filteredbooks)

//reduce

let people=[
    {name:'Rakesh',age:25,city:'chennai'},
    {name:'Raj',age:30,city:'salem'},
    {name:'sara',age:35,city:'chennai'}];

let grpbycity=people.reduce((acc,current)=>{
    if(current.city in acc){
        acc[current.city].push(current)

    }
    else{
        acc[current.city]=[current];
    }
return acc;
},{})

console.log(grpbycity)
