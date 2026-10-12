<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;lead&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/&quot;},{&quot;label&quot;:&quot;Dede_2017 \u00b7 exposure&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lead — `Lead_Dede2017_exposure`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Dede E et al., Physiologically-based pharmacokinetic a… (2017)
  ·  DOI: [10.1016/j.etap.2017.12.003](https://doi.org/10.1016/j.etap.2017.12.003)

<div class="pk-model-meta" hidden drug="lead" model-id="Lead_Dede2017_exposure" status="needs_review" stale="false" population="adult humans" measured-compound="arsenic, cadmium, chromium, nickel, lead" parameterization="mechanistic" topology="manual_model_class"></div>

**Model structure:** nonlinear / manual; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Pb | `Q411` · Pb:a | 0.47 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row17:col1 | — | not captured |
| V , As(III)→MMA max | `Q61` · V | 748.8 | not captured | not captured | not captured | not captured | llm (0.6) | Dede_2017_table_S1:row46:col6, Dede_2017_table_S2:row0:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/toxins/toxin_lead/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dede_2017` / `Dede_2017::exposure`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-08 17:26 UTC</sub>
