export default function ComplexDashboardRootLayout({
    children,
    users,
    notifications,
    revenue,
  }) {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-2">Complex dashboard layout </h2>
        {children}

        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexDirection: 'column',
            }}
          >
           <div> {users}</div>
           <div> {revenue}</div>
          </div>
         <div> {notifications}</div>
        </div>
      </div>
    );
  }
  