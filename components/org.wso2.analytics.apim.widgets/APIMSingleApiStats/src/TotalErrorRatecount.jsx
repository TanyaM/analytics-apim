import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimelineIcon from '@material-ui/icons/Timeline';
import Moment from 'moment';

const styles = () => ({
  button: {
  // margin: '1%',
  },
  input: {
    display: 'none',
  },
});

class TotalReqcount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

  render() {
    const { classes, formatederrorpercentage, timeFrom, timeTo} = this.props;
    const styles = {
        headingWrapper: {
            height: '10%',
            margin: 'auto',
            paddingTop: '15px',
            width: '90%',
        },
        iconWrapper: {
            float: 'left',
            width: '40%',
            height: '62%',
        },
        icon: {
            display: 'block',
            margin: 'auto',
            marginTop: '25%',
            width: '50%',
            height: '50%'
        },
        dataWrapper: {
            float: 'left',
            width: '60%',
            height: '50%',
            paddingTop: '8%',
        },
        weekCount: {
            margin: 0,
            marginTop: '5%',
            color: 'rgb(135,205,223)',
            letterSpacing: 1,
            fontSize: '80%',
        },
        typeText: {
            textAlign: 'left',
            fontWeight: 'normal',
            margin: 0,
            display: 'inline',
            marginLeft: '3%',
            letterSpacing: 1.5,
            fontSize: 'small',
        },
        playIcon: {
            position: 'absolute',
            bottom: '13%',
            right: '8%',
        },
    };

    return (
    <div
        style={{
            background: 'linear-gradient(to right, rgb(17, 2, 41) 0%, rgb(117, 39, 188) 46%, rgb(84, 42, 101) 100%)',
            maxWidth: 'auto', 
            maxHeight: '200px', 
            minWidth: 'auto', 
            minHeight: '200px', 
            marginRight:'2px', 
            marginLeft:'2px' ,
        }}
    >
      <div style={styles.headingWrapper}>
            <h3
                style={{
                    borderBottom: '1.5px solid #fff',
                    paddingBottom: '10px',
                    margin: 'auto',
                    textAlign: 'left',
                    fontWeight: 'normal',
                    letterSpacing: 1.5,
                }}
            >
                <FormattedMessage id='errorratecount.widget.heading' defaultMessage='TOTAL REQUEST COUNT' />
            </h3>
        </div>
        <div style={styles.iconWrapper}> 
        <TimelineIcon style={styles.icon}/>
        </div>

        <div style={styles.dataWrapper}>
            <h1
                style={{
                    margin: 'auto',
                    textAlign: 'center',
                    fontSize: '300%',
                    display: 'inline',
                    color: '#fff',
                }}
            >
                {formatederrorpercentage}
            </h1>
            <h3 style={styles.typeText}>
                {formatederrorpercentage === '01' ?
                    <FormattedMessage id='api' defaultMessage='%' /> :
                    <FormattedMessage id='apis' defaultMessage='%' /> }
            </h3>
            <p style={styles.weekCount}>
                [
                {' '} {formatederrorpercentage} {' '} {'error rate'} {' '} {'WITHIN'} {Moment(timeFrom).format('YYYY-MMM')} {' TO '} {Moment(timeTo).format('YYYY-MMM')} {' '}
                {/* <FormattedMessage id='within.week.text' defaultMessage='WITHIN LAST WEEK ' /> */}
                ]
            </p>
        </div>
    </div>
    );
  }
}

export default withStyles(styles)(TotalReqcount);