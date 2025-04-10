// app/passenger/layout.js
import PassengerSidebar from '@/components/PassengerSidebar';

export default function PassengerLayout({ children }) {
  return (
    <div>
      <PassengerSidebar />
      <main>{children}</main>
    </div>
  );
}
