let apiEmployeeApi = new TempApi.EmployeeApi();import TempApi from '../src/index';document.getElementById('ib116').onclick = (event) => {
    event.preventDefault();
    let employeeId = window.location.pathname.replace('/updateEmployee/','');let employee = new TempApi.Employee();employee['employeeName'] = document.querySelector("[annotationname = 'employeeName']").value; let opts = {employee};apiEmployeeApi.updateemployee( employeeId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = employeeName]').value = response.body.query.employeeName ;{   location.href= '/Home' ;}}});};window.onload = () => {let employeeId = window.location.pathname.replace('/updateEmployee/','');apiEmployeeApi.getemployee( employeeId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = employeeName]').value = response.body.query.employeeName; } catch (e) { console.log(e) };}});};