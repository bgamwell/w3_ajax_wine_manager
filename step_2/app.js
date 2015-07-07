//Code to show all wines here
$(document).ready(function() {
	$.ajax({
		url: "http://daretodiscover.herokuapp.com/wines",
		type: "GET",
		success: function(data) {
			var template = _.template($("#wine-template").html());

			_.each(data, function(wine) {
				$("#wine-container").append(template(wine));
			});
		}
	});
});

//Code to add new wine
$("#submit-wine").on("click", function() {
	var wineObj = {
		name: $("#name").val(),
		year: $("#year").val(),
		grapes: $("#grapes").val(),
		country: $("#country").val(),
		region: $("#region").val(),
		price: $("#price").val(),
		description: $("#description").val(),
		picture: $("#picture").val()
	};

	$.ajax({
		type: "POST",
		url: "http://daretodiscover.herokuapp.com/wines",
		data: wineObj,
		success: function() {
			window.location.reload();
		},
		error: function() {
			alert("Error!");
		}
	});
});

var wineID;

//Code to fill in modal to edit a wine
$(document).on("click", ".edit-wine-button", function(event) {
	event.preventDefault();

	$.ajax({
		url: "http://daretodiscover.herokuapp.com/wines/" + $(this).data("id"),
		type: "GET",
		success: function(data) {
			$("#edit-name").val(data.name);
			$("#edit-year").val(data.year);
			$("#edit-grapes").val(data.grapes);
			$("#edit-country").val(data.country);
			$("#edit-region").val(data.region);
			$("#edit-price").val(data.price);
			$("#edit-description").val(data.description);
			$("#edit-picture").val(data.picture);

			$("#edit-wine-modal").modal("show");
		}
	});

	wineID = $(this).data("id");

});

//Code to update a wine here

$("#submit-edited-wine").on("click", function() {
	var wineObj = {
		name: $("#edit-name").val(),
		year: $("#edit-year").val(),
		grapes: $("#edit-grapes").val(),
		country: $("#edit-country").val(),
		region: $("#edit-region").val(),
		price: $("#edit-price").val(),
		description: $("#edit-description").val(),
		picture: $("#edit-picture").val()
	};

	$.ajax({
		type: "PUT",
		url: "http://daretodiscover.herokuapp.com/wines/" + wineID,
		data: wineObj,
		success: function() {
			window.location.reload();
		},
		error: function() {
			alert("Error!");
		}
	});

});

//Code to delete a wine here

$("#delete-wine").on("click", function() {

	$.ajax({
		type: "DELETE",
		url: "http://daretodiscover.herokuapp.com/wines/" + wineID,
		success: function() {
			window.location.reload();
		},
		error: function() {
			alert("Error!");
		}
	});

});
