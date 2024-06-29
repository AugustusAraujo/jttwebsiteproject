/*
commands:
sum minus div left multi pow
*/

H = window.document.getElementsByClassName("history")[0];

class KindOfAToken {
  constructor(type, a, b) {
    this.type = type;
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  minus() {
    return this.a - this.b;
  }

  div() {
    return this.a / this.b;
  }

  left() {
    return this.a % this.b;
  }

  multi() {
    return this.a * this.b;
  }

  pow() {
    return Math.pow(this.a, this.b);
  }
}

function transpile(line) {
  if (line == "clear") {
    window.document.querySelector(".history").innerHTML = "";
  } else {
    let af = line
      .replaceAll("(", " ")
      .replaceAll(")", " ")
      .replaceAll(",", " ");

    print(line);
    tokenizer(af.split(" "));
  }
}

// I was going to do something with trees right here but I'm kind running out of time, so I'll make it ez and lazy
function tokenizer(data) {
  let validTokens = ["sum", "min", "div", "lft", "mlt", "pow"];
  try {
    if (validTokens.find((v) => v == data[0])) {
      if (Number.parseInt(data[1]) && Number.parseInt(data[2])) {
        obj = new KindOfAToken(data[0], Number(data[1]), Number(data[2]));
        switch (data[0]) {
          case validTokens[0]:
            print(obj.sum(), false);
            break;
          case validTokens[1]:
            print(obj.minus(), false);
            break;
          case validTokens[2]:
            print(obj.div(), false);
            break;
          case validTokens[3]:
            print(obj.left(), false);
            break;
          case validTokens[4]:
            print(obj.multi(), false);
            break;
          case validTokens[5]:
            print(obj.pow(), false);
            break;
          default:
            print("<mark>ERROR</mark> Invalid expression.");
            break;
        }
      }
    }
  } catch (e) {
    print("<mark>ERROR</mark> Invalid expression.");
    print(e);
  }
}

function print(printable, arrow = true) {
  let el = document.createElement("div");
  el.className = "item";
  el.innerHTML =
    (arrow ? ">&nbsp;" : "") +
    String(printable).replaceAll(" ", "&nbsp;").replaceAll("\n", "<br>");
  H.appendChild(el);
}
