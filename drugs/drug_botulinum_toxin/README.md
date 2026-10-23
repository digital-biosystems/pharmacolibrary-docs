<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;botulinum toxin&quot;}]"></div>

# botulinum toxin

- **generic name:** botulinum toxin
- **ATC codes:** `M03AX01`
- **DrugBank:** [DB00042](https://go.drugbank.com/drugs/DB00042) · **PubChem:** not captured
- **groups:** approved

## About

Botulinum toxin type B is a muscle-relaxing protein medication used to treat dystonia, including torticollis. It is an approved drug, though one product has been withdrawn in the European Union, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15709005](https://www.wikidata.org/wiki/Q15709005) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ojardias_2022_MAS](drugs/drug_botulinum_toxin/pd_Ojardias_2022_MAS.md) | MAS score change from baseline ← Botulinum toxin · direct Emax (saturable) effect | — | Ojardias E et al., Time course response after single injec…, Annals of physical and reha… (2022) | [10.1016/j.rehab.2021.101579](https://doi.org/10.1016/j.rehab.2021.101579) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=botulinum_toxin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SYT2 (cleavage), SYT2 (inhibitor), VAMP1 (binder), VAMP2 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:15 | 0:47 | 0/0/0 | 1/0/0 | 0/0/0 | 136,586/2,052 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bak_2017 | irrelevant | 0 | 0 | The study describes an in vitro cell-based neutralization assay for botulinum toxin and does not report pharmacokinetic parameters (e.g., clearance, volume) for the toxin. |
| popPK | Borrello_2023 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (peristalsis, body weight) and mechanistic evidence of action (SNAP-25 cleavage) in rats, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for botulinum toxin. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle delivery systems for cancer drugs (e.g., Doxorubicin, Paclitaxel) and does not study the pharmacokinetics of botulinum toxin. |
| popPK | Frégeau_2013 | irrelevant | 0 | 0 | The paper studies dopamine D2 receptor signaling in PC-12 cells and does not involve botulinum toxin or pharmacokinetics. |
| popPK | Kildal_2025 | irrelevant | 0 | 0 | The paper is an anatomical study of the platysma muscle using ultrasound and dissection, not a pharmacokinetic study of botulinum toxin. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study measures the effective concentration of sevoflurane for sedation during botulinum toxin injection, rather than the pharmacokinetic parameters of botulinum toxin itself. |
| popPK | Lung_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating pain and opioid consumption, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume. |
| popPK | Maruta_2008 | irrelevant | 0 | 0 | The study investigates signaling mechanisms and ion channel up-regulation in bovine chromaffin cells, with botulinum toxin C3 used only as a pharmacological inhibitor of Rho, not as the subject of pharmacokinetic analysis. |
| popPK | Montgomery_2016 | irrelevant | 0 | 0 | The paper is an in-vitro physiology teaching practical involving rabbit intestine and does not report pharmacokinetic parameters for botulinum toxin. |
| popPK | Ojardias_2022 | relevant | 3 | 5 | The study reports pharmacodynamic effect half-lives (T1/2 off) and dose-response parameters for botulinum toxin in humans, but lacks quantitative pharmacokinetic disposition parameters (CL, V, Q) as these cannot be directly measured from clinical MAS scores. |
| popPK | Papavasiliou_2012 | irrelevant | 0 | 0 | The study assesses clinical treatment consistency and dosing intervals in pediatric patients, reporting no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Picelli_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome study focusing on spasticity reduction and motor recovery, containing no pharmacokinetic parameters (CL, V, t1/2) or population PK modeling. |
| popPK | Rahman_2026 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic (dose-response) modeling and does not report pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |
| popPK | Schiavone_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study of botulinum toxin enzymatic activity (proteolysis of SNAREs/PTEN) in vitro and in neurons, not a pharmacokinetic study of drug disposition. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The study is a clinical trial evaluating pain outcomes, not a pharmacokinetic study, and reports no quantitative disposition parameters for botulinum toxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
