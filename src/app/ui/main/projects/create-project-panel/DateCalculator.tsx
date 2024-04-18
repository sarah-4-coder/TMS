import { useState } from "react";
// import { Input } from '@remix-run/react';

// TODO: create Input component
const DateCalculator: React.FC = () => {
  // Define state for starting date, ending date, and days left
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState<string>("");
  const [daysLeft, setDaysLeft] = useState<number | string>("");

  // Function to calculate days left between starting date and ending date
  const calculateDaysLeft = () => {
    if (startDate && endDate) {
      // Convert the dates to Date objects
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      // Calculate the difference in time (in milliseconds)
      const timeDifference = endDateObj.getTime() - startDateObj.getTime();

      // Calculate the difference in days
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      // Update the state with the calculated days left
      setDaysLeft(daysDifference);
    } else {
      // If either date is not provided, clear the days left state
      setDaysLeft("");
    }
  };

  // Event handler for starting date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    calculateDaysLeft(); // Recalculate days left
  };

  // Event handler for ending date change
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    calculateDaysLeft(); // Recalculate days left
  };

  return (
    <div className="mb-6 grid grid-cols-2 items-center gap-1">
      <span>Starting Date:</span>
      <span>
        <input
          className="rounded border p-1"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </span>
      <span>Deadline:</span>
      <span>
        <input
          className="rounded border p-1"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </span>
      <span>Days Left:</span>
      <span className="h-8 w-[9.3rem] rounded border p-1">{daysLeft} </span>
    </div>
  );
};

export default DateCalculator;
