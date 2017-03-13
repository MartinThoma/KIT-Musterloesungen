// Berechnet Oberflächennormale der Distanzfelder
vec3 normalAt(vec3 P) {...}

// Berechnet Farbe ...
vec3 skyColor(vec3 viewDir) {...}  // ... des Himmels
vec3 terrainColor(                 // ... der Landschaft
  vec3 P,                            // - Position
  vec3 normal) {...}                 // - Normale
vec3 waterColor(                   // ... des Wassers
  vec3 normal,                       // - Normale
  vec3 viewDir,                      // - eingehende Strahlrichtung
  vec3 reflectionColor,              // - Farbe des Reflexionsstrahls
  vec3 transmissionColor) {...}      // - Farbe des Refraktionsstrahls

// Berechne Schnittfarbe
vec3 computeColor(
  in vec3 O, // Strahlursprung
  in vec3 d) // Strahlrichtung
{
    int oidx;
    float t = intersect(O, d, oidx);

    if (oidx == NOTHING) {
        return skyColor(d);
    }

    vec3 P = O + t * d;
    vec3 n = normalAt(P);
    if (oidx == TERRAIN) {
        return terrainColor(P, n);
    }

    vec3 r = 2 * n * dot(-d, n) + d;
    return waterColor(n, d, skyColor(r), computeColor(P, d));
}
