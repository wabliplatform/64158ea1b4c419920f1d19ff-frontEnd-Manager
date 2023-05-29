# TempApi.EmployeeApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createemployee**](EmployeeApi.md#createemployee) | **POST** /employee | Creates the data
[**deleteemployee**](EmployeeApi.md#deleteemployee) | **DELETE** /employee/{employeeId} | Delete the element
[**getAllemployee**](EmployeeApi.md#getAllemployee) | **GET** /employee/getAll | Get all the data
[**getByParamsemployee**](EmployeeApi.md#getByParamsemployee) | **GET** /employee/getByParams | Get all the data based on user query
[**getemployee**](EmployeeApi.md#getemployee) | **GET** /employee/{employeeId} | Get the element
[**updateemployee**](EmployeeApi.md#updateemployee) | **PUT** /employee/{employeeId} | Updates the element



## createemployee

> Employee createemployee(employee)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
let employee = new TempApi.Employee(); // Employee | data to be created
apiInstance.createemployee(employee, (error, data, response) => {
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
 **employee** | [**Employee**](Employee.md)| data to be created | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteemployee

> deleteemployee(employeeId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
let employeeId = "employeeId_example"; // String | the Id parameter
apiInstance.deleteemployee(employeeId, (error, data, response) => {
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
 **employeeId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllemployee

> [Employee] getAllemployee()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
apiInstance.getAllemployee((error, data, response) => {
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

[**[Employee]**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsemployee

> [Employee] getByParamsemployee(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsemployee(filter, (error, data, response) => {
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

[**[Employee]**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getemployee

> Employee getemployee(employeeId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
let employeeId = "employeeId_example"; // String | the Id parameter
apiInstance.getemployee(employeeId, (error, data, response) => {
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
 **employeeId** | **String**| the Id parameter | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateemployee

> Employee updateemployee(employeeId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EmployeeApi();
let employeeId = "employeeId_example"; // String | the Id parameter
let opts = {
  'employee': new TempApi.Employee() // Employee | data to be updated
};
apiInstance.updateemployee(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **String**| the Id parameter | 
 **employee** | [**Employee**](Employee.md)| data to be updated | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

