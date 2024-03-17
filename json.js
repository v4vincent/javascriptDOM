

let friends = '{"name" : "Vincent", "age" : 29}';



console.log(friends);

console.log(JSON.parse(friends));

console.log(JSON.stringify(JSON.parse(friends)));

let date = new Date();
console.log(date)

let dateString = JSON.stringify(date);

console.log(JSON.parse(dateString, function(k,v){
    if (k == "date") return new Date(v)
    return v;


}))


let example1  = '{"name": "Vincent", "age": 29, "married": true}';

console.log(JSON.parse(example1));

console.log(JSON.stringify(JSON.parse(example1),["name","age","married"], " "));



console.log(JSON.stringify({a:1,b:2}, null, "  "))

let objectData;
/* Your solution goes here */
objectData = {"studentName": "Vincent", "userAge": 29, "studentSiblings": ["one","two"]};
console.log(objectData)

let stringData = '{ "name": "Pau Gasol", "height": { "ft": 7, "in": 0 }, "points": 22, "position": "Point guard" }';

/* Your solution goes here */
jsonStructure = JSON.parse(stringData);
jsonStructure.points = 32;
stringData = JSON.stringify(jsonStructure);
console.log(stringData);

let stringStructure = '{ "year": 2013, "month": 2, "day": 3, "hour": 9, "minute": 32 }';

/* Your solution goes here */

jsonStructure = JSON.parse(stringStructure, function (k,v){
    if (k === 'year'){
        v = 2009;
    }
    return v;
} );

console.log(jsonStructure)