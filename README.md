# unkown

일단 무언가

## GitHub PR 자동화

이 프로젝트는 Claude Code를 사용한 GitHub PR 자동 생성 기능을 지원합니다.

### 사용 방법

#### 1. Claude Code CLI에서 직접 사용

**방법 A: 대화형 PR 생성**
```bash
/create-pr
```
- 현재 변경사항 확인
- 브랜치 생성 (필요시)
- 커밋 메시지 작성
- PR 생성
- 모든 단계에서 확인 가능

**방법 B: 빠른 PR 생성**
```bash
/quick-pr
```
- 자동으로 모든 변경사항 커밋
- 자동으로 브랜치 생성
- 자동으로 PR 생성
- 확인 단계 없이 빠르게 실행

#### 2. GitHub Actions에서 자동 실행

GitHub Issue나 PR 댓글에서 다음과 같이 사용:

```
@claude implement user authentication feature
@claude fix the type errors in src/components
@claude refactor the API client to use async/await
```

Claude가 자동으로:
1. 변경사항 작성
2. 커밋 및 푸시
3. 결과를 댓글로 알림

### 설정 방법

#### 1. GitHub Secrets 설정

Repository Settings → Secrets and variables → Actions에서 다음 추가:

- `ANTHROPIC_API_KEY`: Anthropic API 키 ([여기서 발급](https://console.anthropic.com/))

#### 2. GitHub Token 권한 확인

Repository Settings → Actions → General → Workflow permissions에서:
- ✅ Read and write permissions 선택
- ✅ Allow GitHub Actions to create and approve pull requests 체크

### 커스텀 명령어

- `/create-pr` - 대화형 PR 생성 (권장)
- `/quick-pr` - 빠른 PR 생성
- `/review` - PR 코드 리뷰
- `/security-review` - 보안 검토
- `/pr-comments` - PR 댓글 확인

### 주의사항

- GitHub Actions 워크플로우는 `@claude` 멘션이 있을 때만 실행됩니다
- API 비용이 발생할 수 있으니 필요한 경우에만 사용하세요
- 생성된 PR은 항상 리뷰 후 병합하세요
