<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;raltegravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltegravir_Gurjar2023_reference&quot;,&quot;label&quot;:&quot;Gurjar_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# raltegravir

- **generic name:** raltegravir
- **ATC codes:** `J05AJ01`, `J05AR16`
- **DrugBank:** [DB06817](https://go.drugbank.com/drugs/DB06817) · **PubChem:** [CID 54671008](https://pubchem.ncbi.nlm.nih.gov/compound/54671008)
- **molar mass:** 444.4163 g/mol (C20H21FN6O5) — DrugBank
- **groups:** approved, investigational

## About

Raltegravir is an antiviral drug used to treat HIV infection and HIV/AIDS. It is an authorised medicine in the European Union and is included on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421552](https://www.wikidata.org/wiki/Q421552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| raltegravir | parent | 444.416 | C20H21FN6O5 | DrugBank | [54671008](https://pubchem.ncbi.nlm.nih.gov/compound/54671008) | Bukkems_2021, Gurjar_2023, Lommerse_2019, Rizk_2015 |

## Start here

> **Gurjar_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> HIV-infected adults, n = 349. [Run it in the simulator](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md?tab=Simulation) · [record](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 9.44 | L/h | 9.44 L/h | mothers and neonates with in utero raltegravir exposure |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Lommerse_2019_reference](drugs/drug_raltegravir/Raltegravir_Lommerse2019_reference.md) |
| CL | CL/F | 55.8 | L/h | 55.8 L/h | HIV-infected adults | 349 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gurjar_2023_reference](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md) |
| V | V1/F | 194 | L | 194 L | HIV-infected adults | 349 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gurjar_2023_reference](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md) |
| ka | kabs | 0.43 | 1/h | 0.43 1/h | mothers and neonates with in utero raltegravir exposure |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Lommerse_2019_reference](drugs/drug_raltegravir/Raltegravir_Lommerse2019_reference.md) |
| ka | kabs | 1.12 | 1/h | 1.12 h−1 | HIV-infected adults | 349 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gurjar_2023_reference](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md) |
| F | Fab | 0.517 |  | 0.517 | mothers and neonates with in utero raltegravir exposure |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Lommerse_2019_reference](drugs/drug_raltegravir/Raltegravir_Lommerse2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Lommerse_2019 · CL</text><circle cx="360.6" cy="30.0" r="4" fill="#ef6c00"><title>Lommerse_2019 · CL: 9.44 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Gurjar_2023 · CL/F</text><circle cx="495.7" cy="46.0" r="4" fill="#ef6c00"><title>Gurjar_2023 · CL/F: 55.8 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_t_half_terminal</sub> | [Gurjar_2023_reference](drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Gurjar R et al., Influence of UGT1A1 and SLC22A6 polymor…, The pharmacogenomics journal (2023) | [10.1038/s41397-022-00293-5](https://doi.org/10.1038/s41397-022-00293-5) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub> | [Lommerse_2019_reference](drugs/drug_raltegravir/Raltegravir_Lommerse2019_reference.md) | held back | 1-compartment, oral | 6 | Lommerse J et al., Maternal-Neonatal Raltegravir Populatio…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12443](https://doi.org/10.1002/psp4.12443) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Bukkems_2021_reference](drugs/drug_raltegravir/Raltegravir_Bukkems2021_reference.md) | — | 2-compartment (no model) | 7 (+3 cov.) | Bukkems VE et al., A population pharmacokinetics analysis…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12586](https://doi.org/10.1002/psp4.12586) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Rizk_2015_reference](drugs/drug_raltegravir/Raltegravir_Rizk2015_reference.md) | — | 1-compartment (no model) | 2 | Rizk ML et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2015) | [10.1002/jcph.493](https://doi.org/10.1002/jcph.493) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2011_EC50](drugs/drug_raltegravir/pd_Smith_2011_EC50.md) | raltegravir susceptibility of HIV-2 (EC50 in single-cycle assay) ← raltegravir · direct sigmoid Emax (Hill) effect | — | Smith RA et al., Phenotypic susceptibility of HIV-2 to r…, AIDS (London, England) (2011) | [10.1097/QAD.0b013e32834d8e52](https://doi.org/10.1097/QAD.0b013e32834d8e52) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=raltegravir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:31 | 4:49 | 2/2/0 | 1/0/0 | 0/0/0 | 299,302/14,111 | ollama / glm-5.3-flash | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 61 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rizk_2015.pdf` | Rizk ML et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2015) | popPK | 10 | [10.1002/jcph.493](https://doi.org/10.1002/jcph.493) | [25753401](https://pubmed.ncbi.nlm.nih.gov/25753401) | Population PK (2-compartment, CL/V with allometric scaling) of raltegravir in children; AUC and C12h values are given but CL/V estimates themselves may be in tables/supplement not shown. |
| `Clarke_2020.pdf` | Clarke DF et al., Raltegravir (RAL) in Neonates: Dosing,…, Journal of acquired immune… (2020) | popPK | 7 | [10.1097/QAI.0000000000002294](https://doi.org/10.1097/QAI.0000000000002294) | [31913995](https://pubmed.ncbi.nlm.nih.gov/31913995) | Population PK modeling of raltegravir in neonates is described, but no numeric CL/V or parameter values appear in the evidence (likely in tables/supplement not provided). |

<sub>queue written 2026-10-07 16:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheung_2022 | irrelevant | 0 | 0 | In-vitro phenotypic resistance study; raltegravir is only a probe drug with EC50 susceptibility fold-changes, no PK disposition parameters. |
| popPK | Clarke_2020 | relevant | 7 | 3 | Population PK modeling of raltegravir in neonates is described, but no numeric CL/V or parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Cottrell_2013 | irrelevant | 1 | 0 | This is a review of dolutegravir; raltegravir appears only as a comparator with no PK parameters for raltegravir reported. |
| popPK | De_2026 | irrelevant | 4 | 2 | This is a machine-learning limited sampling strategy for predicting raltegravir AUC; it references population PK models (Bukkems, Arab-Alameddine) but does not itself report numeric CL/V/Q/ka values, which live in cited papers/supplementary material. |
| popPK | Heredia_2017 | irrelevant | 1 | 1 | Efficacy study in humanized mice reporting only EC50 susceptibility values and qualitative drug levels, no PK disposition parameters. |
| popPK | Herrera_2021 | irrelevant | 3 | 2 | PK/PD PrEP study reporting only concentration ratios and summary statistics; no CL/V/ka/half-life or population-PK model, and detailed values are in supplementary tables/figures not provided. |
| popPK | Isaacs_2020 | irrelevant | 0 | 0 | Computational docking/structural study of INSTI binding to HIV integrase; no PK parameters for raltegravir are reported. |
| popPK | Mohammadzadeh_2021 | irrelevant | 1 | 0 | This is a virology/neuropathology study of HIV/SIV brain reservoirs; raltegravir appears only as an ART drug with EC50 potency comparisons, no PK disposition parameters (CL, V, half-life) reported. |
| popPK | Ndashimye_2021 | irrelevant | 0 | 0 | This is a virology/resistance study with no pharmacokinetic parameters for raltegravir; raltegravir is only the exposure context. |
| popPK | Pressiat_2018 | irrelevant | 2 | 1 | Raltegravir is only a co-administered drug; no raltegravir PK parameters are reported, and exposures were estimated from published external models. |
| popPK | Reynolds_2015 | relevant | 4 | 3 | Human PK study of raltegravir with NCA parameters, but only ratio/percentage changes (C12, Cmax, AUC) are given in the abstract; absolute CL/V values are not present in the evidence. |
| popPK | Smith_2011 | irrelevant | 0 | 0 | In-vitro virology study of HIV susceptibility/resistance; no PK parameters for raltegravir. |
| popPK | Smith_2015 | irrelevant | 0 | 0 | In vitro antiviral susceptibility study of dolutegravir against HIV-2; raltegravir is only a comparator with EC50 values, no PK parameters. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | In-vitro phenotypic susceptibility (EC50) study of HIV-2 mutants, not a pharmacokinetic study with disposition parameters. |
| popPK | Van_2014 | irrelevant | 0 | 0 | This is a statistical methodology paper on genetic-algorithm variable selection for predicting raltegravir resistance from HIV genotype; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | This is a pharmacogenetics/weight-gain study; raltegravir is only a subgroup of INSTI switch, with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Braltegravir%5D&body=Drug%3A%20raltegravir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_raltegravir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 16:27 UTC</sub>
