let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.addEventListener('aligntaskEmployee', function(e) {
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
    let taskId = window.location.pathname.replace('/updateTask/','');let task = new TempApi.Task();task['taskName'] = document.querySelector("[annotationname = 'taskName']").value;task['taskStatus'] = document.querySelector("[annotationname = 'taskStatus']").value;task['taskEmployee'] = document.querySelector("[annotationname = 'taskEmployee']").value; let opts = {task};apiTaskApi.updatetask( taskId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = taskName]').value = response.body.query.taskName ;document.querySelector('[annotationname = taskStatus]').value = response.body.query.taskStatus ;document.querySelector('[annotationname = taskEmployee]').value = response.body.query.taskEmployee ;{   location.href= '/Home' ;}}});};window.onload = () => {let taskId = window.location.pathname.replace('/updateTask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = taskName]').value = response.body.query.taskName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = taskStatus]').value = response.body.query.taskStatus; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = taskEmployee]').setAttribute('selected-element',response.body.query.taskEmployee.employeeName);document.dispatchEvent(new Event("aligntaskEmployee"));
        const insideSubdocument = document.querySelector("[annotationname = 'taskEmployee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'employeeName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.taskEmployee.employeeName;}} catch (e) {console.log(e);};
        }
      if(response.body.query.taskEmployee._id){
        map.set(
          document.querySelector(
            "[annotationname = 'taskEmployee']"
          ).getAttribute("id"),
          response.body.query.taskEmployee
        );
      }
     } catch (e) { console.log(e) };
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    }});};