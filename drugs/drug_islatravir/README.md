<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Islatravir&quot;}]"></div>

# Islatravir

- **generic name:** Islatravir
- **ATC codes:** not captured
- **DrugBank:** [DB15653](https://go.drugbank.com/drugs/DB15653) · **PubChem:** not captured
- **molar mass:** 293.258 g/mol (C12H12FN5O3) — DrugBank
- **groups:** investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| islatravir | parent | 293.258 | C12H12FN5O3 | DrugBank | — | Kinsale_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:14 | 8:30 | 0/0/1 | 0/0/0 | 0/0/0 | 443,922/22,589 | einfracz / qwen3.8-27b | 13 | 1/11 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kinsale_2024_reference](drugs/drug_islatravir/Islatravir_Kinsale2024_reference.md) | — | 1-compartment (no model) | 3 | Kinsale TS et al., Pharmacokinetic Modeling to Guide Precl…, Pharmaceutics (2024) | [10.3390/pharmaceutics16020201](https://doi.org/10.3390/pharmaceutics16020201) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 34 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2018.pdf` | Barrett SE et al., Extended-Duration MK-8591-Eluting Impla…, Antimicrobial agents and ch… (2018) | pd | 5 | [10.1128/AAC.01058-18](https://doi.org/10.1128/AAC.01058-18) | [30012772](https://www.ncbi.nlm.nih.gov/pubmed/30012772) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Lai_2022.pdf` | Lai MT et al., Doravirine and Islatravir Have Compleme…, Antimicrobial agents and ch… (2022) | pd | 4 | [10.1128/aac.02223-21](https://doi.org/10.1128/aac.02223-21) | [35491829](https://www.ncbi.nlm.nih.gov/pubmed/35491829) | metadata signals extractable PD data (IC50) |
| `Takamatsu_2015.pdf` | Takamatsu Y et al., 4'-modified nucleoside analogs: potent…, Hepatology (Baltimore, Md.) (2015) | pd | 4 | [10.1002/hep.27962](https://doi.org/10.1002/hep.27962) | [26122273](https://www.ncbi.nlm.nih.gov/pubmed/26122273) | metadata signals extractable PD data (IC50) |
| `Wu_2017.pdf` | Wu VH et al., MK-8591 (4'-Ethynyl-2-Fluoro-2'-Deoxyad…, Antimicrobial agents and ch… (2017) | pd | 4 | [10.1128/AAC.00744-17](https://doi.org/10.1128/AAC.00744-17) | [28559249](https://www.ncbi.nlm.nih.gov/pubmed/28559249) | metadata signals extractable PD data (EC50) |
| `Zhang_2014.pdf` | Zhang W et al., In vitro transport characteristics of E…, European journal of pharmac… (2014) | pgx | 8 | [10.1016/j.ejphar.2014.03.022](https://doi.org/10.1016/j.ejphar.2014.03.022) | [24690257](https://www.ncbi.nlm.nih.gov/pubmed/24690257) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-09T10:10:44.903406+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bleasby_2021 | not_relevant | 0 | 0 | The paper focuses on the potential for islatravir to cause drug-drug interactions via standard metabolic enzymes and transporters (e.g., CYPs, P-gp), but does not investigate or report on how specific human genetic variants or genotypes affect its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Demidont_2026 | irrelevant | 0 | 0 | This is a review on HIV prevention implementation and the PrEP cascade, not a pharmacokinetic study, and it does not report any quantitative PK parameters for islatravir. |
| PGx | Gillespie_2024 | not_relevant | 0 | 0 | The text is a general review of Islatravir's development and does not contain any information on pharmacogenomic effects. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper is a review of AI in dosing timing and does not contain any pharmacokinetic data for islatravir. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of lenacapavir, not islatravir. |
| popPK | Li_2022 | irrelevant | 1 | 0 | The paper is a review of HIV RT inhibitors that mentions islatravir only briefly in the context of novel regimens without providing specific quantitative PK parameters (CL, V, etc.) for islatravir itself. |
| popPK | Markowitz_2018 | irrelevant | 2 | 0 | The paper is a review of the mechanism of action and antiviral activity of islatravir (EFdA) and does not provide a compartmental population-pharmacokinetic model or quantitative disposition parameters (CL, V, Q) for the parent drug, mentioning only intracellular half-life of the metabolite. |
| popPK | Matthews_2021 | irrelevant | 2 | 1 | The study is a drug-drug interaction assessment reporting geometric mean ratios and exposure metrics (AUC, Cmax) rather than quantitative disposition parameters (CL, V) or a population-PK model for islatravir. |
| popPK | Michailidis_2009 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of EFdA as a reverse transcriptase inhibitor, not on the population pharmacokinetic parameters (CL, V, etc.) of islatravir. |
| PGx | Nakata_2007 | not_relevant | 0 | 0 | The paper describes the intracellular metabolism and antiviral activity of EFdA in cell lines, reporting no pharmacogenomic effects (gene variants) on PK/PD parameters for islatravir. |
| popPK | Oliveira_2026 | relevant | 7 | 4 | The study is a population PK study of islatravir in rabbits with a two-compartment model, but the specific numeric disposition parameters (CL, V) are likely in supplementary tables or figures not fully detailed in the text, though AUC and absorption rates are present. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and does not report pharmacokinetic parameters for islatravir. |
| popPK | Parang_2020 | irrelevant | 0 | 0 | The paper reports antiviral activity (EC50/TC50) of remdesivir and other NRTIs, but islatravir is not mentioned and no pharmacokinetic data are provided. |
| popPK | Tompkins_2025 | irrelevant | 0 | 0 | The paper describes a data standard and database repository infrastructure, not an original study reporting specific quantitative PK parameters for islatravir. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of NNRTI design strategies and does not mention or report pharmacokinetic data for islatravir. |
| PGx | VanderVeen_2026 | not_relevant | 0 | 0 | The paper analyzes viral resistance and HIV-1 genotypes in response to treatment, not human host pharmacogenomic variants affecting islatravir PK/PD. |
| popPK | Wensing_2026 | irrelevant | 0 | 0 | The paper is a review of islatravir's drug resistance mechanisms and clinical trial outcomes regarding viral load and resistance mutations, containing no pharmacokinetic disposition parameters (CL, V, etc.) or PK model data. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50 values) for islatravir against HIV-2, but contains no pharmacokinetic or population-PK parameters. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study focuses on the preformulation and physicochemical characterization (solubility, stability, permeability) of EFdA (islatravir), not pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Zhang_2014_2 | not_relevant | 0 | 0 | The paper investigates the in vitro transport of EFdA (efavirenz), not islatravir, and does not report pharmacogenomic effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 10:10 UTC</sub>
