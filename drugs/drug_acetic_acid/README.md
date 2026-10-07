<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;acetic acid&quot;}]"></div>

# acetic acid

- **generic name:** acetic acid
- **ATC codes:** `G01AD02`, `S02AA10`
- **DrugBank:** [DB03166](https://go.drugbank.com/drugs/DB03166) · **PubChem:** [CID 176](https://pubchem.ncbi.nlm.nih.gov/compound/176)
- **molar mass:** 60.052 g/mol (C2H4O2) — DrugBank
- **groups:** approved, investigational

## About

Acetic acid is used as an antiseptic to treat infections such as otitis externa and bacterial vaginosis. It is approved and appears on the WHO essential medicines list, with products for gynecological and ear use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q47512](https://www.wikidata.org/wiki/Q47512) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:42 | 1:04 | 0/0/0 | 1/0/0 | 0/0/0 | 120,493/3,203 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Kalvani_2025_Site_IIF_H2O2_emission](drugs/drug_acetic_acid/pd_Kalvani_2025_Site_IIF_H2O2_emission.md) | Site IIF H2O2 emission biomarker turnover ← 3,5-dimethyladamantane-1-acetic acid | — | Kalvani Z et al., Naphthenic Acid-Induced ROS Emissions b…, Toxics (2025) | [10.3390/toxics13121015](https://doi.org/10.3390/toxics13121015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Kalvani_2025_State_3_H2O2_emission](drugs/drug_acetic_acid/pd_Kalvani_2025_State_3_H2O2_emission.md) | State 3 H2O2 emission biomarker turnover ← 3,5-dimethyladamantane-1-acetic acid | — | Kalvani Z et al., Naphthenic Acid-Induced ROS Emissions b…, Toxics (2025) | [10.3390/toxics13121015](https://doi.org/10.3390/toxics13121015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Kalvani_2025_State_4_H2O2_emission](drugs/drug_acetic_acid/pd_Kalvani_2025_State_4_H2O2_emission.md) | State 4 H2O2 emission biomarker turnover ← 3,5-dimethyladamantane-1-acetic acid | — | Kalvani Z et al., Naphthenic Acid-Induced ROS Emissions b…, Toxics (2025) | [10.3390/toxics13121015](https://doi.org/10.3390/toxics13121015) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acetic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC16A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 245 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Castro_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects of kramecyne, and acetic acid is only used as a reagent in a pain model, not as a subject drug for PK analysis. |
| popPK | Altalal_2023 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic study of doxorubicin and sorafenib in rats, where acetic acid is used only as a component of the mobile phase, not as the subject drug. |
| popPK | Anzoise_2016 | irrelevant | 0 | 0 | Acetic acid is used only as a chemical agent to induce colitis, and no pharmacokinetic parameters are reported. |
| popPK | Eckernäs_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of N,N-dimethyltryptamine (DMT) and its metabolite indole-3-acetic acid (IAA), not acetic acid; the mention of "acetic acid" in the text is part of the name "indole 3-acetic acid" or a different compound, not the subject drug. |
| popPK | Gaspari_1997 | irrelevant | 0 | 0 | The paper is a review on measuring glomerular filtration rate using markers like inulin and DTPA, and does not report pharmacokinetic parameters for acetic acid. |
| popPK | Janiga-MacNelly_2025 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mechanistic study of indole derivatives, not a pharmacokinetic study of acetic acid. |
| popPK | Kalvani_2025 | irrelevant | 0 | 0 | The paper studies the effect of 3,5-dimethyladamantane-1-acetic acid on mitochondrial ROS production in rainbow trout, not the pharmacokinetics of acetic acid. |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The study is a plant toxicity assessment in *Vigna radiata* and does not involve the pharmacokinetics of acetic acid. |
| popPK | Li_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 5,6-dimethylxanthenone-4-acetic acid (DMXAA), not the target drug acetic acid. |
| popPK | Maheshwari_2017 | irrelevant | 0 | 0 | The paper models the dialysis kinetics of protein-bound uremic toxins (such as indoxyl sulfate and indole-3-acetic acid) and does not study acetic acid as the subject drug. |
| popPK | Oggianu_2023 | irrelevant | 0 | 0 | The paper is a PK/PD study of trazodone and gabapentin, where acetic acid is used as a pain stimulus in the writhing test, not as the subject drug for PK parameter estimation. |
| popPK | Raulic_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of robenacoxib, not acetic acid, which is used only as a nociceptive stimulus agent in the model. |
| popPK | Schluep_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the nanoparticle IT-101 (containing camptothecin) in mice, not the drug acetic acid. |
| popPK | Toubasi_2025 | irrelevant | 0 | 0 | The paper is a neuroimaging study on multiple sclerosis using gadolinium-DTPA as a contrast agent, and contains no pharmacokinetic data for acetic acid. |
| popPK | Vollmer_1986 | irrelevant | 0 | 0 | The study focuses on gabapentin (1-(aminomethyl)-cyclohexane acetic acid), not the target drug acetic acid. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of oxyclozanide in cattle, not acetic acid (which is only used as a mobile phase component). |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis of chitosan biomaterials and their antifungal activity, with acetic acid mentioned only as a solvent for comparison. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
