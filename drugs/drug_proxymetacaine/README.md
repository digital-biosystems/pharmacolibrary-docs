<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01H&quot;,&quot;href&quot;:&quot;atc/S01H.md&quot;},{&quot;label&quot;:&quot;proxymetacaine&quot;}]"></div>

# proxymetacaine

- **generic name:** proxymetacaine
- **ATC codes:** `S01HA04`
- **DrugBank:** [DB00807](https://go.drugbank.com/drugs/DB00807) · **PubChem:** [CID 4935](https://pubchem.ncbi.nlm.nih.gov/compound/4935)
- **molar mass:** 294.3892 g/mol (C16H26N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Proxymetacaine (also known as proparacaine) is a local anesthetic used in ophthalmology to numb the eye. It is an approved medicine, including veterinary use, and is commonly used as an eye drop for short procedures and examinations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q600867](https://www.wikidata.org/wiki/Q600867) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:02 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 10,126/407 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=proxymetacaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chou_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cutaneous analgesia and drug interactions, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Grant_1994 | irrelevant | 0 | 0 | The paper is an in vitro toxicity study of tetracaine, proparacaine, and cocaine, and does not involve proxymetacaine or any pharmacokinetic modeling. |
| popPK | Gusovsky_1990 | irrelevant | 0 | 0 | The study investigates voltage-dependent sodium channels using proparacaine isothiocyanate, not proxymetacaine, and does not report pharmacokinetic parameters. |
| popPK | Hung_2009 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (ED50, duration of action) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Polse_1978 | irrelevant | 0 | 0 | The study examines the dose-response and duration of corneal anesthesia for benoxinate and proparacaine, not the pharmacokinetic disposition parameters of proxymetacaine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
