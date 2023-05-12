let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';let apiEmployeeApi = new TempApi.EmployeeApi();document.addEventListener('aligntaskEmployee', function(e) {
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
    }});apiEmployeeApi.getAllemployee((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iitf7").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'employeeName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].employeeName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'employeeName'){
        subDataElements[i].textContent = data[data.length -i -1].employeeName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("aligntaskEmployee"))
    });

    
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
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};