<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;methylprednisolone aceponate&quot;}]"></div>

# methylprednisolone aceponate

- **generic name:** methylprednisolone aceponate
- **ATC codes:** `D07AC14`
- **DrugBank:** [DB14643](https://go.drugbank.com/drugs/DB14643) · **PubChem:** not captured
- **molar mass:** 472.578 g/mol (C27H36O7) — DrugBank
- **groups:** approved, vet_approved

## About

Methylprednisolone aceponate is a potent topical corticosteroid used as an anti-inflammatory treatment for skin conditions. It is an approved medicine, including for veterinary use, and is applied topically to the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6824052](https://www.wikidata.org/wiki/Q6824052) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 00:29 | 0:21 | 0/0/0 | 0/1/0 | 0/0/0 | 5,309/406 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Tapfumaneyi_2022_skin_blanching](drugs/drug_methylprednisolone_aceponate/pd_Tapfumaneyi_2022_skin_blanching.md) | skin blanching ← methylprednisolone aceponate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tapfumaneyi_2022.pdf` | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the, Molecular pharmaceutics (2022) | pd | 4 | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) | [35763717](https://www.ncbi.nlm.nih.gov/pubmed/35763717) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-08T00:29:28.594191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kecskés_1992 | irrelevant | 0 | 0 | The study is a clinical efficacy trial (vasoconstrictor assay) reporting dose-response relationships, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Kecskés_1993 | irrelevant | 0 | 0 | The study evaluates the anti-inflammatory activity (pharmacodynamics) of topical methylprednisolone aceponate, not its pharmacokinetic parameters. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic (vasoconstrictor assay) study assessing potency, not a pharmacokinetic study reporting disposition parameters for methylprednisolone aceponate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
