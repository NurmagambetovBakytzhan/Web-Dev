//From 1 to 4
let i = 0;
while (++i < 5) alert( i );

//From 1 to 5
let i = 0;
while (i++ < 5) alert( i );

// From 0 to 4 in both cases
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

// output even numbers
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

//replace for with "while"
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}