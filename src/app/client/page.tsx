interface Client {
  login: { uuid: string };
  name: { first: string; last: string };
  picture: { medium: string };
  email: string;
}

export default async function ClientPage() {
  const res = await fetch('https://randomuser.me/api/?results=6');
  const data = await res.json();
  const clients: Client[] = data.results;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.login.uuid} className="bg-white p-4 rounded shadow">
            <img
              src={client.picture.medium}
              alt={`${client.name.first} ${client.name.last}`}
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold text-center">
              {client.name.first} {client.name.last}
            </h2>
            <p className="text-center text-gray-600">{client.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
