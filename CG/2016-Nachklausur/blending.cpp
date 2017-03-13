void renderScene()
{
	glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );
	// Initialisieren Sie hier den OpenGL-Zustand!
	glDepthMask( GL_TRUE );    /* (1) */
	glEnable( GL_DEPTH_TEST ); /* (3) */
	glDisable( GL_BLEND );     /* (6) */
	
	// Zeichnen Sie die Szene ab hier!
	drawOpaque();              /* (12) */
	glDepthMask( GL_FALSE );   /* (2) */
	glEnable( GL_BLEND );      /* (5) */
	sortTransBackToFront();    /* (7) */
	drawTrans();               /* (9) */
}
