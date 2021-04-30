import 'date-fns';
import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateTime(props) {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const {date, dateLabel, timeLabel, returnAnswer} = props;
	useEffect(() => {
		if (date) {
			setSelectedDate(date);
		}
	}, [])

	const handleDateChange = (date) => {
		setSelectedDate(date);
		returnAnswer(date)
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					id={"date-picker-dialog"}
					label={dateLabel}
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<KeyboardTimePicker
					id={"time-picker"}
					label={timeLabel}
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change time',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}