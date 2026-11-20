<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Iron&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/&quot;},{&quot;label&quot;:&quot;Cao_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iron_Borella2022_reference&quot;,&quot;label&quot;:&quot;Borella_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Borella2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Zhang2022_reference&quot;,&quot;label&quot;:&quot;Zhang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Zhang2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Iron — `Iron_Cao2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Iron" model-id="Iron_Cao2025_reference" status="needs_review" stale="false" population="IDA rats and IDA patients (simulated)" measured-compound="Iron" parameterization="mechanistic" topology="1C"></div>

## Citation
Cao K, Fan X, Lee CF, Wong RSM, Chan DKL, Yan X. Computational Prediction of Tissue Iron Dynamics in Iron Deficiency Anemia Following Intravenous Ferric Carboxymaltose Therapy. International journal of nanomedicine 20:12019–12039 (2025).
  ·  DOI: [10.2147/IJN.S534063](https://doi.org/10.2147/IJN.S534063)

## Population and dosing

**Population:** IDA rats and IDA patients (simulated) · condition Iron deficiency anemia · age group adult.

**Dosing:** 5, 7.5, 15 mg Fe/kg, iv, single.

**Dosed compound ≠ measured compound:** dosed Ferric carboxymaltose, measured Iron.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| KPliv | Kp | 21.7 |  | 6.7 |
| KPBM | kuptake | 21.6 |  | 1.7 |
| PSliv | Q | 2.16 | mL/h | 1.8 |
| PSBM | Qd | 0.0436 | mL/h | 13.4 |
| Kout_fer | kout_peripheral | 0.178 | 1/h | 21.6 |
| Vd | V | 3.62 | L |  |
| tR | tlag | 27.5 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| KPliv | `Q410` · Kp | 21.7 |  |  |  |  | 6.7 | llm (0.6) | t0004:row2:col2 |
| KPBM | `Q349` · kuptake | 21.6 |  |  |  |  | 1.7 | llm (0.6) | t0004:row6:col2 |
| PSliv | `Q30` · Q | 2.16 | mL/h | 6e-10 | m3/s | ml/h | 1.8 | llm (0.6) | t0004:row9:col2 |
| PSBM | `Q364` · Qd | 0.0436 | mL/h | 1.211e-11 | m3/s | ml/h | 13.4 | llm (0.6) | t0004:row13:col2 |
| Kout_fer | `Q346` · kout_peripheral | 0.178 | 1/h | 4.944e-05 | 1/s | 1/h | 21.6 | llm (0.6) | t0004:row18:col2 |
| Vd | `Q61` · V | 3.62 | L | 0.00362 | m3 | L |  | review_gapfill (0.7) | Zhang_2022:review |
| tR | `Q83` · tlag | 27.5 | min | 1650 | s | h |  | review_gapfill (0.7) | Wang_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'KPhea' — extend the ontology if this is a real PK parameter (source ['t0004:row1:col2'])
- dropped duplicate Q410 ('KPspl', value '25.9') — already have one for this compound
- dropped duplicate Q410 ('KPlun', value '12.2') — already have one for this compound
- dropped duplicate Q410 ('KPkid', value '9.66') — already have one for this compound
- dropped unlinked row (NIL): 'KPrem' — extend the ontology if this is a real PK parameter (source ['t0004:row7:col2'])
- dropped unlinked row (NIL): 'PShea' — extend the ontology if this is a real PK parameter (source ['t0004:row8:col2'])
- dropped unlinked row (NIL): 'PSspl' — extend the ontology if this is a real PK parameter (source ['t0004:row10:col2'])
- dropped duplicate Q30 ('PSlun', value '0.0239') — already have one for this compound
- dropped unlinked row (NIL): 'PSkid' — extend the ontology if this is a real PK parameter (source ['t0004:row12:col2'])
- dropped unlinked row (NIL): 'PSrem' — extend the ontology if this is a real PK parameter (source ['t0004:row14:col2'])
- dropped duplicate Q30 ('QE', value '1.37') — already have one for this compound
- dropped PD-category row 'Kout_RBC' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row16:col2'])
- dropped PD-category row 'Kin_fer' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row17:col2'])
- dropped value-less row: 'Table 4. Parameter Estimation of the Final Model in IDA Rats'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Iron
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- row roles (LLM): model_class=pbpk; 19/19 row label(s) assigned, 2 linked by role; re-tagged Iron→Hemoglobin ×1, Iron→Serum Ferritin ×1
- molar mass: no plausible PubChem entry for 'Ferric carboxymaltose' ('ferric carboxymaltose') — left in mass units
- molar mass: none found for 'Ferric carboxymaltose' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Zhang_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Wang_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0004:row9:col2'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['t0004:row18:col2'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] |  | ['t0004:row13:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhang_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wang_2026:review'] |
| C5_unit_missing_Q349 | fail | 1 / [time] |  | ['t0004:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.62 L | ['Zhang_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biron%5D%20Iron_Cao2025_reference&body=Drug%3A%20iron%0ARecord%3A%20Iron_Cao2025_reference%0APaper%3A%20Cao_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_iron/Iron_Cao2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 22:26 UTC</sub>
