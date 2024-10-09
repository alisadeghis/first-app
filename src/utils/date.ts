export function getDayOfWeek(dateString?: string): string {
  if (!dateString) return "";
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dateString);
  const dayOfWeek = date.getDay(); // returns 0 for Sunday, 1 for Monday, etc.

  return daysOfWeek[dayOfWeek];
}

export function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

export function formatTime(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // تبدیل ساعت به فرمت 12 ساعته
  hours = hours % 12;
  hours = hours ? hours : 12; // اگر 0 بود، باید 12 نمایش داده شود

  return `${hours}:${minutes} ${ampm}`;
}
