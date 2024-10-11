<!-- prettier-ignore-start -->

### NOTES

## useState

    Die State-Methode in React wird verwendet, um Informationen in einem Komponenten (einem wiederverwendbaren Teil der Benutzeroberfläche) zu speichern und Änderungen an diesen Informationen anzuzeigen, wenn der Benutzer mit der Anwendung interagiert.

    Wir rufen die useState-Funktion auf und übergeben den initialen State-Wert als Argument. Dies ist der Wert, der in unserer App verwendet wird, bis sich etwas ändert.

    Das Aufrufen der useState-Funktion liefert uns zwei Dinge zurück:

    - Eine Variable mit dem aktuellen State-Wert
    - Die set-Funktion, um einen neuen State zu setzen

    function SocialMediaPost() {
        const [liked, setLiked] = useState(false); ...
    }

    - liked ist die Variable, die den aktuellen Zustand (State) speichert
    - setLiked ist die Funktion, mit der man den Zustand von liked ändern kann

    - Man kann alle Arten von Daten im State speichern (Booleans, Zahlen, Zeichenfolgen, Objekte oder Arrays)

    - In React ist es wichtig, den State über die set-Funktion zu ändern, anstatt einfach eine normale Variable zu aktualisieren also immer die entsprechende Set-Funktion verwenden, um den State zu ändern, damit React weiß, dass es neu rendern muss und die UI entsprechend aktualisiert wird

## Argument

    - Funktion und Argumente: Wenn man eine Funktion definiert, kann man Parameter festlegen, die als Platzhalter für die Werte dienen, die man übergeben möchte. Diese Werte nennt man dann Argumente.

    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet('Alice'); // 'Alice' ist das Argument

## uid

    - "Unique Identifier" wird verwendet, um ein einzigartiges Element innerhalb einer Sammlung oder eines Systems zu kennzeichnen

    - Der uid hilft, Kollisionen zu vermeiden, sodass zwei verschiedene Objekte nicht den gleichen Identifikator haben

## key

    - Ein key ist ein spezielles Attribut, das in React verwendet wird, um Komponenten in Listen eindeutig zu identifizieren

    - keys helfen React, effizienter zu rendern, indem sie es ermöglichen, zu verfolgen, welche Elemente aktualisiert oder entfernt werden müssen

## uid vs key

    Obwohl sowohl keys als auch UIDs dazu dienen, Eindeutigkeit zu gewährleisten, sind sie in ihrem Kontext unterschiedlich. UIDssind allgemeiner und werden in verschiedenen Systemen verwendet, währendkeys` spezifisch für React sind und sich auf die Effizienz des Renderns von Listen konzentrieren.

    - Verwendung UIDs: z. B. in Datenbanken, APIs oder beim Erstellen von Objekten in einer Anwendung

    - Verwendung keys: werden hauptsächlich in React verwendet, wenn man Listen von Komponenten rendert. 

## map-Methode

    - Die map-Methode ist eine integrierte Funktion in JavaScript, die es ermöglicht, eine Transformation auf jedes Element eines Arrays anzuwenden

        const pets = ["bird", "cat", "dog", "ferret", "fish"];
        const uppercasePets = pets.map((pet) => {
            return pet.toUpperCase();
        });
        console.log(uppercasePets); // ['BIRD', 'CAT', 'DOG', 'FERRET', 'FISH']

    - Transformation: Mit map kannst du eine Funktion definieren, die auf jedes Element im Array angewendet wird. Das Ergebnis dieser Funktion wird in einem neuen Array gespeichert.

    - Ursprüngliches Array bleibt unverändert: Die map-Methode verändert das ursprüngliche Array nicht, sondern erstellt ein neues Array mit den transformierten Werten.

    - Gleiche Länge: Das neue Array hat immer die gleiche Länge wie das ursprüngliche Array.


## Iteration

    Iteration bezieht sich auf den Prozess, ein Element oder eine Gruppe von Elementen (wie ein Array oder eine Liste) nacheinander zu durchlaufen und eine bestimmte Operation auf jedem Element anzuwenden

    In JavaScript gibt es verschiedene Methoden zur Iteration, wie for, forEach, map, filter und reduce.

## Spread-Operator (...)

    -  Der Spread-Operator (...) ist ein leistungsfähiges Werkzeug, um Arrays und Objekte zu „entpacken“ oder „auszubreiten“. Er kann verwendet werden, um neue Arrays und Objekte zu erstellen, Elemente hinzuzufügen, flache Kopien zu erstellen und den Zustand in React zu aktualisieren.

## filter-Methode

    - Die filter-Methode in JavaScript ist eine Array-Methode, die ein neues Array erstellt, das alle Elemente enthält, die die Bedingung erfüllen, die in einer bereitgestellten Callback-Funktion definiert ist.

    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter((number) => number % 2 === 0);

    console.log(evenNumbers); // [2, 4, 6]

## onSubmit **

    - onSubmit ist ein Ereignis, das ausgelöst wird, wenn ein Formular abgeschickt (submitted) wird. In React wird es als prop an ein <form>-Element übergeben, um zu definieren, was passieren soll, wenn das Formular abgeschickt wird.

    - onSubmit={handleSubmit}: Wenn der Benutzer das Formular absendet (z. B. durch Klicken auf den "Absenden"-Button), wird die handleSubmit-Funktion aufgerufen.

## handleSubmit(event) **

    - handleSubmit ist die Funktion, die aufgerufen wird, wenn ein Formular abgesendet wird.

    -Der Parameter event enthält Informationen über das Ereignis und ermöglicht es, das Standardverhalten zu verhindern und die Benutzereingaben zu verarbeiten.

## ternärer Operator

    - Der ternäre Operator ist eine spezielle, verkürzte Form einer if...else-Anweisung in JavaScript

    condition ? valueIfTrue : valueIfFalse;

## event.preventDefault()

    - Dies verhindert, dass der Browser die Seite neu lädt, wie es bei einem normalen Formular-Submit passiert

## event.target **

## localStorage

    - Speichert Daten im Browser, die auch nach dem Schließen der Seite bestehen bleiben. Es ist Teil des Web Storage API.

    - use-local-storage-state Hook: Der Hook aus der Library funktioniert fast wie useState, mit dem Unterschied, dass die Daten nicht nur in der Komponente, sondern auch im localStorage gespeichert werden. Das nimmt viel Arbeit ab.




<!-- prettier-ignore-end -->
