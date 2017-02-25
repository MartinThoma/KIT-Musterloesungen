# version 140

// <solution>
in vec4 color;
// </solution>

out vec4 out_color ; // Ausgabefarbe bestimmt unter Verwendung
                     // von computeLighting ()
void main ( void )
{
    // <solution>
    out_color = color;
    // </solution>
}
