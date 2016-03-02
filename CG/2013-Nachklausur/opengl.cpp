void renderScene(std::vector<Sphere>& spheres)
{
    glDisable( GL_DEPTH_TEST );  // (4)
    glDepthMask( GL_TRUE );      // (1)
    glDisable( GL_CULL_FACE );   // (6)

    glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );

    glDepthMask( GL_TRUE );  // (2)
    glEnable( GL_BLEND );    // (9)
    sort( spheres );         // (11) sortiert alle Kugeln von hinten nach vorne

    for (int i = 0; i < spheres.size(); ++i)
    {
        Sphere& sphere = spheres[i];

        // sortiert Primitive einer Kugel von hinten nach vorne.
        sortPrim( sphere );   // (12)
        draw( sphere );       // (13) zeichnet eine Kugel
    }
}