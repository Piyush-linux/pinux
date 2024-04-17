let pass = ["Congratulations on your success! Your knowledge is impressive!", "Great job on acing it! Your expertise shines through!", "Well done on your success! Your dedication to learning is inspiring.", "Fantastic job! Your mastery of the subject is evident.", "Bravo on acing it! Your skills are a valuable asset.", "Impressive work! Your understanding is impressive.", "Congratulations! Your hard work has paid off.", "Congratulations! Your knowledge is a testament to your commitment.", "Great job! Your expertise is remarkable.", "Superb performance! Your dedication to learning is evident."]
let fail = ["Don't worry about it! It's a great opportunity to learn and improve.", "You'll get it next time! Keep up the good work.", "Failing is just a stepping stone to success. Keep pushing forward!", "Everyone has off days. You've got this!", "It's okay to stumble. What matters is how you pick yourself up.", "Failure is a part of the learning process. Keep going!", "Failing doesn't define you. Keep striving for improvement.", "Don't be discouraged by this setback. You're capable of great things.", "Failing is a chance to learn from mistakes. Keep pushing forward.", "This is just a temporary setback. Your determination will lead you to success."]

export default {
    load() {
        return {
            data: [pass,fail]
        }
    }
}