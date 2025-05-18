# Analizador Sintáctico - ECMAScriptMini (51938)

Este proyecto consiste en la construcción de un analizador sintáctico utilizando **ANTLR4** para una versión reducida del lenguaje **ECMAScript**. El objetivo es reconocer estructuras básicas del lenguaje como declaraciones de variables, expresiones, sentencias condicionales y llamadas a `console.log`.

## 📁 Estructura del Proyecto

- `ECMAScriptMini.g4`: Gramática definida en ANTLR4.
- `generated/`: Carpeta con los archivos generados por ANTLR4 (parser, lexer y visitor).
- `index.js`: Archivo principal que ejecuta el análisis sintáctico sobre un archivo de entrada.
- `input_correcto_1.txt` / `input_correcto_2.txt`: Archivos con ejemplos sintácticamente **correctos**.
- `input_incorrecto_1.txt` / `input_incorrecto_2.txt`: Archivos con ejemplos sintácticamente **incorrectos**.
- `package.json`: Archivo de configuración del proyecto Node.js.
- `README.md`: Este archivo.

## 🚀 Instalación y Uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/Nuno000/51938.git
cd 51938

# 2. Instalar dependencias
npm install

# 3. Generar los archivos de ANTLR (si es necesario)
java -jar antlr-4.13.2-complete.jar ECMAScriptMini.g4 -Dlanguage=JavaScript -o generated -visitor

# 4. Ejecutar el analizador con un archivo de entrada
node index.js 

```
Antes de hacer el punto 4, asegurate de que haya algo en el input.txt. Como por ejemplo, el "input_correcto_1.txt".
También, asegurate de tener el archivo antlr-4.13.2-complete.jar en el directorio del proyecto o usar la ruta correcta.
Podés probar con cualquier archivo .txt de entrada, correcto o incorrecto.


