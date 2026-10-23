<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;erenumab&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/&quot;},{&quot;label&quot;:&quot;Vu_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erenumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Kielbasa2019_reference&quot;,&quot;label&quot;:&quot;Kielbasa_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Kielbasa2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erenumab — `Erenumab_Vu2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Rejected), but the paper was screened again on 2026-10-07 06:34 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected because a structural parameter of the erenumab two-compartment TMDD model carries a dimension mismatch: parameters such as Q (3.34), V2 (2.73), kabs (0.432), Fab (74), KD (18.8) and kint (0.0345) were recorded with their labels instead of units, so no SI value could be established.

<div class="pk-model-meta" hidden drug="erenumab" model-id="Erenumab_Vu2017_reference" status="rejected" stale="true" population="healthy and migraine subjects" measured-compound="erenumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Vu T, Ma P, Chen JS, de Hoon J, Van Hecken A, Yan L et al. Pharmacokinetic-Pharmacodynamic Relationship of Erenumab (AMG 334) and Capsaicin-Induced Dermal Blood Flow in Healthy and Migraine Subjects. Pharmaceutical research 34(9):1784–1795 (2017).
  ·  DOI: [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6)

## Population and dosing

**Population:** healthy and migraine subjects · condition healthy and migraine · age group adult.

**Dosing:** 1, 7, 21, 70, 140, 210, 280 mg, sc, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Central volume of distribution (Vc)a | V1 | 4.27 | L | 43.8 (None% RSE) |
| Intercompartmental clearance (Q) | Q | 3.34 | L/day |  |
| Peripheral volume (Vp) | V2 | 2.73 | L |  |
| Absorption rate (ka) | kabs | 0.432 | ka | 59.5 (None% RSE) |
| Bioavailability (F) | Fab | 74 | F |  |
| Binding affinity (Kss) | KD | 18.8 | ng/mL |  |
| Internalization rate (kint) | kint | 0.0345 | 1/day | 42.3 (None% RSE) |
| central CL | CL | 0.0902 | L/d |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because a structural parameter of the erenumab two-compartment TMDD model carries a dimension mismatch: parameters such as Q (3.34), V2 (2.73), kabs (0.432), Fab (74), KD (18.8) and kint (0.0345) were recorded with their labels instead of units, so no SI value could be established.**

The record for erenumab (Vu_2017, healthy and migraine subjects) lists intercompartmental clearance Q = 3.34, peripheral volume V2 = 2.73, absorption rate constant kabs = 0.432, bioavailability Fab = 74, binding affinity KD = 18.8 and internalization rate kint = 0.0345 with unit fields containing only the parameter labels (Q, Vp, ka, F, Kss, kint); without a stated unit these values could not be expressed in SI terms, and a dimension mismatch on a structural parameter was flagged. A second reader additionally assigned a receptor degradation rate of 0.22 where this record has none, a disagreement left unresolved. Extracted — erenumab: CL 0.214, V1 4.27, Q 3.34 Q, V2 2.73 Vp, kabs 0.432 ka, Fab 74 F, KD 18.8 Kss, kint 0.0345 kint.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of central cl: this record has 0.0902, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Central volume of distribution (Vc)a | `Q63` · V1 | 4.27 | L | 0.00427 | m3 | L | boundary_compartment (0.9) | Tab3:row2:col2 | 43.8 (None% RSE) |
| Intercompartmental clearance (Q) | `Q30` · Q | 3.34 | L/day | 3.866e-08 | m3/s | L/h | exact (1) | Tab3:row3:col2 |  |
| Peripheral volume (Vp) | `Q64` · V2 | 2.73 | L | 0.00273 | m3 | L | exact (1) | Tab3:row4:col2 |  |
| Absorption rate (ka) | `Q49` · kabs | 0.432 | ka |  |  | ka | exact (1) | Tab3:row5:col1, Tab3:row5:col2 | 59.5 (None% RSE) |
| Bioavailability (F) | `Q40` · Fab | 74 | F |  |  |  | exact (1) | Tab3:row6:col2 |  |
| Binding affinity (Kss) | `Q331` · KD | 18.8 | ng/mL |  |  | ng/mL | exact (1) | Tab3:row9:col2 |  |
| Internalization rate (kint) | `Q334` · kint | 0.0345 | 1/day | 3.993e-07 | 1/s | 1/h | llm (0.6) | Tab3:row10:col1, Tab3:row10:col2 | 42.3 (None% RSE) |
| central CL | `Q22` · CL | 0.0902 | L/d | 1.044e-09 | m3/s | L/h | review_gapfill (0.7) | Fiedler-Kelly_2019:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Nonspecific linear clearance (CL)a' — extend the ontology if this is a real PK parameter (source ['Tab3:row1:col2'])
- unit_dimension_unknown: 'Q' (Q)
- unit_dimension_unknown: 'Vp' (V2)
- unit_dimension_mismatch: 'Absorption rate (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped PD-category row 'Receptor production rate (ksyn)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row7:col2'])
- dropped PD-category row 'Receptor degradation rate (kdeg)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row8:col1', 'Tab3:row8:col2'])
- unit_dimension_unknown: 'Kss' (KD)
- unit_dimension_unknown: 'kint' (kint)
- dropped value-less row: '95% CI'
- dropped value-less row: 'Mean CL and Vc estimates at 70 kg; individual body weight effect on CL and Vc were estimated as'
- implicit units: 'Central volume of distribution (Vc)a' → L (from the paper text: 'The paper text explicitly states: "...and the central volume of distribution was 4.27 L..."')
- implicit units: 'Intercompartmental clearance (Q)' → L/day (from the popPK convention: 'Intercompartmental clearance (Q) is a flow term. In this paper, clearances are reported in L/day (e.g., linear clearance')
- implicit units: 'Peripheral volume (Vp)' → L (from the popPK convention: 'Peripheral volume (Vp) is a volume of distribution. The central volume (Vc) is explicitly stated as 4.27 L in the text. ')
- implicit units: 'Binding affinity (Kss)' → ng/mL (from the popPK convention: 'Binding affinity (Kss) is an equilibrium dissociation constant, representing a concentration. For monoclonal antibodies ')
- implicit units: 'Internalization rate (kint)' → 1/day (from the paper text: 'The paper text explicitly states: "The rate constant of the complex internalization (kint: 0.0345 day−1)...')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=erenumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'erenumab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Fiedler-Kelly_2019's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row1:col3 = '0.213 (0.191, 0.243)'
- unparsed cell Tab3:row2:col3 = '4.2 (3.4, 5.38)'
- unparsed cell Tab3:row3:col3 = '3.25 (1.41, 6.79)'
- unparsed cell Tab3:row4:col3 = '2.75 (2.2, 3.18)'
- unparsed cell Tab3:row5:col3 = '0.428 (0.346, 0.519)'
- unparsed cell Tab3:row6:col3 = '74 (66, 85)'
- unparsed cell Tab3:row7:col3 = '53 (40.6, 65.4)'
- unparsed cell Tab3:row8:col3 = '0.222 (0.144, 0.427)'
- unparsed cell Tab3:row9:col3 = '18.1 (10.6, 30.6)'
- unparsed cell Tab3:row10:col3 = '0.0347 (0.0251, 0.0442)'
- unparsed cell Tab3:row11:col3 = '25 (21, 29.6)'
- unparsed cell Tab3:row12:col3 = '43.8 (35.3, 53)'
- unparsed cell Tab3:row13:col3 = '58.8 (45.6, 73.3)'
- unparsed cell Tab3:row14:col3 = '42.1 (33.5, 51.7)'
- unparsed cell Tab3:row15:col3 = '−0.0719 (−0.127, –0.0371)'
- unparsed cell Tab3:row16:col3 = '0.0664 (0.0396, 0.101)'
- unparsed cell Tab3:row17:col3 = '17.6 (15.9, 19.7)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central cl]` | 0.0902 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nonspecific linear clearance (cl)a]` |  | 0.214 | only_one_extracted |
| `gpt-oss-120b` | `parameters[receptor degradation rate]` |  | 0.22 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fiedler-Kelly_2019:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col2'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 |  | ['Tab3:row9:col2'] |
| C5_dimension_Q334 | pass | 1 / [time] |  | ['Tab3:row10:col1', 'Tab3:row10:col2'] |
| C5_dimension_Q49 | fail | [time] | ka | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0902 | ['Fiedler-Kelly_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00376 L/h | ['Fiedler-Kelly_2019:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.27 L | ['Tab3:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.73 L | ['Tab3:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berenumab%5D%20Erenumab_Vu2017_reference&body=Drug%3A%20erenumab%0ARecord%3A%20Erenumab_Vu2017_reference%0APaper%3A%20Vu_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_erenumab/Erenumab_Vu2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:34 UTC</sub>
