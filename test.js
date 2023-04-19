import express from "express";

const app =express();

const students = [
    
"Mostafa",
"Hosny",
"Salem",
"El-Bages",
        
    
];
const studnetsFunction = (request , response) => {

    let output = "<ul>";

    for(let i = 0 ; i < students.length ; i++){
        const student = students[i];

        output += "<li>" + students[i]+ "</li>";
    }

output += "</ul>" ;

response.send(output);
};

app.get('/students' , studnetsFunction)


app.listen(5000); 