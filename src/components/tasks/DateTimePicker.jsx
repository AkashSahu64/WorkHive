function DateTimePicker({ label, date, time, onDateChange, onTimeChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="flex-1 p-3 rounded-lg border focus:ring-2 focus:ring-primary"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          className="flex-1 p-3 rounded-lg border focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}

export default DateTimePicker;