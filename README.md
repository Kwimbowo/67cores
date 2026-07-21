# CSARCH2 Case Study: "Multicore Processors: Keeping It Cool"

## Table of Contents
- [Group's Title](#groups-title)
- [Group Roster](#group-roster)
- [Group's Topic Theme](#groups-topic-theme)
- [Category](#category)
- [Development Documentation](#development-documentation)
    - [Conceptualization](#conceptualization)
    - [Implementation](#implementation)
    - [What We Learned](#what-we-learned)
- [Generative AI Use Disclosure](#generative-ai-use-disclosure)
- [Tech Stack Plan](#tech-stack-plan)
    - [Problem Solving Story](#problem-solving-story)
    - [Interactive Element](#interactive-element)
- [Tentative Style Guide Plan](#tentative-style-guide-plan)
- [References](#references)

## Group's Title
-  Multicore Processors: Keeping It Cool

## Group Roster:
- Byron Scott Ang
- Stephen Jakobb Claro
- Paul John Placer
- Kimberly Wynelle Sotingco
- John Lorens Tee

## Group's Topic Theme  
- The Invention of Multiprocessors to solve the Power Wall problem

## Category
- Problem Solving Stories (S03)

## Development Documentation
### Conceptualization
There are many problem-solving stories to choose from in the entire history of computer architecture, but the struggle for our group lied in conceptualizing what the interactive component would be. We decided on a story relevant even to the technology we use today, and eventually ended up with a story that could easily be visualized in a webpage: the Power Wall problem of CPU computation speed (and the shift to multicore computing).

To expound on this problem and the story on how it was solved, we decided to explain the trends of microprocessors for the past few decades, showing how the performance, clock speed, and power disspiation for single-core processors increased through the years, and highlighting the point (sometime in 2005) where processors hit a bottleneck for increasing single-core performance because of the increase in power disspiation, which started the trend of multicore processors and increasing the number of logical cores instead of solely focusing on single-core performance. We also decided to expound on the technology of the multicore CPU along with its history, and gave a simplified explanation of how multicore CPUs are faster and more efficient than single-core ones through an analogy (chefs in a restaurant).

To help with visualizing all these information, we decided to add a graph to explain the trends of microprocessors, images to show how the appearance of processors changed throughout the years, and another interactive component for calculating and visualizing CPU power dissipation.

### Implementation
Given the exhibit template, the actual implementation of the exhibit webpage was fairly straightforward; the interactive component was programmed with React, and the text contents of the page were simply typed out in Markdown because the template handled the structure of the webpage and allowed for writing it in a ```.mdx``` file. For the mid-milestone, we have managed to finish implementing the interactive component and most, if not all of the contents of the exhibit; the webpage is more or less ready for deployment.

For the final submission, the webpage's visual design and styles were completely overhauled. Additional information and visual aids were implemented for the Problem Solving Story and on the discussion of multicore CPUs. For the latter topic, a new interactive component was also implemented in React. 

### What we learned
From the problem-solving story our group chose, we learned about how computers mostly only had single-core CPUs back then and how slow they were at multitasking relative to their performance in individual applications compared to the computers we have today, and from this we gained appreciation for the multicore technology that is in all the devices we use today but taken for granted, as well as for the people who pioneered this technology. We also learned from the story about the power wall problem that limited the max single-core frequency of CPUs, for which multicore technology was a workaround to keep increasing CPU performance without having to focus on single-core frequency.

## Generative AI Use Disclosure
During the preparation of this exhibit webpage, the group used the following generative AI tools and/or services:
- [**Gemini**](https://gemini.google.com/) was used to streamline learning programming in React for the interactive component in this project, as well as for recommendations on making the code written by the authors cleaner, more readable, and more efficient.

After using this tool/service, the authors reviewed and edited the content as needed and take full responsibility for the content of the publication.

## Tech Stack Plan
### Problem Solving Story
- Users will be greeted with a brief introduction to the invention of Multicore Processors.
    - In the past, computer processors were mainly single-core. This meant computer programs ran linearly and never spontaneously. However, sometime in 2005, CPU chip companies started experimenting with multicore CPUs, increasing chip productivity exponentially. This led to the release of the dual-core processor, a rather obsolete architecture compared to the quad- or octa-core processors we commonly use today.

### Interactive Element
- a. Users are given a set of computational tasks and must process them by adjusting CPU parameters, i.e., currently active cores, clock speed, voltage, and cooling.

    - **Active Cores** - Users are free to adjust the number of cores being utilized by the processor. While more cores give increased efficiency, they also increase power consumption and heat output.
    - **Cooling** - Users will be limited by the amount of “cooling” they choose (65 watts, 100 watts, etc.). Once the cooling chosen gets overwhelmed by the user’s chosen input config, the CPU may perform thermal throttling, slowing down its own computational speed.
    - **Clock Speed (GHz)** - Users may adjust the number of cycles the processor can execute per second. Like the aforementioned active cores, increasing the clock speed improves efficiency at the cost of heat and power.
    - **Cooling Solution (TDP)** - Users may select the maximum amount of heat the cooling system must generate from 65W, 100W, or 150W. If the selected cooling system is less than the heat generated, the CPU's performance will be impacted.

- b. Users are also able to view the estimated Actual Power, Execution Time, Status, Effective Clock, and Total Energy Score of the CPU.
    - **Actual Power** - The calculated actual power consumed by the processor.
    - **Execution Time** - The estimated amount of time it would take to clear the given workload. (For now, this is a constant of 5000)
    - **Status** - The state of the individual core given the parameters. (Optimal, Inactive Core, Throttling)
    - **Effective Clock** - Display for the selected clock speed in GHz
    - **Total Energy Score** - Computed total energy score in J

- c. The goal is to finish the tasks using the least amount of resources, meaning the most efficient in time and power used. Ideally, the user learns:
    - Excessively increasing the power consumption and clock speeds of a CPU risks producing too much heat and getting thermal-throttled.
    - To achieve a high score, they must learn to choose the multicore architecture to distribute the tasks among the different cores, then choose the most efficient input combination to finish the task.

- d. The following are the formulas to be used in computation (using programming syntax):
```
workload = 5000 (fixed task units constant)
basePower = cores × clock² × 1.5 + cores × 5
throttling = basePower > TDP
effectiveClock = throttling ? clock × √(TDP / basePower) : clock
actualPower = throttling ? TDP : basePower
efficiency = throttling ? TDP / basePower : 1.0
execTime = workload / (cores × effectiveClock × efficiency)
energyScore = actualPower × execTime
```

- e. The screen will display the 8 cores of the CPU. Inactive cores are neutral, while active cores are colored. Green for Active cores, neutral for Inactive cores, red for Throttling.

## Tentative Style Guide Plan
![active cores](https://github.com/Kwimbow/ARCH2/blob/main/public/style-guide-ref-1.png)
![thermal throttling](https://github.com/Kwimbow/ARCH2/blob/main/public/style-guide-ref-2.png)

## References:
Alder Lake. (2026, Jun 18). *Wikipedia*. [Link](https://en.wikipedia.org/wiki/Alder_Lake)\
AMD Athlon 64 X2 4200+. (n.d.). *TechPowerUp*. [Link](https://www.techpowerup.com/cpu-specs/athlon-64-x2-4200.c475)\
AMD Phenom II X6 1090T BE. (n.d.). *TechPowerUp*. [Link](https://www.techpowerup.com/cpu-specs/phenom-ii-x6-1090t-be.c670)\
AMD Ryzen 7 1700X. (n.d.). *TechPowerUp*. [Link](https://www.techpowerup.com/cpu-specs/ryzen-7-1700x.c1892)\
AMD Ryzen 9 3950X. (2020, Nov 3). *TweakTown*. [Link](https://www.tweaktown.com/reviews/9255/amd-ryzen-9-3950x-zen-2-processor-review/index.html)\
AMD Ryzen Threadripper 3970X. (2019, Nov 25). *ServeTheHome*. [Link](https://www.servethehome.com/amd-ryzen-threadripper-3970x-review-32-cores-of-madness/)\
Athlon 64 X2. (2026, Feb 2). *Wikipedia*. [Link](https://en.wikipedia.org/wiki/Athlon_64_X2)\
Cass, S. (2024, Mar 15). Chip Hall of Fame: Intel 4004. *IEEE Spectrum*. [Link](https://spectrum.ieee.org/chip-hall-of-fame-intel-4004-microprocessor)\
Des, & Des. (2023, Jul 28). Thermal Throttling vs Power Limit Throttling. *76 Services*. [Link](https://76services.co.uk/thermal-throttling/\thermal-throttling-vs-power-limit-throttling/)\
Fish, R. (2012, Jan 6). Future of computers – Part 2: The Power Wall. *EDN*. [Link](https://www.edn.com/future-of-computers-part-2-the-power-wall/)\
Harris, D. M., & Harris, S. L. (2012). From zero to one. *Elsevier eBooks* (pp. 2–52). [Link](https://doi.org/10.1016/b978-0-12-394424-5.00001-x)\
IBM POWER4 MCM package. (n.d.). *OkQubit*. [Link](https://www.okqubit.net/power4/)\
Intel Core 2 Quad Q6600. (n.d.). *TechPowerUp*. [Link](https://www.techpowerup.com/cpu-specs/core-2-quad-q6600-95w.c403)\
Intel Core i7-980X. (2014). *Guru3D*. [Link](https://www.guru3d.com/review/intel-core-i7-980x-review/)\
Intel Pentium D 920. (n.d.). *TechPowerUp*. [Link](https://www.techpowerup.com/cpu-specs/pentium-d-920.c327)\
Koren, I., & Krishna, C. (2011). Temperature-aware computing. *Sustainable Computing*, 1(1), 46–56. [Link](https://doi.org/10.1016/j.suscom.2010.10.004)\
Microchip USA. (n.d.). *CPU Power Dissipation*. [Link](https://www.microchipusa.com/electrical-components/cpu-power-dissipation)\
Buyya, R., Rajagopal, S. M., & Supriya, M. (2023). FedSDM for ECG data. *Internet of Things*, 22, 100784. [Link](https://doi.org/10.1016/j.iot.2023.100784)\
Rupp, K. (2018, Feb 15). *42 Years of Microprocessor Trend Data*. [Link](https://www.karlrupp.net/2018/02/42-years-of-microprocessor-trend-data/)\
Ishfaq, A., Ranka, S., Sheikh, H. F., & Wang, Z. (2011). Thermal-aware scheduling techniques. *Sustainable Computing*, 2(3), 151–169. [Link](https://doi.org/10.1016/j.suscom.2011.06.005)\
Sutter, H. (2009). The Free Lunch Is Over. *Dr. Dobb's Journal*. [Link](https://www.cs.utexas.edu/~lin/cs380p/Free_Lunch.pdf)\
Team, R. (2025, Dec 27). Single-Core vs Multi-Core CPUs. *RevisionDojo*. [Link](https://www.revisiondojo.com/blog/single-core-vs-multi-core-processors-explained)\
Venu, B. (2011). Multi-core processors – An overview. *arXiv*. [Link](https://arxiv.org/abs/1110.3535)