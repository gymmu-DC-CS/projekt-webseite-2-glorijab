Planung Website

Ziel: Website über berühmten Basketballspieler Stephen Curry
Ich möchte Infos über seine Kindheit und Jugend, seine NBA Karriere, seine Rekorde, die Höhepunkte seiner Karriere, seine momentane Leistungen und meine persönlichen Erfahrungen und Bezüge in die Website miteinbeziehen. 
Ich möchte meine Webseite möglichst vielseitig gestalten und verschiedene Wege finden, wie ich Informationen über Stephen Curry weitergeben kann (Zb in Form von Tabellen, Bildern, Spielerkarten etc.). Dabei bringe ich mir selbst bei wie Buttons und JavaScript Programmierung funktionieren. Ich möchte auch lernen, wie man eine Slideshow von Bildern macht und die beim Abschnitt ,,Kindheit und Jugend" einfügen. Ich möchte ausserdem eine Navigationsleiste am Anfang machen, bei der man beim Inhaltsverzeichnis auf die Themen klicken kann und dann direkt zu dem jeweiligen Abschnitt geleitet wird (ähnlich wie ein Menü oben). 


Quellen: 
-Infos Steckbrief: https://en.wikipedia.org/wiki/Stephen_Curry
-Ideen gesucht für Interaktivität mit JavaScript: ChatGPT (Prompt: gib mir eine Idee für eine Website über einen Basketballspieler wo ich einen JavaScript Code brauchen kann)
-Lernen wie man eine Slideshow programmiert: ChatGPT (Prompt: Wie kann man eine slideshow mit Bildern machen?)
-Lernen wie man Navigationsleiste oben (Menü) programmiert: ChatGPT (Prompt: Wie macht man eine Navigatiosleiste)?
-Lernen wie man Bilder verschiebt: ChatGPT (Prompt: Wie verschiebe ich Bilder in HTML neben meinen Text?)
-Lernen wie man Slideshow programmiert: ChatGPT (Prompt: Wie programmiere ich eine Slideshow in HTML, CSS und JS?)
-Infos Stephen Curry Jugend und Kindheit: https://de.wikipedia.org/wiki/Stephen_Curry, https://davidsonwildcats.com/sports/mens-basketball/roster/stephen-curry/631, https://celeb-true.com/stephen-curry-american-professional-basketball-player-represents, 


Lerntagebuch: 
1. Ich habe gelernt wie man <nav> benutzt und damit eine Navigationsleiste macht. Dies habe ich mit KI gelernt.Ich habe ChatGPT gefragt wie man es macht und habe dann die Links von den einzelnen Abschnitten hinzugefügt und habe es zu einer geordneten Liste gemacht. <nav> bedeutet Navigation und ist der Bereich, in dem sich die Navigation der Website befindet. Danach hat es noch nicht funktioniert, also habe ich ChatGPT gefragt was der Fehler in meinem Code ist und habe herausgefunden, dass ich die id's bei einigen Untertiteln vergessen habe und dass ich im html head <link rel="stylesheet" href="style.css"> einfügen muss, damit der CSS Code in der Website übernommen wird. Der CSS Code funktioniert so: 
-background-color sorgt für den dunklen Hintergrund
-padding sorgt für den Abstand innen (sodass es nicht gequetscht aussieht) 
-position: sticky sorgt dafü dass das Menü oben bleibt beim Scrollen -top sorgt dafür dass das Menü ganz oben ist
-z-index sorgt dafür, dass das Menü über allem anderen sichtbar ist. 

Abschnitt nav ol: 
-list-style: none; lässt Zahlen (1,2,3) verschwinden
-display: flex; Elemente werden nebeneinander statt untereinander angeordnet
-justify-content: center; alles wird in die Mitte geschoben
-gap: 15px; Abstand zwischen den Menü-Punkten

Abschnitt nav a:
-color: white; Text weiß
-text-decoration: none; kein Unterstrich
-font-weight: bold; fett

Hover Effekt (Nav a :hover):
 nav a:hover {
  color: orange;
} macht dass der Text orange wird wen man mit der Maus drüberfährt

Anordnung Handy
@media (max-width: 768px) {
  nav ol {
    justify-content: flex-start;
  }
} macht dass das Menü auf kleinen Bildschirmen nach links geht un dnicht mher zentriert wird


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
Der Container ist ein CSS Selektor und wählt alle Elemente mit class=container aus (siehe HTML). Mit <div> erstellt man einen solchen Container und alle Elemente, die zusammen in einem Container sind, kann man zusammen im CSS gestalten. display:flex; macht das Element zu einem Flexbox-Container, d.h <img> und <ul> werden horizontal nebeneinander angeordnet und nicht untereinander. <gap> bestimmt den Abstand zwischen Bild und Liste und align-items:flex-start; sorgt dafür dass beide Elemente auf der gleichen Höhe beginnen. max-width beim Bild bestimmt die Bildbreite und height:auto sorgt dafür, dass die Länge sich der Breite anpasst (damit das Bild nicht verzerrt aussieht). 



3. Ich habe mit ChatGPT gelernt, wie man mit carousel (Slideshow) arbeitet.
HTML:
-Mit <div class="carousel"> macht man alle Bilder,Buttons, Punkte, etc. die man in der Slideshow haben möchte, in einen Hauptcontainer.
-<div class="slides"> ist der Bereich für die Bilder. 
-<img class="slide"> sind die einzelnen Bilder.
-<img class="slide active"> ist das Bild, das jeweils angezeigt werden soll (Nur eins wird gleichzeitig angezeigt, alle anderen sind dann nicht sichtbar). 
-<button class="nav prev">‹</button> und <button class="nav next">›</button> sind die beiden Buttons, mit denen man in beide Richtungen wechseln kann. 
-nav prev und nav next ist hier nicht <nav> (Navigation), sondern nur ein Klassenname. 
-<div class="dots"></div> sind die Punkte, die beim jeweiligen Bild zu sehen sind, dass aktiv ist. 
CSS:
carousel container: 
-position: relative; die Position des Carousels muss relativ sein, da sich die Buttons auf diese Position beziehen. Wenn die position absolute wäre würden sich die Buttons auf die ganze Seite beziehen und irgendwo auf der Website landen.
-max-width: 650px; begrenzt die Größe der Slideshow
-height: 450px; gibt der Slideshow eine feste Höhe
-margin: auto; zentriert das Carousel in der Website
-overflow: hidden; da die Bilder übereinander liegen, können Dinge rausragen. Mit overflow hidden werden diese Dinge rausgeschnitten.

slide container (Bilder übereinander legen):
-position: absolute; alle Bilder werden übereinandergelegt (und nicht untereinander). Die Bilder werden aus dem normalen Layout entfernt und die jeweilige Slide liegt direkt auf den anderen Bildern. Wenn die position relative wäre, wären alle Bilder untereinander angeordnet.
-width: 100%; height: 100%; Bilder füllen die ganze Box
-object-fit: cover; Bild wird schön zugeschnitten
-opacity: 0; steuert die Sichtbarkeit der Bilder, 0=unsichtbar

slide active container (aktives Bild sichtbar machen):
-opacity: 1; macht das Bild sichtbar
-z-index: 1; sorgt dafür dass das jeweilige Bild ganz oben liegt

transition:
-opacity 0.6s ease; sorgt dafr dass die Bilder weich einblenden beim Wechsel

Buttons: 
-position: absolute; sorgt dafür dass die Buttons über den Bildern liegen
-top: 50%; sorgt dafür dass die Buttons (vertikal gesehen) in der Mitte sind. Top setzt den Button aber so an, dass die Oberkante des Buttons auf der Mitte liegt. Der Button selbst hat aber eine Höhe, was dazu führt, dass der Button zu tief liegt. Deswegen braucht man transform. 
-transform: translateY(-50%); sorgt dafür, dass der Button um die Hälfte seiner eigenen Höhe nach oben geschoben wird, sodass der Button genau in der Mitte ist (sozusagen eine Ergänzung zum top:50%). margin wird hier nicht benutzt, weil absolute Elemente anders reagieren als normale und margin die Höhe des Buttons nicht kennt (dh es kann sich am Schluss nicht selber ausgleichen).
.prev { left: 10px; }: platziert den Button (horizontal gesehen) links vom Bild
.next { right: 10px; }: platziert den Button (horizontal gesehen) rechts vom Bild

Punkte (dots)
-position: absolute; 
-bottom: 15px;
-width: 100%;
-text-align: center;




Ich habe mit ChatGPT gelernt, wie man eine Slideshow in Javascript, CSS und HTML programmiert. ChatGPT hat mir einige Programme gezeigt, die ich dann noch anpassen musste, indem ich z.B meine eigenen Bildlinks eingefügt habe. Der Code hat aber lange nicht funktioniert, weil ich zuerst Probleme mit dem index im CSS hatte. Ursprünglich war das Problem, dass die Slides sich überlappten und das „aktive“ Bild nicht zuverlässig oben lag, weil alle Slides ähnliche z-index-Werte hatten. Ich habe das Problem korrigiert, indem ich in CSS die Klasse .active dem aktuellen Slide zuwies, sodass nur dieser opacity: 1 und z-index: 1 hat, während alle anderen Slides opacity: 0 und z-index: 0 behalten. Dadurch ist immer nur das aktuelle Bild sichtbar, und die Slideshow funktioniert korrekt.

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

 7.  Ich habe mit ChatGPT gelernt, wie man eine Timeline erstellt. Dabei hatte ich zuerst das Problem, dass die Timeline mit meinen Überschrfiten überlappte. Das ist passiert, weil ich bei den timeline events top: -100px eingestellt habe und die Bilder so aus dem normalen Layout gezogen wurden. Das Problem habe ich gelöst, indem ich die Bilder zentriert habe (mit top: 50% und transform: translate(-50%, -50%)). Ein weiterer Grund wieso die Timeline mit den Überschriften überlappte, war, dass die ich die position auf absolute eingestellt habe. Die Timeline hat somit keinen PLatz eingenommen und wurde quasi ignoriert und überlappte deswegen mit meinen Überschriften. Das habe ich gelöst, indem ich der Timeline eine Höhe gegeben habe und die position auf relative eingestellt habe. Danach hatte ich das Problem, dass die Linie oberhalb der Bilder und nicht in der Mitte platziert wurde. Das Probleme habe ich beseitigt, indem ich .timeline::before {
  top: 50%;
  transform: translateY(-50%);
}
eingefügt habe. (noch verstehen)

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

8. Ich habe gelernt, wie man eine interaktive Player Card erstellt. Beim ersten Versuch hat der Code meine ganze Website komplett durcheinandergebracht, weil ich <script src="script.js"></script> an der falschen Stelle im HTML hatte. Das habe ich gelöst in dem ich diesen Abschnitt zwischen </body> und </html> gemacht habe. Ausserdem hatten meine Klassen im CSS die gleichen Namen wie andere Elemente die ich schon hatte, weswegen ich die Klassennamen spezifischer machen musste. Ein weiterer Fehler war, dass mein JS auf id's zugreifen wollte, aber ich keine id's im HTML hatte. Also habe ich im HTML id's zu den Statistiken hinzugefügt. 

9. Ich habe gelernt, wie man die Spieler Karte verschiebt und daneben einen Text platziert. Mein erster Fehler war, dass der Text zu weit rechts platziert wurde und ich einen riesigen Abstand zwischen Karte und Text hatte. Das habe ich gelöst, indem ich den Abschnitt, der die Karte zentriert hat (margin: 40px auto;) zu margin: 0 geändert habe. 

10. Ich habe gelernt wie man eine Tabelle mit CSS ansprechender gestaltet. 
 