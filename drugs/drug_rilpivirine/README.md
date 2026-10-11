<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;rilpivirine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rilpivirine_Aouri2017_reference&quot;,&quot;label&quot;:&quot;Aouri_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rilpivirine/Rilpivirine_Aouri2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rilpivirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rilpivirine/Rilpivirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rilpivirine

- **generic name:** rilpivirine
- **ATC codes:** `J05AG05`, `J05AR08`, `J05AR19`, `J05AR21`
- **DrugBank:** [DB08864](https://go.drugbank.com/drugs/DB08864) · **PubChem:** [CID 6451164](https://pubchem.ncbi.nlm.nih.gov/compound/6451164)
- **molar mass:** 366.4185 g/mol (C22H18N6) — DrugBank
- **groups:** approved, investigational

## About

It is authorised in the European Union for HIV and is used both alone and in combination antiviral products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421547](https://www.wikidata.org/wiki/Q421547) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rilpivirine | parent | 366.418 | C22H18N6 | DrugBank | [6451164](https://pubchem.ncbi.nlm.nih.gov/compound/6451164) | Aouri_2017, Thoueille_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:00 | 8:05 | 2/0/0 | 1/0/0 | 0/0/0 | 468,675/28,295 | ollama / glm-5.3-flash | 10 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aouri_2017_reference](drugs/drug_rilpivirine/Rilpivirine_Aouri2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Aouri M et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2017) | [10.1128/AAC.00899-16](https://doi.org/10.1128/AAC.00899-16) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thoueille_2024_reference](drugs/drug_rilpivirine/Rilpivirine_Thoueille2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Thoueille P et al., Population pharmacokinetics of rilpivir…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1437400](https://doi.org/10.3389/fphar.2024.1437400) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Néant_2019_VL](drugs/drug_rilpivirine/pd_N_ant_2019_VL.md) | HIV-1 viral load ← rilpivirine · direct Emax (saturable) effect | — | Néant N et al., Concentration-response model of rilpivi…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz141](https://doi.org/10.1093/jac/dkz141) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rilpivirine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NR1I2 (target), SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aouri_2017.pdf` | Aouri M et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.00899-16](https://doi.org/10.1128/AAC.00899-16) | [27799217](https://pubmed.ncbi.nlm.nih.gov/27799217) | Population PK model of rilpivirine with CL 11.7 L/h, V 401 L, and MAT 4 h reported directly in the abstract. |
| `Kably_2025.pdf` | Kably B et al., Minimal impact of pregnancy on rilpivir…, International journal of in… (2025) | popPK | 8 | [10.1016/j.ijid.2025.108145](https://doi.org/10.1016/j.ijid.2025.108145) | [41110592](https://pubmed.ncbi.nlm.nih.gov/41110592) | Population PK of rilpivirine in pregnant women, but detailed parameter values (CL, V) likely in tables/supplement not provided; only C24h medians appear. |

<sub>queue written 2026-10-07T16:53:24.122445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benaboud_2023 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Di_2026 | irrelevant | 2 | 2 | This is a narrative review of BIC/FTC/TAF; rilpivirine appears only as a comparator in a summary table (Vd, half-life) without a PK model or dedicated rilpivirine disposition analysis. |
| popPK | Fernández-González_2025 | irrelevant | 3 | 2 | Observational trough-concentration study of LA cabotegravir+rilpivirine in humans; no population-PK model or disposition parameters (CL/V/ka/half-life) reported, and detailed values largely in supplementary figures/tables not provided. |
| popPK | Ford_2025 | relevant | 7 | 4 | Human population PK study of rilpivirine LA (PPK modeling and simulations), but detailed numeric RPV parameter values (Table 2, Figures 3–6, PPK model details) are in tables/figures/supplementary material not fully provided; only benchmark concentrations (17.3 ng/mL) and half-life (~200 days) appear in text. |
| popPK | Fromage_2024 | irrelevant | 4 | 2 | Simulation study using existing population PK models for rilpivirine, but no CL/V/ka or other disposition parameter values are reported in the evidence (only simulated concentrations). |
| popPK | Han_2024 | irrelevant | 2 | 2 | This is a population PK study of cabotegravir; rilpivirine is only mentioned as a co-administered comparator drug, with no rilpivirine PK parameters reported. |
| popPK | Han_2025 | irrelevant | 1 | 1 | This is a cabotegravir population PK study; rilpivirine is only mentioned as co-administered drug, with no rilpivirine PK parameters reported. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | Medicinal chemistry study of new NNRTI analogs; rilpivirine is only a comparator, no PK parameters reported. |
| popPK | Kably_2025 | relevant | 8 | 4 | Population PK of rilpivirine in pregnant women, but detailed parameter values (CL, V) likely in tables/supplement not provided; only C24h medians appear. |
| popPK | Letendre_2020 | irrelevant | 3 | 5 | Reports CSF/plasma concentration ratios for rilpivirine but no disposition parameters (CL, V, Q, ka, or population-PK model); the absorption half-life values cited are from prior studies, not modeled here. |
| popPK | Li_2022 | irrelevant | 2 | 2 | This is a narrative review of RT inhibitors; rilpivirine PK values (e.g., t1/2 34–55 h) are cited from other sources without a PK model or full disposition parameters. |
| popPK | Mehta_2023 | irrelevant | 3 | 2 | Reports only trough concentrations (C0) and exposure-response summaries; no CL/V/ka or population-PK parameter values are given, and numeric values appear only in referenced figures/tables not provided. |
| popPK | Mora-Peris_2014 | irrelevant | 3 | 5 | Reports only concentration measurements (troughs, CSF/seminal plasma levels and ratios), not disposition parameters (CL, V, half-life) or a PK model for rilpivirine. |
| popPK | Néant_2019 | irrelevant | 2 | 1 | This is a pharmacodynamic (EC50/viral dynamics) study; PK parameters were taken from a previous model and no numeric disposition values (CL, V, ka) appear in the evidence. |
| popPK | Padilla_2026 | irrelevant | 3 | 2 | Reports only plasma concentrations (troughs) compared between injection techniques, with no CL, V, ka, half-life, or PK model parameters for rilpivirine. |
| popPK | Prener_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on novel NNRTI analogues; rilpivirine is only a comparator, with no PK disposition parameters reported (only in-vitro microsomal CLint, referenced to a table). |
| popPK | Sang_2023 | irrelevant | 0 | 0 | Rilpivirine is only a comparator in a medicinal chemistry study of new DAPY derivatives; no PK parameters for rilpivirine itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:53 UTC</sub>
