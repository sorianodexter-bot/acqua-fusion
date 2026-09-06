import { useEffect, useState, type FormEvent } from "react";
import { Facebook, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, SelectNative, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInquiry } from "@/lib/inquiry-store";
import { ORDER_TYPES, WATER_TYPES } from "@/lib/site-data";

const STORAGE_KEY = "acqua-fusion-inquiries";

export function InquiryForm() {
  const draft = useInquiry();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [orderType, setOrderType] = useState("");
  const [waterType, setWaterType] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (draft.orderType) setOrderType(draft.orderType);
    if (draft.waterType) setWaterType(draft.waterType);
    if (draft.productName) {
      setMessage((current) =>
        current.includes(draft.productName!)
          ? current
          : current
            ? `${current}\nInterested in: ${draft.productName}`
            : `Interested in: ${draft.productName}`,
      );
    }
  }, [draft.orderType, draft.waterType, draft.productName]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (mobile.trim().length < 10) {
      toast.error("Please enter a valid mobile number.");
      return;
    }
    if (!orderType) {
      toast.error("Please choose an order type.");
      return;
    }
    if (!waterType) {
      toast.error("Please choose a water type.");
      return;
    }
    setSending(true);
    const inquiry = {
      name: name.trim(),
      mobile: mobile.trim(),
      orderType,
      waterType,
      quantity,
      message: message.trim(),
      at: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]",
      ) as unknown[];
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([inquiry, ...existing].slice(0, 25)),
      );
    } catch {
      /* ignore quota */
    }
    window.setTimeout(() => {
      setSending(false);
      setName("");
      setMobile("");
      setQuantity("1");
      setMessage("");
      toast.success(
        "Inquiry sent. Salamat — Acqua Fusion will follow up with you.",
      );
    }, 450);
  }

  function placeholderContact(kind: "call" | "facebook") {
    toast.message(
      kind === "call"
        ? "Mobile number coming soon. Send an inquiry or visit Retail A, Azure North."
        : "Facebook page coming soon. Send an inquiry or visit Retail A, Azure North.",
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="inq-name">Name</Label>
          <Input
            id="inq-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="inq-mobile">Mobile Number</Label>
          <Input
            id="inq-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="09xx xxx xxxx"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-1.5">
          <Label htmlFor="inq-order">Order Type</Label>
          <SelectNative
            id="inq-order"
            name="orderType"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            <option value="">Select type</option>
            {ORDER_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectNative>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="inq-water">Water Type</Label>
          <SelectNative
            id="inq-water"
            name="waterType"
            value={waterType}
            onChange={(e) => setWaterType(e.target.value)}
          >
            <option value="">Select water</option>
            {WATER_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectNative>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="inq-qty">Quantity</Label>
          <Input
            id="inq-qty"
            name="quantity"
            type="number"
            min={1}
            max={999}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="inq-message">Message</Label>
        <Textarea
          id="inq-message"
          name="message"
          placeholder="Size, delivery notes, or preferred pick-up time"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="submit" disabled={sending} className="sm:min-w-44">
          <Send />
          {sending ? "Sending…" : "Send Inquiry"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => placeholderContact("call")}
        >
          <Phone />
          Call Now
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => placeholderContact("facebook")}
        >
          <Facebook />
          Message on Facebook
        </Button>
      </div>
    </form>
  );
}
