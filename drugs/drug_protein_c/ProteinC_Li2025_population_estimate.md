<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;protein C&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/&quot;},{&quot;label&quot;:&quot;Li_2025 \u00b7 population_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ProteinC_Cojutti2024_reference&quot;,&quot;label&quot;:&quot;Cojutti_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ProteinC_Troisi2024_reference&quot;,&quot;label&quot;:&quot;Troisi_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Troisi2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# protein C — `ProteinC_Li2025_population_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-05 15:21 UTC); the status shown comes from the current checks. The model does not reproduce the paper's terminal half-life (model/paper ratio 2.24).

<div class="pk-model-meta" hidden drug="protein C" model-id="ProteinC_Li2025_population_estimate" status="needs_review" stale="true" population="patients with severe congenital or acquired protein C deficiency" measured-compound="protein C" parameterization="mechanistic" topology="1C"></div>

## Citation
Li Z, Sorribes IC, Schneider J, Taylor A. Evaluation of pharmacokinetics of intravenous protein C concentrate in protein C deficiency: implications for treatment initiation and maintenance. Research and practice in thrombosis and haemostasis 9(3):102859 (2025).
  ·  DOI: [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859)

## Population and dosing

**Population:** patients with severe congenital or acquired protein C deficiency · condition protein C deficiency · age group mixed · n = &gt;=58.

**Dosing:** 45, 60, 80, 120 IU/kg, iv, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed protein C concentrate, measured protein C.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL, dL/h | CL | 7.14 | dL/h | 0.0992 (None% RSE) |
| Vd, dL | V | 60.7 | dL | 0.0505 (None% RSE) |
| effect_of_age_on_endo | effect_of_age_on_endo | 0.589 |  |  |
| theta_v_age | theta_v_age | -0.112 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 2.24).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — protein c: CL 7.14, V 60.7.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has protein C, the second reading protein C concentrate; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL, dL/h | `Q22` · CL | 7.14 | dL/h | 1.983e-07 | m3/s | dl/h | exact (1) | tbl4:row1:col1 | 0.0992 (None% RSE) |
| Vd, dL | `Q61` · V | 60.7 | dL | 0.00607 | m3 | dl | exact (1) | tbl4:row2:col1 | 0.0505 (None% RSE) |
| effect_of_age_on_endo | `Q900` · effect_of_age_on_endo | 0.589 |  |  |  |  |  | tbl4:row7:col1 |  |
| theta_v_age | `Q900` · theta_v_age | -0.112 |  |  |  |  |  | tbl4:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ENDO, IU/h' — extend the ontology if this is a real PK parameter (source ['tbl4:row5:col1'])
- dropped duplicate Q22 ('Effect of SCPCD indication on CL', value '-0.575') — already have one for this compound
- covariate level 'Effect of age on ENDO' → Q900:effect_of_age_on_endo = 0.589 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Effect of SCPCD indication on ENDO' — extend the ontology if this is a real PK parameter (source ['tbl4:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=protein C
- population split: 'population estimate' subgroup of Li_2025 (paper reports 4 populations: adolescents (≥12 to &lt;16 y) (n = 3), adults (≥16 y)(n = 9), neonates and infants (birth to &lt;2 y) (n = 10), population estimate)
- molar mass: none found for 'protein_c' — its concentrations stay mass-only
- molar mass: none found for 'protein C' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl4:row1:col4 = '7.03 (5.94, 8.66)'
- unparsed cell tbl4:row2:col4 = '60.8 (56.8, 65.3)'
- unparsed cell tbl4:row3:col4 = '0.185 (0.159, 0.214)'
- unparsed cell tbl4:row5:col4 = '201 (159, 248)'
- unparsed cell tbl4:row6:col4 = '−0.566 (−0.651, −0.479)'
- unparsed cell tbl4:row7:col4 = '0.586 (0.422, 0.775)'
- unparsed cell tbl4:row8:col4 = '−0.967 (−0.982, −0.938)'
- unparsed cell tbl4:row9:col4 = '−0.112 (−0.169, −0.0742)'
- unparsed cell tbl4:row10:col4 = '0.0914 (0.0136, 0.162)'
- unparsed cell tbl4:row11:col4 = '0.0488 (0.0231, 0.0777)'
- unparsed cell tbl4:row12:col4 = '0.0953 (0.0158, 0.253)'
- unparsed cell Li_2025_table_2:row1:col1 = '2.38 (84.1)a'
- unparsed cell Li_2025_table_2:row1:col2 = '8.19 (35.8)e'
- unparsed cell Li_2025_table_2:row2:col1 = '0.555 (122.0)a'
- unparsed cell Li_2025_table_2:row2:col2 = '0.0678 (49.0)e'
- unparsed cell Li_2025_table_2:row4:col2 = '56.8 (34.6)f'
- unparsed cell Li_2025_table_2:row4:col3 = '53.5 (13.3)c'
- unparsed cell Li_2025_table_2:row4:col4 = '74.2 (14.8)b'
- unparsed cell Li_2025_table_2:row5:col1 = '2.09 (63.7)a'
- unparsed cell Li_2025_table_2:row5:col2 = '0.780 (31.1)e'
- companion parameter table 2 transcribed (11 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl].rse_percent` |  | 6.76 | mismatch |
| `gpt-oss:120b` | `parameters[effect_of_age_on_endo].rse_percent` |  | 12.7 | mismatch |
| `gpt-oss:120b` | `parameters[theta_v_age].rse_percent` |  | -32.8 | mismatch |
| `gpt-oss:120b` | `parameters[vd].rse_percent` |  | 5.07 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | protein C | protein C concentrate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 2.63 | 5.893 | 2.241 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['tbl4:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tbl4:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.14 |  |  | ['tbl4:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.714 L/h |  |  | ['tbl4:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.07 L |  |  | ['tbl4:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprotein_c%5D%20ProteinC_Li2025_population_estimate&body=Drug%3A%20protein_c%0ARecord%3A%20ProteinC_Li2025_population_estimate%0APaper%3A%20Li_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_protein_c/ProteinC_Li2025_population_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 15:21 UTC</sub>
