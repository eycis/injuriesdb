import React, { useState } from 'react';

interface LoginModalProps {
    onLogin: () => void; // Definice typu pro onLogin
  }

const Login = ({onLogin} : LoginModalProps ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Simulace přihlášení, použij backend pro ověření a získání tokenu
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
    
//     if (data.token) {
//       localStorage.setItem('token', data.token); // Uloží token do localStorage
//       onLogin(); // Volá funkci, která zobrazí obsah po přihlášení
//     } else {
//       alert('Přihlášení selhalo');
//     }
//   };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Přihlášení</h2>
        <input
          className="border mb-2 p-2 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border mb-4 p-2 w-full"
          type="password"
          placeholder="Heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          //onClick={}
        >
          Přihlásit se
        </button>
      </div>
    </div>
  );
};

export default Login;
