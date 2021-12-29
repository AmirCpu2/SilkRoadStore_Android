var ServerRoot = '192.168.43.87/';
var Time = '';

/*led1 led1.2 led2 led3 led5 led_out led_in*/
var LEDColor = [2, 2, 3, 4, 3, 0, 1];

//Virtual Temp Memory
var vPin = ["L1", "L1.2", "L2", "L3", "L5", "LSun", "LMan", "GameMode", "Hour", "Minute", "Second"];
var tPin = ["Command", "Response"];
var vTempMamoryPin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tTempMamoryPin = ["", ""];


/***********************
  Begin onClick Methods
 ***********************/
function onclickAdamak() {

    //AjaxChangeColor(0, LEDColor[6] + 1 < 9 ? LEDColor[6] + 1 : 0, 0, 6);
    updateStatus(vPin[6], LEDColor[6] + 1 < 9 ? LEDColor[6] + 1 : 0);
}

function onclickOut() {

    //AjaxChangeColor(1, LEDColor[5] + 1 <= 1 ? LEDColor[5] + 1 : 0, 0, 5);
    updateStatus(vPin[5], LEDColor[5] + 1 <= 1 ? LEDColor[5] + 1 : 0);

}

function onclick1() {

    //AjaxChangeColor(2, LEDColor[0] + 1 < 5 ? LEDColor[0] + 1 : 0, 0, 0);
    updateStatus(vPin[0], LEDColor[0] + 1 < 4 ? LEDColor[0] + 1 : 0);

}

function onclick12() {

    //AjaxChangeColor(3, LEDColor[1] + 1 < 5 ? LEDColor[6] + 1 : 0, 0, 1);
    updateStatus(vPin[1], LEDColor[1] + 1 < 4 ? LEDColor[6] + 1 : 0);

}

function onclick2() {

    //AjaxChangeColor(4, LEDColor[2] + 1 < 5 ? LEDColor[2] + 1 : 0, 0, 2);
    updateStatus(vPin[2], LEDColor[2] + 1 < 4 ? LEDColor[2] + 1 : 0);
}

function onclick3() {

    //AjaxChangeColor(5, LEDColor[3] + 1 < 5 ? LEDColor[3] + 1 : 0, 0, 3);
    updateStatus(vPin[3], LEDColor[3] + 1 < 4 ? LEDColor[3] + 1 : 0);

}

function onclick5() {

    //AjaxChangeColor(6, LEDColor[4] + 1 < 5 ? LEDColor[4] + 1 : 0, 0, 4);
    updateStatus(vPin[4], LEDColor[4] + 1 < 4 ? LEDColor[4] + 1 : 0);
}

/***********************
   End onClick Methods
 ***********************/

/***********************
  Begin Engine Methods
 ***********************/

//Disable Method
function AjaxChangeColor(led, color, light, index) {
    $('#loaderContent').show();
    $('#Loader').show();
    document.getElementById("Loader").style.display = "block";
    updateStatus();
}

//Update All Status Of Array
function updateColor() {

    var ColorChart = ['black', '#EC2227', '#08A650', '#214497', '#FFFF00', '#DA70D6', '#0094ff', '#FFFAF0'];
    document.getElementById("man").style.fill = LEDColor[6] > 7 ? ColorChart[0] : ColorChart[LEDColor[6]];
    
    switch (LEDColor[0]) {
        case 1:
            document.getElementById("fib1").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib1").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib1").style.fill = "#214497";
            break;


        default:
            LEDColor[0] = 0;
            document.getElementById("fib1").style.fill = "black";

    }


    switch (LEDColor[1]) {
        case 1:
            document.getElementById("fib12").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib12").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib12").style.fill = "#214497";
            break;


        default:
            LEDColor[0] = 0;
            document.getElementById("fib12").style.fill = "black";

    }


    switch (LEDColor[2]) {
        case 1:
            document.getElementById("fib2").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib2").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib2").style.fill = "#214497";
            break;


        default:
            LEDColor[2] = 0;
            document.getElementById("fib2").style.fill = "black";

    }


    switch (LEDColor[3]) {
        case 1:
            document.getElementById("fib3").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib3").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib3").style.fill = "#214497";
            break;


        default:
            LEDColor[3] = 0;
            document.getElementById("fib3").style.fill = "black";

    }


    switch (LEDColor[4]) {
        case 1:
            document.getElementById("fib5").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib5").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib5").style.fill = "#214497";
            break;


        default:
            LEDColor[4] = 0;
            document.getElementById("fib5").style.fill = "black";

    }


    switch (LEDColor[5]) {
        case 1:
            document.getElementById("out1").style.fill = "white";
            document.getElementById("out2").style.fill = "white";
            document.getElementById("out3").style.fill = "white";
            document.getElementById("out4").style.fill = "white";
            document.getElementById("out4").style.fill = "white";
            document.getElementById("out5").style.fill = "white";
            document.getElementById("out6").style.fill = "white";
            document.getElementById("out7").style.fill = "white";
            document.getElementById("out8").style.fill = "white";
            document.getElementById("out9").style.fill = "white";
            document.getElementById("out10").style.fill = "white";
            document.getElementById("out11").style.fill = "white";
            document.getElementById("out12").style.fill = "white";
            document.getElementById("out13").style.fill = "white";
            document.getElementById("out14").style.fill = "white";
            document.getElementById("out15").style.fill = "white";
            document.getElementById("out16").style.fill = "white";
            break;

        default:
            LEDColor[5] = 0;
            document.getElementById("out1").style.fill = "black";
            document.getElementById("out2").style.fill = "black";
            document.getElementById("out3").style.fill = "black";
            document.getElementById("out4").style.fill = "black";
            document.getElementById("out5").style.fill = "black";
            document.getElementById("out6").style.fill = "black";
            document.getElementById("out7").style.fill = "black";
            document.getElementById("out8").style.fill = "black";
            document.getElementById("out9").style.fill = "black";
            document.getElementById("out10").style.fill = "black";
            document.getElementById("out11").style.fill = "black";
            document.getElementById("out12").style.fill = "black";
            document.getElementById("out13").style.fill = "black";
            document.getElementById("out14").style.fill = "black";
            document.getElementById("out15").style.fill = "black";
            document.getElementById("out16").style.fill = "black";
    }
}

/***********************
   End Engine Methods
 ***********************/

//Waiting For Load
$(function () {

    updateColor();

    $('#Loader').hide();
    
    $('#Reset').on('click', function () {
	if(ServerRoot === '')
		Android.showToast('Pleas Set IP Address');
	else
        	updateStatus('','');
    });

    $('#StartApp').on('click', function () {
        setInterval(function () { updateStatus('', '') }, 10000);
    });

    $('#btn-changeIP').on('click', function () {
        ServerRoot = $('#inpt-ipAddress').val();
    });

    $('#btn-changeTime').on('click', function () {
        Time = $('#inpt-time').val();
        var listTime = Time.split(":");
        //Time set = > hour
        updateStatus(vPin[8], listTime[0] > 0 ? (listTime[0] > 12 ? listTime[0] - 12 : listTime[0]) : 12 );
        updateStatus(vPin[9], listTime[1]);

        Android.showToast('Time is Set');
        //alert('Time is Set');
    });

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    $('#inpt-time').val(`${hours}:${minutes}`);
});

/*
function WIFI()
{
    try
    {
        Android.showToast("Clock btn");
        var v = Android.hotspotStatus();
        Android.showToast(v);
        var v2 = Android.hotspotAct();
        Android.showToast("config:"+v2);

    }
    catch(e)
    {
        Android.showToast(e);
    }

}
*/

/*
 *  Update Status Method
 *  target => vPin index
 *  value => ? set Pin
 */
function updateStatus(target, value) {
    //7 LED + 1 Time + 1 game Mode
    var request = "1234";
    for (var i = 0; i < vPin.length; i++) {
        if (vPin[i] === target) {
            request += `!V${i < 10 ? "0" + i : i}=${value}$`;
        }
        else {
            request += `!V${i < 10 ? "0" + i : i}=?$`;
        }
    }

    //test
    //Android.showToast(request);
    //alert(request);
    var response = Android.sendGet("http:/"+ServerRoot+ request);

    if (response != null || response != "")
     {
            //Android.showToast(response);
            setValue(response);
            $('#loaderContent').hide();
            $('#Loader').hide();
    }
    else
    {
        setTimeout(function () {
            //your code to be executed after 1 second
            $('#loaderContent').hide();
            $('#Loader').hide();
            Android.showToast("field Request");
        }, 1000);
    }
}

/*
 *  stringValue : !V00=1$!V01=2$!V02=3$!V03=4$!V04=5$
 */
function setValue(stringValue) {
    if (stringValue === null || stringValue === "")
        return;

    //Get All List Val
    var varList = stringValue.split('!');

    //data cleaning
    varList.shift();

    //set val to color
    varList.forEach(function (data) {
        var index = parseInt(data.split('=')[0].replace('V', ''));
        var value = parseInt(data.split('=')[1]);
        vTempMamoryPin[index] = value;
        if (index < 7) {
            LEDColor[index] = value;
        }
    });

    //updateColor
    updateColor();
}
