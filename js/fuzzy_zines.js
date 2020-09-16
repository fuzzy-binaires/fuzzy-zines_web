

$(init);

var zines = ['membrane', 'human-bites-dog','doodle','crumbling1','crumbling2','border-crossing-kit'];

function init() {

  initFlipBook();
  run();
}

function run() {

  let fb = $("#flipbookContainer").children();

  if (fb.length != 0) {
    fb.turn({
      width: 842,
      height: 595,
      autoCenter: true
    });

    $("#pageFld").val(fb.turn("page"));

    fb.bind("turned", function (event, page, view) {
      $("#pageFld").val(page);
    });

    $("#pageFld").change(function () {
      fb.turn("page", $(this).val());
    });

    $("#prevBtn").click(function () {
      fb.turn("previous");
    });

    $("#nextBtn").click(function () {
      fb.turn("next");
    });
  }
}

function initFlipBook() {

  // console.log("SelectedFlipBook: " + selectedFlipBook);

  let path = 'zines/' + zines[0] + '/';

  $('#flipbookContainer')
    .append($('<div id="flipbook"/>')
      .append($('<div/>', { 'class': 'hard' }).css({ 'background-image': 'url(' + path + '1.jpg)' }))
      .append($('<div/>', { 'class': 'hard' }).css({ 'background-image': 'url(' + path + '2.jpg)' }))
      .append($('<div/>', { 'class': 'pg1' }).css({ 'background-image': 'url(' + path + '3.jpg)' }))
      .append($('<div/>', { 'class': 'pg2' }).css({ 'background-image': 'url(' + path + '4.jpg)' }))
      .append($('<div/>', { 'class': 'pg3' }).css({ 'background-image': 'url(' + path + '5.jpg)' }))
      .append($('<div/>', { 'class': 'pg4' }).css({ 'background-image': 'url(' + path + '6.jpg)' }))
      .append($('<div/>', { 'class': 'pg5' }).css({ 'background-image': 'url(' + path + '7.jpg)' }))
      .append($('<div/>', { 'class': 'pg6' }).css({ 'background-image': 'url(' + path + '8.jpg)' }))


    );

}

function updateFlipBook(selected) {

  // console.log("SelectedFlipBook: " + selectedFlipBook);

  let path = 'zines/' + zines[selected] + '/';


      
    $("#flipbookContainer").find('[page="1"] > div > div').css('background-image', 'url(' + path + '1.jpg)');
    $("#flipbookContainer").find('[page="2"] > div > div').css('background-image', 'url(' + path + '2.jpg)');
    $("#flipbookContainer").find('[page="3"] > div > div').css('background-image', 'url(' + path + '3.jpg)');
    $("#flipbookContainer").find('[page="4"] > div > div').css('background-image', 'url(' + path + '4.jpg)');
    $("#flipbookContainer").find('[page="5"] > div > div').css('background-image', 'url(' + path + '5.jpg)');
    $("#flipbookContainer").find('[page="6"] > div > div').css('background-image', 'url(' + path + '6.jpg)');
    $("#flipbookContainer").find('[page="7"] > div > div').css('background-image', 'url(' + path + '7.jpg)');
    $("#flipbookContainer").find('[page="8"] > div > div').css('background-image', 'url(' + path + '8.jpg)');


}

//run();
