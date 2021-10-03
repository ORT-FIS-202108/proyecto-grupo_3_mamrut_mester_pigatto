# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

## Repositorio Git

Creación y uso de repositorios locales y remotos

Comandos Git ejecutados desde terminal y desde el IDE

## Versionado

### Buenas prácticas de versionado

Al crear nuevas ramas se deberá seguir el siguiente criterio. 

 <ul><li>feature/<nombre>: para crear nuevas funcionalidades.</li><li>BUG/<nombre>: para corregir errores.</li></ul>

Será necesario realizar commits con mensajes claros, breves y descriptivos. Estos mensajes deberán ser escritos en español. En cada commit se deberá especificar cuál es la acción que se está realizando. Para ello se utilizarán las palabras clave "agregar", "cambiar", "arreglar", "quitar" al principio de cada mensaje de commit.

### Uso de ramas separadas de 'main'

Para el desarrollo del proyecto se tomó la decisión de trabajar en una rama secundaria llamada "Develop". Es así que todas las ramas generadas durante el transcurso del mismo serán mergeadas a Develop en una primera instancia, para luego, una vez que el proyecto se encuentre en su versión final, poder mergear esta rama a la rama "main".

### Resumen de commits y evolución del proyecto

Resumen de commits y evolución del proyecto

## Elicitación

### Evidencia de actividades de investigación

### Técnica de elicitación
#### Ingeniería reversa

Utilizaremos la ingeniería reversa para definir aspectos importantes que tendremos en cuenta a la hora de establecer los requerimientos de nuestra aplicación. Observamos la aplicación ZCuentas. Se trata de una aplicación para el registro de ingresos y gastos desarrollada en Uruguay pensada para el público local.

##### Elementos positivos:
<ul><li>Al agregar un gasto el sistema asigna por defecto la fecha de ese día <li>La aplicación tiene conceptos predefinidos y además permite que el usuario agregue sus conceptos personalizados.<li>Se prevee el pago con efectivo, débito y crédito. Para este último se puede asignar el número de pagos.<li>Posibilidad de asignar recordatorios para recordar realizar pagos y cancelar deudas<li>Permite agregar cuentas en moneda extranjera.</ul>
	
##### Elementos negativos:

<li>No permite agregar gastos periódicos que se repitan de forma automática.
<li>Al ingresar un gasto los conceptos se ordenan alfabéticamente en lugar de hacerlo por frecuencia de gastos, lo que resulta poco práctico.</li>

<br>
<br>


Referencias a fuentes de información

Caracterización de usuarios: User Personas

Modelo conceptual del problema

## Especificación

Definición de requerimientos funcionales y no funcionales

User Stories / Use Cases detallados

Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



