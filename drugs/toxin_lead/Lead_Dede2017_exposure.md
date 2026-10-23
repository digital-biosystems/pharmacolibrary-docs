<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Lead&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/&quot;},{&quot;label&quot;:&quot;Dede_2017 \u00b7 exposure&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lead — `Lead_Dede2017_exposure`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Lead" model-id="Lead_Dede2017_exposure" status="needs_review" stale="false" population="adult humans" measured-compound="arsenic, cadmium, chromium, nickel, lead" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Dede E, Tindall MJ, Cherrie JW, Hankin S, Collins C. Physiologically-based pharmacokinetic and toxicokinetic models for estimating human exposure to five toxic elements through oral ingestion (2017).
  ·  DOI: [10.1016/j.etap.2017.12.003](https://doi.org/10.1016/j.etap.2017.12.003)

## Population and dosing

**Population:** adult humans · condition chronic dietary exposure · age group adult.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Pb | Pb:a | 0.47 |  |
| V , As(III)→MMA max | V | 748.8 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Pb | `Q411` · Pb:a | 0.47 |  | llm (0.6) | tab_2:row17:col1 |
| V , As(III)→MMA max | `Q61` · V | 748.8 |  | llm (0.6) | Dede_2017_table_S1:row46:col6, Dede_2017_table_S2:row0:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'As' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col4'])
- dropped unlinked row (NIL): 'Cd' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1'])
- dropped unlinked row (NIL): 'Cr' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1'])
- dropped unlinked row (NIL): 'Ni' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col4'])
- dropped unlinked row (NIL): 'QCC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row15:col4'])
- dropped unlinked row (NIL): 'QLC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row19:col3', 'Dede_2017_table_S1:row19:col4'])
- dropped unlinked row (NIL): 'K red' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row42:col4'])
- dropped duplicate Q61 ('V , As(III)→DMA max', value '1500') — already have one for this compound
- dropped duplicate Q61 ('V , MMA→DMA max', value '1067') — already have one for this compound
- dropped unlinked row (NIL): 'K As(III)→MMA m,' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row52:col6', 'Dede_2017_table_S2:row6:col4'])
- dropped unlinked row (NIL): 'K , As(III)→DMA m' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row54:col6', 'Dede_2017_table_S2:row8:col4'])
- dropped unlinked row (NIL): 'K , MMA→DMA m' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row56:col6', 'Dede_2017_table_S2:row10:col4'])
- dropped duplicate Q61 ('V sysRBC', value None) — already have one for this compound
- dropped unlinked row (NIL): 'Q kid' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row36:col4'])
- dropped unlinked row (NIL): 'Q portalRBC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row39:col3', 'Dede_2017_table_S4:row39:col4', 'Dede_2017_table_S4:row39:col13'])
- dropped unlinked row (NIL): 'Q bone' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row41:col4'])
- dropped unlinked row (NIL): 'Q OT' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row43:col3', 'Dede_2017_table_S4:row43:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=arsenic, cadmium, chromium, nickel, lead
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- status held at "Needs review" — not promoted
- population split: 'exposure' subgroup of Dede_2017 (paper reports 2 populations: exposure, optimal)

**Extraction notes:**
- unparsed cell tab_2:row5:col3 = '7 -14 days'
- unparsed cell tab_2:row8:col4 = '&lt; 0.01'
- unparsed cell tab_2:row11:col4 = '&lt; 0.01'
- unparsed cell tab_2:row14:col3 = '3-9 days'
- unparsed cell tab_2:row17:col3 = '15-90 days'
- unparsed cell tab_2:row17:col4 = '≥0.3'
- companion parameter table S1 transcribed (10 record(s))
- companion parameter table S2 transcribed (6 record(s))
- unparsed cell Dede_2017_table_S4:row21:col3 = '1.83 L'
- companion parameter table S4 transcribed (8 record(s))
- LLM selected parameter table(s) S1, S2, S3, S4

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | pass |  |
| C8_topology | fail |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blead%5D%20Lead_Dede2017_exposure&body=Drug%3A%20lead%0ARecord%3A%20Lead_Dede2017_exposure%0APaper%3A%20Dede_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lead/Lead_Dede2017_exposure%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-08 17:26 UTC</sub>
