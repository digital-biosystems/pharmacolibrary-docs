<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/&quot;},{&quot;label&quot;:&quot;Mehta_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UmeclidiniumBromide_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium bromide — `UmeclidiniumBromide_Mehta2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="umeclidinium bromide" model-id="UmeclidiniumBromide_Mehta2020_reference" status="needs_review" stale="false" population="patients with COPD" measured-compound="umeclidinium" parameterization="apparent" topology="1C"></div>

## Citation
Mehta R, Farrell C, Hayes S, Birk R, Okour M, Lipson DA. Population Pharmacokinetic Analysis of Fluticasone Furoate/Umeclidinium Bromide/Vilanterol in Patients with Chronic Obstructive Pulmonary Disease. Clinical pharmacokinetics 59(1):67–79 (2020).
  ·  DOI: [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w)

## Population and dosing

**Population:** patients with COPD · condition COPD · age group adult · n = 817.

**Dosing:** 0.025, 0.0625, 0.1 mg, inhaled, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed umeclidinium bromide (with fluticasone furoate and vilanterol), measured umeclidinium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Treatment | kel | 106 | h−1 |
| FF CL/F | CL/F | 513 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — umeclidinium bromide: kel 106 h−1, CL/F 513 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has umeclidinium bromide (with fluticasone furoate and vilanterol), the second reading umeclidinium bromide; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Treatment | `Q47` · kel | 106 | h−1 | 0.02944 | 1/s | 1/h | llm (0.6) | Mehta_2020_table_4:row0:col2, Mehta_2020_table_4:row0:col3, Mehta_2020_table_4:row0:col5, Mehta_2020_table_4:row0:col6, Mehta_2020_table_4:row0:col8, Mehta_2020_table_4:row0:col9, Mehta_2020_table_4:row0:col11, Mehta_2020_table_4:row0:col12 |
| FF CL/F | `Q27` · CL/F | 513 | L/h | 0.0001425 | m3/s | L/h | boundary (0.8) | Mehta_2020:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'V2/F (L)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'Q/F (L/h)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'V3/F (L)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'KA (h−1)' routed out of structural estimates ('IIV, CV%')
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V2/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V3/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'KA (h−1)' (captured trailing unit 'h−1' for child rows)
- dropped value-less row: 'Body weight on CL/F'
- dropped value-less row: 'Age on CL/F'
- dropped value-less row: 'Smoking effect on CL/F'
- dropped value-less row: 'Body weight on V2/F'
- dropped value-less row: 'Japanese heritage on CL/F'
- dropped value-less row: 'FF/VI on CL/F'
- unit 'h−1' inherited from a section-header row for kel (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Mehta_2020_table_4:row1:col1', 'Mehta_2020_table_4:row1:col4', 'Mehta_2020_table_4:row1:col7', 'Mehta_2020_table_4:row1:col10'])
- dropped value-less row: 'FF/UMEC/VI'
- dropped duplicate Q47 ('Current', value '168') — already have one for this compound
- dropped value-less row: 'FF/VI + UMEC'
- dropped value-less row: 'UMEC/VI'
- salvaged Q27 ('FF CL/F'=513) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=umeclidinium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab6:row1:col1 = '149 [138, 160]'
- unparsed cell Tab6:row2:col1 = '1100 [1030, 1170]'
- unparsed cell Tab6:row5:col1 = '18.6 [16.2, 21.0]'
- unparsed cell Tab6:row6:col1 = '0.580 [0.409, 0.751]'
- unparsed cell Tab6:row7:col1 = '− 0.648 [− 0.979, − 0.317]'
- unparsed cell Tab6:row8:col1 = '1.28 [1.13, 1.45]'
- unparsed cell Tab6:row9:col1 = '0.797 [0.614, 0.980]'
- unparsed cell Mehta_2020_table_3:row0:col1 = '6.24 [6.20, 6.28]'
- unparsed cell Mehta_2020_table_3:row0:col2 = '513 [493, 534]'
- unparsed cell Mehta_2020_table_3:row4:col1 = '− 2.50 [− 2.52, − 2.48]'
- unparsed cell Mehta_2020_table_3:row4:col2 = '0.0821 [0.0805, 0.0837]'
- unparsed cell Mehta_2020_table_3:row5:col1 = '− 0.436 [− 0.466, − 0.406]'
- unparsed cell Mehta_2020_table_3:row5:col2 = '0.647 [0.628, 0.666]'
- unparsed cell Mehta_2020_table_3:row6:col1 = '0.351 [0.321, 0.381]'
- unparsed cell Mehta_2020_table_3:row6:col2 = '1.42 [1.38, 1.46]'
- companion parameter table 3 transcribed (15 record(s), model stage 'final')
- transposed table Mehta_2020_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Mehta_2020_table_4:row1:col2 = '19.5 [17.9, 21.1]'
- unparsed cell Mehta_2020_table_4:row1:col3 = '13.3 [12.6, 14.0]'
- unparsed cell Mehta_2020_table_4:row1:col5 = '18.9 [17.2, 20.6]'
- unparsed cell Mehta_2020_table_4:row1:col6 = '13.2 [12.3, 14.2]'
- unparsed cell Mehta_2020_table_4:row1:col8 = '24.0 [20.5, 28.0]'
- unparsed cell Mehta_2020_table_4:row1:col9 = '19.6 [16.6, 23.1]'
- unparsed cell Mehta_2020_table_4:row1:col11 = '24.0 [20.5, 28.0]'
- unparsed cell Mehta_2020_table_4:row1:col12 = '13.6 [12.5, 14.8]'
- companion parameter table 4 transcribed (12 record(s))
- unparsed cell Mehta_2020_table_7:row0:col3 = '63.2 [59.5, 67.1]'
- unparsed cell Mehta_2020_table_7:row0:col4 = '457 [432, 483]'
- unparsed cell Mehta_2020_table_7:row1:col2 = '54.7 [51.0, 58.8]'
- unparsed cell Mehta_2020_table_7:row1:col3 = '341 [318, 366]'
- unparsed cell Mehta_2020_table_7:row2:col3 = '51.9 [45.6, 59.0]'
- unparsed cell Mehta_2020_table_7:row2:col4 = '403 [351, 462]'
- unparsed cell Mehta_2020_table_7:row3:col2 = '50.9 [44.4, 58.3]'
- unparsed cell Mehta_2020_table_7:row3:col3 = '313 [272, 360]'
- unparsed cell Mehta_2020_table_7:row4:col3 = '71.7 [62.7, 82.0]'
- unparsed cell Mehta_2020_table_7:row4:col4 = '445 [397, 499]'
- unparsed cell Mehta_2020_table_7:row5:col2 = '60.2 [49.0, 74.1]'
- unparsed cell Mehta_2020_table_7:row5:col3 = '344 [282, 420]'
- companion parameter table 7 transcribed (6 record(s))
- LLM selected parameter table(s) 3, 4, 6, 7

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (2/7 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ff cl/f]` | 513 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ff cl/f]` |  | 513 | only_one_extracted |
| `gpt-oss-120b` | `parameters[treatment]` | 106 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | umeclidinium bromide (with fluticasone furoate and vilanterol) | umeclidinium bromide | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | umeclidinium | umeclidinium bromide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Mehta_2020_table_4:row0:col2', 'Mehta_2020_table_4:row0:col3', 'Mehta_2020_table_4:row0:col5', 'Mehta_2020_table_4:row0:col6', 'Mehta_2020_table_4:row0:col8', 'Mehta_2020_table_4:row0:col9', 'Mehta_2020_table_4:row0:col11', 'Mehta_2020_table_4:row0:col12'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 513 L/h | ['Mehta_2020:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bumeclidinium_bromide%5D%20UmeclidiniumBromide_Mehta2020_reference&body=Drug%3A%20umeclidinium_bromide%0ARecord%3A%20UmeclidiniumBromide_Mehta2020_reference%0APaper%3A%20Mehta_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:20 UTC</sub>
