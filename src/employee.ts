export interface Employee {
  id: string;
  name: string;
  division: string;
}

// semua yg di miliki employee di miliki manager
export interface Manager extends Employee {
  numberOfEmployees: number;
}

// jadi kalo kita bikin data buat manager, otomatis data yg ada di employee juga akan di isi
