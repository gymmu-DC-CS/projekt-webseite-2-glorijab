Planung Website

Ziel: Website über berühmten Basketballspieler Stephen Curry
Ich möchte Infos über seine Kindheit und Jugend, seine NBA Karriere, seine Rekorde, die Höhepunkte seiner Karriere, seine momentane Leistungen und meine persönlichen Erfahrungen und Bezüge in die Website miteinbeziehen. 

Dabei möchte ich in jedem Abschnitt (ausser dem Abschnitt über meine persönliche Erfahrungen) ein Bild einfügen und JavaScript benutzen, um die momentanen Leistungen interaktiv zu machen (wenn man darauf klickt sieht man die jeweilige Statistik). Dabei bringe ich mir selbst bei wie Buttons und JavaScript Programmierung funktionieren. Ich möchte auch lernen, wie man eine Slideshow von Bildern macht und die beim Abschnitt ,,Höhepunkt Karriere'' einfügen. Ich möchte ausserdem eine Navigationsleiste am Anfang machen, bei der man beim Inhaltsverzeichnis auf die Themen klicken kann und dann direkt zu dem jeweiligen Abschnitt geleitet wird (ähnlich wie ein Menü oben). 


Quellen: 
-Infos Steckbrief: https://en.wikipedia.org/wiki/Stephen_Curry
-Ideen gesucht für Interaktivität mit JavaScript: ChatGPT (Prompt: gib mir eine Idee für eine Website über einen Baskteballspieler wo ich einen JavaScript Code brauchen kann)
-Lernen wie man eine Slideshow programmiert: ChatGPT (Prompt: Wie kann man eine slideshow mit Bildern machen?)
-Lernen wie man Navigationsleiste oben (Menü) programmiert: ChatGPT (Prompt: Wie macht man eine Navigatiosleiste)?
-Lernen wie man Bilder verschiebt: ChatGPT (Prompt: Wie verschiebe ich Bilder in HTML neben meinen Text?)
-Lernen wie man Slideshow programmiert: ChatGPT (Prompt: Wie programmiere ich eine Slideshow in HTML, CSS und JS?)
-Infos Stephen Curry Jugend und Kindheit: https://de.wikipedia.org/wiki/Stephen_Curry, https://davidsonwildcats.com/sports/mens-basketball/roster/stephen-curry/631, https://celeb-true.com/stephen-curry-american-professional-basketball-player-represents, 


Lerntagebuch: 
1. Ich habe gelernt wie man <nav> benutzt und damit eine Navigationsleiste macht. Dies habe ich mit KI gelernt.Ich habe ChatGPT gefragt wie man es macht und habe dann die id's geändert und habe es zu einer geordneten Liste gemacht und habe die Titel bearbeitet. Danach hat es noch nicht funktioniert, also habe ich ChatGPT gefragt was der Fehler in meinem Code ist und habe herausgefunden, dass ich die id's bei einigen Untertiteln vergessen habe und dass ich im html head <link rel="stylesheet" href="style.css"> einfügen muss, damit der CSS Code in der Website übernommen wird. (Noch CSS Code checken)
2. Ich habe gelernt wie man Bilder neben dem Text einfügt. Man benutzt im HTML <div class="container">, die Liste und das Bild um das Bild neben der Liste zu platzieren. Damit der untere Text sich nicht nach oben verschiebt und das Bild mittig ist, sollte man <float> vermeiden. im CSS benutzt man:
 .container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.container img {
  max-width: 400px;
  height: auto;
}

Der Container ist ein CSS Selektor und wählt alle Elemente mit class=container aus (siehe HTML). display:flex; macht das Element zu einem Flexbox-Container, d.h <img> und <ul> werden horizontal nebeneinander angeordnet und nicht untereinander. <gap> bestimmt den Abstand zwischen Bild und Liste und align-items:flex-start; sorgt dafür dass beide Elemente auf der gleichen Höhe beginnen. max-width beim Bild bestimmt die Bildbreite und height:auto sorgt dafür, dass die Länge sich der Breite anpasst (damit das Bild nicht verzerrt aussieht). 

3. Ich habe gelernt wie man eine Slideshow in Javascript, CSS und HTML programmiert.Ich hatte lange Probleme damit, weil ich zuerst einen Code programmmiert habe, der auf Mausklick reagiert (z.B mit nextBtn.addEventListener("click")), also hat es lange Zeit nicht funktioniert, weil ich keine Maus hatte. Um das Problem zu lösen, habe ich mit "keydown" eine Tastatursteuerung eingebaut: 

document.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { index = (index + 1) % slides.length; updateSlides(); } if (e.key === "ArrowLeft") { index = (index - 1 + slides.length) % slides.length; updateSlides(); } });



 Ausserdem hatte ich am Anfang die Navigationspunkte in meinem HTML Code mit "span" erstellt z.B (const dot = document.createElement("span");). Das war ein Problem, weil "span" kein interaktives Element ist und nicht auf Tastatur reagiert. Also habe ich "span" durch "button" ersetzt: 
 const dot = document.createElement("button");
 Damit es funktioniert, habe ich zusätzlich noch eine Beschreibung hinzugefügt: 
 dot.setAttribute("aria-label", + (i + 1));

 Ein weiteres Problem war, dass ich <script src="script.js" defer></script> gar nicht in meinen HTML hatte, weswegen mein JS Code gar nicht reagiert hat. 




