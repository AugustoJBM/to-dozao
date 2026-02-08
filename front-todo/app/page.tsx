"use client";

import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de requisição de login
    console.log('Tentando login com:', { ...formData, rememberMe });
    
    // Simulação de delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    alert(`Login realizado para: ${formData.email}`);
  };

  const handleForgotPassword = () => {
    alert('Redirecionando para recuperação de senha...');
  };

  const handleSignUp = () => {
    alert('Redirecionando para cadastro...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-todo-50 to-blue-500 flex flex-col items-center justify-center p-4">
      {/* Card Principal */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            To-do<span className="text-principal-50 text-blue-500">zão</span>
          </h1>
          <p className="text-gray-600">Organize suas tarefas de forma simples</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
                disabled={isLoading}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         disabled:bg-gray-100 disabled:cursor-not-allowed
                         transition duration-200"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Digite sua senha"
                required
                disabled={isLoading}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         disabled:bg-gray-100 disabled:cursor-not-allowed
                         transition duration-200"
              />
            </div>
          </div>

          {/* Opções: Lembrar-me e Esqueceu a senha */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Lembrar-me
              </label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={isLoading}
              className="text-sm font-medium text-blue-500 hover:text-blue-600 
                       cursor-pointer"
            >
              Esqueceu a senha?
            </button>
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            disabled={isLoading || !formData.email || !formData.password}
            className="w-full bg-blue-600 
                     text-white font-semibold py-3 px-4 rounded-lg
                     hover:bg-blue-700 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Entrando...
              </span>
            ) : (
              'Entrar'
            )}
          </button>
        </form>

        {/* Divisor */}
        <div className="my-8">
        </div>

        {/* Link para Cadastro */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Não tem uma conta?</p>
          <button
            type="button"
            onClick={handleSignUp}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 
                     text-blue-500 font-semibold rounded-lg
                     hover:bg-blue-50 transition duration-200 cursor-pointer"
          >
            Criar conta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 text-center">
        <p className="text-white text-sm opacity-90">
          © 2024 To-do<span className="font-bold">zão</span>. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;