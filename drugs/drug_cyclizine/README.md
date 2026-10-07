<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;cyclizine&quot;}]"></div>

# cyclizine

- **generic name:** cyclizine
- **ATC codes:** `R06AE03`
- **DrugBank:** [DB01176](https://go.drugbank.com/drugs/DB01176) · **PubChem:** [CID 6726](https://pubchem.ncbi.nlm.nih.gov/compound/6726)
- **molar mass:** 266.3807 g/mol (C18H22N2) — DrugBank
- **groups:** approved, withdrawn

## About

Cyclizine is an antihistamine used to treat nausea and vomiting. It remains in use and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q867308](https://www.wikidata.org/wiki/Q867308) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:19 | 0:22 | 0/0/0 | 0/0/0 | 0/0/0 | 51,314/580 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyclizine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `SULT1E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Saleem_2023 | irrelevant | 0 | 0 | The paper is an analytical chemistry study on UV assay methods for cyclizine in mixtures, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Conner_1976 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Fares_2022 | irrelevant | 4 | 2 | The paper is primarily a spectrofluorimetric analytical method study; while it reports some non-compartmental PK values for cyclizine in a small volunteer study, it lacks a population-PK model and the specific numeric values for clearance and volume are largely missing from the provided evidence (referenced in a table/figure not fully included). |
| popPK | Mohammadi_2004 | irrelevant | 0 | 0 | The paper describes an analytical method (CZE) for quantifying cyclizine in pharmaceutical formulations (in vitro), not a pharmacokinetic study in biological subjects. |
| popPK | Ruben_1989 | irrelevant | 0 | 0 | The study is a qualitative interview regarding cyclizine abuse in humans and reports no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Saad_2022 | irrelevant | 0 | 0 | This is a chemometric study focused on analytical quantification methods, not a pharmacokinetic study. |
| popPK | Walker_1985 | irrelevant | 0 | 0 | The paper describes a liquid chromatographic assay method for dosage forms and does not contain pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
