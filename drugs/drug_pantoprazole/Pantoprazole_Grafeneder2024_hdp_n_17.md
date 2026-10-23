<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;pantoprazole&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/&quot;},{&quot;label&quot;:&quot;Grafeneder_2024 \u00b7 hdp_n_17&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pantoprazole_Olivarez2020_reference&quot;,&quot;label&quot;:&quot;Olivarez_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Olivarez2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Smith2021v2_reference&quot;,&quot;label&quot;:&quot;Smith_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Smith2021v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_McCann2023_reference&quot;,&quot;label&quot;:&quot;McCann_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_McCann2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Pettersen2009_reference&quot;,&quot;label&quot;:&quot;Pettersen_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pantoprazole — `Pantoprazole_Grafeneder2024_hdp_n_17`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="pantoprazole" model-id="Pantoprazole_Grafeneder2024_hdp_n_17" status="rejected" stale="false" population="hemodialysis patients and healthy volunteers" measured-compound="clopidogrel active metabolite" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Grafeneder J, van Os W, Minichmayr IK, Kovacevic Miljevic KD, Reiter B, Säemann MD et al. Prospective Trial on the Pharmacokinetics of Clopidogrel in Hemodialysis Patients. Kidney international reports 9(10):2970–2980 (2024).
  ·  DOI: [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

## Population and dosing

**Population:** hemodialysis patients and healthy volunteers · condition hemodialysis · age group adult · n = 33.

**Dosing:** 75, 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed clopidogrel, measured clopidogrel active metabolite.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| intermediate_metabolizer | intermediate_metabolizer | 3 |  |
| normal_metabolizer | normal_metabolizer | 6 |  |
| rapid_metabolizer | rapid_metabolizer | 7 |  |
| ultrarapid_metabolizer | ultrarapid_metabolizer | 1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | source |
|---|---|---|---|---|
| intermediate_metabolizer | `Q900` · intermediate_metabolizer | 3 |  | tbl2:row20:col2 |
| normal_metabolizer | `Q900` · normal_metabolizer | 6 |  | tbl2:row21:col2 |
| rapid_metabolizer | `Q900` · rapid_metabolizer | 7 |  | tbl2:row22:col2 |
| ultrarapid_metabolizer | `Q900` · ultrarapid_metabolizer | 1 |  | tbl2:row23:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tbl2:row0:col2'])
- covariate level 'Intermediate metabolizer' → Q900:intermediate_metabolizer = 3 (linear_fractional on the model)
- covariate level 'Normal metabolizer' → Q900:normal_metabolizer = 6 (linear_fractional on the model)
- covariate level 'Rapid metabolizer' → Q900:rapid_metabolizer = 7 (linear_fractional on the model)
- covariate level 'Ultrarapid metabolizer' → Q900:ultrarapid_metabolizer = 1 (linear_fractional on the model)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel active metabolite
- population split: 'hdp n = 17' subgroup of Grafeneder_2024 (paper reports 4 populations: hdp, hdp n = 17, hv, hv n = 16)
- review gap-fill skipped: this record measures 'clopidogrel active metabolite', not pantoprazole — the review values are the parent's

## Validation

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpantoprazole%5D%20Pantoprazole_Grafeneder2024_hdp_n_17&body=Drug%3A%20pantoprazole%0ARecord%3A%20Pantoprazole_Grafeneder2024_hdp_n_17%0APaper%3A%20Grafeneder_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pantoprazole/Pantoprazole_Grafeneder2024_hdp_n_17%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 11:01 UTC</sub>
