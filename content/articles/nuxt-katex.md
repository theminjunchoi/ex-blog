---
title: Nuxt content에서 Mathtype 사용하기
slug: nuxt-katex
tags: etc
date: 2022.09.14
description: 수식과 관련된 Package 알아보기
image: 
author: MinJun Choi
visibility: true
---
<center>
<img src="/nuxt-katex/01.png"  width="700">
</center>

## 삽질 배경
내 개인페이지는 올해 초에 처음 개발되기 시작했었다. 그때도 markdown에 수식을 적용하기 위해 이것저것 시도해보다가 포기했었는데 며칠 전부터 [스터디 페이지](https://choiminjun.com/study/computer-architecture/0-1)를 개발하면서 markdown에 수식을 적어야 할 일이 또 생기고 말았다.

### 문제 상황
본 페이지는 Nuxt content와 tailwindcss typography로 개발되었는데 둘 다 markdown에서 수식을 기본적으로 지원해주지 않기 때문에 내가 추가적으로 
플러그인이나 패키지를 다운받아 적용시켜줘야했다. 구글링을 하다보면 이 [GitHub Issue](https://github.com/nuxt/content/issues/102)가 그나마 제일 믿을 만한 정보가 많았는데 이 페이지뿐만 아니라 거의 모든 사이트들이 `rehype-katex`와 `remark-math` package를 다운받아 적용하라고 한다. 근데 문제는 `nuxt/content`, `rehype-katex`, `remark-math` package들이 새롭게 업데이트 되면서 서로 호환이 되도록 작업을 안해놨기 때문에 전부 다 최신 버전으로 다운 받아 사용할 경우 수식 적용 자체가 되지를 않는다. 

## 정답
### 삽질 방법
일단 Nuxt content에서 katex를 지원해주는 방법에 대한 거의 모든 글을 읽어봤을만큼 몇 시간동안 구글링을 해보고 모든 버전들끼리 조합을 해본 뒤에 정답을 찾았다. 또한 `nuxt/content`을 바꿔주게 되면 수식이 필요없는 파일들에게도 영향이 갈 수 있어서 `rehype-katex`, `remark-math` package들만 버전 조합을 찾아봤다. npm downgrade를 하면 쉬운데 에러가 많이 나서 매번 **노드 모듈**들을 지워주고 **package.json**을 수정한다음에 새롭게 모듈들을 깔아보면서 로컬에서 실행해보며 확인해주었다.

### 결론
<pre class="no-line-numbers language-javascript">
<code>"dependencies": {
    "@nuxt/content": "^1.15.1",
    "rehype-katex": "^4.0.0",
    "remark-math": "^4.0.0",
    "katex": "^0.15.3",
  },
</code></pre>

<center>package.json</center>

우선 위에서부터 언급한 3가지 package들은 저 버전들로 설치를 해놔야 호환이 된다. 특히 `rehype-katex`는 5버전, `remark-math`는 4버전을 넘기면 안된다. 추가로 `katex` package도 필요한데, 이 package가 없으면 수식을 인식하긴하는데 우리가 원하는대로 깔끔하게 적용되지 않는다.
</br></br>

<pre class="no-line-numbers language-javascript">
<code>css: [
    {
      src: 'katex/dist/katex.min.css',
      defer: true
    },
    "@/assets/css/main.css"
  ],
content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex']
    },
  },
</code></pre>

<center>nuxt.config.js</center>

그리고 나서 **nuxt.config.js** 파일에 가서 위와 같이 적용을 시켜줘야한다.


## 마무리
아무리 구글링을 해도 답이 안나오길래 Github에 Nuxt content로 빌드된 페이지 레포 중에 markdown에서 수식을 지원해줄 수 있게 작업한 것들을 찾아봤다. 유일하게 한 개가 있었는데 그 레포에서는 `katex` package를 추가로 설치해서 적용해주길래 똑같이 적용시켜보았다. 

이럴 때 보면 확실히 Nuxt가 React에 비해 커뮤니티 활성도가 조금 낮은 듯하다. 지금은 Nuxt가 너무 익숙해져서 넘어갈 생각은 없지만 프로그래밍을 하는데에 있어 커뮤니티가 기여하는 점이 크다는 것을 알았다. 

적게 잡아도 5시간정도는 이 작업만 한 것 같다. 중간에 던질까 생각도 많았는데 모든 경우를 시도해보지 않으면 나중에 후회할 것 같아서 광기어린 눈으로 지구끝까지 삽질을 해보았다. 나처럼 Nuxt content에 mathtype을 적용하고자 하는 사람이 많을 것 같은데 도움이 됐으면 좋겠다.
