<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibornuride&quot;}]"></div>

# glibornuride

- **generic name:** glibornuride
- **ATC codes:** `A10BB04`
- **DrugBank:** [DB08962](https://go.drugbank.com/drugs/DB08962) · **PubChem:** [CID 12818200](https://pubchem.ncbi.nlm.nih.gov/compound/12818200)
- **molar mass:** 366.48 g/mol (C18H26N2O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Glibornuride is a sulfonylurea that was used to lower blood sugar in people with diabetes. It has been withdrawn and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3772225](https://www.wikidata.org/wiki/Q3772225) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-05 01:11 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 27,653/553 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dubach_1975.pdf` | Dubach UC et al., [On the multiple-dose kinetics of glibo…, Arzneimittel-Forschung (1975) | popPK | 8 | not captured | [130138](https://pubmed.ncbi.nlm.nih.gov/130138) | The study reports multiple-dose pharmacokinetics of glibornuride in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Zini_1991.pdf` | Zini S et al., Characterization of sulfonylurea recept…, The Journal of pharmacology… (1991) | pd | 4 | not captured | [1658303](https://www.ncbi.nlm.nih.gov/pubmed/1658303) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T01:11:17.752119+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubach_1975 | relevant | 8 | 0 | The study reports multiple-dose pharmacokinetics of glibornuride in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Haupt_1971_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of dose-response and insulin secretion, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Keller_1986 | irrelevant | 0 | 0 | The study investigates insulin sensitivity and glucose metabolism in type 1 diabetics using glibornuride as a therapeutic agent, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for glibornuride. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for K(ATP) channels, not a pharmacokinetic study, and glibornuride is used only as a comparator ligand. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Skillman_1981 | irrelevant | 1 | 0 | This is a review article that discusses the pharmacology of sulfonylureas generally and mentions glibornuride only as a comparator, without providing specific quantitative pharmacokinetic parameter values for it. |
| popPK | Stoeckel_1985 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Zini_1991 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of potassium channel openers and sulfonylurea receptors in guinea pig intestine and does not report pharmacokinetic or pharmacodynamic modeling for glibornuride. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
