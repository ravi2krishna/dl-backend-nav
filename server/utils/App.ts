export class App {
    private static uniqueId: number = 0;

    public static UniqueNumber(): string {
        var time: number = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { ; }
            time = new Date().getTime();;
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    }

    public static Send(req, res, promise) {
        var respObj: any = {};
        promise.then(data => {
            respObj.status = 1;
            respObj.data = data;
            res.jsonp(respObj);
        }).catch(err => {
            console.log(err);
            respObj.status = 0;
            respObj.error = err;
            res.jsonp(respObj);
        });
    }

    public static DaysBack(date: Date, days: number) {
        date = new Date(date);
        date.setDate(date.getDate() - days);
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return date;
    }

    public static DaysDiff(d1: Date, d2: Date): number {
        var t2: number = d2.getTime();
        var t1: number = d1.getTime();
        let diff: any = (t2 - t1) / (24 * 3600 * 1000);
        return parseInt(diff);
    }
}
