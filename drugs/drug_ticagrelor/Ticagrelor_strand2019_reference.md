<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_strand2019_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:32 UTC) predates the latest extraction (2026-10-05 16:24 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="ticagrelor" model-id="Ticagrelor_strand2019_reference" status="extracted" stale="true" population="stable coronary artery disease and prior myocardial infarction patients" measured-compound="ticagrelor" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Åstrand M, Amilon C, Röshammar D, Himmelmann A, Angiolillo DJ, Storey RF et al. Pharmacokinetic-pharmacodynamic modelling of platelet response to ticagrelor in stable coronary artery disease and prior myocardial infarction patients. British journal of clinical pharmacology 85(2):413–421 (2019).
  ·  DOI: [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

## Population and dosing

**Population:** stable coronary artery disease and prior myocardial infarction patients · age group adult · n = , 303.

**Dosing:** 60, 90, 180 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent–metabolite model: parent with 2 compartment(s); metabolite AR-C124910XX: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference.svg" alt="Ticagrelor_strand2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (l h –1 ) | CL/F | 16.6 | l h –1 |
| Q/F (l h –1 ) | Q/F | 10.4 | l h –1 |
| Vc/F (l) | V1/F | 156 | l |
| Vp/F (l) | V2/F | 55.8 | l |
| KTR (h −1 ) | kabs | 10.1 | h −1 |
| Absorption lag time prior MI (h) | tlag | 0.48 | h |
| F rel | Frel | 1 |  |
| CL m /F (l h –1 ) | CL/F | 10.2 | l h –1 |
| F m | fm | 0.22 |  |
| Q m /F (l h –1 ) | Q/F | 4.41 | l h –1 |
| Vc m /F (l) | V1/F | 7.04 | l |
| Vp m /F (l) | V2/F | 42.3 | l |
| exponent_for_pru_error | exponent_for_pru_error | 0.48 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ticagrelor parent–metabolite record was held back because the builder assumed F=1, Fm=1 without molar correction (apparent parameterization), a deviation judged not acceptable, and covariate effects were never simulated.**

The model defines covariate effects (e.g., exponent_for_pru_error 0.48), but only the reference individual was simulated, so the covariate scenarios were not exercised. The builder substituted F=1 and Fm=1 with no molar correction, making the parameterization apparent; this deviation was adjudicated as not acceptable. Reported parameters include ticagrelor CL/F 16.6 l/h, V1/F 156 l, V2/F 55.8 l, Q/F 10.4 l/h, kabs 10.1 h−1, tlag 0.48 h, and metabolite AR-C124910XX CL/F 10.2 l/h, V1/F 7.04 l, V2/F 42.3 l, Q/F 4.41 l/h, fm 0.22. Extracted — ticagrelor: CL/F 16.6 l h –1, Q/F 10.4 l h –1, V1/F 156 l, V2/F 55.8 l, kabs 10.1 h −1, tlag 0.48 h, Frel 1; AR-C124910XX: CL/F 10.2 l h –1, fm 0.22, Q/F 4.41 l h –1, V1/F 7.04 l, V2/F 42.3 l.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (l h –1 ) | `Q27` · CL/F | 16.6 | l h –1 | 4.611e-06 | m3/s | l/h | exact (1) | bcp13812-tbl-0002:row1:col1, bcp13812-tbl-0002:row1:col3 |
| Q/F (l h –1 ) | `Q69` · Q/F | 10.4 | l h –1 | 2.889e-06 | m3/s | l/h | exact (1) | bcp13812-tbl-0002:row2:col1, bcp13812-tbl-0002:row2:col3 |
| Vc/F (l) | `Q290` · V1/F | 156 | l | 0.156 | m3 | l | exact (1) | bcp13812-tbl-0002:row3:col1 |
| Vp/F (l) | `Q82` · V2/F | 55.8 | l | 0.0558 | m3 | l | exact (1) | bcp13812-tbl-0002:row4:col1 |
| KTR (h −1 ) | `Q49` · kabs | 10.1 | h −1 | 0.002806 | 1/s | 1/h | exact (1) | bcp13812-tbl-0002:row5:col1, bcp13812-tbl-0002:row5:col3 |
| Absorption lag time prior MI (h) | `Q83` · tlag | 0.48 | h | 1728 | s | h | llm_confirmed (0.6) | bcp13812-tbl-0002:row6:col1 |
| F rel | `Q87` · Frel | 1 |  |  |  |  | exact (1) | bcp13812-tbl-0002:row7:col1, bcp13812-tbl-0002:row7:col3 |
| CL m /F (l h –1 ) | `Q27` · CL/F | 10.2 | l h –1 | 2.833e-06 | m3/s | l/h | exact (1) | bcp13812-tbl-0002:row9:col1, bcp13812-tbl-0002:row9:col3 |
| F m | `Q45` · fm | 0.22 |  |  |  |  | exact (1) | bcp13812-tbl-0002:row10:col1 |
| Q m /F (l h –1 ) | `Q69` · Q/F | 4.41 | l h –1 | 1.225e-06 | m3/s | l/h | exact (1) | bcp13812-tbl-0002:row11:col1 |
| Vc m /F (l) | `Q290` · V1/F | 7.04 | l | 0.00704 | m3 | l | exact (1) | bcp13812-tbl-0002:row12:col1 |
| Vp m /F (l) | `Q82` · V2/F | 42.3 | l | 0.0423 | m3 | l | exact (1) | bcp13812-tbl-0002:row13:col1, bcp13812-tbl-0002:row13:col3 |
| exponent_for_pru_error | `Q900` · exponent_for_pru_error | 0.48 |  |  |  |  |  | bcp13812-tbl-0002:row22:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'PRU baseline ONSET/OFFSET' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row15:col3'])
- dropped PD-category row 'EC 50 (nmol l –1 )' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row17:col1', 'bcp13812-tbl-0002:row17:col3'])
- dropped unlinked row (NIL): 'PRU baseline ‐EC 50 correlation' — extend the ontology if this is a real PK parameter (source ['bcp13812-tbl-0002:row18:col3'])
- dropped PD-category row 'E max (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row19:col1', 'bcp13812-tbl-0002:row19:col3'])
- dropped PD-category row 'Steepness of exposure‐response (γ)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row20:col1'])
- covariate level 'Exponent for PRU error (α)' → Q900:exponent_for_pru_error = 0.48 (power on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ticagrelor
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 16 linked by role; re-tagged parent→AR-C124910XX ×8
- molar mass: none found for 'AR-C124910XX' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp13812-tbl-0002:row1:col2 = '(3.6)'
- unparsed cell bcp13812-tbl-0002:row1:col4 = '(8.1)'
- unparsed cell bcp13812-tbl-0002:row2:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row2:col4 = '(45)'
- unparsed cell bcp13812-tbl-0002:row3:col2 = '(4.2)'
- unparsed cell bcp13812-tbl-0002:row4:col2 = '(8.3)'
- unparsed cell bcp13812-tbl-0002:row5:col2 = '(5.8)'
- unparsed cell bcp13812-tbl-0002:row5:col4 = '(7.9)'
- unparsed cell bcp13812-tbl-0002:row6:col2 = '(11)'
- unparsed cell bcp13812-tbl-0002:row7:col4 = '(6.6)'
- unparsed cell bcp13812-tbl-0002:row8:col2 = '(4.5)'
- unparsed cell bcp13812-tbl-0002:row9:col2 = '(3.0)'
- unparsed cell bcp13812-tbl-0002:row9:col4 = '(9.2)'
- unparsed cell bcp13812-tbl-0002:row11:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row12:col2 = '(6.7)'
- unparsed cell bcp13812-tbl-0002:row13:col2 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row13:col4 = '(29)'
- unparsed cell bcp13812-tbl-0002:row14:col2 = '(4.9)'
- unparsed cell bcp13812-tbl-0002:row15:col1 = '311 261'
- unparsed cell bcp13812-tbl-0002:row15:col2 = '(1.9) (1.7)'
- unparsed cell bcp13812-tbl-0002:row15:col4 = '(8.9)'
- unparsed cell bcp13812-tbl-0002:row17:col2 = '(5.3)'
- unparsed cell bcp13812-tbl-0002:row17:col4 = '(7.1)'
- unparsed cell bcp13812-tbl-0002:row18:col4 = '(27)'
- unparsed cell bcp13812-tbl-0002:row19:col2 = '(0.1)'
- unparsed cell bcp13812-tbl-0002:row19:col4 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row20:col2 = '(3.4)'
- unparsed cell bcp13812-tbl-0002:row21:col2 = '(5.6)'
- unparsed cell bcp13812-tbl-0002:row22:col2 = '(2.8)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (20/20 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp13812-tbl-0002:row9:col1', 'bcp13812-tbl-0002:row9:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp13812-tbl-0002:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp13812-tbl-0002:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp13812-tbl-0002:row5:col1', 'bcp13812-tbl-0002:row5:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['bcp13812-tbl-0002:row2:col1', 'bcp13812-tbl-0002:row2:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['bcp13812-tbl-0002:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp13812-tbl-0002:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp13812-tbl-0002:row13:col1', 'bcp13812-tbl-0002:row13:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['bcp13812-tbl-0002:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.6 L/h | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.2 L/h | ['bcp13812-tbl-0002:row9:col1', 'bcp13812-tbl-0002:row9:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 156 L | ['bcp13812-tbl-0002:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 7.04 L | ['bcp13812-tbl-0002:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.8 L | ['bcp13812-tbl-0002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 42.3 L | ['bcp13812-tbl-0002:row13:col1', 'bcp13812-tbl-0002:row13:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_metabolite_built[AR-C124910XX] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.00704, 'CL': 2.833333333333333e-06, 'formation': 1.0144444444444444e-06} | AR-C124910XX = compartment M1 with its own numbers |
| T3_metabolite_output[AR-C124910XX] |  | pass |  | 7.187e-05 | C_M1 (AR-C124910XX) must rise above 0 when the parent is dosed |
| T3_molar_mass[AR-C124910XX] |  | pass |  | {'MW': 0.522568, 'MW_m1': 0.478518} | formation is molecule-for-molecule |
| T3_output_variable |  | pass | C_central (measured=ticagrelor) | C_central | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 10 scholar param(s) emitted or defaulted | 10 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2096 | 0.0003578 | unresolved concentration unit (exp 'nmol l–1', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_modelica.zip" download>Ticagrelor_strand2019_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_fmi.zip" download>Ticagrelor_strand2019_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_matlab.zip" download>Ticagrelor_strand2019_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_sbml.zip" download>Ticagrelor_strand2019_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_cellml.zip" download>Ticagrelor_strand2019_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1728 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-05 | kg |
| input | model | `CL1` | 3.597e-06 | m3/s |
| input | model | `CLm1` | 2.833e-06 | m3/s |
| input | model | `MW` | 0.5226 |  |
| input | model | `MW_m1` | 0.4785 |  |
| input | model | `Vd1` | 0.156 |  |
| input | model | `Vd1m1` | 0.00704 | m3 |
| input | model | `Vd2` | 0.0558 |  |
| input | model | `Vd2m1` | 0.0423 |  |
| input | model | `ka` | 0.002806 | 1/s |
| input | model | `q12` | 2.889e-06 |  |
| input | model | `q1_m11` | 1.014e-06 | m3/s |
| input | model | `q21` | 2.889e-06 |  |
| input | model | `qm11_m12` | 1.225e-06 |  |
| input | model | `qm12_m11` | 1.225e-06 |  |
| output | concentration | `C_central` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Åstrand M, Amilon C, Röshammar D, Himmelmann A, Angiolillo DJ, Storey RF et al. Pharmacokinetic-pharmacodynamic modelling of platelet response to ticagrelor in stable coronary artery disease and prior myocardial infarction patients. British journal of clinical pharmacology 85(2):413–421 (2019). [doi:10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

**This record:** Pharmacolibrary v26.09, model `Ticagrelor_strand2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ticagrelor/Ticagrelor_strand2019_reference>

```bibtex
@misc{pharmacolibrary_Ticagrelorstrand2019reference,
  title  = {{Pharmacolibrary model Ticagrelor_strand2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ticagrelor/Ticagrelor_strand2019_reference},
  note   = {Parameters from doi:10.1111/bcp.13812},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 10.1 /h, lag 28.8 min, F 1). Doses in the paper: 60, 90, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Ticagrelor_strand2019_reference_params.json` · controls `Ticagrelor_strand2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bticagrelor%5D%20Ticagrelor_strand2019_reference&body=Drug%3A%20ticagrelor%0ARecord%3A%20Ticagrelor_strand2019_reference%0APaper%3A%20%C3%85strand_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ticagrelor/Ticagrelor_strand2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:24 UTC</sub>
