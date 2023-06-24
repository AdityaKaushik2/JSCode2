//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Aditya"
    if (username === "Aditya") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
//cannot access function stored in a variable before declaring
const addTwo = function(num){
    return num + 2
}


if(true){
    const username = "Myname";

    if(username === "Myname"){
        const Website = "Aditya.com";
        console.log(username + Website );

    }
    // console.log(Website);
}

// console.log(username);