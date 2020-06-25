/*
 * Author: Josue Galeas
 * Last Edit: 2020.06.24
 */

var spawns = [];

// Monday
spawns.push([new Date(Date.UTC(2018, 9, 22, 07, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 10, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 14, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 17, 00)), "Offin"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 21, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 00, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 03, 15)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 05, 15)), "Karanda"]);
// Tuesday
spawns.push([new Date(Date.UTC(2018, 9, 23, 07, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 10, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 14, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 17, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 23, 21, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 00, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 03, 15)), "Garmoth"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 05, 15)), "Kutum/Kzarka"]);
// Wednesday
spawns.push([new Date(Date.UTC(2018, 9, 24, 07, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 10, 00)), "Maint."]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 14, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 17, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 24, 21, 00)), "Kutum/Offin"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 00, 00)), "Vell"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 03, 15)), "Karanda/Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 04, 15)), "Quint/Muraka"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 05, 15)), "Nouver"]);
// Thursday
spawns.push([new Date(Date.UTC(2018, 9, 25, 07, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 10, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 14, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 17, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 25, 21, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 00, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 03, 15)), "Garmoth"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 05, 15)), "Kzarka/Karanda"]);
// Friday
spawns.push([new Date(Date.UTC(2018, 9, 26, 07, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 10, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 14, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 17, 00)), "Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 26, 21, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 00, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 03, 15)), "Kutum/Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 05, 15)), "Karanda"]);
// Saturday
spawns.push([new Date(Date.UTC(2018, 9, 27, 07, 00)), "Offin"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 10, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 14, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 17, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 27, 21, 00)), "Quint/Muraka"]);
spawns.push([new Date(Date.UTC(2018, 9, 28, 00, 00)), "Kzarka/Karanda"]);
spawns.push([new Date(Date.UTC(2018, 9, 28, 03, 15)), "Conquest<br>War"]);
spawns.push([new Date(Date.UTC(2018, 9, 28, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 28, 05, 15)), "Nouver/Kutum"]);
// Sunday
spawns.push([new Date(Date.UTC(2018, 9, 21, 07, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 21, 10, 00)), "Kutum"]);
spawns.push([new Date(Date.UTC(2018, 9, 21, 14, 00)), "Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 21, 17, 00)), "Kzarka"]);
spawns.push([new Date(Date.UTC(2018, 9, 21, 21, 00)), "Vell"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 00, 00)), "Garmoth"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 03, 15)), "Kzarka/Nouver"]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 04, 15)), ""]);
spawns.push([new Date(Date.UTC(2018, 9, 22, 05, 15)), "Kutum/Karanda"]);

// Setting up two-dimensional array
var data = new Array(7);
for (i = 0; i < 7; i++)
{
	data[i] = new Array(24);

	for (j = 0; j < 24; j++)
		data[i][j] = "No Boss";
}

// Sorting spawn times by day and hour
for (i = 0; i < spawns.length; i++)
{
	var day = spawns[i][0].getDay();
	var hour = spawns[i][0].getHours();
	data[day][hour] = spawns[i];
}

// Map integer to English days
var dayMap = [];
dayMap[0] = "Sunday";
dayMap[1] = "Monday";
dayMap[2] = "Tuesday";
dayMap[3] = "Wednesday";
dayMap[4] = "Thursday";
dayMap[5] = "Friday";
dayMap[6] = "Saturday";

// Function that converts the given date to 24 hour and 12 hour formats
function convertTime(date)
{
	// Determining hour
	var hour24 = date.getHours();
	var hour12 = "?";
	var ampm = "AM";

	if (hour24 == 0)
		hour12 = "12";
	else if (hour24 > 12)
		hour12 = hour24 - 12;
	else
		hour12 = hour24;

	if (hour24 >= 12)
		ampm = "PM";

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

// Function that gets the boss' color
function getBossColor(boss)
{
	switch (boss)
	{
		case "Kzarka":
			return "#df9f9f";
		case "Nouver":
			return "#dfbf9f";
		case "Garmoth":
			return "#dfdf9f";
		case "Vell":
		case "Quint":
		case "Muraka":
			return "#9fdf9f"
		case "Offin":
			return "#9fdfdf";
		case "Karanda":
			return "#9fbfdf";
		case "Kutum":
			return "#bf9fdf";
		case "":
			return "#bfbfbf";
		default:
			return "#dfdfdf";
	}
}

// Function that looks for the next upcoming boss
function checkUpNext(i, currentDay, currentHour, currentMinute)
{
	var boss = data[currentDay][i];

	if (boss == "No Boss")
		return false;
	else if (boss[1] == "")
		return false;

	if (i == currentHour)
		if (currentMinute >= boss[0].getMinutes())
			return false;

	var times = convertTime(boss[0]);
	var day = dayMap[boss[0].getDay()];

	if (boss[1] == "Conquest<br>War")
		var upNext = `Up next: Conquest War at ${times[0]}/${times[1]} on ${day}`;
	else
		var upNext = `Up next: ${boss[1]} at ${times[0]}/${times[1]} on ${day}`;

	document.getElementById("upNext").innerHTML = upNext;
	return true;
}

// Showing time zone
var clock = new Date();
var index = clock.toString().indexOf("GMT");
var timeZone = clock.toString().slice(index);
var currentTime = clock.toLocaleTimeString();
var detected = `Detected: ${currentTime} - ${timeZone}`;
document.getElementById("clock").innerHTML = detected;

// Showing up next
var currentDay = clock.getDay();
var currentHour = clock.getHours();
var currentMinute = clock.getMinutes();

for (i = currentHour; i < 24; i++)
	if (checkUpNext(i, currentDay, currentHour, currentMinute))
		break;

if (document.getElementById("upNext").innerHTML == "Up next: ???")
{
	if (currentDay == 6)
		currentDay = 0;
	else
		currentDay++;

	for (i = 0; i < 24; i++)
		if (checkUpNext(i, currentDay, currentHour, currentMinute))
			break;
}

// Updating times in the table
var count = 0;
for (i = 0; i < 24; i++)
{
	if (data[0][i] == "No Boss")
		continue;

	var times = convertTime(data[0][i][0]);
	document.getElementById("time" + count).innerHTML = times[0] + "<br>" + times[1];
	count++;
}

// Updating bosses in the table
for (j = 0; j < 7; j++)
{
	count = 0;
	for (i = 0; i < 24; i++)
	{
		if (data[j][i] == "No Boss")
			continue;

		var bossName = data[j][i][1];
		var index = bossName.indexOf("/");

		// Determining color
		if (index == -1)
			var bossColor = getBossColor(bossName);
		else
		{
			var bossNames = bossName.split("/");
			var color1 = getBossColor(bossNames[0]);
			var color2 = getBossColor(bossNames[1]);

			var bossColor = "linear-gradient(to bottom, ";
			bossColor += `${color1} 0%, ${color1} 49%, black 49%, `
			bossColor += `black 51%, ${color2} 51%, ${color2} 100%)`;
			bossName = bossNames[0] + "<br><br>" + bossNames[1];
		}

		document.getElementById(dayMap[j] + count).innerHTML = bossName;
		document.getElementById(dayMap[j] + count).style.background = bossColor;
		count++;
	}
}
