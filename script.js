// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Role Helper logic
const taskSelect = document.getElementById('taskSelect');
const roleResult = document.getElementById('roleResult');

const roleMap = {
  read: {
    role: 'Read',
    why: 'For reviewers who only need to view or clone the code.',
    extras: 'Cannot push changes.'
  },
  triage: {
    role: 'Triage',
    why: 'For helpers who manage issues and pull requests.',
    extras: 'Cannot push to the repository.'
  },
  write: {
    role: 'Write',
    why: 'For contributors who need to commit and push code.',
    extras: 'Can create branches and push changes.'
  },
  maintain: {
    role: 'Maintain',
    why: 'For leads who tweak settings but don’t need full admin.',
    extras: 'Cannot delete the repository.'
  },
  admin: {
    role: 'Admin',
    why: 'For trusted co-owners with full control.',
    extras: 'Can manage collaborators and delete the repository.'
  }
};

if (taskSelect && roleResult) {
  taskSelect.addEventListener('change', (e) => {
    const key = e.target.value;
    if (!key || !roleMap[key]) {
      roleResult.textContent = '';
      return;
    }
    const { role, why, extras } = roleMap[key];
    roleResult.innerHTML = `<strong>Suggested role:</strong> ${role}. ${why} <em>${extras}</em>`;
  });
}
