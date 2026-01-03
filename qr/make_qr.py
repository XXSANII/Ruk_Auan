import qrcode

data = "https://ruk-auan-fngkipy0l-xxsaniis-projects.vercel.app?_vercel_share=5kJg1dIuLBIPdrtuMTbtKNdk7wJgjulk"  # ใส่ลิงก์/ข้อความที่ต้องการ
img = qrcode.make(data)
img.save("qrcode.png")

print("Saved: qrcode.png")
