<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;sulbutiamine&quot;}]"></div>

# sulbutiamine

- **generic name:** sulbutiamine
- **ATC codes:** `A11DA02`
- **DrugBank:** [DB13416](https://go.drugbank.com/drugs/DB13416) · **PubChem:** [CID 3002120](https://pubchem.ncbi.nlm.nih.gov/compound/3002120)
- **molar mass:** 702.89 g/mol (C32H46N8O6S2) — DrugBank
- **groups:** investigational

## About

Sulbutiamine is a vitamin B1 analogue with nootropic properties, studied as an investigational drug. It is not an approved medicine in major markets such as the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2581447](https://www.wikidata.org/wiki/Q2581447) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:07 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 60,160/1,595 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/3 | 8/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4004 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blandin_2023 | irrelevant | 0 | 0 | no_text gate: only 213 chars of text extracted (&lt; 400) |
| popPK | Bodansky_1987 | irrelevant | 0 | 0 | The paper is an epidemiological study of Type 1 diabetes in Asian children and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Bykov_2022 | irrelevant | 2 | 0 | The paper is a review of sulbutiamine's pharmacokinetics and efficacy, but the provided evidence contains no original quantitative PK parameter values (CL, V, ka, etc.). |
| PD | Bykov_2022 | not_relevant | 2 | 0 | The text is a qualitative review of the mechanism of action and clinical evidence for sulbutiamine, describing pharmacological effects (e.g., cholinergic modulation, BBB penetration) without providing any numeric exposure-response or dose-response parameters (Emax, EC50, etc.). |
| popPK | Choi_2018 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| popPK | Dahlke_1984 | irrelevant | 0 | 0 | The paper is a clinical study on platelet transfusion and HLA antigen matching, with no pharmacokinetic data for sulbutiamine. |
| popPK | Davies_2024 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| popPK | Francés_2025 | irrelevant | 0 | 0 | The paper is a computational study on glioblastoma neoantigen discovery and HLA binding, containing no data on sulbutiamine pharmacokinetics. |
| popPK | França_2016 | irrelevant | 0 | 0 | The paper describes a novel bacterial species isolated from water and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Genebrier_2020 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| popPK | Gray_1982 | irrelevant | 0 | 0 | The paper discusses the supplement B15 (calcium gluconate and DMG) and its effects on exercise performance, with no mention of sulbutiamine or its pharmacokinetics. |
| popPK | Güler_2020 | irrelevant | 0 | 0 | The study investigates postural control and fatigue in soccer players and does not involve sulbutiamine or pharmacokinetics. |
| popPK | Janzen_2024 | irrelevant | 0 | 0 | The paper is a materials science study on hexagonal boron nitride (hBN) crystal growth and spectroscopy, unrelated to sulbutiamine pharmacokinetics. |
| popPK | Khare_2018 | irrelevant | 0 | 0 | The paper investigates MHC-B haplotypes and RSV-A infection in broiler chickens, containing no pharmacokinetic data for sulbutiamine. |
| popPK | King_2022 | irrelevant | 0 | 0 | The paper discusses the electronic structure of boron clusters and has no relation to sulbutiamine pharmacokinetics. |
| popPK | Kolosov_2022 | irrelevant | 0 | 0 | The paper is a genomic study of pigs and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Li_2023 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Li_2023_2 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| popPK | Li_2024 | irrelevant | 0 | 0 | no_text gate: only 185 chars of text extracted (&lt; 400) |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The paper describes the isolation of triterpenoids from a fungus and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 179 chars of text extracted (&lt; 400) |
| popPK | Londono_2015 | irrelevant | 0 | 0 | The paper is a genetic association study of HLA alleles in spondyloarthritis and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Marks_1980 | irrelevant | 0 | 0 | The paper is an immunogenetic study of HLA antigens in geographic tongue and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Nelson_1975 | irrelevant | 0 | 0 | The paper is an epidemiological study on the viral aetiology of diabetes in twins and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Nørgaard_2024 | irrelevant | 0 | 0 | no_text gate: only 224 chars of text extracted (&lt; 400) |
| popPK | Pan_2023 | irrelevant | 0 | 0 | no_text gate: only 198 chars of text extracted (&lt; 400) |
| popPK | Renvoize_1984 | irrelevant | 0 | 0 | The paper investigates the relationship between Cytomegalovirus infection and Alzheimer's disease, containing no pharmacokinetic data for sulbutiamine. |
| popPK | Renvoize_1984_2 | irrelevant | 0 | 0 | The paper is a genetic study of Alzheimer's disease and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Rocha_2018 | irrelevant | 0 | 0 | The paper studies metal emissions from diesel-biodiesel exhaust and does not involve sulbutiamine or pharmacokinetics. |
| popPK | Schreuder_1980 | irrelevant | 0 | 0 | The paper discusses HLA-B locus specificities (immunogenetics) and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Shi_2023 | irrelevant | 0 | 0 | no_text gate: only 179 chars of text extracted (&lt; 400) |
| popPK | Wall_1989 | irrelevant | 0 | 0 | The paper is an immunology study on Neisseria meningitidis epitopes and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper investigates the anticancer mechanism of tetramethylpyrazine in leukemia cell lines and does not involve sulbutiamine or pharmacokinetic parameters. |
| popPK | Whim_1994 | irrelevant | 0 | 0 | The paper is a neurophysiology study on peptide release in Aplysia motor neurons and does not involve sulbutiamine or pharmacokinetics. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Yang_2025 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper describes the microbial fermentation and production of cercosporin, a fungal pigment, and contains no data regarding the pharmacokinetics of sulbutiamine. |
| popPK | Zimmermann_2017 | irrelevant | 0 | 0 | The paper is a neuropsychological study on executive function tests (Hayling and Trail Making) in humans and contains no pharmacokinetic data for sulbutiamine. |
| popPK | Zone_1982 | irrelevant | 0 | 0 | The paper describes penicillamine-induced pemphigus and contains no pharmacokinetic data for sulbutiamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
