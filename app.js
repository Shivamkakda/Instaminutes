//require node-scheduler for scheduling jobs
const schedule = require('node-schedule');
const express = require('express')
const app = express();
// create an dummy array
const arr =[{
		"text": "Mike",
		"dateTime" : "2022-03-19 07:38:00.000"
},
{
		"text": "Shivam",
		"dateTime": "2020-07-15 14:00:00.000"
},
{
		"text": "Vishal",
		"dateTime": "2020-07-15 15:00:00.000"
},
{
    "text": "Harsh",
    "dateTime" : "2020-07-10 13:00:00.000"
},
{
    "text": "Ankit",
    "dateTime": "2020-07-12 18:20:00.000"
},
{
    "text": "Yash",
    "dateTime": "2020-07-11 12:00:00.000"
},
{
		"text": "Ayush",
		"dateTime": "2020-07-11 14:00:00.000"
},
{
    "text": "Harshit",
    "dateTime" : "2020-07-20 13:30:00.000"
},
{
    "text": "Vaishali",
    "dateTime": "2020-08-11 16:10:00.000"
},
{
    "text": "Mansi",
    "dateTime": "2020-07-06 06:00:00.000"
}
]
//mapping the array using map function for each element of the array
arr.map(jobFunction)
function jobFunction(item, i){
setTimeout(()=>{ //setTimeout with the delay of the length of the name
    const job = schedule.scheduleJob(item.dateTime, function(){   // scheduling the job at the given time by using scheduleJob of nodejs schedular which is take care of the date and time in corn format
        console.log("Hello Dear " + item.text +" Your Appointment on " + item.dateTime);
      })
    console.log("Scheduling The Job of "+item.text+" at " + item.dateTime) 
},i*item.text.length*1000)
}
