# oas_cancelacion_semestre
Este proyecto se realiza para que los Roles puedan:

## ESTUDIANTE:

* Solicitar Cancelación de semestre
* Solicitar Retiro voluntario
* Solicitar No renovación de matrícula (aplazar semestre).

## CONSEJO DE FACULTAD:

* Aprobación de Solicitud de un estudiante para cancelación de semestre
* Aprobación de Solicitud de un estudiante para retiro voluntario por primera vez.

## COORDINADOR:

* Solicitud Cancelación de semestre de Estudiante

## VICERRECTOR ACADÉMICO:

* Registrar fechas permitidas para cancelación
* Cancelar semestre anterior.

# Dependencias
-----------------------------
- Node.js: https://nodejs.org/en/download/
- npm: https://www.npmjs.com/
- Bower: https://bower.io/#install-bower

Para desarrollar u obtener localmente se puede ejecutar:
1) Clonar el repositorio:
```bash
$ git clone --depth=1 https://github.com/udistrital/cancelacion_semestre_cliente
```

2) Ingresar al directorio y resolver los requerimientos de desarrollo del api JS.
```bash
cd cancelacion_semestre_cliente
npm install
npm postinstall
```

3) Ejecutar pruebas (ver https://github.com/angular/angular-seed.git):
```bash
npm run test-single-run
```

4) Ejecutar pruebas continuamente.
```bash
npm test
```

4) Desplegar la aplicación con npm scripts
```bash
npm run deploy # se debe cambiar!
```

# INFORMACIÓN
-------------
* Basado en Angular Seed https://github.com/angular/angular-seed.git
* Viene pre configurado con pruebas unitarias. Estos están escritos en el Jasmine https://jasmine.github.io, se ejecuta con el Karma Test Runner https://karma-runner.github.io/1.0/index.html.
* Uliliza beego como framework de desarrollo para el back-end. https://github.com/juusechec/oas_be_cancelacion_semestre
