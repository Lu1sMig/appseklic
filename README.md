# appseklic
Aplicación de consulta de licencia OCR 


# Kyocera OCR License Lookup

Este es un pequeño proyecto web para consultar licencias OCR de equipos Kyocera Taskalfa Rango A3 usando datos desde un archivo JSON.

## 📦 Contenido del proyecto

- `index.html` → página principal  
- `styles.css` → estilos CSS  
- `script.js` → lógica JavaScript para buscar datos  
- `data.json` → archivo con los datos de serie, licencia, orden de compra, etc.

## 🚀 Cómo usarlo

1️⃣ **Clonar el repositorio o subir los archivos a GitHub**

Sube todos los archivos (`index.html`, `styles.css`, `script.js`, `data.json`) a un repositorio nuevo en GitHub.

---

2️⃣ **Habilitar GitHub Pages**

- Ve a tu repositorio en GitHub.
- Entra a **Settings** → **Pages**.
- En **Source**, selecciona la rama principal (`main` o `master`) y la carpeta raíz (`/`).
- Guarda.

GitHub generará un enlace como:  
`https://<tu-usuario>.github.io/<nombre-repositorio>/`

---

3️⃣ **Abrir en el navegador**

Visita ese enlace, y ya podrás consultar las licencias ingresando el número de serie.

---

## ⚙️ Cómo agregar más datos

Edita el archivo `data.json` y agrega más bloques de datos siguiendo la misma estructura.

Ejemplo:

```json
{
    "NReg": "4",
    "ID_OC": "2022-01117",
    "oc": "1117",
    "OC_fecha": "",
    "MODELO": "TASKalfa 6004i",
    "COD_PAT": "",
    "COD_BARRA": "",
    "serie": "H6J2X00615",
    "LIC_ITEM": "4",
    "SOFTWARE": "SCAN EXTENSION KIT (A)",
    "LICENCIA_VENDIDA": "XXXX-XXXX-XXXX-XXXX",
    "LICENCIA_GENERADA": "YYYY-YYYY-YYYY-YYYY",
    "FECHA_GENERACION": "10/02/2023",
    "GuiasRemisionRemitente": "",
    "RUC_EMPRESA": "",
    "EMPRESA": "",
    "TELF1": "",
    "TELF2": "",
    "DEPENDENCIA": "",
    "DF": ""
}
