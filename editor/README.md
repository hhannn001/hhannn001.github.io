# hhannn001 Local Editor

`editor/`는 `_posts/*.md`를 로컬에서 관리하기 위한 Electron 기반 마크다운 편집기입니다.

## 기능

- 좌측 카테고리/포스트 탐색 (`_data/sidebar_categories.yml` + `_posts`)
- 마크다운 편집 + 미리보기
- 포스트 CRUD (삭제 시 `_posts/.trash` 이동)
- front matter 자동 매핑 (제목/설명/카테고리/태그)
- 저장 전 SEO 규칙 검증
- Git status / 선택 파일 커밋+푸시

## 실행

```bash
npm run editor:install
npm run editor:dev
```

위 명령은 블로그 저장소 루트에서 실행합니다. 실행 스크립트가 현재 저장소를 작업 폴더로 지정합니다.
기존의 추가 메타데이터와 글 파일명은 수정 저장 시 보존됩니다.

## 빌드

```bash
cd editor
npm run build
```

- macOS/Windows 패키지는 `editor/release/`에 생성됩니다.

## Git 커밋/푸시

현재 체크아웃된 브랜치에 바로 커밋/푸시합니다.
