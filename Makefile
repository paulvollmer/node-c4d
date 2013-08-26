
docs: docclean
	@mkdir docs
	@node node_modules/jsdoc2/app/run.js --allfunctions --template=node_modules/jsdoc2/templates/jsdoc --directory=docs src/

docclean:
	@rm -rf docs
	@echo "Removed generated docs"

.PHONY: docs docclean