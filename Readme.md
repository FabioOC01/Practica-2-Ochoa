Estructura del proyecto


docker-app/
├── docker-compose.yml       
Configuración de Docker Compose
├── frontend/              
Servicio frontend
│   ├── Dockerfile           
Instrucciones para construir la imagen Docker
│   └── index.html           
Página web principal
├── backend/                 
 Servicio backend
│   ├── Dockerfile           
Instrucciones para construir la imagen Docker
│   └── app.js               
 Aplicación Express.js
└── database/                
 Servicio de base de datos
    └── init.sql             
 Script SQL para inicializar la base de datos

Requisitos previos

Docker y Docker Compose instalados en el sistema
Puertos 3000 (backend) y 4000 (frontend) disponibles
En un entorno de AWS EC2: configura los puertos 3000 y 4000 en el grupo de seguridad

Instalación y uso

Clonar el repositorio o crear los archivos manualmente
bashmkdir -p docker-app/{frontend,backend,database}
cd docker-app
# Crear los archivos según lo indicado en la estructura

Construir e iniciar los contenedores
bashdocker compose up -d

Acceder a la aplicación

Frontend: http://localhost:4000 (o la IP pública del servidor en el puerto 4000)
Backend API: http://localhost:3000 (o la IP pública del servidor en el puerto 3000)


Detener la aplicación
bashdocker compose down