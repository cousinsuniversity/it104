const questions = [
    { q: "Which Industrial Revolution introduced mass production via electricity?", a: "Industry 2.0", o: ["Industry 1.0", "Industry 2.0", "Industry 3.0", "Industry 4.0"] },
    { q: "What is the primary driver of Industry 4.0?", a: "Cyber-Physical Systems", o: ["Steam Engines", "Electricity", "Manual Labor", "Cyber-Physical Systems"] },
    { q: "Which term describes devices communicating without human intervention?", a: "M2M (Machine-to-Machine)", o: ["Human-Computer Interaction", "M2M (Machine-to-Machine)", "Manual Syncing", "Legacy Processing"] },
    { q: "In the context of Industry 4.0, what does IoT stand for?", a: "Internet of Things", o: ["Internal Online Tool", "Internet of Things", "Integrated Optical Tech", "Information of Technology"] },
    { q: "Which technology uses a distributed ledger to ensure data integrity?", a: "Blockchain", o: ["Cloud Computing", "Blockchain", "Edge Computing", "Big Data"] },
    { q: "The 'Big Data' pillar focuses on what three Vs?", a: "Volume, Velocity, Variety", o: ["Validity, Value, Verity", "Volume, Velocity, Variety", "Virtual, Visual, Vital", "Vast, Voice, Vector"] },
    { q: "Which tech allows users to see digital overlays on the physical world?", a: "Augmented Reality", o: ["Virtual Reality", "Augmented Reality", "Mixed Reality", "Deep Learning"] },
    { q: "What is the main goal of Cloud Computing in Industry 4.0?", a: "On-demand availability of data and computing power", o: ["Local storage of files", "On-demand availability of data and computing power", "Physical server maintenance", "Manual backups"] },
    { q: "Which concept refers to processing data near the source of data generation?", a: "Edge Computing", o: ["Centralized Computing", "Edge Computing", "Quantum Computing", "Batch Processing"] },
    { q: "Autonomous Robots in Industry 4.0 are primarily used for:", a: "Increasing efficiency and safety", o: ["Replacing all human contact", "Increasing efficiency and safety", "Reducing internet usage", "Physical documentation"] },
    { q: "What does SDLC stand for?", a: "Software Development Life Cycle", o: ["System Design Logic Center", "Software Development Life Cycle", "Standard Data Loop Cycle", "Systematic Device Link Connection"] },
    { q: "Which SDLC phase involves gathering user requirements (D1)?", a: "Analysis", o: ["Planning", "Analysis", "Design", "Testing"] },
    { q: "In the Waterfall model, can you easily go back to a previous stage?", a: "No", o: ["Yes", "No", "Only during weekends", "It depends on the language"] },
    { q: "Which model is highly iterative and focuses on rapid delivery?", a: "Agile", o: ["Waterfall", "Agile", "V-Model", "Big Bang"] },
    { q: "What is the primary output of the 'Design' phase (D2)?", a: "System Architecture & Blueprints", o: ["Executable Code", "System Architecture & Blueprints", "User Manual", "Final Report"] },
    { q: "The 'Implementation' phase is where what occurs?", a: "Coding", o: ["Marketing", "Coding", "Goal Setting", "Archiving"] },
    { q: "Which testing ensures individual components work separately?", a: "Unit Testing", o: ["Integration Testing", "Unit Testing", "System Testing", "User Acceptance Testing"] },
    { q: "UAT stands for:", a: "User Acceptance Testing", o: ["Universal Application Tool", "User Acceptance Testing", "Unified Access Terminal", "Unit Alpha Testing"] },
    { q: "The 'Maintenance' phase starts after:", a: "Deployment", o: ["Coding", "Design", "Deployment", "Requirement Gathering"] },
    { q: "The V-Model emphasizes the relationship between:", a: "Development phases and testing phases", o: ["Logic and Art", "Development phases and testing phases", "HTML and CSS", "Users and Robots"] },
    { q: "A 'Native' app for iOS is typically written in:", a: "Swift", o: ["Java", "Swift", "C#", "HTML"] },
    { q: "What is a 'Cross-Platform' framework example?", a: "Flutter", o: ["Swift", "Flutter", "Kotlin", "Objective-C"] },
    { q: "Which of these is a benefit of Multiplatform development?", a: "Single codebase for multiple OS", o: ["Highest possible performance", "Single codebase for multiple OS", "Direct access to all kernel features", "Lowest RAM usage"] },
    { q: "Progressive Web Apps (PWAs) are primarily built using:", a: "Web technologies (HTML/CSS/JS)", o: ["Swift", "C++", "Web technologies (HTML/CSS/JS)", "Python"] },
    { q: "Hybrid apps use which component to display the UI?", a: "WebView", o: ["Native Canvas", "WebView", "DirectX", "Metal API"] },
    { q: "React Native is developed by:", a: "Meta (Facebook)", o: ["Google", "Apple", "Meta (Facebook)", "Microsoft"] },
    { q: "Flutter uses which programming language?", a: "Dart", o: ["Java", "Dart", "Python", "JavaScript"] },
    { q: "What does 'Responsive Design' mean?", a: "The layout adapts to different screen sizes", o: ["The app responds to voice commands", "The layout adapts to different screen sizes", "The app loads in under 1 second", "The app is written in React"] },
    { q: "A 'Design Document' (D2) usually contains:", a: "Wireframes and Flowcharts", o: ["Binary code", "Wireframes and Flowcharts", "CEO's biography", "Hardware receipts"] },
    { q: "Which approach is best for a high-performance 3D game?", a: "Native", o: ["Native", "PWA", "Hybrid", "Web-only"] },
    { q: "In MVC, what does the 'Model' represent?", a: "Data and Logic", o: ["User Interface", "Data and Logic", "Navigation Menu", "Input Listener"] },
    { q: "In MVC, the 'View' is responsible for:", a: "Displaying data to the user", o: ["Calculating math", "Displaying data to the user", "Storing passwords", "Managing API calls"] },
    { q: "Which pattern ensures only one instance of a class exists?", a: "Singleton", o: ["Factory", "Observer", "Singleton", "Adapter"] },
    { q: "A 'Technical Design' (D3) focuses on:", a: "Implementation details and APIs", o: ["Color theory", "Marketing fonts", "Implementation details and APIs", "Staff payroll"] },
    { q: "What is the 'Controller's' role in MVC?", a: "Handling user input and updating the model", o: ["Storing images", "Handling user input and updating the model", "Defining CSS styles", "Running SQL queries"] },
    { q: "The 'Observer' pattern is commonly used for:", a: "Event handling and notifications", o: ["Saving files", "Event handling and notifications", "Compressing images", "Sorting arrays"] },
    { q: "Differentiate: A Web App vs. a Native App. A Web App runs in:", a: "A Browser", o: ["The OS directly", "A Browser", "The BIOS", "A Terminal only"] },
    { q: "Which design pattern is used to create objects without specifying the exact class?", a: "Factory", o: ["Factory", "Singleton", "Decorator", "MVC"] },
    { q: "Prototype v2 (D5) is usually created after:", a: "User feedback on v1", o: ["The project is finished", "User feedback on v1", "Deleting the original code", "Hiring a new team"] },
    { q: "What is 'Separation of Concerns'?", a: "Dividing a program into distinct sections with specific roles", o: ["Keeping code in one single file", "Dividing a program into distinct sections with specific roles", "Worrying about security", "Moving code to the cloud"] },
    { q: "What does 'CRUD' stand for?", a: "Create, Read, Update, Delete", o: ["Compile, Run, Update, Deploy", "Create, Read, Update, Delete", "Copy, Rename, Undo, Download", "Control, Remote, User, Data"] },
    { q: "An API acts as a ________ between two software systems.", a: "Bridge/Messenger", o: ["Firewall", "Bridge/Messenger", "Monitor", "Database"] },
    { q: "REST stands for:", a: "Representational State Transfer", o: ["Remote System Tool", "Representational State Transfer", "Real-time Encryption Standard", "Random Entry Storage Tech"] },
    { q: "What is the common format for API data exchange?", a: "JSON", o: ["MP3", "JSON", "PNG", "EXE"] },
    { q: "What does a 404 Status Code mean?", a: "Not Found", o: ["Success", "Forbidden", "Not Found", "Internal Server Error"] },
    { q: "What does a 200 Status Code mean?", a: "OK/Success", o: ["OK/Success", "Created", "Redirect", "Bad Request"] },
    { q: "API Authentication is often handled using:", a: "API Keys or Tokens", o: ["Physical signatures", "API Keys or Tokens", "Desktop icons", "Monitor brightness"] },
    { q: "Which HTTP method is used to 'Create' a new resource?", a: "POST", o: ["GET", "POST", "DELETE", "PATCH"] },
    { q: "Which HTTP method is used to 'Read' or fetch data?", a: "GET", o: ["GET", "POST", "PUT", "HEAD"] },
    { q: "System Architecture (D3) defines:", a: "The structure and interaction of system components", o: ["The font size of the app", "The structure and interaction of system components", "The office building design", "The color of the server"] }
];

const quizContainer = document.getElementById('quizContainer');
const progressBar = document.getElementById('progressBar');
const submitBtn = document.getElementById('submitBtn');

// Render Questions
function initQuiz() {
    questions.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md";
        
        const optionsHtml = data.o.map(opt => `
            <label class="group flex items-center p-4 rounded-2xl border-2 border-slate-100 cursor-pointer transition-all hover:border-blue-400 hover:bg-blue-50">
                <input type="radio" name="q${index}" value="${opt}" class="hidden" onchange="updateProgress()">
                <div class="w-6 h-6 rounded-full border-2 border-slate-300 mr-4 flex items-center justify-center group-has-[:checked]:border-blue-600 group-has-[:checked]:bg-blue-600 transition-all">
                    <div class="w-2 h-2 rounded-full bg-white opacity-0 group-has-[:checked]:opacity-100"></div>
                </div>
                <span class="text-slate-700 font-semibold group-has-[:checked]:text-blue-700">${opt}</span>
            </label>
        `).join('');

        card.innerHTML = `
            <div class="flex items-start mb-6">
                <span class="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 shrink-0 mt-1">${index + 1}</span>
                <h3 class="text-xl font-bold text-slate-800 leading-snug">${data.q}</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${optionsHtml}
            </div>
        `;
        quizContainer.appendChild(card);
    });
}

function updateProgress() {
    const answered = document.querySelectorAll('input[type="radio"]:checked').length;
    const percentage = (answered / questions.length) * 100;
    progressBar.style.width = `${percentage}%`;
}

submitBtn.onclick = () => {
    let score = 0;
    questions.forEach((data, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === data.a) score++;
    });

    document.getElementById('finalScore').innerText = `${score}/50`;
    const feedback = document.getElementById('feedbackText');
    
    if (score >= 45) feedback.innerText = "Exceptional! You've successfully analyzed the emerging technologies and frameworks of Module 1.";
    else if (score >= 35) feedback.innerText = "Solid understanding. You have a clear grasp of Industry 4.0 and SDLC models.";
    else feedback.innerText = "Keep reviewing. Focus on the differences between multiplatform frameworks and design patterns.";

    document.getElementById('resultModal').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

initQuiz();
