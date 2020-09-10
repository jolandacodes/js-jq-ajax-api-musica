$(document).ready(function () {
  getCD();
});

// Function to get the CDs
function getCD() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      var data = data.response;
      console.log(data);

      var discHTML = $("#template").html();

      var template = Handlebars.compile(discHTML);

      $("#genreList").change(function () {
        var selectedGenre = $(this).children("option:selected").val();
        
        $('.cds-container').empty();


            for (i = 0; i < data.length; i++) {
            
                var cd = data[i];

                if (selectedGenre == cd.genre) {


                var context = {
                    cover: cd.poster,
                    title: cd.title,
                    author: cd.author,
                    genre: cd.genre,
                    year: cd.year,
                }

                var html = template(context);
                $(".cds-container").append(html);


                }
            }

      });
    },

    error: function (error) {
      alert("you messed up");
    },
  });
}
