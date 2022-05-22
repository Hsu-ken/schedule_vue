
<template>
  <div class="home">
    <div id="menu">
  
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px" >
          <template v-slot:activator="{ props }"
          >
            <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
          </template>
          <v-card id="dialogschedule">
            <v-card-title>
              <span class="text-h5">Schedule</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" >
                    <v-text>start</v-text>

                    <Datepicker  v-model="startpickdate" teleport="#dialogschedule"/>
                  </v-col>

                  <v-col cols="12" >
                    <v-text>end</v-text>

                    <Datepicker v-model="endpickdate" teleport="#dialogschedule"/>
                  </v-col>
                  <!-- <v-col cols="12">
                    <v-select :items="items" label="type" v-model="type" headline></v-select>
                  </v-col> -->
                  <v-col cols="12">
                    <v-text-field label="title" v-model="title"></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-select :items="categoryitems" label="category" v-model="category" ></v-select>
                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog=false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="creatschedule">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <span id="menu-navi">
     

        <div class="lnb-new-schedule">
          <button
            v-on:click="greet"
            id="btn-new-schedule1"
            type="button"
            class="btn btn-default btn-block lnb-new-schedule-btn"
            data-toggle="modal"
          >
            New schedule
          </button>
        </div>

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
import { defineComponent } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

var Calendar = require("tui-calendar");
require("tui-calendar/dist/tui-calendar.css");

// If you use the default popups, use this.
require("tui-date-picker/dist/tui-date-picker.css");
require("tui-time-picker/dist/tui-time-picker.css");
const calendarinfo = require("../service/calendarInfo");

export default defineComponent({
  name: "HomeView",
  return: {},
  data() {
    return {
      calendarlist: [],
      schedule: [],
      dialog: false,
      items: ["17", "29", "54"],
      categoryitems:['time','task',"milestone"],
      type:"",
      name:"",
      category:"time",

      startpickdate: new Date(),
      endpickdate: new Date(),
      cal :{}
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    async calendarinit() {
      const calendarlist1 = [{
        id: String(1),
        name: "My Calendar",
        color: "#ffffff",
        bgColor: "#9e5fff",
        dragBgColor: "#9e5fff",
        borderColor: "#9e5fff",
        checked: true,
      }];
      this.cal=new Calendar("#calendar", {
        defaultView: "day", // daily view option
        calendars:calendarlist1
      })
      this.cal.setCalendars(calendarlist1)
      this.calendarlist = await calendarinfo.writeCalendarAxios(calendarlist1);
      this.calendarlist = await calendarinfo.readCalendarAxios();
      console.log(this.calendarlist);
      const start=new Date()
 
     
      // this.creatschedule(schedule)
     
     
      return 0;
    },
    async consoledata() {
      console.log(this.startpickdate);
      console.log(this.endpickdate);
    },
    async creatschedule()
    {
      this.dialog=false;
    const start=new Date()
       const schedule=[{
          id: "1",
          calendarId: "1",
          title: String(this.title),
          category: String(this.category),
          dueDateClass: "",
           start: this.startpickdate,
          end: this.endpickdate,
        }]
        
        console.log(new Date(new Date().setHours(start.getHours()-7)))
        console.log(new Date(new Date().setHours(start.getHours())))
        console.log(this.startpickdate)
        console.log(this.endpickdate)
      this.cal.createSchedules(schedule)
      this.cal.render();

      
      //  this.cal.createSchedules([
      //   {
      //     id: "1",
      //     calendarId: "1",
      //     title: "coding schedule",
      //     category: "time",
      //     dueDateClass: "",
      //     start: new Date(new Date().setHours(start.getHours() - 7)),
      //     end: new Date(new Date().setHours(start.getHours())),
      //   },
      // ]);
      // this.cal.render();

      console.log(schedule)
    }
  },
  created: function () {
    this.calendarinit();
  },
});
</script>
