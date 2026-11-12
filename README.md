# hhannn001의 블로그

Jekyll + GitHub Pages. 현재 이식본은 `design/lavender-notes` 초안 브랜치입니다.
기존 원본 폴더 대신 이 저장소를 작성 도구의 작업 폴더로 사용합니다.

## 글 작성

`_posts/YYYY-MM-DD-slug.md`에 Markdown으로 작성합니다. 기존 글의 파일명은 바꾸지 않습니다.
제목을 바꿔도 파일명을 유지하면 글 주소와 다른 글의 post_url 링크가 유지됩니다.

```markdown
---
title: "[컴퓨터구조] 새로운 글 제목"
description: "글 목록과 검색 결과에 표시할 요약입니다."
categories: [cs]
tags: [cpu, architecture]
# cover: /assets/images/example.png
# cover_alt: 대표 이미지 설명
# published: false
---

## 제목

본문, 목록, 인용, 표, 코드 블록, 이미지와 HTML을 사용할 수 있습니다.
```

- 카테고리는 표시 이름 대신 `_data/sidebar_categories.yml`의 하위 ID를 사용합니다.
- 예: AI → `ai`, CS → `cs`, Software Engineering → `se`, 회고 → `journal`.
- `전체`는 조회용 메뉴이며 저장할 카테고리가 아닙니다.
- `[시리즈명]`은 글 제목의 분류 표기입니다. 글 내부에서는 제목 위에 별도로 표시됩니다.
- 여러 카테고리도 허용합니다. 대분류 목록에는 글이 중복되지 않고 첫 카테고리가 글의 탐색 경로가 됩니다.
- 목록의 미리보기 이미지는 현재 빈 연보라 플레이스홀더입니다. 본문 이미지는 그대로 표시하며, 대표 이미지 연결은 다음 단계에서 적용합니다.
- 이미지는 `assets/images/`에 넣고 `![설명](/assets/images/file.png)`로 연결합니다.
- 다른 글 링크: `[링크 제목]({% post_url 2025-10-22-welcome %})`.
- 날짜는 파일명 기준입니다. 미래 날짜는 기본 빌드에서 제외됩니다. 공개 전 글에는 `published: false`를 사용합니다.
- 주소는 `/blog/YYYY/MM/DD/slug/`입니다. 원본 블로그와 같은 경로를 보존합니다.

## 로컬 작성 도구

Node.js와 npm을 설치한 뒤 이 저장소 루트에서:

```sh
npm run editor:install
npm run editor:dev
```

기존 Electron 작성 도구의 Markdown 편집, 미리보기, 태그, 글/카테고리 관리 기능을 가져왔습니다.
실행 스크립트가 현재 저장소를 작업 폴더로 지정합니다. 상단 작업 폴더가 이 저장소인지 확인하세요.
저장할 때 기존 published, cover, permalink 등 추가 메타데이터를 보존합니다.
추가 필드는 Markdown 파일에서 수정할 수 있습니다.

작성 도구의 미리보기는 기본 화이트이며 블로그와 본문 CSS를 공유합니다.
Jekyll의 Liquid 태그(post_url/include), 플러그인 처리는 로컬 Jekyll 미리보기로 최종 확인합니다.
커밋/푸시는 현재 체크아웃된 브랜치에 적용됩니다. 초안 검토 중에는 design/lavender-notes를 유지합니다.
원본 LH99Tw 폴더를 선택하면 원본에 저장되므로 이식한 저장소를 선택하세요.

## 카테고리 관리

상단은 **전체 → 프로그래밍 → 금융 → 일상** 순서입니다.
각 대분류 안에서도 **전체**가 항상 첫 번째이고, 뒤에 설정 파일의 하위 카테고리 순서가 이어집니다.
모바일에서는 하위 메뉴를 표시하지 않고 대분류만 탐색합니다. 데스크톱의 하위 카테고리는 URL로 상태를 유지하므로 새로고침/뒤로가기/링크 공유가 가능합니다.

작성 도구에서 하위 카테고리를 추가하면 설정과 페이지가 함께 생성됩니다.
ID 변경 시 글의 분류를 갱신하고 이전 주소에는 이동 페이지를 남깁니다.
이미 사용하거나 이전 주소로 보존한 ID, 대분류 ID와 all은 재사용할 수 없습니다.
글이 있는 카테고리는 삭제할 수 없습니다. 빈 카테고리를 삭제하면 이전 주소는 대분류로 이동합니다.
대분류 자체를 추가하려면 설정과 categories/<id>/index.md의 그룹 페이지를 함께 추가합니다.

## 로컬 사이트 미리보기

Ruby/Bundler 설치 후:

```sh
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인합니다. 비공개 글을 검토하려면 `--unpublished`를 추가합니다.
GitHub Pages는 main 브랜치를 배포합니다. 초안 브랜치의 변경은 검토 후 병합해야 공개됩니다.

## 디자인

홈/목록은 당근 기술 블로그의 공개 페이지 레이아웃을 기준으로 구성했습니다.
본문은 이식 원본의 명조 제목, 본문 폭, 줄 간격, 표/코드/태그 양식을 옮기고 우측 목차를 제외했습니다.
글자는 흑백과 중립 회색, 배경과 면 장식은 연보라 계열입니다.
최초 방문은 화이트이고 사용자의 수동 다크 선택을 저장합니다. OS 자동 전환은 아직 적용하지 않습니다.

색상/목록: assets/blog.css, 본문/공유 미리보기: assets/css/style.css.
배너 원본 출처는 assets/SOURCES.md에 있습니다.

## 검증

```sh
node tests/blog.test.cjs
npm --prefix editor test
npm --prefix editor run typecheck
```

원본 글 21개와 이미지 12개를 옮겼습니다. 원본 폴더는 변경하지 않았습니다.
기존 도메인의 검색 소유권 인증, 광고, 분석 설정은 새 도메인에 자동으로 이식하지 않습니다.

## 소셜 링크

프로필의 GitHub, Instagram, LinkedIn, Threads 주소는 기존 블로그의 공개 계정 정보를 사용합니다.
X는 계정 주소를 찾지 못해 현재 X 홈으로 연결합니다. 실제 계정이 정해지면 `_config.yml`의 `social_x_url`을 바꾸세요.
