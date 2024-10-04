from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import models, schemas, crud
from app.database import get_db

router = APIRouter()

@router.get("/items/")
def read_items(db: Session = Depends(get_db)):
    items = crud.get_items(db)
    return items
