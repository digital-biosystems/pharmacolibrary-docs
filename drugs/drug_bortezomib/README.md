<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;bortezomib&quot;}]"></div>

# bortezomib

- **generic name:** bortezomib
- **ATC codes:** `L01XG01`, `L01XX32`
- **DrugBank:** [DB00188](https://go.drugbank.com/drugs/DB00188) · **PubChem:** [CID 387447](https://pubchem.ncbi.nlm.nih.gov/compound/387447)
- **molar mass:** 384.237 g/mol (C19H25BN4O4) — DrugBank
- **groups:** approved, investigational

## About

This proteasome inhibitor treats multiple myeloma, mantle cell lymphoma, and several other cancers. The medication is administered by injection, typically either intravenously or subcutaneously. It is widely used in the European Union, where it remains authorised for treating multiple myeloma.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419319](https://www.wikidata.org/wiki/Q419319), [Wikipedia](https://en.wikipedia.org/wiki/Bortezomib?oldid=1376159015) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Chudasama_2015_cell_proliferation_profiles](drugs/drug_bortezomib/pd_Chudasama_2015_cell_proliferation_profiles.md) | cell proliferation profiles ← bortezomib · inhibition effect | — | Chudasama VL et al., Logic-Based and Cellular Pharmacodynami…, The Journal of pharmacology… (2015) | [10.1124/jpet.115.224766](https://doi.org/10.1124/jpet.115.224766) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Janssen_2020_20S_proteasome_activity](drugs/drug_bortezomib/pd_Janssen_2020_20S_proteasome_activity.md) | 20S proteasome activity ← bortezomib · direct sigmoid Emax (Hill) effect | — | Janssen JM et al., A Semi-Mechanistic Population Pharmacok…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00803-y](https://doi.org/10.1007/s40262-019-00803-y) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ngara_2025_CFU](drugs/drug_bortezomib/pd_Ngara_2025_CFU.md) | colony-forming units ← BTZ-043 · direct Emax (saturable) effect | — | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Yago_2023_P](drugs/drug_bortezomib/pd_Yago_2023_P.md) | proteasome activity in whole blood ← bortezomib · target-mediated drug disposition | — | Yago MR et al., Mechanistic Pharmacokinetic/Pharmacodyn…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01242-6](https://doi.org/10.1007/s40262-023-01242-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:15 | 0:04 | 0/0/0 | 0/4/0 | 0/0/0 | 4,047/161 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2020.pdf` | Zhang L et al., Population-based meta-analysis of borte…, Journal of pharmacokinetics… (2020) | popPK | 5 | [10.1007/s10928-019-09670-3](https://doi.org/10.1007/s10928-019-09670-3) | [31939004](https://pubmed.ncbi.nlm.nih.gov/31939004) | The paper focuses on pharmacodynamic modeling and mentions PK profiles, but no quantitative pharmacokinetic parameter values (CL, V, etc.) are provided in the evidence text. |

<sub>queue written 2026-11-23 19:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chudasama_2015 | irrelevant | 0 | 0 | The paper focuses on in vitro pharmacodynamic modeling (IC50, signal transduction) and does not report pharmacokinetic disposition parameters. |
| PGx | Chudasama_2015 | not_relevant | 0 | 0 | The paper describes a cellular pharmacodynamic model in a single cell line (U266) and does not investigate the impact of specific gene variants or genotypes on bortezomib parameters. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | This is a human quality-of-life analysis and reports no bortezomib pharmacokinetic parameters. |
| popPK | Janssen_2020 | relevant | 10 | 1 | A pediatric bortezomib population PK model is reported, but numeric disposition parameter values are absent. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | The study reports quantitative population pharmacokinetics for BTZ-043, not bortezomib. |
| popPK | Luo_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of daratumumab, with bortezomib serving only as a concomitant therapy in the regimen. |
| PGx | Luo_2022 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab in a combination regimen with bortezomib, but does not report pharmacogenomic effects on bortezomib's pharmacokinetics or pharmacodynamics. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043 and its interactions with other tuberculosis drugs in mice, not the drug bortezomib. |
| PGx | Ngara_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic and pharmacodynamic effects of the drug BTZ-043 on companion drugs in murine models and does not report any gene variants, genotypes, or phenotypes affecting PK/PD. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The population-PK model and reported values are for belantamab mafodotin and its payload, with bortezomib only co-administered. |
| popPK | Papathanasiou_2026 | irrelevant | 0 | 0 | The analysis reports belantamab mafodotin exposure-response, not bortezomib disposition parameters. |
| popPK | Parasrampuria_2020 | irrelevant | 1 | 0 | This is an exposure-response (efficacy) analysis that reports cumulative doses and hazard ratios, but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) or a compartmental PK model for bortezomib. |
| PGx | Parasrampuria_2020 | not_relevant | 0 | 0 | The paper describes an exposure-response analysis comparing dosing regimens but does not investigate the impact of any specific genetic variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Passey_2017 | irrelevant | 0 | 0 | The study focuses on the immunogenicity and pharmacokinetics of elotuzumab, with bortezomib only used as a co-administered comparator drug in the treatment regimens. |
| PGx | Passey_2017 | not_relevant | 0 | 0 | The paper focuses on the immunogenicity of elotuzumab (an anti-SLAMF7 antibody) and its effects on elotuzumab PK, not on the pharmacogenomics of bortezomib. |
| popPK | Passey_2018 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of elotuzumab, not bortezomib, and contains no quantitative pharmacokinetic parameters for bortezomib. |
| PGx | Passey_2018 | not_relevant | 0 | 0 | The paper discusses the pharmacology of elotuzumab and reports no pharmacogenomic effects on the PK/PD parameters of bortezomib. |
| popPK | Tan_2019 | irrelevant | 0 | 0 | The paper is a review of clinical pharmacokinetics that lacks specific numeric quantitative disposition parameters (CL, V, ka, etc.) in the provided evidence. |
| PGx | Tan_2019 | not_relevant | 0 | 0 | The text discusses clinical pharmacokinetics and hepatic function but does not report any pharmacogenomic effects (gene variants or genotypes) on bortezomib's PK or PD parameters. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The PK model and numeric disposition values are for daratumumab; bortezomib is only a combination partner. |
| popPK | Yago_2023 | irrelevant | 2 | 1 | Bortezomib is a comparator, and its PK parameters are referenced from published sources but not provided as readable numeric values here. |
| popPK | Zhang_2020 | irrelevant | 5 | 0 | The paper focuses on pharmacodynamic modeling and mentions PK profiles, but no quantitative pharmacokinetic parameter values (CL, V, etc.) are provided in the evidence text. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The study focuses on population-based pharmacodynamic modeling of bortezomib exposure and toxicity but does not report any association with gene variants, genotypes, or pharmacogenomic phenotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbortezomib%5D&body=Drug%3A%20bortezomib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bortezomib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
