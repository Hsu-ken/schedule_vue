const axios = require("axios");

const calendarinfo = {
    async readCalendarAxios() {

        const readApi = await axios
            .get("http://localhost:3000/file/readcalendarlist")
            .then((response) => (this.info = response))
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
        console.log(readApi);

        return readApi

    },
    async writeCalendarAxios(calendarlist) {

        // calendarlist= [
        //     {
        // id: String(1),
        // name: 'My Calendar',
        // color: '#ffffff',
        // bgColor: '#9e5fff',
        // dragBgColor: '#9e5fff',
        // borderColor: '#9e5fff',
        // checked : true
        //   ]

        if (!calendarlist)
            return "empty";
        const writeApi = await axios
            .post("http://localhost:3000/file/writecalendarlist", [{
                id: calendarlist.id,
                name: calendarlist.name,
                color: calendarlist.color,
                bgColor: calendarlist.bgColor,
                dragBgColor: calendarlist.dragBgColor,
                borderColor: calendarlist.borderColor,
                checked: true
            }, ])
            .then((response) => (this.info = response))
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
        console.log(writeApi);


        return await this.readCalendarAxios();
    },
    async readScheduleAxios() {


        const readApi = await axios
            .get("http://localhost:3000/file/readschedulelist")
            .then((response) => (this.info = response))
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
        console.log(readApi);

        return readApi
    },
    async writeScheduleAxios(schedulelist) {

        // calendarlist= [
        //     {
        //       id: "1",
        //       calendarId: "1",
        //       title: "coding schedule",
        //       category: "time",
        //       dueDateClass: "",
        //       start: new Date(new Date().setHours(start.getHours() - 7)),
        //       end: new Date(new Date().setHours(start.getHours())),
        //     },
        //   ]

        if (!schedulelist)
            return "empty";
        const writeApi = await axios
            .post("http://localhost:3000/file/writeschedulelist", [{
                id: schedulelist.id,
                calendarId: schedulelist.calendarId,
                title: schedulelist.title,
                dueDateClass: schedulelist.dueDateClass,
                dragBgColor: schedulelist.dragBgColor,
                start: schedulelist.start,
                end: schedulelist.end
            }, ])
            .then((response) => (this.info = response))
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
        console.log(writeApi);


        return await this.readScheduleAxios();
    }
}
module.exports = calendarinfo;