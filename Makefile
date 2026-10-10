.PHONY: format format-check

format:
	npx prettier --write 'src/content/**/*.md'

format-check:
	npx prettier --check 'src/content/**/*.md'
