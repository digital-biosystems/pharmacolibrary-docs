<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;vismodegib&quot;,&quot;href&quot;:&quot;drugs/drug_vismodegib/&quot;},{&quot;label&quot;:&quot;Lu_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vismodegib — `Vismodegib_Lu2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="vismodegib" model-id="Vismodegib_Lu2015_reference" status="rejected" stale="false" population="adults with advanced solid tumors and healthy women of nonchildbearing potential" measured-compound="vismodegib" parameterization="mechanistic" topology="1C"></div>

## Citation
Lu T, Wang B, Gao Y, Dresser M, Graham RA, Jin JY. Semi-Mechanism-Based Population Pharmacokinetic Modeling of the Hedgehog Pathway Inhibitor Vismodegib. CPT: pharmacometrics & systems pharmacology 4(11):680–689 (2015).
  ·  DOI: [10.1002/psp4.12039](https://doi.org/10.1002/psp4.12039)

## Population and dosing

**Population:** adults with advanced solid tumors and healthy women of nonchildbearing potential · condition advanced basal cell carcinoma · age group mixed · n = &gt;&lt;/n  225.

**Dosing:** 150, 270, 540 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| exp(θ1) | equation variable | 1326 |  |
| θ7 | allometric_exponent | 0.881 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| exp(θ1) | `Q900` · equation variable | 1326 |  | llm (0.6) | psp412039-tbl-0002:row1:col2 |
| θ7 | `Q319` · allometric_exponent | 0.881 |  | llm (0.6) | psp412039-tbl-0002:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('θ9', value '-0.527') — already have one for this compound
- dropped duplicate Q900 ('exp(θ2)', value '58.0') — already have one for this compound
- dropped unlinked row (NIL): 'θ10' — extend the ontology if this is a real PK parameter (source ['psp412039-tbl-0002:row4:col2'])
- dropped duplicate Q900 ('exp(θ3)', value '0.056') — already have one for this compound
- dropped unlinked row (NIL): 'exp(θ6)' — extend the ontology if this is a real PK parameter (source ['psp412039-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): 'exp(θ4)' — extend the ontology if this is a real PK parameter (source ['psp412039-tbl-0002:row8:col2'])
- routed 'θ5' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q900 ('θ8', value '-0.602') — already have one for this compound
- routed 'Intersubject variability (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vismodegib
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp412039-tbl-0002:row1:col3 = '1,332 (1,196, 1,467)'
- unparsed cell psp412039-tbl-0002:row2:col3 = '−0.526 (−0.842, −0.248)'
- unparsed cell psp412039-tbl-0002:row3:col3 = '58.4 (53.2, 63.4)'
- unparsed cell psp412039-tbl-0002:row4:col3 = '0.65 (0.31, 0.96)'
- unparsed cell psp412039-tbl-0002:row5:col3 = '0.056 (0.053, 0.058)'
- unparsed cell psp412039-tbl-0002:row6:col3 = '0.347 (0.293, 0.403)'
- unparsed cell psp412039-tbl-0002:row7:col3 = '0.880 (0.566, 1.33)'
- unparsed cell psp412039-tbl-0002:row8:col1 = 'Absorption rate constant, ka (day−1)'
- unparsed cell psp412039-tbl-0002:row8:col3 = '9.065 (6.870, 11.865)'
- unparsed cell psp412039-tbl-0002:row9:col3 = '0.621 (0.215, 0.991)'
- unparsed cell psp412039-tbl-0002:row10:col3 = '−0.594 (−1.07, −0.11)'
- unparsed cell psp412039-tbl-0002:row11:col3 = '47.4 (39.6, 57.5)'
- unparsed cell psp412039-tbl-0002:row14:col3 = '26.5 (24.7, 28.6)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvismodegib%5D%20Vismodegib_Lu2015_reference&body=Drug%3A%20vismodegib%0ARecord%3A%20Vismodegib_Lu2015_reference%0APaper%3A%20Lu_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vismodegib/Vismodegib_Lu2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:54 UTC</sub>
