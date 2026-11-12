# hhannn001의 블로그

https://hhannn001.github.io

GitHub Pages + Jekyll + Minima 기본 블로그입니다.

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
