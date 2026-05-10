import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [lang, setLang] = useState('Français');

  const translations = {
    Français: { 
      title: "Connexion", 
      subtitle: "Smart Clinic Management", 
      roleLabel: "Se connecter en tant que :", 
      btn: "Se Connecter", 
      email: "Adresse Email", 
      pass: "Mot de passe",
      roles: { admin: "Administrateur", doc: "Médecin", sec: "Secrétaire", pat: "Patient" }
    },
    English: { 
      title: "Login", 
      subtitle: "Smart Clinic Management", 
      roleLabel: "Connect as:", 
      btn: "Sign In", 
      email: "Email Address", 
      pass: "Password",
      roles: { admin: "Administrator", doc: "Doctor", sec: "Secretary", pat: "Patient" }
    },
    العربية: { 
      title: "تسجيل الدخول", 
      subtitle: "نظام إدارة العيادة", 
      roleLabel: "الدخول بصفة:", 
      btn: "دخول", 
      email: "البريد الإلكتروني", 
      pass: "كلمة المرور",
      roles: { admin: "مدير النظام", doc: "طبيب", sec: "سكرتيرة", pat: "مريض" }
    }
  };

  const t = translations[lang];

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'pat') {

      if (email === 'patient@email.com' && password === '0000') {
        localStorage.setItem('role', 'patient');
        localStorage.setItem('patientName', 'Zineb El Amrani'); 
        navigate('/mon-profil');
      } else {
        alert('Infos Patient incorrectes ! (patient@email.com / 0000)');
      }
    } else {
      if (email === 'admin@clinic.com' && password === '123456') {
        localStorage.setItem('role', 'admin');
        navigate('/dashboard');
      } else {
        alert('Infos Admin incorrectes ! (admin@clinic.com / 123456)');
      }
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdfaf5' }}>
      <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', width: '380px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={selectLangStyle}>
            <option value="Français">FR</option>
            <option value="English">EN</option>
            <option value="العربية">AR</option>
          </select>
        </div>

        <h2 style={{ color: '#5d5e5d', marginBottom: '5px', direction: lang === 'العربية' ? 'rtl' : 'ltr' }}>{t.title}</h2>
        <p style={{ color: '#a89081', fontSize: '14px', marginBottom: '30px' }}>{t.subtitle}</p>
        
        <form onSubmit={handleLogin} style={{ direction: lang === 'العربية' ? 'rtl' : 'ltr', textAlign: lang === 'العربية' ? 'right' : 'left' }}>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '13px', color: '#777', fontWeight: '500' }}>{t.roleLabel}</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={inputStyle}
            >
              <option value="admin">{t.roles.admin}</option>
              <option value="doc">{t.roles.doc}</option>
              <option value="sec">{t.roles.sec}</option>
              <option value="pat">{t.roles.pat}</option>
            </select>
          </div>

          {/* زدنا onChange لهاد الـ inputs باش نقبضو المعلومات */}
          <input 
            type="email" 
            placeholder={t.email} 
            required 
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle} 
          />
          
          <input 
            type="password" 
            placeholder={t.pass} 
            required 
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle} 
          />
          
          <button type="submit" style={submitBtnStyle}>
            {t.btn}
          </button>
        </form>

        <p style={{ marginTop: '30px', fontSize: '10px', color: '#ccc', letterSpacing: '1px' }}>
          SMART CLINIC SYSTEM &bull; PFE 2026
        </p>
      </div>
    </div>
  );
};

const selectLangStyle = { border: 'none', backgroundColor: '#f0ede9', borderRadius: '5px', padding: '5px', fontSize: '12px', cursor: 'pointer', outline: 'none' };
const inputStyle = { width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box', marginBottom: '15px' };
const submitBtnStyle = { width: '100%', padding: '14px', backgroundColor: '#d5bdaf', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' };

export default Login;