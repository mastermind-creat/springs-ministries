// Preloader
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.preloader').style.opacity = '0';
                setTimeout(function() {
                    document.querySelector('.preloader').style.display = 'none';
                }, 500);
            }, 800);
            
            // Animate progress bar
            const progressBar = document.querySelector('.progress-bar');
            let width = 0;
            const interval = setInterval(function() {
                if (width >= 100) {
                    clearInterval(interval);
                } else {
                    width++;
                    progressBar.style.width = width + '%';
                }
            }, 15);
            
            // Counter animation
            const counters = document.querySelectorAll('.counter');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
                
                function updateCounter() {
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCounter, 1);
                    } else {
                        counter.innerText = target;
                    }
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
        
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        }
        
        darkModeToggle.addEventListener('click', toggleDarkMode);
        darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        }

        // Gallery lightbox
        const galleryImages = document.querySelectorAll('.gallery-image');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const closeLightbox = document.getElementById('close-lightbox');
        
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                lightbox.classList.add('active');
            });
        });
        
        closeLightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        // View more photos button
        const viewMoreBtn = document.getElementById('view-more-btn');
        const morePhotos = document.querySelector('.more-photos');
        
        viewMoreBtn.addEventListener('click', function() {
            morePhotos.classList.toggle('active');
            viewMoreBtn.classList.toggle('active');
            
            if (morePhotos.classList.contains('active')) {
                viewMoreBtn.textContent = 'Show Less Photos';
            } else {
                viewMoreBtn.textContent = 'View More Photos';
            }
        });

        // View more stories button
        const viewMoreStoriesBtn = document.getElementById('view-more-stories-btn');
        const moreStories = document.querySelector('.more-stories');
        
        viewMoreStoriesBtn.addEventListener('click', function() {
            moreStories.classList.toggle('hidden');
            viewMoreStoriesBtn.classList.toggle('active');
            
            if (moreStories.classList.contains('hidden')) {
                viewMoreStoriesBtn.textContent = 'View More Stories';
            } else {
                viewMoreStoriesBtn.textContent = 'Show Less Stories';
            }
        });

        // Testimonial modal
        const testimonialButtons = document.querySelectorAll('.view-more-testimonial');
        const testimonialModal = document.getElementById('testimonial-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.querySelector('.close-modal');
        
        // Testimonial data
        const testimonials = {
            sarah: {
                name: "Sarah K.",
                role: "Widow & Entrepreneur",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
                quote: "After losing my husband, I thought my life was over. Springs Ministries gave me training and a small loan to start my tailoring business. Today, I can feed my children and even employ two other widows. God bless this ministry!",
                fullStory: "When my husband passed away suddenly, I was left with three young children and no means to support them. I had no skills and no hope. Then I heard about Springs Ministries' economic empowerment program for widows. They provided me with six months of tailoring training and then gave me a small loan to buy a sewing machine and materials. That was five years ago. Today, I have a thriving tailoring business with two employees (both widows like me) and my oldest daughter is now in university. Springs Ministries didn't just give me a handout - they gave me dignity and the tools to rebuild my life."
            },
            james: {
                name: "James M.",
                role: "Former Orphan, Now University Student",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                quote: "I grew up in Springs Ministries' children's home after losing both parents. They didn't just give me shelter, but love, education, and a future. Today I'm studying medicine to give back to others what was given to me.",
                fullStory: "I was only 7 years old when I lost both my parents to HIV/AIDS. With no relatives willing to take me in, I was sent to live at Springs Ministries' children's home. What I found there wasn't just a roof over my head, but a family. The house parents treated us all as their own children. They made sure we went to good schools, had proper medical care, and most importantly, knew we were loved. When I showed aptitude in science, they arranged for extra tutoring. Now I'm in my second year of medical school, with a scholarship from Springs Ministries' alumni program. My dream is to become a pediatrician and work with orphans like I once was."
            },
            grace: {
                name: "Grace W.",
                role: "Volunteer & Donor",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
                quote: "I've been volunteering with Springs Ministries for 5 years. Seeing the tangible impact of their work - children graduating, widows starting businesses - keeps me coming back. This is where my donations make a real difference.",
                fullStory: "I first heard about Springs Ministries through a friend who was volunteering at their weekend tutoring program. I decided to try it out and was immediately struck by the dedication of the staff and the transformation in the children. What started as a few hours a week turned into a deep commitment. I now lead their donor relations team and volunteer at least twice a week. What keeps me coming back is seeing the long-term impact. The little boy who could barely read when he joined the program is now top of his class. The widow who received a microloan now employs three others. Every dollar donated, every hour volunteered - it all makes a measurable difference. That's why I've included Springs Ministries in my will - I want this work to continue for generations to come."
            },
            michael: {
                name: "Michael T.",
                role: "Former Beneficiary, Now Staff Member",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                quote: "I came to Springs Ministries as a troubled teenager with no direction. Through their mentorship program, I discovered my passion for helping others. Now I'm proud to be part of the team that helps transform lives.",
                fullStory: "At 15, I was living on the streets after running away from an abusive home. Springs Ministries found me during one of their street outreach programs. At first, I resisted their help, but their patience and genuine care broke through my defenses. Through counseling and their youth development program, I discovered my talent for working with younger kids. After completing high school through their education program, I volunteered with their children's programs while attending community college. Today, I'm a full-time youth counselor at Springs Ministries, helping other at-risk youth find their path, just as I did."
            },
            esther: {
                name: "Esther W.",
                role: "Widow & Small Business Owner",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
                quote: "The microloan program changed my life. With $200, I started a small grocery business that now supports my family and employs two other women. Springs Ministries believed in me when no one else did.",
                fullStory: "After my husband's death, I struggled to provide for my four children. Banks wouldn't give me a loan because I had no collateral. When I heard about Springs Ministries' microloan program for widows, I applied immediately. After financial literacy training, I received $200 to start a small grocery stand. With hard work and the business skills I learned, I grew that stand into a small store within two years. Today, my business supports my family, pays school fees for all my children, and provides jobs for two other widows in my community. The repayment rate for my loan group is 100% - we all want to pay it forward so other women can get the same opportunity."
            },
            david: {
                name: "David & Rebecca K.",
                role: "Foster Parents",
                image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
                quote: "Through Springs Ministries' foster program, we've welcomed three children into our home. The support and training they provide has helped us create a loving environment for these precious kids.",
                fullStory: "After our own children grew up, we felt called to foster but were nervous about taking the step. Springs Ministries' foster parent training program gave us the confidence and skills we needed. Over the past five years, we've fostered three children - two have been successfully reunited with rehabilitated family members, and we're in the process of adopting the third. The ongoing support from Springs Ministries - from counseling services to respite care - has been invaluable. They truly understand that to care for vulnerable children well, you need to care for the caregivers too."
            }
        };
        
        testimonialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const testimonialId = this.getAttribute('data-testimonial');
                const testimonial = testimonials[testimonialId];
                
                modalContent.innerHTML = `
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-full h-auto rounded-lg">
                        </div>
                        <div class="md:w-2/3">
                            <h3 class="text-2xl font-bold mb-2">${testimonial.name}</h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">${testimonial.role}</p>
                            <blockquote class="text-gray-700 dark:text-gray-200 italic mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                "${testimonial.quote}"
                            </blockquote>
                            <p class="text-gray-700 dark:text-gray-300">${testimonial.fullStory}</p>
                        </div>
                    </div>
                `;
                
                testimonialModal.style.display = "block";
            });
        });
        
        closeModal.addEventListener('click', function() {
            testimonialModal.style.display = "none";
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == testimonialModal) {
                testimonialModal.style.display = "none";
            }
        });

        // Program Details Modal
        const programButtons = document.querySelectorAll('.learn-more-btn');
        const programModal = document.getElementById('program-modal');
        const programModalContent = document.getElementById('program-modal-content');
        const closeProgramModal = document.getElementById('close-program-modal');
        
        // Program data
        const programs = {
            education: {
                title: "Education Support Program",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>',
                description: "Our Education Support Program ensures that vulnerable children have access to quality education, giving them the tools they need to break the cycle of poverty.",
                details: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Program Components:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>School fee scholarships for primary, secondary, and vocational education</li>
                                <li>Provision of school uniforms, books, and supplies</li>
                                <li>After-school tutoring and mentorship programs</li>
                                <li>Computer literacy training</li>
                                <li>Career guidance and university preparation for older students</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Impact:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>300+ children currently supported in our education programs</li>
                                <li>92% pass rate for students in our tutoring program</li>
                                <li>15 university scholarships awarded annually</li>
                                <li>2 computer labs established in underserved schools</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">How You Can Help:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Sponsor a child's education ($50/month covers school fees and supplies)</li>
                                <li>Volunteer as a tutor or mentor</li>
                                <li>Donate school supplies or laptops</li>
                                <li>Fund a scholarship for vocational training or university</li>
                            </ul>
                        </div>
                    </div>
                `,
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            economic: {
                title: "Economic Empowerment Program",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
                description: "Our Economic Empowerment Program provides widows and vulnerable women with the skills and resources to achieve financial independence and support their families.",
                details: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Program Components:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Vocational training in tailoring, hairdressing, catering, and other marketable skills</li>
                                <li>Microloans and business startup grants</li>
                                <li>Financial literacy and business management training</li>
                                <li>Savings groups and cooperative development</li>
                                <li>Market access support and business networking</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Impact:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>150+ women currently in the program</li>
                                <li>85% business success rate after 3 years</li>
                                <li>$200 average startup loan grows to $1,500 annual income</li>
                                <li>300+ children indirectly supported through their mothers' businesses</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">How You Can Help:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Sponsor a woman's vocational training ($300 covers full course)</li>
                                <li>Contribute to our microloan fund ($200 starts a business)</li>
                                <li>Volunteer as a business mentor</li>
                                <li>Purchase products made by program participants</li>
                            </ul>
                        </div>
                    </div>
                `,
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            shelter: {
                title: "Shelter & Care Program",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
                description: "Our Shelter & Care Program provides safe, loving homes for orphaned and abandoned children, with a focus on family-based care and reunification when possible.",
                details: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Program Components:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Children's homes with family-style living arrangements</li>
                                <li>Foster care program with trained foster families</li>
                                <li>Family tracing and reunification services</li>
                                <li>Adoption support and counseling</li>
                                <li>Transition programs for older youth aging out of care</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Impact:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>5 children's homes providing care for 120 children</li>
                                <li>45 foster families currently caring for children</li>
                                <li>30+ successful family reunifications annually</li>
                                <li>15 older youth in our independent living program</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">How You Can Help:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Sponsor a child's care ($75/month covers food, shelter, and basic needs)</li>
                                <li>Become a foster parent (training provided)</li>
                                <li>Donate household supplies or clothing</li>
                                <li>Volunteer at one of our children's homes</li>
                            </ul>
                        </div>
                    </div>
                `,
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            },
            health: {
                title: "Health & Nutrition Program",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
                description: "Our Health & Nutrition Program ensures that vulnerable children and widows have access to medical care, nutritious food, and health education.",
                details: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Program Components:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Mobile medical clinics serving rural communities</li>
                                <li>Nutritional support for malnourished children</li>
                                <li>Health education workshops on hygiene, disease prevention, and maternal health</li>
                                <li>HIV/AIDS testing and treatment support</li>
                                <li>Emergency medical fund for critical cases</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Impact:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>1,200+ individuals served annually</li>
                                <li>85% reduction in malnutrition cases in our program areas</li>
                                <li>4 mobile clinics operating in underserved regions</li>
                                <li>500+ HIV-positive individuals receiving support</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">How You Can Help:</h4>
                            <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                                <li>Sponsor a child's nutritional support ($30/month)</li>
                                <li>Fund a medical outreach ($500 covers a mobile clinic visit)</li>
                                <li>Donate medical supplies or equipment</li>
                                <li>Volunteer as a medical professional</li>
                            </ul>
                        </div>
                    </div>
                `,
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
        };
        
        programButtons.forEach(button => {
            button.addEventListener('click', function() {
                const programId = this.getAttribute('data-program');
                const program = programs[programId];
                
                programModalContent.innerHTML = `
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3">
                            <div class="flex items-center mb-4">
                                ${program.icon}
                                <h3 class="text-2xl font-bold ml-3">${program.title}</h3>
                            </div>
                            <img src="${program.image}" alt="${program.title}" class="w-full h-auto rounded-lg mb-4">
                            <p class="text-gray-600 dark:text-gray-300">${program.description}</p>
                        </div>
                        <div class="md:w-2/3">
                            ${program.details}
                            <div class="mt-6">
                                <button class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                                    Support This Program
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                programModal.style.display = "block";
            });
        });
        
        closeProgramModal.addEventListener('click', function() {
            programModal.style.display = "none";
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == programModal) {
                programModal.style.display = "none";
            }
        });

        // Chatbot functionality
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotBody = document.getElementById('chatbot-body');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');
        
        // Chatbot questions and answers
        const chatbotResponses = {
            "hello": "Hello! How can I help you today? You can ask about our programs, how to donate, volunteer opportunities, or anything else about Springs Ministries.",
            "hi": "Hi there! What would you like to know about Springs Ministries?",
            "programs": "We have four main programs: 1) Education Support, 2) Economic Empowerment, 3) Shelter & Care, and 4) Health & Nutrition. Would you like details about any specific program?",
            "donate": "Thank you for your interest in donating! You can make a one-time or recurring donation through our website. $50 sponsors a child's education for a month, $200 provides a microloan to start a business. Would you like the donation link?",
            "volunteer": "We welcome volunteers in many areas: teaching, mentoring, medical services, administrative help, and more. Our volunteer application is available online. Would you like more details?",
            "about": "Springs Ministries was founded in 2010 to help orphans and widows in underserved communities. We now serve over 500 children and 200 widows annually through comprehensive programs. Our mission is to restore hope and dignity through practical assistance and empowerment.",
            "contact": "You can reach us at:<br>- Phone: +1 (555) 123-4567<br>- Email: info@springsministries.org<br>- Address: 123 Charity Avenue, Hope City<br>Our office hours are Monday-Friday 9am-5pm.",
            "location": "Our main office is at 123 Charity Avenue in Hope City. We also have program sites in three other communities. Would you like directions or specific location information?",
            "founder": "Springs Ministries was founded by Sarah Johnson in 2010 after she encountered orphaned children living on the streets during a mission trip. What started as feeding 10 children twice a week has grown into the organization we are today.",
            "impact": "Last year, we:<br>- Educated 300+ children<br>- Empowered 150+ widows with businesses<br>- Provided shelter for 120 orphans<br>- Served 1,200+ through medical clinics<br>85% of our program participants show measurable improvement in their quality of life.",
            "default": "I'm sorry, I didn't understand that. Could you rephrase your question? You can ask about our programs, how to help, or general information about Springs Ministries."
        };
        
        // Toggle chatbot visibility
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
            chatbotContainer.style.display = chatbotContainer.classList.contains('active') ? 'block' : 'none';
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
            chatbotContainer.style.display = 'none';
        });
        
        // Send message function
        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (message === '') return;
            
            // Add user message to chat
            addMessage(message, 'user');
            chatbotInput.value = '';
            
            // Process and respond
            setTimeout(() => {
                let response = chatbotResponses.default;
                const lowerMessage = message.toLowerCase();
                
                if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                    response = chatbotResponses.hello;
                } else if (lowerMessage.includes('program')) {
                    response = chatbotResponses.programs;
                } else if (lowerMessage.includes('donat')) {
                    response = chatbotResponses.donate;
                } else if (lowerMessage.includes('volunteer')) {
                    response = chatbotResponses.volunteer;
                } else if (lowerMessage.includes('about')) {
                    response = chatbotResponses.about;
                } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
                    response = chatbotResponses.contact;
                } else if (lowerMessage.includes('location') || lowerMessage.includes('address')) {
                    response = chatbotResponses.location;
                } else if (lowerMessage.includes('founder') || lowerMessage.includes('start')) {
                    response = chatbotResponses.founder;
                } else if (lowerMessage.includes('impact') || lowerMessage.includes('result')) {
                    response = chatbotResponses.impact;
                }
                
                addMessage(response, 'bot');
            }, 500);
        }
        
        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chatbot-message', sender);
            
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('chatbot-message-content');
            contentDiv.innerHTML = text;
            
            messageDiv.appendChild(contentDiv);
            chatbotBody.appendChild(messageDiv);
            
            // Scroll to bottom
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }
        
        // Event listeners for sending messages
        chatbotSend.addEventListener('click', sendMessage);
        
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Initial bot message
        addMessage(chatbotResponses.hello, 'bot');

        // Contact form submission
            const contactForm = document.getElementById('contact-form');
            const submitText = document.getElementById('submit-text');
            const submitLoading = document.getElementById('submit-loading');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                submitText.classList.add('hidden');
                submitLoading.classList.remove('hidden');
                
                // Get form data
                const formData = new FormData(contactForm);
                
                // Simulate form submission (replace with actual AJAX call)
                setTimeout(() => {
                    // Here you would typically make an AJAX request to your server
                    // For example using fetch or axios
                    
                    /*
                    fetch('your-server-endpoint', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Handle success response
                        showSuccessMessage();
                    })
                    .catch(error => {
                        // Handle error
                        showErrorMessage();
                    });
                    */
                    
                    // For demo purposes, we'll just show success after 1.5 seconds
                    showSuccessMessage();
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide loading state
                    submitText.classList.remove('hidden');
                    submitLoading.classList.add('hidden');
                }, 1500);
            });

            function showSuccessMessage() {
                // Create and show a success message
                const successDiv = document.createElement('div');
                successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6';
                successDiv.setAttribute('role', 'alert');
                
                const strong = document.createElement('strong');
                strong.className = 'font-bold';
                strong.textContent = 'Success!';
                
                const span = document.createElement('span');
                span.className = 'block sm:inline';
                span.textContent = ' Your message has been sent. We will get back to you soon.';
                
                const closeButton = document.createElement('span');
                closeButton.className = 'absolute top-0 bottom-0 right-0 px-4 py-3';
                closeButton.innerHTML = '<svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>';
                
                closeButton.addEventListener('click', () => {
                    successDiv.remove();
                });
                
                successDiv.appendChild(strong);
                successDiv.appendChild(span);
                successDiv.appendChild(closeButton);
                
                // Insert the message above the form
                const formContainer = contactForm.parentElement;
                formContainer.insertBefore(successDiv, contactForm);
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    if (successDiv.parentNode) {
                        successDiv.remove();
                    }
                }, 5000);
            }

            // Add input styling on focus/blur
            const contactInputs = document.querySelectorAll('.contact-input');
            
            contactInputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.classList.add('ring-2', 'ring-blue-500', 'border-transparent');
                });
                
                input.addEventListener('blur', function() {
                    this.classList.remove('ring-2', 'ring-blue-500', 'border-transparent');
                });
            });

            // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });