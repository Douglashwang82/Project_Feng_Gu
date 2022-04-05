from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from appointment.serializers import AppointmentSerializer
from appointment.models import Appointment
import datetime

# email
from django.core.mail import send_mail
from django.conf import settings
from appointment.emailformat import EmailFormat

# from appointment.emailservices import SendEmail
# Create your views here.

@csrf_exempt
def appointmentApi(request, id=0):
    if request.method == 'GET':
        appointment = Appointment.objects.all()
        appointment_serializer = AppointmentSerializer(appointment, many=True)
        print("Calling Appointment", appointment_serializer.data)
        return JsonResponse(appointment_serializer.data, safe=False)
    elif request.method == 'POST':
        print("here")
        appointment_data = JSONParser().parse(request)
        appointment_data["AppointmentDate"] = datetime.datetime.now().ctime()
        appointment_serializer = AppointmentSerializer(data=appointment_data)
        if appointment_serializer.is_valid():
            appointment_serializer.save()
            # send email
            subject = 'Email From Django'
            message = "Email:{}\n Make:{}\n Model:{}\n Services:{}".format(appointment_serializer.data['AppointmentEmail'],
            appointment_serializer.data['AppointmentMake'],appointment_serializer.data['AppointmentModel'],appointment_serializer.data['AppointmentServices'])
            message = EmailFormat(email = appointment_serializer.data['AppointmentEmail'], make = appointment_serializer.data['AppointmentMake'], model = appointment_serializer.data['AppointmentModel']
            , year = appointment_serializer.data['AppointmentYear'], services = appointment_serializer.data['AppointmentServices'], vin = appointment_serializer.data['AppointmentVIN']
            )
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ['fengautoemailservices@gmail.com', ]
            send_mail(subject, message, email_from, recipient_list)

            return JsonResponse("Added Successfully:Appointment", safe=False)
        print(appointment_serializer.errors)
        return JsonResponse("Fail to Add:Appointment", safe=False)
    elif request.method == 'PUT':
        appointment_data = JSONParser().parse(request)
        appointment = Appointment.objects.get(
            AppointmentId=appointment_data['AppointmentId'])
        appointment_serializer = AppointmentSerializer(
            appointment, data=appointment_data, partial=True)
        if appointment_serializer.is_valid():
            appointment_serializer.save()
            return JsonResponse("Updated Successfully:Appointment", safe=False)
        print(appointment_serializer.errors)
        return JsonResponse("Faild to Update:Appointment", safe=False)
    elif request.method == 'DELETE':
        appointment = Appointment.objects.get(AppointmentId=id)
        appointment.delete()
        return JsonResponse("Deleted Successfully:Appointment", safe=False)
    elif request.method =='OPTIONS':
        print(request.method)
        print("hrer for no reason")
        return JsonResponse("something")