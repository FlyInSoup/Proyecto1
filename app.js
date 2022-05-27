function calculateDaysBetweenDates(begin, end){
    var date1 = new Date(begin);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

// do funtion to calculate days between dates
// dates must be only from 1900-01-01 to 2100-01-01
// begin and end must be in format DD-MM-YYYY
function calculateDaysBetweenDates(begin, end){
    var date1 = new Date(begin);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

//rev
