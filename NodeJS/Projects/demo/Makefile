start-dev:
	npm run start:dev

dev.migrate-new:
	@if [ -z "$(m)" ]; then \
		echo "Error: name is required but not set."; \
		echo "Hint: make dev.migrate-new m=\"<migration_name>\""; \
		exit 1; \
	fi
	npx prisma migrate dev --name "$(m)"

dev.migrate-sync:
	npx prisma migrate dev