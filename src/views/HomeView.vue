
<template>
  <div class="home">
    <div id="menu">
      <span id="menu-navi">
        <button
          type="button"
          class="btn btn-default btn-sm move-today"
          data-action="move-today"
        >
          Today
        </button>
        <button
          type="button"
          class="btn btn-default btn-sm move-day"
          data-action="move-prev"
        >
          <i
            class="calendar-icon ic-arrow-line-left"
            data-action="move-prev"
          ></i>
        </button>
        <button
          type="button"
          class="btn btn-default btn-sm move-day"
          data-action="move-next"
        >
          <i
            class="calendar-icon ic-arrow-line-right"
            data-action="move-next"
          ></i>
        </button>
      </span>
      <span id="renderRange" class="render-range"></span>
    </div>
    <div id="calendar"></div>
  </div>
</template>

<script>
/* eslint-disable require-jsdoc, no-unused-vars */
var Calendar = require("tui-calendar"); /* CommonJS */
require("tui-calendar/dist/tui-calendar.css");

// If you use the default popups, use this.
require("tui-date-picker/dist/tui-date-picker.css");
require("tui-time-picker/dist/tui-time-picker.css");

export default {
  name: "HomeView",
  return: {},
  methods: {
    async calendarinit() {
      const axios =require( 'axios');
      var cal = new Calendar("#calendar", {
        defaultView: "day", // daily view option
      });
      const start = new Date();
      cal.createSchedules([
       
        {
          id: "1",
          calendarId: "1",
          title: "coding schedule",
          category: "time",
          dueDateClass: "",
          start: new Date(new Date().setHours(start.getHours() -7)),
          end: new Date(new Date().setHours(start.getHours() )),
         
        },
      ]);
      // cal.render();
      
     const writeApi= await axios
      .post('http://localhost:3000/file/write',[ {
          id: "1",
          calendarId: "1",
          title: "coding schedule",
          category: "time",
          dueDateClass: "",
          start: new Date(new Date().setHours(start.getHours() -7)),
          end: new Date(new Date().setHours(start.getHours() )),
         
        }])
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
      console.log(writeApi)

      const readApi= await axios
      .get('http://localhost:3000/file/read')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
      console.log(readApi)
      return cal;
    },
  },
  created: function () {
    this.calendarinit();
  },
};
</script>
