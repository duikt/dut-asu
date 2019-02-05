import React from "react";
import Typography from "@material-ui/core/Typography";

class Schedule extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Расписание
        </Typography>
      </div>
    );
  }
}

export default Shedule;
