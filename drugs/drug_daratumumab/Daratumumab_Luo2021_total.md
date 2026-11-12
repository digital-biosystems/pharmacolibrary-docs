<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;daratumumab&quot;,&quot;href&quot;:&quot;drugs/drug_daratumumab/&quot;},{&quot;label&quot;:&quot;Luo_2021 \u00b7 total&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daratumumab — `Daratumumab_Luo2021_total`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="daratumumab" model-id="Daratumumab_Luo2021_total" status="rejected" stale="false" population="multiple myeloma patients" measured-compound="daratumumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Luo MM, Usmani SZ, Mateos MV, Nahi H, Chari A, San-Miguel J et al. Exposure-Response and Population Pharmacokinetic Analyses of a Novel Subcutaneous Formulation of Daratumumab Administered to Multiple Myeloma Patients. Journal of clinical pharmacology 61(5):614–627 (2021).
  ·  DOI: [10.1002/jcph.1771](https://doi.org/10.1002/jcph.1771)

## Population and dosing

**Population:** multiple myeloma patients · age group adult · n = ..

**Dosing:** 16, 1800 mg; mg/kg, sc; iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Black | equation variable | 24 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Black | `Q900` · equation variable | 24 |  | llm (0.6) | jcph1771-tbl-0002:row7:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row4:col5'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row6:col5'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row8:col5'])
- dropped duplicate Q900 ('Other a', value '113') — already have one for this compound
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row12:col5'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row13:col5'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row14:col5'])
- dropped unlinked row (NIL): '≤4 lines' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row17:col5'])
- dropped unlinked row (NIL): '&gt;4 lines' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row18:col5'])
- dropped unlinked row (NIL): 'Non‐IgG' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row20:col5'])
- dropped unlinked row (NIL): 'IgG' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row21:col5'])
- dropped unlinked row (NIL): 'None' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row24:col5'])
- dropped unlinked row (NIL): 'PI only' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row25:col5'])
- dropped unlinked row (NIL): 'IMiD only' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row26:col5'])
- dropped unlinked row (NIL): 'Both PI and IMiD' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row27:col5'])
- dropped unlinked row (NIL): 'Missing' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row28:col5'])
- dropped unlinked row (NIL): 'I' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row30:col5'])
- dropped unlinked row (NIL): 'II' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row31:col5'])
- dropped unlinked row (NIL): 'III' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row32:col5'])
- dropped unlinked row (NIL): 'Normal' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row36:col5'])
- dropped unlinked row (NIL): 'Mild dysfunction' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row37:col5'])
- dropped unlinked row (NIL): 'Moderate dysfunction' — extend the ontology if this is a real PK parameter (source ['jcph1771-tbl-0002:row38:col5'])
- table mostly unlinked (21/23 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daratumumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'total' subgroup of Luo_2021 (paper reports 5 populations: columba, mmy1008, pavo part 2, pleiades, total)
- molar mass: none found for 'daratumumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell jcph1771-tbl-0002:row15:col3 = '1 (&lt;1)'
- unparsed cell jcph1771-tbl-0002:row15:col5 = '1 (&lt;1)'
- unparsed cell jcph1771-tbl-0002:row22:col5 = '1 (&lt;1)'
- unparsed cell jcph1771-tbl-0002:row33:col3 = '1 (&lt;1)'
- unparsed cell jcph1771-tbl-0002:row33:col5 = '3 (&lt;1)'

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaratumumab%5D%20Daratumumab_Luo2021_total&body=Drug%3A%20daratumumab%0ARecord%3A%20Daratumumab_Luo2021_total%0APaper%3A%20Luo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daratumumab/Daratumumab_Luo2021_total%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 13:12 UTC</sub>
