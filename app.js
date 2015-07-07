//Code to show all wines here

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
});

//Code to update a wine here

//Code to delete a wine here