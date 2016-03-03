in vec4 p; // Position des Vertex in Objektkoordinaten.
uniform float t; // Aktueller Zeitpunkt.
uniform float t1; // Die Zeitpunkte der drei Keyframes.
uniform float t2;
uniform float t3;
uniform mat4 M1; // Die drei Transformationsmatrizen (Objekt->Welt).
uniform mat4 M2;
uniform mat4 M3;
uniform mat4 VP; // Die View-Projection-Matrix.

void main() {
	vec4 pWorld;
	if (t < t2) {
		pWorld = mix(M1 * p, M2 * p, (t - t1) / (t2 - t1));
	} else {
		pWorld = mix(M2 * p, M3 * p, (t - t2) / (t3 - t2));
	}

	gl_Position = VP * pWorld;
}
