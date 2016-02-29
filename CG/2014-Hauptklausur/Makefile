SOURCE = 2014-Hauptklausur

make:
	pdflatex -shell-escape $(SOURCE).tex -output-format=pdf
	pdflatex -shell-escape $(SOURCE).tex -output-format=pdf # references
	make clean

clean:
	rm -rf  $(TARGET) *.class *.html *.log *.aux *.out _minted-*/
