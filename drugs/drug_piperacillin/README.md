<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;piperacillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperacillin_Dohmann2025_reference&quot;,&quot;label&quot;:&quot;Dohmann_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Dohmann2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperacillin_Sulaiman2026_reference&quot;,&quot;label&quot;:&quot;Sulaiman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# piperacillin

- **generic name:** piperacillin
- **ATC codes:** `J01CA12`
- **DrugBank:** [DB00319](https://go.drugbank.com/drugs/DB00319) · **PubChem:** [CID 43672](https://pubchem.ncbi.nlm.nih.gov/compound/43672)
- **molar mass:** 517.555 g/mol (C23H27N5O7S) — DrugBank
- **groups:** approved, investigational

## About

Piperacillin is an extended-spectrum penicillin antibiotic used to treat bacterial infections such as sepsis, urinary tract, skin, and respiratory infections, including Pseudomonas and E. coli infections. It is an approved medicine, typically given by infusion, and is often combined with tazobactam in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423787](https://www.wikidata.org/wiki/Q423787) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piperacillin | parent | 517.555 | C23H27N5O7S | DrugBank | [43672](https://pubchem.ncbi.nlm.nih.gov/compound/43672) | Dohmann_2025, Jeon_2014, Sulaiman_2026, Zurawska_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:21 | 7:00 | 2/1/2 | 2/0/2 | 0/0/0 | 388,253/17,406 | einfracz / qwen3.8-27b | 10 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dohmann_2025_reference](drugs/drug_piperacillin/Piperacillin_Dohmann2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Dohmann E et al., Probability of pharmacokinetic/pharmaco…, British journal of clinical… (2025) | [10.1002/bcp.70153](https://doi.org/10.1002/bcp.70153) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sulaiman_2026_reference](drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Sulaiman H et al., A multicentre evaluation of pharmacokin…, The Journal of antimicrobia… (2026) | [10.1093/jac/dkag199](https://doi.org/10.1093/jac/dkag199) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Jeon_2014_reference](drugs/drug_piperacillin/Piperacillin_Jeon2014_reference.md) | — | 1-compartment (no model) | 2 | Jeon S et al., Population pharmacokinetic analysis of…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02089-13](https://doi.org/10.1128/AAC.02089-13) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Zurawska_2026_reference](drugs/drug_piperacillin/Piperacillin_Zurawska2026_reference.md) | — | 1-compartment (no model) | 4 | Zurawska M et al., Pharmacokinetic-pharmacodynamic target…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01760-25](https://doi.org/10.1128/aac.01760-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Laporte-Amargos_2026_reference](drugs/drug_piperacillin/Piperacillin_LaporteAmargos2026_reference.md) | — | 1-compartment (no model) | 0 | Laporte-Amargos J et al., Population pharmacokinetics and optimiz…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01253-25](https://doi.org/10.1128/aac.01253-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nolting_1996_the_number_of_bacteria](drugs/drug_piperacillin/pd_Nolting_1996_the_number_of_bacteria.md) | the number of bacteria ← piperacillin · disease-progression model | — | Nolting A et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (1996) | [10.1023/a:1016085402278](https://doi.org/10.1023/a:1016085402278) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Patel_2022_all_cause_mortality](drugs/drug_piperacillin/pd_Patel_2022_all_cause_mortality.md) | all-cause mortality ← piperacillin · model not identified | — | Patel M et al., Population pharmacokinetic/pharmacodyna…, Clinical and translational… (2022) | [10.1111/cts.13158](https://doi.org/10.1111/cts.13158) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Patel_2022_clinical_response](drugs/drug_piperacillin/pd_Patel_2022_clinical_response.md) | clinical response ← piperacillin · model not identified | — | Patel M et al., Population pharmacokinetic/pharmacodyna…, Clinical and translational… (2022) | [10.1111/cts.13158](https://doi.org/10.1111/cts.13158) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abodakpi_2019_growth_suppression](drugs/drug_piperacillin/pd_Abodakpi_2019_growth_suppression.md) | growth suppression biomarker turnover ← tazobactam | — | Abodakpi H et al., Optimal Piperacillin-Tazobactam Dosing…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01906-18](https://doi.org/10.1128/AAC.01906-18) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [de_2011_N](drugs/drug_piperacillin/pd_de_2011_N.md) | number of bacteria ← piperacillin · direct Emax (saturable) effect | model (no simulator) | de Araujo BV et al., PK-PD modeling of β-lactam antibiotics:…, The Journal of antibiotics (2011) | [10.1038/ja.2011.29](https://doi.org/10.1038/ja.2011.29) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=piperacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 256 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jeon_2014.pdf` | Jeon S et al., Population pharmacokinetic analysis of…, Antimicrobial agents and ch… (2014) | popPK | 10 | [10.1128/AAC.02089-13](https://doi.org/10.1128/AAC.02089-13) | [24752260](https://pubmed.ncbi.nlm.nih.gov/24752260) | The paper reports a population pharmacokinetic model for piperacillin in humans with explicit numeric values for clearance, volume, and intercompartmental clearance in the abstract. |
| `Sun_2025.pdf` | Sun J et al., Population Pharmacokinetics and Dosing…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70089](https://doi.org/10.1002/jcph.70089) | [40765209](https://pubmed.ncbi.nlm.nih.gov/40765209) | The study reports the structure of a population PK model and PTA values but the specific numeric parameter estimates (CL, V, etc.) for piperacillin are not explicitly listed in the provided evidence. |
| `Hemmersbach-Miller_2023.pdf` | Hemmersbach-Miller M et al., Population Pharmacokinetics of Piperaci…, Clinical pharmacokinetics (2023) | popPK | 8 | [10.1007/s40262-022-01198-z](https://doi.org/10.1007/s40262-022-01198-z) | [36633812](https://pubmed.ncbi.nlm.nih.gov/36633812) | The paper describes a population PK model for piperacillin but the specific numeric parameter values (CL, V, etc.) are not present in the provided text abstract, likely residing in tables or supplementary material. |
| `Lode_1984.pdf` | Lode H et al., Comparative pharmacokinetics of apalcil…, Antimicrobial agents and ch… (1984) | popPK | 8 | [10.1128/AAC.25.1.105](https://doi.org/10.1128/AAC.25.1.105) | [6703672](https://pubmed.ncbi.nlm.nih.gov/6703672) | The study reports piperacillin PK parameters calculated via a two-compartment model, but the evidence text contains only qualitative comparisons (e.g., "substantially greater") without any specific numeric values. |

<sub>queue written 2026-10-07T10:15:38.253112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abodakpi_2019 | irrelevant | 2 | 0 | The study focuses on PK/PD efficacy modeling and MICs in an in vitro hollow-fiber system, not on extracting disposition parameters (CL, V, etc.) for the drug. |
| popPK | El-Haffaf_2021 | irrelevant | 2 | 0 | The paper is a review that summarizes findings from other studies and provides only a summary of the range of parameters rather than original quantitative data from a specific population pharmacokinetic analysis. |
| popPK | Gatti_2025 | irrelevant | 1 | 0 | The study validates a predictive risk score for PK/PD target non-attainment using observed trough concentrations, but does not report any population pharmacokinetic parameters (CL, V, Q, etc.) for piperacillin. |
| popPK | Goutelle_2023 | irrelevant | 2 | 0 | The paper is a PK/PD simulation study using a published model (Li et al.) and does not report original quantitative PK parameter values (CL, V, Q) for piperacillin in the text provided. |
| popPK | Hemmersbach-Miller_2023 | relevant | 8 | 0 | The paper describes a population PK model for piperacillin but the specific numeric parameter values (CL, V, etc.) are not present in the provided text abstract, likely residing in tables or supplementary material. |
| popPK | Liu_2024 | irrelevant | 2 | 0 | This is a narrative literature review that summarizes the frequency of PPK studies but does not report original quantitative PK parameter values (e.g., CL, V) for piperacillin. |
| popPK | Lode_1984 | relevant | 8 | 0 | The study reports piperacillin PK parameters calculated via a two-compartment model, but the evidence text contains only qualitative comparisons (e.g., "substantially greater") without any specific numeric values. |
| popPK | Lodise_2006 | irrelevant | 2 | 0 | This is a review article discussing PD concepts and modeling applications generally without reporting original quantitative PK parameter values for piperacillin in the provided text. |
| popPK | Nolting_1996 | irrelevant | 2 | 0 | The study is an in vitro pharmacodynamic model of bacterial kill, not a pharmacokinetic disposition study of the drug itself. |
| popPK | Patel_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for imipenem and relebactam, with piperacillin only mentioned as a comparator drug in the clinical trial context. |
| popPK | Roberts_2025 | relevant | 9 | 2 | The paper is a population PK study of piperacillin, but the specific numeric parameter estimates (CL, V, Q) are located in the electronic supplementary tables and figures, which are not included in the provided evidence. |
| popPK | Sun_2025 | relevant | 10 | 2 | The study reports the structure of a population PK model and PTA values but the specific numeric parameter estimates (CL, V, etc.) for piperacillin are not explicitly listed in the provided evidence. |
| popPK | Valero_2019 | irrelevant | 2 | 1 | The paper is a surveillance study of Pseudomonas aeruginosa susceptibility and uses Monte Carlo simulations for PK/PD, but it does not report primary pharmacokinetic parameter estimates (CL, V, ka) for piperacillin as a subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:16 UTC</sub>
