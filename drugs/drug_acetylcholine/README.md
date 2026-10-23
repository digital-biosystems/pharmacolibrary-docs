<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;acetylcholine&quot;}]"></div>

# acetylcholine

- **generic name:** acetylcholine
- **ATC codes:** `S01EB09`
- **DrugBank:** [DB03128](https://go.drugbank.com/drugs/DB03128) · **PubChem:** [CID 187](https://pubchem.ncbi.nlm.nih.gov/compound/187)
- **molar mass:** 146.2074 g/mol (C7H16NO2) — DrugBank
- **groups:** approved, investigational

## About

Acetylcholine, a naturally occurring neurotransmitter and cholinergic agonist, is used as a miotic eye medicine in the treatment of glaucoma. It is approved but used only in a narrow ophthalmological setting, mainly in eye surgery, rather than as a widely prescribed drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q180623](https://www.wikidata.org/wiki/Q180623) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [López-Serrano_2022_IKACh](drugs/drug_acetylcholine/pd_L_pez_Serrano_2022_IKACh.md) | IKACh ← ACh · direct sigmoid Emax (Hill) effect | — | López-Serrano AL et al., Differential voltage-dependent modulati…, PloS one (2022) | [10.1371/journal.pone.0261960](https://doi.org/10.1371/journal.pone.0261960) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mace_2022_ACh](drugs/drug_acetylcholine/pd_Mace_2022_ACh.md) | vasodilation ← acetylcholine · direct sigmoid Emax (Hill) effect | — | Mace EH et al., SOLUBLE GUANYLYL CYCLASE ACTIVATION RES…, Shock (Augusta, Ga.) (2022) | [10.1097/SHK.0000000000001982](https://doi.org/10.1097/SHK.0000000000001982) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:50 | 1:37 | 0/0/0 | 0/2/0 | 0/0/0 | 155,724/2,580 | einfracz / qwen3.8-27b | 9 | 1/8 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 2066 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cavaillon_2006 | irrelevant | 0 | 0 | The paper is a review of the inflammatory response in sepsis and mentions acetylcholine only as a neuromediator in a mechanistic context, without providing any pharmacokinetic parameters or quantitative data. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The study reports changes in serum acetylcholine levels as a biomarker in a cognitive trial, not pharmacokinetic parameters (CL, V, etc.) for acetylcholine. |
| popPK | Johnstone_2022 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of varenicline on nicotine cravings in humans and does not report any pharmacokinetic parameters for acetylcholine. |
| popPK | Jörg_2023 | irrelevant | 0 | 0 | The study investigates pharmacology of acetylcholine receptor modulators, not the pharmacokinetics of acetylcholine itself. |
| popPK | Kiriyama_2023 | irrelevant | 2 | 0 | The study models the pharmacokinetics of donepezil, with acetylcholine serving only as a pharmacodynamic endpoint rather than the subject drug for disposition analysis. |
| popPK | Lucas-Herald_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study of vascular reactivity in isolated human arteries where acetylcholine is used as a dilatory agent to test endothelial function, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Lyngsø_2022 | irrelevant | 0 | 0 | The study investigates endothelial function and vascular physiology in mice, using acetylcholine as a pharmacological agent to test endothelial integrity, rather than studying the pharmacokinetic disposition (clearance, volume, etc.) of acetylcholine. |
| popPK | López-Serrano_2022 | irrelevant | 0 | 0 | This is an electrophysiological study measuring receptor potency (EC50) and channel deactivation kinetics in guinea-pig cardiomyocytes, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Mace_2022 | irrelevant | 0 | 0 | Acetylcholine is used as a pharmacological tool (agonist) to measure vascular reactivity (EMax/EC50), not as the subject drug for pharmacokinetic characterization. |
| popPK | Mapp_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological examination of acetylcholine's effect on airway smooth muscle contractility (EC50), not a pharmacokinetic study of acetylcholine disposition. |
| popPK | Matsushita_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meclizine, not acetylcholine. |
| popPK | Monteleone_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for eculizumab, not acetylcholine, which is only mentioned as the target of autoantibodies in myasthenia gravis. |
| popPK | Norling_2023 | irrelevant | 0 | 0 | The study examines the association between anticholinergic drug burden and cognitive decline in humans, rather than measuring the pharmacokinetic parameters (clearance, volume, etc.) of acetylcholine. |
| popPK | Pelletier_2022 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of arylcyclohexylamine derivatives (ketamine, PCP) and does not contain data for acetylcholine. |
| popPK | Poet_2004 | irrelevant | 0 | 0 | The study models the pharmacokinetics of the pesticide diazinon, with acetylcholine mentioned only as a neurochemical consequence of cholinesterase inhibition rather than as the subject drug. |
| popPK | Schildt_2020 | irrelevant | 0 | 0 | The paper describes PET imaging with [18F]FEOBV, not pharmacokinetic parameters for acetylcholine. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study investigates immune cell dynamics during efgartigimod treatment for myasthenia gravis and does not report pharmacokinetic parameters for acetylcholine. |
| popPK | White_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on vascular reactivity in atherosclerosis where acetylcholine is used as a pharmacological probe, not a study of acetylcholine pharmacokinetics. |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the peptide drug αO-conotoxin GeXIVA[1,2], not for acetylcholine, which is only the receptor target. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
