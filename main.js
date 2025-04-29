/*🏆 Snack 1
Crea una funzione che somma due numeri:
-Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
-Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
-Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

const sommanumeri2 = (a, b) => a + b;

/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero:
-Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (a) => a * a;

/*🏆 Snack 3
Crea una funzione eseguiOperazione:
-Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/

const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

/*🏆 Snack 4
Crea un generatore di funzioni creaTimer:
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

const creaTimer = function () {
  setTimeout(() => {
    console.log("Tempo scaduto!");
  }, 1000);
};

/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

const stampaOgniSecondo = function (a) {
  return () => {
    setInterval(() => {
      console.log(a);
    }, 1000);
  };
};

const messaggio = stampaOgniSecondo("è passato un secondo");

/*🏆 Snack 6
Crea un contatore automatico con setInterval:
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(timer) {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(count);
    }, timer);
  };
}

const timer4sec = creaContatoreAutomatico(4000);

/*🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function eseguiEferma(start, msg, stop) {
  const intervalId = setInterval(() => {
    console.log(msg);
  }, start);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("stop");
  }, stop);
}

//eseguiEferma(1000, "è passatp 1 secondo", 5000);

/*🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.*/

function contoAllaRovescia(n) {
  let count1 = n;
  const intervalId = setInterval(() => {
    count1--;
    console.log(count1);
    if (count1 == 0) {
      clearInterval(intervalId);
      console.log("tempo scaduto!");
    }
  }, 1000);
}

//contoAllaRovescia(10);

/*🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.*/

const arreyOperazioni = [() => 3 + 3, () => 6 / 2, () => 5 * 2];

function sequenzaOperazioni(arreyOperazioni, time) {
  for (let i = 0; i < arreyOperazioni.length; i++) {
    let ritardo = i * time;
    setTimeout(() => {
      const risultato = arreyOperazioni[i]();
      console.log(`Operazione ${i + 1}:`, risultato);
    }, ritardo);
  }
}

sequenzaOperazioni(arreyOperazioni, 1000);
