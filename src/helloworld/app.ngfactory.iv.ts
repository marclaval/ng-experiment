import { VdRenderer } from "iv/src/iv";
import { htmlRenderer } from "iv/src/htmlrenderer";

class App {
  counter: number = 0;

  increment() {
    this.counter++;
    refresh();
  }
}

const _app = new App();

let r = htmlRenderer(document.getElementById("root"), hello);

function refresh() {
  r.refresh({ app: _app });
}

function foobar(r: VdRenderer) {
  let $a0: any = r.parent;
  const $ = r.rt, $tx = $.createTxtNode;
  if ($a0.cm) {
    $tx($a0, 1, " Foo Bar ");
    $a0.cm = 0;
  }
}

function hello(r: VdRenderer, $d: any) {
  let $a0: any = r.parent, $a1, $f0, $f1;
  const $ = r.rt, $t0 = " Counter: ", $el = $.createEltNode, $tx = $.createTxtNode, $dt = $.dynTxtNode, $cc = $.createCpt, $ut = $.updateText, $up = $.updateProp;
  let app = $d["app"];
  $f0=function() {((1 + (app.counter=app.counter-1))&&refresh())};
  $f1=function() {app.increment()};
  if ($a0.cm) {
    $a1 = $el($a0, 1, "h1", 0);
    $tx($a1, 2, "Hello World");
    $dt($a0, 3, $t0 + (app.counter));
    $a1 = $el($a0, 4, "br", 0);
    $a1 = $el($a0, 5, "button", 1);
    $a1.props = { "onclick": $f0, "disabled": (app.counter <= 0) };
    $tx($a1, 6, " Less ");
    $a1 = $el($a0, 7, "button", 0);
    $a1.props = { "onclick": $f1 };
    $tx($a1, 8, " More ");
    $a1 = $cc($a0, 9, {  }, r, foobar, 0, 0);
    $a0.cm = 0;
  } else {
    $a1 = $a0.children[1];
    $ut($t0 + (app.counter), $a1, $a0);
    $a1 = $a0.children[3];
    $up("onclick", $f0, $a1, $a0);
    $up("disabled", (app.counter <= 0), $a1, $a0);
    $a1 = $a0.children[4];
    $up("onclick", $f1, $a1, $a0);
  }
}
