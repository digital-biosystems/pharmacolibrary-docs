<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Sinha_2026 \u00b7 bsv_estimates_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxcarbazepine — `Oxcarbazepine_Sinha2026_bsv_estimates_cv`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="oxcarbazepine" model-id="Oxcarbazepine_Sinha2026_bsv_estimates_cv" status="rejected" stale="false" population="children and adolescents" measured-compound="oxcarbazepine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Sinha J, Zimmerman K, Balevic SJ, Hornik C, Muller WJ, Rathore M et al. Population Pharmacokinetic Modeling of Oxcarbazepine and Its Active Metabolite 10-Monohydroxy Derivative to Inform Dosing in Children with Obesity. Clinical pharmacokinetics 65(2):329–344 (2026).
  ·  DOI: [10.1007/s40262-025-01579-0](https://doi.org/10.1007/s40262-025-01579-0)

## Population and dosing

**Population:** children and adolescents · condition epilepsy · age group child · n = 100.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has oxcarbazepine → 10-monohydroxy derivative (metabolism); 10-monohydroxy derivative → oxcarbazepine (interconversion), the second reading oxcarbazepine → 10‐monohydroxy derivative (mhd) (metabolism); 10‐monohydroxy derivative (mhd) → oxcarbazepine (interconversion). That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{\\mathrm{OXZ}}$$\\end{document}VOXZ' routed out of structural estimates ('BSV estimates (CV)')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${K}_{a}$$\\end{document}Ka' routed out of structural estimates ('BSV estimates (CV)')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${K}_{\\mathrm{bt}}$$\\end{document}Kbt' routed out of structural estimates ('BSV estimates (CV)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxcarbazepine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'bsv estimates (cv)' subgroup of Sinha_2026 (paper reports 2 populations: bsv estimates (cv), population estimates)
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 7 linked by role; re-tagged parent→10-monohydroxy derivative ×3
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab4:row2:col3 = '3.04 (2.68–3.51)'
- unparsed cell Tab4:row2:col4 = '3.04 (2.68–3.51)'
- unparsed cell Tab4:row2:col5 = '36% (12, 16)'
- unparsed cell Tab4:row2:col6 = '36% (27–45)'
- unparsed cell Tab4:row2:col7 = '36% (27–45)'
- unparsed cell Tab4:row3:col3 = '0.670 (0.546–0.802)'
- unparsed cell Tab4:row3:col4 = '0.670 (0.546–0.802)'
- unparsed cell Tab4:row4:col3 = '204 (155–380)'
- unparsed cell Tab4:row4:col4 = '204 (155–380)'
- unparsed cell Tab4:row4:col5 = '51% (19, 26)'
- unparsed cell Tab4:row4:col6 = '51% (23–69)'
- unparsed cell Tab4:row4:col7 = '51% (23–69)'
- unparsed cell Tab4:row6:col5 = '80% (20, 33)'
- unparsed cell Tab4:row6:col6 = '87% (44–142)'
- unparsed cell Tab4:row6:col7 = '87% (44–142)'
- unparsed cell Tab4:row7:col3 = '38.1 (20.0–223.3)'
- unparsed cell Tab4:row7:col4 = '38.1 (20.0–223.3)'
- unparsed cell Tab4:row8:col3 = '0.789 (0.500–1.234)'
- unparsed cell Tab4:row8:col4 = '0.789 (0.500–1.234)'
- unparsed cell Tab4:row9:col1 = 'h−1'
- unparsed cell Tab4:row9:col3 = '0.246 (0.146–1.988)'
- unparsed cell Tab4:row9:col4 = '0.246 (0.146–1.988)'
- unparsed cell Tab4:row10:col1 = 'h−1'
- unparsed cell Tab4:row10:col3 = '0.0374 (0.0143–0.1107)'
- unparsed cell Tab4:row10:col4 = '0.0374 (0.0143–0.1107)'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (3/4 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['oxcarbazepine', '10-monohydroxy derivative', 'metabolism'], ['10-monohydroxy derivative', 'oxcarbazepine', 'interconversion']] | [['oxcarbazepine', '10‐monohydroxy derivative (mhd)', 'metabolism'], ['10‐monohydroxy derivative (mhd)', 'oxcarbazepine', 'interconversion']] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained |
|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |
| C0b_disposition_core | fail |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Kbt'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_Sinha2026_bsv_estimates_cv&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_Sinha2026_bsv_estimates_cv%0APaper%3A%20Sinha_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxcarbazepine/Oxcarbazepine_Sinha2026_bsv_estimates_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:12 UTC</sub>
