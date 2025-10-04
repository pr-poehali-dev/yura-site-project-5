import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '80px 20px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          Добро пожаловать, Елизавета!
        </h1>
        <p style={{
          fontSize: '1.25rem',
          opacity: 0.9,
          marginBottom: '40px'
        }}>
          Это демонстрационный сайт, созданный на платформе Poehali.dev
        </p>
        <button style={{
          background: 'white',
          color: '#667eea',
          padding: '15px 40px',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Начать работу
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '60px 20px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Feature 1 */}
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <Icon name="Rocket" size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Быстрый запуск</h3>
            <p style={{ opacity: 0.9 }}>Создавайте проекты за минуты, а не дни</p>
          </div>

          {/* Feature 2 */}
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <Icon name="Zap" size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Мощные инструменты</h3>
            <p style={{ opacity: 0.9 }}>Все необходимое для разработки в одном месте</p>
          </div>

          {/* Feature 3 */}
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <Icon name="Heart" size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Просто использовать</h3>
            <p style={{ opacity: 0.9 }}>Интуитивный интерфейс для любого уровня</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '40px 20px',
        textAlign: 'center',
        opacity: 0.8
      }}>
        <p>Создано на платформе <strong>Poehali.dev</strong></p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>© 2025 Демонстрационный проект</p>
      </div>
    </div>
  );
}
