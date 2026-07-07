# CSARCH2 Case Study: Virtual Exhibit Topic Proposal

## Table of Contents
- [Group's Title](#groups-title)
- [Group Roster](#group-roster)
- [Group's Topic Theme](#groups-topic-theme)
- [Category](#category)
- [Development Documentation (INCREMENTAL README SECTION)](#development-documentation)
    - [Conceptualization](#conceptualization)
    - [Implementation](#implementation)
    - [What We Learned](#what-we-learned)
    - [What's Next](#whats-next-for-final-submission)
- [Generative AI Use Disclosute](#generative-ai-use-disclosure)
- [Tech Stack Plan](#tech-stack-plan)
    - [Problem Solving Story](#problem-solving-story)
    - [Interactive Element](#interactive-element)
- [Tenetative Style Guide Plan](#tentative-style-guide-plan)
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

### Implementation
Given the exhibit template, the actual implementation of the exhibit webpage was fairly straightforward. For the mid-milestone, we have managed to finish implementing the interactive component and most, if not all of the contents of the exhibit; the webpage is more or less ready for deployment.

### What we learned
From the problem-solving story our group chose, we learned about how computers mostly only had single-core CPUs back then and how slow they were at multitasking relative to their performance in individual applications compared to the computers we have today, and from this we gained appreciation for the multicore technology that is in all the devices we use today but taken for granted, as well as for the people who pioneered this technology. We also learned from the story about the power wall problem that limited the max single-core frequency of CPUs, for which multicore technology was a workaround to keep increasing CPU performance wihout having to focus on single-core frequency.

### What's next (for final submission)
With the current state of the exhibit webpage already being ready for deployment, the group plans to further improve the design and UI of the interactive component, add more text content and information further expounding on multicore processors, and implement revisions as needed by the course instructor.

## Generative AI Use Disclosure
During the preparation of this exhibit webpage, the group used the following generative AI tools and/or services:
- [**Gemini**](https://gemini.google.com/) was used to streamline learning programming in React for the interactive component in this project, as well as for recommendations in making the code written by the authors more clean, readable, and efficient.

After using this tool/service, the authors reviewed and edited the content as needed and take full responsibility for the content of the publication.

## Tech Stack Plan
### Problem Solving Story
- Users will be greeted with a brief introduction to the invention of Multicore Processors.
    - In the past, computer processors were mainly single core. This meant computer programs ran linearly, and never spontaneously. However, sometime in 2005, CPU chip companies started experimenting with multicore CPUs, increasing chip productivity exponentially. This led to the release of the dual-core processor, a rather obsolete architecture compared to the quad or octa-core processors we commonly use today.

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
    - Excessively increasing the power consumption and clock speeds of a CPU risks producing too much heat and getting thermal throttled.
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
- https://en.wikipedia.org/wiki/Multi-core_processor
- https://www.cs.utexas.edu/~lin/cs380p/Free_Lunch.pdf
- https://www.edn.com/future-of-computers-part-2-the-power-wall/ 
- https://en.wikipedia.org/wiki/Voltage_and_frequency_scaling
- https://www.sciencedirect.com/topics/computer-science/dynamic-power-consumption
- https://www.sciencedirect.com/topics/computer-science/total-execution-time
- https://76services.co.uk/thermal-throttling/thermal-throttling-vs-power-limit-throttling/
- https://www.sciencedirect.com/topics/computer-science/dynamic-voltage-and-frequency-scaling
- https://www.microchipusa.com/electrical-components/cpu-power-dissipation
