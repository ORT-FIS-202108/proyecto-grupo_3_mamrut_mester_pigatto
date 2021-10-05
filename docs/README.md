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
<ul><li>Al agregar un gasto el sistema asigna por defecto la fecha de ese día.</li><li>La aplicación tiene conceptos predefinidos y además permite que el usuario agregue sus conceptos personalizados.</li><li>Se prevee el pago con efectivo, débito y crédito. Para este último se puede asignar el número de pagos.</li><li>Posibilidad de asignar recordatorios para recordar realizar pagos y cancelar deudas.</li><li>Permite agregar cuentas en moneda extranjera.</li></ul>
	
##### Elementos negativos:

<ul><li>No permite agregar gastos periódicos que se repitan de forma automática.</li><li>Al ingresar un gasto los conceptos se ordenan alfabéticamente en lugar de hacerlo por frecuencia de gastos, lo que resulta poco práctico.</li></ul>

#### Cuestionario

Con el objetivo de obtener un mejor entendimiento acerca de cuáles eran los factores más relevantes para el mercado en una aplicación de registro de gastos, realizamos un cuestionario dirigido al público objetivo de la aplicación. Para esto fue necesario definir el mismo, que lo ubicamos en jóvenes entre 18 y 30 años, es decir, aquellas personas que se encuentran ingresando al mercado laboral, que no necesariamente tienen personas a cargo, y que deben comenzar a manejar sus finanzas personales de manera independiente. 

Del cuestionario realizado se desprenden algunas conclusiones interesantes. En primer lugar, es importante destacar que si bien cerca del 50% de los encuestados no consideran tener dificultades para balancear sus ingresos y gastos, aproximadamente el 80% contestó que sí cree que una aplicación de registro de gastos le resultaría beneficiosa, cuando solo el 15% indicó utilizar alguna aplicación de este estilo actualmente. De esto podemos entender que existe una porción del mercado interesada en consumir una aplicación como MisGastos. 

Por otra parte, otro objetivo del cuestionario realizado era el de consultar con el público por determinadas funcionalidades interesantes para incorporar en la aplicación. De acuerdo a las respuestas obtenidas, las cuatro funcionalidades más relevantes serían las siguientes:

 <ul><li>Visualizar gráficamente los gastos del período.</li><li>Fijar metas de ahorro mensual.</li><li>Posibilidad de ingresar gastos fijos mensuales.</li><li>Gastos en más de una moneda.</li></ul>

Finalemente, en el cuestionario se consultó acerca de incorporar una funcionalidad para que el usuario pueda recibir notificaciones diarias a modo de recordatorio para registrar los gastos incurridos en cada día. Aproximadamente el 80% de las respuestas fueron favorables. 

A continuación se presenta la evidencia correspondiente sobre el cuestionario realizado. 

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



