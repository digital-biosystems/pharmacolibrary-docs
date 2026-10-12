<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;pramocaine&quot;}]"></div>

# pramocaine

- **generic name:** pramocaine
- **ATC codes:** `C05AD07`, `D04AB07`
- **DrugBank:** [DB09345](https://go.drugbank.com/drugs/DB09345) · **PubChem:** [CID 4886](https://pubchem.ncbi.nlm.nih.gov/compound/4886)
- **molar mass:** 293.407 g/mol (C17H27NO3) — DrugBank
- **groups:** approved

## About

Pramocaine is a topical local anesthetic used to relieve pain and itching from hemorrhoids, contact dermatitis, and other minor skin conditions. It is an approved drug, used mainly in topical preparations for hemorrhoids and skin itching.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1240076](https://www.wikidata.org/wiki/Q1240076) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:51 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 6,098/190 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hirao_2018.pdf` | Hirao R et al., Compound action potential inhibition pr…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2017.11.047](https://doi.org/10.1016/j.ejphar.2017.11.047) | [29203420](https://www.ncbi.nlm.nih.gov/pubmed/29203420) | metadata signals extractable PD data (IC50) |
| `Magori_2019.pdf` | Magori N et al., Inhibition by general anesthetic propof…, Naunyn-Schmiedeberg's archi… (2019) | pd | 4 | [10.1007/s00210-018-01596-w](https://doi.org/10.1007/s00210-018-01596-w) | [30519707](https://www.ncbi.nlm.nih.gov/pubmed/30519707) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:50:56.242062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hirao_2018 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Hirao_2018 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on nerve conduction and only mentions pramoxine (a different compound) as a comparator; it does not report any pharmacodynamic data or parameters for pramocaine. |
| popPK | Magori_2019 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Magori_2019 | not_relevant | 0 | 0 | The paper focuses on propofol and its analogs; pramocaine is not mentioned, and no PD parameters for it are reported. |
| popPK | Pinarbasli_2025 | irrelevant | 0 | 0 | The study is an in vitro formulation and release profile analysis, not a pharmacokinetic study reporting disposition parameters. |
| PD | Pinarbasli_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro release and formulation stability, not pharmacodynamic or exposure-response relationships. |
| popPK | Weinberger_1980 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC) for pramoxine (a different drug) in a foam dosage form and contains no pharmacokinetic data. |
| PD | Weinberger_1980 | not_relevant | 0 | 0 | The paper describes an HPLC analytical method for pramoxine and contains no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
