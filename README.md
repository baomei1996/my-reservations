# MyReservations

## 프로젝트 구동방법

1. 모듈 패키지 설치

```
    yarn
```

2. 프로젝트 실행

```
    yarn start
```

## Router 설명

1. 예약 리스트 페이지
    - `/`
2. 예약 등록 페이지
    - `/reservation`
3. 예약 수정 페이지
    - `/edit/:id`

## Component 설명

1. Button
    - 공통 버튼 스타일 및 shadow 처리하는 컴포넌트
2. Counter
    - +, - 버튼으로 카운트 컨트롤하는 컴포넌트
3. HomeHeader
    - index 페이지 header 컴포넌트
4. Layout
    - 공통 레이아웃 컴포넌트 (max-width 지정)
5. ReservationCard
    - 예약된 정보를 담은 카드 컴포넌트
6. ReservationForm
    - 예약 등록/수정 양식 컴포넌트
7. ReservationHeader
    - 등록/수정 페이지 header 컴포넌트
8. SelectDate
    - Date 선택 버튼 및 Dialog 컴포넌트
9. TextInput
    - 공통 input 스타일 컴포넌트
10. Textarea
    - 공통 textarea 스타일 컴포넌트
