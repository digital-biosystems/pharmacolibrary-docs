<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Morphine&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/&quot;},{&quot;label&quot;:&quot;Morse_2022 \u00b7 po_morphine_10_mg_4_h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Garrett1979v2_reference&quot;,&quot;label&quot;:&quot;Garrett_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Garrett1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Glave2023_m3g&quot;,&quot;label&quot;:&quot;G\u00fclave_2023_m3g&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Glave2023_m3g.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Got1994_reference&quot;,&quot;label&quot;:&quot;Got_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Got1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_iv_morphine_2_mg_2_h&quot;,&quot;label&quot;:&quot;Morse_2022_iv_morphine_2_mg_2_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_iv_morphine_2_mg_2_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_po_morphine_10_mg_4_h&quot;,&quot;label&quot;:&quot;Morse_2022_po_morphine_10_mg_4_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Verscheijden2021_morphine&quot;,&quot;label&quot;:&quot;Verscheijden_2021_morphine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Verscheijden2021_morphine.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Yalcin2022_mulla_et_al_37_uk&quot;,&quot;label&quot;:&quot;Yalcin_2022_mulla_et_al_37_uk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Yalcin2022_mulla_et_al_37_uk.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Morphine — `Morphine_Morse2022_po_morphine_10_mg_4_h`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUCt, Cavg and Css have no unit.

<div class="pk-model-meta" hidden drug="Morphine" model-id="Morphine_Morse2022_po_morphine_10_mg_4_h" status="needs_review" stale="false" population="neonates, children and adolescents (models scaled from adult diamorphine and paediatric morphine data)" measured-compound="morphine" parameterization="mechanistic" topology="retention"></div>

## Citation
Morse JD, Anderson BJ, Gastine S, Wong ICK, Standing JF. Pharmacokinetic modeling and simulation to understand diamorphine dose-response in neonates, children, and adolescents. Paediatric anaesthesia 32(6):716–726 (2022).
  ·  DOI: [10.1111/pan.14425](https://doi.org/10.1111/pan.14425)

## Population and dosing

**Population:** neonates, children and adolescents (models scaled from adult diamorphine and paediatric morphine data) · condition healthy (simulation/paediatric analgesia) · age group mixed.

**Dosed compound ≠ measured compound:** dosed diamorphine, measured morphine.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bioavailability | Fab | 0.5 |  |
| AUC0-24 μg.L-1.h | AUCt | 403 |  |
| CAVG μg.L-1 | Cavg | 16.8 |  |
| CeSS μg.L-1 | Css | 17.6 |  |
| T 1/2 keo MOR | t1/2z | 16 | minutes |
| Vd threshold | V | 5.0 | L/kg |
| Ka (hour−1) | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCt, Cavg and Css have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — morphine: Fab 0.5, AUCt 403, Cavg 16.8, Css 17.6, t1/2z 16 minutes, V 5 L/kg, kabs 0.889 hour−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of t 1/2 keo mor: this record has none, the second reading 16; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bioavailability | `Q40` · Fab | 0.5 |  |  |  |  | exact (1) | Morse_2022_table_1:row1:col1, Morse_2022_table_1:row2:col1 |
| AUC0-24 μg.L-1.h | `Q19` · AUCt | 403 |  |  |  |  | llm (0.6) | Morse_2022_table_1:row1:col3, Morse_2022_table_1:row2:col3 |
| CAVG μg.L-1 | `Q71` · Cavg | 16.8 |  |  |  |  | llm_confirmed (0.6) | Morse_2022_table_1:row1:col4, Morse_2022_table_1:row2:col4 |
| CeSS μg.L-1 | `Q34` · Css | 17.6 |  |  |  |  | llm (0.6) | Morse_2022_table_1:row1:col5, Morse_2022_table_1:row2:col5 |
| T 1/2 keo MOR | `Q57` · t1/2z | 16 | minutes | 960 | s | h | toxin_unit_relink (0.85) | Morse_2022:other_prose |
| Vd threshold | `Q61` · V | 5.0 | L/kg | 0.35 | m3 | L | review_gapfill (0.7) | Hernández-Gago_2026:review |
| Ka (hour−1) | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Total dose 24 h | Q900 | llm |

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T 1/2 keo MOR (Q57)

**Interpretation flags:**
- dropped value-less row: 'TABS'
- documentation only: 'KA' → Q49 (kabs) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'FIN' → Q87 (Frel) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'F6MAM' → Q41 (FG) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'BETAV' → Q87 (Frel) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'TVOL' → Q61 (V) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'FVOL' → Q41 (FG) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'VDIAM' → Q76 (V/F) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- dropped duplicate Q40 ('V6MAM', value None) — already have one for this compound
- documentation only: 'VM' → Q66 (Vmax) comes from ['fig_6:caption'], not from a located parameter table — not emitted as a model parameter
- dropped duplicate Q40 ('VM3G', value None) — already have one for this compound
- dropped duplicate Q40 ('VM6G', value None) — already have one for this compound
- dropped unlinked row (NIL): 'dose' — extend the ontology if this is a real PK parameter (source ['fig_6:caption'])
- salvaged Q57 ('T 1/2 keo MOR'=16) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'Mucosal absorption is rapid with a low first pass metabolism, contributing to the quick onset of analgesia. 5 Despite us')
- model equation 'FVOL = 1-BETAV*EXP(-PNA*LOGN(2)/TVO)' not bound — neither LHS nor base term 'BETAV' linked to an ontology parameter
- status held at "Needs review" — not promoted
- population split: 'po morphine 10 mg 4 h' subgroup of Morse_2022 (paper reports 2 populations: iv morphine 2 mg 2 h, po morphine 10 mg 4 h)
- row roles (LLM): model_class=compartmental; 0/18 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for '6-mono-acetylmorphine (6-MAM)' — its concentrations stay mass-only
- molar mass: none found for 'morphine-6-glucuronide (M6G)' — its concentrations stay mass-only
- molar mass: none found for 'morphine-3-glucuronide (M3G)' — its concentrations stay mass-only
- skipped review gap-fill of CL from Bardol_2025: its label names a different analyte ('clonidine') — 'Elimination clearance for clonidine [8]'
- gap-filled Q61 (V) from Hernández-Gago_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q19, Q71, Q34 — no SI value to build from)

**Extraction notes:**
- table Morse_2022_table_1: units_need_context
- table Morse_2022_table_1: unparsed_numeric_cell
- transposed table Morse_2022_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1
- captured model equation FVOL = 1-BETAV*EXP(-PNA*LOGN(2)/TVO)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[t 1/2 keo mor]` |  | 16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 keo mor]` | 16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total dose 24 h].parameter_id` | Q900 | Q364 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hernández-Gago_2026:review'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Morse_2022_table_1:row1:col3', 'Morse_2022_table_1:row2:col3'] |
| C5_unit_missing_Q34 | fail | [mass] / [length] ** 3 |  | ['Morse_2022_table_1:row1:col5', 'Morse_2022_table_1:row2:col5'] |
| C5_unit_missing_Q71 | fail | [mass] / [length] ** 3 |  | ['Morse_2022_table_1:row1:col4', 'Morse_2022_table_1:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 350 L | ['Hernández-Gago_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_modelica.zip" download>Morphine_Morse2022_po_morphine_10_mg_4_h_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_fmi.zip" download>Morphine_Morse2022_po_morphine_10_mg_4_h_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_matlab.zip" download>Morphine_Morse2022_po_morphine_10_mg_4_h_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_sbml.zip" download>Morphine_Morse2022_po_morphine_10_mg_4_h_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_cellml.zip" download>Morphine_Morse2022_po_morphine_10_mg_4_h_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2853 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 960 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Morse JD, Anderson BJ, Gastine S, Wong ICK, Standing JF. Pharmacokinetic modeling and simulation to understand diamorphine dose-response in neonates, children, and adolescents. Paediatric anaesthesia 32(6):716–726 (2022). [doi:10.1111/pan.14425](https://doi.org/10.1111/pan.14425)

**This record:** Pharmacolibrary, model `Morphine_Morse2022_po_morphine_10_mg_4_h`. <https://pharmacolibrary.github.io/#/drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h>

```bibtex
@misc{pharmacolibrary_MorphineMorse2022pomorphine10mg4h,
  title  = {{Pharmacolibrary model Morphine_Morse2022_po_morphine_10_mg_4_h}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h},
  note   = {Parameters from doi:10.1111/pan.14425},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h/Morphine_Morse2022_po_morphine_10_mg_4_h_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Morphine_Morse2022_po_morphine_10_mg_4_h_params.json` · controls `Morphine_Morse2022_po_morphine_10_mg_4_h_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Morse2022_po_morphine_10_mg_4_h&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Morse2022_po_morphine_10_mg_4_h%0APaper%3A%20Morse_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:59 UTC</sub>
