

$(init);

var zines = ['membrane', 'person-bites-dog', 'doodle', 'crumbling1', 'crumbling2', 'border-crossing-kit'];

function init() {

  // ADD THE FLIPBOOK DIV
  $('#flipbookContainer').append($('<div id="flipbook"/>'));

  addPagesInDOM(0);
  bindEvents();

}

function bindEvents() {

  // let fb = $("#flipbookContainer").children();


  $("#flipbook").turn({
    width: 842,
    height: 595,
    autoCenter: true
  });
}

function addPagesInDOM(zineNumber) {

  let path = 'zines/' + zines[zineNumber] + '/';

  $("#flipbook").append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '1.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '2.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '3.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '4.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '5.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '6.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '7.jpg)' }))
    .append($('<div/>', { 'class': 'fpage' }).css({ 'background-image': 'url(' + path + '8.jpg)' }));

}


function destroyFlipbook() {
  $("#flipbook").turn("destroy");
}

function changeFlipBook(flipbookNumber) {
  destroyFlipbook();
  addPagesInDOM(flipbookNumber);
  bindEvents();
}
