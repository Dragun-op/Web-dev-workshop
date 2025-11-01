# 🚀 Quick Start Guide

Get your React version of Gringotts Ledger running in 3 minutes!

## Step 1: Navigate to the React Directory

```bash
cd react-version
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18.2
- React DOM 18.2
- React Router DOM 6.20
- Vite 5 (dev server & build tool)
- @vitejs/plugin-react

## Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 4: Open in Browser

Open your browser and visit: **http://localhost:5173**

---

## 🎉 That's It!

You should now see the Gringotts Ledger application running!

### Try These Features:

1. **View the Ledger** (home page)
   - See your current balance
   - View transaction history

2. **Add a Transaction**
   - Click "💰 Add Transaction" in navigation
   - Fill in description: "Wand from Ollivanders"
   - Enter amount: 7
   - Select type: "Withdrawal (Vault Debit)"
   - Click "Commit to Ledger ⚡"

3. **Remove a Transaction**
   - Go back to the Ledger page
   - Click "Expelliarmus" on any transaction
   - Watch it disappear!

4. **Test Persistence**
   - Add some transactions
   - Refresh the page (F5)
   - Transactions should still be there!

---

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is already taken, Vite will automatically try the next available port.

### Dependencies Not Installing

Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Module Not Found Errors

Make sure you're in the `react-version` directory:
```bash
pwd  # Should show: .../Web-dev-workshop/react-version
```

---

## 📁 Project Structure Quick Reference

```
react-version/
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Main app with routing
│   ├── styles.css            # All styles
│   ├── components/           # Reusable components
│   ├── pages/                # Page components
│   └── hooks/                # Custom hooks
├── index.html                # HTML template
├── package.json              # Dependencies
└── vite.config.js            # Vite config
```

---

## 🎯 Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Check [FEATURE_COMPARISON.md](./FEATURE_COMPARISON.md) to see feature parity
- Explore the code - it's fully documented!
- Try extending with new features

---

**Happy Coding! 🧙‍♂️✨**

*Mischief Managed!*
