// append current date & time

var currentDate = moment().format('llll')
$("#currentDay").append(currentDate);

// timeblock var's
var hourTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

// view timeblock
function taskScheduler() {
    // 8 hour array
    for (var i = 0; i < 9; i++) {
        var hourBlock = hourTime.add(1, "hour").format("HH:mm");
        var blockColor;

        // to decide if blockColor
        if (hour == i) {
            blockColor = 'present';
        } else if (hour > i) {
            blockColor = "past";
        } else if (hour < i) {
            blockColor = 'future';
        } 

        // hour block html code
        var blockInsert =
            `<container class="row" id='hour-${i}'>
                <div class="col-1"></div>
                <div class="hour w-25 p-4 col-2">${hourBlock}</div>
                <textarea id="" class="description w-50 p-4 col-7 ${blockColor} hour-${i}"></textarea>
                <button id="" class="saveBtn w-25 p-4 col-2 fas fa-save fa-2x"></button>
                <div class="col-2">
                </div>  
            </container>
            <p></p>`
            ;

        //insert block into div container
        $("#container").append(blockInsert);
    };

    // click button save
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });

};



taskScheduler();

