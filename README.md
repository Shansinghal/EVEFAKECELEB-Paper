# EveFakeCeleb 🔍⚡

> **High-Temporal-Resolution Event and RGB Paired Dataset for Robust DeepFake Detection in Real-World Scenarios**

Official landing page and website repository for the **EveFakeCeleb** deep learning research project. Published by Thapar Institute of Engineering and Technology, Patiala, Punjab, India.

---

## 💡 Overview

**EveFakeCeleb** is a pioneering neuromorphic deepfake detection dataset that pairs high-speed asynchronous event streams with traditional RGB video. By capturing microsecond-level motion cues (such as eye blinks, lip sync anomalies, and micro-expressions), it enables the training of highly robust deepfake detectors capable of resisting advanced digital tampering.

### Key Metrics
* **Real Videos:** 408 authentic clips from Celeb-DF.
* **Fake Videos:** 795 high-fidelity deepfake face-swaps.
* **Temporal Precision:** Microsecond-scale resolution (~0.001 seconds) emulated via V2E (Video-to-Event) simulation.

---

## 📂 Repository Structure

```bash
├── index.html     # Main static landing page containing all page sections
├── style.css      # Premium dark-themed stylesheet with custom scrollbars and animations
├── script.js      # Interactive features (smooth scrolling, scroll-fade animations, mobile menu)
├── logo.png       # Official Thapar Institute of Engineering & Technology logo
└── serve.py       # Development server with disabled caching for instant updates
```

---

## 🛠️ Local Development

To run the landing page locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/Shansinghal/EVEFAKECELEB-Paper.git
   cd EVEFAKECELEB-Paper
   ```

2. Run the development server (no-cache mode):
   ```bash
   python serve.py
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:8080
   ```

---

## 🚀 Deployment on Render

This repository is optimized for quick hosting on **Render** as a **Static Site**:

### Option A: Automatic Build (Recommended)
By default, Render looks for a `build` directory. We have provided a `package.json` that automates this. 
When creating your **Static Site** on Render:
* **Build Command:** `npm run build` (Render will run this automatically)
* **Publish Directory:** `build` (Render will serve files from here)

### Option B: Zero-Build Configuration
If you prefer not to run any build steps:
* **Build Command:** *Leave empty*
* **Publish Directory:** `.` (Change this from `build` to `.` to serve directly from the root)

---

## 👥 Authors

* **Dr. Mansi Sharma** (Principal Investigator) - Assistant Professor - III, Thapar Institute of Engineering and Technology
* **Shantanu Singhal** (Lead Researcher) - Computer Engineering Undergrad, Thapar Institute of Engineering and Technology

---

*&copy; 2025 EveFakeCeleb. All rights reserved.*

