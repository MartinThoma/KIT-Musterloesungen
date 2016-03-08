uniform mat4 VP; // View-Projection Matrix
uniform sampler2D heightMap; // Höhenkarte (Rot-Komponente speichert Höhe)
uniform vec2 rcpHMS; // Kehrwerte der heightMap-Auflösung in s- und t-Richtung

// (r,g,b) == (x-Position, z-Position, Skalierung)
uniform sampler1D treeInstanceData;
in vec3 POS; // Vertex-Position in Objektkoordinaten
in vec3 NRM; // Vertex-Normale in Objektkoordinaten
out vec3 wpos; // Vertex-Position in Weltkoordinaten
out vec3 wnrm; // Vertex-Normale in Weltkoordinaten
void main(void)
{
    vec3 data = texelFetch(treeInstanceData, gl_InstanceID, 0);

    // <solution>
	// Höhe aus Höhenkarte auslesen
	float height = texture(heightMap, data.xy * rcpHMS).r;

	// Baum wird um data.xy in xz-Richtung und um height in y-Richtung
	// verschoben
	vec3 translation = vec3(data.x, height, data.y);

	// Weltposition durch Skalierung und Verschiebung
	wpos = data.z * POS + translation;

	// Die Normale bleibt gleich
	wnrm = NRM;

	// Transformation der Position von Welt- in Clipkoordinaten
    gl_Position = VP * vec4(wpos, 1.);
    // </solution>
}
