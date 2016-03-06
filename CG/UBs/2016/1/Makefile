SOURCE = 2015-UB-1

make:
	pdflatex -shell-escape $(SOURCE).tex -output-format=pdf
	pdflatex -shell-escape $(SOURCE).tex -output-format=pdf # references
	make clean

clean:
	rm -rf  $(TARGET) *.class *.html *.log *.aux *.out _minted-*/
