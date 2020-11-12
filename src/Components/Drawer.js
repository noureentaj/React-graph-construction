import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Drawer(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        searchInput: "",
        searchInputhcp: "",
    });
    const [inHcp, setHcp] = useState("")
    const [inHco, setHco] = useState("")
    const [dataHcp, setdHcp] = useState([])
    const [dataHco, setdHco] = useState([])

    const globalSearch = (searchInput, full_data, search_name) => {
        if (searchInput.length !== 0) {
            let filteredData = full_data.filter(value => {
                return (
                    value.custId.toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.cust_name.toLowerCase().replace(/\s/g, '_').includes(searchInput.replace(/\s/g, '_'))

                );
            });
            if (search_name === "searchInput") {
                setdHco(filteredData);
            }
            if (search_name === "searchInputhcp") {
                setdHcp(filteredData);
            }
        }
        else {
            if (search_name === "searchInput") {
                setState({ ...state, datahco: this.state.hco });
            }
            if (search_name === "searchInputhcp") {
                setState({ ...state, datahcp: this.state.hcp });
            }
        }
    };
    const handleInputChange = event => {
        const name = event.target.name;
        const val = event.target.value;
        if (name === "searchInput") {
            setHco(val)
            console.log(val)
            if (val.length !== 0) {
                globalSearch(val, props.hcoData, name);
            }
        }
        if (name === "searchInputhcp") {
            setHcp(val)
            if (val.length !== 0) {
                globalSearch(val, props.hcpData, name);
            }
        }
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const hcolist = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <Button style={{ margin: "10px" }} variant="outlined" onClick={toggleDrawer(anchor, false)}>x</Button>
            <Input
                // color="primary"
                onChange={handleInputChange}
                name="searchInput"
                value={inHco}
                placeholder="Search.." />
            {dataHco.map((item, index) => {
                return (
                    <div key={index}>
                        <Paper 
                        elevation={3} 
                        variant="outlined" 
                        className="Tables" 
                        val={item.custId} 
                        title={item.cust_name} 
                        draggable 
                        onDragEnd={e => props.addStartNodehco(e)}>{item.cust_name}</Paper >
                    </div >
                );
            })}
        </div>
    );

    const hcplist = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <Button style={{ margin: "10px" }} variant="outlined" onClick={toggleDrawer(anchor, false)}>x</Button>
            <Input
                // color="primary"
                onChange={handleInputChange}
                name="searchInputhcp"
                value={inHcp}
                placeholder="Search.." />
            {dataHcp.map((item, index) => {
                return (
                    <div key={index}>
                        <Paper 
                        elevation={3} 
                        variant="outlined" 
                        className="Tables" 
                        val={item.custId} 
                        title={item.cust_name} 
                        draggable 
                        onDragEnd={e => props.addStartNodehco(e)}>{item.cust_name}</Paper >
                    </div >
                );
            })}
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" color="secondary" onClick={toggleDrawer(anchor, true)}>HCP</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {hcplist(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{margin:"5px"}} variant="contained" color="secondary" onClick={toggleDrawer(anchor, true)}>HCO</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {hcolist(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}