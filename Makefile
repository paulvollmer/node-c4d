
test: test-clean
	@./node_modules/.bin/mocha --ui tdd --reporter spec

test-html: test-clean
	@./node_modules/.bin/mocha --ui tdd --reporter html-cov > test-coverage.html

test-clean:
	@rm -f test/report.json
	@rm -f test/report.xml
	@rm -f test/report.txt
	@rm -f test-coverage.html
	

docs: docs-clean
	@echo "Create a new docs directory and generate the documentation."
	@mkdir docs
	@./node_modules/jsdoc/jsdoc --destination docs ./src ./README.md

docs-clean:
	@rm -rf docs
	@echo "Old documentation removed."

clean: test-clean docs-clean

.PHONY: test test-html test-clean docs docs-clean clean
