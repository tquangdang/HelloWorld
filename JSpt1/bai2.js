function namNhuan(year) {
    if (year % 4 == 0) {
        console.log("nam " + year + " la nam nhuan")
    } else {
        console.log("nam " + year + " khong phai nam nhuan")
    }
}
namNhuan(2020)