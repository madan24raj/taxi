//Tab Section Display Mode
function nextTab(tab){
    if(tab==='tripdetails'){
        let tripElement = document.getElementById("tripdetails");
        tripElement.classList.add("d-none");
        let tripPlanSection = document.getElementById("tripPlan");
        tripPlanSection.classList.remove("d-none");
        let tripTabElement = document.getElementById("tripdetailsTab");
        tripTabElement.classList.remove("trip-active");
        tripTabElement.classList.add("trip-deactive");
        let tripPlanElement = document.getElementById("tripPlanTab");
        tripPlanElement.classList.remove("trip-deactive");
        tripPlanElement.classList.add("trip-active");
    }else if(tab==='tripplan'){
        let tripPlanSection = document.getElementById("tripPlan");
        tripPlanSection.classList.add("d-none");
        let tripPersonalSection = document.getElementById("tripPersonal");
        tripPersonalSection.classList.remove("d-none");
        let tripPlanElement = document.getElementById("tripPlanTab");
        tripPlanElement.classList.remove("trip-active");
        tripPlanElement.classList.add("trip-deactive");
        let tripPersonalElement = document.getElementById("peronsaldetailsTab");
        tripPersonalElement.classList.remove("trip-deactive");
        tripPersonalElement.classList.add("trip-active");
    }else {
        let tripProcess = document.getElementById("afterSubmit");
        tripProcess.classList.add("d-none");
    }
}

//Changing From Date
function checkDateValue(prop){
    let date = new Date();
    let getCurrentDate = date.toISOString().slice(0,10);
    if(getCurrentDate===prop.value){
        getCurrentDateFunc();
    }else{
        selectCurrentDate(prop.value);
    }
}

//Default Date Section
let date = new Date();
let getCurrentDate = date.toISOString().slice(0,10);
document.getElementById("currentdate").value = getCurrentDate;
document.getElementById("currentdate").setAttribute('min', getCurrentDate);
var todayDate = document.getElementById("currentdate").value
if(todayDate==getCurrentDate){
    getCurrentDateFunc();
}

//Current Date and Time
function getCurrentDateFunc(){
    let date = new Date();
    let ampm = date.toLocaleString().slice(-2);
    var currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let loopno = (ampm==='PM')?12:0;
    var flag=0;
    var options = "";
    for(var i=loopno; i < 24; i++){
            if(i > currentHours){
                options += `<option value=${i}> ${i} ${ampm}</option>`;  
            }

            if(currentMinutes <= 30 && i == currentHours && flag===0){
                options += `<option value=${i}_30> ${i}:30 ${ampm}</option>`;  
                flag=1;
            }else if(i > currentHours){
                options += `<option value=${i}_30> ${i}:30 ${ampm}</option>`;  
            }
    }
    document.getElementById("startTime").innerHTML = options;
}

//Select Date and Time
function selectCurrentDate(prop){
    var options = "";
    for(var i=1; i <= 23; i++){
                let ampm = (i >= 12)?'PM':'AM';
                options += `<option value=${i}> ${i} ${ampm}</option>`;
                options += `<option value=${i}_30> ${i}:30 ${ampm}</option>`; 
    }
 
    document.getElementById("startTime").innerHTML = options;
}

//Trip Mode SelectDays Section
function tripMode(name){
   
    if(name!=='oneway'){
        let daybox=document.getElementById('selectDayBox');
        daybox.classList.remove('d-none');
        var options = "";
        for(var i=1; i <= 15; i++){
                    options += `<option value=${i}> ${i} days</option>`;
        }
        document.getElementById("dayCount").innerHTML = options;
    }else {
        let daybox=document.getElementById('selectDayBox');
        daybox.classList.add('d-none');
    }
}
