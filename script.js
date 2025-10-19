// যখন HTML ডকুমেন্ট লোড হওয়া শেষ হবে তখন এই কোড চলবে
document.addEventListener("DOMContentLoaded", function() {
    
    // টেলিগ্রাম ওয়েব অ্যাপ অবজেক্ট অ্যাক্সেস করা
    const tg = window.Telegram.WebApp;

    // অ্যাপটিকে এক্সপান্ড করার চেষ্টা (যাতে ফুলস্ক্রিন দেখায়)
    tg.expand();
    
    // initDataUnsafe থেকে ব্যবহারকারীর তথ্য নেওয়া
    // এটি শুধু তথ্য দেখানোর জন্য নিরাপদ
    const user = tg.initDataUnsafe.user;

    if (user) {
        // ব্যবহারকারীর তথ্য পাওয়া গেলে
        
        // ১. নাম সেট করা
        const userNameElement = document.querySelector('.user-name');
        if (userNameElement) {
            // পুরো নাম (Firstname Lastname) সেট করা
            userNameElement.textContent = `${user.first_name} ${user.last_name || ''}`;
        }

        // ২. প্রোফাইল ছবি সেট করা
        const profilePicElement = document.querySelector('.profile-pic');
        if (profilePicElement && user.photo_url) {
            // যদি ব্যবহারকারীর প্রোফাইল ছবি থাকে
            profilePicElement.src = user.photo_url;
        } else if (profilePicElement) {
            // যদি ছবি না থাকে, একটি ডিফল্ট ছবি দেখানো
            profilePicElement.src = "https://via.placeholder.com/50/ffffff/000000?text=" + user.first_name[0];
        }
        
    } else {
        // যদি কোনো কারণে তথ্য না পাওয়া যায় (যেমন, ব্রাউজারে টেস্ট করলে)
        const userNameElement = document.querySelector('.user-name');
        if (userNameElement) {
            userNameElement.textContent = "Guest User";
        }
        console.log("Telegram user data not found.");
    }
});
