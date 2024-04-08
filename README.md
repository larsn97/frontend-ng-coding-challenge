## frontend-ng-coding-challenge

### Sign Up
Um sich einen User zu erstellen muss auf den Button Sign Up geklickt werden - dieser leitet einen auf eine einfache Signup Seite weiter.
Hier ist kein pattern hinterlegt, sodass alle Zeichen erlaubt sind.

Username: **mindestens 3 und maximal 16 Zeichen**

Passwort: **mindestens 6 und maximal 20 Zeichen**
```
public form = this.fb.group({
    'username': ['', [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
    'password': ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    'repeatPassword': ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
  });
```

### Login
Hier kann man ganz einfach seinen vorher erstellen User in die Felder eintragen.
Anschließend wird die userId und ein isAuthenticated in den Session Storage geschrieben.

```
this.storageService.setAuthenticatedItem(value.isAuthenticated);
this.storageService.setUserIdItem(value.userId);

und im Session Storage dann:
{key: isAuthenticated, value: true}
```

### StorageService

Im StorageService werden Observables auf den SessionStorageItems gesetzt, sodass hier 
Wertänderungen mitbekommen werden, z.B. wenn sich ein User ausloggt.

### Create Prompt

Beim create Prompt wird die User 

### Ai-Prompt

Diese Komponente dient zur Anzeige der Prompts auf den Pages /homepage und /myprompts.

Über die Activated Route wird auf den aktuellen path subscribed, sodass unterschieden kann 
ob alle Prompts geladen werden sollen, oder lediglich die, die zum eingeloggten Nutzer gehören.

Des Weiteren wird hier die Filterung der Daten vorgenommen. Man kann aus den Kategorien Beschreibung und Ersteller auswählen.
Anschließend können im Textfeld verschiedenste Suchebegriffe eingegeben werden.

Beim Klick auf den Daumen wird ein Beitrag geliked. Ist er einmal geliked, kann er nicht disliked werden.
Anschließend wird ein Postrequest ausgelöst und die Tabelle wird nachgeladen. Möchte man einen Beitrag als User liken, den man schon einmal geliked hat,
kommt eine rote Hinweismeldung. Diese sagt dem Nutzer, dass dieser Beitrag bereits geliked wurde.

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie folgende Software installiert haben:
- Node v20.12.1
- npm v10.5.1


## Installation
### Die folgenden Commands können alle in der Bash ausgeführt werden.

1. Klonen Sie das Repository:
```bash
git clone git@github.com:larsn97/frontend-ng-coding-challenge.git
```
2. Checke die branches
```bash
git branch -a
```
3. Falls nicht von alleine passiert
```bash
git checkout main
```
4. Stelle sicher, dass du auf dem main arbeitest
```bash
git branch
```
```
##Output##
$ git branch
* main
```
5. Installieren aller dependencies aus der package.json
```bash
npm i
```
6. Starten des Projekts
```bash
ng serve --open
```
