import threading
import socket
alias = input('Choose an alias >>> ')
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('3.6.98.232', 13840))


def client_receive():
    while True:
        try:
            message = client.recv(1024).decode('utf-8')
            if message == "alias?":
                client.send(alias.encode('utf-8'))
            else:
                print(message)
        except:
            print('Error!')
            client.close()
            break


def client_send():
    while True:
        message = f'{alias}: {input("")}'
        client.send(message.encode('utf-8'))


receive_thread = threading.Thread(target=client_receive)
receive_thread.start()

send_thread = threading.Thread(target=client_send)
send_thread.start()

file_path = 'D:\Programmator_Hackdays@Sellular\index.html'

# send the filename first
filename = file_path.split('/')[-1]
client.sendall(filename.encode())

# send the file data
with open(file_path, 'rb') as f:
    data = f.read(1024)
    while data:
        client.sendall(data)
        data = f.read(1024)

print('File sent successfully')
