  $("#add-strain-btn").on("click", function(event) {
    event.preventDefault();
    var strainName = $("#strain-name-input").val().trim();
  var queryURL = "https://www.cannabisreports.com/api/v1.0/strains/search/" + strainName + "";
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*'
  },
  }).then(function(response) {
    console.log(response);
  });
  });
    // var newRow = $("<tr>").append(
    //   $("<td>").text(strainName));
    // $("#strain-table > tbody").append(newRow);