// when we already define one particular datatype, gain we cant assign the another datatype to its right, because strict:true

// let branch:string='Mech'
// branch=4 || undefined

// if the function doesnt returning anything, it should be VOID or never
//void, Never

function abc(msg: string): void | never {
  console.log("hi---", msg);
}

abc("huiiiii");

//DONT use ANY at anytime, try to predict which datatype will need to set
