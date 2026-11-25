<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;erlotinib&quot;}]"></div>

# erlotinib

- **generic name:** erlotinib
- **ATC codes:** `L01EB02`, `L01XE03`
- **DrugBank:** [DB00530](https://go.drugbank.com/drugs/DB00530) · **PubChem:** [CID 176870](https://pubchem.ncbi.nlm.nih.gov/compound/176870)
- **molar mass:** 393.4357 g/mol (C22H23N3O4) — DrugBank
- **groups:** approved, investigational

## About

Erlotinib is a targeted inhibitor that blocks specific enzymes, indicated for pancreatic cancer and non-small cell lung carcinoma. Patients take this medication by mouth, usually in tablet form. The drug is approved in the European Union and included on global essential medicine lists.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418369](https://www.wikidata.org/wiki/Q418369), [Wikipedia](https://en.wikipedia.org/wiki/Erlotinib?oldid=1383066849) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| erlotinib (OSI-420) | parent | 393.436 | C22H23N3O4 | DrugBank | [176870](https://pubchem.ncbi.nlm.nih.gov/compound/176870) | Reddick_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Reddick_2019_reference](drugs/drug_erlotinib/Erlotinib_Reddick2019_reference.md) | — | parent + metabolite (no model) | 2 | Reddick SJ et al., Pharmacokinetics and safety of erlotini…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03921-3](https://doi.org/10.1007/s00280-019-03921-3) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Eigenmann_2017_reference](drugs/drug_erlotinib/Erlotinib_Eigenmann2017_reference.md) | — | 1-compartment (no model) | 0 | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Guidi_2020_reference](drugs/drug_erlotinib/Erlotinib_Guidi2020_reference.md) | — | 1-compartment (no model) | 0 | Guidi M et al., Population Pharmacokinetics of Erlotini…, Clinical therapeutics (2020) | [10.1016/j.clinthera.2020.05.008](https://doi.org/10.1016/j.clinthera.2020.05.008) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Benay_2015_CI](drugs/drug_erlotinib/pd_Benay_2015_CI.md) | cell index ← erlotinib · delayed effect through transit (transduction) compartments | — | Benay S et al., Model-based assessment of erlotinib eff…, Journal of pharmacokinetics… (2015) | [10.1007/s10928-015-9415-3](https://doi.org/10.1007/s10928-015-9415-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV](drugs/drug_erlotinib/pd_Eigenmann_2017_TV.md) | Tumor volume (TV) ← erlotinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV_2](drugs/drug_erlotinib/pd_Eigenmann_2017_TV_2.md) | Tumor volume (TV) ← erlotinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_Tumor_cell_viability](drugs/drug_erlotinib/pd_Wanika_2024_Tumor_cell_viability.md) | Tumor cell viability ← erlotinib · indirect response — drug inhibits the production of Tumor cell viability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rodier_2022_OS](drugs/drug_erlotinib/pd_Rodier_2022_OS.md) | overall survival ← erlotinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rodier_2022_PFS](drugs/drug_erlotinib/pd_Rodier_2022_PFS.md) | progression-free survival ← erlotinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:03 | 0:05 | 1/2/0 | 6/0/0 | 0/0/0 | 3,932/157 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 65 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thomas_2009.pdf` | Thomas F et al., Population pharmacokinetics of erlotini…, European journal of cancer… (2009) | popPK | 10 | [10.1016/j.ejca.2009.05.007](https://doi.org/10.1016/j.ejca.2009.05.007) | [19523815](https://pubmed.ncbi.nlm.nih.gov/19523815) | The study is a population PK analysis of erlotinib, but the specific numeric parameter values are not present in the provided abstract text. |

<sub>queue written 2026-11-23 21:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bahce_2016 | irrelevant | 2 | 8 | The study uses [11C]erlotinib as a diagnostic PET tracer, though numeric tumor VT values and the compartment model are reported; detailed results are in supplementary tables. |
| popPK | Benay_2015 | irrelevant | 5 | 2 | The study is an in vitro pharmacodynamic modeling exercise using A431 cells, and while it mentions an erlotinib PK model with a "mono-exponential" decline, the evidence provided does not contain the specific quantitative numeric parameter values (CL, V, ka, t1/2) required for extraction. |
| PGx | Benay_2015 | not_relevant | 0 | 0 | The paper describes in vitro pharmacokinetic-pharmacodynamic modeling of erlotinib but does not involve any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Eigenmann_2016 | relevant | 8 | 0 | The study describes a translational PKPD model for erlotinib in xenograft mice and humans, but no specific numeric PK parameters (CL, V, etc.) are present in the provided evidence. |
| PGx | Eigenmann_2016 | not_relevant | 0 | 0 | The paper compares the PK/PD properties of two different drugs (erlotinib and gefitinib) using translational modeling, but does not report pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Haaland_2014 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis comparing efficacy (PFS, OS, response rates) and safety of EGFR-TKIs, not a pharmacokinetic study. |
| PGx | Haaland_2014 | not_relevant | 0 | 0 | The paper is a clinical meta-analysis comparing efficacy (PFS, ORR) of EGFR TKIs, not a pharmacogenomic study of PK/PD parameters. |
| popPK | Janssen_2022 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of ctDNA biomarkers, not the pharmacokinetic disposition parameters of erlotinib. |
| PGx | Janssen_2022 | not_relevant | 0 | 0 | The paper reports on the longitudinal dynamics of circulating tumor DNA (ctDNA) as a biomarker for disease progression, not on the effect of pharmacogenomic variants on the pharmacokinetics or pharmacodynamics of erlotinib. |
| popPK | Kim_2025 | relevant | 9 | 0 | This is a human erlotinib population-PK model, but no numeric parameter values are present in the evidence. |
| popPK | Li_2013 | relevant | 5 | 0 | The paper reports preclinical PK/PD modeling for erlotinib in xenografts, which is relevant, but no quantitative parameter values (CL, V, etc.) are provided in the extracted evidence. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper investigates pharmacological interactions and dosing schedules in preclinical models without analyzing any genetic variants or pharmacogenomic factors. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics and clinical uses of ketamine, not erlotinib, and contains no data for the subject drug. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and pharmacodynamics of ketamine, not erlotinib, and does not report any pharmacogenomic effects. |
| popPK | Nakagawa_2022 | irrelevant | 2 | 1 | The study focuses on ramucirumab; erlotinib disposition parameters are not reported, and its exposure values are in supplementary material not provided. |
| popPK | Rodier_2022 | irrelevant | 2 | 0 | Erlotinib is used for an exposure–survival comparison; the displayed PK parameter values are for osimertinib, and erlotinib estimates are only referenced to a prior model. |
| popPK | Shao_2017 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of tumor inhibitory effects and molecular signaling pathways, with no pharmacokinetic parameter estimation or disposition data. |
| PGx | Shao_2017 | not_relevant | 0 | 0 | The paper investigates the anti-tumor efficacy of erlotinib in retinoblastoma cells but does not report any pharmacogenomic effect of a gene variant on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Thomas_2009 | relevant | 10 | 0 | The study is a population PK analysis of erlotinib, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Wanika_2024 | irrelevant | 2 | 1 | This is an in-vitro PK/PD model, and erlotinib’s numeric parameter estimates are referenced in Table 2 but not present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berlotinib%5D&body=Drug%3A%20erlotinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_erlotinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:01 UTC</sub>
