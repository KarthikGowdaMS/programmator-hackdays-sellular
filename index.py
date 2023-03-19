import socket

sock =socket.socket()

print("connecting to server")
sock.connect(('localhost',5000))

print("connected")

message=''
while message!='wq':
    message = str(input('>>>'))
    sock.send(message.encode('utf-8'))

print("connection closed")