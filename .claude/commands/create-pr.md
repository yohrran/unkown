---
description: Create a GitHub PR from current changes
tags: [git, github, pr]
---

You are helping create a GitHub Pull Request. Follow these steps:

1. **Check Git Status**
   - Run `git status` to see all changes
   - Run `git diff` to see detailed changes
   - Run `git log -5 --oneline` to see recent commits

2. **Analyze Changes**
   - Review all staged and unstaged changes
   - Identify the main purpose of these changes (feature, bugfix, refactor, etc.)
   - Check if there are any unrelated changes that should be excluded

3. **Prepare Branch**
   - Check current branch with `git branch --show-current`
   - If on main/master, create a new feature branch:
     - Suggest a branch name based on the changes (e.g., `feature/user-auth`, `fix/type-errors`, `refactor/api-client`)
     - Ask user to confirm branch name
     - Create and checkout the new branch: `git checkout -b <branch-name>`

4. **Create Commits** (if there are uncommitted changes)
   - Stage relevant files: `git add <files>`
   - Create meaningful commit message:
     - Follow conventional commits format (feat:, fix:, refactor:, etc.)
     - Include clear description of what and why
     - Add Claude co-author footer:
       ```
       🤖 Generated with [Claude Code](https://claude.com/claude-code)

       Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
       ```

5. **Push to Remote**
   - Push branch to origin: `git push -u origin <branch-name>`

6. **Create PR**
   - Use `gh pr create` to create the pull request
   - Generate a comprehensive PR description with:
     - ## Summary: Brief overview of changes (2-3 bullet points)
     - ## Changes: Detailed list of modifications
     - ## Testing: How to test these changes
     - ## Related Issues: Link to any related issues
   - Set appropriate labels if needed
   - Ask user if they want to assign reviewers

7. **Return PR URL**
   - Display the created PR URL
   - Show next steps (review, CI checks, etc.)

**Important:**
- NEVER commit unrelated or sensitive files (.env, credentials, etc.)
- Always ask for confirmation before pushing to remote
- Ensure commit messages are clear and follow project conventions
- Check if PR template exists and follow it
