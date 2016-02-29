vec3 determineIntersection(in vec3 P, in vec3 r, out int index)
{
    // Ermitteln Sie hier den Schnittpunkt mit der nächsten Gefäßfläche
    // und geben Sie ihn zurück. Zusätzlich muss ’index’ auf den Index
    // der entsprechenden Seitenfläche gesetzt werden.

    bool intersects = false;
    float t, t_min;
    int index_min, index;

    for (int i=0; i<= 5; i++) {
        if (intersect(i, P, r, &t)) {
            if (!intersects || t < t_min) {
                t_min = t;
                index_min = i;
                intersects = true;
            }
        }
    }

    index = index_min;
    return t_min;
}