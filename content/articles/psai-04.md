---
title: PSAI ep.04
slug: psai-04
category: PSAI
date: 2022.08.13
description: PSAI 마지막 에피소드
image: 
author: MinJun Choi
visibility: true
---

<center>
<img src="/psai-04/03.jpg"  width="800">
PeopleSpace
</center>

## 2022/08/10
### 발표 마지막 준비
* Wireframe 
* SRS (software requirement specification)
* Business Advertisement
* NER model
* Web Page

발표를 앞두고 크게 위의 5가지를 준비했다. </br>
단순히 기술적인 이야기 뿐만 아니라 실제 창업을 준비하는 것처럼 과정을 밟아왔기 때문에 비즈니스에 대한 이야기도 꽤 비중을 두고 준비를 해나갔다. </br>

### spaCy model
spaCy의 model을 한 번 학습시키는데 보통 40분이 걸린다. 원래는 그 이상의 시간이 필요한데 빠른 결과물을 보고자 frequency를 줄여서 학습을 시켜왔다. 지금까지 만든 Annotated Data를 합쳐서 총 110개의 Resume와 160개의 Job Description을 학습시켰고 이 모델을 저장해서 google drive에 mount 시켜놨다. 그럼 다음부터는 재학습시킬 필요없이 colab에서 google drive와 연동하면 쉽게 모델을 불러와 사용할 수 있다.
</br></br>
이대로 끝내기에는 아쉬워서 학습시킨 모델을 좀 더 활용하고자 했다. 사용자가 Resume와 본인이 원하는 Job Description을 넣어줬을 때 본인의 Resume에서 Job Description에서 요구하는 기준을 얼마나 충족시켜주었는지, 부족한 점은 무엇이 있는지 알려주도록 코드를 작성했다. 단순히 Indexing 작업과 List를 비교해주는 구문이라 혼자서도 금방 작성했다.
</br>

## 2022/08/12
### PSAI, 마지막 날
<center>
<img src="/psai-04/01.jpg"  width="800">
</center>

발표는 Q&A까지 포함해서 대략 30분정도 진행했다. </br>비즈니스적인 부분은 우리팀원이 발표를 했고 나는 주로 기술적인 부분에 대해서 발표를 진행했다. 발표에 사용한 모든 자료들은 [여기](https://github.com/tulee3474/AI_Resume_Builder)에 있다.</br></br>

### PSAI, 1달간의 프로그램을 마치고
<center>
<img src="/psai-04/02.jpg"  width="800">
</center>

처음 이 프로그램을 지원하게 된 계기는, AI에 대한 지식과 경험을 얻고 싶어서였지만 솔직하게 말하면 프로그램을 마친 지금 큰 지식의 도약이나 AI에 대한 깊은 분야를 접할 수는 없었다. 하지만 그럼에도 불구하고 너무나 얻어가는 게 많은 기회였다. </br>

본 프로그램을 통해 만난 사람들의 이야기를 듣고 소통하면서 다른 문화를 접하고 견문을 넓힐 수 있었다. 특히 세상을 재미있게 살아가는 방법을 배운 것 같다. 고등학교를 졸업하고 어느 순간 난 좋은 학교에 졸업해서 좋은 기업에 다니는 걸 당연한 목표로 삼았는데, 본인이 하고 싶은 게 무엇인지 뚜렷히 아는 사람들을 만나면서 고등학교 때 학교 수업을 제쳐두고 밤새 노트북을 붙잡고 하고 싶은 코딩을 했던 기억도 났고, 현실에 안주한 지금의 나를 되돌아볼 수 있었다. 빠르게 지나간 1달이었지만 정말 많은 것들을 보고 느끼고 배울 수 있었고, 세상은 내 생각보다 넓다는 사실을 다시 느꼈던 순간이었다. </br></br>