---
layout: post
title: "Markdown으로 글 작성하기"
date: 2026-11-12 10:00:00 +0900
published: false
category_key: engineering
category_label: Engineering
description: "제목부터 코드 블록까지. 읽기 편한 기술 기록을 위한 Markdown 스타일을 살펴봅니다."
---
<div class="callout" markdown="1">
<span class="callout-label">미리보기 안내</span>

이 글은 **디자인 확인용 미공개 샘플**입니다. 제목, 코드, 표, 인용문 등 Markdown이 실제 글에서 어떻게 보이는지 확인할 수 있습니다.
</div>

기록은 완벽한 문장보다 작은 메모에서 시작됩니다. 오늘 이해한 개념과 해결한 문제를 나만의 언어로 남겨보세요.

## 작은 단위로 나누어 쓰기

긴 설명은 제목으로 나누고, 핵심은 **굵게 강조**합니다. `Markdown`을 사용하면 내용에 집중하면서도 일관된 글을 만들 수 있습니다.

1. 어떤 문제를 만났는지 적습니다.
2. 시도한 방법과 결과를 정리합니다.
3. 다음에 기억할 내용을 남깁니다.

> 좋은 기록은 미래의 내가 같은 문제를 조금 더 쉽게 해결하도록 돕습니다.

## 코드는 맥락과 함께

코드 앞에는 목적을, 뒤에는 결과를 짧게 설명합니다. 아래는 간단한 글 제목 표시 예시입니다.

```javascript
const title    = '오늘 배운 것';
const category = 'Engineering';

function formatTitle(text) {
  return text.trim();
}

console.log(formatTitle(title));
```

### 비교할 내용은 표로 정리하기

| 요소 | 작성 방법 | 용도 |
| --- | --- | --- |
| 제목 | `## 제목` | 내용의 흐름 나누기 |
| 코드 | 백틱으로 감싸기 | 코드와 명령어 구분 |
| 인용 | `> 문장` | 기억할 문장 강조 |
| 링크 | `[이름](주소)` | 참고 자료 연결 |

## 다음 기록을 위한 메모

- 길게 쓰기보다 꾸준히 남기기
- 결과뿐 아니라 선택한 이유 적기
- 시간이 지나면 다시 읽고 고치기

---

이제 나만의 기록을 시작할 준비가 됐습니다. [GitHub에서 블로그 파일 보기](https://github.com/hhannn001/hhannn001.github.io).
