---
title: 'Teoria testowania'
date: '21-06-2021 '
excerpt: 'Stworzymy własny framework bazując na Jest.'
author: 'Tobiasz Ciesielski'
category: 'Angular'
---

## Po co testy ?

- Dzięki napisanym testom i to **dobrze** napisanym, możemy z powodzeniem dokonać refactoru kodu oraz dodawać nowe funkcjonalności nie martwiąc się, ze coś zepsuliśmy.
- A więc, mając taką pewność nie musimy sprawdzać ponownie kodu co zaoszczędza nam czas.

## Statyczna analiza kodu

- Lintery
- Formatery kodu
- Statyczne typowanie

## Unit test

Testujemy każdy komponent osobno, jego funkcjonalność oraz jego API.

Powinniśmy testować funkcjonalność komponentów.

## Integration testing

Patrzymy na kod z szerszej perspektywy, sprawdzamy kilka komponentów jednocześnie, jak współgrają ze sobą, monitorujemy dane, które wymieniają, zasilamy je źródłem danych, sprawdzamy requesty do serwera.

Mimo, że przetestowaliśmy dwa komponenty i testy przechodzą, często jest tak, że coś się dzieje pomiędzy naszymi komponentami.

Szersze podejście pozwala nam na testowanie większej abstrakcji, logiki biznesowej. Dzięki takiemu podejściu możemy również lepiej mockować nasze funkcje, a może nawet serwer i wtedy testować i zaklejać dziury na rzeczywistych danych.

## End to end tests

Robimy dokładnie to co mógłby zrobić nasz użytkownik, działamy w prawdziwym środowisku - zaprzęgamy do pracy przeglądarkę. Testy te są kompletne ale zarazem niestabilne. Ich wadą jest długi czas wywołania oraz zależność od zewnętrznych serwisów.

## Visual regresion tests

Możemy sprawdzać, czy jakieś piksele się nie przesunęły na frontendzie. Czy nasz komponent wyrenderował się poprawnie oraz jakie są różnice pomiędzy poprzednim renderowaniem a aktualnym.

# Dobre praktyki

## Don't test implementation details !

Naszych testów nie obchodzi jak coś jest napisane. To może być napisane często na wiele sposobów - ważne jest, aby napisany kod funkcjonował poprawnie. Jeżeli tak się nie dzieje to dopiero wtedy sprawdzamy szczegóły implementacyjne.

Nasze testy powinny odzwierciedlać to co użytkownik robi z naszym komponentem i naszą funkcją. Im nasze testy będą bardziej abstrakcyjne tym większą mamy pewność, że nasz software spełnia założenia biznesowe.

## Na co warto zwrócić uwagę testując ?

- Należy sobie wypisać wszystkie funkcjonalności komponentu/elementu a następnie je przetestować.
- Warto też pamiętać, że nie zawsze naszymi odbiorcami są użytkownicy ale również developerzy, którzy też oczekują, że nasz kod działa więc należy przetestować API naszego komponentu, czy zwraca to co ma zwracać, czy nasz komponent poprawnie renderuje się, gdy przekażemy do niego takie bądź takie parametry.
- Często nasze komponenty używają zewnętrznych bibliotek więc warto chociaż sprawdzić czy efekt jej jest oczekiwany oraz czy w ogóle została ona wywołana w konkretnej sytuacji.

## Avoid nesting

Podczas testowania należy unikać zagnieżdżania testów. Nie powinno być tak, że jakaś zmienna zależy od jakiegoś testu, a w tym teście używana jest po teście kolejnym ponieważ to utrudnia bardzo czytanie testów i rozumienie co dana zmienna ma zrobić.

# Statyczna analiza kodu

#### Lintery

ESlint jest narzędziem do statycznej analizy kodu, która pozwala wyeliminować błędy na poziomie pisania kodu, jeszcze przed uruchomieniem. Analizuje kod pod względem podatności na błędy. ESlint należy odpowiednio skonfigurować oraz zainstalować rozszerzenie w naszym IDE. W moim przypadku jest to ESLint w VS Code.

![](https://t4558603.p.clickup-attachments.com/t4558603/ec242c55-6381-4bcf-bfa2-9b9da8837f6b/image.png)

Możemy napotkać już predefiniowne konfiguracje, które wprowadzają zbiór zasad podczas pisania kodu. Jednym z przykładów jest `eslint-config-airbnb` .

Aby zainstalować ESLinta wpisujemy w konsoli polecenia:

```plain
npm install eslint --save-dev
```

oraz

```plain
npx eslint --init
```

Po krótkiej konfiguracji dopasowanej do naszych potrzeb, jesteśmy gotowi, aby ESLint załapał nas za rączkę podczas pisania kodu.

Aby zainstalować konfigurację airbnb używamy poniższej komendy:

`npm i -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y`

I dodajemy rozszerzenia to pliku konfiguracyjnego `.eslintrc.js`

```plain
"extends": ["airbnb", "airbnb/hooks"]
```

#### Prettier

Prettier to formater kodu ale tak właściwie to jakie problemy on rozwiązuje?

Załóżmy, że pracujemy w 3 osoby w projekcie i każdy ma inny styl formatowania kodu. Stwarza to często konflikty w systemach kontroli wersji podczas automatycznego formatowania projektu. Należy na to uważać, dlatego jedna konfiguracja projektu jest bardzo ważna dla wszystkich osób w zespole.

Sformatowany kod jest czytelniejszy, pomaga nam znaleźć szybciej błędy. Nie tracimy czasu na przenoszenie nawiasów, łamanie linii w warunku if'a itd.

Instalujemy prettier za pomocą npm'a komendą:

```plain
npm install --save-dev --save-exact prettier
```

a następnie tworzymy plik konfiguracyjny:

```plain
echo {}> .prettierrc.json
```

Prettier obsługuje większość języków, a jego konfiguracja jest podobna do ESLinta, jednak należy zadbać aby te dwa narzędzia nie wchodziły sobie w paradę. Dlatego instalujemy:

```plain
npm install --save-dev eslint-config-prettier
```

a następnie w konfiguracji `.eslintrc.js` dopisujemy:

```plain
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

Teraz należy zadbać o zainstalowanie dodatku do IDE.
![](https://t4558603.p.clickup-attachments.com/t4558603/12f72445-59dc-474f-8ec9-5b69e60ee50e/image.png)

Po zrestartowaniu IDE, jesteśmy w pełni wyposażeni w strażników jakości kodu.

Przydatnym skrótem dla VS Code jest ALT+SHIFT+F, co powoduje format aktualnie wyświetlanego dokumentu.

W prawym dolnym rogu powinniśmy zobaczyć podwójne ptaszki przy świeżo zainstalowanych narzędziach. To świadczy o tym, że wszystko się udało.

![](https://t4558603.p.clickup-attachments.com/t4558603/8cccaa37-317c-4866-9e93-3b9b23a7b015/image.png)

#### Typescript

Statyczne typowanie jest bardzo cenną cechą języków programowania. Dzięki niemu jesteśmy w stanie już na poziomie pisania kodu wyeliminować masę błędów oraz uzyskać podpowiedzi w naszym IDE, co powoduje, że pisanie kodu staje się bardziej świadomym procesem. TypeScript

Konfigurację TS pokażę w dalszej części poradnika.

# Testy w praktyce

Poniższa aplikacja została napisana w ts-node, czyli środowisku uruchomieniowym JavaScriptu z transkompilatorem TypeScript. Poniżej przedstawiam potrzebne narzędzia oraz komendy, które pozwolą nam utworzyć projekt.

1.  **Node.js**
    1.  Należy zainstalować Node, pobierając ze strony [https://nodejs.org/en/](https://nodejs.org/en/) najnowszą wersję.
2.  **Tworzenie projektu**

Przechodzimy do pustego folderu, w którym będzie znajdować się nasz projekt i uruchamiamy polecenie w konsoli `npm init -y` . Inicjalizujemy projekt npm z przełącznikiem -y, dzięki czemu wszystkie własności zostaną puste. Stworzymy również plik package.json, który pozwoli nam dodawać biblioteki do naszego projektu.

3.  **Pierwsze uruchomienie**

Utwórzmy teraz plik `app.js` i wpiszmy do niego `console.log('Hello world')`.

Po wpisaniu w konsole polecenia `node app.js` naszym oczom powinien ukazać się napis "Hello world".

4.  **Instalacja TypeScript**

Kolejnym krokiem jest instalacja TypeScript poleceniem: `npm install -D typescript` . Przełącznik -D jest skrótem od --save-dev, co oznacza, że nasze zależności będą instalowane tylko w trybie developmentu naszej aplikacji.

5.  **Instalacja typów dla Node'a**

Należy zainstalować typy TypeScript dla środowiska Node. Pozwoli nam to uruchamiać pliki TypeScript poleceniem ts-node. W konsoli należy wpisać `npm install -g ts-node` . Przełącznik -g zainstaluje paczkę globalnie.

6. **Uruchomienie transkompilatora TS**

Teraz zmieńmy nazwę pliku app.js na app.ts i uzupełnijmy go następującym kodem:

```javascript
let digit = 1;
digit = 'Hello';
```

Aby uruchomić naszą aplikację wpiszmy w konsoli `ts-node app.ts` .

Naszym oczom powinien ukazać się błąd kompilacji.

```javascript
TSError: ⨯ Unable to compile TypeScript:
```

Jeżeli TypeScript nie pozwala nam przypisać stringa do number to nasze środowisko jest gotowe.

Przejdźmy teraz do naszej aplikacji.

## Fundamenty

Załóżmy, że menager kazał nam rozszerzyć możliwości aplikacji o funkcję dodawania dwóch liczb. Niestety deadline jest za 10 sekund. Wiemy, że ostatnio przeskrobaliśmy sobie u niego więc nie chcemy, żeby nasz kod zepsuł całą aplikacje. Co robimy? Testy!

Aby sprawdzić poprawność naszej funkcji napiszmy krótkiego if'a, który w przypadku niepoprawnej operacji wyrzuci nam błąd.

```javascript
function sum(a: number, b: number) {
  return a - b;
}

let result = sum(2, 3);
let expected = 5;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
```

Następnie uruchamiamy naszą aplikację a tam co?

```plain
  throw new Error(`${result} is not equal to ${expected}`);
        ^
Error: -1 is not equal to 5
    at Object.<anonymous> (D:\Programowanie\web dev\testing\app.ts:8:9)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Module.m._compile (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1056:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Object.require.extensions.<computed> [as .ts] (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1059:12)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at main (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\bin.ts:198:14)
    at Object.<anonymous> (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\bin.ts:288:3)
```

Ale mamy szczęście, że napisaliśmy testy! Teraz możemy naprawić nasz bug w linii 2 i odpalić test ponownie. Naszym oczom powinno się ukazać ... nic ! Udało się. Aplikacja nie wyrzuciła żadnych błędów.

To jest właśnie podstawowe założenie testów - CONFIDENCE! Pewność, że nasz kod na produkcji nie będzie stwarzał problemów,

## Własny framework do testowania

Zadaniem frameworków do testowania jest pokazanie nam w jak najbardziej przystępny sposób gdzie dokładnie znajduje się błąd, abyśmy mogli jak najszybciej go znaleźć i naprawić.

Aby zrozumieć jak działają takie narzędzia, napiszemy nasz własny framework do testowania.

Rozwińmy naszą aplikację o małą bibliotekę matematyczną.

Stwórzmy plik `utils/math.ts` i umieśćmy w nim naszą funkcję `sum` oraz dopiszmy funkcję `subtract`. Do celów testowych, zepsujemy funkcję sum.

```javascript
const sum = (a: number, b: number) => {
  return a - b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

export { subtract, sum };
```

W naszym głównym pliku dopiszmy test dla naszej nowej funkcji. Plik powinien wyglądać następująco.

```javascript
import { sum, subtract } from './utils/math';

let result = sum(2, 3);
let expected = 5;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(10, 3);
expected = 7;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
```

Nasz powyższy kod jest imperatywny co sprawia, że zaczyna być nieczytelny. Dodamy teraz do niego trochę abstrakcji w postaci funkcji, której będziemy używać do pisania testów.

```javascript
let result = sum(2, 3);
let expected = 5;
expect(result).toBe(expected);

result = subtract(10, 3);
expected = 7;
expect(result).toBe(expected);

function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
```

Teraz znacznie lepiej ;)

Funkcja expect przyjmuje wartość dla której przeprowadzany jest test, zwraca funkcję `toBe`, która w zależności od wartości zmiennej `expected` wyrzuca błąd.

Po uruchomieniu naszej aplikacji, zostaje wyrzucony błąd. Nasze zepsuta funkcja sum, no właśnie, jest zepsuta ;)

Ale co z funkcją `subtract`? Skąd wiemy, że działa poprawnie? Program został przerwany w miejscu pierwszego wyrzucenia błędu, więc aby przejść kolejny test musimy naprawić aktualny błąd. Co więcej, nie wiemy, w którym dokładnie miejscu to nastąpiło, ponieważ konsola pokazuje nam miejsce w naszej funkcji `expect`. Tutaj rodzi się pomysł na dalsze rozbudowanie naszego narzędzia do testowania. Chcemy, aby wszystkie napisane przez nas testy były wykonywane za jednym razem oraz aby komunikaty błędów były bardziej precyzyjne.

```javascript
function sumTest() {
  const result = sum(2, 3);
  const expected = 5;
  expect(result).toBe(expected);
}
test('Sum adds numbers', sumTest);

function substracTest() {
  const result = substract(10, 3);
  const expected = 7;
  expect(result).toBe(expected);
}
test('Subtraction subtracts numbers', substracTest);

function test(title: string, callback: () => void) {
  try {
    callback();
    console.error(`✔ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.error(error);
  }
}
```

Ciałem funkcji jest instrukcja try catch, która wyłapuje nam błąd i wyświetla odpowiedni komunikat. Należy zwrócić uwagę na to, że tytuł powinien dobrze opisywać funkcjonalność, którą testujemy.

Po uruchomieniu naszej aplikacji konsola wyświetla nam następujące informacje

```plain
✘ Sum adds numbers
Error: -1 is not equal to 5
    at Object.toBe (D:\Programowanie\web dev\testing\app.ts:32:15)
    at sumTest (D:\Programowanie\web dev\testing\app.ts:7:18)
    at test (D:\Programowanie\web dev\testing\app.ts:20:5)
    at Object.<anonymous> (D:\Programowanie\web dev\testing\app.ts:9:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Module.m._compile (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1056:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Object.require.extensions.<computed> [as .ts] (C:\Users\tcies\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1059:12)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
✔ Subtraction subtracts numbers
```

Jak widać, jeden z naszych testów nie przechodzi, podczas gdy kolejny działa idealnie ;)

Możemy jeszcze trochę ulepszyć nasz framework poprzez przekazywanie anonimowych funkcji, co poprawi czytelność kodu.

```javascript
test('Sum adds numbers', () => {
  const result = sum(2, 3);
  const expected = 5;
  expect(result).toBe(expected);
});

test('Subtraction subtracts numbers', () => {
  const result = substract(10, 3);
  const expected = 7;
  expect(result).toBe(expected);
});
```

Naprawmy teraz wszystkie błędy.

## Asynchroniczność

Ok, a co z operacjami asynchronicznymi?

Dopiszmy do naszej matematycznej biblioteczki funkcję `asyncSum`, zwracającą po 1 sekundzie sumę dwóch liczb. Oczywiście zepsujemy ją w celach edukacyjnych.

```javascript
const asyncSum = (a: number, b: number): Promise<number> => {
  return (
    new Promise() <
    number >
    ((resolve) => {
      setTimeout(() => {
        resolve(a - b);
      }, 1000);
    })
  );
};

export { substract, sum, asyncSum };
```

Teraz przetestujmy naszą funkcję i sprawdźmy co się stanie.

```javascript
import { sum, substract, asyncSum } from './utils/math';

test('Async sum adds numbers', async () => {
  const result = await asyncSum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});
```

Konsola wypisała nam następujące linijki:

```bash
✔ Async sum adds numbers
✔ Sum adds numbers
✔ Subtraction subtracts numbers
```

PogChamp! We passed all tests!

Ale czy aby na pewno ?

Czytamy dalej i naszym oczom ukazuje się linijka:

```plain
UnhandledPromiseRejectionWarning: Unhandled promise rejection.
```

Aby rozwiązać ten problem, musimy poczekać w funkcji `test` na rozwiązanie naszego `promise'a` .

Wystarczy zrobić z funkcji synchronicznej, funkcję asynchroniczną `test`.

```javascript
function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
```

Po ponownym uruchomieniu nie jest już tak kolorowo.

```bash
✔ Sum adds numbers
✔ Subtraction subtracts numbers
✘ Async sum adds numbers
Error: -2 is not equal to 8
```

Nasze funkcje test oraz expect możemy wydzielić do oddzielnego pliku i cieszyć się naszym frameworkiem do testowania.

## Jest

Tak właściwie to napisaliśmy coś co wygląda identycznie jak składnia narzędzia Jest.

Zwalidujmy nasze testy narzędziem Jest. W konsoli wpisujemy:

`npm i jest @types/jest ts-jest typescript -D`

Następnie w `package.json` zmieńmy komendę uruchamiania testów na:

```javascript
"scripts": {
  "test": "jest"
},
```

Stwórzmy teraz plik konfiguracyjny `jest.config.js` i wklejmy do niego:

```javascript
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
```

Aby jest wykrył nasze testy, musimy stworzyć plik `src/app.test.ts` oraz zaktualizować w nim import naszej matematycznej biblioteczki. Plik wygląda następująco:

```javascript
import { sum, substract, asyncSum } from '../utils/math';

test('Async sum adds numbers', async () => {
  const result = await asyncSum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});

test('Sum adds numbers', () => {
  const result = sum(2, 3);
  const expected = 5;
  expect(result).toBe(expected);
});

test('Subtraction subtracts numbers', () => {
  const result = substract(10, 3);
  const expected: number = 7;
  expect(result).toBe(expected);
});
```

Struktura plików w naszym projekcie wygląda następująco:

![](https://t4558603.p.clickup-attachments.com/t4558603/ca52a39c-0fed-4d06-b081-5f5561cfa78d/image.png)

Teraz wpiszmy w konsoli polecenie `npx jest` i sprawdźmy jak wygląda output.

![](https://t4558603.p.clickup-attachments.com/t4558603/983b89d3-80f2-46ba-a00b-8ce1c829aa52/image.png)

Jak widać, nasze testy są prawidłowo interpretowane przez Jest'a. Wszystkie najważniejsze informacje są wyjustowane oraz pokolorowane aby pomóc programiście zweryfikować błąd.
