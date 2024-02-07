import { Boundary } from '@/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['That’s a 404']} color="pink">
      <div className="space-y-4 text-white">
        <h2 className="text-lg font-bold">Sorry, mate</h2>

        <p className="text-sm">Could not find that resource.</p>
      </div>
    </Boundary>
  );
}
