## Directory Structure

```plaintext
├── dataset
│   ├── train.csv
│   ├── client.csv
│   ├── gas_prices.csv
│   ├── electricity_prices.csv
│   ├── forecast_weather.csv
│   ├── historical_weather.csv
│   ├── weather_station_to_county_mapping.csv
│   └── save
├── tcn.ipynb
└── README.md
```

## Files Description

- **train.csv**: Training data containing historical energy consumption data.
- **client.csv**: Data about clients including product type, county, business status, etc.
- **gas_prices.csv**: Historical gas prices.
- **electricity_prices.csv**: Historical electricity prices.
- **forecast_weather.csv**: Weather forecast data.
- **historical_weather.csv**: Historical weather data.
- **weather_station_to_county_mapping.csv**: Mapping of weather stations to counties.
- **save**: Directory to save trained models.
- **tcn.ipynb**: Jupyter Notebook containing the complete pipeline from data preprocessing to model training and evaluation.

## Installation

To run the code, you need to have the following packages installed:

```bash
!pip install optuna lightgbm pandas numpy polars keras scikit-learn
```

## Data Loading

The data is loaded from CSV files using the `polars` library for efficient data manipulation. The datasets are as follows:

- **train.csv**
- **client.csv**
- **gas_prices.csv**
- **electricity_prices.csv**
- **forecast_weather.csv**
- **historical_weather.csv**
- **weather_station_to_county_mapping.csv**

## Feature Engineering

The `feature_eng` function is used to perform feature engineering on the loaded data. This involves:

1. **Date Adjustments**: Aligning dates for client, gas, and electricity data.
2. **Location Data**: Converting latitude and longitude to float.
3. **Weather Data**: Aggregating and joining forecast and historical weather data.
4. **Target Data**: Creating shifted target columns to predict future energy consumption.
5. **Date-related Features**: Extracting day of the year, hour, day, weekday, month, and year from datetime.
6. **Cyclical Features**: Creating cyclical features for time of year and time of day.
7. **Memory Optimization**: Converting float64 columns to float32.

## Model Training

### Hyperparameter Optimization

Hyperparameters for LightGBM are optimized using `Optuna`. The `lgb_objective` function defines the search space for hyperparameters.

### Cross-Validation

A custom `MonthlyKFold` cross-validator is implemented to perform time series split based on months.

### Model Training

The best parameters from Optuna are used to train a `VotingRegressor` ensemble of LightGBM models. The training involves the following steps:

1. **Data Preparation**: Converting `polars` DataFrame to `pandas` DataFrame and creating additional target-related features.
2. **Cross-Validation**: Evaluating model performance using `cross_validate`.
3. **Model Saving**: Saving the trained model using `pickle`.

### Inference

During the inference phase, the model predicts energy consumption for new data provided in an iterative environment. The predictions are made using the trained Voting Regressor.

## Usage

To run the notebook:

2. **Install Required Packages**: Use `pip` to install necessary packages.
3. **Extract Dataset**: Unzip the dataset if needed.
4. **Run Cells**: Execute the cells in the notebook step-by-step.

## Results

- **Fit Time**: 855.654 
- **Score Time**: 7.675 
- **Error (MAE)**: 62.798 

## Future Work

- **Model Enhancement**: Implementation of additional models such as TCN (Temporal Convolutional Networks) for better performance.
- **Feature Engineering**: Explore additional features for improving model accuracy.
- **Deployment**: use the trained model for real-time predictions.
