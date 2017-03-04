uniform vec3 L; // Lichtposition in Kamerakoordinaten

// Materialparameter
uniform vec3 ka, kd, ks;
uniform float pexp; // Phong Exponent

// Intensität der Lichtquelle
uniform vec3 intensity;

in vec3 P_k;
in vec3 n_k;

void main()
{
	vec3 n = n_k;
	vec3 v = normalize(-P_k); /* Kamera im Ursprung vec3(0.0) */
	vec3 l = normalize(L - P_k);
	vec3 r = reflect( -l, n );
	float cosAlpha = max(0.0, dot(v, r));
	vec3 diffuse = kd * max(0.0, dot(l, n));
	vec3 specular = ks * pow(cosAlpha, pexp);
	gl_FragColor = vec4(intensity * (ka + diffuse + specular), 1.0);
}
