# Comprehensive Project Documentation Generation Prompt

## Task Overview
You are an expert AI programming assistant tasked with generating comprehensive project documentation for a software development project. The documentation must follow the structure and format of a provided guideline document, adapted to the specific project context. The output should be a detailed Markdown (.md) file that serves as a complete project report suitable for academic submission or professional presentation.

## Input Materials
You will have access to the following resources:

### 1. Guideline Document
- **File:** `guide.txt` (located in the project root)
- **Content:** This file contains the template structure for project documentation, divided into chapters (4-7) with specific sections, explanations, and requirements for images/diagrams.
- **Purpose:** Use this as the structural framework for your documentation. Each chapter has specific requirements that must be adapted to the current project.

### 2. Sample Documentation
- **File:** `Chapter 3,4,5,6 Analysis,design n impleme.pdf` (located in the project root)
- **Content:** This PDF provides a concrete example of how the guideline should be implemented, including:
  - Detailed chapter breakdowns (System Analysis, Design, Implementation, Conclusion)
  - Specific content examples (feasibility studies, database designs, testing results)
  - Technical details (technologies used, cost estimates, diagrams)
- **Purpose:** Use this as a reference for depth, detail level, and formatting style.

### 3. Project Context
- **Project Name:** AdSense Clone (Kenyan Advertising Platform)
- **Technology Stack:** Laravel 13, React 19, MySQL 8.0, Tailwind CSS, etc. (analyze from package.json, composer.json, and code files)
- **Location:** Kenya (all values, costs, and references must be Kenya-specific)
- **Academic Context:** School project, so include educational elements and references
- **Current Date:** April 24, 2026

### 4. Available Tools
You have access to the same tools I used:
- `read_file`: To examine source code, configuration files, and documentation
- `list_dir`: To explore project structure
- `grep_search`: To find specific code patterns or references
- `file_search`: To locate files by pattern
- `run_in_terminal`: To execute commands (e.g., extract PDF text if needed)
- `create_file`: To generate the final MD documentation file

## Step-by-Step Execution Instructions

### Step 1: Project Analysis (30 minutes)
1. **Explore Project Structure:**
   - Use `list_dir` to examine the root directory and key folders (app/, resources/, database/, etc.)
   - Identify main components: Models, Controllers, Routes, Views, Tests

2. **Analyze Technology Stack:**
   - Read `package.json` and `composer.json` to understand dependencies and scripts
   - Examine key files: `app/Models/User.php`, `routes/web.php`, `vite.config.ts`
   - Identify core features: user roles (admin, advertiser, publisher), campaigns, sites, billing

3. **Understand Business Logic:**
   - Read model files to understand entities: User, Company, Campaign, Site, AdUnit, Interaction
   - Analyze routes to understand user workflows and permissions
   - Identify key business processes: campaign creation, ad serving, billing, payouts

4. **Extract Project-Specific Details:**
   - Determine user roles and their capabilities
   - Identify main features and workflows
   - Note any unique aspects (e.g., Kenyan market focus, payment methods)

### Step 2: Content Planning (45 minutes)
1. **Map Guideline to Project:**
   - Chapter 4 (System Analysis): Adapt current system problems to Kenyan advertising market
   - Chapter 5 (System Design): Map to Laravel/React architecture, database schema
   - Chapter 6 (System Implementation): Detail Laravel/React development, testing
   - Chapter 7 (Conclusion): Project outcomes, lessons learned

2. **Adapt Sample Content:**
   - Use the PDF's structure but replace content with AdSense Clone specifics
   - Maintain similar depth and detail level
   - Update costs to KES, references to Kenyan laws/regulations

3. **Kenya-Specific Customization:**
   - **Currency:** All monetary values in KES (Kenyan Shillings)
   - **Regulations:** Reference Kenya Data Protection Act (KDPA), Communications Authority of Kenya (CAK)
   - **Payment Methods:** M-Pesa, bank transfers, Airtel Money
   - **Market Context:** Kenyan SMEs, digital advertising landscape
   - **Costs:** Realistic for Kenyan market (e.g., development costs, server hosting)

4. **Academic Elements:**
   - Include references to authoritative sources
   - Add appendices with detailed breakdowns
   - Include user personas relevant to Kenyan context

### Step 3: Documentation Generation (2 hours)

#### Chapter 1: Executive Summary
- Write a compelling overview of the AdSense Clone project
- Include project background, objectives, expected outcomes
- Highlight Kenya-specific value proposition

#### Chapter 2: Project Overview
- Detail scope, boundaries, constraints, stakeholders
- Include project timeline, team structure, success criteria

#### Chapter 3: System Analysis
- **Current System Findings:** Problems with existing Kenyan advertising (Google AdSense barriers, manual processes)
- **Proposed Solutions:** Compare options, justify "build own" decision
- **Feasibility Study:** Technical (Laravel/React stack), Social (benefits to Kenyan users), Economic (cost-benefit with KES figures)
- **SRS:** Functional requirements (user auth, campaigns, billing), non-functional (performance, security)

#### Chapter 4: System Design
- **Portal Architecture:** Describe Laravel/React architecture with diagrams
- **Information Architecture:** User role-based navigation and channels
- **Behavioral Modeling:** Use cases for advertiser, publisher, admin workflows
- **Data Flow Diagrams:** Context diagram, level 1 DFDs for key processes
- **Database Design:** ER diagram, logical design with table schemas

#### Chapter 5: System Implementation
- **Implementation Overview:** Development phases, coordination
- **Database Implementation:** MySQL setup, migration scripts
- **Interface Implementation:** React components, UI design principles
- **Development Tools:** Laravel, React, MySQL, testing frameworks
- **Testing Strategy:** Unit, integration, UAT approaches

#### Chapter 6: System Testing & Deployment
- **Testing Results:** Functional, performance, security test outcomes
- **Role-Based Security:** Verification of access controls
- **Deployment Plan:** Phased rollout, rollback procedures

#### Chapter 7: Conclusion & Recommendations
- **Project Conclusion:** Objectives met, outcomes achieved
- **Weaknesses & Recommendations:** Identified gaps, improvement suggestions
- **Lessons Learned:** Technical and project management insights
- **Future Phases:** Roadmap for expansion

#### Additional Sections
- **References & Bibliography:** Academic and technical sources
- **Appendices:** Cost breakdowns, user personas, configuration files, compliance checklists

### Step 4: Technical Implementation (1 hour)

1. **Diagram Handling:**
   - For sections requiring diagrams, use markdown placeholders like:
     ```
     **[DIAGRAM NEEDED: Description of required diagram]**
     ```
   - Include detailed descriptions so diagrams can be created later

2. **Code Examples:**
   - Include actual code snippets from the project (e.g., model definitions, migration scripts)
   - Use proper syntax highlighting in markdown

3. **Table Formatting:**
   - Use markdown tables for comparisons, cost breakdowns, specifications
   - Ensure tables are readable and well-formatted

4. **References:**
   - Include 10-15 authoritative references
   - Cite Kenyan laws, international standards, technical documentation

### Step 5: Quality Assurance (30 minutes)

1. **Content Validation:**
   - Ensure all guideline sections are covered
   - Verify Kenya-specific adaptations
   - Check technical accuracy against actual codebase

2. **Formatting:**
   - Use proper markdown syntax
   - Include table of contents
   - Add section headers and numbering

3. **Completeness:**
   - Verify all required elements are present
   - Check for logical flow between sections

### Step 6: Final Output

1. **File Creation:**
   - Use `create_file` tool to generate `PROJECT_DOCUMENTATION.md`
   - Ensure the file is comprehensive (10,000+ lines expected)

2. **File Structure:**
   ```
   # Project Title
   ## Table of Contents
   ## Chapter 1: Executive Summary
   ... (all chapters)
   ## References & Bibliography
   ## Appendices
   ```

## Specific Requirements

### Kenya Context Requirements
- **Currency:** KES (e.g., "KES 450,000" not "USD 3,500")
- **Regulations:** KDPA, CAK, CBK references
- **Market:** SME focus, digital advertising challenges in Kenya
- **Technology:** Realistic for Kenyan development context
- **Costs:** Server hosting, development salaries appropriate for Nairobi market

### Technical Accuracy
- **Framework Versions:** Laravel 13, React 19 (from package.json)
- **Database:** MySQL 8.0+ with specific schema from models
- **Features:** Based on actual routes and models (campaigns, sites, billing)
- **Security:** Include 2FA, fraud detection, compliance measures

### Academic Standards
- **References:** Minimum 12 sources, properly cited
- **Appendices:** Include practical examples (Docker configs, env files)
- **Professional Tone:** Suitable for school project submission

## Expected Output Characteristics

### Length and Depth
- **Total Length:** 12,000-15,000 lines
- **Chapters:** 7 complete chapters + appendices
- **Detail Level:** Equivalent to the sample PDF in depth
- **Technical Content:** Code examples, configuration files, database schemas

### Quality Metrics
- **Completeness:** All guideline sections addressed
- **Accuracy:** Technically correct based on codebase analysis
- **Relevance:** Tailored to Kenyan market and project specifics
- **Readability:** Clear structure, professional formatting

## Final Deliverable
Generate a single comprehensive Markdown file that serves as the complete project documentation, ready for academic submission or professional use. The documentation should demonstrate deep understanding of both the technical implementation and the business context, while following the established guideline structure.</content>
<parameter name="filePath">/home/mwaura/Desktop/Projects/School/adsense-clone/COMPREHENSIVE_DOCUMENTATION_PROMPT.md
