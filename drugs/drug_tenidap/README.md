<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tenidap&quot;}]"></div>

# tenidap

- **generic name:** tenidap
- **ATC codes:** `M01AX23`
- **DrugBank:** [DB13481](https://go.drugbank.com/drugs/DB13481) · **PubChem:** not captured
- **molar mass:** 320.75 g/mol (C14H9ClN2O3S) — DrugBank
- **groups:** experimental

## About

Tenidap is a non-steroidal anti-inflammatory drug that was developed to treat inflammatory and rheumatic conditions. It is currently listed only as an experimental compound and does not appear to be an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7699849](https://www.wikidata.org/wiki/Q7699849) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Pelletier_1993_IL_1R](drugs/drug_tenidap/pd_Pelletier_1993_IL_1R.md) | interleukin-1 receptor level ← tenidap · inhibition effect | — | Pelletier JP et al., Regulation of human normal and osteoart…, Arthritis and rheumatism (1993) | [10.1002/art.1780361106](https://doi.org/10.1002/art.1780361106) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenidap).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ALOX5 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:25 | 2:51 | 0/0/0 | 0/1/0 | 0/0/0 | 41,154/1,101 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Evans_1999.pdf` | Evans L et al., A pharmacokinetic model for tenidap in…, Pharmaceutical research (1999) | popPK | 10 | [10.1023/a:1018969024101](https://doi.org/10.1023/a:1018969024101) | [10554105](https://pubmed.ncbi.nlm.nih.gov/10554105) | The abstract describes a population PK model for tenidap but does not report any numeric parameter values (CL, V, etc.), and the full text with data is not provided. |
| `Carty_1997.pdf` | Carty TJ et al., Tenidap inhibits 5-lipoxygenase product…, Inflammation research : off… (1997) | pd | 4 | [10.1007/s000110050163](https://doi.org/10.1007/s000110050163) | [9197987](https://www.ncbi.nlm.nih.gov/pubmed/9197987) | metadata signals extractable PD data (IC50) |
| `Conklyn_1990.pdf` | Conklyn MJ et al., Inhibition of IgE-mediated N-acetylgluc…, International archives of a… (1990) | pd | 4 | [10.1159/000235143](https://doi.org/10.1159/000235143) | [2210873](https://www.ncbi.nlm.nih.gov/pubmed/2210873) | metadata signals extractable PD data (IC50) |
| `Franzius_1994.pdf` | Franzius D et al., Non-specific effects of calcium entry a…, Pflugers Archiv : European… (1994) | pd | 4 | [10.1007/BF00374562](https://doi.org/10.1007/BF00374562) | [7838664](https://www.ncbi.nlm.nih.gov/pubmed/7838664) | metadata signals extractable PD data (IC50) |
| `Liu_2002.pdf` | Liu Y et al., Tenidap, a novel anti-inflammatory agen…, European journal of pharmac… (2002) | pd | 4 | [10.1016/s0014-2999(01)01590-4](https://doi.org/10.1016/s0014-2999(01)01590-4) | [11821021](https://www.ncbi.nlm.nih.gov/pubmed/11821021) | metadata signals extractable PD data (EC50) |
| `Proudman_1991.pdf` | Proudman KE et al., Are tolfenamic acid and tenidap dual in…, Agents and actions (1991) | pd | 4 | [10.1007/BF01993255](https://doi.org/10.1007/BF01993255) | [1793015](https://www.ncbi.nlm.nih.gov/pubmed/1793015) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:24:51.154142+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Evans_1999 | irrelevant | 10 | 0 | The abstract describes a population PK model for tenidap but does not report any numeric parameter values (CL, V, etc.), and the full text with data is not provided. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanism of action (ion channel opening) and does not report any population pharmacokinetic parameters such as clearance, volume, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
