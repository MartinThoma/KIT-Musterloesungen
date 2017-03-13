#define TERRAIN 1   // Index des Terrain-Objekts
#define WATER 2     // Index des Wasser-Objekts
#define NOTHING 0   // Kein Objekt

// Berechnet Abstand zwischen p und nächstgelegener Oberfläche ...
float distTerrain(vec3 P) {...}     // ... der Landschaft
float distWater(vec3 P) {...}       // ... der Wasseroberfläche

uniform float tmin; // Minimale Schnittdistanz, ab der gesucht wird
uniform float tmax; // Maximale Schnittdistanz, bis zu der gesucht wird
uniform float eps;  // Oberflächendistanz, ab der Objekt als geschnitten gilt

// Berechne Abstand des nächstgelegenen Schnittes mit Terrain oder Wasser
float intersect(
  in vec3 O,        // Strahlursprung
  in vec3 d,        // Normierte Strahlrichtung
  out int oidx)     // Geschnittenes Objekts (NOTHING, TERRAIN oder WATER)
{
    float t = tmin;

    while (t < tmax) {
        vec3 P = O + t * d;
        float dt = distTerrain(P);
        float dw = distWater(P);

        float d;
        if (dt < dw) {
            d = dt;
            oidx = TERRAIN;
        } else {
            d = dw;
            oidx = WATER;
        }

        if (d < eps) return t;
        t += d;
    }

    // Kein Schnittpunkt
    oidx = NOTHING;
    return tmax;
}
