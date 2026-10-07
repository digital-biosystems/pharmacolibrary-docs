<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;botulinum toxin&quot;}]"></div>

# botulinum toxin

- **generic name:** botulinum toxin
- **ATC codes:** `M03AX01`
- **DrugBank:** [DB00042](https://go.drugbank.com/drugs/DB00042) · **PubChem:** not captured
- **groups:** approved

## About

Botulinum toxin type B is a muscle-relaxing protein medication used to treat dystonia, including torticollis. It is an approved drug, though one product has been withdrawn in the European Union, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15709005](https://www.wikidata.org/wiki/Q15709005) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:15 | 0:47 | 0/0/0 | 0/0/1 | 0/0/0 | 136,586/2,052 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ojardias_2022_MAS](drugs/drug_botulinum_toxin/pd_Ojardias_2022_MAS.md) | MAS score change from baseline ← Botulinum toxin · direct Emax (saturable) effect | — | Ojardias E et al., Time course response after single injec…, Annals of physical and reha… (2022) | [10.1016/j.rehab.2021.101579](https://doi.org/10.1016/j.rehab.2021.101579) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=botulinum_toxin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SYT2 (cleavage), SYT2 (inhibitor), VAMP1 (binder), VAMP2 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
