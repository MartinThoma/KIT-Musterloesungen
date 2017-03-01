void renderScene() {
    // Setup vor dem Löschen von Frame- und Tiefenpuffer
    // <solution>
    glDepthMask( GL_TRUE ); // (1)
    // </solution>
    glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );
    // Zeichnen der Szene ab hier
    // <solution>
    drawOpaque(); // (9)
    glDisable( GL_DEPTH_TEST ); // (4)
    glEnable( GL_BLEND ); // (5)
      drawTransSorted(); // (8)
    glDisable( GL_BLEND ); // (6)    
    glDepthMask ( GL_FALSE ); // (2) (vllt nicht benötigt)
    // </solution>
}
