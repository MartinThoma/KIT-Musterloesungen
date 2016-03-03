# version 140

// <solution>
// TODO
// </solution>

out vec4 out_color ; // Ausgabefarbe bestimmt unter Verwendung
                     // von computeLighting ()
void main ( void )
{
    // <solution>
    // TODO
    out_color = computeLighting(position, normal, lightPos, kd, I);
    // </solution>
}
