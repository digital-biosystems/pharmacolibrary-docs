<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Arsenic&quot;,&quot;href&quot;:&quot;drugs/toxin_arsenic/&quot;},{&quot;label&quot;:&quot;Dede_2017 \u00b7 ni&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Arsenic — `Arsenic_Dede2017_ni`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Arsenic" model-id="Arsenic_Dede2017_ni" status="rejected" stale="false" population="adult humans" measured-compound="Arsenic (As(III), As(V), MMA(V), DMA(V), MMA(III), DMA(III))" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Dede E, Tindall MJ, Cherrie JW, Hankin S, Collins C. Physiologically-based pharmacokinetic and toxicokinetic models for estimating human exposure to five toxic elements through oral ingestion (2017).
  ·  DOI: [10.1016/j.etap.2017.12.003](https://doi.org/10.1016/j.etap.2017.12.003)

## Population and dosing

**Population:** adult humans · condition chronic dietary exposure · age group adult.

**Dosed compound ≠ measured compound:** dosed Arsenic (As(III), As(V), MMA(V), DMA(V)), measured Arsenic (As(III), As(V), MMA(V), DMA(V), MMA(III), DMA(III)).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

## Departures & gaps

**Interpretation flags:**
- transposed table Dede_2017_table_3: rows are variants (As, Cd, Cr, Ni, Pb), the parameters are the column headers (Exposure Duration (days)) — read one record per variant
- column 'ni' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Exposure Duration (days)' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_3:row9:col2'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row1:col1', 'Dede_2017_table_1:row1:col2', 'Dede_2017_table_1:row1:col3', 'Dede_2017_table_1:row1:col4'])
- dropped unlinked row (NIL): '10 years' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row4:col1', 'Dede_2017_table_1:row4:col2', 'Dede_2017_table_1:row4:col3', 'Dede_2017_table_1:row4:col4'])
- dropped unlinked row (NIL): '20 years' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row5:col1', 'Dede_2017_table_1:row5:col2', 'Dede_2017_table_1:row5:col3', 'Dede_2017_table_1:row5:col4'])
- dropped unlinked row (NIL): '30 years' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row6:col1', 'Dede_2017_table_1:row6:col2', 'Dede_2017_table_1:row6:col3', 'Dede_2017_table_1:row6:col4'])
- dropped unlinked row (NIL): '40 years' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row7:col1', 'Dede_2017_table_1:row7:col2', 'Dede_2017_table_1:row7:col3', 'Dede_2017_table_1:row7:col4'])
- dropped unlinked row (NIL): '50 years' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_1:row8:col1', 'Dede_2017_table_1:row8:col2', 'Dede_2017_table_1:row8:col3', 'Dede_2017_table_1:row8:col4'])
- table mostly unlinked (7/7 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Arsenic (As(III), As(V), MMA(V), DMA(V), MMA(III), DMA(III))
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- estimate-method split: 'Ni' is one of 5 estimates of Dede_2017's substance matrix (As, Cd, Cr, Ni, Pb); same population, different estimation method
- row roles (LLM): model_class=pbpk; 0/11 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table Dede_2017_table_3: unbound_uncertainty
- table Dede_2017_table_3: missing_label
- table Dede_2017_table_3: unparsed_numeric_cell
- table Dede_2017_table_1: unbound_uncertainty
- companion parameter table 1 transcribed (25 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | fail |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barsenic%5D%20Arsenic_Dede2017_ni&body=Drug%3A%20arsenic%0ARecord%3A%20Arsenic_Dede2017_ni%0APaper%3A%20Dede_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arsenic/Arsenic_Dede2017_ni%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:37 UTC</sub>
