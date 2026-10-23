<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;lutetium (177Lu) vipivotide tetraxetan&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/&quot;},{&quot;label&quot;:&quot;Siebinga_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Siebinga2023_reference&quot;,&quot;label&quot;:&quot;Siebinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lutetium (177Lu) vipivotide tetraxetan — `Lutetium177luVipivotideTetraxetan_Siebinga2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 17:24 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="lutetium (177Lu) vipivotide tetraxetan" model-id="Lutetium177luVipivotideTetraxetan_Siebinga2023_reference" status="extracted" stale="true" population="patients with low volume metastatic prostate cancer" measured-compound="lutetium_177lu_vipivotide_tetraxetan" parameterization="mechanistic" topology="1C"></div>

## Citation
Siebinga H, Privé BM, Peters SMB, Nagarajah J, Dorlo TPC, Huitema ADR et al. Population pharmacokinetic dosimetry model using imaging data to assess variability in pharmacokinetics of &lt;sup&gt;177&lt;/sup&gt; Lu-PSMA-617 in prostate cancer patients. CPT: pharmacometrics & systems pharmacology 12(8):1060-1071 (2023).
  ·  DOI: [10.1002/psp4.12914](https://doi.org/10.1002/psp4.12914)

## Population and dosing

**Population:** patients with low volume metastatic prostate cancer · condition prostate cancer · age group adult.

**Dosing:** 3, 6 GBq, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference.svg" alt="Lutetium177luVipivotideTetraxetan_Siebinga2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| k 10 (h−1) | kel | 0.288 | h−1 | 7.6 | 17.2 (13.7% RSE) |
| k 12 (h−1) | k12 | 0.0238 | h−1 | 12.4 |  |
| k 21 (h−1) | k21 | 0.0307 | h−1 | 5.8 |  |
| k 13 (h−1) | k13 | 0.00867 | h−1 | 8.6 | 16.1 (16.8% RSE) |
| k 31 (h−1) | k31 | 0.0141 | h−1 | 4.7 |  |
| k 14 (h−1) | k14 | 0.0238 | h−1 | 7.9 |  |
| k 41 (h−1) | k41 | 0.0283 | h−1 | 4.6 | 9.5 (16.8% RSE) |
| k 15 (h−1) | kcomp | 0.000248 | h−1 | 14.0 | 58.8 (17.3% RSE) |
| V1 (L) | V | 10.3 | L | 4.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.87). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for lutetium-177 vipivotide tetraxetan was rejected because its structure is a two-compartment model, yet it carries rate constants and volumes (k13 0.00867 h−1, k31 0.0141 h−1, k14 0.0238 h−1, k41 0.0283 h−1, V3 30.4 L) pointing to compartments outside that structure.**

The declared topology is a two-compartment model, but the parameter set includes transfers to a second and third peripheral compartment (k13/k31 and k14/k41) and a volume V3 of 30.4 L, leaving compartments with no place in the stated structure — the orphan-compartment finding. The second reader also disagreed on several parameters: they read a Bmax of 40.4 for compartment 2, a k15 of 0.000248 h−1 with tumor-volume effect 0.705, and no compartment-2/3 volumes, whereas this record lists V2 24.6 L and V3 30.4 L. Disagreements on dose compound and primary analyte were only naming variants of the same molecule. Extracted — lutetium 177lu vipivotide tetraxetan: kel 0.288 h−1, k12 0.0238 h−1, k21 0.0307 h−1, k13 0.00867 h−1, k31 0.0141 h−1, k14 0.0238 h−1, k41 0.0283 h−1, V1 10.3 L, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has lutetium_177lu_vipivotide_tetraxetan, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k 10 (h−1) | `Q47` · kel | 0.288 | h−1 | 8e-05 | 1/s | 1/h | 7.6 | space_fold (0.95) | psp412914-tbl-0002:row2:col1, psp412914-tbl-0002:row2:col2 | 17.2 (13.7% RSE) |
| k 12 (h−1) | `Q301` · k12 | 0.0238 | h−1 | 6.611e-06 | 1/s | 1/h | 12.4 | space_fold (0.95) | psp412914-tbl-0002:row3:col1, psp412914-tbl-0002:row3:col2 |  |
| k 21 (h−1) | `Q302` · k21 | 0.0307 | h−1 | 8.528e-06 | 1/s | 1/h | 5.8 | space_fold (0.95) | psp412914-tbl-0002:row4:col1, psp412914-tbl-0002:row4:col2 |  |
| k 13 (h−1) | `Q303` · k13 | 0.00867 | h−1 | 2.408e-06 | 1/s | 1/h | 8.6 | space_fold (0.95) | psp412914-tbl-0002:row5:col1, psp412914-tbl-0002:row5:col2 | 16.1 (16.8% RSE) |
| k 31 (h−1) | `Q304` · k31 | 0.0141 | h−1 | 3.917e-06 | 1/s | 1/h | 4.7 | space_fold (0.95) | psp412914-tbl-0002:row6:col1, psp412914-tbl-0002:row6:col2 |  |
| k 14 (h−1) | `Q347` · k14 | 0.0238 | h−1 | 6.611e-06 | 1/s | 1/h | 7.9 | space_fold (0.95) | psp412914-tbl-0002:row7:col1, psp412914-tbl-0002:row7:col2 |  |
| k 41 (h−1) | `Q348` · k41 | 0.0283 | h−1 | 7.861e-06 | 1/s | 1/h | 4.6 | space_fold (0.95) | psp412914-tbl-0002:row8:col1, psp412914-tbl-0002:row8:col2 | 9.5 (16.8% RSE) |
| k 15 (h−1) | `Q48` · kcomp | 0.000248 | h−1 | 6.889e-08 | 1/s | 1/h | 14.0 | space_fold (0.95) | psp412914-tbl-0002:row9:col1, psp412914-tbl-0002:row9:col2 | 58.8 (17.3% RSE) |
| V1 (L) | `Q61` · V | 10.3 | L | 0.0103 | m3 | l | 4.5 | exact (1) | psp412914-tbl-0002:row13:col1, psp412914-tbl-0002:row13:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'k 10' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'k 13' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'k 41' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'k 15' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'BMAX compartment 2' routed out of structural estimates ('IIV (CV%)')
- table section iov: 'k 15' routed out of structural estimates ('IOV (CV%)')
- table section residual_error: 'Compartment 1 (blood samples)' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 1 (SPECT data)' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 2' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 3' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 4' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 5' routed out of structural estimates ('RUV (proportional, CV%)')
- table section residual_error: 'Compartment 1 a (MBq/L)' routed out of structural estimates ('RUV (additive)')
- dropped duplicate Q48 ('k 51 (h−1)', value '0.00902') — already have one for this compound
- dropped duplicate Q48 ('k 16 (h−1)', value '1.05') — already have one for this compound
- dropped duplicate Q48 ('k 61 (h−1)', value '0.744') — already have one for this compound
- dropped unlinked row (NIL): 'BMAX compartment 2 (MBq)' — extend the ontology if this is a real PK parameter (source ['psp412914-tbl-0002:row14:col1', 'psp412914-tbl-0002:row14:col2'])
- dropped unlinked row (NIL): 'Tumor volume on k 15' — extend the ontology if this is a real PK parameter (source ['psp412914-tbl-0002:row22:col1', 'psp412914-tbl-0002:row22:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lutetium_177lu_vipivotide_tetraxetan
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1 (L)' is the general volume)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL=2.9664 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.87 (20/23 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bmax compartment 2]` |  | 40.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | lutetium_177lu_vipivotide_tetraxetan | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | lutetium_177lu_vipivotide_tetraxetan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row3:col1', 'psp412914-tbl-0002:row3:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row4:col1', 'psp412914-tbl-0002:row4:col2'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row5:col1', 'psp412914-tbl-0002:row5:col2'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row6:col1', 'psp412914-tbl-0002:row6:col2'] |
| C5_dimension_Q347 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row7:col1', 'psp412914-tbl-0002:row7:col2'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row8:col1', 'psp412914-tbl-0002:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row2:col1', 'psp412914-tbl-0002:row2:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['psp412914-tbl-0002:row9:col1', 'psp412914-tbl-0002:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp412914-tbl-0002:row13:col1', 'psp412914-tbl-0002:row13:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.3 L | ['psp412914-tbl-0002:row13:col1', 'psp412914-tbl-0002:row13:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_modelica.zip" download>Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_fmi.zip" download>Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.214 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 8.24e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001471 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Siebinga H, Privé BM, Peters SMB, Nagarajah J, Dorlo TPC, Huitema ADR et al. Population pharmacokinetic dosimetry model using imaging data to assess variability in pharmacokinetics of &lt;sup&gt;177&lt;/sup&gt; Lu-PSMA-617 in prostate cancer patients. CPT: pharmacometrics & systems pharmacology 12(8):1060-1071 (2023). [doi:10.1002/psp4.12914](https://doi.org/10.1002/psp4.12914)

**This record:** Pharmacolibrary v26.09, model `Lutetium177luVipivotideTetraxetan_Siebinga2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference>

```bibtex
@misc{pharmacolibrary_Lutetium177luVipivotideTetraxetanSiebinga2023reference,
  title  = {{Pharmacolibrary model Lutetium177luVipivotideTetraxetan_Siebinga2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference},
  note   = {Parameters from doi:10.1002/psp4.12914},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_params.json` · controls `Lutetium177luVipivotideTetraxetan_Siebinga2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blutetium_177lu_vipivotide_tetraxetan%5D%20Lutetium177luVipivotideTetraxetan_Siebinga2023_reference&body=Drug%3A%20lutetium_177lu_vipivotide_tetraxetan%0ARecord%3A%20Lutetium177luVipivotideTetraxetan_Siebinga2023_reference%0APaper%3A%20Siebinga_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:24 UTC</sub>
