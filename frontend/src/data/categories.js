// list of categories & sub-categories that can be passed as a simple list of what's available
// can add duplicate subcategories to a category (i.e. id: "shell-scripting" belongs to software-engineering & bash)

export const categories = [
    {
        id: "frontend",
        name: "Frontend",
        subcategories: [
	    { id: "html", name: "HTML" },
	    { id: "css", name: "CSS" },
	    { id: "css-2", name: "CSS: Part 2" },
	    { id: "responsive-design", name: "Responsive Design" },
	    { id: "bootstrap", name: "Bootstrap" },
	    { id: "dom", name: "DOM Manipulation" },
	    { id: "event-handling", name: "Event Handling" },
	    { id: "promises", name: "Promises, Async & Await" },
	    { id: "web-storage", name: "JSON & Web Storage APIs" }
	      ]
    },
    {
        id: "software-engineering",
        name: "Software Engineering",
        subcategories: [
	    { id: "system-architecture", name: "System Architecture" },
	    { id: "network-protocols", name: "Network Protocols" },
	    { id: "shell-scripting", name: "Shell Scripting" },
	    { id: "relational-databases", name: "Relational Databases" },
	    { id: "sql", name: "SQL" },
	    { id: "mariadb", name: "MariaDB" },
	    { id: "nodejs", name: "Node.js" }
	]
    },
    {
        id: "react",
        name: "React",
        subcategories: [
	    { id: "vite", name: "Vite" },
	    { id: "react-packages", name: "React Packages" },
	    { id: "events", name: "Events" },
	    { id: "events-2", name: "Events: Part 2" },
	    { id: "routing", name: "Routing" },
	    { id: "form-validation", name: "Form Validation" },
	    { id: "testing-react", name: "Testing a React App" },
	]
    },
    {
        id: "backend",
        name: "Backend",
        subcategories: [
	    { id: "backend-packages", name: "Backend Packages" },
	    { id: "mern", name: "MERN" },
	    { id: "project-architecture", name: "Project Architecture" },
	    { id: "express", name: "Express" },
	    { id: "postman", name: "Postman" },
	    { id: "mongodb", name: "MongoDB" },
	    { id: "mongoose", name: "Mongoose" },
	    { id: "authentication-jwt", name: "Authentication with JWT" },
	    { id: "middleware", name: "Middleware" },
	    { id: "backend-integration", name: "Backend Integration" }
	]
    },
    {
        id: "java",
        name: "Java",
        subcategories: [
	    { id: "java-structures", name: "Data Structures" },
	    { id: "java-methods", name: "Methods" },
	    { id: "java-files-io", name: "Files I/O" },
	    { id: "java-oop", name: "Object-Oriented Programming" },
	    { id: "java-sorting", name: "Sorting & Searching" },
	    { id: "jdbc", name: "JDBC" }
	]
    },
    {
        id: "linux",
        name: "Linux",
        subcategories: [
	    { id: "package-managers", name: "Package Managers" },
	    { id: "pacman-commands", name: "Pacman Commands" },
	    { id: "troubleshooting", name: "Troubleshooting" },
	    { id: "arch-setup", name: "Arch Set-up" },
	    { id: "arch-setup-2", name: "Arch Set-up: Part 2" },
	    { id: "flags", name: "Command Flags" },
	    { id: "the-file-system", name: "The File System" }
	]
    },
    {
        id: "general-computing",
        name: "General Computing",
        subcategories: [
	    { id: "data-structures", name: "Data Structures" },
	    { id: "algorithms", name: "Algorithms" },
	    { id: "tree-algorithms", name: "Tree Algorithms" },
	    { id: "graph-algorithms", name: "Graph Algorithms" },
	    { id: "dynamic-programming", name: "Dynamic Programming" },
	    { id: "low-level", name: "Low-Level Systems" },
	    { id: "terms-keywords", name: "Terms & Keywords" }
	]
    },
    {
        id: "emacs",
        name: "Emacs",
        subcategories: [
	    { id: "emacs-general", name: "General" },
	    { id: "emacs-help", name: "Help" },
	    { id: "org-mode", name: "Org Mode" },
	    { id: "dired", name: "Dired Mode" },
	    { id: "treemacs", name: "Treemacs Mode" },
	    { id: "emacs-functionality", name: "Functionality" },
	    { id: "emacs-packages", name: "How Packages Work" },
	    { id: "elisp", name: "Elisp" }
        ]
    },
    {
	id: "regex",
	name: "Regex",
	subcategories: [
	    { id: "regex-basics", name: "Basics & Syntax" },
	    { id: "regex-character-classes", name: "Character Classes" },
	    { id: "regex-quantifiers", name: "Quantifiers" },
	    { id: "regex-groups", name: "Groups & Capturing" },
	    { id: "regex-lookarounds", name: "Lookaheads & Lookbehinds" }
	]
    },
    {
	id: "git",
	name: "Git",
	subcategories: [
	    { id: "git-basics", name: "Basics & Commands" },
	    { id: "git-branching", name: "Branching & Merging" },
	    { id: "git-remote", name: "Remote Repositories" },
	    { id: "git-undo", name: "Undoing Changes" },
	    { id: "git-workflows", name: "Git Workflows" }
	]
    },
    {
	id: "javascript",
	name: "JavaScript",
	subcategories: [
	    { id: "js-basics", name: "Basics & Syntax" },
	    { id: "js-functions", name: "Functions & Scope" },
	    { id: "js-arrays-objects", name: "Arrays & Objects" },
	    { id: "js-oop", name: "Classes & OOP" },
	    { id: "js-advanced", name: "Advanced JavaScript" }
	]
    },
    {
	id: "bash",
	name: "Bash",
	subcategories: [
	    { id: "bash-commands", name: "Commands & Navigation" },
	    { id: "bash-files", name: "File & Directory Operations" },
	    { id: "shell-scripting", name: "Shell Scripting" },
	    { id: "bash-variables", name: "Variables & Conditionals" },
	    { id: "bash-pipes", name: "Pipes & Redirection" }
	]
    }
];
