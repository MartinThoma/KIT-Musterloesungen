uniform mat4 matrixMVP; // Model-View-Projection-Matrix
in vec3 position; // Koordinaten des Eingabe-Vertex
uniform vec3 b[12]; // Array der Kontrollpunkte
uniform float time; // Zeitpunkt für die Animation in [0;3)

// bezier3(..) soll die Bezier-Kurve an der Stelle s
//    auswerten und das Resultat als vec3 zurückgeben.
//    Sie können die Bernstein-Polynome oder den
//    Algorithmus von de Casteljau verwenden.
vec3 bezier3(float s, // Parameter s in [0;1)
             const vec3 b0, const vec3 b1, // Kontrollpunkte b0, b1, b2, b3
             const vec3 b2, const vec3 b3) {
    // Fügen Sie Ihren Code hier ein.
    vec3 result = vec3(0.f, 0.f, 0.f);
    result += b0 * (1-u) * (1-u) * (1-u) * 1;
    result += b1 * (1-u) * (1-u) * u * 3;
    result += b2 * (1-u) * u * u * 3;
    result += b3 * u * u * u * 3;
    return result;
}

// bezierspline3(..) soll die Auswertung des Bezier-Splines an der
//    Stelle t als vec3 zurückgeben.
//    Verwenden Sie dazu die Funktion bezier3(..)!
vec3 bezierspline3(float t) {
    // Fügen Sie Ihren Code hier ein.
    int i=0;
    float s = t;
    while(s >= 1.0f) {
        s -= 1;
        i += 1;
    }
    return bezierspline3(s, b[3*i], b[3*i+1], b[3*i+2], b[3*i+3]);
}

void main() {
    vec3 offset = bezierspline3(time);
    vec3 newpos = position + offset;
    gl_Position = matrixMVP * vec4(newpos,1.0);
}