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

        return readApi.data

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
        const calendaritem = calendarlist[0]
        if (!calendarlist)
            return "empty";
        const writeApi = await axios
            .post("http://localhost:3000/file/writecalendarlist", [{
                id: calendaritem.id,
                name: calendaritem.name,
                color: calendaritem.color,
                bgColor: calendaritem.bgColor,
                dragBgColor: calendaritem.dragBgColor,
                borderColor: calendaritem.borderColor,
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
            .get("http://localhost:3000/file/readschedule")
            .then((response) => (this.info = response))
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
        console.log(readApi);
        console.log(readApi.data);
        return readApi.data
    },
    async writeScheduleAxios(schedulelist) {
        console.log(schedulelist);
        // schedulelist= [  category是寫死的 time task milestone
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
        const scheduleitem = schedulelist[0]
        const writeApi = await axios
            .post("http://localhost:3000/file/writeschedule", [{
                id: scheduleitem.id,
                calendarId: scheduleitem.calendarId,
                title: scheduleitem.title,
                dueDateClass: scheduleitem.dueDateClass,
                category: scheduleitem.category,
                start: scheduleitem.start,
                end: scheduleitem.end
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