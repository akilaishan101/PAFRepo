$(document).ready(function() {
	$("#alertSuccess").hide();

	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validatePatientForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	var type = ($("#hidPatientIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "PatientAPI",
		type : type,
		data : $("#formPatient").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onPatientSaveComplete(response.responseText, status);
		}
	});
});

function onPatientSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divPatientGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();

		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("UnKnown error while saving..");
		$("#alertError").show();
	}

	$("#hidPatientIDSave").val("");
	$("#formPatient")[0].reset();

}

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidPatientIDSave").val(
					$(this).closest("tr").find('#hidPatientIDUpdate').val());
			$("#patientID").val($(this).closest("tr").find('td:eq(0)').text());
			$("#FName").val($(this).closest("tr").find('td:eq(1)').text());
			$("#LName").val($(this).closest("tr").find('td:eq(2)').text());
			$("#NIC").val($(this).closest("tr").find('td:eq(3)').text());
			$("#Age").val($(this).closest("tr").find('td:eq(4)').text());
			$("#contactNo").val($(this).closest("tr").find('td:eq(5)').text());
			$("#Gender").val($(this).closest("tr").find('td:eq(6)').text());
			$("#Address").val($(this).closest("tr").find('td:eq(7)').text());
			$("#Email").val($(this).closest("tr").find('td:eq(8)').text());
			$("#Gaurdian").val($(this).closest("tr").find('td:eq(9)').text());
		});

// REMOVE=========================================================
$(document).on("click", ".btnRemove", function(event) 
		{ 
		$.ajax(
			{ 
				url : "PatientAPI",
				type : "DELETE",
				data : "patientID=" + $(this).data("patientid"),
				dataType : "text",
				complete : function(response, status)
				{ 
					onPatientDeleteComplete(response.responseText, status);  
				}
			});
		}); 
function onPatientDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divPatientGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


// CLIENT-MODEL================================================================
function validatePatientForm() {
	// First Name
	if ($("#FName").val().trim() == "") {
		return "Insert First Name";
	}

	// Last Name
	if ($("#LName").val().trim() == "") {
		return "Insert Last Name";
	}

	// NIC
	if ($("#NIC").val().trim() == "") {
		return "Insert NIC";
	}

	// Age
	if ($("#Age").val().trim() == "") {
		return "Insert Age";
	}

	// Contact No
	if ($("#contactNo").val().trim() == "") {
		return "Insert Contact No";
	}

	// Gender
	if ($("#Gender").val().trim() == "") {
		return "Insert Gender";
	}

	// Address
	if ($("#Address").val().trim() == "") {
		return "Insert Address.";
	}

	// Email
	if ($("#Email").val().trim() == "") {
		return "Insert Email";
	}

	// Gaurdian
	if ($("#Gaurdian").val().trim() == "") {
		return "Insert Gaurdian";
	}

	return true;
}
