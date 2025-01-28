# Compound Interest Calculator

**인플레이션을 반영한 실질 복리 계산기**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **useReducer를 사용한 input 태그 관리**: `useReducer`를 활용해 여러 input 필드의 상태를 체계적으로 관리합니다.
- **Context의 Custom Hook화**: `useContext`를 커스텀 훅으로 변환해 상태 접근을 간결하게 만듭니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **핵심 학습 내용**

### 1. useReducer를 사용한 input 태그 관리

`useReducer`를 사용해 상태 업데이트 로직을 중앙 집중화했습니다.

```typescript
import { InputAction, InputState } from "@/types/input-reducer";

export const initialState: InputState = {
  monthlyContribution: "",
  annualInterestRate: "",
  savingPeriod: "",
  inflationRate: "2",
};

export const inputReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "SET_MONTHLY_CONTRIBUTION":
      return {
        ...state,
        monthlyContribution: action.payload,
      };
    case "SET_ANNUAL_INTEREST_RATE":
      return {
        ...state,
        annualInterestRate: action.payload,
      };
    case "SET_SAVING_PERIOD":
      return {
        ...state,
        savingPeriod: action.payload,
      };
    case "SET_INFLATION_RATE":
      return {
        ...state,
        inflationRate: action.payload,
      };
    default:
      return state;
  }
};
```

### 2. Context의 Custom Hook화

Context API를 사용해 상태 관리를 전역화하고, 이를 커스텀 훅으로 감싸서 간단히 재사용할 수 있도록 설계했습니다.

```tsx
"use client";

import { useContext } from "react";
import { InputContext } from "@/contexts/input-context";

export const useInput = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error("useInput must be used within an InputProvider");
  }

  const { state, dispatch } = context;

  return { state, dispatch };
};
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
