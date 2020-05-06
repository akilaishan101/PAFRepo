package model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/PatientAPI")
public class PatientAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Patient patObj = new Patient();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PatientAPI() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = patObj.AddPatient(request.getParameter("FName"), request.getParameter("LName"),
				request.getParameter("NIC"), request.getParameter("Age"), request.getParameter("contactNo"),
				request.getParameter("Gender"), request.getParameter("Address"), request.getParameter("Email"),
				request.getParameter("Gaurdian"));
		response.getWriter().write(output);
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);

		String output = patObj.UpdatePatient(paras.get("hidPatientIDSave").toString(), paras.get("FName").toString(),
				paras.get("LName").toString(), paras.get("NIC").toString(), paras.get("Age").toString(),
				paras.get("contactNo").toString(), paras.get("Gender").toString(), paras.get("Address").toString(),
				paras.get("Email").toString(), paras.get("Gaurdian").toString());

		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);
		String output = patObj.deletePatient(paras.get("patientID").toString());
		response.getWriter().write(output);
	}

	// Covert request parameters to a map
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {

				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}

}
