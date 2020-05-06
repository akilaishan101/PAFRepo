<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="model.Patient"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/patient.js"></script>
</head>
<body>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-6">
					<h1>Patient Management</h1>
					<form id="formPatient" name="formPatient" style="font-weight: bold">
					ID: <input id="patientID" name="patientID" type="text"
							placeholder="" class="form-control form-control-sm" disabled> <br>
						First Name: <input id="FName" name="FName" type="text"
							placeholder="" class="form-control form-control-sm"> <br>
						Last Name: <input id="LName" name="LName" type="text"
							placeholder="" class="form-control form-control-sm"> <br>
						NIC: <input id="NIC" name="NIC" type="text" placeholder=""
							class="form-control form-control-sm"> <br> Age: <input
							id="Age" name="Age" type="text" placeholder=""
							class="form-control form-control-sm"> <br> Contact
						No: <input id="contactNo" name="contactNo" type="text"
							placeholder="" class="form-control form-control-sm"> <br>
						Gender: <input id="Gender" name="Gender" type="text"
							placeholder="" class="form-control form-control-sm"> <br>
						Address: <input id="Address" name="Address" type="text"
							placeholder="" class="form-control form-control-sm"> <br>
						Email: <input id="Email" name="Email" type="text" placeholder=""
							class="form-control form-control-sm"> <br> Gaurdian:
						<input id="Gaurdian" name="Gaurdian" type="text" placeholder=""
							class="form-control form-control-sm"> <br> <input
							id="btnSave" name="btnSave" type="button" value="SAVE"
							class="btn btn-primary"> <input type="hidden"
							id="hidPatientIDSave" name="hidPatientIDSave" value="">
					</form>
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<br>
					<div id="divPatientGrid">
						<%
							Patient patObj = new Patient();
						out.print(patObj.getPatient());
						%>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
