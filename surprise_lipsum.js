var surprise_lipsum = window.surprise_lipsum || {};

surprise_lipsum.generator = function () {
    var latin = "lorem ipsum dolor sit amet consectetuer adipiscing elit nam cursus morbi ut mi nullam enim leo egestas id condimentum at laoreet mattis massa sed eleifend nonummy diam praesent mauris ante elementum et bibendum at posuere sit amet nibh duis tincidunt lectus quis dui viverra vestibulum suspendisse vulputate aliquam dui nulla elementum dui ut augue aliquam vehicula mi at mauris maecenas placerat nisl at consequat rhoncus sem nunc gravida justo quis eleifend arcu velit quis lacus morbi magna magna tincidunt a mattis non imperdiet vitae tellus sed odio est auctor ac sollicitudin in consequat vitae orci fusce id felis vivamus sollicitudin metus eget eros".split(" ");

    function random_int(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function surprise_lipsum() {
      $("*").filter(function(){
        var match = $(this).text().match(/^\[lipsum (\d+)w (\d+)%\]/);
        if(match) {
          $(this).data("surprise-ideal", match[1]);
          $(this).data("surprise-variance", match[2]);  
        }
        return match;
      }).each(function() {
        var lipsum = generate_lipsum($(this).data("surprise-ideal"), $(this).data("surprise-variance"));
        $(this).text(lipsum);
      });
    }

    function generate_lipsum(ideal, variance) {
      ideal = parseInt(ideal);
      variance = ((ideal/100) * parseInt(variance));

      var min = ideal - variance;
      var max = ideal + variance;
      var words = random_int(min, max);

      var lipsum = "";
      for(var x = 0; x < words; x++) {
        index = random_int(0, latin.length - 1);
        lipsum += latin[index] + " ";
      }

      return lipsum;
    }

    return {
      surprise: function () {
        surprise_lipsum();
      }
    };
} ();


$(function() {
  surprise_lipsum.generator.surprise();
});