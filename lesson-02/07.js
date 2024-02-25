let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = JSON.parse(JSON.stringify(passportMarried));

const { address, ...rest } = passportMarried2;
const { surname, ...restWithoutSurname } = rest;

passportMarried2.married=true;
// passportMarried2 = { 
//     address,
//     married: true,
//     ...restWithoutSurname,
//     surname
// };

console.log(passportMarried);
console.log(passportMarried2);