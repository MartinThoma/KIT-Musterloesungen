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

    // Aufgabe beginnt hier:
    // wpos = TODO;
    // wnrm = TODO;
    gl_Position = VP * vec4(POS, 1);
}