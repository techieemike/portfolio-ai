Stage	Run
Building Phase 1 (UI)	npm run dev only
Building Phase 2 (RAG)	npm run dev + docker compose up postgres (for the DB)
Building Phase 3 (Blog, Admin)	npm run dev + docker compose up postgres
Production deploy	docker compose up app (full Docker build)