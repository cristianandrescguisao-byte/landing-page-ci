# Landing Page - Proyecto de Integración Continua

[![CI Landing Page Politica](https://github.com/cristianandrescguisao-byte/landing-page-ci/actions/workflows/ci.yml/badge.svg)](https://github.com/cristianandrescguisao-byte/landing-page-ci/actions/workflows/ci.yml)

## 📘 Documentación Técnica del Workflow de CI

Este proyecto cuenta con un flujo de Integración Continua (CI) configurado mediante **GitHub Actions** para cumplir con los requerimientos de la Actividad #6 del programa ADSO.

### Estructura del Workflow
* **Disparadores (Triggers):** El flujo se ejecuta automáticamente ante cualquier evento de `push` o `pull_request` dirigido a la rama `main`.
* **Entorno de Ejecución:** Corre sobre una máquina virtual automatizada con el sistema operativo `ubuntu-latest`[cite: 1].
* **Validaciones Realizadas:** Se verifica mediante scripts de Bash la existencia obligatoria de los siguientes archivos en la raíz y directorios del proyecto[cite: 1]:
  * `index.html`[cite: 1]
  * `css/style.css`[cite: 1]
  * `js/script.js`[cite: 1]
  * `README.md`[cite: 1]

Si alguno de estos archivos falta o se encuentra en una ruta incorrecta, el flujo fallará, notificando de inmediato al desarrollador.