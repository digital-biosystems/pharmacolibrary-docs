<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01B&quot;,&quot;href&quot;:&quot;atc/D01B.md&quot;},{&quot;label&quot;:&quot;fosravuconazole&quot;,&quot;href&quot;:&quot;drugs/drug_fosravuconazole/&quot;},{&quot;label&quot;:&quot;Chu_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosravuconazole — `Fosravuconazole_Chu2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because itraconazole and hydroxyitraconazole compartments are unreachable, and a unit mismatch prevented clearance calculation.

<div class="pk-model-meta" hidden drug="fosravuconazole" model-id="Fosravuconazole_Chu2025_reference" status="rejected" stale="false" population="Sudanese patients with eumycetoma" measured-compound="ravuconazole" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Chu WY, Fahal AH, Ahmed ES, Bakhiet SM, Bakhiet OE, Fahal LA et al. Pharmacokinetics and Pharmacodynamics of Fosravuconazole, Itraconazole, and Hydroxyitraconazole in Sudanese Patients With Eumycetoma. The Journal of infectious diseases 232(3):e518–e528 (2025).
  ·  DOI: [10.1093/infdis/jiaf279](https://doi.org/10.1093/infdis/jiaf279)

## Population and dosing

**Population:** Sudanese patients with eumycetoma · condition eumycetoma · age group adult · n = 52.

**Dosing:** 200, 300 mg, oral, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed fosravuconazole, measured ravuconazole.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rate of absorption (ka) | kabs | 0.00376 | ka |
| Maximum velocity (Vmax)b | Vmax | 4.55 |  |
| Michaelis-Menten constant (Km) | Km | 4 | Km |
| Volume of distribution central compartment (Vc)b | V1 | 20.8 | L |
| Intercompartmental clearance (Q)b | Q | 9.03 | L/h |
| Volume of distribution peripheral compartment (Vp)b | V2 | 262 | L |
| Clearance of itraconazole (CLp)b | CLb | 10.7 | L/h |
| Clearance of metabolite hydroxyitraconazole (CLm)b | CL | 5.16 | L/h |
| theta_q61_category | theta_q61_category | 25.5 |  |
| theta_q63_category | theta_q63_category | 4.85 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.611). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because itraconazole and hydroxyitraconazole compartments are unreachable, and a unit mismatch prevented clearance calculation.**

The model structure defines metabolism from itraconazole to hydroxyitraconazole, but itraconazole has no link to the dosed molecule, fosravuconazole. Consequently, the itraconazole and hydroxyitraconazole compartments are orphans with no path from the dose. Additionally, the unit for the itraconazole clearance parameter could not be converted to standard units, leaving the value unusable for model fitting. Extracted — ravuconazole: kabs 0.00376 ka, Vmax 4.55, Km 4 Km, V1 20.8 L, Q 9.03 L/h, V2 262 L; itraconazole: CLb 10.7 L/h; hydroxyitraconazole: CL 5.16 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fosravuconazole, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rate of absorption (ka) | `Q49` · kabs | 0.00376 | ka |  |  | ka | exact (1) | jiaf279-T2:row2:col1, jiaf279-T2:row2:col2, jiaf279-T2:row14:col1, jiaf279-T2:row14:col2 |
| Maximum velocity (Vmax)b | `Q66` · Vmax | 4.55 |  |  |  |  | llm_confirmed (0.6) | jiaf279-T2:row3:col2, jiaf279-T2:row3:col3 |
| Michaelis-Menten constant (Km) | `Q1` · Km | 4 | Km |  |  | km | llm_confirmed (0.6) | jiaf279-T2:row4:col2 |
| Volume of distribution central compartment (Vc)b | `Q63` · V1 | 20.8 | L | 0.0208 | m3 | L | exact (1) | jiaf279-T2:row5:col2, jiaf279-T2:row5:col3 |
| Intercompartmental clearance (Q)b | `Q30` · Q | 9.03 | L/h | 2.508e-06 | m3/s | L/h | exact (1) | jiaf279-T2:row6:col2, jiaf279-T2:row6:col3 |
| Volume of distribution peripheral compartment (Vp)b | `Q64` · V2 | 262 | L | 0.262 | m3 | L | exact (1) | jiaf279-T2:row7:col2, jiaf279-T2:row7:col3 |
| Clearance of itraconazole (CLp)b | `Q23` · CLb | 10.7 | L/h | 2.972e-06 | m3/s | L/h | llm_corrected (0.6) | jiaf279-T2:row15:col2, jiaf279-T2:row15:col3 |
| Clearance of metabolite hydroxyitraconazole (CLm)b | `Q22` · CL | 5.16 | L/h | 1.433e-06 | m3/s | L/h | exact (1) | jiaf279-T2:row17:col2, jiaf279-T2:row17:col3 |
| theta_q61_category | `Q900` · theta_q61_category | 25.5 |  |  |  |  |  | jiaf279-T2:row16:col2, jiaf279-T2:row16:col3 |
| theta_q63_category | `Q900` · theta_q63_category | 4.85 |  |  |  |  |  | jiaf279-T2:row18:col2, jiaf279-T2:row18:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Rate of absorption (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Michaelis-Menten constant (Km)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Fold increase in F during the loading dose phasec' — extend the ontology if this is a real PK parameter (source ['jiaf279-T2:row8:col2', 'jiaf279-T2:row8:col3'])
- routed 'Between-subject variability in Vc' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in Km' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-occasion variability in F' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- dropped PD-category row 'Maximum effect of autoinhibition (Emax)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf279-T2:row19:col2'])
- dropped PD-category row 'Itraconazole plus hydroxyitraconazole concentration at 50% of autoinhibition effect (EC50)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf279-T2:row20:col2', 'jiaf279-T2:row20:col3'])
- routed 'Between-subject variability in CLp' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in Vp' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in CLm' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maximum velocity (Vmax)b' — the LLM proposed 'mg/h', whose dimension does not fit Q66; left unset
- implicit units: 'Volume of distribution central compartment (Vc)b' → L (from the paper text: "The text states: 'The Vd for the central ... compartments were 20.8 L'.")
- implicit units: 'Intercompartmental clearance (Q)b' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a clearance parameter. The text explicitly defines other clearances (CL) as L/h (e.g')
- implicit units: 'Volume of distribution peripheral compartment (Vp)b' → L (from the paper text: "The text states: 'and the peripheral compartments were ... 262 L'.")
- implicit units: 'Clearance of itraconazole (CLp)b' → L/h (from the paper text: "The text states: 'In the final population PK model for itraconazole and hydroxyitraconazole, the CL values were estimate")
- implicit units: 'Clearance of metabolite hydroxyitraconazole (CLm)b' → L/h (from the paper text: "The text states: 'In the final population PK model for itraconazole and hydroxyitraconazole, the CL values were estimate")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Volume of distribution central compartment (Vc)b); Q30 (Intercompartmental clearance (Q)b); Q64 (Volume of distribution peripheral compartment (Vp)b); Q22 (Clearance of metabolite hydroxyitraconazole (CLm)b)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ravuconazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 18 linked by role; re-tagged ravuconazole→itraconazole ×13, ravuconazole→hydroxyitraconazole ×8
- molar mass: none of 2 PubChem candidate(s) is 'hydroxyitraconazole' (LLM) — left in mass units
- molar mass: none found for 'hydroxyitraconazole' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'ravuconazole', not fosravuconazole — the review values are the parent's

**Extraction notes:**
- unparsed cell jiaf279-T2:row2:col3 = '.0526–.118'
- unparsed cell jiaf279-T2:row14:col3 = '.00328–.00429'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.611 (11/18 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance of itraconazole (clp)b].parameter_id` | Q23 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[fold increase in f during the loading dose phasec]` |  | 1.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum velocity (vmax)b].parameter_id` | Q66 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[rate of absorption]` | 0.00376 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption]` |  | 0.00376 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fosravuconazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ravuconazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [length] | Km | ['jiaf279-T2:row4:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jiaf279-T2:row17:col2', 'jiaf279-T2:row17:col3'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['jiaf279-T2:row15:col2', 'jiaf279-T2:row15:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jiaf279-T2:row6:col2', 'jiaf279-T2:row6:col3'] |
| C5_dimension_Q49 | fail | [time] | ka | ['jiaf279-T2:row2:col1', 'jiaf279-T2:row2:col2', 'jiaf279-T2:row14:col1', 'jiaf279-T2:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jiaf279-T2:row5:col2', 'jiaf279-T2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jiaf279-T2:row7:col2', 'jiaf279-T2:row7:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['jiaf279-T2:row3:col2', 'jiaf279-T2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.16 | ['jiaf279-T2:row17:col2', 'jiaf279-T2:row17:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.16 L/h | ['jiaf279-T2:row17:col2', 'jiaf279-T2:row17:col3'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 10.7 L/h | ['jiaf279-T2:row15:col2', 'jiaf279-T2:row15:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.8 L | ['jiaf279-T2:row5:col2', 'jiaf279-T2:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 262 L | ['jiaf279-T2:row7:col2', 'jiaf279-T2:row7:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosravuconazole%5D%20Fosravuconazole_Chu2025_reference&body=Drug%3A%20fosravuconazole%0ARecord%3A%20Fosravuconazole_Chu2025_reference%0APaper%3A%20Chu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fosravuconazole/Fosravuconazole_Chu2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:14 UTC</sub>
