// Write your solution in this file!
const employee = {name:"Nyi",streetAddress:"123 9th st."}

function updateEmployeeWithKeyAndValue(obj,key,value){
    return {...obj, [key]: value}
}
//const employeeUpdate1 = updateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway",)

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
     obj[key]=value;
     return obj
}
//const employeeUpdate2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Htet")

function deleteFromEmployeeByKey(obj,key){
    const keyDeletedEmployee = {...obj}
    delete keyDeletedEmployee[key]
    return keyDeletedEmployee
}
//const employeeUpdate3 = deleteFromEmployeeByKey(employee,"name")

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]
    return obj
}