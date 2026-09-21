<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxycodone_Saari2012_reference&quot;,&quot;label&quot;:&quot;Saari_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Saari2012_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# oxycodone

- **generic name:** oxycodone
- **ATC codes:** `N02AA05`, `N02AA55`, `N02AA56`, `N02AJ17`, `N02AJ18`, `N02AJ19`
- **DrugBank:** [DB00497](https://go.drugbank.com/drugs/DB00497)
- **groups:** approved, illicit, investigational

## About

**Description.** Oxycodone is a semisynthetic opioid analgesic derived from thebaine in Germany in 1917.[A178696] It is currently indicated as an immediate release product for moderate to severe pain and as an extended release product for chronic moderate to severe pain requiring continuous opioid analgesics for an extended period.[Label] The first oxycodone containing product, Percodan, was approved by the FDA on April 12, 1950.[L6460]

**Indication.** Oxycodone is indicated for the treatment of moderate to severe pain.[Label] There is also an extended release formulation indicated for chronic moderate to severe pain requiring continuous opioid analgesics for an extended period.[Label]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 06:15 | 5:45 | 1/1/0 | 0/0/0 | 0/0/0 | 146,180/14,807 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Shi_2026_reference](drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md) | Shi S et al., Pharmacokinetics of intravenous oxycodo…, Frontiers in medicine (2026) | [10.3389/fmed.2026.1834903](https://doi.org/10.3389/fmed.2026.1834903) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Saari_2012_reference](drugs/drug_oxycodone/Oxycodone_Saari2012_reference.md) | Saari TI et al., Oxycodone clearance is markedly reduced…, British journal of anaesthe… (2012) | [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxycodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Oxycodone and its metabolites are eliminated in the urine.[Label] Unbound noroxycodone mak…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1B (inhibitor), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

## Coverage

- **PubMed hits:** 95 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ing_2012 | irrelevant | 1 | 0 | The paper is a review of PK/PD modeling in analgesics that discusses oxycodone qualitatively but does not report original quantitative disposition parameters (CL, V, etc.) for oxycodone. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that discusses PK/PD concepts and models for opioids, including oxycodone, but does not report specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect data for oxycodone in the provided text. |
| popPK | Jansen_2026 | relevant | 9 | 1 | The study reports population PK parameters for oxycodone, but the specific numeric values are located in the Supplemental Digital Content which is not provided. |
| popPK | Shram_2023 | irrelevant | 0 | 0 | The study evaluates the abuse potential of esmethadone using oxycodone only as a positive control, and no quantitative pharmacokinetic parameters (CL, V, etc.) for oxycodone are reported in the provided text. |
| PD | Shram_2023 | not_relevant | 0 | 0 | The paper evaluates the abuse potential of esmethadone using oxycodone as a positive control, but it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., EC50, Emax) for oxycodone itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_oxycodone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
