import socket
<<<<<<< HEAD

sock =socket.socket()

sock.bind(('localhost',5000))
print("server started")

sock.listen(100)

con, addr=sock.accept()

print("connection made at :",str(addr[0]))
message=""
while message!="wq":
    message=con.recv(1024).decode('utf-8')
    print(message)

print("server closed")
con.close()
sock.close()
=======
s = socket.socket()
print('Socket succesfully created')
port = 42381
s.bind(('', port))
print(f'socket binded to port{port}')
s.listen(5)
print('Socket is listening')
while True:
    c, addr = s.accept()
    print('Got connection from', addr)
    message = ('Thank you for connecting')
    c.send(message.encode())
    c.close()
>>>>>>> b734deda2ac332278260026c977d05dcc87a28fd
