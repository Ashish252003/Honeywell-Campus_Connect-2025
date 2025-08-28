# Food & Beverage Quality Anomaly Detection  
**Hackathon: Honeywell Campus Connect 2025**  

## Overview  
The Food & Beverage (F&B) industry faces critical challenges in ensuring consistent product quality, meeting regulatory standards, and minimizing production losses. This project addresses these challenges by developing an anomaly detection system for F&B manufacturing, with bakery products as the primary case study.  

By applying **machine learning techniques (Isolation Forest)** to data collected from raw materials, process parameters, and final product characteristics, this solution enables manufacturers to identify anomalies early, reduce wastage, improve efficiency, and maintain compliance.  

---

## Problem Statement  
- Variability in raw material quality (e.g., flour protein content, yeast viability, water pH)  
- Inconsistencies in equipment parameters (oven temperature, baking duration, humidity control)  
- Operator-induced deviations during production  
- Challenges in meeting regulatory compliance and food safety standards  

---

## Data Sources  
- Public datasets from Kaggle, UCI Machine Learning Repository, and FAO Food Quality Standards  
- Key data categories:  
  - **Raw materials**: quantity, pH, moisture, temperature  
  - **Process parameters**: oven temperature, baking time, humidity  
  - **Final product**: weight, moisture percentage, core temperature, visual grading  

---

## Methodology  
- **Algorithm**: Isolation Forest for multivariable anomaly detection  
- **Features**:  
  - Numerical: temperature, moisture percentage, weight  
  - Categorical: machine ID, operator ID  
- **Outputs**:  
  - Anomaly score for each production batch  
  - Alerts triggered when anomaly rates exceed defined thresholds  
  - Dashboards for monitoring trends and deviations  

---

## Key Quality Indicators  
- Core temperature (ensures food safety)  
- Final product weight (ensures portion consistency)  
- Moisture percentage (affects shelf life and texture)  
- Visual grading (color, browning, surface defects)  

---

## Impact  
- Early detection of process and quality deviations  
- Reduction in production losses and rework  
- Improved compliance with food safety standards  
- Increased efficiency and supply chain reliability  

---

## Technology Stack  
- **Programming Language**: Python  
- **Libraries**: scikit-learn, pandas, matplotlib  
- **Model**: Isolation Forest (unsupervised anomaly detection)  
- **Visualization**: Interactive dashboards and Excel-based summaries  

---

## Repository Structure  
├── data/ # Reference/sample datasets
├── notebooks/ # Jupyter notebooks for exploration and modeling
├── src/ # Core anomaly detection pipeline code
├── results/ # Dashboards, charts, and output reports
├── README.md # Project documentation
└── FnB_Anomaly_Report.pdf # Detailed hackathon report
