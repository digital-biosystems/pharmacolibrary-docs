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
| <span class="pk-badge pk-badge--green">extracted</span> | [Ataergin_2008_mobilization](drugs/drug_lenograstim/pd_Ataergin_2008_mobilization.md) | mobilization ← lenograstim · model not identified | — | Ataergin S et al., Reduced dose of lenograstim is as effic…, American journal of hematol… (2008) | [10.1002/ajh.21206](https://doi.org/10.1002/ajh.21206) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Höglund_1998_CD34_CFU_GM](drugs/drug_lenograstim/pd_H_glund_1998_CD34_CFU_GM.md) | blood stem cells ← lenograstim · stimulation effect | — | Höglund M, Glycosylated and non-glycosylated recom…, Medical oncology (Northwood… (1998) | [10.1007/BF02787205](https://doi.org/10.1007/BF02787205) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Park_2022_ANC](drugs/drug_lenograstim/pd_Park_2022_ANC.md) | absolute neutrophil count ← G-CSF · indirect response — drug stimulates the production of absolute neutrophil count | — | Park K et al., A Pharmacometric Model to Predict Chemo…, Pharmaceutics (2022) | [10.3390/pharmaceutics14050914](https://doi.org/10.3390/pharmaceutics14050914) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lenograstim) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CSF3R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
