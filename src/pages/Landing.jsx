import React from 'react'
import "../assets/styles/landing/landing.css"

function Landing() {
  return (
    <><main>
    <section class="hero">
        <h1>Welcome to Kanairo Hustlers</h1>
        <p>We are a team of innovators and entrepreneurs dedicated to making a difference.</p>
        <button>Learn More</button>
    </section>
    <section class="features">
        <h2>Our Features</h2>
        <ul>
            <li>
                <i class="fas fa-lightbulb"></i>
                <h3>Innovative Solutions</h3>
                <p>We provide innovative solutions to complex problems.</p>
            </li>
            <li>
                <i class="fas fa-rocket"></i>
                <h3>Entrepreneurial Spirit</h3>
                <p>We have an entrepreneurial spirit that drives us to succeed.</p>
            </li>
            <li>
                <i class="fas fa-team"></i>
                <h3>Collaborative Team</h3>
                <p>We are a collaborative team that works together to achieve greatness.</p>
            </li>
        </ul>
    </section>
    <section class="call-to-action">
        <h2>Get Started Today!</h2>
        <p>Join our community of innovators and entrepreneurs today.</p>
        <button>Sign Up</button>
    </section>
</main></> 
  );
}

export default Landing