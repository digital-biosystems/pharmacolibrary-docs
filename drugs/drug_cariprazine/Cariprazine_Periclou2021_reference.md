<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;cariprazine&quot;,&quot;href&quot;:&quot;drugs/drug_cariprazine/&quot;},{&quot;label&quot;:&quot;Periclou_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cariprazine — `Cariprazine_Periclou2021_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

### Reviewer guidance

**The cariprazine population model was not published because three of its six parameters — the apparent central volume V1/F (266 l), the peripheral volume V2 (149 l) and the DCAR central volume V1 (128 l) — were never extracted, leaving only 3 of 6 parameters covered.**

The record contains values for kabs (0.352 h−1), CL/F (21.5 l/h) and Q/F (0.431 l/h), but the three volume parameters V1/F, V2 and V1 were neither emitted nor defaulted, so the parameter coverage check found only 3 of 6 expected parameters. Because these volumes were left at library placeholder defaults, the model was held back and not simulated. The model builder additionally assumed apparent parameterization with F=1, Fm=1 and no molar correction. The model structure includes the metabolites DCAR and DDCAR formed from cariprazine in the central compartment. Extracted — cariprazine: kabs 0.352 h−1, CL 21.5 l/h, V1/F 266 l, Q 0.431 l/h, V2 149 l, V1 128 l.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Periclou A et al., Population Pharmacokinetics of Caripraz…, European journal of drug me… (2021)
  ·  DOI: [10.1007/s13318-020-00650-4](https://doi.org/10.1007/s13318-020-00650-4)

<div class="pk-model-meta" hidden drug="cariprazine" model-id="Cariprazine_Periclou2021_reference" status="not_simulated" stale="false" population="adults with schizophrenia or bipolar mania" measured-compound="cariprazine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka First-order absorption rate constant | `Q49` · kabs | 0.352 | h−1 | 9.777777777777777e-05 | 1/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| CL/F Apparent elimination clearance | `Q22` · CL | 21.5 | l/h | 5.972222222222223e-06 | L/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| VC/F Apparent central volume | `Q290` · V1/F | 266 | l | 0.266 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| Q3/F Apparent first distribution clearance | `Q30` · Q | 0.431 | l/h | 1.1972222222222222e-07 | L/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| VP1/F Apparent first peripheral volume | `Q64` · V2 | 149 | l | 0.149 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| DVC/F Apparent DCAR central volume | `Q63` · V1 | 128 | l | 0.128 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'DUR'
- dropped value-less row: 'Ka'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'Power of WTKG'
- dropped value-less row: 'Proportional shift for race = black'
- dropped value-less row: 'Proportional shift for race = Asiand'
- dropped value-less row: 'Proportional shift for race = Japanesed'
- dropped value-less row: 'VC/F'
- dropped unlinked row (NIL): 'Proportional shift for first dose' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row13:col1', 'Tab2:row26:col1', 'Tab2:row30:col1'])
- dropped value-less row: 'Q3/F'
- dropped value-less row: 'VP1/F'
- dropped value-less row: 'Q4/F'
- dropped value-less row: 'VP2/F'
- dropped value-less row: 'DCL/F'
- dropped value-less row: 'Proportional shift for sex = female'
- dropped value-less row: 'DVC/F'
- dropped value-less row: 'DQ/F'
- dropped value-less row: 'DVP/F'
- dropped value-less row: 'DDCL/F'
- dropped value-less row: 'DDVC/F'
- dropped value-less row: 'DDQ/F'
- dropped value-less row: 'DDVP/F'
- dropped value-less row: 'DDKtr'
- salvaged Q49 ('Ka First-order absorption rate constant'=0.352) from results prose — parameter table was unreadable
- salvaged Q22 ('CL/F Apparent elimination clearance'=21.5) from results prose — parameter table was unreadable
- salvaged Q290 ('VC/F Apparent central volume'=266) from results prose — parameter table was unreadable
- salvaged Q30 ('Q3/F Apparent first distribution clearance'=0.431) from results prose — parameter table was unreadable
- salvaged Q64 ('VP1/F Apparent first peripheral volume'=149) from results prose — parameter table was unreadable
- salvaged Q63 ('DVC/F Apparent DCAR central volume'=128) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cariprazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 16 linked by role; re-tagged parent→desmethyl-cariprazine (DCAR) ×5, parent→didesmethyl-cariprazine (DDCAR) ×5
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '2.57 (2.35, 2.79)'
- unparsed cell Tab2:row3:col1 = 'First-order absorption rate constant (h−1)'
- unparsed cell Tab2:row3:col2 = '0.352 (0.32, 0.39)'
- unparsed cell Tab2:row3:col4 = '118% CVb (99.5, 138)'
- unparsed cell Tab2:row4:col2 = '21.5 (21.1, 21.8)'
- unparsed cell Tab2:row4:col4 = '32.4% CV (30.7, 33.9)'
- unparsed cell Tab2:row5:col1 = '0.0946 (0.0341, 0.161)'
- unparsed cell Tab2:row6:col1 = '− 0.0907 (− 0.114, − 0.0639)'
- unparsed cell Tab2:row7:col1 = '− 0.178 (− 0.211, − 0.142)'
- unparsed cell Tab2:row8:col1 = '− 0.111 (− 0.178, − 0.0401)'
- unparsed cell Tab2:row9:col2 = '266 (241, 288)'
- unparsed cell Tab2:row9:col4 = '109% CVb (90.2, 125)'
- unparsed cell Tab2:row11:col1 = '1.66 (1.40, 1.96)'
- unparsed cell Tab2:row19:col2 = '77.3 (75.3, 79.4)'
- unparsed cell Tab2:row19:col4 = '42.4% CV (40.7, 44.1)'
- unparsed cell Tab2:row20:col1 = '0.578 (0.488, 0.648)'
- unparsed cell Tab2:row21:col1 = '0.249 (0.203, 0.292)'
- unparsed cell Tab2:row22:col1 = '− 0.0861 (− 0.135, − 0.0432)'
- unparsed cell Tab2:row23:col1 = '− 0.145 (− 0.218, − 0.0574)'
- unparsed cell Tab2:row24:col1 = '− 0.160 (− 0.190, − 0.130)'
- unparsed cell Tab2:row25:col2 = '128 (106, 150)'
- unparsed cell Tab2:row25:col4 = '115% CVb (103, 130)'
- unparsed cell Tab2:row27:col1 = '1.18 (0.604, 1.74)'
- unparsed cell Tab2:row28:col2 = '78.5 (60.9, 105)'
- unparsed cell Tab2:row29:col2 = '347 (292, 411)'
- unparsed cell Tab2:row32:col2 = '9.24 (8.93, 9.57)'
- unparsed cell Tab2:row32:col4 = '57.4% CV (54.3, 60.3)'
- unparsed cell Tab2:row37:col2 = '1310 (1260, 1360)'
- unparsed cell Tab2:row37:col4 = '77.8% CV (73.0, 82.7)'
- unparsed cell Tab2:row44:col1 = 'Rate constant delaying DDCAR formation (h−1)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.5 L/h | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 266 L | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 128 L | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 149 L | not captured | not captured | ['Periclou_2021:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V1/F', 'V2', 'V1'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 10.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 5.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 19.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 18.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 7.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cariprazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Periclou_2021` / `Periclou_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cariprazine/models/modelica/Cariprazine_Periclou2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cariprazine/models/modelica/Cariprazine_Periclou2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_modelica.zip" download>Cariprazine_Periclou2021_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_matlab.zip" download>Cariprazine_Periclou2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_matlab_simbio.zip" download>Cariprazine_Periclou2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_sbml.zip" download>Cariprazine_Periclou2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_cellml.zip" download>Cariprazine_Periclou2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:24 UTC</sub>
