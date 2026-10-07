<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;meropenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meropenem_Bilal2021_reference&quot;,&quot;label&quot;:&quot;Bilal_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Bilal2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Liu2025_reference&quot;,&quot;label&quot;:&quot;Liu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Liu2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Zyryanov2023_reference&quot;,&quot;label&quot;:&quot;Zyryanov_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Zyryanov2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# meropenem

- **generic name:** meropenem
- **ATC codes:** `J01DH02`, `J01DH52`
- **DrugBank:** [DB00760](https://go.drugbank.com/drugs/DB00760) · **PubChem:** [CID 441130](https://pubchem.ncbi.nlm.nih.gov/compound/441130)
- **molar mass:** 383.463 g/mol (C17H25N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Meropenem is a carbapenem antibiotic used to treat serious bacterial infections such as appendicitis, urinary tract infections, peritonitis, respiratory infections, meningitis, and infections caused by E. coli, Pseudomonas, and Bacteroides. It is an approved medicine, appears on the WHO list of essential medicines, and is widely used in hospitals for severe infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421670](https://www.wikidata.org/wiki/Q421670) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meropenem | parent | 383.463 | C17H25N3O5S | DrugBank | [441130](https://pubchem.ncbi.nlm.nih.gov/compound/441130) | Rančić_2024, Zyryanov_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:38 | 5:19 | 4/0/0 | 0/0/0 | 0/0/0 | 263,898/20,538 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bilal_2021_reference](drugs/drug_meropenem/Meropenem_Bilal2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Bilal M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01063-5](https://doi.org/10.1007/s40262-021-01063-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2025_reference](drugs/drug_meropenem/Meropenem_Liu2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Liu Y et al., PopPK and PBPK Models Guide Meropenem D…, Pharmaceutics (2025) | [10.3390/pharmaceutics17121544](https://doi.org/10.3390/pharmaceutics17121544) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rančić_2024_reference](drugs/drug_meropenem/Meropenem_Rani2024_reference.md) | held back | 1-compartment, IV | 1 | Rančić A et al., Population pharmacokinetics of meropene…, Open medicine (Warsaw, Pola… (2024) | [10.1515/med-2024-1004](https://doi.org/10.1515/med-2024-1004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zyryanov_2023_reference](drugs/drug_meropenem/Meropenem_Zyryanov2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Zyryanov S et al., Population PK/PD modelling of meropenem…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1079680](https://doi.org/10.3389/fphar.2023.1079680) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=meropenem) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 395 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 4  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abouelhassan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics/pharmacodynamics of sulbactam (in ampicillin-sulbactam) in mice, with meropenem only mentioned as a resistance marker for isolates, not as the subject of PK analysis. |
| popPK | Alsultan_2024 | irrelevant | 2 | 2 | The study reports PK/PD target attainment percentages and median trough concentrations, but does not provide quantitative disposition parameters such as clearance (CL), volume of distribution (V), or half-life. |
| popPK | Charoensareerat_2023 | irrelevant | 2 | 0 | This is a systematic review and simulation study that cites parameters from other sources but does not report original quantitative PK parameter values for meropenem in the provided text. |
| popPK | Czock_2007 | irrelevant | 2 | 0 | The paper is a review of PK-PD modeling mechanisms that uses meropenem only as a qualitative example of concentration-dependent effects, without reporting original quantitative PK disposition parameters (CL, V, etc.) for meropenem. |
| popPK | He_2023 | irrelevant | 1 | 0 | This is a narrative review of PK/PD strategies in pediatric patients that does not report original quantitative parameter values (CL, V, etc.) in the provided text. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a literature review and does not contain original quantitative pharmacokinetic parameter values for meropenem. |
| popPK | Lodise_2006 | irrelevant | 2 | 0 | The paper is a review discussing the application of PD concepts to beta-lactams including meropenem, but it does not report original quantitative population PK parameter values (CL, V, etc.) for meropenem in the provided evidence. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | This is a narrative review of new antibiotics in liver transplantation; it does not report original quantitative population-PK parameters (CL, V, etc.) for meropenem, discussing it only as a component of the meropenem/vaborbactam combination in the context of efficacy and toxicity. |
| popPK | Rando_2024 | irrelevant | 0 | 0 | The paper is a systematic review of novel beta-lactams and beta-lactamase inhibitor combinations, and meropenem appears only in the context of the combination drug meropenem/vaborbactam, not as the subject drug itself. |
| popPK | Roberts_2025 | relevant | 10 | 2 | This is a population PK study of meropenem in humans, but the specific numeric parameter values (CL, V, etc.) are located in the electronic supplementary material which is not provided in the evidence. |
| popPK | Rohani_2023 | irrelevant | 3 | 1 | The study focuses on PK/PD target attainment (time above MIC) and comparative concentration data in ELF vs plasma, but does not report individual or population pharmacokinetic parameter estimates (CL, V, Q, Ka, t1/2) for meropenem. |
| popPK | Zhanel_2018 | irrelevant | 1 | 0 | This is a review article discussing the microbiology and clinical trial data of combination therapies, containing only qualitative PK descriptions for the beta-lactamase inhibitors (vaborbactam/relebactam) rather than quantitative PK parameters for meropenem itself. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefiderocol, with meropenem mentioned only as a microbiological comparator and not as the subject of the PK study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:35 UTC</sub>
