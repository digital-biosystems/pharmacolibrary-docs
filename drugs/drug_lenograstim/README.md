<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;lenograstim&quot;}]"></div>

# lenograstim

- **generic name:** lenograstim
- **ATC codes:** `L03AA10`
- **DrugBank:** [DB13144](https://go.drugbank.com/drugs/DB13144) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Lenograstim is a granulocyte colony-stimulating factor used to stimulate white blood cell production, mainly to treat or prevent neutropenia in patients receiving cancer chemotherapy. It is an approved medicine, authorised in the European Union, and used in clinical practice for chemotherapy-induced neutropenia and related conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6523037](https://www.wikidata.org/wiki/Q6523037) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:15 | 3:47 | 0/0/0 | 3/0/0 | 0/0/0 | 142,450/2,536 | einfracz / qwen3.8-27b | 5 | 4/0 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ataergin_2008_mobilization](drugs/drug_lenograstim/pd_Ataergin_2008_mobilization.md) | mobilization ← lenograstim · model not identified | — | Ataergin S et al., Reduced dose of lenograstim is as effic…, American journal of hematol… (2008) | [10.1002/ajh.21206](https://doi.org/10.1002/ajh.21206) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Höglund_1998_CD34_CFU_GM](drugs/drug_lenograstim/pd_H_glund_1998_CD34_CFU_GM.md) | blood stem cells ← lenograstim · stimulation effect | — | Höglund M, Glycosylated and non-glycosylated recom…, Medical oncology (Northwood… (1998) | [10.1007/BF02787205](https://doi.org/10.1007/BF02787205) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Park_2022_ANC](drugs/drug_lenograstim/pd_Park_2022_ANC.md) | absolute neutrophil count ← G-CSF · indirect response — drug stimulates the production of absolute neutrophil count | — | Park K et al., A Pharmacometric Model to Predict Chemo…, Pharmaceutics (2022) | [10.3390/pharmaceutics14050914](https://doi.org/10.3390/pharmaceutics14050914) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lenograstim).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CSF3R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayashi_1999.pdf` | Hayashi N et al., Pharmacokinetic and pharmacodynamic ana…, Journal of clinical pharmac… (1999) | popPK | 9 | [10.1177/00912709922008191](https://doi.org/10.1177/00912709922008191) | [10354962](https://pubmed.ncbi.nlm.nih.gov/10354962) | The study reports a two-compartment PK model for lenograstim in humans, but the specific numeric parameter values (CL, V, Q, ka, ke) are not present in the provided text, only the model description. |

<sub>queue written 2026-10-06T23:14:57.948491+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ertelt_2024 | irrelevant | 0 | 0 | The paper is a computational study on predicting post-translational modifications (PTMs) like glycosylation and deamidation, mentioning lenograstim only as an example of a glycosylated therapeutic, and contains no pharmacokinetic parameter data. |
| popPK | Fukuda_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rhG-CSF (filgrastim/mogamizumab etc.), not lenograstim. |
| popPK | Hayashi_1999 | relevant | 9 | 2 | The study reports a two-compartment PK model for lenograstim in humans, but the specific numeric parameter values (CL, V, Q, ka, ke) are not present in the provided text, only the model description. |
| PGx | Iwamoto_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving tacrolimus and does not report pharmacogenomic effects on lenograstim. |
| popPK | Macaire_2020 | irrelevant | 0 | 0 | The study focuses on the PK/PD of FOLFIRINOX chemotherapy and the effect of G-CSF on neutrophil counts, with no specific mention of lenograstim or its PK parameters. |
| popPK | Park_2022 | irrelevant | 0 | 0 | The study models the pharmacodynamics of neutrophil counts (ANC) after chemotherapy and G-CSF administration, treating lenograstim as a binary treatment effect without estimating any pharmacokinetic parameters (CL, V, etc.) for lenograstim itself. |
| PGx | Phelip_2016 | not_relevant | 0 | 0 | The paper focuses on pharmacogenomic dose adaptation for irinotecan (UGT1A1), whereas lenograstim is only mentioned as a supportive care agent without any analysis of its PK/PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper discusses G-CSF, plerixafor, and fludarabine pharmacokinetics/immunology, but contains no data on lenograstim. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
