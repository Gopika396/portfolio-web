export const me = {
  name: 'Gopika',
  first: 'Gopika',
  photo: 'me.jpg',
  email: 'gopika.v396@gmail.com',
  github: 'https://github.com/Gopika396',
  linkedin: 'https://www.linkedin.com/in/gopika-v-aa7947353',
}
export const words = ['shops', 'cafes', 'banks', 'clinics']
export const training = { course: 'Python Full Stack', company: 'Artlysoft Private Limited' }
export const education = [
  { degree: 'Master of Computer Applications (MCA)', place: 'Dayananda Sagar University, Bengaluru', status: 'Pursuing' },
  { degree: 'Bachelor of Computer Applications (BCA)', place: 'SSMRV College, Bengaluru', status: 'Completed' },
]
export const cats = ['Home & Lifestyle', 'Fashion & Beauty', 'Services & Health', 'Food & Cafe', 'Electronics & Auto']
const BASE = 'https://gopika396.github.io/'
const H = 'Home & Lifestyle', F = 'Fashion & Beauty', S = 'Services & Health', D = 'Food & Cafe', E = 'Electronics & Auto'
const JS = 'JavaScript', HC = 'HTML / CSS'
// P(repo, title, category, month, tech, description). Latest first.
const P = (repo, title, cat, month, tech, d = '') => ({ repo, title, cat, month, tech: [tech], d })
export const projects = [
  P('book-store-web', 'Book Store', H, 'Oct 2026', JS, 'An online book store with a clean browsing experience.'),
  P('kid-cloth-shop', 'LittleSteps', F, 'Oct 2026', JS, 'Kids clothing organised by age, from newborns to big kids.'),
  P('paint-shop', 'HueHaven', H, 'Oct 2026', JS, 'A paint brand site showing colours, premium paints and finishes.'),
  P('pet-grom-shop', 'Bark & Bubble', S, 'Oct 2026', JS, 'A friendly pet grooming business with services and booking info.'),
  P('interior-desgin-shop', 'Forma Living Studio', H, 'Oct 2026', JS, 'A modern interiors studio selling furniture and home objects.'),
  P('organic-shop', 'Root & Harvest', D, 'Oct 2026', JS, 'An organic food store with a fresh, natural look.'),
  P('spa-shop', 'Solstice Seasons', S, 'Oct 2026', JS),
  P('cosmetic-shop', 'SkinAura', F, 'Oct 2026', JS),
  P('footwear-shop', 'Footwear Shop', F, 'Oct 2026', JS),
  P('laundry-web', 'Laundry Service', S, 'Oct 2026', JS),
  P('Perfume-store', 'Perfume Store', F, 'Oct 2026', JS),
  P('Bank-website', 'Bank Website', S, 'Oct 2026', JS),
  P('grocery-shop', 'Grocerly', D, 'Oct 2026', JS),
  P('watch-shop', 'Watch Shop', F, 'Oct 2026', JS),
  P('meat-shop', 'MeatMart', D, 'Sep 2026', JS),
  P('blood-bank-web', 'LifePulse Care', S, 'Sep 2026', HC),
  P('furniture-shop', 'OakNest Furniture', H, 'Sep 2026', HC),
  P('Home-appliances', 'HomeEase Appliances', E, 'Sep 2026', HC),
  P('Camera-Shop', 'LensCraft Camera Store', E, 'Sep 2026', HC),
  P('Medical-shop', 'CarePlus Medical Store', S, 'Sep 2026', HC),
  P('Tea-shop', 'Tea Haven', D, 'Sep 2026', HC),
  P('Bakery-shop', 'Sweet Crumbs Bake Shop', D, 'Sep 2026', HC),
  P('Tv-shop', 'VisionTV', E, 'Sep 2026', HC),
  P('computer-shop', 'TechZone', E, 'Sep 2026', HC),
  P('coffee-shop', 'Brew & Bean', D, 'Sep 2026', HC),
  P('jewellery-website', 'Lunévia Jewels', F, 'Sep 2026', HC),
  P('bmwboot', 'BMW Store', E, 'Sep 2026', HC),
  P('Hero-section-flowers', 'Flower Hero Section', H, 'Sep 2026', HC),
  P('mobile-web', 'Mobile Shop', E, 'Aug 2026', HC),
  P('mobile-website', 'Mobile Website', E, 'Aug 2026', HC),
  P('product-website', 'Pick & Buy', F, 'Aug 2026', HC),
  P('college-form', 'FoodieHub Order Form', D, 'Aug 2026', HC),
].map((p) => ({ ...p, url: BASE + p.repo + '/' }))
export const featured = ['book-store-web', 'kid-cloth-shop', 'paint-shop', 'pet-grom-shop', 'interior-desgin-shop', 'organic-shop']
export const skills = [
  ['Languages', ['HTML', 'CSS', 'JavaScript', 'Python']],
  ['Frameworks and libraries', ['React', 'Django', 'AOS', 'MediaPipe']],
  ['Design', ['Responsive layouts', 'Mobile view']],
  ['Tools', ['Git', 'GitHub', 'GitHub Pages', 'VS Code']],
]