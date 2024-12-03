# from fastapi import FastAPI
# from .database import engine
# from . import models
# from .models import Base
# from .routers import items, orders

# app = FastAPI()

# app.include_router(items.router)
# app.include_router(orders.router)
# #Create databse tables on startup
# Base.metadata.create_all(bind=engine)

# @app.get("/")
# def read_root():
#     return {"message": "Wok and Fire Backend - Working!"}

# main.py
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import stripe
# main.py (add at the top)
from dotenv import load_dotenv
load_dotenv()


# Initialize FastAPI app
app = FastAPI()

# CORS configuration (adjust the origins as needed)
origins = [
    "http://localhost:3000",  # React app
    # Add other allowed origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Stripe configuration
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")  # Set this in your environment

# Pydantic model for order details
class OrderItem(BaseModel):
    name: str
    price: float
    quantity: int = 1  # Default quantity to 1

class CreateCheckoutSessionRequest(BaseModel):
    items: list[OrderItem]

@app.post("/create-checkout-session")
def create_checkout_session(request: CreateCheckoutSessionRequest):
    try:
        # Convert items to Stripe's expected format
        line_items = []
        for item in request.items:
            # Stripe expects price in cents
            price_in_cents = int(item.price * 100)
            line_items.append({
                'price_data': {
                    'currency': 'gbp',
                    'product_data': {
                        'name': item.name,
                    },
                    'unit_amount': price_in_cents,
                },
                'quantity': item.quantity,
            })

        # Create a Checkout Session
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=line_items,
            mode='payment',
            success_url="http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url="http://localhost:3000/cancel",
        )

        return {"url": checkout_session.url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
