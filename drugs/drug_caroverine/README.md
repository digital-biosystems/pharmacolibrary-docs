<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;caroverine&quot;}]"></div>

# caroverine

- **generic name:** caroverine
- **ATC codes:** `A03AX11`
- **DrugBank:** [DB13835](https://go.drugbank.com/drugs/DB13835) · **PubChem:** not captured
- **molar mass:** 365.477 g/mol (C22H27N3O2) — DrugBank
- **groups:** investigational

## About

Caroverine is a calcium channel blocker and excitatory amino acid antagonist classified as a drug for functional gastrointestinal disorders. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5045575](https://www.wikidata.org/wiki/Q5045575) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:36 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 3,059/111 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

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

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2003.pdf` | Chen Z et al., Pharmacokinetics of caroverine in the i…, Audiology & neuro-otology (2003) | popPK | 9 | [10.1159/000067893](https://doi.org/10.1159/000067893) | [12566692](https://pubmed.ncbi.nlm.nih.gov/12566692) | The study reports pharmacokinetics of caroverine in guinea pigs, but the provided evidence contains only qualitative descriptions of concentration levels without specific numeric parameter values (CL, V, t1/2, etc.). |

<sub>queue written 2026-10-04T12:36:35.751824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2003 | relevant | 9 | 0 | The study reports pharmacokinetics of caroverine in guinea pigs, but the provided evidence contains only qualitative descriptions of concentration levels without specific numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Haymerle_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assessment of caroverine in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Raza_2018 | irrelevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying caroverine in formulations, not a pharmacokinetic study. |
| PD | Raza_2018 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying caroverine in pharmaceutical formulations and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Schwab_2004 | irrelevant | 0 | 0 | The study is a clinical trial on tinnitus therapy using local application of caroverine, reporting subjective symptom scores rather than pharmacokinetic parameters. |
| PD | Schwab_2004 | not_relevant | 1 | 0 | The paper reports only qualitative clinical outcomes (VAS scores) for caroverine in a small clinical trial without any concentration-effect data, PK/PD modeling, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
