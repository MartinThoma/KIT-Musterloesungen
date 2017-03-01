in vec3 A; // Ursprung des Strahls.
in vec3 D; // Die normalisierte Richtung des Strahls.
in float tMax; // Abbruchkriterium: maximale Suchdistanz.
uniform float epsilon; // Toleranz

// Distanzfunktion. Liefert den Abstand von x zur nächsten Fläche.
float DF( vec3 x ) { ... }

// Implementieren Sie Sphere Tracing in dieser Funktion.
bool sphereTrace( out vec3 pos, out int steps ) {
	steps = 0;
	float t = 0.0;
	while (t < tMax) {
		pos = A + t * D;
		float d = DF(pos);
		if (abs(d) < epsilon) {
			return true;
		}
		t += d;
		steps++;
	}
	return false;
}
