import mysql.connector
from database_secrets import DATABASE_NAME
from database_secrets import PASSW
from database_secrets import PORT


globalConnection = MySQLdb.connect(
    db=DATABASE_NAME,
    user="root",
    password=PASSW,
    host="localhost",
    port=PORT
)
globalCursor = globalConnection.cursor()

# Function to get user roles by user ID
def get_user_roles(user_id):
    cursor = conn.cursor(dictionary=True)
    query = "SELECT role FROM user_roles WHERE user_id = %s"
    cursor.execute(query, (user_id,))
    roles = [row['role'] for row in cursor.fetchall()]
    cursor.close()
    return roles

# Example usage:
user_id = 1
roles = get_user_roles(user_id)
print("User roles:", roles)

# Close the database connection when done
conn.close()
