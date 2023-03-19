import socket
import os

HOST = '127.0.0.1' # replace with the server's IP address
PORT = 5000 # replace with the port number to listen on

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print(f'Listening on {HOST}:{PORT}')

    conn, addr = s.accept()
    print(f'Connected by {addr}')

    # receive the filename
    filename = conn.recv(1024).decode()
    print(f'Receiving file {filename}')

    # create the directory if it doesn't exist
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # receive the file data
    with open(filename, 'wb') as f:
        data = conn.recv(1024)
        while data:
            f.write(data)
            data = conn.recv(1024)

    print('File received successfully')
