from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from appointment.serializers import AppointmentSerializer
from appointment.models import Appointment
import datetime
# Create your views here.

@csrf_exempt
def appointmentApi(request,id = 0):
    if request.method == 'GET':
        appointment = Appointment.objects.all()
        appointment_serializer = AppointmentSerializer(appointment, many = True)
        print("Calling Appointment", appointment_serializer.data)
        return JsonResponse(appointment_serializer.data, safe = False)
    elif request.method == 'POST':
        print("here")
        appointment_data = JSONParser().parse(request)
        appointment_data["AppointmentDate"] = datetime.datetime.now().ctime()
        appointment_serializer = AppointmentSerializer(data = appointment_data)
        if appointment_serializer.is_valid():
            appointment_serializer.save()
            return JsonResponse("Added Successfully:Appointment", safe = False)
        print(appointment_serializer.errors)
        return JsonResponse("Fail to Add:Appointment", safe = False)
    elif request.method == 'PUT':
        appointment_data = JSONParser().parse(request)
        appointment = Appointment.objects.get(AppointmentId = appointment_data['AppointmentId'])
        appointment_serializer = AppointmentSerializer(appointment, data = appointment_data, partial=True)
        if appointment_serializer.is_valid():
            appointment_serializer.save()
            return JsonResponse("Updated Successfully:Appointment", safe = False)
        print(appointment_serializer.errors)
        return JsonResponse("Faild to Update:Appointment", safe = False)
    elif request.method == 'DELETE':
        appointment=Appointment.objects.get(AppointmentId=id)
        appointment.delete()
        return JsonResponse("Deleted Successfully:Appointment",safe=False)