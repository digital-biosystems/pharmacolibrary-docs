<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;etranacogene dezaparvovec&quot;}]"></div>

# etranacogene dezaparvovec

- **generic name:** etranacogene dezaparvovec
- **ATC codes:** `B02BD16`
- **DrugBank:** [DB16791](https://go.drugbank.com/drugs/DB16791) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Etranacogene dezaparvovec is a gene therapy used to treat hemophilia B. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q115409056](https://www.wikidata.org/wiki/Q115409056) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 21:35 | 3:13 | 0/0/0 | 0/1/0 | 0/0/0 | 115,606/1,819 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Cao_2025_IgG](drugs/drug_etranacogene_dezaparvovec/pd_Cao_2025_IgG.md) | IgG ← KJ103 · delayed effect through an effect compartment | — | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etranacogene_dezaparvovec) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F9 (gene replacement).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anguela_2024 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety outcomes (bleeding rates, FIX activity) rather than a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Astermark_2025 | irrelevant | 0 | 0 | The paper evaluates laboratory assay variability (OSA vs CA) for measuring Factor IX activity, not the pharmacokinetic disposition parameters (CL, V, etc.) of the gene therapy vector itself. |
| PGx | Astermark_2025 | not_relevant | 0 | 0 | The paper evaluates the performance of laboratory assays (OSA vs CA) for measuring Factor IX activity, not the effect of a gene variant on PK/PD parameters. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not etranacogene_dezaparvovec, which is only mentioned as a context for AAV gene therapy. |
| popPK | García-Diego_2024 | irrelevant | 0 | 0 | The paper is a multi-criteria decision analysis (MCDA) for value assessment and does not report any pharmacokinetic parameters or quantitative disposition data for etranacogene dezaparvovec. |
| popPK | Klamroth_2024 | irrelevant | 0 | 0 | The paper is an indirect treatment comparison of efficacy (bleeding rates) and does not report any pharmacokinetic parameters for etranacogene dezaparvovec. |
| popPK | Puzzo_2025 | irrelevant | 0 | 0 | The paper is a review of liver-directed gene therapy that mentions etranacogene dezaparvovec only as an approved product without reporting any quantitative pharmacokinetic parameters. |
| popPK | Rana_2025 | irrelevant | 0 | 0 | The paper is a narrative review of clinical trials focusing on efficacy and immunogenicity, and it does not report quantitative pharmacokinetic parameters for etranacogene dezaparvovec. |
| popPK | Serrafi_2026 | irrelevant | 0 | 0 | The paper is a narrative review of gene therapy in hemophilia that discusses etranacogene dezaparvovec clinically but does not report any quantitative pharmacokinetic parameters (CL, V, Q, ka, etc.). |
| PD | Wojciechowski_2025 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for fidanacogene elaparvovec, not etranacogene dezaparvovec. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | The paper is a review on pharmacovigilance in cell and gene therapy and does not report quantitative pharmacokinetic parameters for etranacogene_dezaparvovec. |
| PD | Youssef_2026 | not_relevant | 0 | 0 | The paper is a review on pharmacovigilance and safety monitoring for cell and gene therapies; it does not report any PK/PD data, exposure-response relationships, or numeric PD parameters for etranacogene dezaparvovec. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
