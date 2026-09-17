<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;melphalan flufenamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MelphalanFlufenamide_Huledal2024_patients_with_relapsed_refr&quot;,&quot;label&quot;:&quot;Huledal_2024_patients with relapsed refractory multiple myeloma&quot;,&quot;href&quot;:&quot;drugs/drug_melphalan_flufenamide/MelphalanFlufenamide_Huledal2024_patients_with_relapsed_refr.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# melphalan flufenamide

- **generic name:** melphalan flufenamide
- **ATC codes:** `L01AA10`
- **DrugBank:** [DB16627](https://go.drugbank.com/drugs/DB16627)
- **groups:** approved, withdrawn

## About

**Description.** Melphalan flufenamide, also known as melflufen or J1, is a prodrug of [melphalan].[A230123,L32173] Melphalan flufenamide is more readily uptaken by cells than melphalan, and is cleaved to the active metabolite by aminopeptidases.[A230123] _In vitro_ models show that melphalan is 10 to hundreds of times more potent than melphalan.[A230123] The increased potency makes melphalan flufenamide a treatment option for patients with relapsed or refractory multiple myeloma who have attempted at least 4 lines of therapy already.[A230143,L32173]

Melphalan flufenamide was granted FDA approval on 26 February 2021.[L32173]. It has since been withdrawn from the market in the wake of the phase 3 OCEAN trial which showed a decrease in overall survival in comparison to standard treatment with [pomalidomide] and [dexamethasone] despite superior progression-free survival.[L39085, L39090]

**Indication.** Melphalan flufenamide is indicated in combination with [dexamethasone] to treat adults with relapsed or refractory multiple myeloma who have received ≥4 therapies and are refractory to at least one proteasome inhibitor, immunomodulatory agent, and anti-CD38 monoclonal antibody.[L32173] The FDA has withdrawn the drug from the market for this indication following phase 3 trial data showing decreased overall survival.[L39090]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 02:25 | 4:24 | 0/0/0 | 0/0/0 | 0/0/0 | 8,566/728 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Huledal_2024_patients with relapsed refractory multiple myeloma](drugs/drug_melphalan_flufenamide/MelphalanFlufenamide_Huledal2024_patients_with_relapsed_refr.md) | Huledal G et al., Pharmacokinetics and Metabolism of Melf…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2355](https://doi.org/10.1002/jcph.2355) |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huledal_2024.pdf` | Huledal G et al., Pharmacokinetics and Metabolism of Melf…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2355](https://doi.org/10.1002/jcph.2355) | [37752623](https://pubmed.ncbi.nlm.nih.gov/37752623) | The text explicitly reports quantitative population PK parameters (clearance, volumes, half-lives) for melphalan flufenamide and its metabolite melphalan. |
| `Xu_2024.pdf` | Xu WY et al., Cadmium causes spleen toxicity in chick…, Poultry science (2024) | pgx | 7 | [10.1016/j.psj.2024.104167](https://doi.org/10.1016/j.psj.2024.104167) | [39180780](https://www.ncbi.nlm.nih.gov/pubmed/39180780) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-15T02:25:23.110131+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ducommun_2015 | not_relevant | 0 | 0 | The paper focuses on identifying AMPK substrates (MFF and cingulin) and does not mention melphalan_flufenamide or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Guido_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on tumor metabolism and mitochondrial fission, containing no pharmacokinetic data for melphalan_flufenamide. |
| PGx | Koch_2016 | not_relevant | 0 | 0 | The paper describes a mitochondrial disease caused by MFF mutations and does not mention melphalan_flufenamide or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Toyama_2016 | not_relevant | 0 | 0 | The paper discusses mitochondrial fission and AMPK signaling, which is unrelated to the pharmacokinetics or pharmacodynamics of melphalan_flufenamide. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The paper studies cadmium toxicity in chickens and does not involve melphalan_flufenamide or human pharmacogenomics. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper studies the neuroprotective effects of butyrolactone II in C. elegans and does not involve melphalan_flufenamide or pharmacokinetic parameters. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper studies butyrolactone II, not melphalan flufenamide, and reports no pharmacodynamic parameters for the target drug. |
| PGx | Yu_2019 | not_relevant | 0 | 0 | The paper investigates mitochondrial fission and Drp1 phosphorylation, which is unrelated to the pharmacokinetics or pharmacodynamics of melphalan_flufenamide. |
| PGx | Zou_2024 | not_relevant | 0 | 0 | The paper studies the protective effects of astaxanthin on ochratoxin A-induced liver injury in broilers and does not involve melphalan_flufenamide or pharmacogenomics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_melphalan_flufenamide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
