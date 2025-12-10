---
description: Quickly commit all changes and create a PR
tags: [git, github, pr, quick]
---

You are helping create a quick GitHub Pull Request with automatic commits. This is a streamlined version of /create-pr.

1. **Check Current State**
   - Run `git status` and `git diff` in parallel
   - Identify current branch: `git branch --show-current`

2. **Automatic Branch Creation** (if on main/master)
   - Analyze changes and auto-generate branch name
   - Format: `<type>/<short-description>` (e.g., `feat/user-dashboard`, `fix/login-bug`)
   - Create and checkout: `git checkout -b <branch-name>`

3. **Auto Commit**
   - Stage all relevant changes: `git add .`
   - Generate commit message based on changes
   - Use conventional commits format
   - Include Claude co-author:
     ```
     🤖 Generated with [Claude Code](https://claude.com/claude-code)

     Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
     ```

4. **Push and Create PR**
   - Push: `git push -u origin <branch-name>`
   - Create PR with `gh pr create`:
     - Auto-generate title from commit message
     - Create concise PR body with summary and changes
     - Use `--fill` flag to use commit message if appropriate

5. **Display Result**
   - Show PR URL
   - Show PR number
   - Mention CI status will be visible in the PR

**Note:** This command skips confirmations for speed. Use `/create-pr` for more control.
