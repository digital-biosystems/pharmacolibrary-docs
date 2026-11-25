<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;gefitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gefitinib_Xiong2022_reference&quot;,&quot;label&quot;:&quot;Xiong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# gefitinib

- **generic name:** gefitinib
- **ATC codes:** `L01EB01`, `L01XE02`
- **DrugBank:** [DB00317](https://go.drugbank.com/drugs/DB00317) · **PubChem:** [CID 123631](https://pubchem.ncbi.nlm.nih.gov/compound/123631)
- **molar mass:** 446.902 g/mol (C22H24ClFN4O3) — DrugBank
- **groups:** approved, investigational

## About

Gefitinib is an antineoplastic agent that blocks specific protein kinases to treat non-small-cell lung carcinoma. It is administered orally in tablet form. The drug is authorised in the European Union and appears on the World Health Organization's essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q417824](https://www.wikidata.org/wiki/Q417824), [Wikipedia](https://en.wikipedia.org/wiki/Gefitinib?oldid=1372172128) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gefitinib | parent | 446.902 | C22H24ClFN4O3 | DrugBank | [123631](https://pubchem.ncbi.nlm.nih.gov/compound/123631) | Kawata_2019, Li_2006 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Li_2006_reference](drugs/drug_gefitinib/Gefitinib_Li2006_reference.md) | — | 1-compartment (no model) | 1 | Li J et al., CYP3A phenotyping approach to predict s…, Journal of the National Can… (2006) | [10.1093/jnci/djj466](https://doi.org/10.1093/jnci/djj466) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Eigenmann_2017_reference](drugs/drug_gefitinib/Gefitinib_Eigenmann2017_reference.md) | — | 1-compartment (no model) | 0 | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hill_2017_reference](drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md) | — | 1-compartment (no model) | 0 | Hill L et al., The usage of a three-compartment model…, Mathematical medicine and b… (2017) | [10.1093/imammb/dqv029](https://doi.org/10.1093/imammb/dqv029) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kawata_2019_reference](drugs/drug_gefitinib/Gefitinib_Kawata2019_reference.md) | — | 1-compartment (no model) | 2 | Kawata T et al., Gefitinib exposure and occurrence of in…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03788-4](https://doi.org/10.1007/s00280-019-03788-4) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Xiong_2022_reference](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV](drugs/drug_gefitinib/pd_Eigenmann_2017_TV.md) | Tumor volume ← gefitinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV_2](drugs/drug_gefitinib/pd_Eigenmann_2017_TV_2.md) | Tumor volume ← gefitinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scheipl_2016_percentage_inhibition](drugs/drug_gefitinib/pd_Scheipl_2016_percentage_inhibition.md) | percentage inhibition ← gefitinib · inhibition effect | — | Scheipl S et al., EGFR inhibitors identified as a potenti…, The Journal of pathology (2016) | [10.1002/path.4729](https://doi.org/10.1002/path.4729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_TumorCellViability](drugs/drug_gefitinib/pd_Wanika_2024_TumorCellViability.md) | TumorCellViability ← gefitinib · indirect response — drug inhibits the production of TumorCellViability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:05 | 0:15 | 1/4/0 | 4/0/0 | 0/0/0 | 3,776/160 | einfracz / qwen3.8-27b | 27 | 5/9 | 13/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 6 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | The study reports the construction of a population pharmacokinetic model for gefitinib, but specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-11-23 23:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Braconi_2022 | irrelevant | 0 | 0 | Gefitinib is mentioned as a transporter-modulating reference, but the study reports no gefitinib disposition parameters. |
| popPK | Eigenmann_2016 | relevant | 8 | 2 | The study includes PK measurements for gefitinib in xenograft mice, but specific quantitative parameter values (CL, V, etc.) are not present in the provided text. |
| PGx | Eigenmann_2016 | not_relevant | 0 | 0 | The paper compares two drugs (erlotinib vs. gefitinib) using PK/PD modeling in xenograft models and does not report any pharmacogenomic effects (gene variants) on pharmacokinetics or pharmacodynamics. |
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy endpoints (PFS, OS, response rates) for EGFR inhibitors in lung cancer, containing no pharmacokinetic data for gefitinib. |
| PGx | Haaland_2014 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (PFS, OS, ORR) comparing different EGFR-TKIs in patients with EGFR mutations, but it does not report pharmacogenomic effects on the PK or PD parameters (e.g., AUC, Cmax, ER) of gefitinib itself. |
| popPK | Hoshino-Yoshino_2011 | relevant | 4 | 0 | The study reports AUC (exposure) for gefitinib in humans and animals for bridging purposes but does not provide quantitative compartmental PK parameters (CL, V, Q, ka) in the provided text. |
| PGx | Hoshino-Yoshino_2011 | not_relevant | 0 | 0 | The paper focuses on preclinical to clinical PK/PD bridging for drug dosing and does not investigate the effect of specific gene variants or genotypes on PK or PD parameters. |
| popPK | Hotta_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of edoxaban, not gefitinib. |
| PGx | Hotta_2021 | not_relevant | 0 | 0 | The paper reports the PK of edoxaban and its interaction with EGFR-TKIs, but does not investigate the effect of genetic variants on the PK/PD of gefitinib. |
| popPK | Janssen_2022 | irrelevant | 0 | 0 | The study models the dynamics of circulating tumor DNA (ctDNA) biomarkers, not the pharmacokinetics of gefitinib, and does not report any quantitative PK parameters (CL, V, ka) for the drug. |
| PGx | Janssen_2022 | not_relevant | 0 | 0 | The paper models ctDNA dynamics and PFS but reports no pharmacogenomic effect on PK/PD parameters of gefitinib. |
| popPK | Kidd_2007 | irrelevant | 0 | 0 | The paper describes in vitro cell line characteristics and drug inhibition of proliferation, not pharmacokinetic parameters for gefitinib. |
| PGx | Kidd_2007 | not_relevant | 0 | 0 | The study does not report on gene variants affecting gefitinib's pharmacokinetics or pharmacodynamics; it only mentions gefitinib as a reference compound in a cell line proliferation study. |
| popPK | Klass_2009 | irrelevant | 3 | 0 | The study is primarily an in vitro cell growth inhibition study; while it mentions an "in silico" PK simulation, no quantitative pharmacokinetic parameters (CL, V, etc.) are reported in the provided evidence. |
| PGx | Klass_2009 | not_relevant | 0 | 0 | The study focuses on the sequence dependence of drug combination efficacy and does not report any pharmacogenomic (genotype-based) effects on gefitinib's pharmacokinetics or pharmacodynamics. |
| popPK | Kramer_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic modeling of the PET tracer 18F-FLT for tumor imaging, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug gefitinib. |
| PGx | Kramer_2017 | not_relevant | 0 | 0 | The paper validates parametric imaging methods for 18F-FLT PET/CT in NSCLC patients and does not report pharmacogenomic effects on gefitinib PK/PD parameters. |
| popPK | Leighl_2020 | irrelevant | 0 | 0 | The paper is a patient-reported outcomes (quality of life) analysis from the FLAURA trial and does not report any pharmacokinetic parameters for gefitinib. |
| PGx | Leighl_2020 | not_relevant | 0 | 0 | The paper reports patient-reported outcomes (symptoms/quality of life) comparing osimertinib to other TKAs, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Li_2006 | relevant | 8 | 3 | The study performs population PK modeling for gefitinib in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are likely in tables or supplementary material not provided, with only variability percentages and correlations in the text. |
| PGx | Li_2006 | not_relevant | 2 | 10 | The study investigates a pharmacodynamic phenotype (midazolam clearance) as a predictor, but does not report data on specific CYP3A gene variants or genotypes. |
| popPK | Li_2021 | irrelevant | 2 | 0 | This human outcomes analysis reports no gefitinib disposition parameters; the cited AUC change is from prior studies. |
| popPK | Nishino_2013 | irrelevant | 0 | 0 | The study analyzes volumetric tumor growth rates in patients treated with gefitinib, not the pharmacokinetic parameters (CL, V, ka, etc.) of the drug itself. |
| PGx | Nishino_2013 | not_relevant | 0 | 0 | The study focuses on volumetric tumor growth kinetics in patients with EGFR mutations treated with EGFR-TKIs but does not report pharmacokinetic parameters or pharmacodynamic changes driven by specific genetic variants for the drugs. |
| popPK | Nishino_2016 | irrelevant | 0 | 0 | The study focuses on tumor volume response and survival outcomes, not the pharmacokinetic parameters of gefitinib. |
| PGx | Nishino_2016 | not_relevant | 0 | 0 | The study focuses on tumor response and survival in EGFR-mutant patients treated with erlotinib/gefitinib, not on pharmacokinetic or pharmacodynamic parameters altered by specific genetic variants. |
| popPK | Sato_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter interactions (OATPs) and does not report in vivo pharmacokinetic parameters (CL, V, t1/2) for gefitinib. |
| PGx | Sato_2018 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with OATP transporters using wild-type systems, not pharmacogenomic effects of gene variants on PK or PD. |
| popPK | Scheipl_2016 | irrelevant | 0 | 0 | Gefitinib is tested in cell assays, but the reported EC50 values are not pharmacokinetic disposition parameters. |
| popPK | Wang_2008_2 | relevant | 9 | 0 | The paper describes a preclinical PK/PD model of gefitinib in mice, but the evidence provided contains only the study design and abstract without specific quantitative parameter values (e.g., CL, V, ka). |
| popPK | Wang_2009 | relevant | 8 | 0 | The study is a preclinical PK/PD modeling study of gefitinib in mice, but the evidence provided (abstract only) lacks the specific numeric PK parameter values (CL, V, etc.) which are likely in the results or supplementary material. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | The study investigates the impact of tumor EGFR mutations (EGFRvIII vs wild-type) on PK/PD to establish equivalent dosing, rather than analyzing human patient pharmacogenomics (patient genotypes) as determinants of drug exposure or effect. |
| popPK | Wanika_2024 | relevant | 9 | 1 | The paper models gefitinib pharmacokinetics in vitro, but its numeric parameter estimates appear in Table 2, which is not provided. |
| popPK | Xiong_2022 | irrelevant | 0 | 0 | This is a human tepotinib population-PK study; gefitinib is only a co-medication, with no gefitinib disposition parameters reported. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The paper reports fungicidal activity of novel compounds in fungi, with gefitinib mentioned only as a structural reference, not a subject of pharmacokinetic analysis. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The paper focuses on the fungicidal activity of novel compounds against fungi, not on the pharmacogenomics of gefitinib in humans or other vertebrates. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The paper is a Quality of Life (QoL) study for NSCLC patients and contains no pharmacokinetic data or parameters for gefitinib. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper reports quality of life (QoL) data and patient characteristics, not pharmacokinetic or pharmacodynamic parameters influenced by gene variants. |
| popPK | Yong_2025 | relevant | 6 | 2 | The study reports the construction of a population pharmacokinetic model for gefitinib, but specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Yong_2025 | not_relevant | 0 | 0 | The study investigates exposure-driven adverse events using covariates like sex and treatment history, but does not report genetic variants or pharmacogenomic effects on PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgefitinib%5D&body=Drug%3A%20gefitinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gefitinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 23:02 UTC</sub>
