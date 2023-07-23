import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { Context } from '../index';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className='d-flex'>
            { device.brands.map(brand => 
                <Card
                    key={brand.id}
                    className='p-3 m-1'
                    style={{ width: 100, textAlign: 'center', cursor: 'pointer' }}
                    onClick={ () => device.setSelectedBrand(brand)}
                    border={ brand.id === device.selectedBrand.id ? 'danger' : 'light' }
                >
                    { brand.name }
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;