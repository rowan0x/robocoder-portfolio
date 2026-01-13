// ============================================
// TERMINAL SYSTEM JAVASCRIPT
// Handles boot sequence, navigation, interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const bootSequence = document.getElementById('boot-sequence');
    const terminal = document.getElementById('terminal');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const commandDisplay = document.getElementById('command-display');
    const connectLink = document.getElementById('connect-link');
    const exitLink = document.getElementById('exit-link');

    // ============================================
    // BOOT SEQUENCE
    // ============================================
    
    function initBootSequence() {
        setTimeout(() => {
            bootSequence.classList.add('hidden');
            terminal.classList.remove('hidden');
            
            // Show header and nav sections
            setTimeout(() => {
                document.getElementById('header-section').classList.add('visible');
                setTimeout(() => {
                    document.getElementById('nav-section').classList.add('visible');
                }, 200);
            }, 100);
        }, 2500); // Total boot time: 2.5 seconds
    }

    // Start boot sequence
    initBootSequence();

    // ============================================
    // NAVIGATION SYSTEM
    // ============================================

    function showSection(sectionId) {
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionId + '-section');
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active nav item
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });

        // Update command display
        if (commandDisplay) {
            commandDisplay.textContent = sectionId;
        }

        // Scroll to top of section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Add click handlers to navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // ============================================
    // COMMAND INTERACTIONS
    // ============================================

    // Connect link handler
    if (connectLink) {
        connectLink.addEventListener('click', function() {
            window.location.href = 'mailto:jewab10@gmail.com';
        });
    }

    // Exit link handler
    if (exitLink) {
        exitLink.addEventListener('click', function() {
            // Optional: Add exit animation or redirect
            if (confirm('Terminate session?')) {
                window.close();
            }
        });
    }

    // ============================================
    // PROJECT EXECUTE LINKS
    // ============================================

    const executeLinks = document.querySelectorAll('.project-item .command-link');
    executeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectItem = this.closest('.project-item');
            const projectName = projectItem.querySelector('[class*="PROJECT"]')?.textContent || 'Project';
            
            // Terminal-style feedback
            const feedback = document.createElement('div');
            feedback.className = 'output-line';
            feedback.style.color = 'var(--terminal-green)';
            feedback.textContent = `> Executing ${projectName}...`;
            
            // Insert feedback after the clicked link
            this.parentElement.insertAdjacentElement('afterend', feedback);
            
            // Optional: Add actual project links or details here
            setTimeout(() => {
                feedback.textContent = `> Status: Module loaded. Details available on request.`;
                feedback.style.color = 'var(--terminal-cyan)';
            }, 1000);
        });
    });

    // ============================================
    // KEYBOARD NAVIGATION (OPTIONAL)
    // ============================================

    let currentNavIndex = -1;

    document.addEventListener('keydown', function(e) {
        // Only handle if terminal is visible
        if (terminal.classList.contains('hidden')) return;

        // Number keys for quick navigation
        if (e.key >= '1' && e.key <= '5') {
            const index = parseInt(e.key) - 1;
            if (navItems[index]) {
                navItems[index].click();
            }
        }

        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            if (e.key === 'ArrowDown') {
                currentNavIndex = (currentNavIndex + 1) % navItems.length;
            } else {
                currentNavIndex = (currentNavIndex - 1 + navItems.length) % navItems.length;
            }
            
            navItems[currentNavIndex].click();
        }
    });

    // ============================================
    // HELP COMMAND (EASTER EGG)
    // ============================================

    // Add help command functionality
    const helpCommand = document.createElement('div');
    helpCommand.className = 'nav-item';
    helpCommand.setAttribute('data-section', 'help');
    helpCommand.innerHTML = '<span class="accent-green">></span> help';
    
    helpCommand.addEventListener('click', function() {
        const helpOutput = document.createElement('div');
        helpOutput.className = 'content-section active';
        helpOutput.id = 'help-section';
        helpOutput.innerHTML = `
            <div class="section-header">
                <span class="accent-green">[SYSTEM COMMANDS]</span>
            </div>
            <div class="content-output">
                <div class="output-line">
                    <span class="accent-cyan">AVAILABLE COMMANDS:</span>
                </div>
                <div class="output-line"></div>
                <div class="output-line">
                    <span class="accent-green">about</span> - Display operator profile
                </div>
                <div class="output-line">
                    <span class="accent-green">skills</span> - Show loaded modules and capabilities
                </div>
                <div class="output-line">
                    <span class="accent-green">projects</span> - List executable project modules
                </div>
                <div class="output-line">
                    <span class="accent-green">experience</span> - Access operation logs
                </div>
                <div class="output-line">
                    <span class="accent-green">contact</span> - Establish connection protocol
                </div>
                <div class="output-line">
                    <span class="accent-green">help</span> - Display this help menu
                </div>
                <div class="output-line"></div>
                <div class="output-line">
                    <span class="accent-cyan">KEYBOARD SHORTCUTS:</span>
                </div>
                <div class="output-line">1-5: Quick navigation</div>
                <div class="output-line">↑↓: Navigate sections</div>
            </div>
        `;
        
        // Remove existing help section if present
        const existingHelp = document.getElementById('help-section');
        if (existingHelp) {
            existingHelp.remove();
        }
        
        // Insert help section
        terminal.insertBefore(helpOutput, terminal.firstChild.nextSibling.nextSibling);
        
        // Update nav
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        
        helpOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Optionally add help to nav (uncomment if desired)
    // document.querySelector('.nav-commands').appendChild(helpCommand);

    // ============================================
    // SMOOTH SCROLLING
    // ============================================

    // Ensure smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============================================
    // INITIAL STATE
    // ============================================

    // Show help or about by default after boot (optional)
    // Uncomment to auto-show a section:
    // setTimeout(() => {
    //     showSection('about');
    // }, 3000);
});

