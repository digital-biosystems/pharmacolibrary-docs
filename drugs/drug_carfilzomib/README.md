<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;carfilzomib&quot;}]"></div>

# carfilzomib

- **generic name:** carfilzomib
- **ATC codes:** `L01XG02`, `L01XX45`
- **DrugBank:** [DB08889](https://go.drugbank.com/drugs/DB08889) · **PubChem:** [CID 11556711](https://pubchem.ncbi.nlm.nih.gov/compound/11556711)
- **molar mass:** 719.9099 g/mol (C40H57N5O7) — DrugBank
- **groups:** approved, investigational

## About

Carfilzomib is a selective proteasome inhibitor used to treat multiple myeloma. It is given by intravenous injection. It is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q15366934](https://www.wikidata.org/wiki/Q15366934), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carfilzomib | parent | 719.91 | C40H57N5O7 | DrugBank | [11556711](https://pubchem.ncbi.nlm.nih.gov/compound/11556711) | Lin_2023 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Lin_2023_reference](drugs/drug_carfilzomib/Carfilzomib_Lin2023_reference.md) | — | 1-compartment (no model) | 1 | Lin LH et al., Population Pharmacokinetics and Pharmac…, Targeted oncology (2023) | [10.1007/s11523-023-00992-4](https://doi.org/10.1007/s11523-023-00992-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dao_2020_Cell_growth_inhibition](drugs/drug_carfilzomib/pd_Dao_2020_Cell_growth_inhibition.md) | Cell growth inhibition ← carfilzomib · direct sigmoid Emax (Hill) effect | — | Dao Trong P et al., Large-Scale Drug Screening in Patient-D…, Cells (2020) | [10.3390/cells9061389](https://doi.org/10.3390/cells9061389) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yago_2023_proteasome_inhibition](drugs/drug_carfilzomib/pd_Yago_2023_proteasome_inhibition.md) | proteasome inhibition ← carfilzomib · target-mediated drug disposition | — | Yago MR et al., Mechanistic Pharmacokinetic/Pharmacodyn…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01242-6](https://doi.org/10.1007/s40262-023-01242-6) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ou_2017_ORR](drugs/drug_carfilzomib/pd_Ou_2017_ORR.md) | overall response rate ← carfilzomib · categorical (graded) response model | — | Ou Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2017) | [10.1002/jcph.850](https://doi.org/10.1002/jcph.850) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:33 | 0:03 | 1/0/0 | 3/0/0 | 0/0/0 | 3,639/154 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of venetoclax, with carfilzomib acting only as a co-administered agent. |
| PGx | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes population pharmacokinetics and exposure-response relationships for venetoclax (not carfilzomib) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Brillac_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for isatuximab, not carfilzomib (carfilzomib is only mentioned as a co-administered drug in the introduction). |
| PGx | Brillac_2025 | not_relevant | 0 | 0 | The paper investigates population pharmacokinetics of isatuximab in pediatric patients and does not report any pharmacogenomic effects or gene variants influencing PK/PD. |
| popPK | Corrigan_2025 | irrelevant | 0 | 0 | The paper is an in-vitro synthetic and mechanistic study of novel proteasome inhibitors, using carfilzomib only as a structural reference, and reports no pharmacokinetic parameters for carfilzomib. |
| PGx | Corrigan_2025 | not_relevant | 0 | 0 | The paper studies the design and in vitro activity of new proteasome inhibitors and does not report pharmacogenomic effects on the PK/PD of carfilzomib. |
| popPK | Dao_2020 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity screen, not a pharmacokinetic study. |
| popPK | Han_2019 | irrelevant | 0 | 0 | The paper is an in-vitro drug screening study reporting cytotoxic EC50 values, not pharmacokinetic disposition parameters. |
| PGx | Han_2019 | not_relevant | 0 | 0 | The study is a drug repurposing screen evaluating antiproliferative activity in cell lines and does not report any pharmacogenomic effects of gene variants on carfilzomib's PK or PD parameters. |
| popPK | Kikuchi_2024 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics (apoptosis) of AZD5582 and its combination with carfilzomib, but does not report any pharmacokinetic parameters (CL, V, etc.) for carfilzomib. |
| PGx | Kikuchi_2024 | not_relevant | 0 | 0 | The paper investigates a new drug (AZD5582) and its synergy with carfilzomib, but does not report any pharmacogenomic effects (gene variants) on carfilzomib's PK or PD parameters. |
| popPK | Lin_2023 | relevant | 10 | 2 | The study is a population PK/PD model for carfilzomib in humans, but only the typical total clearance is reported in the abstract; detailed numeric parameter values are not present in the provided evidence. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | The paper reports a population PK/PD analysis but explicitly states that no statistically significant covariates were identified, meaning no pharmacogenomic effects were reported. |
| popPK | Ou_2017 | relevant | 10 | 0 | The study is a population PK analysis of carfilzomib in humans, but the specific quantitative parameter values (clearance, volume, etc.) are not provided in the extracted evidence. |
| PGx | Ou_2017 | not_relevant | 0 | 0 | The paper reports on population pharmacokinetics and exposure-response relationships but explicitly states that body surface area was the only significant covariate, with no mention of genetic variants or pharmacogenomic factors affecting PK or PD. |
| popPK | Robbertse_2024 | irrelevant | 0 | 0 | Carfilzomib is only an in-vitro comparator, and no pharmacokinetic parameters are reported. |
| popPK | Siegel_2021 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes and does not contain any pharmacokinetic parameters for carfilzomib. |
| PGx | Siegel_2021 | not_relevant | 0 | 0 | The study reports health-related quality of life (HRQoL) outcomes and does not investigate pharmacogenomic variants or their effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The study models daratumumab PK; carfilzomib is only a co-administered treatment, with no carfilzomib PK values reported. |
| popPK | Yago_2023 | relevant | 10 | 2 | The human population-PK model is relevant, but carfilzomib parameter values appear to be in supplementary material not provided here. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarfilzomib%5D&body=Drug%3A%20carfilzomib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carfilzomib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:33 UTC</sub>
