let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('iure3l').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addTask' ;}};document.getElementById('iitjmd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addEmployee' ;}};window.onload = () => {apiTaskApi.getAlltask((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3bnj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskName'){
        subDataElements[i].textContent = data[data.length -i -1].taskName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'taskStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].taskStatus;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'taskStatus'){
        subDataElements[i].textContent = data[data.length -i -1].taskStatus;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'taskEmployee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'employeeName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].taskEmployee.employeeName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].taskEmployee._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'taskEmployee']"
          ).getAttribute("id"),
          data[data.length-i-1].taskEmployee
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
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