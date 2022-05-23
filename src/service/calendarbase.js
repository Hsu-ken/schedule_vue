'use strict';

/* eslint-disable require-jsdoc, no-unused-vars */
const calendarbase = {



    async CalendarInfo() {
        const calendar = {}
        calendar.id = null;
        calendar.name = null;
        calendar.checked = true;
        calendar.color = null;
        calendar.bgColor = null;
        calendar.borderColor = null;
        calendar.dragBgColor = null;

        return calendar;
    },

    async addCalendar(CalendarList, calendar) {
        CalendarList.push(calendar);
        return CalendarList
    },

    async findCalendar(CalendarList, id) {
        var found;

        CalendarList.forEach(function(calendar) {
            if (calendar.id === id) {
                found = calendar;
            }
        });

        return found || CalendarList[0];
    },

    async hexToRGBA(hex) {
        var radix = 16;
        var r = parseInt(hex.slice(1, 3), radix),
            g = parseInt(hex.slice(3, 5), radix),
            b = parseInt(hex.slice(5, 7), radix),
            a = parseInt(hex.slice(7, 9), radix) / 255 || 1;
        var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

        return rgba;
    },

    async init() {
        const CalendarList = []
        var calendar;
        var id = 0;

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'work';
        calendar.color = '#ffffff';
        calendar.bgColor = '#9e5fff';
        calendar.dragBgColor = '#9e5fff';
        calendar.borderColor = '#9e5fff';
        this.addCalendar(CalendarList, calendar);

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'Company';
        calendar.color = '#ffffff';
        calendar.bgColor = '#00a9ff';
        calendar.dragBgColor = '#00a9ff';
        calendar.borderColor = '#00a9ff';
        this.addCalendar(CalendarList, calendar);

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'Family';
        calendar.color = '#ffffff';
        calendar.bgColor = '#ff5583';
        calendar.dragBgColor = '#ff5583';
        calendar.borderColor = '#ff5583';
        this.addCalendar(CalendarList, calendar);

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'Friend';
        calendar.color = '#ffffff';
        calendar.bgColor = '#03bd9e';
        calendar.dragBgColor = '#03bd9e';
        calendar.borderColor = '#03bd9e';
        this.addCalendar(CalendarList, calendar);

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'Travel';
        calendar.color = '#ffffff';
        calendar.bgColor = '#bbdc00';
        calendar.dragBgColor = '#bbdc00';
        calendar.borderColor = '#bbdc00';
        this.addCalendar(CalendarList, calendar);

        calendar = this.CalendarInfo();
        id += 1;
        calendar.id = String(id);
        calendar.name = 'etc';
        calendar.color = '#ffffff';
        calendar.bgColor = '#9d9d9d';
        calendar.dragBgColor = '#9d9d9d';
        calendar.borderColor = '#9d9d9d';
        this.addCalendar(CalendarList, calendar);

        return CalendarList
    }
};
module.exports = calendarbase