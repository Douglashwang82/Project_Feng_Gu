# from django.db import models
from djongo import models

# Create your models here.

class Appointment(models.Model):
    AppointmentId = models.AutoField(primary_key=True)
    AppointmentMake = models.CharField(max_length=100, null=True)
    AppointmentModel = models.CharField(max_length=100, null=True)
    AppointmentYear = models.CharField(max_length=4, null=True)
    AppointmentVIN = models.CharField(max_length=30, null=True)
    AppointmentEmail= models.EmailField(null=True)
    AppointmentServices = models.JSONField(null=True)
    AppointmentDate = models.CharField(max_length=30, null=True)