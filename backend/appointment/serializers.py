from rest_framework import serializers
from appointment.models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ("AppointmentId", "AppointmentMake","AppointmentModel","AppointmentYear","AppointmentVIN","AppointmentEmail","AppointmentServices","AppointmentDate")
    