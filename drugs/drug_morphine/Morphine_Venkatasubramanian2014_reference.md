<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Venkatasubramanian_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Venkatasubramanian2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Venkatasubramanian2014_reference" status="needs_review" stale="false" population="children undergoing outpatient adenotonsillectomy" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Venkatasubramanian R, Fukuda T, Niu J, Mizuno T, Chidambaran V, Vinks AA et al. ABCC3 and OCT1 genotypes influence pharmacokinetics of morphine in children. Pharmacogenomics 15(10):1297–1309 (2014).
  ·  DOI: [10.2217/pgs.14.99](https://doi.org/10.2217/pgs.14.99)

## Population and dosing

**Population:** children undergoing outpatient adenotonsillectomy · condition outpatient adenotonsillectomy · age group child · n = $220$ subjects in the final PK analysis.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 1.3 | L/h |
| V1 | V1 | 6.28 | L |
| Q | Q | 2.1 | L/h |
| V2 | V2 | 29.31 | L |
| FCLM3G | CLfm | 0.34 | L/h |
| VM3G § | V | 23 | L |
| CLM3G § | CL | 0.29 | L/h |
| FCLM6G | CLfm | 0.045 | L/h |
| VM6G § | V | 30 | L |
| CLM6G § | CL | 0.097 | L/h |
| Kdelay | tlag | 0.069 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 1.3 | L/h | 3.611e-07 | m3/s | L/h | exact (1) | T4:row3:col1 |
| V1 | `Q63` · V1 | 6.28 | L | 0.00628 | m3 | L | exact (1) | T4:row4:col1 |
| Q | `Q30` · Q | 2.1 | L/h | 5.833e-07 | m3/s | L/h | exact (1) | T4:row5:col1 |
| V2 | `Q64` · V2 | 29.31 | L | 0.02931 | m3 | L | exact (1) | T4:row6:col1 |
| FCLM3G | `Q370` · CLfm | 0.34 | L/h | 9.444e-08 | m3/s | L/h | exact (1) | T4:row7:col1 |
| VM3G § | `Q61` · V | 23 | L | 0.023 | m3 | L | exact (1) | T4:row8:col1 |
| CLM3G § | `Q22` · CL | 0.29 | L/h | 8.056e-08 | m3/s | L/h | exact (1) | T4:row9:col1 |
| FCLM6G | `Q370` · CLfm | 0.045 | L/h | 1.25e-08 | m3/s | L/h | exact (1) | T4:row10:col1 |
| VM6G § | `Q61` · V | 30 | L | 0.03 | m3 | L | exact (1) | T4:row11:col1 |
| CLM6G § | `Q22` · CL | 0.097 | L/h | 2.694e-08 | m3/s | L/h | exact (1) | T4:row12:col1 |
| Kdelay | `Q83` · tlag | 0.069 |  |  |  |  | llm (0.6) | T4:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL, M' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω 2 FCL, M3G' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω FCL, M6G' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'ε M' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε M3G' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε M6G' routed out of structural estimates ('Residual error')
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper describes a two-compartment model parameterized in terms of CL for morphine. The value 1.3 is consistent with ')
- implicit units: 'V1' → L (from the popPK convention: 'V1 is the volume of distribution of the central compartment. Standard unit for volume is L. The value 6.28 is consistent')
- implicit units: 'Q' → L/h (from the popPK convention: 'Q is the intercompartmental clearance. Standard unit is L/h.')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is the volume of distribution of the peripheral compartment. Standard unit is L.')
- implicit units: 'FCLM3G' → L/h (from the popPK convention: 'FCLM3G is the formation clearance. Standard unit is L/h.')
- implicit units: 'VM3G §' → L (from the popPK convention: 'VM3G is the volume of distribution for the metabolite M3G. Standard unit is L.')
- implicit units: 'CLM3G §' → L/h (from the popPK convention: 'CLM3G is the clearance of the metabolite M3G. Standard unit is L/h.')
- implicit units: 'FCLM6G' → L/h (from the popPK convention: 'FCLM6G is the formation clearance. Standard unit is L/h.')
- implicit units: 'VM6G §' → L (from the popPK convention: 'VM6G is the volume of distribution for the metabolite M6G. Standard unit is L.')
- implicit units: 'CLM6G §' → L/h (from the popPK convention: 'CLM6G is the clearance of the metabolite M6G. Standard unit is L/h.')
- implicit units: 'Kdelay' — the LLM proposed '1/h', whose dimension does not fit Q83; left unset
- metabolite volume: 'VM3G §' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'VM6G §' Q63→Q61 for morphine-6-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V1); Q30 (Q); Q64 (V2); Q61 (VM3G §); Q22 (CLM3G §); Q61 (VM6G §); Q22 (CLM6G §)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1, 1]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 10 linked by role; re-tagged morphine→parent ×6, morphine→morphine-3-glucuronide ×5, morphine→morphine-6-glucuronide ×5

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row9:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row12:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T4:row5:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T4:row7:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T4:row10:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T4:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T4:row11:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T4:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T4:row6:col1'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['T4:row13:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.3 | ['T4:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.3 L/h | ['T4:row3:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.29 L/h | ['T4:row9:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.097 L/h | ['T4:row12:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23 L | ['T4:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30 L | ['T4:row11:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.28 L | ['T4:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 29.3 L | ['T4:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Venkatasubramanian2014_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Venkatasubramanian2014_reference%0APaper%3A%20Venkatasubramanian_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:51 UTC</sub>
