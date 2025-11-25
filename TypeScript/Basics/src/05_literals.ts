// Literal >> Const and let and var

// LET can update any time right same as for var
// but CONST cant change, it should be SAME

type Room = "F50" | "Beta-3" | "S05";

function roomNO(ro: Room): void {
  console.log("Room Numbrt----", ro);
}

const r1 = "F50";
roomNO(r1); // here there will be no error beacuse const r1 is fixed right

let r2 = "S05";
//roomNO(r2); // here getting error, in the roomNO function , paramter shou;d be "F50" | "Beta-3" | "S05", yeah here we are passing also S05, agian error why means
// what is let, let any update anytime right, TypeScript restructing that too for future purpose...
//to avoid this type

// directly we will assign the Room type to the varaiable

let r3: Room = "S05";
