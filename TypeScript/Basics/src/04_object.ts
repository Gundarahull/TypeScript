// Defining the Object with dataTypes

// this all are realeated to exactOprionalProperties in the package,json file....
type User = {
  id: string; // it shpuld be required that too in the string datatype
  name: string;
  email?: string; //it is a optional, if anything define under this it should be in string datatype
  readonly createdAt: Date; // readOnly ; its for read thing only, we cant update it, its should be constant like universial laws
};

const user1: User = {
  id: "1",
  name: "looser",
  email: "email",
  createdAt: new Date(),
};

// Assign rules for the KEYS

type keyRuleOne = { [key: string]: number }; // key is any name of the key, the value assigned to the key should be in the number only...

type keyRuleTwo = Record<"room" | "dorm" | "house", string>; //if any object is defining , the keys should be with this names only.....

const exec: keyRuleOne = { whatver: 0 };

const execTwo: keyRuleTwo = { room: "t65", dorm: "beta 3", house: "F50" };
