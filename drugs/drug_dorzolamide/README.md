<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;dorzolamide&quot;}]"></div>

# dorzolamide

- **generic name:** dorzolamide
- **ATC codes:** `S01EC03`, `S01EE52`
- **DrugBank:** [DB00869](https://go.drugbank.com/drugs/DB00869) · **PubChem:** [CID 5284549](https://pubchem.ncbi.nlm.nih.gov/compound/5284549)
- **molar mass:** 324.44 g/mol (C10H16N2O4S3) — DrugBank
- **groups:** approved, investigational

## About

Dorzolamide is a carbonic anhydrase inhibitor eye drop used to treat glaucoma, especially open-angle glaucoma. It is an approved medicine, widely used as an antiglaucoma ophthalmological preparation, and is also available in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415401](https://www.wikidata.org/wiki/Q415401) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 20,675/612 | einfracz / qwen3.8-27b | 5 | 2/0 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 72 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmitz_1999.pdf` | Schmitz K et al., Population pharmacokinetics of 2% topic…, Investigative ophthalmology… (1999) | popPK | 9 | not captured | [10359348](https://pubmed.ncbi.nlm.nih.gov/10359348) | The paper reports specific pharmacokinetic parameters (half-life of absorption and elimination, peak concentrations) for dorzolamide in human aqueous humor. |

<sub>queue written 2026-10-07T18:46:17.034055+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of a fixed-dose combination for glaucoma and does not report pharmacokinetic parameters for dorzolamide. |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing intraocular pressure (IOP) reduction and tolerability, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2, etc.) for dorzolamide. |
| popPK | Kitazawa_1994 | irrelevant | 0 | 0 | The paper is a clinical dose-response study reporting intraocular pressure changes and side effects, with no pharmacokinetic parameters or numeric PK values reported. |
| popPK | Lippa_1992 | irrelevant | 0 | 0 | The study focuses on intraocular pressure response and duration of action (pharmacodynamics) rather than quantifying pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Strahlman_1996 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (IOP reduction) and mechanism data (carbonic anhydrase activity) but does not provide quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for dorzolamide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
