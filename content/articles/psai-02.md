---
title: PSAI ep.02
slug: psai-02
tags: PSAI
date: 2022-07-31
description: PSAI에서는 도대체 무엇을 하는가!
image: 
author: MinJun Choi
visibility: true
---
<center>
<img src="/psai-02/01.jpg"  width="500">
PeopleSpace
</center>

## 2022/07/21
### 첫 출근
오늘 드디어 첫 출근(?)을 했다. 가자마자 매일하는 정기 모임을 하고 가볍게 테스트를 통해 뒤 늦게 팀 배정을 받았다. </br>
대략 한달간의 일정은 아래와 같다. ~~노는 게 반인 건 비밀~~
<center>
<img src="/psai-02/02.png"  width="700">
</center>
그 후에는 늦게 참가를 해서 못 들은 설명을 형누나들한테 들었다.</br>
팀은 총 3팀이고 각 팀마다 세부주제가 달랐다.

### 우리는 무엇을 하는가!
- 가상의 비즈니스를 만든다
    - advanced employee를 대상, job description에 맞는 resume을 제작해주는 비즈니스
- 프론트엔드
    - WordPress
- 백엔드
    - X (생략)
- AI
    - doccano에서 직접 우리가 annotation
    - spaCy 라이브러리에서 train & test


## 2022/07/26
### Doccano란?
Doccano는 text annotation을 도와주는 tool 중에 하나다.
<center>
<img src="/psai-02/03.jpg"  width="700">
</center>
사용자가 원하는 단어나 구절에 원하는 label을 갖고 annotation을 해줄 수 있다.</br>
우리는 docker를 통해서 각자 local에서 작업을 했고 docker에서 image를 다운받아 사용하는 법은 아래와 같다.

```
docker pull doccano/doccano
docker container create --name doccano \
  -e "ADMIN_USERNAME=admin" \
  -e "ADMIN_EMAIL=admin@example.com" \
  -e "ADMIN_PASSWORD=password" \
  -v doccano-db:/data \
  -p 8000:8000 doccano/doccano
```

### Doccano를 왜 사용하나?
spaCy의 모델을 학습시키려면, **text와 그 text의 어느 부분을, 어떤 label로 annotation을 했는지**에 대한 데이터가 필요하다. </br>
처음에는 각 조별로 annotation을 하다가 train의 정확성을 위해 결국 나중에는 다같이 데이터를 만들었는데, resume은 110개, job description은 160개 정도 annotation을 한 것 같다.
``` js
[
  {
    "id": 297,
    "text": "Web Developer Resume Template (Full Text Version)\nOlivier Baudet\nAddress: 44 place de Miremont, 77170, Paris, France\nEmail address: olivierbaudet@gmail.com\nPhone number: 01.32.70.82889\nWeb: www.olivierbaudet.com\nProfile\nCreative web developer dedicated to developing and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of web developers.\n\nWork experience\n09/2017 - 01/2019, Web Developer, IDOX Software Ltd, Paris, France\nDeveloped and structured feature-rich client websites, ensuring that all needs were met and company policies and procedures followed; created high-quality code.\nCollaborated with project managers and creative teams to deliver original, efficient solutions; advised clients and provided expertise.\nManaged a team of 7 freelance web developers and designers; trained and educated other web developers; measured the performance of the team.\nConducted market research and analysis and reported findings to managers.\n07/2014 - 09/2017, Web Developer - PHP / MySQL, Stewart Travel Ltd, London, United Kingdom\nCollaborated with the team to design, structure, and implement new websites from start to finish; updated existing websites.\nDeveloped a user-friendly architecture; provided support and customer service; trained and educated staff.\nParticipated in weekly meetings with executives, supported brainstorming and idea generation.\nAwarded Employee of the Month for performing great work.\nEducation\n09/2010 - 05/2014, Web Design and Development Bsc (Hons), University of Central Lancashire, Lancashire, United Kingdom\nFirst Class Honours\n\nClubs and Societies: Entrepreneurship Society, Football Club, Tennis Club\n\n09/2008 - 05/2010, IB Diploma Programme, International School of Paris, Paris, France\nGraduated with Distinction\n\nSkills\nLanguages Skills\nFrench\nEnglish\nGerman\nComputer Skills\nMicrosoft Office\nAdobe Dreamweaver CC, PHP\nMySQL, HTML\nJavaScript, Java\nC++, CSS\nInterpersonal/Life Skills\nAnalytical Skills\nDetail-oriented\nGood Team Player\nMulti-tasking\nVolunteering\n03/2010 - 05/2015, Fund Allocator, The Paris Foundation, Paris, France\nCertificates\n10/2017, Zend Certified PHP Engineer, Zend Certification Programs\n08/2017, ACE Web Specialist, Distance Learning Centre\n05/2016, Mobile Web Specialist, Google Developers Certification\nHobbies\nExploring distant lands\nCapturing moments\nEvery kind of sport",
    "label": [
      [0, 13, "ability"],
      [623, 655, "work experience"],
      [671, 724, "work experience"],
      [1202, 1249, "work experience"],
      [1274, 1349, "work experience"],
      [1399, 1437, "work experience"],
      [1600, 1655, "award"],
      [1686, 1712, "major"],
      [1713, 1716, "degree"],
      [1725, 1757, "college"],
      [1900, 1921, "education"],
      [2020, 2026, "skill"],
      [2027, 2034, "skill"],
      [2035, 2041, "skill"],
      [2058, 2074, "skill"],
      [2075, 2095, "skill"],
      [2097, 2100, "skill"],
      [2101, 2106, "skill"],
      [2108, 2112, "skill"],
      [2113, 2123, "skill"],
      [2125, 2129, "skill"],
      [2130, 2133, "skill"],
      [2135, 2138, "skill"],
      [2165, 2182, "ability"],
      [2183, 2198, "ability"],
      [2199, 2215, "ability"],
      [2216, 2229, "ability"],
      [2336, 2363, "skill"],
      [2402, 2420, "skill"],
      [2456, 2477, "skill"]
    ]
  }
]

```
위의 데이터가 resume 1개를 annotation 했을 때의 모습이고, 이런 데이터들이 많이 필요했다. </br>
왜 학교나 연구실에서 ai 데이터 생성 알바를 뽑는지 알 수 있었다..ㅋㅋ

**다음 포스트에서는 spaCy의 model이 어떤 식으로 학습을 하고 최적화를 하는지 알아보겠다.**