void renderScene() {
    // Setup vor dem Löschen von Frame- und Tiefenpuffer
    /* glEnable( GL_DEPTH_TEST ) nicht benötigt, da bereits gesetzt */
    glDepthMask( GL_TRUE ); // (1)
    glDisable( GL_BLEND ); // (6)

    glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );
    // Zeichnen der Szene ab hier
    drawOpaque(); // (9)
    glDepthMask( GL_FALSE ); // (2)
    glEnable( GL_BLEND ); // (5)
    drawTransSorted(); // (8)
    glDisable( GL_BLEND ); // (6)    
    glDepthMask ( GL_TRUE ); // (1) (vllt nicht benötigt)
}
