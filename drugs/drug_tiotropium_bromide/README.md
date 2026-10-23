<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;tiotropium bromide&quot;}]"></div>

# tiotropium bromide

- **generic name:** tiotropium bromide
- **ATC codes:** `R03AL06`, `R03AL10`, `R03BB04`
- **DrugBank:** [DB01409](https://go.drugbank.com/drugs/DB01409) · **PubChem:** [CID 5487427](https://pubchem.ncbi.nlm.nih.gov/compound/5487427)
- **molar mass:** 392.512 g/mol (C19H22NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Tiotropium bromide is an inhaled anticholinergic bronchodilator used for obstructive airway and other lung diseases. It is an approved medicine and is widely used as a maintenance inhalation treatment for breathing disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424316](https://www.wikidata.org/wiki/Q424316) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiotropium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:09 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 39,510/501 | ollama / glm-5.3-flash | 5 | 0/1 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Singh_2018.pdf` | Singh D et al., The pharmacokinetics, pharmacodynamics…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13645](https://doi.org/10.1111/bcp.13645) | [29790581](https://pubmed.ncbi.nlm.nih.gov/29790581) | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

<sub>queue written 2026-10-07T15:09:01.917703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calverley_2016 | irrelevant | 0 | 0 | This is a bronchodilator efficacy (FEV1/FVC) comparison of tiotropium devices; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported, only a mention that PK profiles were similar. |
| popPK | Keam_2004 | irrelevant | 2 | 2 | A narrative review of tiotropium's clinical efficacy with only scattered descriptive PK values (Cmax, t½, bioavailability) and no compartmental/population-PK parameters. |
| popPK | Maesen_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic (FEV1) dose-response study in COPD patients with no PK disposition parameters reported. |
| popPK | Singh_2018 | relevant | 5 | 2 | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
