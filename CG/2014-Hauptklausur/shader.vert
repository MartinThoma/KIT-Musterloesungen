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

	// Lösung mit Bernstein-Polynomen
    vec3 result = vec3(0.);
    result += b0 * (1. - s) * (1. - s) * (1. - u) * 1.;
    result += b1 * (1. - s) * (1. - s) * u * 3.;
    result += b2 * (1. - s) * s * s * 3.;
    result += b3 * s * s * s * 3.;
    return result;
}

vec3 bezier3(float s, // Parameter s in [0;1)
             const vec3 b0, const vec3 b1, // Kontrollpunkte b0, b1, b2, b3
             const vec3 b2, const vec3 b3) {
	// Algorithmus von de Casteljau
	vec3 b01 = mix(b0, b1, s);
	vec3 b11 = mix(b1, b2, s);
	vec3 b21 = mix(b2, b3, s);
	vec3 b02 = mix(b01, b11, s);
	vec3 b12 = mix(b11, b21, s);
	return mix(b02, b12, s);
}

// bezierspline3(..) soll die Auswertung des Bezier-Splines an der
//    Stelle t als vec3 zurückgeben.
//    Verwenden Sie dazu die Funktion bezier3(..)!
vec3 bezierspline3(float t) {
    // Fügen Sie Ihren Code hier ein.
    int i = int(t);
	float s = fract(t);
    return bezierspline3(s, b[3*i], b[3*i+1], b[3*i+2], b[3*i+3]);
}

void main() {
    vec3 offset = bezierspline3(time);
    vec3 newpos = position + offset;
    gl_Position = matrixMVP * vec4(newpos,1.0);
}
