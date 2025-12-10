# **Expedix — Smart Travel Planner (Days · Budget · Weather) using LangGraph**

Expedix is a travel-planning assistant that generates personalized multi-day itineraries based on the number of days, user budget, and local weather. It uses **LangGraph** to orchestrate LLM prompts, tools, and decision pipelines so planning is transparent, modular, and easy to extend.

This README explains what Expedix does, how it’s organized, how to run it, and how LangGraph is used to coordinate planning logic.

---

## 🚀 **Key Features**

- Generate itineraries using:
  - **Trip duration**
  - **Budget tier** (low, moderate, luxury)
  - **Live or forecast weather**

- Multi-step LangGraph pipeline:
  - Destination & travel constraints parsing  
  - Weather-aware activity selection  
  - Budget-based accommodation & dining suggestions  
  - Daily itinerary generation (Morning / Afternoon / Evening)

- Output formats:
  - **JSON**
  - Readable console text
  - **PDF / printable itinerary**

- Extensible tool connectors:
  - Weather APIs  
  - POI & attractions APIs  
  - Hotels & booking suggestions  
  - Map links  

- Customizable travel personas:
  - Relaxed  
  - Adventure  
  - Family  
  - Luxury  

---

## 🧭 **Why LangGraph?**

LangGraph enables Expedix to model its planning pipeline as a graph of small, reusable nodes. Benefits:

- **Modular** — update nodes independently (e.g., change the weather provider)
- **Transparent** — each node has clear inputs/outputs
- **Testable** — easily mock tools for unit testing
- **Composable** — chain tools + LLMs:

