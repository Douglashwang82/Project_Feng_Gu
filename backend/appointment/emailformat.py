def EmailFormat(make, model, email, year, services, vin):
    res = " Email:\t\t{}\n Make:\t\t{}\n Model:\t\t{}\n Year:\t\t{}\n VIN:\t\t{}\n Servoces:\t\t{}\n".format(email, make, model, year, vin, services)
    return res 