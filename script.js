alert ("مرحبا بك في موقعي انا احمد و سوف احسب درجت")
let grade = prompt (`قم بادخال درجتك `) ;
alert (grade);
console.log (grade)

if (grade >=90 && grade <= 100 ) {
    console.log ("your grade is A");
/*

جافاسكربت ليست جافا 
*/

}
else if (grade >=80&& grade <=89) {
    console.log ("your grade is B ") ;
}
else if (grade >=70&& grade <=79) {
    console.log ("your grade is C ") ;
}
else if (grade >=60&& grade <=69) {
    console.log ("your grade is -C ") ;
}
else if (grade >=50&& grade <=59) {
    console.log ("your grade is +F ") ;
}
else {
    console.log ("your grade is F") ;

}