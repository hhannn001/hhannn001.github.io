# hhannn001의 블로그

https://hhannn001.github.io

GitHub Pages + Jekyll 개인 블로그입니다.

## 글 추가

GitHub에서 `_posts/YYYY-MM-DD-slug.md` 파일을 만들고 아래 형식으로 작성한 뒤 `main` 브랜치에 커밋하세요.

```markdown
---
layout: post
title: "글 제목"
date: 2026-11-12 12:00:00 +0900
categories: 기록
---

여기에 Markdown으로 글을 작성합니다.
```

파일명과 date는 실제 게시 날짜로 바꾸세요. 미래 날짜의 글은 해당 날짜 전에는 표시되지 않습니다.

## 기본 설정

- 블로그 이름과 설명: `_config.yml`
- 소개: `about.md`
- 첫 화면: `index.md`
- 글: `_posts/`
- 배포: Settings → Pages → Deploy from a branch → main / (root)

## 로컬 미리보기 (선택)

Ruby와 Bundler 설치 후:

```sh
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인합니다.

## 디자인 초안

기본 화이트 모드이며 헤더 버튼으로 다크 모드를 선택할 수 있습니다. 선택은 이 브라우저에 저장됩니다. OS에 따른 자동 전환은 아직 적용하지 않습니다. 색상은 `assets/blog.css`의 테마 변수로 분리했습니다.

`published: false`인 글 3개는 디자인 확인용 샘플입니다. 기본 배포에는 포함되지 않습니다. 샘플까지 미리보려면 `bundle exec jekyll serve --unpublished`를 실행하세요.

글의 선택 항목: `description`, `category_key` (engineering / ai / notes), `category_label`, `cover` (이미지 경로), `cover_alt`.

정보 박스는 `<div class="callout" markdown="1">` 안에 Markdown으로 작성할 수 있습니다. 일반 제목, 목록, 코드 블록, 표, 인용문은 기본 Markdown 문법을 사용합니다.

## 원본 레이아웃 기준

당근 기술 블로그 https://medium.com/daangn 의 공개 DOM과 계산된 CSS를 확인해 레이아웃을 맞췄습니다. 최대 폭 1192px, 24px 열 간격, 2:1 썸네일, 홈 3열, 카테고리 대표 글은 이미지:본문 1.26:1입니다.

배너는 비교용으로 원본 공개 이미지를 사용합니다. 출처는 assets/SOURCES.md에 기록했습니다. 색상과 블로그 이름, 글 내용은 개인 블로그 설정을 따릅니다.
