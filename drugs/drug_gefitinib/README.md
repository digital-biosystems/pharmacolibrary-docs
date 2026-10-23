<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;gefitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gefitinib_Xiong2022_reference&quot;,&quot;label&quot;:&quot;Xiong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# gefitinib

- **generic name:** gefitinib
- **ATC codes:** `L01EB01`, `L01XE02`
- **DrugBank:** [DB00317](https://go.drugbank.com/drugs/DB00317) · **PubChem:** [CID 123631](https://pubchem.ncbi.nlm.nih.gov/compound/123631)
- **molar mass:** 446.902 g/mol (C22H24ClFN4O3) — DrugBank
- **groups:** approved, investigational

## About

Gefitinib is a tyrosine-kinase inhibitor used to treat non-small-cell lung cancer. It is an approved medicine, authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417824](https://www.wikidata.org/wiki/Q417824) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gefitinib | parent | 446.902 | C22H24ClFN4O3 | DrugBank | [123631](https://pubchem.ncbi.nlm.nih.gov/compound/123631) | Kawata_2019, Li_2006 |

## Start here

> **Xiong_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md?tab=Simulation) · [record](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 40 | L/h | 40 L/h | patients with advanced cancer | 27 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2006_reference](drugs/drug_gefitinib/Gefitinib_Li2006_reference.md) |
| CL | CL/F | 20.4 | L/h | 20.4 L/h | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiong_2022_reference](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md) |
| V | V/F | 941.8 | L | 941.7913 L | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiong_2022_reference](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Li_2006 · CL</text><circle cx="400.7" cy="30.0" r="4" fill="#ef6c00"><title>Li_2006 · CL: 40 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Xiong_2022 · CL/F</text><circle cx="298.4" cy="46.0" r="4" fill="#ef6c00"><title>Xiong_2022 · CL/F: 20.4 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Li_2006_reference](drugs/drug_gefitinib/Gefitinib_Li2006_reference.md) | — | 1-compartment (no model) | 1 | Li J et al., CYP3A phenotyping approach to predict s…, Journal of the National Can… (2006) | [10.1093/jnci/djj466](https://doi.org/10.1093/jnci/djj466) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Xiong_2022_reference](drugs/drug_gefitinib/Gefitinib_Xiong2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Eigenmann_2017_reference](drugs/drug_gefitinib/Gefitinib_Eigenmann2017_reference.md) | — | 1-compartment (no model) | 0 | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hill_2017_reference](drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md) | — | 1-compartment (no model) | 0 | Hill L et al., The usage of a three-compartment model…, Mathematical medicine and b… (2017) | [10.1093/imammb/dqv029](https://doi.org/10.1093/imammb/dqv029) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kawata_2019_reference](drugs/drug_gefitinib/Gefitinib_Kawata2019_reference.md) | — | 1-compartment (no model) | 2 | Kawata T et al., Gefitinib exposure and occurrence of in…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03788-4](https://doi.org/10.1007/s00280-019-03788-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2016_TGI](drugs/drug_gefitinib/pd_Eigenmann_2016_TGI.md) | tumor growth inhibition ← gefitinib · model not identified | — | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2016_pErk](drugs/drug_gefitinib/pd_Eigenmann_2016_pErk.md) | phospho-Erk ← gefitinib · model not identified | — | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV](drugs/drug_gefitinib/pd_Eigenmann_2017_TV.md) | Tumor volume ← gefitinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV_2](drugs/drug_gefitinib/pd_Eigenmann_2017_TV_2.md) | Tumor volume ← gefitinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy](drugs/drug_gefitinib/pd_Hoshino_Yoshino_2011_efficacy.md) | efficacy ← gefitinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sato_2018_OATP1B1_mediated_fluvastatin_uptake](drugs/drug_gefitinib/pd_Sato_2018_OATP1B1_mediated_fluvastatin_uptake.md) | OATP1B1-mediated fluvastatin uptake ← gefitinib · inhibition effect | — | Sato T et al., Interactions of crizotinib and gefitini…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2016.1275880](https://doi.org/10.1080/00498254.2016.1275880) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sato_2018_OATP1B3_mediated_3H_TCA_uptake](drugs/drug_gefitinib/pd_Sato_2018_OATP1B3_mediated_3H_TCA_uptake.md) | OATP1B3-mediated [3H]TCA uptake ← gefitinib · stimulation effect | — | Sato T et al., Interactions of crizotinib and gefitini…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2016.1275880](https://doi.org/10.1080/00498254.2016.1275880) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sato_2018_OATP2B1_mediated_3H_E3S_uptake](drugs/drug_gefitinib/pd_Sato_2018_OATP2B1_mediated_3H_E3S_uptake.md) | OATP2B1-mediated [3H]E3S uptake ← gefitinib · inhibition effect | — | Sato T et al., Interactions of crizotinib and gefitini…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2016.1275880](https://doi.org/10.1080/00498254.2016.1275880) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sato_2018_OATP2B1_mediated_fluvastatin_uptake](drugs/drug_gefitinib/pd_Sato_2018_OATP2B1_mediated_fluvastatin_uptake.md) | OATP2B1-mediated fluvastatin uptake ← gefitinib · inhibition effect | — | Sato T et al., Interactions of crizotinib and gefitini…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2016.1275880](https://doi.org/10.1080/00498254.2016.1275880) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scheipl_2016_percentage_inhibition](drugs/drug_gefitinib/pd_Scheipl_2016_percentage_inhibition.md) | percentage inhibition ← gefitinib · inhibition effect | — | Scheipl S et al., EGFR inhibitors identified as a potenti…, The Journal of pathology (2016) | [10.1002/path.4729](https://doi.org/10.1002/path.4729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2008_2_pERK](drugs/drug_gefitinib/pd_Wang_2008_2_pERK.md) | pERK in LN229-wild-type EGFR tumors ← gefitinib · model not identified | — | Wang S et al., Preclinical pharmacokinetic/pharmacodyn…, Molecular cancer therapeuti… (2008) | [10.1158/1535-7163.MCT-07-2070](https://doi.org/10.1158/1535-7163.MCT-07-2070) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2008_2_pERK_2](drugs/drug_gefitinib/pd_Wang_2008_2_pERK_2.md) | pERK in LN229-EGFRvIII mutant tumors ← gefitinib · model not identified | — | Wang S et al., Preclinical pharmacokinetic/pharmacodyn…, Molecular cancer therapeuti… (2008) | [10.1158/1535-7163.MCT-07-2070](https://doi.org/10.1158/1535-7163.MCT-07-2070) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2009_pERK](drugs/drug_gefitinib/pd_Wang_2009_pERK.md) | phosphorylated-extracellular signal-regulated kinase 1/2 ← gefitinib · inhibition effect | — | Wang S et al., Demonstration of the equivalent pharmac…, Molecular cancer therapeuti… (2009) | [10.1158/1535-7163.MCT-09-0089](https://doi.org/10.1158/1535-7163.MCT-09-0089) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2009_tumor_size](drugs/drug_gefitinib/pd_Wang_2009_tumor_size.md) | tumor size ← gefitinib · model not identified | — | Wang S et al., Demonstration of the equivalent pharmac…, Molecular cancer therapeuti… (2009) | [10.1158/1535-7163.MCT-09-0089](https://doi.org/10.1158/1535-7163.MCT-09-0089) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_TumorCellViability](drugs/drug_gefitinib/pd_Wanika_2024_TumorCellViability.md) | TumorCellViability ← gefitinib · indirect response — drug inhibits the production of TumorCellViability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:21 | 22:06 | 0/3/2 | 8/0/0 | 0/0/0 | 472,447/124,323 | openai / gpt-6-luna | 27 | 5/9 | 13/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2006.pdf` | Li J et al., CYP3A phenotyping approach to predict s…, Journal of the National Can… (2006) | popPK | 10 | [10.1093/jnci/djj466](https://doi.org/10.1093/jnci/djj466) | [17148773](https://pubmed.ncbi.nlm.nih.gov/17148773) | Human gefitinib population PK is reported, including numeric clearance variability, but no clearance estimates or model parameter values are provided. |
| `Wang_2008_2.pdf` | Wang S et al., Preclinical pharmacokinetic/pharmacodyn…, Molecular cancer therapeuti… (2008) | popPK | 9 | [10.1158/1535-7163.MCT-07-2070](https://doi.org/10.1158/1535-7163.MCT-07-2070) | [18281523](https://pubmed.ncbi.nlm.nih.gov/18281523) | Gefitinib disposition is modeled in mice, but no numeric PK parameter values are provided in the evidence. |
| `Wang_2009.pdf` | Wang S et al., Demonstration of the equivalent pharmac…, Molecular cancer therapeuti… (2009) | popPK | 9 | [10.1158/1535-7163.MCT-09-0089](https://doi.org/10.1158/1535-7163.MCT-09-0089) | [19509243](https://pubmed.ncbi.nlm.nih.gov/19509243) | A mouse gefitinib PK/PD model is described, but numeric disposition parameter values are not provided in the evidence. |
| `Eigenmann_2016.pdf` | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | popPK | 8 | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) | [27638857](https://pubmed.ncbi.nlm.nih.gov/27638857) | Gefitinib plasma/tumor PK is incorporated into a translational PKPD model, but no numeric disposition parameters are provided in the evidence. |
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 8 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | A gefitinib PopPK model was constructed in patients, but no numeric PK parameter values are provided in the evidence. |
| `Klass_2009.pdf` | Klass CM et al., Sequence dependence of cell growth inhi…, Head & neck (2009) | popPK | 7 | [10.1002/hed.21103](https://doi.org/10.1002/hed.21103) | [19399750](https://pubmed.ncbi.nlm.nih.gov/19399750) | The study describes an in-silico population PK simulation of gefitinib, but no numeric PK parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T01:01:25.373249+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Braconi_2022 | irrelevant | 0 | 0 | Gefitinib is mentioned as a transporter-modulating reference, but the study reports no gefitinib disposition parameters. |
| popPK | Eigenmann_2016 | relevant | 8 | 0 | Gefitinib plasma/tumor PK is incorporated into a translational PKPD model, but no numeric disposition parameters are provided in the evidence. |
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis, and its numeric values are treatment-effect estimates rather than gefitinib pharmacokinetic parameters. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 2 | 0 | Gefitinib exposure is discussed, but no quantitative disposition parameters or readable numeric values are provided. |
| popPK | Hotta_2021 | irrelevant | 0 | 0 | The study measures edoxaban pharmacokinetics, not gefitinib parameters. |
| popPK | Janssen_2022 | irrelevant | 1 | 0 | The study models ctDNA dynamics and only uses previously developed gefitinib PK models; no gefitinib disposition parameter values are reported. |
| popPK | Kidd_2007 | irrelevant | 0 | 0 | Gefitinib was tested only for in-vitro antiproliferative effects, with no pharmacokinetic disposition parameters reported. |
| popPK | Klass_2009 | relevant | 7 | 0 | The study describes an in-silico population PK simulation of gefitinib, but no numeric PK parameter values are provided in the evidence. |
| popPK | Kramer_2017 | irrelevant | 0 | 0 | The pharmacokinetic parameters are for the 18F-FLT imaging tracer, not gefitinib. |
| popPK | Leighl_2020 | irrelevant | 0 | 0 | This is a human patient-reported outcomes analysis, not a gefitinib pharmacokinetic study, and reports no disposition parameters. |
| popPK | Li_2021 | irrelevant | 2 | 0 | This human outcomes analysis reports no gefitinib disposition parameters; the cited AUC change is from prior studies. |
| popPK | Nishino_2013 | irrelevant | 0 | 0 | Reports tumor growth rates, not gefitinib pharmacokinetic disposition parameters. |
| popPK | Nishino_2016 | irrelevant | 0 | 0 | This is a tumor-response study and reports no gefitinib pharmacokinetic parameters. |
| popPK | Sato_2018 | irrelevant | 0 | 0 | This is an in-vitro transporter interaction study and reports no gefitinib disposition parameters. |
| popPK | Scheipl_2016 | irrelevant | 0 | 0 | Gefitinib is tested in cell assays, but the reported EC50 values are not pharmacokinetic disposition parameters. |
| popPK | Wang_2008_2 | relevant | 9 | 0 | Gefitinib disposition is modeled in mice, but no numeric PK parameter values are provided in the evidence. |
| popPK | Wang_2009 | relevant | 9 | 1 | A mouse gefitinib PK/PD model is described, but numeric disposition parameter values are not provided in the evidence. |
| popPK | Wanika_2024 | relevant | 9 | 1 | The paper models gefitinib pharmacokinetics in vitro, but its numeric parameter estimates appear in Table 2, which is not provided. |
| popPK | Xiong_2022 | irrelevant | 0 | 0 | This is a human tepotinib population-PK study; gefitinib is only a co-medication, with no gefitinib disposition parameters reported. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | Gefitinib is only a structural inspiration; the paper reports fungicide activity, not gefitinib pharmacokinetics. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | This is a quality-of-life study and reports no gefitinib pharmacokinetic parameters. |
| popPK | Yong_2025 | relevant | 8 | 0 | A gefitinib PopPK model was constructed in patients, but no numeric PK parameter values are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:02 UTC</sub>
