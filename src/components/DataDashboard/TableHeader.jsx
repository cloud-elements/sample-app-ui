import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from 'material-ui/Table';

class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const { type } = this.props;
        switch (type) {
            case 'contacts':
                return(
                    <TableHead>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell numeric>First Name</TableCell>
                            <TableCell numeric>Email</TableCell>
                            <TableCell numeric>Phone</TableCell>
                            <TableCell numeric>Job Title</TableCell>
                            <TableCell numeric>Company</TableCell>
                        </TableRow>
                    </TableHead> 
                );
                break;
            default:
                return(
                    <div>Not content</div>
                );
                break;
        }
    }
}

TableHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TableHeader;