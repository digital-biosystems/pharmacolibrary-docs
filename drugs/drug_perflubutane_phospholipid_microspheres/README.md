<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflubutane, phospholipid microspheres&quot;}]"></div>

# perflubutane, phospholipid microspheres

- **generic name:** perflubutane, phospholipid microspheres
- **ATC codes:** `V08DA06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Perflubutane phospholipid microspheres are an ultrasound contrast agent used to improve imaging of the body during ultrasound scans. It is classified as an ultrasound contrast medium and remains in use as a diagnostic imaging agent.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 19:11 | 2:02 | 0/0/0 | 0/0/0 | 0/0/0 | 11,738/4,979 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Landmark_2008.pdf` | Landmark KE et al., Pharmacokinetics of perfluorobutane fol…, Ultrasound in medicine & bi… (2008) | popPK | 8 | [10.1016/j.ultrasmedbio.2007.09.019](https://doi.org/10.1016/j.ultrasmedbio.2007.09.019) | [18096304](https://pubmed.ncbi.nlm.nih.gov/18096304) | The study reports numeric perfluorobutane half-lives, though no numeric clearance or compartmental model values are provided. |
| `Melich_2024.pdf` | Melich R et al., In Vitro and In Vivo Behavioral Evaluat…, Ultrasound in medicine & bi… (2024) | popPK | 8 | [10.1016/j.ultrasmedbio.2024.03.009](https://doi.org/10.1016/j.ultrasmedbio.2024.03.009) | [38637170](https://pubmed.ncbi.nlm.nih.gov/38637170) | Rat in-vivo persistence and half-life are studied, but no numeric disposition values are present in the provided evidence. |

<sub>queue written 2026-10-07T19:10:52.832866+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bijland_2011 | irrelevant | 0 | 0 | This is a mouse study of perfluorobutane sulfonate, a different compound, and reports no disposition parameters for the subject drug. |
| popPK | Dixon_2013 | irrelevant | 0 | 0 | This in-vitro study uses perfluorobutane microbubbles as a delivery aid, not the subject drug, and reports no pharmacokinetic parameters for it. |
| popPK | Kindberg_2003 | irrelevant | 1 | 0 | Rat cellular uptake study reports no numeric pharmacokinetic disposition parameters. |
| popPK | Lau_2020 | irrelevant | 0 | 0 | The numeric pharmacokinetic values are for perfluorobutane sulfonate, not perflubutane phospholipid microspheres. |
| popPK | Li_2017 | irrelevant | 2 | 2 | It reports numeric Cmax and AUC, but no quantitative disposition parameters or compartmental/population-PK model. |
| popPK | Li_2026 | irrelevant | 0 | 0 | Sonazoid is used as a macrophage-blocking agent, with no quantitative pharmacokinetic parameters reported. |
| popPK | Melich_2024 | relevant | 8 | 0 | Rat in-vivo persistence and half-life are studied, but no numeric disposition values are present in the provided evidence. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The evidence concerns different compounds (PFASs), not perflubutane_phospholipid_microspheres, and reports in-vitro transporter kinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
