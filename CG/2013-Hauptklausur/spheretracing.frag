in vec3 A; // Ursprung des Strahls.
in vec3 D; // Die normalisierte Richtung des Strahls.
in float tMax; // Abbruchkriterium: maximale Suchdistanz.
uniform float epsilon; // Toleranz

// Distanzfunktion. Liefert den Abstand von x zur nächsten Fläche.
float DF( vec3 x ) { ... }

// Implementieren Sie Sphere Tracing in dieser Funktion.
bool sphereTrace( out vec3 pos, out int steps ) {
	pos = A;
	steps = 0;
	float t = 0.;
	while (t < tMax) {
		float d = DF(pos);
		pos += d * D;
		if (abs(d) < epsilon) {
			return true;
		}
	}
	return false;
}
