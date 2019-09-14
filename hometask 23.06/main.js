$("#mybtn1").click(function () {
    var myarray = [];
    var mytitle = $("#mytitle").val();
    var myrating = $("#myrating").val();

    if (mytitle == "" || Number(myrating) < 1 || Number(myrating) > 10)
        alert("Wrong Title or Rating!");

        $("table tbody tr").each(function (index, tr) {
            myarray.push($(tr).find("td").first().text().toLowerCase());
        })

    if (myarray.indexOf(mytitle.toLowerCase()) == -1 && mytitle != "" && Number(myrating) > 0 && Number(myrating) < 11) {

        var newmovie = "<tr><td>"
            + mytitle + "</td><td>"
            + myrating + "</td><td><button>Delete</button></td></tr>"

        $("table tbody").append(newmovie)   
    }

})

$("table").on("click", "button", function () {
    $(this).parent().parent().remove();
})

