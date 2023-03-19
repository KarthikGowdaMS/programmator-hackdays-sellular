import socket

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