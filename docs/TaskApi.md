# TempApi.TaskApi

All URIs are relative to *https://83.212.100.226:4001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtask**](TaskApi.md#createtask) | **POST** /task | Creates the data
[**deletetask**](TaskApi.md#deletetask) | **DELETE** /task/{taskId} | Delete the element
[**getAlltask**](TaskApi.md#getAlltask) | **GET** /task/getAll | Get all the data
[**getByParamstask**](TaskApi.md#getByParamstask) | **GET** /task/getByParams | Get all the data based on user query
[**gettask**](TaskApi.md#gettask) | **GET** /task/{taskId} | Get the element
[**updatetask**](TaskApi.md#updatetask) | **PUT** /task/{taskId} | Updates the element



## createtask

> Task createtask(task)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
let task = new TempApi.Task(); // Task | data to be created
apiInstance.createtask(task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**Task**](Task.md)| data to be created | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetask

> deletetask(taskId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
let taskId = "taskId_example"; // String | the Id parameter
apiInstance.deletetask(taskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltask

> [Task] getAlltask()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
apiInstance.getAlltask((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamstask

> [Task] getByParamstask(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamstask(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettask

> Task gettask(taskId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
let taskId = "taskId_example"; // String | the Id parameter
apiInstance.gettask(taskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| the Id parameter | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetask

> Task updatetask(taskId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TaskApi();
let taskId = "taskId_example"; // String | the Id parameter
let opts = {
  'task': new TempApi.Task() // Task | data to be updated
};
apiInstance.updatetask(taskId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| the Id parameter | 
 **task** | [**Task**](Task.md)| data to be updated | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

