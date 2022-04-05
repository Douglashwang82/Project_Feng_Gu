import smtplib
import ssl

# sender_email = "fengautoemailservices@gmail.com"
# receiver_email = "douglas821209@gmail.com"
# message = """\
# Subject: Hi there

# This message is sent from Python."""

# port = 465

# password = input("password:")

# context = ssl.create_default_context()

# with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
#     server.login("fengautoemailservices@gmail.com", password)
#     server.sendmail(sender_email, receiver_email, message)


class SendEmail:
    _port = 465
    _password = "Feng8888"
    _context = ssl.create_default_context()

    def __init__(self, sender = "fengautoemailservices@gmail.com", receiver="fengautoemailservices@gmail.com", message=""):
        self.sender = sender
        self.receiver = receiver
        self.message = message

    def send_email(self):
        with smtplib.SMTP_SSL("smtp.gmail.com", self._port, context=self._context) as server:
            server.login("fengautoemailservices@gmail.com", self._password)
            server.sendmail(self.sender, self.receiver, self.message)
