const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/ask", (req, res) => {
    const question = req.body.question;

    if (!question) {
        return res.status(400).json({
            error: "Question missing"
        });
    }
if (question.startsWith("Short Notes:")) {

    const topic =
        question.replace("Short Notes:", "").trim().toLowerCase();

    if (topic.includes("newton")) {

        return res.json({
            answer:
                `📝 Newton's Laws — Quick Notes\n\n` +

                `🔹 First Law — Law of Inertia\n` +
                `• वस्तु अपनी अवस्था बनाए रखती है जब तक external net force न लगे।\n` +
                `• Net force = 0 होने पर acceleration = 0 होता है।\n\n` +

                `🔹 Second Law\n` +
                `• Force वस्तु के mass और acceleration से संबंधित है।\n` +
                `• Formula: F = m × a\n` +
                `• Force बढ़ने पर, समान mass के लिए acceleration बढ़ता है।\n\n` +

                `🔹 Third Law\n` +
                `• हर action के साथ equal and opposite reaction होता है।\n` +
                `• Action और reaction अलग-अलग objects पर लगते हैं।\n\n` +

                `🎯 Exam Tip\n` +
                `तीनों laws के मुख्य points और F = ma को अच्छे से revise करो।`
        });

    } else {

        return res.json({
            answer:
                `📝 ${topic} — Quick Notes\n\n` +
                `🔹 Definition:\n` +
                `${topic} का basic concept समझो।\n\n` +
                `🔹 Important Points:\n` +
                `• Main concept याद रखो\n` +
                `• Important terms identify करो\n` +
                `• Examples से concept समझो\n\n` +
                `🎯 Exam Tip:\n` +
                `${topic} के important points revise करो।`
        });
    }
} 
    if (question.startsWith("Generate MCQs:")) {
    const topic = question.replace("Generate MCQs:", "").trim();

    return res.json({
        quiz: [
            {
                question: `${topic} से संबंधित कौन-सा statement सही है?`,
                options: [
                    "A) हमेशा zero होता है",
                    "B) Net force acceleration उत्पन्न कर सकता है",
                    "C) Mass का कोई effect नहीं होता",
                    "D) Velocity हमेशा constant रहती है"
                ],
                answer: "B"
            },
            {
                question: `${topic} में net force zero होने पर वस्तु:`,
                options: [
                    "A) हमेशा रुक जाएगी",
                    "B) हमेशा accelerate करेगी",
                    "C) rest में या constant velocity से चल सकती है",
                    "D) circular motion करेगी"
                ],
                answer: "C"
            },
            {
                question: `${topic} में acceleration किससे संबंधित है?`,
                options: [
                    "A) Net force और mass",
                    "B) केवल velocity",
                    "C) केवल distance",
                    "D) केवल time"
                ],
                answer: "A"
            },
            {
                question: `यदि net force बढ़े, तो acceleration:`,
                options: [
                    "A) बढ़ सकता है",
                    "B) हमेशा zero होगा",
                    "C) हमेशा घटेगा",
                    "D) mass के बराबर होगा"
                ],
                answer: "A"
            },
            {
                question: `${topic} को समझने के लिए सबसे महत्वपूर्ण concept कौन-सा है?`,
                options: [
                    "A) Force और acceleration का संबंध",
                    "B) केवल temperature",
                    "C) केवल pressure",
                    "D) केवल density"
                ],
                answer: "A"
            }
        ]
    });
}
    res.json({
        answer:
            "🤖 StudyBuddy Demo AI\n\n" +
            "Tumhara question:\n" +
            question +
            "\n\n" +
            "✅ Backend connected successfully!\n" +
            "Real AI baad mein connect ki ja sakti hai."
    });
});

app.listen(PORT, () => {
    console.log(`🚀 StudyBuddy running at http://localhost:${PORT}`);
});
