interface EventTime {
    start : number,
    end: number,
}

interface Speaker {
    name : string,
    twitterId? : string,
    image? : string,
    website?: string,
}

interface Agenda {
    description : string,
    timeSlot : EventTime,
    speaker : Speaker,
}
interface Venue {
    location : string,
    eventTime : EventTime,
    registrationLink : string,
    agenda : Agenda,
}

export {EventTime, Speaker, Agenda, Venue}