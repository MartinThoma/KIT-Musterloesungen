# version 140
uniform mat4 matMV; // Modelviewmatrix zur Transformation
                    // von  Objekt - nach Kamerakoordinaten
uniform mat4 matP;  // Projektionsmatrix
uniform mat3 matN;  // Normalenmatrix

uniform vec3 I;         // Intensitaet der Lichtquelle I_L
uniform vec3 lightPos ; // Lichtposition in Kamerakoordinaten

in vec3 in_v ; // enthaelt Vertex in Objektkoordinaten
in vec3 in_n ; // enthaelt Normalenvektor mit Laenge 1
in float kd ;  // Materialkoeffizient k_d


void main ( void )
{
    // <solution>
    gl_Position = //TODO;
    // </solution>
}
