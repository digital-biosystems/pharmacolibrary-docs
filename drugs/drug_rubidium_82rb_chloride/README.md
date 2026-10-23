<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;rubidium (82Rb) chloride&quot;}]"></div>

# rubidium (82Rb) chloride

- **generic name:** rubidium (82Rb) chloride
- **ATC codes:** `V09GX04`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Rubidium chloride is a diagnostic radiopharmaceutical used for imaging of the cardiovascular system, particularly the heart. It is classified as a cardiovascular diagnostic radiopharmaceutical and is used in nuclear medicine imaging procedures.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:54 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 16,533/3,819 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tahari_2014.pdf` | Tahari AK et al., Initial human experience with Rubidium-…, Journal of medical imaging… (2014) | popPK | 8 | [10.1111/1754-9485.12079](https://doi.org/10.1111/1754-9485.12079) | [24529052](https://pubmed.ncbi.nlm.nih.gov/24529052) | Human renal imaging reports numeric K1 and k2 values from a two-compartment kinetic model. |
| `Jarden_1994.pdf` | Jarden JO, Pathophysiological aspects of malignant…, Acta neurologica Scandinavi… (1994) | popPK | 7 |  | [7941966](https://pubmed.ncbi.nlm.nih.gov/7941966) | Human 82Rb transport and permeability parameters were determined, but their numeric values are not provided in the evidence. |

<sub>queue written 2026-10-07 19:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fujita_2021 | irrelevant | 1 | 0 | Rubidium-82 is used as a diagnostic PET tracer, and no numeric parameter values are provided. |
| popPK | Gregg_2021 | irrelevant | 1 | 0 | This human imaging study reports myocardial blood-flow and tracer-uptake measures, not rubidium-82 pharmacokinetic disposition parameters. |
| popPK | Jarden_1994 | relevant | 7 | 0 | Human 82Rb transport and permeability parameters were determined, but their numeric values are not provided in the evidence. |
| popPK | Knešaurek_2009 | irrelevant | 1 | 1 | This human PET perfusion study uses 82Rb as a diagnostic tracer and reports blood-flow repeatability, not drug disposition parameters. |
| popPK | Maddahi_2014 | irrelevant | 0 | 0 | This is a review and reports no quantitative pharmacokinetic disposition parameters for rubidium-82. |
| popPK | Rigo_1986 | irrelevant | 0 | 0 | Rubidium-82 is used as a perfusion tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Yu_2016 | irrelevant | 2 | 6 | Rubidium-82 is used as a diagnostic tracer, and only percentage changes in modeled K1 are reported. |
| popPK | Zünkeler_1996 | irrelevant | 2 | 1 | Rubidium-82 is used as a PET tracer to measure BBB permeability, not to report its own pharmacokinetic disposition parameters. |
| popPK | vom_2001 | irrelevant | 0 | 0 | This overview mentions Rb-82 as a perfusion tracer but reports no quantitative pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brubidium_82rb_chloride%5D&body=Drug%3A%20rubidium_82rb_chloride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rubidium_82rb_chloride/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
