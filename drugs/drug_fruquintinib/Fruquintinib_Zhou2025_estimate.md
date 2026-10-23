<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;fruquintinib&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/&quot;},{&quot;label&quot;:&quot;Zhou_2025 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_estimate&quot;,&quot;label&quot;:&quot;Zhou_2025_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_fresco_2_nct04322539&quot;,&quot;label&quot;:&quot;Zhou_2025_fresco_2_nct04322539&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_fresco_2_nct04322539.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_nct01645215&quot;,&quot;label&quot;:&quot;Zhou_2025_nct01645215&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_nct01645215.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_nct01975077&quot;,&quot;label&quot;:&quot;Zhou_2025_nct01975077&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_nct01975077.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_nct04557397&quot;,&quot;label&quot;:&quot;Zhou_2025_nct04557397&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_nct04557397.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_nct04645940&quot;,&quot;label&quot;:&quot;Zhou_2025_nct04645940&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_nct04645940.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_overall&quot;,&quot;label&quot;:&quot;Zhou_2025_overall&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_overall.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fruquintinib_Zhou2025_us1_nct03251378&quot;,&quot;label&quot;:&quot;Zhou_2025_us1_nct03251378&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fruquintinib/Fruquintinib_Zhou2025_us1_nct03251378.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fruquintinib — `Fruquintinib_Zhou2025_estimate`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated. · molar_mass_missing:M11: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span>

> Fruquintinib’s terminal half-life is flagged at 43.22364907201837 versus 0.275, although the paper and model both report 43.2 h.

<div class="pk-model-meta" hidden drug="fruquintinib" model-id="Fruquintinib_Zhou2025_estimate" status="needs_review" stale="false" population="patients with refractory metastatic colorectal cancer and healthy volunteers" measured-compound="fruquintinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Zhou X, Yang X, Grinshpun B, Taylor A, Strong L, Dasari A et al. Population Pharmacokinetics of Fruquintinib, a Selective Oral Inhibitor of VEGFR -1, -2, and -3, in Patients with Refractory Metastatic Colorectal Cancer. Journal of clinical pharmacology 65(7):873–884 (2025).
  ·  DOI: [10.1002/jcph.70001](https://doi.org/10.1002/jcph.70001)

## Population and dosing

**Population:** patients with refractory metastatic colorectal cancer and healthy volunteers · condition refractory metastatic colorectal cancer; healthy volunteers · age group adult · n = 557.

**Dosing:** 1, 6 mg, oral.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite M11: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate.svg" alt="Fruquintinib_Zhou2025_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 0.808 | L/h |
| V/F (L) | V/F | 50.4 | L |
| Ka (1/h) | kabs | 2.52 | 1/h |
| Lag time (h) | tlag | 0.463 | h |
| CLM/f (L/h) | CL/F | 0.161 | L/h |
| VM/f (L) | V1/F | 11.7 | L |
| V/F ∼ Healthy subject fractional change | equation variable | -0.0908 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.430 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 1.06 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.924 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 1.28 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.
- a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated. · molar_mass_missing:M11: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fruquintinib’s terminal half-life is flagged at 43.22364907201837 versus 0.275, although the paper and model both report 43.2 h.**

The model does not reproduce the paper's terminal half-life (paper 43.2, model 43.2); the numerical comparison reports 0.275 versus 43.22364907201837, but its h-to-SI versus simulated-h unit mismatch makes that check inconclusive. The covariate scenarios were not simulated: the base model was simulated, not the covariate effects the record defines. M11 has no molar mass, and the apparent parameterization assumes F=1, Fm=1, and no molar correction, so it forms 1 mg of metabolite per mg of parent converted rather than one molecule per molecule. Extracted — fruquintinib: CL/F 0.808 L/h, V/F 50.4 L, kabs 2.52 1/h, tlag 0.463 h; M11: CL/F 0.161 L/h, V1/F 11.7 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl/f].rse_percent`: this record has none, the second reading 1.2; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.808 | L/h | 2.244e-07 | m3/s | l/h | exact (1) | jcph70001-tbl-0002:row2:col1 |
| V/F (L) | `Q76` · V/F | 50.4 | L | 0.0504 | m3 | l | exact (1) | jcph70001-tbl-0002:row3:col1 |
| Ka (1/h) | `Q49` · kabs | 2.52 | 1/h | 0.0007 | 1/s | 1/h | exact (1) | jcph70001-tbl-0002:row4:col1 |
| Lag time (h) | `Q83` · tlag | 0.463 | h | 1667 | s | h | exact (1) | jcph70001-tbl-0002:row5:col1 |
| CLM/f (L/h) | `Q27` · CL/F | 0.161 | L/h | 4.472e-08 | m3/s | l/h | exact (1) | jcph70001-tbl-0002:row6:col1 |
| VM/f (L) | `Q290` · V1/F | 11.7 | L | 0.0117 | m3 | l | exact (1) | jcph70001-tbl-0002:row7:col1 |
| V/F ∼ Healthy subject fractional change | `Q900` · equation variable | -0.0908 |  |  |  |  | llm_corrected (0.6) | jcph70001-tbl-0002:row13:col1 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.430 |  |  |  |  |  | jcph70001-tbl-0002:row9:col1 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 1.06 |  |  |  |  |  | jcph70001-tbl-0002:row10:col1 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.924 |  |  |  |  |  | jcph70001-tbl-0002:row12:col1 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 1.28 |  |  |  |  |  | jcph70001-tbl-0002:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Fruquintinib proportional error %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Fruquintinib additive error SD (ng/mL)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M11 proportional error %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M11 additive error SD (ng/mL)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q49 ('Ka ∼ PPI fractional change', value '-0.607') — already have one for this compound
- dropped value-less row: 'F1'
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: 'The paper states: “Ka (1/h) = 2.52.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fruquintinib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- population split: 'estimate' subgroup of Zhou_2025 (paper reports 8 populations: estimate, fresco‐2/nct04322539 (n = 334), nct01645215 (n = 40), nct01975077 (n = 40), nct04557397 (n = 28), nct04645940 (n = 14), overall (n = 557), us1/nct03251378 (n = 101))
- row roles (LLM): model_class=compartmental; 51/51 row label(s) assigned, 12 linked by role; re-tagged parent→M11 ×18
- molar mass: none of 1 PubChem candidate(s) is 'M11' (LLM) — left in mass units
- molar mass: none found for 'M11' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph70001-tbl-0002:row2:col3 = '0.789‐0.827'
- unparsed cell jcph70001-tbl-0002:row3:col3 = '49.5‐51.3'
- unparsed cell jcph70001-tbl-0002:row4:col3 = '2.15‐2.90'
- unparsed cell jcph70001-tbl-0002:row5:col3 = '0.453‐0.473'
- unparsed cell jcph70001-tbl-0002:row6:col3 = '0.154‐0.169'
- unparsed cell jcph70001-tbl-0002:row7:col3 = '10.9‐12.4'
- unparsed cell jcph70001-tbl-0002:row9:col3 = '0.328‐0.532'
- unparsed cell jcph70001-tbl-0002:row10:col3 = '0.873‐1.25'
- unparsed cell jcph70001-tbl-0002:row11:col3 = '−0.739‐0.476'
- unparsed cell jcph70001-tbl-0002:row12:col3 = '0.853‐0.995'
- unparsed cell jcph70001-tbl-0002:row13:col3 = '−0.138‐−0.0434'
- unparsed cell jcph70001-tbl-0002:row14:col3 = '1.00‐1.56'
- unparsed cell jcph70001-tbl-0002:row16:col3 = '19.4‐20.4'
- unparsed cell jcph70001-tbl-0002:row17:col3 = '4.14‐4.86'
- unparsed cell jcph70001-tbl-0002:row18:col3 = '18.9‐20.0'
- unparsed cell jcph70001-tbl-0002:row19:col3 = '0.509‐0.594'
- unparsed cell jcph70001-tbl-0002:row21:col3 = '24.3‐28.0'
- unparsed cell jcph70001-tbl-0002:row23:col3 = '14.6‐17.8'
- unparsed cell jcph70001-tbl-0002:row26:col3 = '45.5‐53.0'
- unparsed cell jcph70001-tbl-0002:row30:col3 = '68.4‐82.0'
- unparsed cell jcph70001-tbl-0002:row31:col3 = '201‐299'
- unparsed cell Zhou_2025_table_2:row21:col3 = '16 (15.8%)'
- companion parameter table 2 transcribed (209 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.571 (12/21 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f].rse_percent` |  | 1.2 | mismatch |
| `qwen3.8-27b` | `parameters[clm/f].rse_percent` |  | 2.2 | mismatch |
| `qwen3.8-27b` | `parameters[ka].rse_percent` |  | 7.6 | mismatch |
| `qwen3.8-27b` | `parameters[lag time].rse_percent` |  | 1.1 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight_power].rse_percent` |  | 12.1 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight_power].rse_percent` |  | 9.0 | mismatch |
| `qwen3.8-27b` | `parameters[v/f ∼ healthy subject fractional change]` | -0.0908 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f].rse_percent` |  | 0.9 | mismatch |
| `qwen3.8-27b` | `parameters[vm/f].rse_percent` |  | 3.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70001-tbl-0002:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70001-tbl-0002:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph70001-tbl-0002:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph70001-tbl-0002:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph70001-tbl-0002:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph70001-tbl-0002:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.808 L/h | ['jcph70001-tbl-0002:row2:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.161 L/h | ['jcph70001-tbl-0002:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.7 L | ['jcph70001-tbl-0002:row7:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 50.4 L | ['jcph70001-tbl-0002:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_metabolite_built[M11] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.0117, 'CL': 4.4722222222222223e-08, 'formation': 2.2444444444444445e-07} |  | M11 = compartment M1 with its own numbers |
| T3_metabolite_output[M11] |  | pass |  | 3.387e-05 |  | C_M1 (M11) must rise above 0 when the parent is dosed |
| T3_molar_mass[M11] |  | fail |  | {'MW': 0.393399, 'MW_m1': 0.0} |  | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_output_variable |  | pass | C_central (measured=fruquintinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | ≤2 | 1.919e-05 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | ≤2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | pass | 43.2 | 43.22 | 1 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.275 | 43.22 | 157.2 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_modelica.zip" download>Fruquintinib_Zhou2025_estimate_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_fmi.zip" download>Fruquintinib_Zhou2025_estimate_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_matlab.zip" download>Fruquintinib_Zhou2025_estimate_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_sbml.zip" download>Fruquintinib_Zhou2025_estimate_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_cellml.zip" download>Fruquintinib_Zhou2025_estimate_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1667 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-06 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 4.472e-08 | m3/s |
| input | model | `MW` | 0.3934 |  |
| input | model | `MW_m1` | 0 |  |
| input | model | `Vd1` | 0.0504 |  |
| input | model | `Vd1m1` | 0.0117 | m3 |
| input | model | `ka` | 0.0007 | 1/s |
| input | model | `q1_m11` | 2.244e-07 | m3/s |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Zhou X, Yang X, Grinshpun B, Taylor A, Strong L, Dasari A et al. Population Pharmacokinetics of Fruquintinib, a Selective Oral Inhibitor of VEGFR -1, -2, and -3, in Patients with Refractory Metastatic Colorectal Cancer. Journal of clinical pharmacology 65(7):873–884 (2025). [doi:10.1002/jcph.70001](https://doi.org/10.1002/jcph.70001)

**This record:** Pharmacolibrary v26.09, model `Fruquintinib_Zhou2025_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate>

```bibtex
@misc{pharmacolibrary_FruquintinibZhou2025estimate,
  title  = {{Pharmacolibrary model Fruquintinib_Zhou2025_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate},
  note   = {Parameters from doi:10.1002/jcph.70001},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 2.52 /h, lag 27.8 min, F 1). Doses in the paper: 1–6 mg.

<dbs-fmusim paramsurl="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate/Fruquintinib_Zhou2025_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Fruquintinib_Zhou2025_estimate_params.json` · controls `Fruquintinib_Zhou2025_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfruquintinib%5D%20Fruquintinib_Zhou2025_estimate&body=Drug%3A%20fruquintinib%0ARecord%3A%20Fruquintinib_Zhou2025_estimate%0APaper%3A%20Zhou_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fruquintinib/Fruquintinib_Zhou2025_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:47 UTC</sub>
