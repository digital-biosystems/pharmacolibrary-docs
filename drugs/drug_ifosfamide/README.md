<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;ifosfamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ifosfamide_Brain2008_reference&quot;,&quot;label&quot;:&quot;Brain_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Brain2008_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ifosfamide

- **generic name:** ifosfamide
- **ATC codes:** `L01AA06`
- **DrugBank:** [DB01181](https://go.drugbank.com/drugs/DB01181)
- **groups:** approved, investigational

## About

**Description.** Ifosfamide is a chemotherapeutic agent chemically related to the nitrogen mustards and a synthetic analog of cyclophosphamide. It is active as an alkylating agent and an immunosuppressive agent.

**Indication.** Used as a component of various chemotherapeutic regimens as third-line therapy for recurrent or refractory germ cell testicular cancer. Also used as a component of various chemotherapeutic regimens for the treatment of cervical cancer, as well as in conjunction with surgery and/or radiation therapy in the treatment of various soft tissue sarcomas. Other indications include treatment of osteosarcoma, bladder cancer, ovarian cancer. small cell lung cancer, and non-Hodgkin's lymphoma.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:21 | 2:12 | 1/0/0 | 1/0/0 | 0/0/0 | 29,952/1,399 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Brain_2008_reference](drugs/drug_ifosfamide/Ifosfamide_Brain2008_reference.md) | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brain_2008](drugs/drug_ifosfamide/pd_Brain_2008_ANC.md) | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Brain_2008](drugs/drug_ifosfamide/pd_Brain_2008_BMG.md) | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ifosfamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` inducer/substrate, `CYP2C9` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…70% to 86% of the dosed radioactivity was recovered in the urine, with about 61% of the do…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), DNA (cross-linking/alkylation), NR1I2 (activator), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nelson_1976.pdf` | Nelson RL et al., Pharmacokinetics of divided-dose ifosfa…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt1976193365](https://doi.org/10.1002/cpt1976193365) | [1261170](https://pubmed.ncbi.nlm.nih.gov/1261170) | The study reports quantitative PK parameters for ifosfamide, including a specific plasma half-life of 6.9 hours and qualitative descriptions of clearance and model fit, though specific numeric values for clearance or volume are not explicitly listed in the text. |

<sub>queue written 2026-09-15T04:19:15.969617+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carfilzomib, with ifosfamide serving only as a co-administered comparator agent in the R-ICE regimen. |
| PD | Lin_2023 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for carfilzomib, not ifosfamide; ifosfamide is only part of the background chemotherapy regimen (R-ICE) without specific PD analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 04:19 UTC</sub>
