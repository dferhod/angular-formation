Créer une page d’inscription :

1. La page doit être accessible via l’URL /register.
2. Ajouter un bouton dans la barre de navigation pour rediriger l’utilisateur vers cette page.
3. Le formulaire d'inscription doit inclure trois champs : email, mot de passe, confirmation du mot de passe. Utiliser le module ReactiveFormsModule
4. Appliquer les validateurs suivants :
  * Tous les champs sont obligatoires.
  * Créer un validateur personnalisé `passwordMatchValidator` qui vérifie que le mot de passe et sa confirmation sont identiques. Astuce : Appliquez ce validateur au niveau du FormGroup.

```ts
export function myValidator(form:  AbstractControl<FormGroup>)
form.get('password') // renvoie le formcontrol
```

5. Afficher les messages d'erreur dans le formulaire et rendre les champs incorrects en rouge :
  * Vous pouvez utiliser les styles préexistants de PicoCSS
  * Ou bien créer vos propres classes CSS pour gérer l’affichage des erreurs.