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

out vec4 color;

void main ( void )
{
    // <solution>
    vec4 pos_h = vec4(in_v, 1.0);
    vec3 P = vec3(matMV * pos_h);
    vec3 N = normalize(matN * in_n);
    color = vec4(computeLighting(P, N, lightPos, kd, I.r),
                 computeLighting(P, N, lightPos, kd, I.g),
                 computeLighting(P, N, lightPos, kd, I.b),
                 1.0);
    gl_Position = matP * matMV * pos_h;
    // </solution>
}
