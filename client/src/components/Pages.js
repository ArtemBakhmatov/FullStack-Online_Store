import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

const Pages = observer(() => {
    const { device } = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit); // округляем в большую сторону
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className='mt-5'>
            { pages.map(page => 
                <Pagination.Item
                    key={ page }
                    active={ device.page === page }
                    onClick={ () => device.setPage(page) }
                >
                    { page }
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;