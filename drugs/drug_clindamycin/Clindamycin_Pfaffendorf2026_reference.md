<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;clindamycin&quot;,&quot;href&quot;:&quot;drugs/drug_clindamycin/&quot;},{&quot;label&quot;:&quot;Pfaffendorf_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clindamycin_Mimram2022_reference&quot;,&quot;label&quot;:&quot;Mimram_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clindamycin/Clindamycin_Mimram2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clindamycin — `Clindamycin_Pfaffendorf2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `clindamycin, fosmidomycin, artesunate`, measured `clindamycin, fosmidomycin`.

## Citation
Pfaffendorf C et al., Population pharmacokinetics of fosmidom…, Malaria journal (2026)
  ·  DOI: [10.1186/s12936-026-05872-6](https://doi.org/10.1186/s12936-026-05872-6)

## Model component
<dbs-pgx drug="clindamycin" model-id="Clindamycin_Pfaffendorf2026_reference" status="extracted" stale="false" population="children and adults with uncomplicated P. falciparum malaria" measured-compound="clindamycin, fosmidomycin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 58.3 | L/h | 1.6194444444444444e-05 | L/h | not captured | exact (1.0) | Tab2:row3:col3, Tab2:row18:col3 | — | not captured |
| V/F | `Q76` · V/F | 248 | L | 0.248 | L | not captured | exact (1.0) | Tab2:row4:col3, Tab2:row19:col3 | — | not captured |
| ka | `Q49` · kabs | 0.698 | 1/h | 0.00019388888888888887 | 1/h | not captured | exact (1.0) | Tab2:row5:col3, Tab2:row20:col3 | — | 68.3 (None% RSE) |
| tlag | `Q83` · tlag | 0.105 | h | 378.0 | h | not captured | exact (1.0) | Tab2:row6:col3, Tab2:row21:col3 | — | 10.7 (None% RSE) |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row7:col3 | — | not captured |
| θTEMP | `Q900` · θTEMP | 6.68 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωka' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section iiv: 'ωF' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section residual_error: 'σprop' routed out of structural estimates ('Residual error model')
- table section residual_error: 'σadd' routed out of structural estimates ('Residual error model')
- table section iiv: 'ωtlag' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section iov: 'κCL/F' routed out of structural estimates ('Inter-occasion variability (IOV)')
- kept covariate coefficient θTEMP=6.68 (covariate TEMP) — not an ontology parameter
- implicit units: 'CL/F' → L/h (from the paper text: "Table 2 lists 'Units' for 'CL/F' as 'L/h'. Additionally, the text states: '...apparent clearance rates of 116 L and 26 L")
- implicit units: 'V/F' → L (from the paper text: "Table 2 lists 'Units' for 'V/F' as 'L'. Additionally, the text states: '...apparent volume of distribution and apparent ")
- implicit units: 'ka' → 1/h (from the paper text: "Table 2 lists 'Units' for 'ka' as 'h⁻¹'.")
- implicit units: 'tlag' → h (from the paper text: "Table 2 lists 'Units' for 'tlag' as 'h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clindamycin, fosmidomycin
- molar mass: none of 3 PubChem candidate(s) is 'clindamycin, fosmidomycin' (LLM) — left in mass units
- molar mass: none found for 'clindamycin, fosmidomycin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col1 = 'Apparent clearance (for a 29.05 kg person at 37.1 °C)'
- unparsed cell Tab2:row3:col4 = '[51.0, 67.8]'
- unparsed cell Tab2:row4:col1 = 'Apparent volume of distribution (for a 29.05 kg person)'
- unparsed cell Tab2:row4:col4 = '[201.9, 302.8]'
- unparsed cell Tab2:row5:col2 = 'h⁻1'
- unparsed cell Tab2:row5:col4 = '[0.48, 1.0]'
- unparsed cell Tab2:row6:col4 = '[0.03, 0.17]'
- unparsed cell Tab2:row9:col4 = '[3.6, 9.7]'
- unparsed cell Tab2:row11:col4 = '[45.8, 102.1]'
- unparsed cell Tab2:row12:col4 = '[24.3, 48.8]'
- unparsed cell Tab2:row14:col4 = '[29.7, 41.9]'
- unparsed cell Tab2:row15:col4 = '[0.15, 0.25]'
- unparsed cell Tab2:row18:col1 = 'Apparent clearance (for a 29.05 kg person)'
- unparsed cell Tab2:row18:col4 = '[7.2, 9.0]'
- unparsed cell Tab2:row19:col1 = 'Apparent volume of distribution (for a 29.05 kg person)'
- unparsed cell Tab2:row19:col4 = '[25.4, 32.6]'
- unparsed cell Tab2:row20:col2 = 'h⁻1'
- unparsed cell Tab2:row20:col4 = '[1.3, 3.8]'
- unparsed cell Tab2:row21:col4 = '[0.20, 0.24]'
- unparsed cell Tab2:row23:col4 = '[65.2, 129.1]'
- unparsed cell Tab2:row24:col4 = '[4.9, 20.6]'
- unparsed cell Tab2:row27:col4 = '[23.7, 34.5]'
- unparsed cell Tab2:row29:col4 = '[27.5.0, 39.2]'
- unparsed cell Tab2:row30:col4 = '[0.003, 0.006]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row18:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row20:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row19:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row21:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 58.3 L/h | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row18:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 248 L | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row19:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clindamycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pfaffendorf_2026` / `Pfaffendorf_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_matlab.zip" download>Clindamycin_Pfaffendorf2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_matlab_simbio.zip" download>Clindamycin_Pfaffendorf2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_sbml.zip" download>Clindamycin_Pfaffendorf2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_cellml.zip" download>Clindamycin_Pfaffendorf2026_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:34 UTC</sub>
