<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;entrectinib&quot;}]"></div>

# entrectinib

- **generic name:** entrectinib
- **ATC codes:** `L01EX14`
- **DrugBank:** [DB11986](https://go.drugbank.com/drugs/DB11986) · **PubChem:** [CID 25141092](https://pubchem.ncbi.nlm.nih.gov/compound/25141092)
- **molar mass:** 560.65 g/mol (C31H34F2N6O2) — DrugBank
- **groups:** approved, investigational

## About

Entrectinib is a protein kinase inhibitor used to treat cancer, notably non-small-cell lung carcinoma. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25323953](https://www.wikidata.org/wiki/Q25323953) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:41 | 0:29 | 0/0/0 | 0/1/0 | 0/0/0 | 5,221/2,992 | openai / gpt-6-luna | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mercier_2022_SAEs](drugs/drug_entrectinib/pd_Mercier_2022_SAEs.md) | serious adverse events ← entrectinib · categorical (graded) response model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mercier_2022_TEAEs](drugs/drug_entrectinib/pd_Mercier_2022_TEAEs.md) | Grade ≥ 3 treatment-emergent adverse events ← entrectinib · categorical (graded) response model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mercier_2022_tumor_size_data](drugs/drug_entrectinib/pd_Mercier_2022_tumor_size_data.md) | tumor size data ← entrectinib · disease-progression model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=entrectinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALK (inhibitor), JAK2 (inhibitor), NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor), ROS1 (inhibitor), TNK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | popPK | 9 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://pubmed.ncbi.nlm.nih.gov/34495458) | The paper models entrectinib and M5 using clinical data, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-06T23:41:30.670852+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Djebli_2021 | relevant | 9 | 1 | The paper models entrectinib and M5 using clinical data, but no numeric disposition parameter values are provided in the evidence. |
| popPK | González-Sales_2021 | relevant | 7 | 0 | The evidence indicates pharmacokinetic assessment, but includes only a sampling scheme and no numeric disposition parameters. |
| popPK | Mercier_2022 | irrelevant | 2 | 0 | This is an exposure-response analysis; disposition parameters come from a previously described model and their numeric values are not provided here. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
