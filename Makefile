
test:
	@echo "TODO: create Tests"

docs: clean
	@echo "Create a new docs directory and generate the documentation."
	@mkdir docs
	@./node_modules/jsdoc/jsdoc --destination docs ./src ./README.md

clean:
	@rm -rf docs
	@echo "Old documentation removed."

.PHONY: test docs clean
