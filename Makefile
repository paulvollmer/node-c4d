
docs: docclean
	@mkdir docs
	@node node_modules/jsdoc2/app/run.js -a -t=node_modules/jsdoc2/templates/jsdoc -d=docs src/

docclean:
	@rm -rf docs

.PHONY: docs docclean