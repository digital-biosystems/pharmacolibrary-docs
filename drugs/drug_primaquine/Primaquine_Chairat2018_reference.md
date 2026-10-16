<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Chairat_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Chairat2018_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Q12/q21 (hepatic flow, 90 L/h), ka use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (Fab, MTT and fm), so that value has no SI equivalent. Extracted — primaquine: Fab 100 %, MTT 0.833 h, n_transit 5, CL/F 23.1 L/h, V 160 L, tlag 0 h; carboxyprimaquine: fm 0.46 %, CL 0.377 L/h, V 10.5 L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018)
  ·  DOI: [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297)

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Chairat2018_reference" status="needs_review" stale="false" population="healthy adult volunteers" measured-compound="primaquine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent–metabolite model: parent with 1 compartment(s) plus a liver compartment (first pass); metabolite carboxyprimaquine: 1 compartment(s); formed in the liver; oral dose — template `PK_3M_3C`.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax PRQ (ng/mL) | `Q32` · Cmax | 144 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row1:col4, Chairat_2018_table_2:row13:col4, Chairat_2018_table_2:row25:col4 | — | not captured |
| Tmax PRQ (h) | `Q56` · tmax | 1.35 | h | 4860.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row2:col4, Chairat_2018_table_2:row14:col4, Chairat_2018_table_2:row26:col4 | — | not captured |
| t1/2 PRQ (h) | `Q57` · t1/2z | 5.74 | h | 20664.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row3:col4, Chairat_2018_table_2:row15:col4, Chairat_2018_table_2:row27:col4 | — | not captured |
| AUC0–48 PRQ (ng·h/mL) | `Q88` · AUC | 1370 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Chairat_2018_table_2:row4:col4, Chairat_2018_table_2:row16:col4, Chairat_2018_table_2:row28:col4 | — | not captured |
| AUC0–∞ PRQ (ng·h/mL) | `Q17` · AUC∞ | 1380 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row5:col4, Chairat_2018_table_2:row17:col4, Chairat_2018_table_2:row29:col4 | — | not captured |
| Cmax CPRQ (ng/mL) | `Q32` · Cmax | 1220 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row6:col4, Chairat_2018_table_2:row18:col4, Chairat_2018_table_2:row30:col4 | — | not captured |
| Tmax CPRQ (h) | `Q56` · tmax | 8.87 | h | 31931.999999999996 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row7:col4, Chairat_2018_table_2:row19:col4, Chairat_2018_table_2:row31:col4 | — | not captured |
| t1/2 CPRQ (h) | `Q57` · t1/2z | 13.8 | h | 49680.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row8:col4, Chairat_2018_table_2:row20:col4, Chairat_2018_table_2:row32:col4 | — | not captured |
| AUC0–48 CPRQ (ng·h/mL) | `Q19` · AUCt | 34600 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Chairat_2018_table_2:row9:col4, Chairat_2018_table_2:row21:col4, Chairat_2018_table_2:row33:col4 | — | not captured |
| AUC0–∞ CPRQ (ng·h/mL) | `Q17` · AUC∞ | 45700 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row10:col4, Chairat_2018_table_2:row22:col4, Chairat_2018_table_2:row34:col4 | — | not captured |
| AUC_CPRQ/AUC_PRQ | `Q21` · AUC ratio | 32.9 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row11:col4, Chairat_2018_table_2:row23:col4, Chairat_2018_table_2:row35:col4 | — | not captured |
| Lag time | `Q83` · tlag | 0.0 | h | 0.0 | h | not captured | review_gapfill (0.7) | Fasinu_2022_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['q12/q21 (hepatic flow, 90 L/h)', 'ka']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped value-less row: 'NA'
- dropped value-less row: 'RSE and 95% CI'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=primaquine
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'Incorporation of hepatic first-pass metabolism showed a significant improvement (P &lt; 0.05) in model fit (ΔOFV of −260, −')
- population split: 'primaquine co-administered with antimalarial drugs: pyronaridine/artesunate' subgroup of Chairat_2018 (paper reports 4 populations: primaquine alone, primaquine co-administered with antimalarial drugs: chloroquine, primaquine co-administered with antimalarial drugs: dihydroartemisinin/ piperaquine, primaquine co-administered with antimalarial drugs: pyronaridine/artesunate)
- row roles: 2 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 35/35 row label(s) assigned, 18 linked by role; re-tagged primaquine→parent ×86, primaquine→carboxyprimaquine ×65, primaquine→chloroquine ×1
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Fasinu_2022_2's review values (primary lacked it)
- dropped unlinked row (NIL): 'VIFPRQ' — extend the ontology if this is a real PK parameter (source ['Chairat_2018_table_1:row11:col1'])
- dropped unlinked row (NIL): 'VIFPRQ' — extend the ontology if this is a real PK parameter (source ['Chairat_2018_table_1:row13:col1', 'Chairat_2018_table_1:row13:col3', 'Chairat_2018_table_1:row13:col5', 'Chairat_2018_table_1:row16:col1', 'Chairat_2018_table_1:row16:col3', 'Chairat_2018_table_1:row16:col5'])
- dropped unlinked row (NIL): 'CL/FPRQ' — extend the ontology if this is a real PK parameter (source ['Chairat_2018_table_1:row15:col1', 'Chairat_2018_table_1:row15:col3'])
- metabolite volume: 'VIFCPRQ (L)' Q63→Q61 for carboxyprimaquine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=primaquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'Incorporation of hepatic first-pass metabolism showed a significant improvement (P &lt; 0.05) in model fit (ΔOFV of −260, −')
- status held at route_to_review — not promoted
- base model from table(s) without population columns (Chairat_2018_table_1, dky297-T1:footnote); populations primaquine alone, primaquine co-administered with antimalarial drugs: chloroquine, primaquine co-administered with antimalarial drugs: dihydroartemisinin/ piperaquine, primaquine co-administered with antimalarial drugs: pyronaridine/artesunate kept as separate records

**Extraction notes:**
- table Chairat_2018_table_1: unbound_uncertainty
- table Chairat_2018_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (107 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2
- LLM region Chairat_2018:other_prose: Connection error.
- LLM region Chairat_2018:other_prose: Connection error.
- LLM region Chairat_2018:discussion_prose: Connection error.

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row5:col4', 'Chairat_2018_table_2:row17:col4', 'Chairat_2018_table_2:row29:col4'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row10:col4', 'Chairat_2018_table_2:row22:col4', 'Chairat_2018_table_2:row34:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row9:col4', 'Chairat_2018_table_2:row21:col4', 'Chairat_2018_table_2:row33:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row1:col4', 'Chairat_2018_table_2:row13:col4', 'Chairat_2018_table_2:row25:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row6:col4', 'Chairat_2018_table_2:row18:col4', 'Chairat_2018_table_2:row30:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row2:col4', 'Chairat_2018_table_2:row14:col4', 'Chairat_2018_table_2:row26:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row7:col4', 'Chairat_2018_table_2:row19:col4', 'Chairat_2018_table_2:row31:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row3:col4', 'Chairat_2018_table_2:row15:col4', 'Chairat_2018_table_2:row27:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row8:col4', 'Chairat_2018_table_2:row20:col4', 'Chairat_2018_table_2:row32:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Fasinu_2022_2:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row4:col4', 'Chairat_2018_table_2:row16:col4', 'Chairat_2018_table_2:row28:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[carboxyprimaquine] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.0105, 'CL': 1.0472222222222222e-07, 'formation': 2.951666666666667e-08} | not captured | carboxyprimaquine = compartment M1 with its own numbers |
| T3_metabolite_output[carboxyprimaquine] | not captured | pass | not captured | 6.772921432099152e-06 | not captured | C_M1 (carboxyprimaquine) must rise above 0 when the parent is dosed |
| T3_molar_mass[carboxyprimaquine] | not captured | pass | not captured | {'MW': 0.2593467, 'MW_m1': 0.27432} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=primaquine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | skipped | not captured | not captured | not captured | parent–metabolite template: every compound has its own slot |
| T3_topology_template | not captured | pass | parent_metabolite_hepatic → PK_3M_3C* | PK_3M_3C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chairat_2018` / `Chairat_2018::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/models/modelica/Primaquine_Chairat2018_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/models/modelica/Primaquine_Chairat2018_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/models/modelica/Primaquine_Chairat2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference.svg" alt="Primaquine_Chairat2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 30 mg, single dose, first-order absorption into a hepatic compartment first (first pass) (ka 0.5 /h, F 1). Dose in the paper: 30 mg.

<dbs-fmusim paramsurl="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_params.json" metaurl="assets/fmu/PK_3M_3C.vr.json" wasmurl="assets/fmu/PK_3M_3C.js" controlsurl="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_3C` · parameters `Primaquine_Chairat2018_reference_params.json` · controls `Primaquine_Chairat2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:12 UTC</sub>
