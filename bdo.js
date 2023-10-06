/*
 * Author: Josue Galeas
 * Last Edit: 2023.10.06
 */

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const colors = new Map
([
	["Kzarka", "#af0000"],
	["Nouver", "#af8700"],
	["Garmoth", "#afaf00"],
	["Offin", "#00af00"],
	["Vell", "#00afaf"],
	["Karanda", "#005faf"],
	["Kutum", "#8700af"],
	["Quint", "#606060"],
	["Muraka", "#606060"],
	["-", "1c1c1c"],
	["Black<br>Shadow", "#121212"],
]);

const data =
{
	"Monday":
	[
		{"date": "2018-10-22T07:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-22T10:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-22T14:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-22T17:00:00.000Z", "name": "Offin"},
		{"date": "2018-10-22T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-22T21:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-23T00:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-23T03:15:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-23T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-23T05:15:00.000Z", "name": "Karanda"}
	],
	"Tuesday":
	[
		{"date": "2018-10-23T07:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-23T10:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-23T14:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-23T17:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-23T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-23T21:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-24T00:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-24T03:15:00.000Z", "name": "Quint/Muraka"},
		{"date": "2018-10-24T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-24T05:15:00.000Z", "name": "Kzarka/Kutum"}
	],
	"Wednesday":
	[
		{"date": "2018-10-24T07:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-24T10:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-24T14:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-24T17:00:00.000Z", "name": "-"},
		{"date": "2018-10-24T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-24T21:00:00.000Z", "name": "Kutum/Offin"},
		{"date": "2018-10-25T00:00:00.000Z", "name": "Vell"},
		{"date": "2018-10-25T03:15:00.000Z", "name": "Karanda/Kzarka"},
		{"date": "2018-10-25T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-25T05:15:00.000Z", "name": "Nouver"}
	],
	"Thursday":
	[
		{"date": "2018-10-25T07:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-25T10:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-25T14:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-25T17:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-25T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-25T21:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-26T00:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-26T03:15:00.000Z", "name": "Quint/Muraka"},
		{"date": "2018-10-26T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-26T05:15:00.000Z", "name": "Karanda/Kzarka"}
	],
	"Friday":
	[
		{"date": "2018-10-26T07:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-26T10:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-26T14:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-26T17:00:00.000Z", "name": "Karanda"},
		{"date": "2018-10-26T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-26T21:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-27T00:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-27T03:15:00.000Z", "name": "Kzarka/Kutum"},
		{"date": "2018-10-27T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-27T05:15:00.000Z", "name": "Karanda"}
	],
	"Saturday":
	[
		{"date": "2018-10-27T07:00:00.000Z", "name": "Offin"},
		{"date": "2018-10-27T10:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-27T14:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-27T17:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-27T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-27T21:00:00.000Z", "name": "Black<br>Shadow"},
		{"date": "2018-10-28T00:00:00.000Z", "name": "Karanda/Kzarka"},
		{"date": "2018-10-28T03:15:00.000Z", "name": "-"},
		{"date": "2018-10-28T04:15:00.000Z", "name": "-"},
		{"date": "2018-10-28T05:15:00.000Z", "name": "Nouver/Kutum"}
	],
	"Sunday":
	[
		{"date": "2018-10-21T07:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-21T10:00:00.000Z", "name": "Kutum"},
		{"date": "2018-10-21T14:00:00.000Z", "name": "Nouver"},
		{"date": "2018-10-21T17:00:00.000Z", "name": "Kzarka"},
		{"date": "2018-10-21T19:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-21T21:00:00.000Z", "name": "Vell"},
		{"date": "2018-10-22T00:00:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-22T03:15:00.000Z", "name": "Kzarka/Nouver"},
		{"date": "2018-10-22T04:15:00.000Z", "name": "Garmoth"},
		{"date": "2018-10-22T05:15:00.000Z", "name": "Karanda/Kutum"}
	]
}

// Setting up table in HTML
for (let i = 0; i < 10; i++)
	document.getElementById("TimeRow").innerHTML += `<th id="Time${i}"></th>`

for (let j = -6; j < 1; j++)
{
	var day = days.at(j)

	document.getElementById("DayRows").innerHTML += `<tr id="${day}Row"></tr>`
	document.getElementById(day + "Row").innerHTML += `<td>${day}</td>`

	for (let i = 0; i < 10; i++)
		document.getElementById(day + "Row").innerHTML += `<td id="${day}${i}"></td>`
}

// Setting up a two-dimensional array for spawn times
var spawns = new Array(7);

for (let i = 0; i < 7; i++)
{
	spawns[i] = new Array(24);

	for (let j = 0; j < 24; j++)
		spawns[i][j] = "No Boss";
}

// Sorting spawn times into the array
for (const day of days)
	for (const spawn of data[day])
	{
		var date = new Date(spawn["date"]);
		var d = date.getDay();
		var h = date.getHours();
		spawns[d][h] = [date, spawn["name"]];
	}

// Gets the 24-hour and 12-hour formatted times of the given date
function getTimes(date)
{
	// Determining hour
	var hour24 = date.getHours();
	var hour12 = "?";
	var ampm = "am";

	if (hour24 == 0)
		hour12 = "12";
	else if (hour24 > 12)
		hour12 = hour24 - 12;
	else
		hour12 = hour24;

	if (hour24 >= 12)
		ampm = "pm";

	if (hour24 < 10)
		hour24 = "0" + hour24;

	// Determining minute
	var minute = date.getMinutes();
	if (minute < 10)
		minute = "0" + minute;

	// Times
	var time24 = hour24 + ":" + minute;
	var time12 = hour12 + ":" + minute + ampm;

	return [time24, time12];
}

// Gets the next upcoming boss
function checkUpNext(i, currentDay, currentHour, currentMinute)
{
	var boss = spawns[currentDay][i];

	if (boss == "No Boss")
		return false;
	else if (boss[1] == "-")
		return false;

	if (i == currentHour)
		if (currentMinute >= boss[0].getMinutes())
			return false;

	var times = getTimes(boss[0]);
	var day = days[boss[0].getDay()];
	var upNext = `Up next: ${boss[1]} at ${times[0]}/${times[1]} on ${day}`;

	document.getElementById("upNext").innerHTML = upNext;
	return true;
}

// Showing time zone
const clock = new Date();
const index = clock.toString().indexOf("GMT");
const timeZone = clock.toString().slice(index);
const currentTime = getTimes(clock);
const detected = `Detected: ${currentTime[0]}/${currentTime[1]} - ${timeZone}`;
document.getElementById("clock").innerHTML = detected;

// Showing what boss is up next
var currentDay = clock.getDay();
var currentHour = clock.getHours();
var currentMinute = clock.getMinutes();

for (let i = currentHour; i < 24; i++)
	if (checkUpNext(i, currentDay, currentHour, currentMinute))
		break;

if (document.getElementById("upNext").innerHTML == "Up next: ???")
{
	if (currentDay == 6)
		currentDay = 0;
	else
		currentDay++;

	for (let i = 0; i < 24; i++)
		if (checkUpNext(i, currentDay, currentHour, currentMinute))
			break;
}

// Updating hour change notice if needed
if (clock.getMonth() == 2 && clock.getDate() <= 21)
	document.getElementById("hourChange").innerHTML = "Notice: After hour change in early March, spawns will occur ONE HOUR LATER until adjusted during the following maintenance"
if (clock.getMonth() == 10 && clock.getDate() <= 14)
	document.getElementById("hourChange").innerHTML = "Notice: After hour change in early November, spawns will occur ONE HOUR EARLIER until adjusted during the following maintenance"

// Updating times in the table
for (let i = 0, count = 0; i < 24; i++)
{
	if (spawns[0][i] == "No Boss")
		continue;

	var times = getTimes(spawns[0][i][0]);
	document.getElementById("Time" + count).innerHTML = times[0] + "<br>" + times[1];
	count++;
}

// Updating bosses in the table
for (let j = 0; j < 7; j++)
{
	for (let i = 0, count = 0; i < 24; i++)
	{
		if (spawns[j][i] == "No Boss")
			continue;

		var bossName = spawns[j][i][1];

		// Determining cell color
		if (bossName.indexOf("/") == -1)
			var bossColor = colors.get(bossName);
		else
		{
			var bossNames = bossName.split("/");
			var color1 = colors.get(bossNames[0]);
			var color2 = colors.get(bossNames[1]);

			var bossColor = `linear-gradient(to bottom, ${color1} 0%, ${color1} 50%, ${color2} 50%, ${color2} 100%)`;
			bossName = bossNames[0] + "<br><br>" + bossNames[1];
		}

		document.getElementById(days[j] + count).innerHTML = bossName;
		document.getElementById(days[j] + count).style.background = bossColor;
		count++;
	}
}
