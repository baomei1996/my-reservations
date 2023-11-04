export function getFormattedDate(date: Date): string {
    // MMM d, hh:mm a
    const month = monthToString(date.getMonth());
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12;
    const hourStr = hour12 === 0 ? "12" : hour12.toString();
    const minuteStr = minute < 10 ? "0" + minute : minute.toString();

    return `${month} ${day}, ${hourStr}:${minuteStr} ${ampm}`;
    return "";
}

function monthToString(month: number): string {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        default:
            return "December";
    }
}
