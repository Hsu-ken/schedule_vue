
<template>
  <div class="home">
    <div id="menu">
        <Datepicker  v-model="pickdate" />
      <v-row justify="center">
       
        
        <v-dialog v-model="dialog" width="600px"   persistent>
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              v-bind="props"
             
            >
              Open Dialog
            </v-btn>
            
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Schedule</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                   <v-col cols="12" sm="6">
                    <v-text>start</v-text>
                   
                    <datepicker id="startdatepicker" v-model="startpickdate" />
                    
                  </v-col>
                 
                
                  <v-col cols="12" sm="6">
                    <v-text>end</v-text>
                   
                    <Datepicker id="enddatepicker" v-model="endpickdate" />
                   
                  </v-col>
                   <v-col cols="12" >
                    <v-select :items="items" label="type" headline></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="name"
                      
                    ></v-text-field>
                  </v-col>
                 
                
              
                 
                 
                  <v-col cols="12">
                    <v-text-field
                      label="category"
                     
                    
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="consoledata">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
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
            id="btn-new-schedule"
            type="button"
            class="btn btn-default btn-block lnb-new-schedule-btn"
            data-toggle="modal"
          >
            New calendar
          </button>
        </div>

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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

var Calendar = require("tui-calendar");
require("tui-calendar/dist/tui-calendar.css");

// If you use the default popups, use this.
require("tui-date-picker/dist/tui-date-picker.css");
require("tui-time-picker/dist/tui-time-picker.css");
const calendarinfo = require("../service/calendarInfo");

export default defineComponent( {
  name: "HomeView",
  return: {},
  data() {
    return {
      calendarlist: [],
      schedule: [],
      dialog: false,
      items: ["17", "29", "54"],
      startpickdate: new Date(),
      endpickdate: new Date()
    };
  },
  components:{
    Datepicker,
    
  },
  methods: {
    async calendarinit() {
      const calendarlist1 = {
        id: String(1),
        name: "My Calendar",
        color: "#ffffff",
        bgColor: "#9e5fff",
        dragBgColor: "#9e5fff",
        borderColor: "#9e5fff",
        checked: true,
      };

      this.calendarlist = await calendarinfo.writeCalendarAxios(calendarlist1);
      this.calendarlist = await calendarinfo.readCalendarAxios();
      console.log(this.calendarlist);
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
          start: new Date(new Date().setHours(start.getHours() - 7)),
          end: new Date(new Date().setHours(start.getHours())),
        },
      ]);
      cal.render();

      return 0;
    },
    async consoledata(){
      console.log(this.startpickdate)
      console.log(this.endpickdate)
    }
  },
  created: function () {
    this.calendarinit();
  },
});
</script>
