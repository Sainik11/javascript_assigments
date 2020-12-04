
    var dob ='01/01/2000' ;
    var split = dob.split("/");
    var month = split[0];
    var day = split[1];
    var year = split[2];
    var dob_as_date = new Date(year, month, day);
    var today = new Date();
    var m_diff = Math.abs(today.getTime() - dob_as_date.getTime());
    var age = (m_diff / (1000 * 3600 * 24 * 365.25));
    within_age_range=(14<age & age<24);

alert(age);





