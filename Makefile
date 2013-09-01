
test: test-clean hint
	@node node_modules/.bin/mocha --ui tdd --reporter spec

test-html: test-clean
	@node node_modules/.bin/mocha --ui tdd --reporter html-cov > test-coverage.html

test-c4d: test-clean
	@echo "---> Testing Cinema 4D cli"
	@node bin/c4d -h
	@node bin/c4d -V
	@echo "---> Testing Cinema 4D programmatically"

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
