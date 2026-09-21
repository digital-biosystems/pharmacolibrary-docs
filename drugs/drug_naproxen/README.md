<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;naproxen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naproxen_Bjrnsson2011_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2011_reference&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Bjrnsson2011_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# naproxen

- **generic name:** naproxen
- **ATC codes:** `G02CC02`, `M01AE02`, `M01AE52`, `M01AE56`, `M01AE57`, `M02AA12`, `N02CC51`
- **DrugBank:** [DB00788](https://go.drugbank.com/drugs/DB00788)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Naproxen is classified as a nonsteroidal anti-inflammatory dug (NSAID) and was initially approved for prescription use in 1976 and then for over-the-counter (OTC) use in 1994.[A178975] It can effectively manage acute pain as well as pain related to rheumatic diseases, and has a well studied adverse effect profile.[A179098] Given its overall tolerability and effectiveness, naproxen can be considered a first line treatment for a variety of clinical situations requiring analgesia.[A179098] Naproxen is available in both immediate and delayed release formulations, in combination with sumatriptan to treat migraines, and in combination with esomeprazole to lower the risk of developing gastric ulcers.[L6582][L6583][L7309][L7312]

**Indication.** Naproxen is indicated for the management of rheumatoid arthritis, osteoarthritis, ankylosing spondylitis, polyarticular juvenile idiopathic arthritis, tendinitis, bursitis, acute gout, primary dysmenorrhea, and for the relief of mild to moderate pain.[L6582][L6583][A178975] Further, it is first-line therapy for osteoarthritis, acute gouty arthritis, dysmenorrhea, and musculoskeletal inflammation and pain.[A178975]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 6/0 | 12/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Björnsson_2011_reference](drugs/drug_naproxen/Naproxen_Bjrnsson2011_reference.md) | Björnsson MA et al., Modelling of pain intensity and informa…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03924.x](https://doi.org/10.1111/j.1365-2125.2011.03924.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naproxen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `UGT1A3` substrate, `UGT1A6` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A6` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…][L6582][L6583] Less than 5% of naproxen is excreted in the feces.[L6582][L6583]…”</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` unknown | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PNLIP (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

## Coverage

- **PubMed hits:** 65 matched, 40 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huntjens_2006 | relevant | 8 | 4 | This is a naproxen PK/PD population modeling study with compartmental PK parameters, but the actual numeric PK values are not visible here and appear to be in Table 1/figure not fully provided. |
| popPK | Sahota_2015 | relevant | 6 | 1 | Naproxen PK is discussed in a rat population PK/PD model, but the actual numeric PK parameters are not visible here and are said to be in supporting information/table. |
| popPK | Schlachter_2026 | irrelevant | 1 | 0 | The paper is about atogepant, and naproxen is only mentioned as a coadministered drug with no naproxen PK parameters shown. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_naproxen`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
