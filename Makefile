
test: test-clean
	@node node_modules/.bin/mocha --ui tdd --reporter spec

test-html: test-clean
	@node node_modules/.bin/mocha --ui tdd --reporter html-cov > test-coverage.html

test-c4d: test-clean
	@echo "\n---> Testing Cinema 4D cli\n\n"
	@node bin/c4d -h
	@node bin/c4d -V
	@echo "\n---> Testing Cinema 4D programmatically\n\n"
	@echo "c4d -r test/files/project.c4d\n"
	@node bin/c4d -r test/files/project.c4d
	@echo "c4d -r test/files/project.c4d --frame 0,2\n"
	@node bin/c4d -r test/files/project.c4d --frame 0,2

test-clean:
	@rm -f test/report.json
	@rm -f test/report.xml
	@rm -f test/report.txt
	@rm -f test-coverage.html

docs: docs-clean
	@echo "Create a new docs directory and generate the documentation."
	@mkdir docs
	@node node_modules/.bin/jsdoc --destination docs ./src ./README.md

docs-clean:
	@rm -rf docs
	@echo "Old documentation removed."

clean: test-clean docs-clean

hint:
	@node node_modules/.bin/jshint src/ bin/c4d

.PHONY: test test-html test-c4d test-clean docs docs-clean clean hint
