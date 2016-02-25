uniform samplerCube eMap; // Environment Map mit diffuser Beleuchtung
uniform sampler2D
nMap; // Normal Map mit Normalen in Objektkoordinaten
uniform mat3 matO2W; // Transformationsmatrix von Objekt- zu Weltkoordinaten
uniform mat3 matW2O; // Transformationsmatrix von Welt- zu Objektkoordinaten
uniform vec3 kd; // diffuser Reflexionskoeffizient
in vec2 tc;
// Texturkoordinate des Fragments
out vec3 color; // Ausgabefarbe des Fragments
void main(void)
{
    TODO
}