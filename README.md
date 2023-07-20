# Todo Application By React

## 구현 목표 목록

- Light, Dark 모드
- Todo 리스트 CUD
  - Todo Create
    - Form을 통한 Todo 생성
    - Input 과 Button
  - Todo Update
    - Checkbox 체크 시 Completed 처리 > 내용 취소선 및 글자색상 grey로 변경
    - 내용 수정 가능
  - Todo Delete
    - 우측 끝에 휴지통 아이콘 클릭 시 삭제
    - 아이콘 마우스오버 시 아이콘 색상 변경 및 회전
- Todo 리스트 필터링 : 탭 형식으로 활성화된 탭 밑줄 처리
  - All: 모든 리스트
  - Active: 현재 진행중인 리스트
  - Completed: 완료한 리스트
- Todo 리스트 유지
  - LocalStorage에 저장하여 다시 페이지 접속 시 유지.

## 레이아웃

- 화면 가운데에 카드 형식
- 헤더 (20%)
  - 좌측 : Light, Dark 모드 아이콘 버튼
  - 우측 : 리스트 필터링 탭 (All, Active, Completed)
- 메인 (80%)
  - 상단 (70%)
    - Todo 리스트
      - 각 라인 별
        - 좌측 : 체크박스 + Todo 내용
        - 우측 : 삭제 휴지통 아이콘
  - 하단 (30%)
    - Todo 입력 Form
      - 좌측 : 내용 입력 Input
      - 우측 : Todo 추가 버튼
