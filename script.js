var tem = document.getElementById('template');
var dat = document.getElementById('data');
var out = document.getElementById('output');

tem.addEventListener('keyup', render);
dat.addEventListener('keyup', render);

// YAML + Handlebars = Output
function render() {
  var template = Handlebars.compile(tem.value);
  var data = jsyaml.safeLoad(dat.value);
  out.value = template(data);
}

// 1-Base-Index
Handlebars.registerHelper("inc", function (val, opt) {
  return parseInt(val) + 1;
});

// Handlebars Variable LOL
var idx;
Handlebars.registerHelper('setIdx', function (val) { idx = val + 1; });
Handlebars.registerHelper('getIdx', function () { return idx; });

// Copy to Clipboard
document.getElementById('copy-template').addEventListener('click', function () {
  tem.select();
  tem.setSelectionRange(0, 99999);
  document.execCommand('copy');
});

document.getElementById('copy-data').addEventListener('click', function () {
  dat.select();
  dat.setSelectionRange(0, 99999);
  document.execCommand('copy');
});

document.getElementById('copy-output').addEventListener('click', function () {
  out.select();
  out.setSelectionRange(0, 99999);
  document.execCommand('copy');
});
