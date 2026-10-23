<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;tegoprazan&quot;,&quot;href&quot;:&quot;drugs/drug_tegoprazan/&quot;},{&quot;label&quot;:&quot;Jung_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegoprazan_Kim2024_reference&quot;,&quot;label&quot;:&quot;Kim_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegoprazan/Tegoprazan_Kim2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegoprazan — `Tegoprazan_Jung2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:41 UTC) predates the latest extraction (2026-10-04 11:44 UTC); the status shown comes from the current checks. Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="tegoprazan" model-id="Tegoprazan_Jung2026_reference" status="rejected" stale="true" population="adults" measured-compound="tegoprazan" parameterization="mechanistic" topology="1C"></div>

## Citation
Jung W, Lee J, Jeon H, Sung T, Yun HY, Lee S et al. A Mechanism-Based Multi-Level Population PK/PD Model for Potassium-Competitive Acid Blockers. CPT: pharmacometrics & systems pharmacology 15(1):e70181 (2026).
  ·  DOI: [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181)

## Population and dosing

**Population:** adults · condition acid-related diseases · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — tegoprazan: V 56.6 L, kabs 0.156 1/h.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column 'no.' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row2:col2'])
- dropped unlinked row (NIL): 'Physio' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row3:col1', 'psp470181-tbl-0002:row3:col2', 'psp470181-tbl-0002:row3:col3'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row4:col2'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row5:col2'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row6:col1', 'psp470181-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row7:col2'])
- dropped unlinked row (NIL): 'Feed' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row8:col1', 'psp470181-tbl-0002:row8:col3'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Drug' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row10:col1', 'psp470181-tbl-0002:row10:col2', 'psp470181-tbl-0002:row10:col3'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row11:col1', 'psp470181-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row12:col2'])
- dropped unlinked row (NIL): 'Effect' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row13:col1', 'psp470181-tbl-0002:row13:col3'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row14:col2'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row15:col1', 'psp470181-tbl-0002:row15:col2'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row16:col2'])
- table mostly unlinked (15/16 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tegoprazan
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell psp470181-tbl-0002:row3:col4 = '98.28% (42.9) [15]'
- unparsed cell psp470181-tbl-0002:row4:col3 = '7.75% (150.5) [15]'
- unparsed cell psp470181-tbl-0002:row7:col3 = '60.05% (40.5) [26]'
- unparsed cell psp470181-tbl-0002:row8:col4 = '29.23% (31.8) [17]'
- unparsed cell psp470181-tbl-0002:row8:col5 = '10.98% (58.2) [0]'
- unparsed cell psp470181-tbl-0002:row10:col4 = '20.45% (38.3) [35]'
- unparsed cell psp470181-tbl-0002:row10:col5 = '31.56% (124.3) [1]'
- unparsed cell psp470181-tbl-0002:row11:col3 = '29.60% (30.3) [20]'
- unparsed cell psp470181-tbl-0002:row11:col4 = '161.14% (9.5) [0]'
- unparsed cell psp470181-tbl-0002:row12:col3 = '28.29% (42.3) [56]'
- unparsed cell psp470181-tbl-0002:row12:col4 = '89.36% (50.6) [0]'
- unparsed cell psp470181-tbl-0002:row15:col3 = '54.96% (39.4) [23]'
- unparsed cell psp470181-tbl-0002:row15:col4 = '31.56% (66.7) [0]'
- LLM selected parameter table(s) 2

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btegoprazan%5D%20Tegoprazan_Jung2026_reference&body=Drug%3A%20tegoprazan%0ARecord%3A%20Tegoprazan_Jung2026_reference%0APaper%3A%20Jung_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tegoprazan/Tegoprazan_Jung2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 11:44 UTC</sub>
