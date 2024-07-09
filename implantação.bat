@echo off
echo Verificando a instalacao do Node.js e npm...

node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js e npm nao encontrados. Instalando Node.js e npm...
    REM Baixar e instalar Node.js (inclui npm)
    powershell -Command "Start-Process 'msiexec.exe' -ArgumentList '/i https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi /quiet /norestart' -NoNewWindow -Wait"
)

echo Clonando o repositorio...
git clone https://github.com/GregGregK/ReciclaMaisFloripa.git

echo Navegando ate o diretorio do projeto...
cd ReciclaMaisFloripa

echo Instalando as dependencias e bibliotecas...
npm install

echo Iniciando o projeto...
npm start

pause