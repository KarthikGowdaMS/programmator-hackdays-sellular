import socket

HOST = '3.6.98.232' # replace with the server's IP address
PORT = 13840 # replace with the port number to connect to
FILENAME = 'index.html' # replace with the name of the file you want to send

# check if the file name is valid
if any(c in FILENAME for c in '/\\:'):
    print(f'Error: invalid file name {FILENAME}')
    exit()

# check if the file name is too long
if len(FILENAME) > 255:
    print(f'Error: file name is too long {FILENAME}')
    exit()

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))

    # send the filename
    
    s.sendall(FILENAME.encode())

    # send the file contents
    with open(FILENAME, 'rb') as f:
        data = f.read(1024)
        while data:
            s.sendall(data)
            data = f.read(1024)

    print('File sent successfully')
