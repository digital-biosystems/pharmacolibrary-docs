<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;neratinib&quot;}]"></div>

# neratinib

- **generic name:** neratinib
- **ATC codes:** `L01EH02`
- **DrugBank:** [DB11828](https://go.drugbank.com/drugs/DB11828) · **PubChem:** [CID 9915743](https://pubchem.ncbi.nlm.nih.gov/compound/9915743)
- **molar mass:** 557.05 g/mol (C30H29ClN6O3) — DrugBank
- **groups:** approved, investigational

## About

Neratinib is a HER2-blocking kinase inhibitor used to treat breast cancer. It is an approved medicine, with one product authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6995920](https://www.wikidata.org/wiki/Q6995920) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| neratinib | parent | 557.05 | C30H29ClN6O3 | DrugBank | [9915743](https://pubchem.ncbi.nlm.nih.gov/compound/9915743) | Qi_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:12 | 5:46 | 0/0/1 | 2/0/0 | 0/0/0 | 160,013/20,677 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Qi_2023_reference](drugs/drug_neratinib/Neratinib_Qi2023_reference.md) | — | parent + metabolite (no model) | 1 | Qi T et al., Dissecting sources of variability in pa…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106467](https://doi.org/10.1016/j.ejps.2023.106467) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition.md) | cell-growth inhibition ← Neratinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_2](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_2.md) | cell-growth inhibition ← Neratinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_3](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_3.md) | cell-growth inhibition ← [11]Cl2 (Neratinib prodrug) · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_4](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_4.md) | cell-growth inhibition ← [11]Cl2 (Neratinib prodrug) · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoites](drugs/drug_neratinib/pd_Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoi.md) | percentage inhibition of E. histolytica trophozoites ← neratinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=neratinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor), ERBB2 (inhibitor), KDR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Husiev_2025 | irrelevant | 0 | 0 | Neratinib is a photocaged drug in a chemical and in-vitro study, with no quantitative disposition parameters reported. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | The study reports in-vitro anti-amoebic EC50 values, not neratinib pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:06 UTC</sub>
