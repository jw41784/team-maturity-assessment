$(document).ready(function() {
    // Define the 5-point Likert scale to be reused
    const likertScale = [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neutral" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
    ];

    // Define consistent heading text for maturity level context
    const maturityContext = `
        <div class="maturity-context">
            <p>When responding to each statement, consider how your team typically operates in a distributed (remote/hybrid) work environment.</p>
            <p>Your honest assessment will help identify areas of strength and opportunity for your team's distributed work effectiveness.</p>
        </div>
    `;

    // Create the survey JSON
    const surveyJson = {
        title: "Team Maturity Assessment",
        focusFirstQuestionAutomatic: false,
        checkErrorsMode: "onValueChanged",
        showProgressBar: "bottom",
        progressBarType: "pages",
        showQuestionNumbers: "off",
        showCompletedPage: true,
        navigateToUrl: undefined,
        goNextPageAutomatic: false,
        showNavigationButtons: true,
        showPrevButton: true,
        showPreviewBeforeComplete: "noPreview",
        firstPageIsStarted: true,
        startSurveyText: "Begin Assessment",
        pagePrevText: "Previous",
        pageNextText: "Continue",
        completeText: "Submit Assessment",
        clearInvisibleValues: "onHidden",
        requiredText: "",
        questionTitlePattern: "Question {no}",
        completedHtml: `
            <div class="completion-container">
                <h4>Thank you for completing the Team Maturity Assessment</h4>
                <p>Your responses provide valuable insights into your team's distributed work capabilities.</p>
                <p>Results will help identify both strengths to leverage and opportunities for development.</p>
            </div>
        `,
        pages: [
            // Introduction page
            {
                name: "intro",
                title: "Team Maturity Assessment",
                description: "Evaluating distributed team effectiveness",
                elements: [
                    {
                        type: "html",
                        name: "introText",
                        html: `
                            <div class="survey-intro">
                                <h2>Welcome to the Team Maturity Assessment</h2>
                                
                                <div class="intro-section">
                                    <h3>Purpose</h3>
                                    <p>This assessment evaluates your team's maturity and effectiveness when working in partially or fully distributed (remote/hybrid) environments.</p>
                                </div>
                                
                                <div class="intro-section">
                                    <h3>Instructions</h3>
                                    <ul>
                                        <li>The assessment contains statements about your team's distributed work practices</li>
                                        <li>For each statement, indicate your level of agreement based on your experience</li>
                                        <li>Please respond based on typical behaviors, not just during exceptional circumstances</li>
                                        <li>All responses are confidential and will be used to identify team strengths and growth opportunities</li>
                                        <li>The assessment takes approximately 10-15 minutes to complete</li>
                                    </ul>
                                </div>
                                
                                <div class="intro-section rating-scale-explanation">
                                    <h3>Rating Scale</h3>
                                    <div class="scale-container">
                                        <div class="scale-point"><span class="scale-number">1</span><span class="scale-label">Strongly Disagree</span></div>
                                        <div class="scale-point"><span class="scale-number">2</span><span class="scale-label">Disagree</span></div>
                                        <div class="scale-point"><span class="scale-number">3</span><span class="scale-label">Neutral</span></div>
                                        <div class="scale-point"><span class="scale-number">4</span><span class="scale-label">Agree</span></div>
                                        <div class="scale-point"><span class="scale-number">5</span><span class="scale-label">Strongly Agree</span></div>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            
            // Practical Factors - First section (Communication & Technology, Work Processes)
            {
                name: "practical_factors_1",
                title: "Practical Factors: Communication & Processes",
                description: maturityContext,
                elements: [
                    // Communication & Technology
                    {
                        type: "panel",
                        title: "Communication & Technology",
                        state: "expanded",
                        description: "Assess how effectively your team uses communication tools and technology",
                        elements: [
                            {
                                type: "rating",
                                name: "comm_tech_1",
                                title: "Our collaboration tools are easy to use, reliable, and meet our remote/hybrid work needs.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "comm_tech_2",
                                title: "Our virtual meetings are consistently productive and well-structured.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "comm_tech_3",
                                title: "Communication across the team is clear and timely, even when asynchronous.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Work Processes & Structures
                    {
                        type: "panel",
                        title: "Work Processes & Structures",
                        state: "expanded",
                        description: "Evaluate how your team organizes and structures work in a distributed environment",
                        elements: [
                            {
                                type: "rating",
                                name: "process_1",
                                title: "Our tasks and responsibilities are clearly defined, accessible, and transparent.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "process_2",
                                title: "Our workflows and processes effectively support distributed work.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "process_3",
                                title: "Critical team information is consistently documented and easily accessible to all.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    }
                ]
            },
            
            // Practical Factors - Second section (Performance, Resources, Training)
            {
                name: "practical_factors_2",
                title: "Practical Factors: Performance & Resources",
                description: maturityContext,
                elements: [
                    // Performance Management & Accountability
                    {
                        type: "panel",
                        title: "Performance Management & Accountability",
                        state: "expanded",
                        description: "Assess how performance is managed and evaluated in your distributed team",
                        elements: [
                            {
                                type: "rating",
                                name: "perf_1",
                                title: "Expectations for remote/hybrid team members are clear and measurable.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "perf_2",
                                title: "Feedback on performance is regularly provided and actionable in a remote context.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "perf_3",
                                title: "Team members are evaluated fairly based on outcomes rather than visibility or presence.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Resource Accessibility
                    {
                        type: "panel",
                        title: "Resource Accessibility",
                        state: "expanded",
                        description: "Evaluate access to necessary tools and resources in a distributed environment",
                        elements: [
                            {
                                type: "rating",
                                name: "resource_1",
                                title: "Essential resources (tools, technology, support) are consistently accessible remotely.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "resource_2",
                                title: "Technical or logistical issues are easily and quickly resolved in a distributed environment.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "resource_3",
                                title: "Resources are equitably distributed among remote and onsite team members.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Training & Skill Development
                    {
                        type: "panel",
                        title: "Training & Skill Development",
                        state: "expanded",
                        description: "Assess how your team develops skills for effective distributed work",
                        elements: [
                            {
                                type: "rating",
                                name: "training_1",
                                title: "Our team regularly receives training on best practices for distributed working.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "training_2",
                                title: "Team members have sufficient skills and knowledge to utilize remote collaboration tools effectively.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "training_3",
                                title: "New team members receive comprehensive orientation for remote/hybrid team practices.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    }
                ]
            },
            
            // Abstract Factors - First section (Trust, Culture, Adaptability)
            {
                name: "abstract_factors_1",
                title: "Cultural Factors: Trust & Belonging",
                description: maturityContext,
                elements: [
                    // Trust & Psychological Safety
                    {
                        type: "panel",
                        title: "Trust & Psychological Safety",
                        state: "expanded",
                        description: "Assess levels of trust and psychological safety within your distributed team",
                        elements: [
                            {
                                type: "rating",
                                name: "trust_1",
                                title: "Team members consistently trust one another's integrity and reliability, even when remote.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "trust_2",
                                title: "Team members feel psychologically safe expressing concerns or challenges in virtual settings.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "trust_3",
                                title: "It's easy to ask for support or assistance from teammates remotely without hesitation.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Culture & Belonging
                    {
                        type: "panel",
                        title: "Culture & Belonging",
                        state: "expanded",
                        description: "Evaluate how your team maintains connection and belonging when distributed",
                        elements: [
                            {
                                type: "rating",
                                name: "culture_1",
                                title: "Team members consistently feel included and connected, despite geographic distances.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "culture_2",
                                title: "Leadership actively cultivates a shared sense of identity and purpose among distributed team members.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "culture_3",
                                title: "Efforts are consistently made to build and sustain team relationships remotely.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Adaptability & Resilience
                    {
                        type: "panel",
                        title: "Adaptability & Resilience",
                        state: "expanded",
                        description: "Assess how your team adapts and maintains resilience in a distributed environment",
                        elements: [
                            {
                                type: "rating",
                                name: "adapt_1",
                                title: "Our team quickly adapts to changes or disruptions in a remote/hybrid context.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "adapt_2",
                                title: "We learn effectively from setbacks or challenges experienced in virtual environments.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "adapt_3",
                                title: "Our team regularly experiments with new approaches to improve remote/hybrid working.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    }
                ]
            },
            
            // Abstract Factors - Second section (Leadership, Engagement, Cross-Cultural)
            {
                name: "abstract_factors_2",
                title: "Cultural Factors: Leadership & Engagement",
                description: maturityContext,
                elements: [
                    // Leadership & Alignment
                    {
                        type: "panel",
                        title: "Leadership & Alignment",
                        state: "expanded",
                        description: "Assess how leadership operates and creates alignment in your distributed team",
                        elements: [
                            {
                                type: "rating",
                                name: "leadership_1",
                                title: "Leadership provides clear and effective direction for remote/hybrid work.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "leadership_2",
                                title: "Team members consistently understand and are aligned around shared goals and priorities.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "leadership_3",
                                title: "Leaders proactively communicate important information, especially when remote or hybrid.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Engagement & Motivation
                    {
                        type: "panel",
                        title: "Engagement & Motivation",
                        state: "expanded",
                        description: "Evaluate team engagement and motivation in a distributed environment",
                        elements: [
                            {
                                type: "rating",
                                name: "engage_1",
                                title: "Remote/hybrid team members demonstrate high levels of motivation and engagement.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "engage_2",
                                title: "Our team has effective ways to recognize and celebrate contributions remotely.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "engage_3",
                                title: "Autonomy is balanced effectively with team accountability in a distributed context.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    
                    // Cross-Cultural Fluency
                    {
                        type: "panel",
                        title: "Cross-Cultural Fluency",
                        state: "expanded",
                        description: "Assess your team's ability to work effectively across cultures when distributed",
                        elements: [
                            {
                                type: "rating",
                                name: "cultural_1",
                                title: "Our team consistently demonstrates understanding and appreciation for cultural differences.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "cultural_2",
                                title: "Team members effectively navigate cross-cultural communication challenges remotely.",
                                rateValues: likertScale,
                                isRequired: true
                            },
                            {
                                type: "rating",
                                name: "cultural_3",
                                title: "Team members adapt well to diverse working styles and expectations across cultures.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    }
                ]
            },
            
            // Overall Maturity Assessment page
            {
                name: "maturity_assessment",
                title: "Overall Team Maturity",
                description: "After reflecting on all aspects of your team's distributed work, provide your overall assessment:",
                elements: [
                    {
                        type: "panel",
                        title: "Practical Factors Assessment",
                        state: "expanded",
                        description: "Consider all practical aspects: communication, processes, performance, resources, and training",
                        elements: [
                            {
                                type: "rating",
                                name: "practical_overall",
                                title: "Overall, our team's practical capabilities for distributed work are mature and effective.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    {
                        type: "panel",
                        title: "Cultural Factors Assessment",
                        state: "expanded",
                        description: "Consider all cultural aspects: trust, belonging, adaptability, leadership, engagement, and cross-cultural fluency",
                        elements: [
                            {
                                type: "rating",
                                name: "abstract_overall",
                                title: "Overall, our team's cultural and interpersonal maturity for distributed work is high.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    {
                        type: "panel",
                        title: "Overall Team Maturity Assessment",
                        state: "expanded",
                        description: "Considering all factors, assess your team's overall maturity for distributed work",
                        elements: [
                            {
                                type: "rating",
                                name: "team_overall",
                                title: "Overall, our team demonstrates maturity and effectiveness in operating as a partially or fully distributed team.",
                                rateValues: likertScale,
                                isRequired: true
                            }
                        ]
                    },
                    {
                        type: "comment",
                        name: "additional_comments",
                        title: "Additional comments or observations regarding your team's remote/hybrid effectiveness:",
                        placeholder: "Please share any additional insights, observations, or specific improvement areas...",
                        rows: 5
                    }
                ]
            }
        ],
        triggers: [
            {
                type: "complete",
                expression: "{team_overall} notempty"
            }
        ],
        calculatedValues: [
            {
                name: "practical_score",
                expression: "({comm_tech_1} + {comm_tech_2} + {comm_tech_3} + {process_1} + {process_2} + {process_3} + {perf_1} + {perf_2} + {perf_3} + {resource_1} + {resource_2} + {resource_3} + {training_1} + {training_2} + {training_3}) / 15"
            },
            {
                name: "cultural_score",
                expression: "({trust_1} + {trust_2} + {trust_3} + {culture_1} + {culture_2} + {culture_3} + {adapt_1} + {adapt_2} + {adapt_3} + {leadership_1} + {leadership_2} + {leadership_3} + {engage_1} + {engage_2} + {engage_3} + {cultural_1} + {cultural_2} + {cultural_3}) / 18"
            },
            {
                name: "overall_score",
                expression: "({practical_score} + {cultural_score}) / 2"
            }
        ]
    };

    // Create the survey
    const survey = new Survey.Model(surveyJson);
    
    // Set custom theme with I/O psychology best practices
    survey.applyTheme({
        isPanelless: false,
        header: {
            height: 80,
            background: "#4A2532",
            backgroundImage: "none",
            color: "white"
        },
        headerTitle: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "24px"
        },
        pageTitle: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            margin: "0 0 15px 0"
        },
        pageDescription: {
            fontFamily: "'Lato', sans-serif",
            fontSize: "16px",
            margin: "0 0 25px 0"
        },
        questionTitle: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: "500",
            fontSize: "16px"
        },
        page: {
            margin: "0 0 20px 0"
        },
        question: {
            margin: "15px 0",
            gap: "15px"
        },
        panel: {
            gap: "10px",
            padding: "20px",
            margin: "0 0 25px 0"
        }
    });

    // Visual enhancements for cognitive ease
    survey.onAfterRenderQuestion.add(function(sender, options) {
        if (options.question.getType() === "rating") {
            // Add hover effect for rating elements
            const ratingItems = options.htmlElement.querySelectorAll(".sv_q_rating_item");
            ratingItems.forEach(function(item) {
                item.classList.add("enhanced-rating");
            });
        }
    });

    // Calculate and summarize results
    survey.onComplete.add(function(sender) {
        const data = sender.data;
        
        // Safely calculate category scores with fallbacks to prevent NaN
        let practicalScore = sender.getCalculatedValueByName("practical_score");
        let culturalScore = sender.getCalculatedValueByName("cultural_score");
        let overallScore = sender.getCalculatedValueByName("overall_score");
        
        // Ensure we have valid numbers, not NaN or undefined
        practicalScore = !isNaN(practicalScore) ? practicalScore : 0;
        culturalScore = !isNaN(culturalScore) ? culturalScore : 0;
        overallScore = !isNaN(overallScore) ? overallScore : 0;
        
        // Format scores for display
        const formatScore = (score) => (Math.round(score * 100) / 100).toFixed(1);
        
        // Store assessment data in localStorage (temporary before email submission)
        const assessmentData = {
            date: new Date().toISOString(),
            scores: {
                practical: practicalScore,
                cultural: culturalScore,
                overall: overallScore
            },
            responses: data
        };
        
        localStorage.setItem('teamMaturityAssessment', JSON.stringify(assessmentData));
        
        // Define meaningful cutoffs for maturity levels
        const practicalLevel = getPracticalMaturityLevel(practicalScore);
        const culturalLevel = getCulturalMaturityLevel(culturalScore);
        const overallLevel = getOverallMaturityLevel(overallScore);
        const combinedAssessment = getCombinedAssessment(practicalLevel.level, culturalLevel.level);
        
        // Create user-friendly results display
        const resultsHTML = `
            <div class="results-container">
                <h3>Team Maturity Assessment Results</h3>
                
                <div class="score-summary">
                    <div class="score-section ${practicalLevel.class}">
                        <div class="level-indicator">${practicalLevel.label}</div>
                        <h4>Practical Factors</h4>
                        <div class="score-value">${formatScore(practicalScore)}<span class="score-denominator">/5.0</span></div>
                        <p>Tools, processes, and systems</p>
                    </div>
                    
                    <div class="score-section ${culturalLevel.class}">
                        <div class="level-indicator">${culturalLevel.label}</div>
                        <h4>Cultural Factors</h4>
                        <div class="score-value">${formatScore(culturalScore)}<span class="score-denominator">/5.0</span></div>
                        <p>Trust, belonging, and engagement</p>
                    </div>
                    
                    <div class="score-section overall ${overallLevel.class}">
                        <div class="level-indicator">${overallLevel.label}</div>
                        <h4>Overall Maturity</h4>
                        <div class="score-value">${formatScore(overallScore)}<span class="score-denominator">/5.0</span></div>
                        <p>Distributed team effectiveness</p>
                    </div>
                </div>
                
                <div class="maturity-narrative">
                    <h4>Your Team's Distributed Work Profile</h4>
                    <p class="team-profile-intro">Based on your assessment, here's a pragmatic view of your team's current state:</p>
                    
                    <div class="maturity-section practical-maturity">
                        <h5>Practical Capabilities</h5>
                        <p>${practicalLevel.description}</p>
                    </div>
                    
                    <div class="maturity-section cultural-maturity">
                        <h5>Cultural Dynamics</h5>
                        <p>${culturalLevel.description}</p>
                    </div>
                    
                    <div class="maturity-section combined-assessment">
                        <h5>The Complete Picture</h5>
                        <p>${combinedAssessment}</p>
                    </div>
                </div>
                
                <div class="next-steps">
                    <h4>Recommended Actions</h4>
                    <div class="actions-container">
                        <div class="action-column">
                            <h5>Start Now</h5>
                            <ul class="action-list">
                                ${practicalLevel.immediateActions}
                                ${culturalLevel.immediateActions}
                            </ul>
                        </div>
                        <div class="action-column">
                            <h5>Build For Tomorrow</h5>
                            <ul class="action-list">
                                ${practicalLevel.longTermActions}
                                ${culturalLevel.longTermActions}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="team-reflection">
                    <h4>Team Reflection Questions</h4>
                    <p>Use these questions to facilitate a productive team conversation about your results:</p>
                    <ul class="reflection-questions">
                        ${practicalLevel.reflectionQuestions}
                        ${culturalLevel.reflectionQuestions}
                    </ul>
                </div>
                
                <div class="email-results">
                    <h4>Get Your Detailed Results</h4>
                    <p>Enter your email to receive a comprehensive report with your detailed assessment data and customized recommendations:</p>
                    
                    <div class="email-form">
                        <input type="email" id="resultsEmail" placeholder="Your email address" class="email-input">
                        <button id="sendResultsBtn" class="email-button">Send My Results</button>
                    </div>
                    
                    <div id="emailStatus" class="email-status"></div>
                    
                    <p class="privacy-note">Your email will only be used to send you these results and will not be stored or used for marketing purposes.</p>
                </div>
            </div>
        `;
        
        document.querySelector('#surveyResult').innerHTML = resultsHTML;
        
        // Set up email submission handler
        setTimeout(() => {
            const emailButton = document.getElementById('sendResultsBtn');
            if (emailButton) {
                emailButton.addEventListener('click', function() {
                    const emailInput = document.getElementById('resultsEmail');
                    const emailStatus = document.getElementById('emailStatus');
                    
                    if (!emailInput.value || !emailInput.value.includes('@')) {
                        emailStatus.innerHTML = '<p class="status-error">Please enter a valid email address</p>';
                        return;
                    }
                    
                    // Simulate sending email (in a real implementation, this would be an API call)
                    emailStatus.innerHTML = '<p class="status-sending">Sending your results...</p>';
                    
                    setTimeout(() => {
                        emailStatus.innerHTML = '<p class="status-success">Success! Your detailed results have been sent to your email.</p>';
                        emailInput.value = '';
                    }, 1500);
                    
                    // In a real implementation, you would send the data to a server here
                    console.log("Would send results to:", emailInput.value);
                });
            }
        }, 100);
        
        // Log results for debugging or data collection
        console.log("Survey results:", data);
        console.log("Practical Score:", practicalScore);
        console.log("Cultural Score:", culturalScore);
        console.log("Overall Score:", overallScore);
    });
    
    // Helper functions for maturity level determination
    
    function getPracticalMaturityLevel(score) {
        if (score < 2.3) {
            return {
                level: 1,
                label: "Foundational",
                class: "level-foundational",
                description: "Your team is at an early stage of practical distributed work capability. The assessment reveals significant gaps in your digital infrastructure, with inconsistent processes and suboptimal tool usage creating substantial friction. Team members likely spend excessive time navigating workflow ambiguity, and information access is problematic. This creates inefficiencies that impact delivery timelines and work quality.",
                immediateActions: `
                    <li>Conduct a systematic tools audit to identify overlapping, ineffective, or underutilized digital solutions and eliminate redundancies</li>
                    <li>Implement basic documentation standards for critical team information with clear ownership and update requirements</li>
                `,
                longTermActions: `
                    <li>Develop a comprehensive distributed work playbook that codifies communication channels, decision rights, and escalation paths for different work scenarios</li>
                    <li>Establish a quarterly structured review process with measurable success criteria for your digital collaboration ecosystem</li>
                `,
                reflectionQuestions: `
                    <li>What specific process breakdowns consistently erode our team's productivity when working remotely?</li>
                    <li>Which communication channels and workflow handoffs are creating the most friction, and what concrete evidence supports this?</li>
                `
            };
        } else if (score < 3.3) {
            return {
                level: 2,
                label: "Emerging",
                class: "level-emerging",
                description: "Your team has constructed baseline systems for distributed work, but the assessment indicates these remain inconsistently applied and moderately effective. Critical processes show variability in execution, with some workflows well-defined while others remain ad hoc. Information accessibility issues persist, and your digital tools are not fully leveraged. This creates knowledge silos and occasional productivity bottlenecks that require management intervention.",
                immediateActions: `
                    <li>Standardize meeting protocols with mandatory agendas, designated facilitators, documented decisions, and clear action items with owners and deadlines</li>
                    <li>Implement and document clear service level agreements for communication channel usage and expected response times based on message priority</li>
                `,
                longTermActions: `
                    <li>Create a centralized knowledge management system with search functionality, permission controls, and contribution expectations for all team members</li>
                    <li>Develop specific metrics and regular assessment mechanisms to objectively measure the effectiveness of your distributed work practices</li>
                `,
                reflectionQuestions: `
                    <li>Where specifically do we see recurring breakdowns in our distributed workflows, and what measurable impact do these have on our delivery metrics?</li>
                    <li>What critical information or resources remain difficult to access remotely, and how does this specifically impact decision quality and speed?</li>
                `
            };
        } else if (score < 4.3) {
            return {
                level: 3,
                label: "Established",
                class: "level-established",
                description: "Your team operates with competent practical distributed work capabilities, though not without limitations. The assessment indicates your digital infrastructure generally supports effective collaboration, with documented processes for most critical work activities. While team members can navigate tools adequately, efficiency gaps remain, particularly in asynchronous workflows and cross-functional collaboration. Maintaining these systems requires ongoing attention from leadership.",
                immediateActions: `
                    <li>Formalize and document the effective practices that have emerged organically, including explicit ownership for maintaining and evolving these standards</li>
                    <li>Conduct a systematic review of asynchronous communication practices, measuring information completeness, response time, and resolution quality</li>
                `,
                longTermActions: `
                    <li>Develop comprehensive onboarding playbooks that explicitly train new members on your distributed work systems with specific proficiency milestones</li>
                    <li>Implement advanced digital facilitation methods with structured templates for complex collaborative processes like decision-making and problem-solving</li>
                `,
                reflectionQuestions: `
                    <li>Which specific workflows in our distributed system show measurable inefficiencies, and what data points evidence the need for further automation or streamlining?</li>
                    <li>How are we currently measuring and optimizing the balance between synchronous and asynchronous work, and what evidence suggests we could improve?</li>
                `
            };
        } else {
            return {
                level: 4,
                label: "Advanced",
                class: "level-advanced",
                description: "Your team demonstrates robust practical distributed work capabilities, though this assessment should not be viewed as grounds for complacency. Your digital infrastructure and processes effectively support remote collaboration, with well-documented systems for both synchronous and asynchronous work. The assessment indicates team members navigate confidently between work modes with minimal friction. However, maintaining this level requires continuous refinement and adaptation to emerging challenges.",
                immediateActions: `
                    <li>Document your mature distributed work system as structured case studies to transfer knowledge effectively to other teams in your organization</li>
                    <li>Establish a structured experimentation framework to systematically evaluate emerging collaboration tools against specific performance metrics</li>
                `,
                longTermActions: `
                    <li>Implement sophisticated analytics to objectively measure distributed work patterns, highlighting potential optimizations based on empirical workflow data</li>
                    <li>Create a formal innovation pipeline with defined criteria for testing and implementing new distributed work approaches from both internal and external sources</li>
                `,
                reflectionQuestions: `
                    <li>What specific metrics demonstrate the effectiveness of our current practices, and which areas show potential for measurable performance improvement?</li>
                    <li>How might we systematically identify and evaluate emerging technologies and methodologies that could quantifiably enhance our distributed capabilities?</li>
                `
            };
        }
    }
    
    function getCulturalMaturityLevel(score) {
        if (score < 2.3) {
            return {
                level: 1,
                label: "Foundational",
                class: "level-foundational",
                description: "Your team shows significant cultural challenges in distributed environments. The assessment indicates deficient psychological safety, with communication patterns suggesting team members withhold concerns and feedback in virtual settings. Geographic dispersion appears to amplify existing trust issues, resulting in noticeable collaboration barriers. Remote team members likely experience exclusion from key conversations and decision points, with interpersonal connections heavily mediated by proximity.",
                immediateActions: `
                    <li>Implement structured, facilitated check-ins with clear psychological safety protocols to address both work progress and well-being in a systematic manner</li>
                    <li>Establish and document explicit communication norms that address when, how, and where team members should surface challenges, with accountability for leadership response</li>
                `,
                longTermActions: `
                    <li>Develop and formally adopt a team charter with explicit values, behavioral standards, and operating principles specifically addressing distributed work dynamics</li>
                    <li>Institute regular, facilitated retrospectives with psychological safety measures to systematically identify and address cultural friction points in distributed collaboration</li>
                `,
                reflectionQuestions: `
                    <li>What specific patterns of interaction or decision-making create the greatest trust deficits in our remote environment, and how are these measured?</li>
                    <li>When precisely do remote team members experience exclusion or information asymmetry, and what measurable impact does this have on outcomes and engagement?</li>
                `
            };
        } else if (score < 3.3) {
            return {
                level: 2,
                label: "Emerging",
                class: "level-emerging",
                description: "Your team has developed basic cultural foundations for distributed work, though significant inconsistencies persist. The assessment reveals uneven psychological safety across different team configurations, with trust likely concentrated within proximity-based subgroups. Remote engagement appears episodic rather than sustained, leading to variable inclusion experiences. Your digital environments facilitate functional exchanges but struggle to support deeper connection, resulting in relationship fragility that impacts collaboration resilience during pressured situations.",
                immediateActions: `
                    <li>Implement formal working agreements that explicitly define behavioral expectations, decision protocols, and communication standards for distributed collaboration scenarios</li>
                    <li>Institute structured, facilitated sessions dedicated to personal connection beyond work topics, with measured participation across all team members regardless of location</li>
                `,
                longTermActions: `
                    <li>Develop a comprehensive leadership capability framework with specific behaviors and practices for maintaining demonstrable inclusion and connection across distance</li>
                    <li>Establish a systematic recognition program specifically designed to surface and celebrate contributions from team members regardless of their work location or visibility</li>
                `,
                reflectionQuestions: `
                    <li>What quantifiable evidence reveals inclusion gaps for remote team members, and which specific meeting types or work scenarios show the greatest disparities?</li>
                    <li>Which team rituals or practices demonstrably strengthen connection in distributed settings, and how might we systematically reinforce and scale these approaches?</li>
                `
            };
        } else if (score < 4.3) {
            return {
                level: 3,
                label: "Established",
                class: "level-established",
                description: "Your team maintains generally effective cultural practices for distributed work, with clear areas for continued refinement. The assessment indicates adequate psychological safety underpinned by established norms and behaviors. Team members typically maintain connection across locations, though relationship quality may fluctuate during pressure periods or with changing team composition. Digital interactions mostly support effective collaboration, but depth of engagement varies across different virtual contexts, indicating opportunity for more systematic experience design.",
                immediateActions: `
                    <li>Analyze and formalize your recognition practices to ensure systematic acknowledgment of contributions across different work modes, with particular attention to asynchronous work accomplishments</li>
                    <li>Implement a team working styles inventory with detailed collaboration preferences to make interaction patterns explicit and negotiable across digital environments</li>
                `,
                longTermActions: `
                    <li>Establish a structured cross-location mentoring system with specific relationship development milestones and measurable knowledge transfer objectives</li>
                    <li>Develop advanced digital facilitation capabilities across the team with designated facilitators trained in creating equitable participation across hybrid settings</li>
                `,
                reflectionQuestions: `
                    <li>Which specific digital interaction types consistently show lower engagement quality, and what indicators suggest potential design interventions?</li>
                    <li>What quantifiable differences exist between our in-person and digital cultural experiences, and which specific elements warrant targeted enhancement?</li>
                `
            };
        } else {
            return {
                level: 4,
                label: "Advanced",
                class: "level-advanced",
                description: "Your team demonstrates sophisticated cultural practices for distributed work, though maintaining this standard requires continued vigilance. The assessment indicates strong psychological safety transcending location, with communication patterns that surface diverse perspectives regardless of work mode. Team members appear consistently connected to purpose and each other, with digital environments purposefully designed for both task execution and relationship development. While your distributed culture shows significant maturity, emerging team composition changes and evolving work patterns will present ongoing adaptation challenges.",
                immediateActions: `
                    <li>Document your distributed cultural practices as structured case studies with specific context, interventions, and measured outcomes to enable knowledge transfer across your organization</li>
                    <li>Establish a systematic experimentation framework to test and evaluate novel approaches to digital connection with clear success metrics and learning documentation</li>
                `,
                longTermActions: `
                    <li>Develop a comprehensive cultural onboarding system that explicitly transfers tacit knowledge and relationship patterns to new team members joining in distributed contexts</li>
                    <li>Implement formal sensing mechanisms to continuously monitor cultural health across different work configurations, with defined intervention thresholds for early pattern correction</li>
                `,
                reflectionQuestions: `
                    <li>What specific metrics provide evidence of our cultural effectiveness in distributed settings, and which leading indicators might reveal emerging stress points?</li>
                    <li>How might we systematically identify which subtle aspects of our team dynamics require enhancement as our distributed work patterns evolve?</li>
                `
            };
        }
    }
    
    function getOverallMaturityLevel(score) {
        if (score < 2.3) {
            return {
                level: 1,
                label: "Foundational",
                class: "level-foundational"
            };
        } else if (score < 3.3) {
            return {
                level: 2,
                label: "Emerging",
                class: "level-emerging"
            };
        } else if (score < 4.3) {
            return {
                level: 3,
                label: "Established",
                class: "level-established"
            };
        } else {
            return {
                level: 4,
                label: "Advanced",
                class: "level-advanced"
            };
        }
    }
    
    function getCombinedAssessment(practicalLevel, culturalLevel) {
        // Different combinations of practical and cultural maturity
        if (practicalLevel === 1 && culturalLevel === 1) {
            return "The assessment reveals fundamental challenges in both practical and cultural dimensions of your distributed work capability. Your team likely experiences compounding inefficiencies where insufficient digital infrastructure and fragile trust dynamics mutually reinforce each other. This creates measurable impacts on both work quality and team engagement. The data indicates a need for structured intervention addressing both dimensions simultaneously, focusing first on establishing clear communication protocols with defined psychological safety mechanisms before expanding to more complex systems.";
        } else if (practicalLevel <= 2 && culturalLevel <= 2) {
            return "Your assessment results indicate emerging but inconsistent distributed work capabilities across both practical and cultural dimensions. The data suggests your team has established basic foundations but experiences periodic breakdowns in both work processes and interpersonal dynamics. This creates an unstable operating environment where progress in one dimension can be undermined by deficiencies in the other. Without structured intervention, your team risks plateauing at this level of maturity, unable to realize the full performance potential of distributed work configurations.";
        } else if (practicalLevel >= 3 && culturalLevel >= 3) {
            return "The assessment indicates substantial maturity across both practical and cultural dimensions of distributed work. This balanced capability profile creates a functioning ecosystem where technical infrastructure and human dynamics are mutually reinforcing. However, this should not be interpreted as grounds for complacency. Maintaining this level requires continuous refinement, particularly as team composition changes and work requirements evolve. Your strategic focus should be on systematizing what works well while implementing structured experimentation to address remaining friction points.";
        } else if (practicalLevel >= 3 && culturalLevel <= 2) {
            return "The assessment reveals a significant imbalance in your distributed work capabilities: strong practical infrastructure paired with underdeveloped cultural practices. This creates a mechanistically efficient but potentially disengaging environment where work gets done but team sustainability is at risk. The data suggests your digital tools and processes may mask underlying trust and inclusion challenges that will likely manifest as retention issues, diminished psychological safety, and reduced innovation over time. Without deliberate intervention, this imbalance risks entrenchment.";
        } else if (practicalLevel <= 2 && culturalLevel >= 3) {
            return "Your assessment results indicate an unusual maturity profile: strong cultural foundations for distributed work paired with underdeveloped practical systems. This creates a connected but inefficient environment where team members likely experience strong interpersonal bonds but substantial workflow friction. While your cultural strength is a significant asset, it may be masking the performance impact of suboptimal tools and processes. Without systematic attention to your digital infrastructure, engagement may erode as process friction continues to generate unnecessary cognitive load.";
        } else {
            return "The assessment data reveals an uneven maturity profile with specific strengths and defined capability gaps across practical and cultural dimensions. This creates operational inconsistency that likely manifests as situational effectiveness—performing well in some distributed work scenarios while struggling in others. Without targeted intervention to address the identified gaps, your team risks developing compensatory behaviors that mask rather than resolve underlying capability deficits, potentially creating technical debt and cultural fatigue over time.";
        }
    }

    // Render the survey
    $("#surveyElement").Survey({model: survey});
});