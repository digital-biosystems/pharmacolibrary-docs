<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Perlstein_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Perlstein2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="risperidone" model-id="Risperidone_Perlstein2025_reference" status="rejected" stale="false" population="patients with schizophrenia" measured-compound="risperidone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Perlstein I, Merenlender Wagner A, Elgart A, Zandvliet AS, Hellmann F, Lin Y et al. Population Pharmacokinetic Modeling of TV-46000, a Risperidone Long-Acting Subcutaneous Antipsychotic for the Treatment of Patients with Schizophrenia. Neurology and therapy 14(3):829–848 (2025).
  ·  DOI: [10.1007/s40120-025-00723-z](https://doi.org/10.1007/s40120-025-00723-z)

## Population and dosing

**Population:** patients with schizophrenia · condition schizophrenia · age group adult · n = 692.

**Dosed compound ≠ measured compound:** dosed risperidone (TV-46000), measured risperidone.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

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

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F, L/h'
- dropped value-less row: 'V/F, L'
- dropped value-less row: 'KA2, 1/h'
- dropped value-less row: 'KTR, 1/h'
- dropped value-less row: 'KA1, 1/h'
- dropped value-less row: 'KA1ADMSITE1'
- dropped value-less row: 'KA1BMI1'
- dropped value-less row: 'KA1INJV1'
- dropped value-less row: 'KA2BMI1'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=risperidone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 4 linked by role; re-tagged parent→risperidone ×9
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab3:row2:col1 = '14.3 (13.4–15.1)'
- unparsed cell Tab3:row2:col3 = '14.3 (13.4–15.1)'
- unparsed cell Tab3:row3:col1 = '66.3 (60.6–71.9)'
- unparsed cell Tab3:row3:col3 = '66.2 (61.1–72.0)'
- unparsed cell Tab3:row4:col1 = '0.000408 (0.000329–0.000486)'
- unparsed cell Tab3:row4:col3 = '0.000409(0.000340–0.000486)'
- unparsed cell Tab3:row5:col1 = '0.0252 (0.0228–0.0275)'
- unparsed cell Tab3:row5:col3 = '0.0252 (0.0227–0.0275)'
- unparsed cell Tab3:row6:col1 = '0.000632 (0.000588–0.000676)'
- unparsed cell Tab3:row6:col3 = '0.000631(0.000591–0.000675)'
- unparsed cell Tab3:row7:col1 = '0.331 (0.109–0.553)'
- unparsed cell Tab3:row7:col3 = '0.336 (0.147–0.546)'
- unparsed cell Tab3:row8:col1 = '− 1.1 (− 1.460 to 0.745)'
- unparsed cell Tab3:row8:col3 = '− 1.092 (− 1.482 to 0.716)'
- unparsed cell Tab3:row9:col1 = '− 0.384 (− 0.469 to − 0.298)'
- unparsed cell Tab3:row9:col3 = '− 0.384 (− 0.474 to − 0.297)'
- unparsed cell Tab3:row10:col1 = '1.7 (0.992–2.410)'
- unparsed cell Tab3:row10:col3 = '1.687 (0.798–2.552)'
- LLM selected parameter table(s) 3

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Perlstein2025_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Perlstein2025_reference%0APaper%3A%20Perlstein_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risperidone/Risperidone_Perlstein2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:10 UTC</sub>
