<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01B&quot;,&quot;href&quot;:&quot;atc/S01B.md&quot;},{&quot;label&quot;:&quot;nepafenac&quot;}]"></div>

# nepafenac

- **generic name:** nepafenac
- **ATC codes:** `S01BC10`
- **DrugBank:** [DB06802](https://go.drugbank.com/drugs/DB06802) · **PubChem:** [CID 151075](https://pubchem.ncbi.nlm.nih.gov/compound/151075)
- **molar mass:** 254.2839 g/mol (C15H14N2O2) — DrugBank
- **groups:** approved, investigational

## About

Nepafenac is a non-steroidal anti-inflammatory eye drop used to treat pain and inflammation after eye surgery. It is an approved medicine, authorised in the European Union, and is used in ophthalmology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q684379](https://www.wikidata.org/wiki/Q684379) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:37 | 0:22 | 0/0/0 | 0/0/0 | 0/0/0 | 29,064/824 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nepafenac) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appelrath_2017 | irrelevant | 0 | 0 | The paper is a review of regulatory benefit assessments and contains no pharmacokinetic parameters for nepafenac. |
| popPK | Kontadakis_2018 | irrelevant | 0 | 0 | This is a clinical efficacy study focusing on pain management and visual outcomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ragab_2018 | irrelevant | 0 | 0 | The paper is an analytical chemistry study describing a spectrofluorimetric method for quantifying nepafenac in dosage forms, not a pharmacokinetic study. |
| popPK | Saakyan_2020 | irrelevant | 0 | 0 | The paper is an ex vivo chemosensitivity study evaluating cytotoxicity, not a pharmacokinetic study of nepafenac. |
| popPK | Shelley_2018 | relevant | 4 | 1 | Study reports qualitative ocular distribution (tissue levels/detectability) and relative permeation rates rather than quantitative population PK parameters (CL, V, ka, t1/2). |
| popPK | Shelley_2018_2 | irrelevant | 2 | 0 | The study is a pharmaceutical formulation and ex vivo permeation/retention study without in vivo pharmacokinetic modeling or quantitative disposition parameters (CL, V, ka, half-life) for the systemic or local PK profile. |
| popPK | Usman_2014 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring nepafenac concentration and contains no pharmacokinetic data. |
| popPK | Vincze_2023 | irrelevant | 2 | 0 | The study focuses on formulation characterization (viscosity, mucoadhesion, release, permeability) and ex vivo distribution via Raman mapping rather than reporting quantitative population-pharmacokinetic parameters like clearance or volume. |
| popPK | Walters_2007 | irrelevant | 0 | 0 | The study reports only qualitative rankings and statistical significance for peak concentration and AUC without providing the specific numeric quantitative PK parameter values required for extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
