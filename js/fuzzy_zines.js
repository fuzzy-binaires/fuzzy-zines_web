

$( init );

var zines = ['membrane_phoebe'];

function init() {

 let path = 'zines/'+zines[0]+ '/';
 $('#flipbookContainer')
    .append($('<div id="flipbook"/>')
        .append($('<div/>',{'class':'hard'}).css({'background-image': 'url(' + path + 'FRONT.png)'}))
        .append($('<div/>',{'class':'hard'}).css({'background-image': 'url(' + path + 'INNERFRONT.png)'}))
        .append($('<div/>',{'class':'pg1'}).css({'background-image': 'url(' + path + '1.png)'}))
        .append($('<div/>',{'class':'pg2'}).css({'background-image': 'url(' + path + '2.png)'}))
        .append($('<div/>',{'class':'pg3'}).css({'background-image': 'url(' + path + '3.png)'}))
        .append($('<div/>',{'class':'pg4'}).css({'background-image': 'url(' + path + '4.png)'}))
        .append($('<div/>',{'class':'pg5'}).css({'background-image': 'url(' + path + '5.png)'}))

              );

  run();
}

function run()
{
  let fb = $("#flipbookContainer").children();

  fb.turn({
      width: 800,
      height: 600,
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

//run();
