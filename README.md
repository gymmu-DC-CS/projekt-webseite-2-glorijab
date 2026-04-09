Planung Website

Ziel: Website über berühmten Basketballspieler Stephen Curry
Ich möchte Infos über seine Kindheit und Jugend, seine NBA Karriere, seine Rekorde, die Höhepunkte seiner Karriere, seine momentane Leistungen und meine persönlichen Erfahrungen und Bezüge in die Website miteinbeziehen. 

Dabei möchte ich in jedem Abschnitt (ausser dem Abschnitt über meine persönliche Erfahrungen) ein Bild einfügen und JavaScript benutzen, um die momentanen Leistungen interaktiv zu machen (wenn man darauf klickt sieht man die jeweilige Statistik). Dabei bringe ich mir selbst bei wie Buttons und JavaScript Programmierung funktionieren. Ich möchte auch lernen, wie man eine Slideshow von Bildern macht und die beim Abschnitt ,,Höhepunkt Karriere'' und ,,Kindheit und Jugend" einfügen. Ich möchte ausserdem eine Navigationsleiste am Anfang machen, bei der man beim Inhaltsverzeichnis auf die Themen klicken kann und dann direkt zu dem jeweiligen Abschnitt geleitet wird (ähnlich wie ein Menü oben). 


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



3. Ich habe mit ChatGPT gelernt, wie man eine Slideshow in Javascript, CSS und HTML programmiert. ChatGPT hat mir einige Programme gezeigt, die ich dann noch anpassen musste, indem ich z.B meine eigenen Bildlinks eingefügt habe. Der Code hat aber lange nicht funktioniert, weil ich zuerst Probleme mit dem index im CSS hatte. Ursprünglich war das Problem, dass die Slides sich überlappten und das „aktive“ Bild nicht zuverlässig oben lag, weil alle Slides ähnliche z-index-Werte hatten. Ich habe das Problem korrigiert, indem ich in CSS die Klasse .active dem aktuellen Slide zuwies, sodass nur dieser opacity: 1 und z-index: 1 hat, während alle anderen Slides opacity: 0 und z-index: 0 behalten. Dadurch ist immer nur das aktuelle Bild sichtbar, und die Slideshow funktioniert korrekt.

Nachdem ich dieses Problem korrigiert habe, funktionierte der Code immernoch weil ich einen Code programmmiert habe, der auf Mausklick reagiert (z.B mit nextBtn.addEventListener("click")), also hat es lange Zeit nicht funktioniert, weil ich keine Maus hatte ("click" reagiert nur auf Maus). Um das Problem zu lösen, habe ich mit "keydown" eine Tastatursteuerung eingebaut und somit das "click" ergänzt: 
document.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { index = (index + 1) % slides.length; updateSlides(); } if (e.key === "ArrowLeft") { index = (index - 1 + slides.length) % slides.length; updateSlides(); } });

 Ausserdem hatte ich am Anfang die Navigationspunkte in meinem HTML Code mit "span" erstellt z.B (const dot = document.createElement("span");). Das war ein Problem, weil "span" kein interaktives Element ist und nicht auf Tastatur reagiert. Also habe ich "span" durch "button" ersetzt: 
 const dot = document.createElement("button");

 Damit es funktioniert, habe ich zusätzlich noch eine Beschreibung hinzugefügt: 
 dot.setAttribute("aria-label", + (i + 1));

 Ein weiteres Problem war, dass ich <script src="script.js" defer></script> gar nicht in meinen HTML hatte, weswegen mein JS Code gar nicht reagiert hat. 

 4. Ich habe mit ChatGPT gelernt, wie ich die Slideshow nach links verschiebe: Um die Slideshow nach links zu verschieben (sodass sie direkt unter dem Text steht) ersetzt man im CSS margin: auto durch margin: 20px 0;. Das "auto" sorgt dafür, dass die Slideshow zentriert platziert wird und muss daher ersetzt werden. 

 5. Ich habe mit ChatGPT gelernt, dass ich media queries hinzufügen muss, um die Elemente der Webseite bei kleineren Bildschirmen (zb Smartphones) untereinander erscheinen zu lassen. 

 6. Ich habe mit ChatGPT gelernt, dass ich die Navigation (das Menü oben) mit flex-warp anpassen muss, damit es bei kleineren Bildschirmen untereinander angezeigt wird.

 7.  

Commit: 
 Layout und Steckbrief optimiert

- Flexbox für den Steckbrief-Container eingefügt, um Bild und Liste nebeneinander anzuordnen
- Container-Styles angepasst: width auf 100%, max-width und margin:auto entfernt, flex-wrap hinzugefügt
- Bildgrößen angepasst (max-width + flex-shrink) für bessere Darstellung
- Listeneinträge umbrechbar gemacht (word-break), um Überlauf zu verhindern
- Media Queries hinzugefügt, damit Steckbrief auf kleinen Bildschirmen untereinander angezeigt wird
- Navigation angepasst (flex-wrap) für responsive Menü-Darstellung
- Alle <br> aus der Liste entfernt, um Layoutprobleme und leeren Raum rechts zu beseitigen
- Overflow-x: hidden auf Body gesetzt, um horizontalen Scroll zu verhindern

8. 

 