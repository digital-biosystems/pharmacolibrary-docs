<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;St\u00f8rset_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Strset2024_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Risperidone clearance and lag time were filled with library defaults, and the model topology mismatched the expected parent-metabolite structure.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Strset2024_reference" status="model_quarantined" stale="false" population="512 subjects" measured-compound="Risperidone" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Størset E, Bråten LS, Ingelman-Sundberg M, Johansson I, Molden E, Kringen MK. Impact of CYP2D6*2, CYP2D6*35, rs5758550, and related haplotypes on risperidone clearance in vivo. European journal of clinical pharmacology 80(10):1531-1541 (2024).
  ·  DOI: [10.1007/s00228-024-03721-6](https://doi.org/10.1007/s00228-024-03721-6)

## Population and dosing

**Population:** 512 subjects · age group mixed · n = 512.

**Dosing:** 0.5, 12 mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Volume of distribution (V/F) (L) | V/F | 333 | L |
| Volume of distribution (Vmet/F × fmet) | V1/F | 96 | L |
| Clearance (CLmet/F × fmet) | CL/F | 8.0 | L/h |
| theta_q22_cyp2d6 | theta_q22_cyp2d6 | 23.2 |  |
| KaSC-RIS | kabs | 2.84 | 1/h |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Risperidone clearance and lag time were filled with library defaults, and the model topology mismatched the expected parent-metabolite structure.**

Risperidone clearance and absorption lag time lacked explicit values, so library placeholders were used instead of fitted estimates. The simulated model used a one-compartment enteral structure, which failed to match the required parent-metabolite topology. Additionally, the defined covariate effects were not exercised during simulation, leaving the model incomplete. Extracted — risperidone: V/F 333 L, kabs 2.84 1/h; 9-hydroxyrisperidone: V1/F 96 L, CL/F 8 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Volume of distribution (V/F) (L) | `Q76` · V/F | 333 | L | 0.333 | m3 | l | llm_corrected (0.6) | Tab2:row4:col1 |
| Volume of distribution (Vmet/F × fmet) | `Q290` · V1/F | 96 | L | 0.096 | m3 | L | exact (1) | Tab2:row26:col1 |
| Clearance (CLmet/F × fmet) | `Q27` · CL/F | 8.0 | L/h | 2.222e-06 | m3/s | L/h | exact (1) | Tab2:row27:col1 |
| theta_q22_cyp2d6 | `Q900` · theta_q22_cyp2d6 | 23.2 |  |  |  |  |  | Tab2:row7:col1 |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Volume of distribution (V/F) (L)'; source reconciliation required
- table representations disagree for 'CYP2D6*1'; source reconciliation required
- table representations disagree for 'CYP2D6 allele (fraction of CYP2D6*1)'; source reconciliation required
- table representations disagree for 'NFIB-C'; source reconciliation required
- table representations disagree for 'Age breaking point (years)'; source reconciliation required
- table representations disagree for 'BSV CL/F (% CV)'; source reconciliation required
- table representations disagree for 'Residual error, proportional (%)'; source reconciliation required
- table representations disagree for 'Residual error, additive (ng/mL)'; source reconciliation required
- table representations disagree for 'Volume of distribution (Vmet/F × fmet)'; source reconciliation required
- table representations disagree for 'Clearance (CLmet/F × fmet)'; source reconciliation required
- table representations disagree for 'BSV CLmet/fmet (% CV)'; source reconciliation required
- table representations disagree for 'Residual error, proportional'; source reconciliation required
- table representations disagree for 'Correlation with BSV CL/F'; source reconciliation required
- dropped unlinked row (NIL): 'CYP2D6 allele (fraction of CYP2D6*1)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1'])
- dropped unlinked row (NIL): 'NFIB-C' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1'])
- dropped unlinked row (NIL): 'Age breaking point (years)' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col1', 'Tab2:row28:col1'])
- unit_dimension_unknown: 'Vmet/F × fmet' (V1/F)
- unit_dimension_unknown: 'CLmet/F × fmet' (CL/F)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Volume of distribution (Vmet/F × fmet)' → L (from the paper text: "The table footnote defines 'V' as 'volume of distribution'. The text states typical clearance values (e.g., '50.6 L/h'),")
- implicit units: 'Clearance (CLmet/F × fmet)' → L/h (from the paper text: "The text explicitly states: 'risperidone clearance is predicted to be 50.6 L/h' and 'risperidone CL/F is predicted to be")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Risperidone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- pharmacogenetic covariate 'theta_q22_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of Risperidone covariate_effect but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6*1
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 4 linked by role; re-tagged parent→9-hydroxyrisperidone ×4
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row27:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row26:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8 L/h | ['Tab2:row27:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 96 L | ['Tab2:row26:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 333 L | ['Tab2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_shared_parameters |  | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Strset2024_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Strset2024_reference%0APaper%3A%20St%C3%B8rset_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Strset2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
