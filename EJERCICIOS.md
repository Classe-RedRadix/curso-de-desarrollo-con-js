# Ejercicios

## Como subir ejercicios

1. Una vez nos descargemos el repositorio, debemos crear **a partir de la rama del curso**, una rama para nosotros.
2. Para **crear una nueva rama** desde la rama del curso, añadimos un guión y nuestro nombre al final de la rama, por ejemplo `promocion-2022-octubre-<nombre>`, y usamos el comando `git switch`.

   ```bash
   # Por ejemplo, para alguien llamado Inés
   git switch promocion-2022-octubre # Nos movemos a la rama del curso.
   git switch -c promocion-2022-octubre-ines # Creamos la rama y nos novemos a ella.
   ```

3. Editamos el archivo del ejercicio solicitado, o si no existe este archivo, **creamos uno donde implementaremos el código de la solución**.
4. Añadimos ese archivo a staging y **creamos un commit con un mensaje descriptivo de lo que hemos hecho**, y subimos nuestra rama.

   ```bash
   git add . # Añadimos todas las modificaciones a staging
   git commit -m "Finished exercise-III, module 2" # Añadimos un mensaje descriptivo
   git push origin promocion-2022-octubre-ines
   ```

5. [Creamos una Pull Request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para que el profesor revise el cambio y lo añada a la rama del curso. **Tenemos que copiar el enlace de esa PR y añadirlo al canal de slack del curso**. Esta Pull Ruest siempre sera usando **la rama del curso como base**.

## Documentación de ayuda

- [git switch](https://git-scm.com/docs/git-switch)
- [git add](https://git-scm.com/docs/git-add)
- [git commit](https://git-scm.com/docs/git-commit)
- [git push](https://git-scm.com/docs/git-push)
