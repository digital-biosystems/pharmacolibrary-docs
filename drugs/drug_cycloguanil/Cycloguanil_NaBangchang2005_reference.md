<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Cycloguanil&quot;,&quot;href&quot;:&quot;drugs/drug_cycloguanil/&quot;},{&quot;label&quot;:&quot;Na-Bangchang_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloguanil_Chotsiri2021_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloguanil/Cycloguanil_Chotsiri2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cycloguanil — `Cycloguanil_NaBangchang2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Cycloguanil" model-id="Cycloguanil_NaBangchang2005_reference" status="rejected" stale="false" population="third-trimester pregnant women with uncomplicated falciparum malaria" measured-compound="cycloguanil" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Na-Bangchang K, Manyando C, Ruengweerayut R, Kioy D, Mulenga M, Miller GB et al. The pharmacokinetics and pharmacodynamics of atovaquone and proguanil for the treatment of uncomplicated falciparum malaria in third-trimester pregnant women. European journal of clinical pharmacology 61(8):573–582 (2005).
  ·  DOI: [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7)

## Population and dosing

**Population:** third-trimester pregnant women with uncomplicated falciparum malaria · condition falciparum malaria in pregnancy · age group adult · n = 26.

**Dosed compound ≠ measured compound:** dosed proguanil (with atovaquone, Malarone), measured cycloguanil.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.091). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has proguanil (with atovaquone, Malarone), the second reading unknown; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Cmax'
- dropped value-less row: 't(max)' (captured trailing unit 'max' for child rows)
- dropped value-less row: 'V/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 't(1/2beta)' (captured trailing unit '1/2beta' for child rows)
- dropped value-less row: 'Cmax (proguanil)' (captured trailing unit 'proguanil' for child rows)
- dropped value-less row: 'Cmax (cycloguanil)' (captured trailing unit 'cycloguanil' for child rows)
- dropped value-less row: 't(max) (proguanil)' (captured trailing unit 'proguanil' for child rows)
- dropped value-less row: 't(max) (cycloguanil)' (captured trailing unit 'cycloguanil' for child rows)
- dropped value-less row: 'V/F (proguanil)' (captured trailing unit 'proguanil' for child rows)
- dropped value-less row: 'CL/F (proguanil)' (captured trailing unit 'proguanil' for child rows)
- dropped value-less row: 't(1/2beta) (proguanil)' (captured trailing unit 'proguanil' for child rows)
- dropped value-less row: 'CL(R-CG)' (captured trailing unit 'R-CG' for child rows)
- dropped value-less row: 't(1/2z) (CG)' (captured trailing unit 'CG' for child rows)
- dropped value-less row: 'proguanil/cycloguanil metabolic ratios'
- dropped value-less row: 'AUC(PG/CG)' (captured trailing unit 'PG/CG' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cycloguanil
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 0 linked by role; re-tagged cycloguanil→atovaquone ×5, cycloguanil→proguanil ×5
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Na-Bangchang_2005_metadata.yaml (17 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[proguanil/cycloguanil metabolic ratios]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | proguanil (with atovaquone, Malarone) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cycloguanil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcycloguanil%5D%20Cycloguanil_NaBangchang2005_reference&body=Drug%3A%20cycloguanil%0ARecord%3A%20Cycloguanil_NaBangchang2005_reference%0APaper%3A%20Na-Bangchang_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cycloguanil/Cycloguanil_NaBangchang2005_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:52 UTC</sub>
