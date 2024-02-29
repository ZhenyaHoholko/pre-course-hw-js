const calls = spy.getCalls();
if (calls.length > 20) {
    const task2ConsoleCall = calls[20].lastArg;
    if (task2ConsoleCall) {
        cy.expect(task2ConsoleCall).to.equal(withOrangeAnswer);
    } else {
        console.error('task2ConsoleCall is undefined');
    }
} else {
    console.error('Index 20 is out of bounds for calls array');
}

const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

if (words.includes('апельсин')) {
    console.log('Ура! нашел');
} else {
    console.log('Придется поискать в другом магазине…');
}