export class LanguageManager {
    constructor() {
        this.currentLanguage = 'en'; // Default language
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.instructors': 'Instructors', 
                'nav.programs': 'Programs',
                'nav.workshops': 'Events',
                'nav.contact': 'Contact',
                
                // Home page
                'home.hero.title': 'Unlock Your <span class="highlight">Inner Light</span>',
                'home.hero.subtitle': 'Transform your confidence through professional modeling training. Master runway walking, perfect your posture, and build unshakeable self-assurance.',
                'home.hero.cta1': 'Start Training',
                'home.hero.cta2': 'View Programs',
                
                'home.about.title': 'About Inner Light Studio',
                'home.about.subtitle': 'Empowering individuals through professional modeling training and confidence coaching',
                'home.about.mission': 'Our Mission',
                'home.about.description1': 'Inner Light Studio was founded with a vision to illuminate the confidence and potential within every individual. We are a premier modeling training institute that specializes in transforming lives through professional coaching.',
                'home.about.description2': 'Our expert instructors teach essential skills including runway walking, posture correction, and confidence building to help you shine with authenticity and grace.',
                
                'home.stats.students': 'Students Trained',
                'home.stats.founded': 'Founded',
                'home.stats.satisfaction': 'Satisfaction Rate',
                
                'home.instructors.title': 'Meet Our Expert Instructors',
                'home.instructors.subtitle': 'World-class coaches ready to guide your transformation',
                'home.instructors.cta': 'View All Instructors',
                
                'home.programs.title': 'Our Training Programs',
                'home.programs.subtitle': 'Comprehensive courses designed to transform your confidence and modeling skills',
                'home.programs.cta': 'Explore All Programs',
                
                'home.events.title': 'Upcoming Events',
                'home.events.subtitle': 'Join our transformative training sessions and events',
                'home.events.cta': 'View All Events',
                
                'home.cta.title': 'Ready to Start Your Journey?',
                'home.cta.subtitle': 'Transform your confidence and unlock your potential with our expert training programs.',
                'home.cta.button1': 'Get Started Today',
                'home.cta.button2': 'Learn More',
                
                // Programs page
                'programs.title': 'Our Training Packages',
                'programs.subtitle': 'Choose the perfect package for your modeling journey - from beginner basics to professional mastery',
                'programs.starter.title': 'Starter Package',
                'programs.starter.subtitle': 'Perfect for Beginners',
                'programs.starter.classes': '5 Classes',
                'programs.starter.validity': '3 Months',
                'programs.professional.title': 'Professional Package',
                'programs.professional.subtitle': 'Complete Transformation',
                'programs.professional.classes': '14 Classes',
                'programs.professional.validity': '6 Months',
                'programs.pricing.note': 'Pricing Available Upon Request',
                'programs.pricing.contact': 'Contact us for detailed pricing and payment plans',
                'programs.inquire': 'Inquire About Pricing',
                'programs.details': 'View Full Details',
                
                // Contact page
                'contact.title': 'Get In Touch',
                'contact.subtitle': 'Ready to unlock your potential? Let us start your transformation journey together.',
                'contact.phone': 'Phone',
                'contact.email': 'Email',
                'contact.address': 'Address',
                'contact.hours': 'Studio Hours',
                'contact.form.title': 'Send Us a Message',
                'contact.form.firstName': 'First Name',
                'contact.form.lastName': 'Last Name',
                'contact.form.email': 'Email Address',
                'contact.form.phone': 'Phone Number',
                'contact.form.interest': 'I am interested in',
                'contact.form.message': 'Message',
                'contact.form.submit': 'Send Message',
                
                // Instructors page
                'instructors.title': 'Our Expert Instructors',
                'instructors.subtitle': 'Meet the world-class coaches who will guide your transformation journey',
                'instructors.experience': 'Experience',
                'instructors.students': 'Students',
                'instructors.certifications': 'Certifications',
                'instructors.events': 'Events',
                'instructors.awards': 'Awards',
                'instructors.specializations': 'Specializations',
                'instructors.viewProfile': 'View Profile',
                'instructors.cta.title': 'Ready to Learn from the Best?',
                'instructors.cta.subtitle': 'Our expert instructors are here to help you unlock your full potential and achieve your modeling goals.',
                'instructors.cta.book': 'Book a Session',
                'instructors.cta.programs': 'View Programs',
                
                // Instructor profile
                'instructor.about': 'About',
                'instructor.backToInstructors': '← Back to Instructors',
                'instructor.experienceLabel': 'Experience',
                'instructor.studentsTrained': 'Students Trained',
                'instructor.brandsWorkedWith': 'Brands Worked With',
                'instructor.teachingSpecializations': 'Teaching Specializations',
                'instructor.gallery': 'Gallery',
                'instructor.gallerySubtitle': 'Moments from career and teaching journey',
                'instructor.trainWith': 'Train with',
                'instructor.trainSubtitle': 'Ready to transform your confidence with expert guidance? Book a session today.',
                
                // Instructor data
                'instructor.yen.name': 'Yen',
                'instructor.yen.title': 'Head Instructor & Confidence Coach',
                'instructor.yen.tagline': 'Transforming lives through confidence and grace',
                'instructor.yen.bio': 'Yen is a passionate instructor at Inner Light Studio with extensive experience in modeling and confidence coaching. She specializes in helping students develop runway walking techniques and building unshakeable self-confidence.',
                'instructor.ada.name': 'Ada',
                'instructor.ada.title': 'Movement & Posture Specialist',
                'instructor.ada.tagline': 'Perfecting body alignment and graceful movement',
                'instructor.ada.bio': 'Ada brings expertise in movement coaching and posture correction to Inner Light Studio. With a background in dance and fitness, she helps students achieve perfect body alignment and develop graceful, confident movement.',
                
                // About page
                'about.title': 'About Inner Light Studio',
                'about.subtitle': 'Empowering individuals through professional modeling training and confidence coaching',
                
                'about.story.title': 'Our Story',
                'about.story.paragraph1': 'Inner Light Studio was founded with a vision to illuminate the confidence and potential within every individual. We are a premier modeling training institute that specializes in transforming lives through professional coaching.',
                'about.story.paragraph2': 'What started as a small studio with a passionate instructor has grown into a recognized training center that has helped over 1000 students discover their inner confidence and master the art of modeling.',
                'about.story.paragraph3': 'Our expert instructors teach essential skills including runway walking, posture correction, confidence building, and personal development techniques to help you shine with authenticity and grace.',
                
                'about.highlights.founded': 'Founded',
                'about.highlights.students': 'Students Trained',
                'about.highlights.success': 'Success Rate',
                
                'about.mission.title': 'Our Mission',
                'about.mission.description': 'To empower individuals by unlocking their inner confidence and helping them develop the skills, mindset, and presence needed to succeed in modeling and life.',
                'about.vision.title': 'Our Vision',
                'about.vision.description': 'To be the leading modeling training institute that transforms lives by nurturing confidence, grace, and authentic self-expression in every student.',
                'about.values.title': 'Our Values',
                'about.values.description': 'Authenticity, Excellence, Empowerment, and Growth. We believe that true beauty comes from confidence and being genuinely yourself.',
                
                'about.approach.title': 'Our Training Approach',
                'about.approach.subtitle': 'A comprehensive methodology designed to transform confidence from the inside out',
                'about.approach.step1.title': 'Assessment & Goal Setting',
                'about.approach.step1.description': 'We begin with a comprehensive assessment of your current skills and confidence level, then work with you to set achievable goals.',
                'about.approach.step2.title': 'Technical Training',
                'about.approach.step2.description': 'Master the fundamentals of runway walking, posture, and movement through structured lessons and hands-on practice.',
                'about.approach.step3.title': 'Confidence Building',
                'about.approach.step3.description': 'Develop unshakeable self-confidence through proven psychological techniques and positive reinforcement.',
                'about.approach.step4.title': 'Real-World Practice',
                'about.approach.step4.description': 'Apply your skills in realistic scenarios and receive constructive feedback to refine your abilities.',
                
                'about.stats.students': 'Students Trained',
                'about.stats.students.description': 'Successfully graduated from our programs',
                'about.stats.founded': 'Founded',
                'about.stats.founded.description': 'Year we started transforming lives',
                'about.stats.success': 'Success Rate',
                'about.stats.success.description': 'Students report improved confidence',
                'about.stats.instructors': 'Expert Instructors',
                'about.stats.instructors.description': 'Yen and Ada - your modeling mentors',
                
                'about.differences.title': 'What Makes Us Different',
                'about.differences.subtitle': 'Discover why students choose Inner Light Studio for their transformation journey',
                'about.differences.personalized.title': 'Personalized Approach',
                'about.differences.personalized.description': 'Every student receives individual attention and a customized training plan based on their unique needs and goals.',
                'about.differences.expert.title': 'Expert Instructors',
                'about.differences.expert.description': 'Learn from experienced professionals who have worked in the modeling industry and understand what it takes to succeed.',
                'about.differences.holistic.title': 'Holistic Development',
                'about.differences.holistic.description': 'We focus not just on technical skills, but on building genuine confidence and personal growth.',
                
                'about.cta.title': 'Ready to Unlock Your Inner Light?',
                'about.cta.subtitle': 'Join hundreds of successful graduates who have transformed their confidence and achieved their modeling goals.',
                'about.cta.button1': 'Explore Our Programs',
                'about.cta.button2': 'Schedule a Consultation',

                // Common
                'common.loading': 'Loading...',
                'common.learnMore': 'Learn More',
                'common.getStarted': 'Get Started',
                'common.contact': 'Contact Us'
            },
            zh: {
                // Navigation
                'nav.home': '首页',
                'nav.about': '关于我们',
                'nav.instructors': '导师团队',
                'nav.programs': '培训课程',
                'nav.workshops': '活动',
                'nav.contact': '联系我们',
                
                // Home page
                'home.hero.title': '点亮你的<span class="highlight">内在光芒</span>',
                'home.hero.subtitle': '通过专业的模特培训来提升您的自信。掌握T台走秀技巧，完善您的姿态，建立不可动摇的自信。',
                'home.hero.cta1': '开始培训',
                'home.hero.cta2': '查看课程',
                
                'home.about.title': '关于内在光芒工作室',
                'home.about.subtitle': '通过专业模特培训和自信指导赋能个人',
                'home.about.mission': '我们的使命',
                'home.about.description1': '内在光芒工作室成立的愿景是照亮每个人内在的自信和潜力。我们是一家专业的模特培训机构，专注于通过专业指导改变生活。',
                'home.about.description2': '我们的专业导师教授包括T台走秀、姿态矫正和自信建立在内的核心技能，帮助您以真实和优雅的方式发光发热。',
                
                'home.stats.students': '已培训学员',
                'home.stats.founded': '成立时间',
                'home.stats.satisfaction': '满意度',
                
                'home.instructors.title': '认识我们的专业导师',
                'home.instructors.subtitle': '世界级教练准备指导您的蜕变',
                'home.instructors.cta': '查看所有导师',
                
                'home.programs.title': '我们的培训课程',
                'home.programs.subtitle': '全面的课程设计，旨在提升您的自信和模特技能',
                'home.programs.cta': '探索所有课程',
                
                'home.events.title': '即将举行的活动',
                'home.events.subtitle': '参加我们的变革性培训课程和活动',
                'home.events.cta': '查看所有活动',
                
                'home.cta.title': '准备开始您的旅程吗？',
                'home.cta.subtitle': '通过我们专业的培训课程，提升您的自信，释放您的潜力。',
                'home.cta.button1': '立即开始',
                'home.cta.button2': '了解更多',
                
                // Programs page
                'programs.title': '我们的培训套餐',
                'programs.subtitle': '选择适合您模特之路的完美套餐 - 从初学者基础到专业精通',
                'programs.starter.title': '初学者套餐',
                'programs.starter.subtitle': '完美适合初学者',
                'programs.starter.classes': '5节课',
                'programs.starter.validity': '3个月',
                'programs.professional.title': '专业套餐',
                'programs.professional.subtitle': '完全蜕变',
                'programs.professional.classes': '14节课',
                'programs.professional.validity': '6个月',
                'programs.pricing.note': '价格请咨询',
                'programs.pricing.contact': '联系我们获取详细价格和付款计划',
                'programs.inquire': '咨询价格',
                'programs.details': '查看详情',
                
                // Contact page
                'contact.title': '联系我们',
                'contact.subtitle': '准备释放您的潜力吗？让我们一起开始您的蜕变之旅。',
                'contact.phone': '电话',
                'contact.email': '邮箱',
                'contact.address': '地址',
                'contact.hours': '工作室时间',
                'contact.form.title': '发送消息',
                'contact.form.firstName': '名',
                'contact.form.lastName': '姓',
                'contact.form.email': '邮箱地址',
                'contact.form.phone': '电话号码',
                'contact.form.interest': '我感兴趣的是',
                'contact.form.message': '消息',
                'contact.form.submit': '发送消息',
                
                // Instructors page
                'instructors.title': '我们的专业导师',
                'instructors.subtitle': '认识将指导您蜕变之旅的世界级教练',
                'instructors.experience': '经验',
                'instructors.students': '学员',
                'instructors.certifications': '认证',
                'instructors.events': '活动',
                'instructors.awards': '奖项',
                'instructors.specializations': '专长',
                'instructors.viewProfile': '查看简介',
                'instructors.cta.title': '准备向最优秀的导师学习吗？',
                'instructors.cta.subtitle': '我们的专业导师将帮助您释放全部潜力，实现您的模特目标。',
                'instructors.cta.book': '预约课程',
                'instructors.cta.programs': '查看课程',
                
                // Instructor profile
                'instructor.about': '关于',
                'instructor.backToInstructors': '← 返回导师页面',
                'instructor.experienceLabel': '经验',
                'instructor.studentsTrained': '已培训学员',
                'instructor.brandsWorkedWith': '合作过的品牌',
                'instructor.teachingSpecializations': '教学专长',
                'instructor.gallery': '作品展示',
                'instructor.gallerySubtitle': '职业生涯和教学旅程中的精彩瞬间',
                'instructor.trainWith': '与',
                'instructor.trainSubtitle': '准备在专业导师的指导下提升您的自信吗？立即预约课程。',
                
                // Instructor data
                'instructor.yen.name': 'Yen',
                'instructor.yen.title': '首席导师与自信教练',
                'instructor.yen.tagline': '通过自信与优雅改变生活',
                'instructor.yen.bio': 'Yen是内在光芒工作室的资深导师，在模特培训和自信指导方面拥有丰富经验。她专长于帮助学员掌握T台走秀技巧，建立不可动摇的自信心。',
                'instructor.ada.name': 'Ada',
                'instructor.ada.title': '肢体语言与姿态专家',
                'instructor.ada.tagline': '完善身体协调与优雅动作',
                'instructor.ada.bio': 'Ada为内在光芒工作室带来了肢体指导和姿态矫正方面的专业知识。凭借舞蹈和健身背景，她帮助学员实现完美的身体协调，培养优雅自信的动作。',
                
                // About page
                'about.title': '关于内在光芒工作室',
                'about.subtitle': '通过专业模特培训和自信指导赋能个人',
                
                'about.story.title': '我们的故事',
                'about.story.paragraph1': '内在光芒工作室成立的愿景是照亮每个人内在的自信和潜力。我们是一家专业的模特培训机构，专注于通过专业指导改变生活。',
                'about.story.paragraph2': '从一个只有一名热情导师的小工作室开始，我们现在已经发展成为一个知名的培训中心，帮助超过1000名学员发现内在自信，掌握模特艺术。',
                'about.story.paragraph3': '我们的专业导师教授包括T台走秀、姿态矫正、自信建立和个人发展技巧在内的核心技能，帮助您以真实和优雅的方式发光发热。',
                
                'about.highlights.founded': '成立年份',
                'about.highlights.students': '已培训学员',
                'about.highlights.success': '成功率',
                
                'about.mission.title': '我们的使命',
                'about.mission.description': '通过释放个人内在自信，帮助他们培养在模特行业和生活中取得成功所需的技能、心态和气质，从而赋能每个人。',
                'about.vision.title': '我们的愿景',
                'about.vision.description': '成为领先的模特培训机构，通过培养每位学员的自信、优雅和真实自我表达来改变生活。',
                'about.values.title': '我们的价值观',
                'about.values.description': '真实、卓越、赋权和成长。我们相信真正的美来自于自信和做真实的自己。',
                
                'about.approach.title': '我们的培训方法',
                'about.approach.subtitle': '一个旨在从内而外改变自信的综合方法论',
                'about.approach.step1.title': '评估与目标设定',
                'about.approach.step1.description': '我们首先对您当前的技能和自信水平进行全面评估，然后与您一起制定可实现的目标。',
                'about.approach.step2.title': '技能培训',
                'about.approach.step2.description': '通过结构化课程和实践练习，掌握T台走秀、姿态和动作的基本功。',
                'about.approach.step3.title': '自信建立',
                'about.approach.step3.description': '通过经过验证的心理技巧和积极强化，培养不可动摇的自信心。',
                'about.approach.step4.title': '实战练习',
                'about.approach.step4.description': '在真实场景中应用您的技能，接受建设性反馈以完善您的能力。',
                
                'about.stats.students': '已培训学员',
                'about.stats.students.description': '成功从我们的课程中毕业',
                'about.stats.founded': '成立年份',
                'about.stats.founded.description': '我们开始改变生活的年份',
                'about.stats.success': '成功率',
                'about.stats.success.description': '学员报告自信心得到提升',
                'about.stats.instructors': '专业导师',
                'about.stats.instructors.description': 'Yen和Ada - 您的模特导师',
                
                'about.differences.title': '我们的与众不同',
                'about.differences.subtitle': '发现为什么学员选择内在光芒工作室进行蜕变之旅',
                'about.differences.personalized.title': '个性化方法',
                'about.differences.personalized.description': '每位学员都会得到个人关注和基于其独特需求和目标的定制培训计划。',
                'about.differences.expert.title': '专业导师',
                'about.differences.expert.description': '向在模特行业工作过的经验丰富的专业人士学习，他们了解成功所需的条件。',
                'about.differences.holistic.title': '全面发展',
                'about.differences.holistic.description': '我们不仅关注技术技能，还致力于建立真正的自信和个人成长。',
                
                'about.cta.title': '准备点亮您的内在光芒吗？',
                'about.cta.subtitle': '加入数百名成功毕业生的行列，他们已经改变了自信并实现了模特目标。',
                'about.cta.button1': '探索我们的课程',
                'about.cta.button2': '预约咨询',

                // Common
                'common.loading': '加载中...',
                'common.learnMore': '了解更多',
                'common.getStarted': '开始',
                'common.contact': '联系我们'
            }
        };
        
        this.init();
    }

    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('innerlight-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
        }
        
        this.setupEventListeners();
        this.updateLanguageButtons();
    }

    setupEventListeners() {
        const languageButtons = document.querySelectorAll('.language-toggle');
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.dataset.lang;
                if (lang && this.translations[lang]) {
                    this.switchLanguage(lang);
                }
            });
        });
    }

    switchLanguage(lang) {
        if (this.currentLanguage === lang) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('innerlight-language', lang);
        
        this.updateLanguageButtons();
        this.translatePage();
        
        // Dispatch language change event with current route info
        const currentRoute = window.router?.getCurrentRoute() || 'home';
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang, currentRoute }
        }));
    }

    updateLanguageButtons() {
        const languageButtons = document.querySelectorAll('.language-toggle');
        languageButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === this.currentLanguage) {
                button.classList.add('active');
            }
        });
    }

    translatePage() {
        // Update navigation
        this.translateNavigation();
        
        // Update page content based on current route
        const currentRoute = window.router?.getCurrentRoute() || 'home';
        this.translatePageContent(currentRoute);
        
        // Update document title
        this.updateDocumentTitle(currentRoute);
    }

    translateNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const navMappings = {
            '#': 'nav.home',
            '#about': 'nav.about', 
            '#instructors': 'nav.instructors',
            '#programs': 'nav.programs',
            '#workshops': 'nav.workshops',
            '#contact': 'nav.contact'
        };

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const translationKey = navMappings[href];
            if (translationKey) {
                link.textContent = this.translate(translationKey);
            }
        });
    }

    translatePageContent(route) {
        // Update all elements with data-translate attributes
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.dataset.translate;
            if (key) {
                const translation = this.translate(key);
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update loading text
        const loadingElements = document.querySelectorAll('[data-loading-text]');
        loadingElements.forEach(element => {
            element.textContent = this.translate('common.loading');
        });
        
        // Handle dynamic content that needs re-rendering
        this.translateDynamicContent(route);
    }
    
    translateDynamicContent(route) {
        // Only re-render if we're currently on a page that supports dynamic translation
        const currentRoute = window.router?.getCurrentRoute();
        if (currentRoute === route && window.router && window.router.getCurrentPageComponent()) {
            const currentComponent = window.router.getCurrentPageComponent();
            if (currentComponent && typeof currentComponent.refreshContent === 'function') {
                // Only refresh for pages that have dynamic content (like instructors)
                if (route === 'instructors') {
                    setTimeout(() => {
                        currentComponent.refreshContent();
                    }, 0);
                }
            }
        }
    }

    updateDocumentTitle(route) {
        const titles = {
            en: {
                'home': 'Inner Light Studio - Modeling Training & Confidence Coaching',
                'about': 'About Us | Inner Light Studio',
                'instructors': 'Our Instructors | Inner Light Studio',
                'programs': 'Training Programs | Inner Light Studio',
                'workshops': 'Events | Inner Light Studio',
                'contact': 'Contact Us | Inner Light Studio'
            },
            zh: {
                'home': '内在光芒工作室 - 模特培训与自信指导',
                'about': '关于我们 | 内在光芒工作室',
                'instructors': '导师团队 | 内在光芒工作室',
                'programs': '培训课程 | 内在光芒工作室',
                'workshops': '活动 | 内在光芒工作室',
                'contact': '联系我们 | 内在光芒工作室'
            }
        };
        
        const title = titles[this.currentLanguage]?.[route] || titles.en.home;
        document.title = title;
    }

    translate(key) {
        const translation = this.translations[this.currentLanguage]?.[key];
        return translation || this.translations.en[key] || key;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Method to add translation data dynamically
    addTranslations(lang, translations) {
        if (!this.translations[lang]) {
            this.translations[lang] = {};
        }
        Object.assign(this.translations[lang], translations);
    }

    // Cleanup method
    destroy() {
        const languageButtons = document.querySelectorAll('.language-toggle');
        languageButtons.forEach(button => {
            button.removeEventListener('click', this.switchLanguage);
        });
    }
}