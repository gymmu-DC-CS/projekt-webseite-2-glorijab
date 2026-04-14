Planung Website

Ziel: Website über berühmten Basketballspieler Stephen Curry
Ich möchte Infos über seine Kindheit und Jugend, seine NBA Karriere, seine Rekorde, die Höhepunkte seiner Karriere, seine momentane Leistungen und meine persönlichen Erfahrungen und Bezüge in die Website miteinbeziehen. 
Ich möchte meine Webseite möglichst vielseitig gestalten und verschiedene Wege finden, wie ich Informationen über Stephen Curry weitergeben kann (Zb in Form von Tabellen, Bildern, Spielerkarten etc.). Dabei bringe ich mir selbst bei wie Buttons und JavaScript Programmierung funktionieren. Ich möchte auch lernen, wie man eine Slideshow von Bildern macht und die beim Abschnitt ,,Kindheit und Jugend" einfügen. Ich möchte ausserdem eine Navigationsleiste am Anfang machen, bei der man beim Inhaltsverzeichnis auf die Themen klicken kann und dann direkt zu dem jeweiligen Abschnitt geleitet wird (ähnlich wie ein Menü oben). 


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


2. Ich habe von meinem Vater gelernt wie man Bilder neben dem Text einfügt. Man benutzt im HTML <div class="container">, die Liste und das Bild um das Bild neben der Liste zu platzieren. Damit der untere Text sich nicht nach oben verschiebt und das Bild mittig ist, sollte man <float> vermeiden. im CSS benutzt man:
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

alle Punkte (dots)
-position: absolute; sorgt dafür dass die Dots über dem Bild liegen
-bottom: 15px; 15px vom unteren Rand entfernt
-width: 100%; der Container benutzt die ganze Breite
-text-align: center; sorgt dafür dass die Punkte mittig sind 

einzelne Punkte
-display: inline-block; sorgt dafür dass die Punkte nebeneinanderstehen
-width: 10px; Grösse des Punkts
-height: 10px; Grösse des Punkts
-margin: 5px; alle Punkte haben 5px Abstand zueinander
-background: rgba(255,255,255,0.5); macht die nicht aktiven Punkte leicht transparent
-border-radius: 50%; 
-cursor: pointer; macht es klickbar (dh. wenn man darüber geht wird gezeigt dass es klickbar ist) 

aktiver Punkt
-background: white; Der Punkt wird hell wenn er aktiv ist und zeigt welches Bild aktiv ist

JavaScript:
JS macht die Seite interaktiv. Es erkennt Buttons und Dots, wechselt die Bilder und lässt die Bilder automatisch wechseln. 

-document.addEventListener("DOMContentLoaded", () => { sorgt dafür, dass der Code erst ausgeführt wird wenn die Seite komplett geladen ist
-const slides = document.querySelectorAll(".slide"); JS merkt sich alle Bilder (const wird für feste Werte verwendet)
-const prevBtn = document.querySelector(".prev"); JS merkt sich den zurück button
-const nextBtn = document.querySelector(".next"); JS merkt sich den weiter button
-const dotsContainer = document.querySelector(".dots"); JS merkt sich den Dots Container
-let index = 0; Variable, die speichert welches Bild gerade angezeigt wird (0=erstes Bild, 1=zweites Bild, ect.)  (Let wird für sich verändernde Elemente verwendet)
-let interval; Variable für automatische Wechseln
-slides.forEach((_, i) => {für jedes Bild wird Punkt erstellt
-const dot = document.createElement("button"); erstellt neuen Punkt
-dot.classList.add("dot"); Punkt bekommt CSS Klasse
-if (i === 0) dot.classList.add("active"); macht, dass der erste Punkt aktiv wird

-dot.addEventListener("click", () => {
  index = i;
  updateSlides();
  resetAutoplay();
}); wenn man klickt geht man zu dem Bild, die Anzeige wird aktualisiert und Autoplay wird neu gestartet

-dotsContainer.appendChild(dot); Der Punkt wird auf der Seite hinzugefügt

-function updateSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active"); 
} Diese Funktion zeigt ein Bild und einen Punkt an, alles andere wird nicht angezeigt

Next Button:
nextBtn.addEventListener("click", () => { 
  index = (index + 1) % slides.length; index wird verändert, also nächstes Bild, startet dann wieder von vorne
  updateSlides(); zeigt das Bild an
  resetAutoplay(); startet den Timer für Autoplay neu
});

Zurück Button
index = (index - 1 + slides.length) % slides.length; verhindert negative Zahlen, index verringert, also letztes Bild

Autoplay (Automatik)
-function startAutoplay() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlides();
  }, 3000);
} Alle 3 Sekunden geht es zum nächsten Bild und aktualisiert die Anzeige.

function resetAutoplay() {
  clearInterval(interval);
  startAutoplay();
} wenn man klickt, stoppt der alte Timer und ein neuer wird gestartet

Tastatur
-document.addEventListener("keydown", (e) => { erkennt Tastendruck
-if (e.key === "ArrowRight") erkennt den rechten Pfeil auf der Tastatur, geht also zum nächsten Bild
-if (e.key === "ArrowLeft") erkennt dne linken Pfeil auf der Tastatur, geht also zum letzten Bild

Fokus
nextBtn.focus(); aktiviert dne Button direkt, dh. man kann direkt mit der Tastatur arbeiten

Zusammenfassung:
Der Carousel besteht im HTML aus einem Container, in dem mehrere Bilder als einzelne Elemente gespeichert sind. Diese Bilder haben alle die gleiche Klasse und liegen innerhalb eines sogenannten Slides-Containers. Zusätzlich gibt es Buttons für die Navigation sowie einen Container für die Punkte (Dots). Im CSS wird der Carousel so aufgebaut, dass der äußere Container mit position: relative als Bezugspunkt dient. Die einzelnen Bilder werden mit position: absolute exakt übereinandergelegt, sodass immer alle am gleichen Ort sind. Damit aber nur ein Bild sichtbar ist, wird mit opacity gearbeitet: Standardmäßig sind alle Bilder unsichtbar und nur das Bild mit der Klasse active wird sichtbar gemacht. Der Container hat außerdem overflow: hidden, damit keine Inhalte außerhalb des Bereichs sichtbar sind. Die Navigationsbuttons werden mit position: absolute, top: 50% und transform: translateY(-50%) vertikal zentriert und links bzw. rechts positioniert.Die Dots werden ebenfalls absolut positioniert und unten im Container zentriert angezeigt. Insgesamt sorgt CSS also dafür, dass alle Elemente richtig angeordnet sind und nur das aktive Bild sichtbar ist.“
Das JavaScript steuert den gesamten Carousel (bzw die Slideshow). Es speichert alle Bilder und erstellt automatisch Navigationspunkte (dots). Über einen Index wird festgelegt, welches Bild aktuell aktiv ist. Beim Klicken auf Buttons oder Dots wird dieser Index verändert und die Anzeige aktualisiert. (index → sagt welches Bild, updateSlides() → zeigt es, Buttons/Dots → ändern index, Autoplay → ändert index automatisch) Zusätzlich sorgt ein Intervall für einen automatischen Bildwechsel und es gibt auch eine Steuerung über die Tastatur. Ein Problem in meiner Programmierung war, dass ich <script src="script.js" defer></script> gar nicht in meinen HTML hatte, weswegen mein JS Code gar nicht reagiert hat. 

 4. Ich habe mit ChatGPT gelernt, wie ich die Slideshow nach links verschiebe: Um die Slideshow nach links zu verschieben (sodass sie direkt unter dem Text steht) ersetzt man im CSS margin: auto durch margin: 20px 0;. Das "auto" sorgt dafür, dass die Slideshow zentriert platziert wird und muss daher ersetzt werden. 

5.  Ich habe mit ChatGPT gelernt, wie man eine Timeline erstellt. ChatGPT hat mir dann einen Code gegeben, den ich zuerst anpassen musste. Dabei hatte ich zuerst das Problem, dass die Timeline mit meinen Überschrfiten überlappte. Das ist passiert, weil ich bei den timeline events top: -100px eingestellt habe und die Bilder so aus dem normalen Layout gezogen wurden. Das Problem habe ich gelöst, indem ich die Bilder zentriert habe (mit top: 50% und transform: translate(-50%, -50%)). Ein weiterer Grund wieso die Timeline mit den Überschriften überlappte, war, dass die ich die position auf absolute eingestellt habe. Die Timeline hat somit keinen PLatz eingenommen und wurde quasi ignoriert und überlappte deswegen mit meinen Überschriften. Das habe ich gelöst, indem ich der Timeline eine Höhe gegeben habe und die position auf relative eingestellt habe. Danach hatte ich das Problem, dass die Linie oberhalb der Bilder und nicht in der Mitte platziert wurde. Das Probleme habe ich beseitigt, indem ich:
  .timeline::before {
  top: 50%;
  transform: translateY(-50%);
}
eingefügt habe. (noch verstehen)

6. Ich hatte bei meiner Website im Allgemeinen das Problem, dass ich viel leeren Raum an der rechten Seite (neben meinen Texten) hatte. Das habe ich mithilfe von Tipps von ChatGPT gelöst, indem ich alle <br> Elemente entfernt habe, damit die Texte die volle Breite ausnutzen, Flexbox für den Steckbrief genutzt habe, die Bilgrössen (max-width + flex-shrink) angepasst habe, Media Queries und flex-wrap hinzugefügt habe (damit die Texte und Bilder auf kleinen Bildschirmen untereinander angezeigt werden) und overflow-x hidden auf body gesetzt habe, um horizontalen Scroll zu verhindern (sodass der Inhalt nicht über die Grenze hinausgeht)


7. Ich habe gelernt, wie man eine interaktive Player Card erstellt. Beim ersten Versuch hat der Code meine ganze Website komplett durcheinandergebracht, weil ich <script src="script.js"></script> an der falschen Stelle im HTML hatte. Das habe ich gelöst in dem ich diesen Abschnitt zwischen </body> und </html> gemacht habe. Ausserdem hatten meine Klassen im CSS die gleichen Namen wie andere Elemente die ich schon hatte, weswegen ich die Klassennamen spezifischer machen musste. Ein weiterer Fehler war, dass mein JS auf id's zugreifen wollte, aber ich keine id's im HTML hatte. Also habe ich im HTML id's zu den Statistiken hinzugefügt. Der JS Teil der Karte funktioniert so: 


8. Ich habe mit ChatGPT gelernt, wie man die Spieler Karte verschiebt und daneben einen Text platziert. Mein erster Fehler war, dass der Text zu weit rechts platziert wurde und ich einen riesigen Abstand zwischen Karte und Text hatte. Das habe ich gelöst, indem ich den Abschnitt, der die Karte zentriert hat (margin: 40px auto;) zu margin: 0 geändert habe. 

9. Ich habe mit ChatGPT gelernt wie man eine Tabelle mit CSS ansprechender gestaltet. Dafür habe ich zuerst die Tabelle im HTML gemacht und der Tabelle die Klasse "records" gegeben, anschliessend habe ich im CSS die Tabelle gestaltet. 
Allgemeines Design: 
.records {
  width: 100%; die Tabelle nimmt die ganze Breite 
  border-collapse: collapse; der Abstand zwischen den Zeilen wird entfernt
  font-family: Arial, sans-serif; Schriftart
  background: white; weisser Hintergrund 
  border-radius: 10px; die Ecken werden abgerundet
  overflow: hidden; verhindert dass der Inhalt der Tabelle über die Ecken rausragt
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); leichter Schatten
}
Abwechselnde Zeilenfarbe
.records tbody tr:nth-child(odd) {
  background: #f6f8fa;
} jede ungerade Zeile bekommt die Farbe grau

Hover Effekt
.records tbody tr:hover {
  background: #da8025;
sorgt daür dass Zeilen hervorgehoben werden wenn man mit der Maus drüberfährt









function animateValue(id, end, duration) {
  let element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  let increment = end / (duration / 16);

  let timer = setInterval(() => {
    start += increment;
    if (start >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

document.addEventListener("DOMContentLoaded", () => {
  animateValue("points", 28, 800);
  animateValue("assists", 6, 800);
  animateValue("threes", 5, 800);
});
