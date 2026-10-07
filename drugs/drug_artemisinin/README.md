<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemisinin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemisinin_Birgersson2016_reference&quot;,&quot;label&quot;:&quot;Birgersson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Chotsiri2024_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# artemisinin

- **generic name:** artemisinin
- **ATC codes:** `P01BE01`, `P01BF07`, `P01BF08`
- **DrugBank:** [DB13132](https://go.drugbank.com/drugs/DB13132) · **PubChem:** [CID 68827](https://pubchem.ncbi.nlm.nih.gov/compound/68827)
- **molar mass:** 282.336 g/mol (C15H22O5) — DrugBank
- **groups:** investigational

## About

Artemisinin is an antimalarial drug used to treat malaria. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426921](https://www.wikidata.org/wiki/Q426921) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artemisinin | parent | 282.336 | C15H22O5 | DrugBank | [68827](https://pubchem.ncbi.nlm.nih.gov/compound/68827) | Ali_2022, Birgersson_2016, Gordi_2005 |
| artemether | metabolite | 298.379 | C16H26O5 | PubChem | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ding_2026 |
| desbutyllumefantrine | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Ding_2026 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ding_2026 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ding_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:19 | 11:08 | 3/1/2 | 4/0/0 | 0/0/0 | 521,628/37,192 | ollama / glm-5.3-flash | 13 | 3/10 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Birgersson_2016_reference](drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Birgersson S et al., Population pharmacokinetic properties o…, Malaria journal (2016) | [10.1186/s12936-016-1134-8](https://doi.org/10.1186/s12936-016-1134-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chotsiri_2024_reference](drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2024_reference](drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ali_2022_reference](drugs/drug_artemisinin/Artemisinin_Ali2022_reference.md) | — | 1-compartment (no model) | 1 | Ali AM et al., Population Pharmacokinetics of Antimala…, Antimicrobial agents and ch… (2022) | [10.1128/aac.01696-21](https://doi.org/10.1128/aac.01696-21) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Gordi_2005_reference](drugs/drug_artemisinin/Artemisinin_Gordi2005_reference.md) | — | 1-compartment (no model) | 4 | Gordi T et al., Semi-mechanistic pharmacokinetic/pharma…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02508.x](https://doi.org/10.1111/j.1365-2125.2005.02508.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ding_2026_reference](drugs/drug_artemisinin/Artemisinin_Ding2026_reference.md) | — | general linear (no model) | 26 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Deng_2025_Cell_viability_protection_against_Erastin_induced_ferroptosis](drugs/drug_artemisinin/pd_Deng_2025_Cell_viability_protection_against_Erastin_induced_.md) | Cell viability (protection against Erastin-induced ferroptosis) ← artemisinin · direct sigmoid Emax (Hill) effect | — | Deng PX et al., Artemisinin inhibits neuronal ferroptos…, Acta pharmacologica Sinica (2025) | [10.1038/s41401-024-01378-6](https://doi.org/10.1038/s41401-024-01378-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gordi_2005_parasite_count](drugs/drug_artemisinin/pd_Gordi_2005_parasite_count.md) | parasite count ← artemisinin · indirect response — drug stimulates the loss of parasite count | — | Gordi T et al., Semi-mechanistic pharmacokinetic/pharma…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02508.x](https://doi.org/10.1111/j.1365-2125.2005.02508.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lohy_2017_parasite_density](drugs/drug_artemisinin/pd_Lohy_2017_parasite_density.md) | total parasite density (asexual parasite count per microliter of blood multiplied by theoretical blood volume, log-transformed) ← dihydroartemisinin (DHA) · delayed effect through an effect compartment | — | Lohy Das J et al., Population Pharmacokinetic and Pharmaco…, The AAPS journal (2017) | [10.1208/s12248-017-0141-1](https://doi.org/10.1208/s12248-017-0141-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2026_inhibition_rate](drugs/drug_artemisinin/pd_Zhao_2026_inhibition_rate.md) | Mycelial growth inhibition rate of Sclerotinia sclerotiorum ← artemisinin · inhibition effect | — | Zhao Y et al., Antifungal Activity and Biochemical Mec…, International journal of mo… (2026) | [10.3390/ijms27083422](https://doi.org/10.3390/ijms27083422) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=artemisinin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2B6` inducer/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 3  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2005.pdf` | Gordi T et al., Semi-mechanistic pharmacokinetic/pharma…, British journal of clinical… (2005) | popPK | 9 | [10.1111/j.1365-2125.2005.02508.x](https://doi.org/10.1111/j.1365-2125.2005.02508.x) | [16305583](https://pubmed.ncbi.nlm.nih.gov/16305583) | Population PK model of artemisinin in patients with numeric parameters (V 27 L, t½ 0.7 h, extraction ratio 0.87) reported directly in the abstract. |

<sub>queue written 2026-10-07T06:10:20.556110+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2020 | irrelevant | 2 | 1 | In-vitro antiviral study with a PK prediction model but no measured disposition parameters (CL, V, ka) for artemisinin; no numeric PK parameter values present. |
| popPK | Chotsiri_2024 | irrelevant | 0 | 0 | This is a population PK study of primaquine and its metabolites; artemisinin is only mentioned as part of ACT background, with no artemisinin PK parameters. |
| popPK | Daher_2019 | irrelevant | 2 | 1 | Artemisinin derivatives are only co-administered treatments; PK parameters (AUC, half-life) are reported for chloroquine, mefloquine and lumefartrine, not artemisinin itself, and detailed values are in additional files/figures not provided. |
| popPK | Deng_2025 | irrelevant | 0 | 0 | This is a mechanistic ferroptosis/Alzheimer's study with no PK parameters (no CL, V, ka, half-life, or PK model) for artemisinin; only dosing and EC50 values are reported. |
| popPK | Ding_2024 | irrelevant | 0 | 0 | This is a population PK study of amodiaquine/desethylamodiaquine and piperaquine in pregnant women; artemisinin is only mentioned as part of "ACT" therapy and no artemisinin PK parameters are reported. |
| popPK | Dipanjan_2017 | irrelevant | 1 | 0 | A narrative review discussing resistance strategies with no quantitative PK parameters for artemisinin reported. |
| popPK | Fröhlich_2020 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis paper of artemisinin hybrids with only in vitro EC50 cytotoxicity data; no PK parameters for artemisinin are reported. |
| popPK | Herrmann_2022 | irrelevant | 0 | 0 | This is a synthesis and in vitro activity study of artemisinin-derived hybrid compounds against SARS-CoV-2 and cancer cells, with no PK disposition parameters for artemisinin. |
| popPK | Hoglund_2017 | irrelevant | 0 | 0 | This is a population PK study of piperaquine, not artemisinin; artemisinin is only mentioned as combination-therapy context, and no artemisinin parameters are reported. |
| popPK | Kavak_2022 | irrelevant | 0 | 0 | This is a chemistry/cytotoxicity/docking study of a thymol-artemisinin hybrid; no PK parameters for artemisinin are reported. |
| popPK | Kawuma_2021 | irrelevant | 2 | 0 | The population PK model and all numeric parameters (CL, V, ka) are for dolutegravir; artemisinin derivatives are only co-administered comparators with no artemisinin PK values reported. |
| popPK | Kouakou_2019 | irrelevant | 2 | 1 | Systematic review of artesunate (not artemisinin) PK; no numeric disposition parameter values present in the evidence, only correlations and qualitative statements. |
| popPK | Lohy_2017 | irrelevant | 2 | 6 | This is a population PK study of artesunate and its metabolite dihydroartemisinin, not artemisinin itself; some numeric CL/V values appear in the text but for the wrong drug. |
| popPK | Meena_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry study of new antimalarial compounds; artemisinin is not the subject drug and no PK disposition parameters are reported. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | This is an in-vitro antifungal mechanism study of artemisinin against Sclerotinia sclerotiorum with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:10 UTC</sub>
