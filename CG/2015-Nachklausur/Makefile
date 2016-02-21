SOURCE = 2015-Nachklausur

make:
	pdflatex $(SOURCE).tex -output-format=pdf
	pdflatex $(SOURCE).tex -output-format=pdf # references
	make clean

clean:
	rm -rf  $(TARGET) *.class *.html *.log *.aux *.out
