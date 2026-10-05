<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;Apadamtase alfa&quot;}]"></div>

# Apadamtase alfa

- **generic name:** Apadamtase alfa
- **ATC codes:** `B01AD13`
- **DrugBank:** [DB15164](https://go.drugbank.com/drugs/DB15164) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Apadamtase alfa (recombinant ADAMTS13) is an enzyme used to treat thrombotic thrombocytopenic purpura. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:42 | 1:17 | 0/3/0 | 1/0/0 | 0/0/0 | 45,182/1,433 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [McBride_2025_reference](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference.md) | — | 1-compartment (no model) | 0 | McBride C et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70063](https://doi.org/10.1002/psp4.70063) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Patel_2025_estimate](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_estimate.md) | — | 2-compartment (no model) | 4 | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Patel_2025_shrinkage](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_shrinkage.md) | — | 1-compartment (no model) | 0 | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Patel_2025_LDH](drugs/drug_apadamtase_alfa/pd_Patel_2025_LDH.md) | elevated LDH ← ADAMTS13 · direct sigmoid Emax (Hill) effect | — | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Patel_2025_LDH_2](drugs/drug_apadamtase_alfa/pd_Patel_2025_LDH_2.md) | elevated LDH ← ADAMTS13 · direct sigmoid Emax (Hill) effect | — | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Patel_2025_TTP](drugs/drug_apadamtase_alfa/pd_Patel_2025_TTP.md) | thrombocytopenia ← ADAMTS13 · direct sigmoid Emax (Hill) effect | — | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Patel_2025_TTP_2](drugs/drug_apadamtase_alfa/pd_Patel_2025_TTP_2.md) | thrombocytopenia ← ADAMTS13 · direct sigmoid Emax (Hill) effect | — | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apadamtase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: VWF (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bendapudi_2024 | irrelevant | 0 | 0 | The paper describes a clinical case report of rADAMTS13 (not apadamtase_alfa) and does not report any pharmacokinetic parameters. |
| popPK | DeYoung_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of ADAMTS13 regulation and does not report quantitative population pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hafez_2022 | irrelevant | 0 | 0 | The paper is a clinical observational study on ADAMTS13 activity in COVID-19 patients and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hrdinová_2018 | irrelevant | 0 | 0 | The paper is a review of the immunopathogenesis of TTP focusing on ADAMTS13, not a pharmacokinetic study of apadamtase_alfa. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates recombinant ADAMTS-1, not apadamtase_alfa, and while it includes a PK profile for ADAMTS-1 in mice, it is for the wrong drug. |
| popPK | Kwak_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MDTCS and MDTCS-Fc (ADAMTS13 fragments), not apadamtase_alfa. |
| PGx | Liu-Chen_2018 | not_relevant | 0 | 0 | The paper describes a preclinical mRNA therapy study in mice and does not report pharmacogenomic effects on the PK/PD of apadamtase_alfa. |
| popPK | Matsumoto_2021 | irrelevant | 0 | 0 | The paper is a review of TTP pathogenesis and treatments, does not focus on apadamtase_alfa, and contains no pharmacokinetic parameters. |
| popPK | Moore_2023 | irrelevant | 0 | 0 | The paper discusses ADAMTS13 antibody assays for TTP diagnosis and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Patel_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rADAMTS13 (recombinant ADAMTS13), not apadamtase_alfa. |
| popPK | Pruss_2011 | irrelevant | 0 | 0 | The study focuses on von Willebrand factor (VWF) mutations and does not involve the drug apadamtase_alfa. |
| popPK | Rayes_2007 | irrelevant | 0 | 0 | The paper investigates the proteolysis of von Willebrand factor by ADAMTS-13 and does not involve the drug apadamtase_alfa or report any pharmacokinetic parameters. |
| popPK | Rossato_2023 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic and behavioral outcomes in a mouse model, and no quantitative pharmacokinetic parameter values (CL, V, etc.) are present in the provided evidence. |
| PD | Rossato_2023 | not_relevant | 4 | 2 | The paper describes a dose-dependent pharmacodynamic effect (reduction in VWF activity) in a mouse model, but the provided text lacks specific numeric concentration-effect parameters (e.g., EC50, Emax) or detailed PK/PD modeling data required for extraction. |
| popPK | Verbij_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ADAMTS13 (not apadamtase_alfa) clearance by macrophages and does not report population pharmacokinetic parameters. |
| popPK | Weise_2025 | irrelevant | 2 | 3 | The paper is a case report on recombinant ADAMTS13 (not apadamtase_alfa) and only provides apparent half-life values without a full compartmental PK model or clearance/volume parameters for the target drug. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper studies the mechanism of VWF and ADAMTS-13 in traumatic brain injury and does not report pharmacokinetic parameters for apadamtase_alfa. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 13:41 UTC</sub>
