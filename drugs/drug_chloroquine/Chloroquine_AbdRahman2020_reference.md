<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Abd-Rahman_2020 \u00b7 reference&quot;}]"></div>

# chloroquine — `Chloroquine_AbdRahman2020_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Read the .deviation.json and confirm each deviation names what changed and why.
4. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `chloroquine phosphate`, measured `chloroquine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Abd-Rahman AN; Marquart L; Gobeau N; Kümmel A; Simpson JA; Chalon S; et al. et al. (2020). Clinical pharmacology and therapeutics 108
  ·  DOI: [10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893)

## Model component
<dbs-pgx drug="chloroquine" model-id="Chloroquine_AbdRahman2020_reference" status="model_quarantined" stale="false" population="24 healthy subjects with induced blood-stage P. vivax malaria" measured-compound="chloroquine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a , hour -1 | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col5, tab_1:row3:col6, tab_1:row3:col7 | — | not captured |
| CL CQ ∕F, L/h | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col5, tab_1:row5:col6, tab_1:row5:col7 | — | not captured |
| V c CQ ∕F, L | `Q76` · V/F | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col5, tab_1:row6:col6, tab_1:row6:col7 | — | not captured |
| Q 1 CQ F, L/h | `Q69` · Q/F | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col7 | — | not captured |
| F rel | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row15:col1, tab_1:row15:col2, tab_1:row15:col3, tab_1:row15:col4, tab_1:row15:col5, tab_1:row15:col6, tab_1:row15:col7, tab_1:row15:col8 | — | not captured |
| Vc CQ ∕F | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_1:row17:col1, tab_1:row17:col2, tab_1:row17:col3, tab_1:row17:col4, tab_1:row17:col5, tab_1:row17:col6, tab_1:row17:col7, tab_1:row17:col8 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q76 ('V p1 CQ ∕F, L', value '1079') — already have one for this compound
- dropped duplicate Q22 ('CL DCQ ∕F, L/h', value '3.87') — already have one for this compound
- dropped duplicate Q76 ('V c DCQ ∕F, L', value '11.6') — already have one for this compound
- dropped duplicate Q69 ('Q 1 DCQ ∕F, L/h', value '3.40') — already have one for this compound
- dropped duplicate Q76 ('V p1 DCQ ∕F, L', value '196') — already have one for this compound
- dropped duplicate Q95 ('k a', value '22') — already have one for this compound
- dropped duplicate Q22 ('CL CQ ∕F', value '23') — already have one for this compound
- dropped duplicate Q22 ('CL DCQ ∕F', value '13') — already have one for this compound
- dropped duplicate Q63 ('Vc DCQ ∕F', value '32') — already have one for this compound
- dropped unlinked row (NIL): 'prop CQ' — extend the ontology if this is a real PK parameter (source ['tab_1:row21:col1', 'tab_1:row21:col2', 'tab_1:row21:col3', 'tab_1:row21:col5', 'tab_1:row21:col6', 'tab_1:row21:col7'])
- dropped unlinked row (NIL): 'prop DCQ' — extend the ontology if this is a real PK parameter (source ['tab_1:row22:col1', 'tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7'])
- dropped value-less row: 'F rel'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chloroquine

**Extraction notes:**
- unparsed cell tab_1:row1:col3 = '95% CI'
- unparsed cell tab_1:row1:col7 = '95% CI'
- unparsed cell tab_1:row4:col1 = '100 (fixed)'
- unparsed cell tab_1:row4:col5 = '100 (fixed)'
- unparsed cell tab_1:row24:col2 = '0.72 (0.25-1.38)'
- unparsed cell tab_1:row24:col5 = '2.83 (1.29-4.49)'
- unparsed cell tab_1:row25:col2 = '4.0 (2.0-4.8)'
- unparsed cell tab_1:row25:col5 = '4.0 (2.0-5.5)'
- unparsed cell tab_1:row26:col2 = '80 (56-126)'
- unparsed cell tab_1:row26:col5 = '509 (326-856)'
- unparsed cell tab_1:row27:col2 = '149 (136-163)'
- unparsed cell tab_1:row27:col5 = '156 (124-212)'
- unparsed cell tab_1:row28:col2 = '0.08 (0.03-0.22)'
- unparsed cell tab_1:row28:col5 = '0.39 (0.16-0.82)'
- unparsed cell tab_1:row29:col2 = '3.3 (2.0-5.3)'
- unparsed cell tab_1:row29:col5 = '4.0 (2.0-5.7)'
- unparsed cell tab_1:row30:col2 = '21 (13-39)'
- unparsed cell tab_1:row30:col5 = '233 (96-683)'
- unparsed cell tab_1:row31:col2 = '104 (96-137)'
- unparsed cell tab_1:row31:col5 = '83 (71-99)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 4.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 32.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 24.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_chloroquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abd-Rahman_2020` / `Abd-Rahman_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_chloroquine/models/modelica/_needs_review/Chloroquine_AbdRahman2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_chloroquine/models/modelica/_needs_review/Chloroquine_AbdRahman2020_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
