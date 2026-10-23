<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) teboroxime&quot;}]"></div>

# technetium (99mTc) teboroxime

- **generic name:** technetium (99mTc) teboroxime
- **ATC codes:** `V09GA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m teboroxime is a diagnostic radiopharmaceutical used for imaging the heart, particularly myocardial perfusion. It is no longer in routine clinical use, having been largely discontinued after its brief period on the market.

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
| 2026-10-07 20:04 | 1:58 | 0/0/0 | 0/0/0 | 0/0/0 | 21,384/6,847 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johnson_1993.pdf` | Johnson G et al., Early myocardial clearance kinetics of…, Journal of nuclear medicine… (1993) | popPK | 8 | not captured | [8455080](https://pubmed.ncbi.nlm.nih.gov/8455080) | Canine myocardial teboroxime clearance is modeled biexponentially with numeric half-lives reported. |
| `Yamagami_1994.pdf` | Yamagami H et al., Detection of coronary artery disease by…, European journal of nuclear… (1994) | popPK | 7 | [10.1007/BF00182303](https://doi.org/10.1007/BF00182303) | [8088283](https://pubmed.ncbi.nlm.nih.gov/8088283) | Reports numeric technetium-99m teboroxime myocardial clearance rate constants in patients. |

<sub>queue written 2026-10-07T20:04:18.070996+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berman_1991 | irrelevant | 1 | 0 | This review reports no quantitative pharmacokinetic disposition parameters for technetium-99mtc-teboroxime. |
| popPK | Fang_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric pharmacokinetic parameter values for technetium-99m teboroxime. |
| popPK | Johnson_1990 | irrelevant | 2 | 1 | Reports myocardial washout half-lives, but no quantitative pharmacokinetic model or disposition parameters for teboroxime. |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | This clinical review gives only qualitative imaging and washout information, with no numeric pharmacokinetic parameter values. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | This is a human diagnostic imaging study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Johnson_1994 | irrelevant | 0 | 0 | This is a clinical imaging overview with no quantitative pharmacokinetic parameters reported. |
| popPK | Li_1991 | irrelevant | 1 | 0 | This anesthetized-dog imaging study reports perfusion findings but no quantitative pharmacokinetic disposition parameters. |
| popPK | Links_1991 | irrelevant | 1 | 3 | This is a SPECT simulation using numeric washout half-times, not a PK study reporting disposition parameters. |
| popPK | Nickles_1993 | irrelevant | 1 | 0 | Reports clearance for 94mTc-teboroxime, not the target 99mTc-teboroxime. |
| popPK | Okada_2014 | irrelevant | 1 | 0 | Canine tracer-clearance study, but it reports no quantitative PK disposition parameters; clearance curves are in a figure not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
