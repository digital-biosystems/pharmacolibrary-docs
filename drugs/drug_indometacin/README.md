<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;indometacin&quot;}]"></div>

# indometacin

- **generic name:** indometacin
- **ATC codes:** `C01EB03`, `M01AB01`, `M02AA23`, `S01BC01`, `S01CC02`
- **DrugBank:** [DB00328](https://go.drugbank.com/drugs/DB00328) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Indometacin is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in conditions such as osteoarthritis, rheumatoid arthritis, gout attacks, bursitis, enthesopathy, and to close a patent ductus arteriosus. It is an approved medicine, available in oral and topical forms for joint and muscular pain as well as eye use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409231](https://www.wikidata.org/wiki/Q409231) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indometacin | parent | 357.79 | C19H16ClNO4 | PubChem | [3715](https://pubchem.ncbi.nlm.nih.gov/compound/3715) | Smyth_2004, Smyth_2004_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="unknown" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Smyth_2004_1000_bootstrap_samples](drugs/drug_indometacin/Indometacin_Smyth2004_1000_bootstrap_samples.md) | — | 1-compartment (no model) | 2 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |
| <span class="pk-rf" hidden data-species="unknown" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ original_dataset](drugs/drug_indometacin/Indometacin_Smyth2004_original_dataset.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Smyth_2004_2_1000_bootstrap_samples](drugs/drug_indometacin/Indometacin_Smyth2004v2_1000_bootstrap_samples.md) | — | 1-compartment (no model) | 2 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ original_dataset](drugs/drug_indometacin/Indometacin_Smyth2004v2_original_dataset.md) | — | 1-compartment (no model) | 2 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:19 | 4:32 | 0/0/4 | 0/0/0 | 0/0/0 | 58,010/13,155 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 12/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 11  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cui_2016_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zaltoprofen, with indometacin used only as a comparator for analgesic efficacy. |
| PD | Cui_2016_2 | not_relevant | 0 | 0 | The paper focuses on the transdermal delivery of zaltoprofen; indometacin is only used as a commercial comparator for qualitative analgesic effect, with no exposure-response or dose-response modeling or numeric PD parameters reported for it. |
| popPK | Fu_2010 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of betulinic acid on rat aorta, using indometacin only as a non-specific inhibitor control, and reports no pharmacokinetic parameters for indometacin. |
| PD | Fu_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of betulinic acid, not indometacin; indometacin is only mentioned as a negative control inhibitor. |
| popPK | Nielsen_2009_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin, with indometacin mentioned only as a concomitant medication covariate. |
| popPK | Pesić_2002 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular contractions where indometacin is used only as a cyclooxygenase inhibitor tool compound, not as the subject of pharmacokinetic analysis. |
| PD | Pesić_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacology of acetylcholine on human arteries; indometacin is used only as a control inhibitor and no exposure-response or dose-response relationship for indometacin itself is reported. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study investigates noradrenaline release mechanisms in rat stomach tissue where indometacin is used only as a pharmacological tool to block prostaglandin synthesis, not as the subject of a pharmacokinetic analysis. |
| PD | Racké_1995 | not_relevant | 0 | 0 | The paper states that indometacin did not affect noradrenaline overflow, providing no numeric PD parameters or dose-response relationship for the drug. |
| popPK | Reimer_1996 | irrelevant | 0 | 0 | Indometacin is used only as a prophylactic agent to prevent inflammation in guinea pigs, and the study focuses on peptide hormone receptors and bicarbonate secretion, not indometacin pharmacokinetics. |
| PD | Reimer_1996 | not_relevant | 0 | 0 | The paper investigates peptide hormone (VIP/secretin) pharmacology; indometacin is used only as a background treatment to inhibit prostaglandin synthesis and is not the subject of any exposure-response or dose-response analysis. |
| popPK | Tanaka_2016 | irrelevant | 2 | 0 | The study is a PK/PD modeling analysis using literature data for multiple NSAIDs, and no specific quantitative PK parameter values for indometacin are present in the provided evidence. |
| popPK | Tirapelli_2008 | irrelevant | 0 | 0 | Indometacin is used only as a pharmacological tool (COX inhibitor) in a vascular reactivity study, not as the subject of a pharmacokinetic analysis. |
| PD | Tirapelli_2008 | not_relevant | 3 | 0 | The paper mentions indometacin qualitatively as a tool to reduce the maximum effect (Emax) of phenylephrine, but it does not report a concentration-effect or dose-response relationship for indometacin itself, nor does it provide numeric PD parameters for indometacin. |
| popPK | Uchôa_2009 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the novel compound PG15, using indometacin only as a pharmacodynamic comparator. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 11:15 UTC</sub>
