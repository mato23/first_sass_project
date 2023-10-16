// functions

function sucet(cislo1,cislo2){
    sum = Number(cislo1) + Number(cislo2)
    console.log(sum)
    return sum
};

//main code///////////////////////
var zoznam =$(".uprava a");

zoznam.on("click", function(){
    
    zoznam.css({
        color: "#bd1102",
        textShadow: "4px 2px 2px white",
        borderBottom: "2px solid #bd1102"
    })
})

//jedna

$(".count").on("click", function(){
    
    let num = prompt("zadaj cislo !")
    let num2 = prompt("zadaj druhe cislo !")
    
    vysledok = sucet(num,num2);
    $("h1").hide().fadeIn(1000);
    
    
    
    let check = vysledok % 2;
    
    if( check === 0 ){
        alert("výsledok je " + vysledok + " číslo je párne !")
    }
    else{
        alert("výsledok je " + vysledok + " číslo je nepárne !")
    }
    
});

//dva

function lastItem(){

}


odJednaDoPat =[] 
$(".uprava ul")
    


console.log(inArray)




