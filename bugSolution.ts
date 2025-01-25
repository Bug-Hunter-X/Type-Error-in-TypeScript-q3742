function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
let userName = user.join(" ");
console.log(greeter(userName));