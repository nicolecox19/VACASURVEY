$(document).ready(function(event) {
  $("#form-control form").submit(function(event) {
var who = parseInt($("#who").val());
var weather = parseInt($("#weather").val());
var activity = parseInt($("#activity").val());
var agriculture = parseInt($("#beverage").val());
var concerns  = parseInt($("#concerns").val());
event.preventDefault;

if (val >= 5){
  $('#low').show();
} else if (val <=10) {
  $("#medium").show();
} else (val <= 15) {
  $("#high").show();
}
});
