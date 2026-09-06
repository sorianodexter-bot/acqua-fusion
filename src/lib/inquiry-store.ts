import { create } from "zustand";

type Draft = {
  productName?: string;
  waterType?: string;
  orderType?: string;
};

type InquiryState = Draft & {
  setDraft: (draft: Draft) => void;
};

export const useInquiry = create<InquiryState>((set) => ({
  setDraft: (draft) => set(draft),
}));
