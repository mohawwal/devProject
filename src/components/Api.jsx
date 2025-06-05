import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ApiList = [
  {
    title: "Webby - 2024 Paystack Integration",
    description:
      "Complete payment processing integration with Paystack API. Implemented secure transaction handling, webhook verification, and automated payment confirmations.",
    code: `// Initialize Payment
const initializePayment = async (amount, email) => {
  const response = await fetch('/api/paystack/initialize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount * 100, email })
  });
  return response.json();
};

// Verify Payment
app.post('/webhook/paystack', (req, res) => {
  const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body)).digest('hex');
  if (hash === req.headers['x-paystack-signature']) {
    const event = req.body;
    if (event.event === 'charge.success') {
      // Handle successful payment
      updateOrderStatus(event.data.reference, 'paid');
    }
  }
  res.sendStatus(200);
});`,
    github: "https://github.com/yourusername/webby-paystack-integration",
  },
  {
    title: "OrderFlow - Stripe Payment Gateway",
    description:
      "Full-featured e-commerce payment solution using Stripe API. Built custom checkout flows, recurring billing system, and multi-currency support.",
    code: `// Create Payment Intent
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency = 'usd' } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      automatic_payment_methods: { enabled: true }
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Create Subscription
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: priceId }],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent']
});`,
    github: "https://github.com/yourusername/orderflow-stripe-gateway",
  },
  {
    title: "AuthGuard - Firebase Authentication",
    description:
      "Robust user authentication system leveraging Firebase Auth services. Implemented social login, email verification, and role-based access control.",
    code: `// Firebase Auth Setup
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up User
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Protected Route Middleware
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};`,
    github: "https://github.com/yourusername/authguard-firebase-auth",
  },
  {
    title: "DataSync - MongoDB Atlas API",
    description:
      "High-performance database integration with MongoDB Atlas. Built RESTful APIs with advanced querying, data aggregation pipelines, and real-time synchronization.",
    code: `// MongoDB Connection & CRUD Operations
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

// GET API with Aggregation
app.get('/api/users/analytics', async (req, res) => {
  try {
    const pipeline = [
      { $match: { status: 'active' } },
      { $group: { _id: '$department', count: { $sum: 1 }, avgAge: { $avg: '$age' } } },
      { $sort: { count: -1 } }
    ];
    const result = await db.collection('users').aggregate(pipeline).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Real-time Change Streams
const changeStream = db.collection('orders').watch();
changeStream.on('change', (change) => {
  io.emit('orderUpdate', change);
});`,
    github: "https://github.com/yourusername/datasync-mongodb-atlas",
  },
  {
    title: "CloudStore - AWS S3 Integration",
    description:
      "Comprehensive file storage solution using AWS S3 services. Implemented secure file uploads, image optimization, CDN distribution, and automated backup systems.",
    code: `// AWS S3 File Upload
const AWS = require('aws-sdk');
const multer = require('multer');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Upload File
app.post('/upload', upload.single('file'), async (req, res) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: \`uploads/\${Date.now()}-\${req.file.originalname}\`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: 'public-read'
  };
  
  try {
    const result = await s3.upload(params).promise();
    res.json({ url: result.Location, key: result.Key });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate Presigned URL
const getSignedUrl = (key) => {
  return s3.getSignedUrl('getObject', { Bucket: bucketName, Key: key, Expires: 3600 });
};`,
    github: "https://github.com/yourusername/cloudstore-aws-s3",
  },
];

const Api = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  const [showArsenalDetails, setShowArsenalDetails] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen my-10 text-[#aaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <p className="text-xs">
            BACKEND X <br /> INTEGRATION (5)
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <div className="border-t-[0.5px] border-[#aaa]">
              {ApiList.map((api, index) => (
                <div key={index} className="border-b-[0.5px] border-[#aaa]">
                  <div
                    className="flex items-center justify-between py-3 cursor-pointer hover:text-[#777] transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="text-sm font-semibold">{api.title}</p>
                    <button
                      className={`transform transition-transform duration-200 flex-shrink-0 ml-2 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  {openIndex === index && (
                    <div className="pb-4 text-sm animate-in slide-in-from-top-1 duration-200">
                      <div className="mb-4 text-[#888] leading-relaxed">
                        {api.description}
                      </div>

                      <div className="mb-4">
                        <h4 className="text-[#bbb] font-semibold mb-2">
                          Code Example:
                        </h4>
                        <pre className="bg-[#1a1a1a] border border-[#333] rounded-md p-3 overflow-x-auto text-xs">
                          <code className="text-[#90ee90]">{api.code}</code>
                        </pre>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-[#888] text-xs">GitHub:</span>
                        <a
                          href={api.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a9eff] hover:text-[#6bb6ff] text-xs underline transition-colors break-all"
                        >
                          {api.github}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-4 space-y-6">
              <div className="bg-[#111] rounded-lg p-4">
                <h2 className="text-[#bbb] font-semibold mb-3 text-sm uppercase tracking-wide">
                  MUSIC & VIBES
                </h2>
                <div className="text-[13.5px] text-[#888] leading-relaxed space-y-2">
                  <p>
                    Won't like to be identified as an FC, but regardless, I fuck with Wizkid so bad. 
                    "Made in Lagos" is the ultimate coding soundtrack - pure vibes that keep the flow going.
                  </p>
                  {showMusicDetails && (
                    <div className="animate-in slide-in-from-top-1 duration-200 space-y-2">
                      <p>
                        I'm drawn to songs with explicit content and raw energy like Shalipopi's "Lahu" - 
                        something about that unfiltered expression just hits different when you're deep in code.
                      </p>
                      <p>
                        My playlist is a chaotic mix of Afrobeats, drill, and whatever gets the dopamine flowing. 
                        Burna Boy's "Last Last" on repeat during debugging sessions, Rema's "Calm Down" for late-night 
                        deployments, and some UK drill when the imposter syndrome kicks in.
                      </p>
                      <p>
                        Music isn't just background noise - it's fuel. The right track can turn a frustrating 
                        bug hunt into a flow state, or transform a mundane CRUD operation into art.
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowMusicDetails(!showMusicDetails)}
                    className="text-[#4a9eff] hover:text-[#6bb6ff] text-xs underline transition-colors mt-2"
                  >
                    {showMusicDetails ? 'Show Less' : 'View More'}
                  </button>
                </div>
                
                {showMusicDetails && (
                  <div className="mt-4 pt-3 border-t border-[#333]">
                    <p className="text-[#888] text-xs mb-2">Current Coding Playlist:</p>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1db954] hover:bg-[#1ed760] text-black text-xs px-3 py-2 rounded-full transition-colors font-medium"
                    >
                      <span>🎵</span>
                      Listen on Spotify
                    </a>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h2 className="text-[#bbb] font-semibold mb-3 text-sm uppercase tracking-wide">
                  ARSENAL FC
                </h2>
                <div className="text-[13.5px] text-[#888] leading-relaxed space-y-2">
                  <p>
                    As an Arsenal fan, I've mastered the art of debugging under pressure - 
                    because supporting Arsenal is basically error handling in real life.
                  </p>
                  {showArsenalDetails && (
                    <div className="animate-in slide-in-from-top-1 duration-200 space-y-2">
                      <p>
                        Every season starts with hope (like starting a new project), hits unexpected bugs 
                        (injuries to key players), faces deployment issues (VAR decisions), and somehow 
                        we still believe next time will be different.
                      </p>
                      <p>
                        The parallels are uncanny: Arteta's tactical approach is like clean code architecture - 
                        methodical, patient, building from the foundation up. Sometimes it's beautiful, 
                        sometimes it's frustrating, but the process matters.
                      </p>
                      <p>
                        Being a Gooner has taught me resilience in coding. When your build fails for the 
                        10th time, just remember we've been waiting for a Premier League title since 2004. 
                        Perspective, my friend.
                      </p>
                      <p className="text-[#ff6b6b]">
                        COYG! 🔴⚪️
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowArsenalDetails(!showArsenalDetails)}
                    className="text-[#4a9eff] hover:text-[#6bb6ff] text-xs underline transition-colors mt-2"
                  >
                    {showArsenalDetails ? 'Show Less' : 'View More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;