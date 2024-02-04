let passportMarried={
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
}
let passportMarried2=JSON.parse(JSON.stringify(passportMarried));
const {address, ...rest}= passportMarried2;
const {surname, ...restWitoutSurname}= rest;
passportMarried2 = {surname, ...restWitoutSurname, married: true, address};
console.log(passportMarried);
console.log(passportMarried2);