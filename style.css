/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body, html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
}

/* Particles background */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Body content */
body {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    background: #0d0d0d;
}

/* Header */
header {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInDown 1s ease forwards;
}

header h1 {
    font-size: 3em;
    margin-bottom: 10px;
    color: #ff3d00;
}

header p {
    font-size: 1.2em;
    color: #ccc;
}

/* Card container */
.card-container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
}

/* Cards */
.card {
    background: rgba(20,20,20,0.85);
    padding: 30px;
    border-radius: 20px;
    width: 280px;
    text-align: center;
    transition: transform 0.5s, box-shadow 0.5s;
    cursor: pointer;
    animation: fadeInUp 1s ease forwards;
    position: relative;
    overflow: hidden;
}

.card img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    transition: transform 0.5s;
    border-radius: 15px;
}

.card h2 {
    margin-bottom: 10px;
}

.card p {
    color: #aaa;
    font-size: 0.95em;
}

/* Hover effects */
.card:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 40px rgba(255, 61, 0, 0.6);
}

.card:hover img {
    transform: rotate(15deg) scale(1.1);
}

.btn {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 25px;
    background: #ff3d00;
    color: #fff;
    border-radius: 12px;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s;
}

.btn:hover {
    background: #ff5722;
    transform: scale(1.05);
}

/* Animations */
@keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-30px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Floating particles on cards */
.card::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,61,0,0.15) 0%, transparent 70%);
    top: -50%;
    left: -50%;
    transform: rotate(0deg);
    animation: rotateGlow 6s linear infinite;
}

@keyframes rotateGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 700px) {
    .card-container {
        flex-direction: column;
        gap: 20px;
    }
}
