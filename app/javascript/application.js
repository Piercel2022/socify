// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "bootstrap-sprockets";
import "bootstrap";
import "font-awesome";
import "jquery.datetimepicker";
import "*";
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bindWithDelay
//= require jquery.datetimepicker
//= require_tree .

$(document).ready(function(){
    $("#event_when").datetimepicker({
      format:'Y/m/d H:i'
    });
    $("#user_dob").datetimepicker({
      timepicker:false,
      format:'Y/m/d',
      maxDate:'0'
    });
  });
