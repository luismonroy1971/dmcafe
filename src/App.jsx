import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CategorySection } from './components/CategorySection';
import { menuData } from './data/menuData';

function App() {
  return (
    <Layout>
      <Header />
      <main className="flex-1 px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {menuData.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
