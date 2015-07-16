# baldercm/sqs-poc Makefile

default: dev-install

dev-install:
	npm cache clean
	npm install --global jshint
	npm install

.PHONY: test
