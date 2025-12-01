import secrets
import string

def generate_secret_key():
    characters = string.ascii_letters + string.digits + "!@#$%^&*"
    return ''.join(secrets.choice(characters) for _ in range(50))

print("Nouvelle DJANGO_SECRET_KEY:")
print(generate_secret_key())