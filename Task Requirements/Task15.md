# Pharmacy Store – Frontend Task Requirements

## Project Name
**Pharmacy-Store**

---

## Timeline

### Phase 1
- **Start Time:** Today at 5:10 PM  
- **Deadline:** Thursday at 6:00 PM  

### Phase 2 (Extended Scope)
- **Start Time:** Today at 1:30 PM  
- **Deadline:** Tomorrow at 6:00 AM  

---

## General Instructions

- Use **any CSS approach** (Tailwind, Bootstrap, or Custom CSS).
- Follow the defined folder structure **exactly**.
- Work strictly within assigned **color-coded modules**.
- **No cross-module mixing** or unplanned additions.
- Submit the final work as a **GitHub repository link**.

---

## Project Folder Structure
```
frontend/
├─ public/
│  ├─ index.html
│  ├─ favicon.ico
│  └─ logo.png
│
├─ src/
│  ├─ shared/
│  │  ├─ components/
│  │  │  ├─ Header.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Button.jsx
│  │  │  └─ Loader.jsx
│  │  ├─ utils/
│  │  │  ├─ formatPrice.js
│  │  │  └─ validators.js
│  │  └─ constants/
│  │     └─ categories.js
│  │
│  ├─ modules/
│  │  ├─ products/
│  │  │  ├─ components/
│  │  │  │  ├─ ProductCard.jsx
│  │  │  │  ├─ ProductFilter.jsx
│  │  │  │  └─ ProductSearch.jsx
│  │  │  ├─ pages/
│  │  │  │  ├─ ProductList.jsx
│  │  │  │  └─ ProductDetails.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useProducts.js
│  │  │  ├─ services/
│  │  │  │  └─ productService.js
│  │  │  └─ index.js
│  │
│  │  ├─ cart/
│  │  │  ├─ components/
│  │  │  │  ├─ CartItem.jsx
│  │  │  │  └─ CartSummary.jsx
│  │  │  ├─ pages/
│  │  │  │  └─ CartPage.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useCart.js
│  │  │  ├─ services/
│  │  │  │  └─ cartService.js
│  │  │  └─ index.js
│  │
│  │  ├─ orders/
│  │  │  ├─ pages/
│  │  │  │  ├─ Checkout.jsx
│  │  │  │  └─ OrderSuccess.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useOrder.js
│  │  │  ├─ services/
│  │  │  │  └─ orderService.js
│  │  │  └─ index.js
│  │
│  │  ├─ auth/
│  │  │  ├─ pages/
│  │  │  │  ├─ Login.jsx
│  │  │  │  └─ Register.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useAuth.js
│  │  │  ├─ services/
│  │  │  │  └─ authService.js
│  │  │  └─ index.js
│  │
│  │  ├─ prescriptions/
│  │  │  ├─ pages/
│  │  │  │  ├─ UploadPrescription.jsx
│  │  │  │  └─ PrescriptionStatus.jsx
│  │  │  ├─ components/
│  │  │  │  ├─ PrescriptionUploadForm.jsx
│  │  │  │  └─ PrescriptionCard.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ usePrescriptions.js
│  │  │  ├─ services/
│  │  │  │  └─ prescriptionService.js
│  │  │  └─ index.js
│  │
│  │  ├─ drugs/
│  │  │  ├─ pages/
│  │  │  │  ├─ DrugInfo.jsx
│  │  │  │  └─ DrugInteractions.jsx
│  │  │  ├─ components/
│  │  │  │  ├─ DrugCard.jsx
│  │  │  │  └─ DrugDetails.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useDrugs.js
│  │  │  ├─ services/
│  │  │  │  └─ drugService.js
│  │  │  └─ index.js
│  │
│  │  ├─ inventory/
│  │  │  ├─ pages/
│  │  │  │  ├─ InventoryList.jsx
│  │  │  │  └─ ExpiringStock.jsx
│  │  │  ├─ components/
│  │  │  │  ├─ InventoryItem.jsx
│  │  │  │  └─ StockUpdateForm.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useInventory.js
│  │  │  ├─ services/
│  │  │  │  └─ inventoryService.js
│  │  │  └─ index.js
│  │
│  │  ├─ profile/
│  │  │  ├─ pages/
│  │  │  │  ├─ UserProfile.jsx
│  │  │  │  └─ MedicalHistory.jsx
│  │  │  ├─ components/
│  │  │  │  ├─ ProfileCard.jsx
│  │  │  │  └─ MedicalRecordItem.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useUserProfile.js
│  │  │  ├─ services/
│  │  │  │  └─ profileService.js
│  │  │  └─ index.js
│  │
│  │  ├─ consultation/
│  │  │  ├─ pages/
│  │  │  │  ├─ ChatWithPharmacist.jsx
│  │  │  │  └─ ConsultationHistory.jsx
│  │  │  ├─ components/
│  │  │  │  ├─ ChatBox.jsx
│  │  │  │  └─ MessageItem.jsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useConsultation.js
│  │  │  ├─ services/
│  │  │  │  └─ consultationService.js
│  │  │  └─ index.js
│  │
│  │  └─ payments/
│  │     ├─ pages/
│  │     │  ├─ PaymentPage.jsx
│  │     │  └─ InsuranceClaim.jsx
│  │     ├─ components/
│  │     │  ├─ PaymentForm.jsx
│  │     │  └─ InsuranceForm.jsx
│  │     ├─ hooks/
│  │     │  └─ usePayments.js
│  │     ├─ services/
│  │     │  └─ paymentService.js
│  │     └─ index.js
│  │
│  ├─ core/
│  │  ├─ api/
│  │  │  └─ http.js
│  │  ├─ config/
│  │  │  └─ appConfig.js
│  │  └─ routing/
│  │     └─ routes.jsx
│  │
│  ├─ App.jsx
│  ├─ index.jsx
│  └─ index.js
│
└─ package.json
```
---

## Assignment Principles

- Each module has real responsibility  
- Complexity is balanced across modules  
- Clear separation prevents conflicts  
- Ownership is explicit  

This structure must be followed as-is for evaluation.
