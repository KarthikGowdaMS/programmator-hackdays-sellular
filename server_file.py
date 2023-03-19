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
    if not filename:
        print('Error: empty filename')
        conn.close()
        exit()

    # check if the file name is valid
    if any(c in filename for c in '/\\:'):
        print(f'Error: invalid file name {filename}')
        conn.close()
        exit()

    # check if the file name is too long
    if len(filename) > 255:
        print(f'Error: file name is too long {filename}')
        conn.close()
        exit()

    print(f'Receiving file {filename}')

    # create the directory if it doesn't exist
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # receive the file data
    filedata = b''
    while True:
        data = conn.recv(1024)
        if not data:
            break
        filedata += data

    with open(filename, 'wb') as f:
        f.write(filedata)

    print('File received successfully')
