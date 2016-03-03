glEnable(GL_DEPTH_TEST);  // (1) Aktiviere den Tiefentest
glDepthMask(GL_TRUE);     // (2) Aktiviere Schreiben in Tiefenpuffer

// (3) Lösche Farb- und Tiefenpuffer
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

// (4) Zeichne alle opaken Dreiecksnetze in beliebiger Reihenfolge

// (5) Deaktiviere das Schreiben in den Tiefenpuffer:
glDepthMask(GL_FALSE);
glEnable(GL_BLEND);  // (6) Aktiviere Blending

// (7) Sortiere alle transparenten Dreiecksnetze anhand ihrer Bounding-Boxen
//     und zeichne sie in der Reihenfolge von hinten nach vorne

glDisable(GL_BLEND);  // Deaktiviere Blending
glDisable(GL_DEPTH_TEST);  // Deaktiviere Tiefentest