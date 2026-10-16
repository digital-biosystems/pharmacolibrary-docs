<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;saxagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_saxagliptin/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# saxagliptin — `Saxagliptin_Wang2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — saxagliptin: Cmax 3.72e+03 ng/mL, tmax 0.11 h, AUC 585 ng*h/mL, t1/2ka 0.07 h, t1/2α 0.06 h, t1/2β 0.36 h, V 2.31e+03 mL/kg, V2 1.84e+04 mL/kg, … (+4); 5-hydroxy saxagliptin: V1 141 ml/kg, V2 138 ml/kg, CL 882 ml/h/kg, Q 472 ml/h/kg.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:41.846498+00:00) predates the upstream re-run (2026-10-07 16:14:29.138700+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `unknown`, measured `saxagliptin`.

## Citation
Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024)
  ·  DOI: [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3)

<div class="pk-model-meta" hidden drug="saxagliptin" model-id="Saxagliptin_Wang2024_reference" status="needs_review" stale="true" population="unknown" measured-compound="saxagliptin" parameterization="mechanistic" topology=""></div>

**Model structure:** —; no model was built for this record.  
**Parameters:** 16 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 3716.88 | ng/mL | not captured | [ng] / [ml] | 28.56 | exact (1.0) | Tab11:row1:col1, Tab11:row1:col2, Tab11:row1:col3, Wang_2024_table_9:row0:col1, Wang_2024_table_9:row0:col2, Wang_2024_table_9:row0:col3 | — | not captured |
| Tmax (h) | `Q56` · tmax | 0.11 | h | 396.0 | [h] | 27.63 | exact (1.0) | Tab11:row2:col1, Tab11:row2:col2, Tab11:row2:col3 | — | not captured |
| AUC (ng*h/mL) | `Q88` · AUC | 585.04 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | 20.82 | exact (1.0) | Tab11:row3:col1, Tab11:row3:col2, Tab11:row3:col3, Wang_2024_table_9:row1:col1, Wang_2024_table_9:row1:col2, Wang_2024_table_9:row1:col3 | — | not captured |
| t1/2Ka (h) | `Q95` · t1/2ka | 0.07 | h | 252.00000000000003 | [h] | 37.50 | exact (1.0) | Tab11:row4:col1, Tab11:row4:col2, Tab11:row4:col3 | — | not captured |
| t1/2a (h) | `Q59` · t1/2α | 0.06 | h | 216.0 | [h] | 16.50 | llm_corrected (0.6) | Tab11:row5:col1, Tab11:row5:col2, Tab11:row5:col3, Wang_2024_table_9:row2:col1, Wang_2024_table_9:row2:col2, Wang_2024_table_9:row2:col3 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | 0.36 | h | 1296.0 | [h] | 7.88 | exact (1.0) | Tab11:row6:col1, Tab11:row6:col2, Tab11:row6:col3, Wang_2024_table_9:row3:col1, Wang_2024_table_9:row3:col2, Wang_2024_table_9:row3:col3 | — | not captured |
| V (mL/kg) | `Q61` · V | 2307.24 | mL/kg | 0.16150679999999995 | [ml] / [kg] | 47.57 | exact (1.0) | Tab11:row7:col1, Tab11:row7:col2, Tab11:row7:col3 | — | not captured |
| V2 (mL/kg) | `Q64` · V2 | 18393.30 | mL/kg | 1.2875309999999998 | [ml] / [kg] | 89.99 | exact (1.0) | Tab11:row8:col1, Tab11:row8:col2, Tab11:row8:col3 | — | not captured |
| CL (mL/h/kg) | `Q22` · CL | 3245.80 | mL/h/kg | 6.311277777777779e-05 | [ml] / [[h] · [kg]] | 27.79 | exact (1.0) | Tab11:row9:col1, Tab11:row9:col2, Tab11:row9:col3 | — | not captured |
| CL2 (mL/h/kg) | `Q30` · Q | 17090.42 | mL/h/kg | 0.0003323137222222222 | [ml] / [[h] · [kg]] | 68.60 | exact (1.0) | Tab11:row10:col1, Tab11:row10:col2, Tab11:row10:col3 | — | not captured |
| K12 (1/h) | `Q301` · k12 | 3.51 | 1/h | 0.000975 | 1/h | 33.05 | exact (1.0) | Tab11:row11:col1, Tab11:row11:col2, Tab11:row11:col3, Wang_2024_table_9:row8:col1, Wang_2024_table_9:row8:col2, Wang_2024_table_9:row8:col3 | — | not captured |
| K21 (1/h) | `Q302` · k21 | 3.42 | 1/h | 0.00095 | 1/h | 3.16 | exact (1.0) | Tab11:row12:col1, Tab11:row12:col2, Tab11:row12:col3, Wang_2024_table_9:row9:col1, Wang_2024_table_9:row9:col2, Wang_2024_table_9:row9:col3 | — | not captured |
| V (ml/kg) | `Q63` · V1 | 141.49 | ml/kg | 0.0099043 | [ml] / [kg] | 26.09 | exact (1.0) | Wang_2024_table_9:row4:col1, Wang_2024_table_9:row4:col2, Wang_2024_table_9:row4:col3 | — | not captured |
| V2 (ml/kg) | `Q64` · V2 | 137.81 | ml/kg | 0.0096467 | [ml] / [kg] | 9.46 | exact (1.0) | Wang_2024_table_9:row5:col1, Wang_2024_table_9:row5:col2, Wang_2024_table_9:row5:col3 | — | not captured |
| CL (ml/h/kg) | `Q22` · CL | 882.19 | ml/h/kg | 1.7153694444444444e-05 | [ml] / [[h] · [kg]] | 22.60 | exact (1.0) | Wang_2024_table_9:row6:col1, Wang_2024_table_9:row6:col2, Wang_2024_table_9:row6:col3 | — | not captured |
| CL2 (ml/h/kg) | `Q30` · Q | 471.60 | ml/h/kg | 9.17e-06 | [ml] / [[h] · [kg]] | 12.06 | exact (1.0) | Wang_2024_table_9:row7:col1, Wang_2024_table_9:row7:col2, Wang_2024_table_9:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'K12 (1/h)' → 1/h (from the popPK convention: 'K12 is a first-order transfer rate constant; the standard unit for first-order rate constants in population PK is 1/h, c')
- implicit units: 'K21 (1/h)' → 1/h (from the popPK convention: 'K21 is a first-order transfer rate constant; the standard unit for first-order rate constants in population PK is 1/h, c')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=saxagliptin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 24 linked by role; re-tagged parent→5-hydroxy saxagliptin ×12

**Extraction notes:**
- companion parameter table 9 transcribed (30 record(s))
- LLM selected parameter table(s) 9, 11

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2024_table_9:row6:col1', 'Wang_2024_table_9:row6:col2', 'Wang_2024_table_9:row6:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row10:col1', 'Tab11:row10:col2', 'Tab11:row10:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2024_table_9:row7:col1', 'Wang_2024_table_9:row7:col2', 'Wang_2024_table_9:row7:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab11:row11:col1', 'Tab11:row11:col2', 'Tab11:row11:col3', 'Wang_2024_table_9:row8:col1', 'Wang_2024_table_9:row8:col2', 'Wang_2024_table_9:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab11:row12:col1', 'Tab11:row12:col2', 'Tab11:row12:col3', 'Wang_2024_table_9:row9:col1', 'Wang_2024_table_9:row9:col2', 'Wang_2024_table_9:row9:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row1:col1', 'Tab11:row1:col2', 'Tab11:row1:col3', 'Wang_2024_table_9:row0:col1', 'Wang_2024_table_9:row0:col2', 'Wang_2024_table_9:row0:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab11:row2:col1', 'Tab11:row2:col2', 'Tab11:row2:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab11:row5:col1', 'Tab11:row5:col2', 'Tab11:row5:col3', 'Wang_2024_table_9:row2:col1', 'Wang_2024_table_9:row2:col2', 'Wang_2024_table_9:row2:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab11:row6:col1', 'Tab11:row6:col2', 'Tab11:row6:col3', 'Wang_2024_table_9:row3:col1', 'Wang_2024_table_9:row3:col2', 'Wang_2024_table_9:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row7:col1', 'Tab11:row7:col2', 'Tab11:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2024_table_9:row4:col1', 'Wang_2024_table_9:row4:col2', 'Wang_2024_table_9:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row8:col1', 'Tab11:row8:col2', 'Tab11:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2024_table_9:row5:col1', 'Wang_2024_table_9:row5:col2', 'Wang_2024_table_9:row5:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row3:col1', 'Tab11:row3:col2', 'Tab11:row3:col3', 'Wang_2024_table_9:row1:col1', 'Wang_2024_table_9:row1:col2', 'Wang_2024_table_9:row1:col3'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab11:row4:col1', 'Tab11:row4:col2', 'Tab11:row4:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 3245.8 | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 227 L/h | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 61.8 L/h | not captured | not captured | ['Wang_2024_table_9:row6:col1', 'Wang_2024_table_9:row6:col2', 'Wang_2024_table_9:row6:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 162 L | not captured | not captured | ['Tab11:row7:col1', 'Tab11:row7:col2', 'Tab11:row7:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 9.9 L | not captured | not captured | ['Wang_2024_table_9:row4:col1', 'Wang_2024_table_9:row4:col2', 'Wang_2024_table_9:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.29e+03 L | not captured | not captured | ['Tab11:row8:col1', 'Tab11:row8:col2', 'Tab11:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.65 L | not captured | not captured | ['Wang_2024_table_9:row5:col1', 'Wang_2024_table_9:row5:col2', 'Wang_2024_table_9:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_saxagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2024` / `Wang_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:14 UTC</sub>
