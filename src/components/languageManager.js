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

                // Programs page
                'programs.title': 'Our Training Packages',
                'programs.subtitle': 'Choose the perfect package for your modeling journey - from beginner basics to professional mastery',
                
                'programs.trial.title': 'Trial Package',
                'programs.trial.level': 'Try Before You Commit',
                'programs.trial.classes': '1 Class',
                'programs.trial.validity': '1 Month',
                'programs.trial.price': '55 SGD',
                'programs.trial.description': 'Perfect introduction to modeling with our expert instructors at an affordable price.',
                'programs.trial.longDescription': 'Our Trial Package gives you the opportunity to experience our teaching style and studio environment before committing to a larger package. This single class covers the basics and helps you decide on your modeling journey.',
                
                'programs.starter.title': 'Starter Package',
                'programs.starter.level': 'Perfect for Beginners',
                'programs.starter.classes': '5 Classes',
                'programs.starter.validity': '3 Months',
                'programs.starter.description': 'Get started with your modeling journey through our foundational training package.',
                'programs.starter.longDescription': 'Our Starter Package is designed for those new to modeling who want to explore their potential. This package provides essential training in runway walking, posture correction, and confidence building basics.',
                
                'programs.professional.title': 'Professional Package',
                'programs.professional.level': 'Complete Transformation',
                'programs.professional.classes': '14 Classes',
                'programs.professional.validity': '6 Months',
                'programs.professional.description': 'Comprehensive training for serious students ready to master all aspects of modeling.',
                'programs.professional.longDescription': 'Our Professional Package offers extensive training covering all aspects of professional modeling. Perfect for students serious about developing advanced skills and building a strong foundation in the modeling industry.',
                
                'programs.mostPopular': 'Most Popular',
                'programs.whatsIncluded': 'What\'s Included:',
                'programs.moreFeatures': 'more features...',
                'programs.pricingAvailable': 'Pricing Available Upon Request',
                'programs.contactNote': 'Contact us for detailed pricing and payment plans',
                'programs.readyToStart': 'Ready to start? Contact us to book',
                'programs.inquireButton': 'Inquire About Pricing',
                'programs.detailsButton': 'View Full Details',
                
                'programs.training.title': 'What You\'ll Master',
                'programs.training.subtitle': 'Our comprehensive training covers all essential aspects of professional modeling',
                'programs.training.runway.title': 'Runway Walking',
                'programs.training.runway.description': 'Master professional runway techniques, turns, timing, and stage presence to command any catwalk with confidence.',
                'programs.training.posture.title': 'Posture Correction',
                'programs.training.posture.description': 'Develop perfect posture and body alignment through targeted exercises and personalized guidance.',
                'programs.training.confidence.title': 'Confidence Building',
                'programs.training.confidence.description': 'Build unshakeable self-confidence and overcome stage fright through proven psychological techniques.',
                'programs.training.branding.title': 'Personal Branding',
                'programs.training.branding.description': 'Develop your unique style and personal brand to stand out in the competitive modeling industry.',
                
                'programs.whyChoose.title': 'Why Choose Inner Light Studio?',
                'programs.whyChoose.subtitle': 'Experience the difference with our expert-designed training programs',
                'programs.whyChoose.expert.title': 'Expert Instructors',
                'programs.whyChoose.expert.description': 'Learn from Yen and Ada, industry professionals with years of modeling and coaching experience.',
                'programs.whyChoose.smallClass.title': 'Small Class Sizes',
                'programs.whyChoose.smallClass.description': 'Receive personalized attention with our limited class sizes for optimal learning and individual feedback.',
                'programs.whyChoose.flexible.title': 'Flexible Scheduling',
                'programs.whyChoose.flexible.description': 'Book classes at your convenience within your package validity period for maximum flexibility.',
                'programs.whyChoose.results.title': 'Proven Results',
                'programs.whyChoose.results.description': 'Join successful graduates who have built lasting confidence and achieved their modeling goals.',
                
                'programs.testimonials.title': 'Success Stories',
                'programs.testimonials.subtitle': 'Hear from students who have transformed their confidence through our programs',
                'programs.testimonials.maria': '"The Professional Package completely transformed my confidence. I went from being nervous to feeling like I owned every runway I walked on!"',
                'programs.testimonials.maria.title': 'Professional Package Graduate',
                'programs.testimonials.jessica': '"The Starter Package was perfect for me to explore modeling. The instructors were patient and helped me build confidence step by step."',
                'programs.testimonials.jessica.title': 'Starter Package Graduate',
                'programs.testimonials.alex': '"The comprehensive training and ongoing support helped me not just in modeling, but in all areas of my life. Highly recommended!"',
                'programs.testimonials.alex.title': 'Professional Package Graduate',
                
                'programs.cta.title': 'Ready to Start Your Transformation?',
                'programs.cta.subtitle': 'Choose the package that\'s right for you and begin your journey to confidence and success.',
                'programs.cta.consultation': 'Schedule Consultation',
                'programs.cta.instructors': 'Meet Our Instructors',
                
                'programs.detail.backToPackages': 'Back to Packages',
                'programs.detail.aboutPackage': 'About This Package',
                'programs.detail.whatsIncluded': 'What\'s Included',
                'programs.detail.getPricing': 'Get Pricing Info',
                'programs.detail.nextSteps': 'Next Steps',
                'programs.detail.nextSteps.subtitle': 'Ready to begin your transformation journey?',
                'programs.detail.step1.title': 'Contact Us',
                'programs.detail.step1.description': 'Reach out to inquire about pricing and availability for your chosen package.',
                'programs.detail.step2.title': 'Free Consultation',
                'programs.detail.step2.description': 'Schedule a complimentary consultation to discuss your goals and package details.',
                'programs.detail.step3.title': 'Start Training',
                'programs.detail.step3.description': 'Begin your transformation journey with expert guidance and personalized attention.',

                // Package Features
                'programs.features.introRunway': 'Introduction to runway walking',
                'programs.features.basicPosture': 'Basic posture assessment',
                'programs.features.confidenceSession': 'Confidence building session',
                'programs.features.personalConsult': 'Personal consultation',
                'programs.features.studioTour': 'Studio tour',
                'programs.features.progressRec': 'Progress recommendations',
                'programs.features.oneMonthValid': '1 month validity period',
                'programs.features.noCommitment': 'No long-term commitment',
                
                'programs.features.runwayFund': 'Runway walking fundamentals',
                'programs.features.basicCorrection': 'Basic posture correction',
                'programs.features.confidenceEx': 'Confidence building exercises',
                'programs.features.individualFeed': 'Individual feedback sessions',
                'programs.features.practiceAccess': 'Access to practice sessions',
                'programs.features.progressTrack': 'Personalized progress tracking',
                'programs.features.threeMonthValid': '3 months validity period',
                'programs.features.flexSchedule': 'Flexible scheduling',
                
                'programs.features.advancedRunway': 'Advanced runway walking techniques',
                'programs.features.completeProgram': 'Complete posture correction program',
                'programs.features.comprehensiveConf': 'Comprehensive confidence building',
                'programs.features.presentationSkills': 'Professional presentation skills',
                'programs.features.networking': 'Industry networking opportunities',
                'programs.features.portfolioGuide': 'Portfolio development guidance',
                'programs.features.mockCasting': 'Mock casting sessions',
                'programs.features.careerGuide': 'Career guidance and mentorship',
                'programs.features.sixMonthValid': '6 months validity period',
                'programs.features.priorityBooking': 'Priority booking privileges',
                'programs.features.extendedPractice': 'Extended practice sessions',
                'programs.features.certificate': 'Graduation certificate',

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

                // Programs page
                'programs.title': '我们的培训套餐',
                'programs.subtitle': '选择适合您模特之路的完美套餐 - 从初学者基础到专业精通',
                
                'programs.trial.title': '体验套餐',
                'programs.trial.level': '先试后买',
                'programs.trial.classes': '1节课',
                'programs.trial.validity': '1个月',
                'programs.trial.price': '55新元',
                'programs.trial.description': '与我们专业导师的完美入门介绍，价格实惠。',
                'programs.trial.longDescription': '我们的体验套餐让您有机会在承诺更大套餐之前体验我们的教学风格和工作室环境。这节课涵盖基础知识，帮助您决定您的模特之路。',
                
                'programs.starter.title': '初学者套餐',
                'programs.starter.level': '完美适合初学者',
                'programs.starter.classes': '5节课',
                'programs.starter.validity': '3个月',
                'programs.starter.description': '通过我们的基础培训套餐开始您的模特之旅。',
                'programs.starter.longDescription': '我们的初学者套餐专为模特新手设计，帮助他们探索自己的潜力。该套餐提供T台走秀、姿态矫正和自信建立基础的核心培训。',
                
                'programs.professional.title': '专业套餐',
                'programs.professional.level': '完全蜕变',
                'programs.professional.classes': '14节课',
                'programs.professional.validity': '6个月',
                'programs.professional.description': '为准备掌握模特各个方面的认真学员提供的综合培训。',
                'programs.professional.longDescription': '我们的专业套餐提供涵盖专业模特各个方面的广泛培训。非常适合认真发展高级技能并在模特行业建立坚实基础的学员。',
                
                'programs.mostPopular': '最受欢迎',
                'programs.whatsIncluded': '包含内容：',
                'programs.moreFeatures': '更多功能...',
                'programs.pricingAvailable': '价格请咨询',
                'programs.contactNote': '联系我们获取详细价格和付款计划',
                'programs.readyToStart': '准备开始吗？联系我们预约',
                'programs.inquireButton': '咨询价格',
                'programs.detailsButton': '查看详情',
                
                'programs.training.title': '您将掌握的技能',
                'programs.training.subtitle': '我们的综合培训涵盖专业模特的所有基本方面',
                'programs.training.runway.title': 'T台走秀',
                'programs.training.runway.description': '掌握专业T台技巧、转身、时机和舞台表现力，自信地驾驭任何T台。',
                'programs.training.posture.title': '姿态矫正',
                'programs.training.posture.description': '通过针对性练习和个性化指导，培养完美的姿态和身体协调性。',
                'programs.training.confidence.title': '自信建立',
                'programs.training.confidence.description': '通过经过验证的心理技巧，建立不可动摇的自信心并克服怯场。',
                'programs.training.branding.title': '个人品牌',
                'programs.training.branding.description': '发展您独特的风格和个人品牌，在竞争激烈的模特行业中脱颖而出。',
                
                'programs.whyChoose.title': '为什么选择内在光芒工作室？',
                'programs.whyChoose.subtitle': '体验我们专家设计的培训课程的不同之处',
                'programs.whyChoose.expert.title': '专业导师',
                'programs.whyChoose.expert.description': '向Yen和Ada学习，她们是拥有多年模特和指导经验的行业专业人士。',
                'programs.whyChoose.smallClass.title': '小班授课',
                'programs.whyChoose.smallClass.description': '通过我们有限的班级规模获得个人关注，实现最佳学习和个人反馈。',
                'programs.whyChoose.flexible.title': '灵活安排',
                'programs.whyChoose.flexible.description': '在套餐有效期内按您的方便时间预约课程，获得最大灵活性。',
                'programs.whyChoose.results.title': '经验证的结果',
                'programs.whyChoose.results.description': '加入成功毕业生的行列，他们建立了持久的自信并实现了模特目标。',
                
                'programs.testimonials.title': '成功故事',
                'programs.testimonials.subtitle': '听听通过我们课程改变自信的学员的心声',
                'programs.testimonials.maria': '"专业套餐完全改变了我的自信心。我从紧张不安变成了感觉自己主宰着走过的每一条T台！"',
                'programs.testimonials.maria.title': '专业套餐毕业生',
                'programs.testimonials.jessica': '"初学者套餐对我探索模特来说非常完美。导师很耐心，帮助我一步步建立自信。"',
                'programs.testimonials.jessica.title': '初学者套餐毕业生',
                'programs.testimonials.alex': '"综合培训和持续支持不仅在模特方面帮助了我，在生活的各个方面都有帮助。强烈推荐！"',
                'programs.testimonials.alex.title': '专业套餐毕业生',
                
                'programs.cta.title': '准备开始您的蜕变吗？',
                'programs.cta.subtitle': '选择适合您的套餐，开始您的自信和成功之旅。',
                'programs.cta.consultation': '预约咨询',
                'programs.cta.instructors': '认识我们的导师',
                
                'programs.detail.backToPackages': '返回套餐',
                'programs.detail.aboutPackage': '关于此套餐',
                'programs.detail.whatsIncluded': '包含内容',
                'programs.detail.getPricing': '获取价格信息',
                'programs.detail.nextSteps': '下一步',
                'programs.detail.nextSteps.subtitle': '准备开始您的蜕变之旅吗？',
                'programs.detail.step1.title': '联系我们',
                'programs.detail.step1.description': '联系我们咨询您选择套餐的价格和可用性。',
                'programs.detail.step2.title': '免费咨询',
                'programs.detail.step2.description': '安排免费咨询，讨论您的目标和套餐详情。',
                'programs.detail.step3.title': '开始培训',
                'programs.detail.step3.description': '在专家指导和个人关注下开始您的蜕变之旅。',

                // Package Features
                'programs.features.introRunway': 'T台走秀入门',
                'programs.features.basicPosture': '基础姿态评估',
                'programs.features.confidenceSession': '自信建立课程',
                'programs.features.personalConsult': '个人咨询',
                'programs.features.studioTour': '工作室参观',
                'programs.features.progressRec': '进度建议',
                'programs.features.oneMonthValid': '1个月有效期',
                'programs.features.noCommitment': '无长期承诺',
                
                'programs.features.runwayFund': 'T台走秀基础',
                'programs.features.basicCorrection': '基础姿态矫正',
                'programs.features.confidenceEx': '自信建立练习',
                'programs.features.individualFeed': '个人反馈课程',
                'programs.features.practiceAccess': '练习课程访问',
                'programs.features.progressTrack': '个性化进度跟踪',
                'programs.features.threeMonthValid': '3个月有效期',
                'programs.features.flexSchedule': '灵活安排',
                
                'programs.features.advancedRunway': '高级T台走秀技巧',
                'programs.features.completeProgram': '完整姿态矫正计划',
                'programs.features.comprehensiveConf': '全面自信建立',
                'programs.features.presentationSkills': '专业表达技巧',
                'programs.features.networking': '行业网络机会',
                'programs.features.portfolioGuide': '作品集开发指导',
                'programs.features.mockCasting': '模拟试镜',
                'programs.features.careerGuide': '职业指导和导师指导',
                'programs.features.sixMonthValid': '6个月有效期',
                'programs.features.priorityBooking': '优先预约权限',
                'programs.features.extendedPractice': '延长练习课程',
                'programs.features.certificate': '毕业证书',

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