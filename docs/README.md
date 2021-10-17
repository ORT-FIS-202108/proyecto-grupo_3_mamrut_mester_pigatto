# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

## Repositorio Git

### Creación y uso de repositorios locales y remotos

Para poder trabajar en el proyecto, cada integrante del equipo debió clonar el repositorio remoto, provisto por la cátedra, en su computadora, para así poder trabajar de manera local e independiente. Al momento de crear nuevas ramas es importante tener la rama de desarrollo local actualizada con la última versión de esta en el repositorio remoto para que no se pierdan las actualizaciones. 

### Comandos Git ejecutados desde terminal y desde el IDE

Para trabajar en el projecto los comandos de Git utilizados fueron los siguientes:

 <ul>
 <li>git clone 'url': para clonar el repositorio remoto</li>
 <li>git status: muestra la rama en la que nos encontramos posicionados y el estado de los archivos, si hubo modificaciones, si estas se encuentran en el area de stage o no y si hay algo para commitear</li>
 <li>git log: muestra el historial de commits de la rama actual </li>
 <li>git branch 'rama': crea una nueva rama con el nombre especificado </li>
 <li>git checkout 'rama': se posiciona en la rama especificada </li>
 <li>git checkout -b 'rama': crea una nueva rama con el nombre especificado y se posiciona en ella </li>
 <li>git add . : para agregar los archivos modificados al área de stage</li>
 <li>git commit -m 'mensaje': para guardar los cambios de los archivos en el área de stage en el repositorio local</li>
 <li>git push origin 'rama' : actualiza el repositorio remoto con los cambios locales</li>
 <li>git pull: actualiza el repositorio local con los últimos cambios del repositorio remoto (realiza un fetch y merge de la rama)</li>
 </ul>

Los merges fueron realizados desde GitHub. 

## Versionado

### Buenas prácticas de versionado

Al crear nuevas ramas se deberá seguir el siguiente criterio. 

 <ul><li>feature/<nombre>: para crear nuevas funcionalidades.</li><li>BUG/<nombre>: para corregir errores.</li></ul>

Será necesario realizar commits con mensajes claros, breves y descriptivos. Estos mensajes deberán ser escritos en español. En cada commit se deberá especificar cuál es la acción que se está realizando. Para ello se utilizarán las palabras clave "agregar", "cambiar", "arreglar", "quitar" al principio de cada mensaje de commit.

### Uso de ramas separadas de 'main'

Para el desarrollo del proyecto se tomó la decisión de trabajar en una rama secundaria llamada "Develop". Es así que todas las ramas generadas durante el transcurso del mismo serán mergeadas a Develop en una primera instancia, para luego, una vez que el proyecto se encuentre en su versión final, poder mergear esta rama a la rama "main".

### Resumen de commits y evolución del proyecto

[Ver resumen de commits y evolución del proyecto](https://github.com/ORT-FIS-202108/proyecto-grupo_3_mamrut_mester_pigatto/graphs/commit-activity)

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

### Referencias a fuentes de información

A modo de investigación decidimos analizar el funcionamiento de algunas aplicaciones de registro de gastos, o similares, existentes en el mercado. A pesar que en el punto de ingeniería reversa nos enfocamos en la aplicación uruguaya ZCuentas, también utilizamos como referencia algunas aplicaciones como Mobills, iGasto y MoneyControl. 

Por otra parte, como se mencionó anteriormente, también realizamos un cuestionario dirigido al público objetivo, que se encuentra en jóvenes entre 18 y 30 años.

A continuación se encuentran disponibles los resultados obtenidos a partir la investigación realizada. 

[Evidencia investigación](./investigacion/README.md)

Caracterización de usuarios: User Personas

### Modelo conceptual del problema

<img src="./images/modeloConceptual.png" width="350">

## Especificación

### Requerimientos funcionales y no funcionales

#### Requerimientos funcionales

<ol><li>El usuario debera poder registrarse en el sistema.</li><li>El usuario debe poder ver dentro de la aplicacion sus gastos e ingresos de forma ordenada.</li><li>El usuario tiene la posibilidad de crear recordatorios para recordar registrar sus gastos.</li><li>El usuario debe poder loggearse a su cuenta ingresando su usuario y contraseña.</li><li>El usuario debe poder escanear facturas para que sus gastos queden registrados.</li><li>El usuario debe poder ingresar gastos de forma manual.</li><li>El sistema debe permitir el ingreso de gastos en pesos uruguayos y en dólares americanos.</li><li>El usuario debe poder establecer topes de gastos por categoría mensual, y ser notificado en caso de sobrepasar esos límites.</li><li>El usuario debe poder ingresar gastos recurrentes una única vez y luego verlos cada mes en el reporte de gastos.</li></ol>

#### Requerimientos no funcionales

<ol><li>La aplicacion debera funcionar en IOS y Android.</li><li>El sistema debera soportar multiples usuarios concurrentes.</li><li>El sistema sera programado en Javascript.</li><li>Se utilizará como color pirmario Deep Purple 700 y como secundario Teal 700</li><li>La fuente a utilizar será Roboto.</li></ol>

### User Stories

ID: #1

Título: Registro de usuarios

Narrativa: Como usuario quiero poder registrame como usuario de la aplicación para poder mantener mi cuenta de registro de gastos.

Criterios de aceptación: 

<ul><li>El nombre de usuario debe ser un email.</li><li>La contraseña debe tener al menos ocho caracteres y un número.</li><li>Será necesario confirmar la contraseña ingresada para completar el proceso de registro.</li></ul>

ID: #2

Título: Ingreso al sistema

Narrativa: Como usuario quiero poder loggearme utilizando mi email y contraseña para poder acceder a mi cuenta.

Criterios de aceptación: 

<ul><li>Si se ingresa una contraseña incorrecta el sistema deberá notificar al usuario y proveer la opción de setear una nueva.</li></ul>

ID: #3

Título: Ingreso de gastos

Narrativa: Como usuario quiero poder ingresar gastos de forma manual para poder verlos en el resumen de gastos.

Criterios de aceptación: 

<ul><li>El usuario deberá ingresar una referencia asociada al gasto, el monto y asignarle una categoría.</li></ul>

ID: #4

Título: Gastos en múltiples monedas

Narrativa: Como usuario quiero poder ingresar gastos en pesos uruguayos y en dólares americanos para poder hacer un seguimiento de mis gastos en la moneada en que fueron realizados.

Criterios de aceptación: 

<ul><li>El registrar un gasto nuevo, el sistema debe solicitar que se seleccione una moneda, pesos uruguayos o dólares americanos.</li></ul>

ID: #6

Título: Topes de gastos

Narrativa: Como usuario quiero poder definir topes mensuales por categoría de gastos para poder controlar los gastos a realizar por categoría.

Criterios de aceptación: 

<ul><li>El sistema debe permitir fijar topes en pesos uruguayos y en dólares americanos.</li></ul>

ID: #7

Título: Notificaciones por topes de gastos

Narrativa: Como usuario quiero ser notificado en caso de exceder algún tope de gasto establecido para algunas de mis categorías para tener conocimiento sobre el cumplimiento de mis metas mensuales.

Criterios de aceptación: 

<ul><li>La notificación deberá ser visible desde la página de inicio.</li></ul>

ID: #8

Título: Gastos recurrentes

Narrativa: Como usuario quiero poder ingresar gastos recurrentes para no tener la necesidad de registrarlos cada mes.

Criterios de aceptación: 

<ul><li>El gasto ingresado deberá figurar en el resumen de gastos mensual sin necesidad de que el usuario lo ingrese nuevamente.</li></ul>

ID: #9

Título: Manejo gastos recurrentes

Narrativa: Como usuario quiero poder editar y eliminar gastos recurrentes para poder ajustarlos de acuerdo a su evolución.

Criterios de aceptación: 

<ul><li>Solamente se podrá editar el monto del gasto.</li><li>En el listado de gastos recurrentes debe verse un botón que permita eliminarlos automáticamento.</li></ul>

ID: #10

Título: Creación categorías de gastos

Narrativa: Como usuario quiero poder crear nuevas categorías de gastos para que las categorías reflejen adecuadamente el concepto de mis gastos.

Criterios de aceptación: 

<ul><li>El sistema deberá solicitar que se ingrese el nombre de la nueva categoría.</li></ul>

### Use Cases

Título: Registrar nuevo usuario

Actor: Usuario

Curso normal:

|           Acción de los actores       |                   Respuesta del sistema                     |
| ------------------------------------- | ----------------------------------------------------------- |
| 1. Selecciona 'registrarse'           | 2. Despliega pantalla con formulario de registro de usuarios|
| 3. Completa formulario de registro    | 4. Chequea formatos                                         |
| 5. Presiona botón 'registrarse'       | 6. Confirma registro de usuario exitoso e inicia sesión del usuario, redirige a pantalla de inicio |

Cursos alternativos:

3.1. El usuario ingresa una fecha de nacimiento correspondiente a una edad menor a 10 años o mayor a 100: el sistema arroja un error indicando que se debe ingresar una fecha de nacimiento válida.

3.2. El correo electrónico ingresado ya es utilizado por otro usuario: el sistema arroja error indicando que ya existe un usuario utilizando esa dirección en el sistema.

3.3. La contraseña ingresada no cumple con todos los requisitos necesarios: el sistema arroja error indicando que la contraseña indicando qué requisitos debe tener una contraseña válida. 

3.4. El campo 'verificar contraseña' no coincide con la contraseña ingresada: el sistema arroja un error indicando que los dos campos deben ser iguales.

Título: Inicio de sesión

Actor: Usuario

Curso normal:

|           Acción de los actores       |                        Respuesta del sistema                       |
| ------------------------------------- | ------------------------------------------------------------------ |
| 1. Ingresa email y contraseña         | 2. Chequea formatos                                                |
| 3. Presiona botón 'iniciar sesión'    | 4. Confirma usuario e inicia sesión, redirige a pantalla de inicio |

Cursos alternativos:

1.1. El formato de la dirección de email no es correcto: se despliega alerta indicando error de formato.

3.1. El usuario no esta registrado en el sistema: el sistema rechaza inicio de sesión y despliega opción para registrarse.

Título: Agregar gasto

Actor: Usuario

Curso normal:

|           Acción de los actores       |                  Respuesta del sistema                  |
| ------------------------------------- | ------------------------------------------------------- |
| 1. Selecciona 'Agregar gasto'         | 2. Despliega formulario de ingreso de gastos            |
| 3. Completa formulario de gasto       | 4. Confirma ingreso de gasto y despliega señal de éxito |

Cursos alternativos:

3.1. El concepto del gasto no figura en el sistema: usuario cancela ingreso de gasto y se dirige a ingresar el nuevo concepto.

3.2. Se ingresa más de un pago habiendo seleccionado un medio de pago que no admite pagos: el sistma arroja un error indicando que el medio de pago seleccionado no admite el pago en cuotas.

Título: Agregar Recordatorio

Actor: Usuario

Curso normal:

|           Acción de los actores        |                        Respuesta del sistema                         |
| -------------------------------------- | -------------------------------------------------------------------- |
| 1. Selecciona 'Agregar recordatorio'   | 2. Despliega formulario de ingreso de recordatorio                   |
| 3. Completa formulario de recordatorio | 4. Confirma ingreso de nuevo recordatorio y despliega señal de éxito |

Cursos alternativos:

3.1. La fecha ingresada es anterior a la fecha actual: sistema indica error indicando que solo se permite el ingreso de nuevos recordatorios con fechas futuras.

Título: Ver listado gastos

Actor: Usuario

Curso normal:

| Acción de los actores  |                 Respuesta del sistema                |
| ---------------------- | ---------------------------------------------------- |
| 1. Selecciona 'menu'   | 2. Despliega menu                                    |
| 3. Selecciona 'gastos' | 4. Despliega pantalla 'gastos' con listado de gastos |

Cursos alternativos:

4.1. El usuario no tiene gastos ingresados: se despliega pantalla de gastos vacía con indicación de que aún no hay gastos ingresados en el sistema.

Título: Ver listado ingresos

Actor: Usuario

Curso normal:

| Acción de los actores    |                 Respuesta del sistema                    |
| ------------------------ | -------------------------------------------------------- |
| 1. Selecciona 'menu'     | 2. Despliega menu                                        |
| 3. Selecciona 'ingresos' | 4. Despliega pantalla 'ingresos' con listado de ingresos |

Cursos alternativos:

4.1. El usuario no tiene ingresos ingresados: se despliega pantalla de ingresos vacía con indicación de que aún no hay ingresos ingresados en el sistema.

Título: Ver resumen gastos

Actor: Usuario

Curso normal:

| Acción de los actores   | Respuesta del sistema |
| ----------------------- | --------------------- |
| 1. Selecciona 'gastos'  | 2. Despliega pantalla 'gastos' mostrando gráfico de torta representativo de los gastos del período seleccionado, divididos por concepto  |

1.1. No hay gastos ingresados al sistma para el período seleccionado: se despliega pantalla de gastos vacía con indicación de que aún no hay gastos ingresados en el sistema para ese período.

Título: Ver resumen ingresos

Actor: Usuario

Curso normal:

|   Acción de los actores   | Respuesta del sistema |
| ------------------------- | --------------------- |
| 1. Selecciona 'ingresos'  | 2. Despliega pantalla 'ingresos' mostrando gráfico de torta representativo de los ingresos del período seleccionado, divididos por concepto  |

1.1. No hay ingresos ingresados al sistma para el período seleccionado: se despliega pantalla de ingresos vacía con indicación de que aún no hay ingresos ingresados en el sistema para ese período.

Título: Ver resultados

Actor: Usuario

Curso normal:

|    Acción de los actores    | Respuesta del sistema |
| --------------------------- | --------------------- |
| 1. Selecciona 'resultados'  | 2. Despliega pantalla resultados mostrando comparativo entre ingresos y gastos y saldo del período seleccionado    |

### Bocetos de IU

Realizamos el boceto de nuestra aplicación utilizando la herramienta Figma. Luego de definir y diseñar las diferentes páginas de la aplicación utilizamos la herramienta para crear un prototipo interactivo definiendo el flujo de las páginas con las distintas interacciones. Se accede al prototipo interactivo a través del siguiente enlace:

[Ver prototipo interactivo](https://www.figma.com/proto/FbE7VTm4ivPGPi0doZoub1/Untitled?node-id=1%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1)

Por otro lado, adjuntamos en el informe el diseño de todas las páginas de la aplicación:

[Bocetos de IU](./bocetosiu/README.md)

## Validación y verificación

### Verificar la especificación

Con el objetivo de verificar si los requerimientos funcionales planteados tienen las características deseables de las sentencias de los requerimientos, realizamos la siguiente tabla. 

|  Requerimiento funcional                 | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  |
| ---------------------------------------- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| Completo                                 | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Factible                                 | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Necesario                                | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Priorizado                               | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Ambiguo                                  | NO | NO | NO | NO | NO | NO | NO | NO | NO |
| Verificable                              | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Consistente y adecuado nivel de detalle  | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Modificable                              | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| Trazable                                 | SI | SI | SI | SI | SI | SI | SI | SI | SI |

### Validar la solución con personas no involucradas en el proyecto

Con el objetivo de validar si la solución propuesta satisface realmente las necesidades de los usuarios, consultamos acerca de la misma a personas no involucradas en el proyecto. Las respuestas obtenidas fueron similares a las obtenidas en el cuestionario realizado. Si bien la mayoría de los consultados nunca habían utilizado una aplicación de registro de gastos con anterioridad, la gran mayoría considera que una aplicación como la planteada les podría ser muy útil al momento de organizar sus ingresos, gastos y ahorros. 

En relación a la aplicación en si misma, las opiniones en general indican que resulta fácil de usar ya que los accesos son intuitivos, los nombres de cada sección son descriptivos de la misma y los resultados provistos por la aplicación son claros y visualemente fáciles de comprender. 

## Reflexión

### Detalle del trabajo individual

#### Reflexión Ivana Mester

Desde un punto de vista personal, considero que este obligatorio me ayudó mucho a entender y aprendar a manejar Git. Es una sistema de control de versiones de gran utilidad que podré incoportar a todos los trabajos que haga a partir de ahora para que el proceso sea más dinámico y eficiente. Por primera vez en la facultad tuve la posibilidad de trabajar en simultáneo con mis compañeros, lo que agilizó el proceso de gran manera. 

Desde el punto de vista del contenido del proyecto, siendo Contadora Pública entiendo la importancia de una aplicación de este estilo, ya que se lo dificil que es para los jóvenes organizar sus gastos y manejar sus ingresos. Me gustó tener la posibilidad de desarrollar una aplicación propia, incorporando aquellas funcionalidades que me parecen más necesarias.

Por otra parte, me resultó sumamente interesante tener la posibilidad de participar en lo que sería todo el proceso de llevar a cabo un proyecto, desde analizar los intereses de los ususarios hasta pensar los requerimentos y definir cuáles serían aquellas funcionalidades interesantes de incorporar. 

#### Reflexión Mauricio Mamrut:

Realizar la tarea me gustó mucho por varios motivos. En primer lugar, siempre me ha interesado la temática de las finanzas personales y estoy convencido de los beneficios que trae utilizar una aplicación como la que se nos propuso diseñar. En el pasado he utilizado aplicaciones similares por lo que a la hora de pensar en el diseño y las funcionalidades tenía varias ideas sobre cosas para tener en cuenta y algunas otras a evitar.

Dentro del equipo yo me centré principalmente en el diseño de la interfaz de usuario. Para ello tuve que aprender a utilizar la plataforma Figma que no conocía. Me pareció una muy buena herramienta y me resultó fácil aprender a usarla. Por otro lado, me resultaron muy útiles las sugerencias de como distribuir los colores que se encontraban en la página que nos fue dada en la propuesta.

Por último, trabajar en el proyecto me sirvió para mejorar mi relación con Git. En el pasado había utilizado la plataforma pero no me sentía muy cómodo con ella. No terminaba de entender cómo funcionaba y la utilizaba con temor de cometer algún error y perder el trabajo. A lo largo del armado del proyecto, aplicando la base teórica que vimos en el curso, fui entendiendo cada vez mas el funcionamiento de las ramas y los commits. Actualmente me siento muy cómodo trabajando con Git y lo hago de forma mucho más fluida.


### Técnicas aplicadas y aprendizajes

Como forma de organizar el trabajo de la manera más eficiente posible creamos un grupo de whatsapp para mantenernos el tanto de cada avance y coordinamos reuniones por Zoom periódicas para poder analizar los avances en el proyecto hasta el momento, organizar el contenido que deseábamos incorporar en cada sección y así distribuir las tareas de la mejor manera posible.

Consideramos que las partes más desafiantes del proyecto fueron la de implementar Git para trabajar de manera local y en equipo y el uso de la herramienta de prototipado. En relación al uso de Git, nos encontramos con algunas dificultades al crear nuevas ramas, ya que en más de una ocasión ocurrió que se cree una nueva rama desde 'develop' sin ejecutar el comando 'git pull' previamente, lo que generaba que la rama creada no estuviera actualizada con el repositorio remoto. Por otra parte, nos vimos enfrentados a la necesidad de resolver conflictos antes de poder mergear algunas ramas a la rama 'develop', ya que estos se suelen generar al trabajar en equipo en un mismo poryecto. Por último, consideramos que luego de finalizar esta primera parte del proyecto, sí tenemos un mejor entendimiento y manejo de los comandos de Git, que al comienzo quizás resultaban un tanto confusos. En cuanto a la herramienta de protipado utilizada, Figma, si bien logramos cumplir los objetivos del trabajo, no habíamos trabajado con una herramienta de este estilo previamente, más allá de lo trabajado en clase, por lo que nos vimos enfrentados a la necesidad de aprendar a utilizarla. 



