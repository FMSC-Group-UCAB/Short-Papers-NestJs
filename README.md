<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## _myOnlineDoctor-NestJs_

_The Hackers_'s subgroup members:
- Manuel Da Pena
- Carlos Doffiny S-V
- Santiago Figueroa 
- Froil??n Roa

## Installation

```bash
#npm dependencies
$ npm install

#.env.example configuration
$ cp .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tabla con las actividades mas significativas de cada integrante: 

# Da Pena, Manuel. 


| Actividad                                                                                                            | Commit                                                |
|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
|Implementaci??n de la arquitectura principal del backend. Se aplic?? el patr??n Decorador y la programaci??n orientada a aspectos para la implementaci??n de los servicios y el manejo de Cross-Cutting-Concerns. Se aplicaron los principios de SRP, LSP DIP, ISP y OCP junto con la programaci??n gen??rica para implementar los servicios del backend. Se aplic?? SoC de forma tal que los controladores son quienes se encargan de invocar a los servicios y estos de inyectar las dependencias a los casos de uso para luego realizar las operaciones pertinentes.                                                                 | https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/1 |
| Implementaci??n de los servicios, endpoints y queries de la b??squeda de doctores por especialidad de forma paginada.  |https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/2 |
| Implementaci??n del caso de uso de b??squeda de doctores parametrizado por especialidad y paginaci??n. Aplicaci??n de inyecci??n de dependencias para desacoplar los Repository de Doctor. Implementaci??n de endpoint para las im??genes de los doctores.                              | https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/6 |
|Refactorizaci??n de los nombre de los servicios con el sufijo de ???Query??? y cambio de nombres de las especialidades a espa??ol. Implementaci??n de nuevos DTOs para la comunicaci??n entre capas.| https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/7  |


# Doffiny S-V, Carlos.

|Actividad                                              |                         Commit                     |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| mplementaci??n de la vista de la b??squeda de doctores por especialidad, con su barra de b??squeda, visualizaci??n del listado de los doctores y  manejo del scroll de la vista.| https://github.com/FMSC-Group-UCAB/Short_Paper_Flutter/commit/94340805cf447f9b54dfc7602c56aae55a384df3 |
| Implementaci??n del patr??n Stream para el manejo de la programaci??n as??ncrona en la vista de los doctores, en sus cuatro estados. Cuando el canal est?? cerrado, cuando est?? abierto esperando un resultado, cuando recibe el resultado y cuando arroja una excepci??n.                                  | https://github.com/FMSC-Group-UCAB/Short_Paper_Flutter/commit/c0c44c75215d1e64993291ed27467c58192419b3 |
| Implementaci??n de la integraci??n de la aplicaci??n m??vil con el servicio de NestJS y su base de datos en PostgreSQL. Para ello se hizo uso de las librer??as http y convert de Dart, y del patr??n de asincron??a Futter.                                  | https://github.com/FMSC-Group-UCAB/Short_Paper_Flutter/commit/4778819d1fee265a20a44144dc4da9c48a2babd6  |                                                                                                   



# Figueroa, Santiago.

|Actividad                                                  | Commit                                               |
|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Implementaci??n de un Stored Procedure en la base de datos que genera los doctores con la informaci??n correspondiente a cada uno, como tambi??n se crearon tablas auxiliares de nombres para la generaci??n de informaci??n. | https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/8  |
| Implementaci??n de la clase Mapper, que convierte entidades de dominio (Doctor) en entidades de persistencia (DoctorEntity) y viceversa.                        | https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/3 |



# Roa, Froil??n. 

| Actividad                                                                                                            | Commit                                                |
|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
|Implementaci??n de excepciones de dominio para la entidad y ValueObjets de los Doctores.                                                                 | https://github.com/FMSC-Group-UCAB/Short-Papers-NestJs/pull/5 |
| Implementaci??n de la interfaz de inicio en Flutter con los botones de navegaci??n con sus funcionalidades para ir a la pantalla que filtra los doctores. |https://github.com/FMSC-Group-UCAB/Short_Paper_Flutter/commit/1d3c9cd81c104fa1c112f0515d701d87a4e5f894 |
| Implementaci??n del manejo de error en caso de que el usuario no tenga una foto registrada, para que la aplicaci??n coloque una por defecto.                              | https://github.com/FMSC-Group-UCAB/Short_Paper_Flutter/commit/1d3c9cd81c104fa1c112f0515d701d87a4e5f894|

