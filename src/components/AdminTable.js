import React from 'react';
import AdminRows from './AdminRows';
import { useSelector } from 'react-redux';

const AdminTable = () => {
  const columnsHeadings = useSelector((state) =>
    typeof state.data.admin.users === 'object'
      ? state.data.admin.users[0]
      : state.data.admin.users
  );
  const headings = [
    'id',
    'email',
    'organization_id',
    'jti',
    'uid',
    'provider',
    'name',
    'username',
    'bio',
    'profile_image',
    'step',
    'country_code',
    'phone_number',
    'token',
    'is_pending',
    'is_verified',
    'stripe_customer',
    'stripe_subscription',
    'profile_cover',
    'is_admin',
    'organization',
    'owner_id',
    'role',
  ];

  return (
    <div className="container my-2 table-responsive">
      {columnsHeadings !== undefined ? (
        <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
          <thead className="table-primary">
            <tr>
              {headings.map((x, i) => (
                <th key={i} scope="col" className="justify-content-center">
                  {x[0].charAt(0).toUpperCase() + x.slice(1).replace('_', '')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AdminRows />
          </tbody>
        </table>
      ) : (
        'No Data Found'
      )}
    </div>
  );
};

export default AdminTable;
