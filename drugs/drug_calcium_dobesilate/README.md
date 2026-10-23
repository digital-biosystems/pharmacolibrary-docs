<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;calcium dobesilate&quot;}]"></div>

# calcium dobesilate

- **generic name:** calcium dobesilate
- **ATC codes:** `C05BX01`
- **DrugBank:** [DB13529](https://go.drugbank.com/drugs/DB13529) · **PubChem:** none
- **groups:** investigational

## About

Calcium dobesilate is a vasoprotective drug that has been used to treat vein problems such as varicose veins and related circulatory disorders. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5018825](https://www.wikidata.org/wiki/Q5018825) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | [Alda_2011_MDA](drugs/drug_calcium_dobesilate/pd_Alda_2011_MDA.md) | Malondialdehyde ← calcium dobesilate · direct Emax (saturable) effect | — | Alda O et al., In vitro effect of calcium dobesilate o…, Phlebology (2011) | [10.1258/phleb.2010.010052](https://doi.org/10.1258/phleb.2010.010052) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | [Alda_2011_TAS](drugs/drug_calcium_dobesilate/pd_Alda_2011_TAS.md) | Total antioxidant status ← calcium dobesilate · direct Emax (saturable) effect | — | Alda O et al., In vitro effect of calcium dobesilate o…, Phlebology (2011) | [10.1258/phleb.2010.010052](https://doi.org/10.1258/phleb.2010.010052) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:07 | 1:11 | 0/0/0 | 1/0/0 | 0/0/0 | 40,367/1,087 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruiz_1998.pdf` | Ruiz E et al., Calcium dobesilate increased endotheliu…, General pharmacology (1998) | pd | 4 | [10.1016/s0306-3623(97)00343-1](https://doi.org/10.1016/s0306-3623(97)00343-1) | [9559323](https://www.ncbi.nlm.nih.gov/pubmed/9559323) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06 21:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbott_2024 | irrelevant | 0 | 0 | The paper is a pharmacological study on potassium channels (Kv7.2/3) and does not report any pharmacokinetic parameters (CL, V, etc.) for calcium dobesilate, which is only mentioned as a structural analog. |
| popPK | Alda_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of oxidative stress markers, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Altinoz_2018 | not_relevant | 0 | 0 | The paper discusses aspirin and its metabolite gentisic acid, not calcium dobesilate, and does not report pharmacogenomic effects on PK/PD parameters for the target drug. |
| popPK | Brunet_1998 | irrelevant | 0 | 0 | The paper reports in vitro antioxidant properties (IC50 values) rather than pharmacokinetic disposition parameters. |
| popPK | Cuevas_2005 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Cuevas_2005 | not_relevant | 0 | 0 | The provided text contains no abstract or content, making it impossible to verify any pharmacodynamic or exposure-response data for calcium dobesilate. |
| popPK | Mingqi_2026 | irrelevant | 0 | 0 | The study focuses on analytical interference in urinary protein detection methods and reports only urinary drug concentrations, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Ruiz_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular effects, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcium_dobesilate%5D&body=Drug%3A%20calcium_dobesilate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_calcium_dobesilate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
