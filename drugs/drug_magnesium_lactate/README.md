<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium lactate&quot;}]"></div>

# magnesium lactate

- **generic name:** magnesium lactate
- **ATC codes:** `A12CC06`
- **DrugBank:** [DB14515](https://go.drugbank.com/drugs/DB14515) · **PubChem:** not captured
- **molar mass:** 202.445 g/mol (C6H10MgO6) — DrugBank
- **groups:** investigational, nutraceutical

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 00:23 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 1,496/232 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_lactate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATP1A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dogterom_2018.pdf` | Dogterom P et al., The absolute bioavailability and the ef…, Drug development and indust… (2018) | popPK | 8 | [10.1080/03639045.2018.1464020](https://doi.org/10.1080/03639045.2018.1464020) | [29638147](https://pubmed.ncbi.nlm.nih.gov/29638147) | The study reports bioavailability (AUC-based) for magnesium lactate but lacks specific compartmental PK parameters like clearance, volume, or half-life in the provided text. |

<sub>queue written 2026-09-30T00:23:51.382796+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almakaiev_2020 | irrelevant | 0 | 0 | The paper is a pharmaceutical compatibility study using DSC and FTIR, not a pharmacokinetic study, and contains no disposition parameters for magnesium lactate. |
| PD | Almakaiev_2020 | not_relevant | 0 | 0 | The paper investigates pharmaceutical compatibility (physical/chemical interactions) using DSC and FTIR, not pharmacodynamics or exposure-response relationships. |
| popPK | Dogterom_2018 | relevant | 8 | 2 | The study reports bioavailability (AUC-based) for magnesium lactate but lacks specific compartmental PK parameters like clearance, volume, or half-life in the provided text. |
| popPK | Hassan_2000 | irrelevant | 0 | 0 | The paper is a study on ESR dosimetry materials and reports physical/chemical properties (G-values, radical lifetimes), not pharmacokinetic parameters for magnesium lactate. |
| PD | Hassan_2000 | not_relevant | 0 | 0 | The paper describes ESR dosimetry physics (radical formation, G-values, thermal stability) of magnesium lactate, not pharmacodynamic or exposure-response relationships in a biological system. |
| popPK | Hijano_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of oxycodone, with magnesium lactate serving only as a co-administered excipient/comparator to assess bioavailability impact, rather than being the subject drug for PK parameter extraction. |
| popPK | Spasov_2013 | irrelevant | 0 | 0 | The study is a toxicological/efficacy trial in animals focusing on nephrolithiasis prevention, not a pharmacokinetic study, and reports no PK parameters for magnesium lactate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
