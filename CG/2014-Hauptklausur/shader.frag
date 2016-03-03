vec3 determineIntersection(in vec3 P, in vec3 r, out int index)
{
    // Ermitteln Sie hier den Schnittpunkt mit der nächsten Gefäßfläche
    // und geben Sie ihn zurück. Zusätzlich muss ’index’ auf den Index
    // der entsprechenden Seitenfläche gesetzt werden.

    bool intersects = false;
    float t_min;

    for (int i = 0; i<= 5; i++) {
		float t;
        if (intersect(i, P, r, t) && t > 0.) {
            if (!intersects || t < t_min) {
                t_min = t;
                index = i;
                intersects = true;
            }
        }
    }

    return P + t_min * r;
}
