## localStorage Property:

The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

## Syntax

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all necessary libraries.

```JavaScript
myStorage = window.localStorage;
```

## Example:

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all necessary libraries.

```JavaScript
// Store
localStorage.setItem("name", "Bob");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("name");
```

## SessionStorage Property:

The sessionStorage object is similar to the localStorage object, except that it stores the data for only one session.

## Example:

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all necessary libraries.

```JavaScript
if (sessionStorage.clickcount) {
  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
  sessionStorage.clickcount = 1;
}

document.getElementById("result").innerHTML = "You clicked button " +
sessionStorage.clickcount + " time in this session.";
```

## Source:

https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it
