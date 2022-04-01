// append current date & time

var currentDate = moment().format('llll')
$("#currentDay").append(currentDate);

// view timeblock
var hourTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

for (var i = 0; i < 9; i++) {
    var hourBlock = hourTime.add(1, "hour").format("HH:mm");
    var blockColor;

    if (hour == i) {
        blockColor = 'present';
    } else if (hour > i) {
        blockColor = "past";
    } else if (hour < i) {
        blockColor = 'future';
    }

    var blockInsert =
        `<container class="row" id='hour-${i}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1">${hourBlock}</div>
            <textarea class="description w-50 p-4 col-6 ${blockColor} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2">
            </div>  
        </container>
        <p></p>`
        ;

    $("#container").append(blockInsert);
};

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    JSON.parse(localStorage.setItem(time, text));
})

// for (var i = 8; i <9; i++) {
//     $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
// }