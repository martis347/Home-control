import React, {PropTypes} from 'react';
import {translate} from "react-translate"

@translate("Calendar")
class Calendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      calendar: {}
    }
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.calendar != nextProp.calendar) {
      this.setState({calendar: nextProp.calendar});
    }
  }

  render() {
    const {t} = this.props;

    return (
      <div className="calendar">
        <div className="month">
          <ul>
            <li style={{textAlign: 'center'}}>
              {this.state.calendar.year + ", " + this.state.calendar.month}
            </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>{t("MONDAY")}</li>
          <li>{t("TUESDAY")}</li>
          <li>{t("WEDNESDAY")}</li>
          <li>{t("THURSDAY")}</li>
          <li>{t("FRIDAY")}</li>
          <li>{t("SATURDAY")}</li>
          <li>{t("SUNDAY")}</li>
        </ul>

        <ul className="days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li><span className="active">10</span></li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ul>
      </div>
    );
  }
}

Calendar.propTypes = {
  calendar: PropTypes.object.isRequired
};

export default Calendar;
