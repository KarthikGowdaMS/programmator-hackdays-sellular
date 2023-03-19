import socket

HOST = '127.0.0.1' # replace with the IP address of the chatroom server
PORT = 5000 # replace with the port number that the chatroom is listening on

file_path = './index.html'

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))

    # send the filename first
    filename = file_path.split('/')[-1]
    s.sendall(filename.encode())
    print(filename)
    # send the file data
    with open(file_path, 'rb') as f:
        data = f.read(1024)
        
        while data:
            s.sendall(data)
            data = f.read(1024)

print('File sent successfully')