/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*1- Number = sono dati numerici, che possono essere interi o decimali
  2- String = è una sequenza di caratteri, ad esempio una parola, un nome, una frase...
  3- Boolean = è un tipo di dato che può essere o vero o falso
  4- Undefined = è tipo di dato che mi indica che non ho ancora assegnato un valore alla variabile già dichiarata,  cioè che il contenitore che ho creato in precedenza non ha ancora un contenuto definito
  5- Null = indica che la variabile è vuota*/
  

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*Un'oggetto è un'insieme di chiave-valore che descrivono lo stesso oggetto, prendendo come esempio facebook, qualsiasi persona che si iscriverà avrà dati differenti (nome, cognome, eta..), tutti questi dati in javascript vengono inglobati in un'unico contenitorto, ovvero in un'oggetto. Ciò permette di manipolare i dati più velocemente.

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

  let num1 = 12
  let num2 = 20
  let somma = num1 + num2 
  console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Arianna"  //Ho chiamato la variabile nome perchè name è deprecata 
console.log(nome)        

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4 
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

  let name1
  let name2 
  name1 = "john"
  name2 = "John"
  console.log(name1 !== name2) 
  console.log(name1 === name2) 

  name1 = name1.toLowerCase()
  name2 = name2.toLowerCase()
  console.log(name1 === name2)
