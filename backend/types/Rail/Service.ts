import RailStation from "./Station";

interface ServiceOperator {
    name: string;
    code: string;
    homepageUrl: string;
}

interface ServiceTime {
    // Todo: convert into Date instances for math
    scheduled: string;
    expected: string;
    onTime: boolean;
}

export class CallingPoint {
    station: RailStation;
    cancelled: boolean;
    time: ServiceTime;

    constructor(station: RailStation, cancelled: boolean, time: ServiceTime) {
        this.station = station;
        this.cancelled = cancelled;
        this.time = time;
    }
}

export class Service {
    serviceType: string;
    serviceID: string;
    retailServiceID: string;
    operator: ServiceOperator;
    stationOrigin: RailStation;
    stationDestination: RailStation;
    cancelled: boolean;
    time: ServiceTime;
    callingPoints: CallingPoint[];
    direct: boolean;

    constructor(
        serviceType: string,
        serviceID: string,
        retailServiceID: string,
        operator: ServiceOperator,
        stationOrigin: RailStation,
        stationDestination: RailStation,
        cancelled: boolean,
        time: ServiceTime,
        callingPoints: CallingPoint[],
        direct: boolean
    ) {
        this.serviceType = serviceType;
        this.serviceID = serviceID;
        this.retailServiceID = retailServiceID;
        this.operator = operator;
        this.stationOrigin = stationOrigin;
        this.stationDestination = stationDestination;
        this.cancelled = cancelled;
        this.time = time;
        this.callingPoints = callingPoints;
        this.direct = direct;
    }
}
