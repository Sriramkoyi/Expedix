#Expedix — Smart Travel Planner (days · budget · weather) using LangGraph

Expedix is a travel-planning assistant that generates personalized multi-day itineraries based on the number of days, user budget, and local weather. It uses LangGraph to orchestrate LLM prompts, tools, and small decision pipelines so planning is explainable, modular, and easy to extend.

This README explains what Expedix does, how it’s organized, how to run and extend it, and how LangGraph is used to coordinate planning logic.

🚀 Key features

Plan itineraries by number of days, budget tier, and live or predicted weather.

Multi-step LangGraph pipelines:

Destination & travel constraints parsing

Weather-aware activity selection

Budget-aware accommodation & dining suggestions

Daily schedule generation (morning / afternoon / evening)

Output formats: JSON, pretty console text, and shareable PDF / printable itinerary.

Extensible tool connectors (weather API, hotels/POI APIs, map links).

Configurable persona & travel style (relaxed, adventure, family, luxury).

🧭 Why LangGraph?

LangGraph helps structure complex chains of LLM prompts and deterministic logic into a graph of nodes (prompt nodes, tool nodes, decision nodes). Benefits:

Modular — swap or update nodes independently (e.g., replace weather tool).

Transparent — each node has a clear responsibility and inputs/outputs.

Testable — easier to unit-test parts of the planning pipeline.

Composable — chain multiple models / tools (geocoding → weather → POI scoring).
