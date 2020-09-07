

$( init );

var zines = ['images/chip_A.png','images/chip_B.png'];

function init() {


 $('#flipbookContainer')
    .append($('<div id="flipbook"/>')
        .append($('<div/>',{'class':'hard'}))
        .append($('<div/>',{'class':'hard'}))
        .append($('<div/>',
            {'class':'pg1'})
              .css({'background-image': 'url("http://pleek.net/images/projects/36/image_1.png")'}
                  )
                )
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
