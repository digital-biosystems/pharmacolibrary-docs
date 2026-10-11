<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# molnupiravir

- **generic name:** molnupiravir
- **ATC codes:** `J05AB18`
- **DrugBank:** [DB15661](https://go.drugbank.com/drugs/DB15661) · **PubChem:** not captured
- **molar mass:** 329.309 g/mol (C13H19N3O7) — DrugBank
- **groups:** investigational

## About

Molnupiravir is an antiviral drug that was developed for the treatment of COVID-19 infection. Its marketing authorisation application in the European Union was withdrawn, and it remains investigational rather than an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q96376832](https://www.wikidata.org/wiki/Q96376832) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| molnupiravir | parent | 329.309 | C13H19N3O7 | DrugBank | — | Gouda_2022 |
| molnupiravir (MK-4482, EIDD-2801) | metabolite | 329.31 | — | the paper | — | Bihorel_2023 |
| NHC | metabolite | 259.2 | — | the paper | — | Bihorel_2023, Gouda_2022 |
| NHC (β-D-N4-hydroxycytidine) | metabolite | 259.2 | — | the paper | — | Bihorel_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:19 | 6:09 | 3/0/0 | 0/1/0 | 0/0/0 | 300,657/20,288 | ollama / glm-5.3-flash | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bihorel_2023_reference](drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 (+5 cov.) | Bihorel S et al., Population pharmacokinetics of molnupir…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gouda_2022_reference](drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Gouda AS et al., A validated LC-MS/MS method for determi…, Journal of chromatography.… (2022) | [10.1016/j.jchromb.2022.123363](https://doi.org/10.1016/j.jchromb.2022.123363) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lv_2025_reference](drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Lv D et al., Population Pharmacokinetic Modeling Ana…, Drug design, development an… (2025) | [10.2147/DDDT.S517282](https://doi.org/10.2147/DDDT.S517282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Chawla_2023_hospitalization](drugs/drug_molnupiravir/pd_Chawla_2023_hospitalization.md) | hospitalization (COVID-19 clinical outcome) ← β-D-N4-hydroxycytidine (NHC) · direct Emax (saturable) effect | — | Chawla A et al., Factors Influencing COVID-19 Risk: Insi…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2895](https://doi.org/10.1002/cpt.2895) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=molnupiravir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chawla_2023 | irrelevant | 3 | 2 | Exposure-response analysis using PK exposures but no disposition parameters (CL, V, ka, half-life) are reported; AUC50 is a pharmacodynamic parameter, not a PK parameter. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | Molnupiravir is only a comparator in an antiviral drug-discovery study; no PK parameters for molnupiravir are reported. |
| popPK | Chi_2026 | irrelevant | 1 | 0 | In-vitro antiviral efficacy study (EC50, viral titres) with no PK disposition parameters for molnupiravir. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90) with only literature-derived Cmax ratios; no PK disposition parameters for molnupiravir. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | Computational docking/virtual screening study; molnupiravir only a comparator with EC50 values, no PK disposition parameters. |
| popPK | Li_2022 | irrelevant | 1 | 1 | This is an in vitro/in vivo antiviral efficacy study; no PK disposition parameters (CL, V, ka, half-life, model) are reported, and the only PK mention (Cmax) refers to a figure not included. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of molnupiravir against influenza; no PK disposition parameters (CL, V, ka, half-life, or PK model) for molnupiravir are reported. |
| popPK | Malune_2025 | irrelevant | 0 | 0 | In silico drug-discovery study of RdRp inhibitors; molnupiravir is only mentioned as an approved comparator, with no PK parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | In-vitro antiviral drug-combination study; molnupiravir is only a co-tested antiviral, no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:14 UTC</sub>
