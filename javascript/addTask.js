let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';let task = new TempApi.Task();document.addEventListener('aligntaskEmployee', function(e) {
  const advanceSelect = document.getElementById('iiaet');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('itvy5').onclick = (event) => {
    event.preventDefault();
    task['taskName'] = document.querySelector("[annotationname = 'taskName']").value;task['taskStatus'] = document.querySelector("[annotationname = 'taskStatus']").value;task['taskEmployee'] = document.querySelector("[annotationname = 'taskEmployee']").value;apiTaskApi.createtask( task, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/Home' ;}}});};window.onload = () => {};