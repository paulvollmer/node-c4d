
docs: docclean
	@mkdir docs
	@./node_modules/jsdoc/jsdoc --destination docs ./src ./README.md

docclean:
	@rm -rf docs
	@echo "Removed generated docs"

.PHONY: docs docclean