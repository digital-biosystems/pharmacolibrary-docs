<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;polyestradiol phosphate&quot;}]"></div>

# polyestradiol phosphate

- **generic name:** polyestradiol phosphate
- **ATC codes:** `L02AA02`
- **DrugBank:** [DB09369](https://go.drugbank.com/drugs/DB09369) · **PubChem:** not captured
- **groups:** approved

## About

Polyestradiol phosphate is an estrogen hormone therapy used as an anticancer treatment, mainly for prostate cancer. It is an approved medicine, but it is not widely used today and is available only in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7226308](https://www.wikidata.org/wiki/Q7226308) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Johansson_2000_serum_testosterone](drugs/drug_polyestradiol_phosphate/pd_Johansson_2000_serum_testosterone.md) | serum testosterone ← estradiol · indirect response — drug inhibits the production of serum testosterone | — | Johansson CJ et al., Pharmacodynamic model of testosterone s…, The Prostate (2000) | [10.1002/1097-0045(20000615)44:1&lt;26::aid-pros4&gt;3.0.co;2-p](https://doi.org/10.1002/1097-0045(20000615)44:1&lt;26::aid-pros4&gt;3.0.co;2-p) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=polyestradiol_phosphate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | liver | `SRD5A1` modulator | DrugBank actor |
| — | prostate gland | `SRD5A1` modulator, `SRD5A2` modulator | DrugBank actor |
| — | skin | `SRD5A1` modulator | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:08 | 0:33 | 0/0/0 | 1/0/0 | 0/0/0 | 5,249/668 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johansson_2000.pdf` | Johansson CJ et al., Pharmacodynamic model of testosterone s…, The Prostate (2000) | popPK | 8 | [10.1002/1097-0045(20000615)44:1&lt;26::aid-pros4&gt;3.0.co;2-p](https://doi.org/10.1002/1097-0045(20000615)44:1<26::aid-pros4>3.0.co;2-p) | [10861754](https://pubmed.ncbi.nlm.nih.gov/10861754) | The study reports pharmacokinetic modeling of polyestradiol phosphate in humans (flip-flop mechanism), but specific numeric PK parameter values (CL, V, etc.) are not present in the provided text, only qualitative descriptions and PD values. |
| `Stege_1996.pdf` | Stege R et al., Pharmacokinetics and testosterone suppr…, The Prostate (1996) | popPK | 5 | [10.1002/(SICI)1097-0045(199605)28:5&lt;307::AID-PROS6&gt;3.0.CO;2-8](https://doi.org/10.1002/(SICI)1097-0045(199605)28:5<307::AID-PROS6>3.0.CO;2-8) | [8610057](https://pubmed.ncbi.nlm.nih.gov/8610057) | The study reports a terminal half-life for estradiol (metabolite) but lacks specific clearance, volume, or absorption rate constants required for a robust population-PK model. |

<sub>queue written 2026-10-06T22:08:17.254879+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Henriksson_1999 | relevant | 4 | 0 | The paper discusses pharmacokinetic modeling of polyestradiol phosphate dosing, but the provided abstract contains no numeric parameter values (CL, V, ka, etc.). |
| popPK | Johansson_2000 | relevant | 8 | 2 | The study reports pharmacokinetic modeling of polyestradiol phosphate in humans (flip-flop mechanism), but specific numeric PK parameter values (CL, V, etc.) are not present in the provided text, only qualitative descriptions and PD values. |
| popPK | Stege_1996 | relevant | 5 | 2 | The study reports a terminal half-life for estradiol (metabolite) but lacks specific clearance, volume, or absorption rate constants required for a robust population-PK model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
