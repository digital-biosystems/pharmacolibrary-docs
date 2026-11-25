<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium nitrite&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumNitrite_Grimm2023_reference&quot;,&quot;label&quot;:&quot;Grimm_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# sodium nitrite

- **generic name:** sodium nitrite
- **ATC codes:** `V03AB08`
- **DrugBank:** [DB09112](https://go.drugbank.com/drugs/DB09112) · **PubChem:** [CID 23668193](https://pubchem.ncbi.nlm.nih.gov/compound/23668193)
- **molar mass:** 47.0134 g/mol (HNO2) — DrugBank
- **groups:** approved, investigational

## About

Sodium nitrite is an inorganic compound and nitrite salt used primarily as an antidote for various medical conditions. It is administered via intravenous injection for acute medical treatment and is also available as a dental paste form. The drug is listed on the World Health Organization essential medicines list and carries a boxed warning due to safety concerns.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q339975](https://www.wikidata.org/wiki/Q339975), [Wikipedia](https://en.wikipedia.org/wiki/Sodium_nitrite?oldid=1380044357) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nitrate | metabolite | 62.004 | NO3- | PubChem | [943](https://pubchem.ncbi.nlm.nih.gov/compound/943) | Vega-Villa_2013 |
| nitrite | metabolite | 68.995 | NNaO2 | PubChem | [23668193](https://pubchem.ncbi.nlm.nih.gov/compound/23668193) | Vega-Villa_2013 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Grimm_2023_reference](drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Grimm HP et al., Delivery of the Brainshuttle™ amyloid-b…, mAbs (2023) | [10.1080/19420862.2023.2261509](https://doi.org/10.1080/19420862.2023.2261509) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Vega-Villa_2013_reference](drugs/drug_sodium_nitrite/SodiumNitrite_VegaVilla2013_reference.md) | — | parent + metabolite (no model) | 10 | Vega-Villa K et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Clària_1994_absolute_tension_developed_in_response_to_norepinephrine](drugs/drug_sodium_nitrite/pd_Cl_ria_1994_absolute_tension_developed_in_response_to_norepi.md) | absolute tension developed in response to norepinephrine ← sodium nitrite · model not identified | — | Clària J et al., Increased nitric oxide-dependent vasore…, Hepatology (Baltimore, Md.) (1994) | [10.1002/hep.1840200635](https://doi.org/10.1002/hep.1840200635) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Clària_1994_relaxing_effect_of_sodium_nitrite](drugs/drug_sodium_nitrite/pd_Cl_ria_1994_relaxing_effect_of_sodium_nitrite.md) | relaxing effect of sodium nitrite ← sodium nitrite · stimulation effect | — | Clària J et al., Increased nitric oxide-dependent vasore…, Hepatology (Baltimore, Md.) (1994) | [10.1002/hep.1840200635](https://doi.org/10.1002/hep.1840200635) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Ding_2015_luminescence_inhibition](drugs/drug_sodium_nitrite/pd_Ding_2015_luminescence_inhibition.md) | luminescence inhibition ← sodium nitrite · inhibition effect | — | Ding S et al., Acute toxicity assessment of ANAMMOX su…, Chemosphere (2015) | [10.1016/j.chemosphere.2015.03.057](https://doi.org/10.1016/j.chemosphere.2015.03.057) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:17 | 0:05 | 0/2/0 | 2/1/0 | 0/0/0 | 3,736/167 | einfracz / qwen3.8-27b | 29 | 3/25 | 28/1 | 0 |

## Coverage

- **PubMed hits:** 141 matched, 81 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gebremedhin_1987.pdf` | Gebremedhin D et al., Inhibition by quinine of endothelium-de…, British journal of pharmaco… (1987) | pd | 5 | [10.1111/j.1476-5381.1987.tb11388.x](https://doi.org/10.1111/j.1476-5381.1987.tb11388.x) | [2827827](https://www.ncbi.nlm.nih.gov/pubmed/2827827) | metadata signals extractable PD data (EC50) |
| `Buikema_1993.pdf` | Buikema H et al., Endothelium dependent relaxation in two…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.12.2118](https://doi.org/10.1093/cvr/27.12.2118) | [8313417](https://www.ncbi.nlm.nih.gov/pubmed/8313417) | metadata signals extractable PD data (Emax) |
| `Leavesley_2008.pdf` | Leavesley HB et al., Interaction of cyanide and nitric oxide…, Toxicological sciences : an… (2008) | pd | 4 | [10.1093/toxsci/kfm254](https://doi.org/10.1093/toxsci/kfm254) | [17906319](https://www.ncbi.nlm.nih.gov/pubmed/17906319) | metadata signals extractable PD data (IC50) |
| `Sellimi_2017.pdf` | Sellimi S et al., Enhancing colour and oxidative stabilit…, Food and chemical toxicolog… (2017) | pd | 4 | [10.1016/j.fct.2017.04.001](https://doi.org/10.1016/j.fct.2017.04.001) | [28389351](https://www.ncbi.nlm.nih.gov/pubmed/28389351) | metadata signals extractable PD data (EC50) |
| `Thorens_1979.pdf` | Thorens S et al., Effects of some vasodilators on calcium…, European journal of pharmac… (1979) | pd | 4 | [10.1016/0014-2999(79)90410-2](https://doi.org/10.1016/0014-2999(79)90410-2) | [421744](https://www.ncbi.nlm.nih.gov/pubmed/421744) | metadata signals extractable PD data (IC50) |
| `Vidrio_1998.pdf` | Vidrio H et al., Potentiation by isoniazid of relaxation…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199809000-00007](https://doi.org/10.1097/00005344-199809000-00007) | [9733350](https://www.ncbi.nlm.nih.gov/pubmed/9733350) | metadata signals extractable PD data (EC50) |
| `Wanstall_1992.pdf` | Wanstall JC et al., Responses to vasodilator drugs on pulmo…, British journal of pharmaco… (1992) | pd | 4 | [10.1111/j.1476-5381.1992.tb14227.x](https://doi.org/10.1111/j.1476-5381.1992.tb14227.x) | [1596677](https://www.ncbi.nlm.nih.gov/pubmed/1596677) | metadata signals extractable PD data (EC50) |
| `Wanstall_1994.pdf` | Wanstall JC, In vitro hypoxia attenuates vasorelaxat…, The Journal of pharmacology… (1994) | pd | 4 |  | [7965804](https://www.ncbi.nlm.nih.gov/pubmed/7965804) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 06:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akarid_1995 | irrelevant | 0 | 0 | The paper is a virology study investigating the effect of nitric oxide and sodium nitrite on viral replication, containing no pharmacokinetic parameters for sodium nitrite. |
| PGx | Akarid_1995 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of nitric oxide donors and controls, including sodium nitrite, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Allen_1985 | irrelevant | 0 | 0 | This is an in vitro electrophysiological and mechanistic study of tracheal relaxation, not a pharmacokinetic study, and sodium nitrite is only a secondary probe. |
| PGx | Allen_1985 | not_relevant | 0 | 0 | The paper studies the electrophysiology of smooth muscle relaxation in guinea pigs and contains no data on human gene variants or genotypes affecting the PK or PD of sodium nitrite. |
| popPK | BERENBAUM_1964 | irrelevant | 0 | 0 | Sodium nitrite is used as a negative control/comparator in an immunological study of mice, and no pharmacokinetic parameters are reported. |
| PGx | BERENBAUM_1964 | not_relevant | 0 | 0 | The paper reports that sodium nitrite had no effect on antibody production in mice, which is a study of general toxicity or lack of efficacy, not a pharmacogenomic investigation linking genetic variants to PK/PD parameters. |
| PGx | Baek_2010 | not_relevant | 0 | 0 | Case report of exchange transfusion for nitroprusside-induced cyanide poisoning; no gene variant/genotype or pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Baek_2024 | irrelevant | 0 | 0 | This is a PK/PD study of LNP-mRNA therapeutics (mRNA-3927/3705/3210), not sodium nitrite; no sodium nitrite parameters appear. |
| popPK | Balazinski_2021 | irrelevant | 0 | 0 | The paper investigates the antimicrobial and mutagenic properties of peroxynitrous acid generated from sodium nitrite, not the pharmacokinetics of sodium nitrite itself. |
| PGx | Balazinski_2021 | not_relevant | 0 | 0 | The paper investigates the chemical generation of antimicrobial agents from NaNO2 and H2O2 and their bactericidal effects, with no mention of pharmacogenomics, human PK/PD parameters, or gene variants. |
| popPK | Balci_2015 | irrelevant | 0 | 0 | Sodium nitrite is used only as a reagent in the chemical synthesis of carbonic anhydrase inhibitors, not as the subject of a pharmacokinetic study. |
| PGx | Balci_2015 | not_relevant | 0 | 0 | The paper reports the synthesis of carbonic anhydrase inhibitors and their in vitro activity; it does not study sodium nitrite as a drug or its pharmacogenomics. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | This is a review of AI/ML toxicity prediction tools; sodium nitrite appears only as a toxic-dose table entry (180 mg/kg, rat, cytotoxicity) with no PK parameters. |
| popPK | Baskin_1992 | irrelevant | 1 | 0 | The paper is a review of cyanide antidotes and contains no original quantitative pharmacokinetic parameter values for sodium nitrite. |
| PGx | Baskin_1992 | not_relevant | 0 | 0 | The paper is a general review of the pharmacodynamics and pharmacokinetics of cyanide antidotes and does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Belenichev_2025 | irrelevant | 0 | 0 | Sodium nitrite is only used as a hypoxia-inducing agent in rats; no PK parameters for it are reported. |
| popPK | Buikema_1993 | irrelevant | 0 | 0 | The study uses sodium nitrite as a reference agonist to assess endothelium-independent relaxation in isolated aortic rings, rather than reporting pharmacokinetic parameters (clearance, volume, etc.) for sodium nitrite. |
| PGx | Buikema_1993 | not_relevant | 0 | 0 | The paper reports physiological changes in vascular response to sodium nitrite in heart failure rat models, not a pharmacogenomic effect of a gene variant on PK/PD. |
| popPK | Chinellato_1991 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of vascular responses to sodium nitrite, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Chinellato_1991 | not_relevant | 1 | 5 | The study examines the effect of age on pharmacodynamic responses (vascular relaxation) to sodium nitrite, but it does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| PGx | Chuesaard_2023 | not_relevant | 0 | 0 | Plant seed germination study with no gene variant/genotype effects on PK/PD parameters of sodium nitrite. |
| popPK | Clària_1994 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assay measuring vasorelaxation in aortic rings, not a pharmacokinetic study, and sodium nitrite is used as a non-specific vasodilator probe rather than the subject of a PK model. |
| PGx | Clària_1994 | not_relevant | 0 | 10 | The study investigates physiological differences in vascular reactivity between cirrhotic and control rats, but does not link gene variants/genotypes/phenotypes to PK/PD changes of sodium nitrite. |
| popPK | Dalloz_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of radical scavenging and NO release, not a pharmacokinetic study reporting quantitative disposition parameters for sodium nitrite. |
| PGx | Dalloz_1997 | not_relevant | 0 | 0 | The paper reports in vitro chemical interactions and radical scavenging properties of NO donors, but does not investigate any gene variants or genotypes affecting PK/PD parameters. |
| popPK | Ding_2015 | irrelevant | 0 | 0 | The paper reports acute toxicity (IC50) values for sodium nitrite in luminescent bacteria, not pharmacokinetic parameters. |
| PGx | Ding_2015 | not_relevant | 0 | 0 | The paper investigates acute toxicity of sodium nitrite on bacteria using the MIC/IC50 method and contains no pharmacogenomic data or human PK/PD parameters. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of nitrate/nitrite in feed focusing on toxicity (methaemoglobin formation) and exposure levels, not on the pharmacokinetic disposition parameters (CL, V, etc.) of sodium nitrite. |
| PGx | EFSA_2020 | not_relevant | 0 | 0 | The paper is a risk assessment of nitrate/nitrite in animal feed and contains no information on human pharmacogenomics or genotype-based changes in PK/PD. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food and does not contain any pharmacokinetic data for sodium nitrite. |
| PGx | EFSA_2023 | not_relevant | 0 | 0 | The paper discusses the food safety risk assessment of N-nitrosamines, not the pharmacogenomics of sodium nitrite. |
| popPK | EFSA_2023_2 | irrelevant | 0 | 0 | The paper discusses the safety assessment and toxicology of Bisphenol A (BPA), not the pharmacokinetics of sodium nitrite. |
| PGx | EFSA_2023_2 | not_relevant | 0 | 0 | The paper discusses the health risks and tolerable daily intake of bisphenol A, not sodium nitrite or pharmacogenomics. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | This is a review of flavonoids in neurological diseases with no sodium nitrite PK data or parameters. |
| popPK | Gebremedhin_1987 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on vascular relaxation where sodium nitrite is used as a direct smooth muscle relaxant comparator, not a pharmacokinetic study. |
| PGx | Gebremedhin_1987 | not_relevant | 0 | 0 | The study examines the pharmacological interaction of quinine with aortic relaxations and does not report on the pharmacogenomics or pharmacokinetics of sodium nitrite. |
| popPK | Grimm_2023 | irrelevant | 0 | 0 | This is a PK study of trontinemab/gantenerumab antibodies, not sodium nitrite; no sodium nitrite parameters appear. |
| popPK | Hayashi_1984 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of cerebral artery responsiveness, not a pharmacokinetic study reporting disposition parameters for sodium nitrite. |
| PGx | Hayashi_1984 | not_relevant | 0 | 0 | The study investigates age-dependent sensitivity to adrenergic and cholinergic agents, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of sodium nitrite. |
| popPK | Henning_2002 | irrelevant | 0 | 0 | The paper studies vascular physiology in ground squirrels using sodium nitrite as a tool to test endothelial function, not as a subject for pharmacokinetic analysis. |
| PGx | Henning_2002 | not_relevant | 0 | 0 | The paper investigates vascular physiology in hibernating ground squirrels and does not study the effect of any human gene variant on the pharmacokinetics or pharmacodynamics of sodium nitrite. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | The paper is about a wound dressing using lawsone, and sodium nitrite is only mentioned as a reagent in a chemical assay (aluminum chloride method for flavonoids), not as a drug subject of pharmacokinetic study. |
| PGx | Imani_2025 | not_relevant | 0 | 0 | The paper describes the development of a wound dressing using lawsone and silver nanoparticles, not the pharmacokinetics or pharmacodynamics of sodium nitrite. |
| popPK | Jankov_2018 | irrelevant | 1 | 0 | The study is a mechanistic investigation of sodium nitrite's effects on pulmonary hypertension and S-nitrosylation, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| PGx | Jankov_2018 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic effects of sodium nitrite in a rat model of pulmonary hypertension but does not investigate the influence of any gene variants or genotypes on its pharmacokinetics or pharmacodynamics. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis cases and contains no pharmacokinetic data or parameters for sodium nitrite. |
| PGx | Jauréguiberry_2005 | not_relevant | 0 | 0 | The paper describes the clinical presentation of leptospirosis in humans and does not discuss sodium nitrite or any pharmacogenomic effects on drug parameters. |
| popPK | Kagelmacher_2025 | irrelevant | 0 | 0 | This is an in-vitro anti-inflammatory study of dendritic polyglycerol sulfate in macrophages; sodium_nitrite is not studied and no PK parameters appear. |
| popPK | Kang_2017 | irrelevant | 0 | 0 | This is a food science study on the quality properties of cured chicken breast using grapefruit seed extract as a curing agent, not a pharmacokinetic study of sodium nitrite. |
| PGx | Kang_2017 | not_relevant | 0 | 0 | The paper investigates the food science properties of cured chicken meat and does not report any human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium nitrite. |
| popPK | Kirouac_2019 | irrelevant | 0 | 0 | The paper is a methodological review on the reproducibility of QSP models and does not contain any pharmacokinetic data or parameters for sodium nitrite. |
| PGx | Kirouac_2019 | not_relevant | 0 | 0 | The paper addresses the reproducibility of QSP model code and does not report pharmacogenomic effects on PK/PD parameters for sodium nitrite. |
| popPK | Korcan_2025 | irrelevant | 0 | 0 | Sodium nitrite is only a reagent in the Folin–Ciocalteu/flavonoid assays; no PK parameters for it are reported. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | This is a review of iodine-124 radiochemistry and immunoPET imaging; sodium nitrite is not mentioned and no PK parameters for it exist. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper investigates the phytochemical and biological properties of Eucalyptus globulus essential oil and contains no data regarding sodium nitrite pharmacokinetics. |
| PGx | Lad_2026 | not_relevant | 0 | 0 | The paper investigates the phytochemical and bioactive properties of Eucalyptus globulus essential oil; it contains no data regarding the pharmacokinetics or pharmacodynamics of sodium_nitrite, nor does it explore any genetic variants affecting drug response. |
| popPK | Lahnsteiner_2008 | irrelevant | 0 | 0 | The paper is a comparative study on the sensitivity and reproducibility of toxicity screening tests (LC50/EC50) in zebrafish, not a pharmacokinetic study providing quantitative disposition parameters for sodium nitrite. |
| PGx | Lahnsteiner_2008 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on sodium nitrite; it discusses general toxicity testing sensitivity and variability using zebrafish embryos. |
| popPK | Lestari_2005 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of fire combustion products, not a pharmacokinetic study reporting disposition parameters for sodium nitrite. |
| PGx | Lestari_2005 | not_relevant | 0 | 0 | The study evaluates in vitro cytotoxicity of fire combustion products in standard cell lines and does not investigate any genetic variants or pharmacogenomic effects on sodium nitrite PK/PD. |
| popPK | Liu_1994 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic vascular effects of peroxynitrite in isolated canine arteries, not the pharmacokinetic disposition of sodium nitrite. |
| PGx | Liu_1994 | not_relevant | 0 | 0 | The paper investigates the vascular effects of peroxynitrite in dogs and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of sodium nitrite. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The study is a plant physiology investigation using sodium nitrite as an NO donor analog in white clover, not a pharmacokinetic study of sodium nitrite disposition. |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper studies the effects of nitric oxide and sodium nitrite on white clover plants under cadmium stress, not the pharmacokinetics or pharmacodynamics of sodium nitrite in humans or other vertebrates, and contains no genetic or pharmacogenomic data. |
| popPK | Liu_2015_2 | irrelevant | 0 | 0 | The study focuses on plant physiology and nitric oxide signaling in Trifolium repens, not on the pharmacokinetics of sodium nitrite in a biological host. |
| PGx | Liu_2015_2 | not_relevant | 0 | 0 | The paper describes plant physiology in Trifolium repens and does not involve pharmacogenomics or human pharmacokinetic/pharmacodynamic parameters. |
| popPK | Maekawa_1982 | irrelevant | 0 | 0 | The paper is a carcinogenicity study in rats and does not report pharmacokinetic parameters. |
| PGx | Maekawa_1982 | not_relevant | 0 | 0 | The paper reports carcinogenicity studies in rats with no mention of genetic variants, pharmacokinetics, or pharmacodynamics. |
| popPK | Maguire_2016 | irrelevant | 0 | 0 | The paper reports toxicity (LD50/IC50) of sodium nitrite in larvae and cells, not pharmacokinetic parameters like clearance or volume. |
| PGx | Maguire_2016 | not_relevant | 0 | 0 | The paper evaluates the toxicity of sodium nitrite in *Galleria mellonella* larvae but does not involve human gene variants, genotypes, or phenotypes. |
| popPK | Marshall_2026 | irrelevant | 0 | 0 | This is a neuroscience study of striatal mGluR5 signaling and dSPN activity in mice; sodium_nitrite is not mentioned and no PK parameters are reported. |
| popPK | Ohshima_1984 | irrelevant | 0 | 0 | The study focuses on the formation of nitrosamines (NPRO, NTCA) and does not report pharmacokinetic parameters (CL, V, ka) for sodium nitrite. |
| PGx | Ohshima_1984 | not_relevant | 0 | 0 | The paper discusses endogenous nitrosamine formation and carcinogenic risk models, but does not report a pharmacogenomic effect on the PK or PD of sodium nitrite. |
| popPK | Okamoto_2013 | irrelevant | 1 | 0 | The study is a pharmacodynamic/toxicology experiment in rat lung grafts reporting physiological and histological outcomes, not quantitative pharmacokinetic parameters (CL, V, ka, etc.) for sodium nitrite. |
| PGx | Okamoto_2013 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of nebulized sodium nitrite on lung ischemia-reperfusion injury in rats and does not report any pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ortaakarsu_2025 | irrelevant | 0 | 0 | The paper studies the in vitro enzyme inhibition of a plant extract and does not report pharmacokinetic parameters for sodium nitrite (which is only mentioned as a reagent). |
| PGx | Ortaakarsu_2025 | not_relevant | 0 | 0 | The study investigates the enzyme inhibitory and antiproliferative effects of Cardaria draba extract and contains no data regarding sodium nitrite or pharmacogenomics. |
| popPK | Park_2023 | irrelevant | 0 | 0 | This is an in vitro mechanistic study investigating the anti-Acanthamoeba effects and cytotoxicity of sodium nitrite, containing no pharmacokinetic parameters. |
| PGx | Park_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro antimicrobial efficacy of sodium nitrite against Acanthamoeba and toxicity to human cells, but it contains no data on pharmacogenomics, genetic variants, or in vivo pharmacokinetic/pharmacodynamic parameters. |
| popPK | Patel_2019 | irrelevant | 0 | 0 | The paper is an in-vitro antioxidant activity study of plant extracts where sodium nitrite is used only as a chemical standard, not as a subject for pharmacokinetic analysis. |
| PGx | Patel_2019 | not_relevant | 0 | 0 | The paper studies the antioxidant activity of a plant extract using sodium nitrite only as a chemical standard, not as a subject of pharmacokinetic or pharmacodynamic analysis, and reports no genetic variants. |
| popPK | Quah_2020 | irrelevant | 0 | 0 | This is an in vitro anti-inflammatory/antioxidant study of a Cornus officinalis extract; sodium nitrite appears only as a reagent for NO standard curves, with no PK parameters. |
| popPK | Rekowski_2025 | irrelevant | 0 | 0 | The paper is a CONSORT-DEFINE guideline report regarding clinical trial reporting standards and does not contain pharmacokinetic data for sodium nitrite. |
| PGx | Rekowski_2025 | not_relevant | 0 | 0 | The paper is a reporting guideline (CONSORT-DEFINE) for early phase dose-finding trials and does not report pharmacogenomic data or effects for sodium nitrite. |
| popPK | Sang_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on scutellarein derivatives where sodium nitrite is used only as a tool to induce memory impairment in mice, and no pharmacokinetic parameters for sodium nitrite are reported. |
| PGx | Sang_2015 | not_relevant | 0 | 0 | The paper studies scutellarein derivatives for Alzheimer's disease, using sodium nitrite only as a memory-impairment inducer in the mouse model, and contains no pharmacogenomic analysis. |
| popPK | Sellimi_2017 | irrelevant | 0 | 0 | The study focuses on the food chemistry and antioxidant properties of fucoxanthin in meat sausages, not on the pharmacokinetics of sodium nitrite. |
| PGx | Sellimi_2017 | not_relevant | 0 | 0 | The paper investigates food additive properties in meat sausages, not pharmacogenomics or human PK/PD of sodium nitrite. |
| popPK | Shelkovnikov_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitric oxide's effect on norepinephrine in rat aorta, not a pharmacokinetic study of sodium nitrite. |
| PGx | Shelkovnikov_2004 | not_relevant | 0 | 0 | The paper studies the effects of NO donors/peroxynitrite on norepinephrine in a rodent model and contains no human genetic or pharmacogenomic data. |
| popPK | Sreekumar_2022 | irrelevant | 0 | 0 | The paper is about chitosan biopolymer properties; sodium nitrite is not the subject drug and no PK parameters are reported. |
| popPK | Srinivasa_2020 | irrelevant | 0 | 0 | The study investigates the protective effects of a plant extract against sodium nitrite-induced oxidative stress in vitro; it is not a pharmacokinetic study and does not report disposition parameters for sodium nitrite. |
| PGx | Srinivasa_2020 | not_relevant | 0 | 0 | The paper studies the protective effects of a plant extract against sodium nitrite-induced oxidative stress and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sylvester_1983 | irrelevant | 1 | 0 | The study focuses on cyanide pharmacokinetics in dogs where sodium nitrite is mentioned only as a co-administered antidotal agent, not as the subject of the PK analysis. |
| PGx | Sylvester_1983 | not_relevant | 0 | 0 | The paper studies the effect of thiosulfate on cyanide pharmacokinetics in dogs and does not report any pharmacogenomic effect (gene variant/genotype) on sodium nitrite. |
| popPK | Thorens_1979 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring the effect of sodium nitrite on calcium translocation, not a pharmacokinetic study of sodium nitrite. |
| PGx | Thorens_1979 | not_relevant | 0 | 10 | This study examines pharmacological effects of vasodilators on calcium influx in smooth muscle, with no pharmacogenomic focus. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | This is a review of diltiazem hydrochloride controlled-release formulations, not a PK study of sodium nitrite; no sodium nitrite parameters are present. |
| PGx | Vega-Villa_2013 | not_relevant | 0 | 0 | The study reports a population PK/PD model for sodium nitrite based on demographic covariates (weight, age, gender) but does not investigate or report any gene variants or genotypes. |
| popPK | Velázquez_2005 | irrelevant | 0 | 0 | The paper is an in-vitro synthetic and mechanistic study of COX-2 inhibitors, not a pharmacokinetic study of sodium nitrite. |
| PGx | Velázquez_2005 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on synthetic analogs; it contains no information on pharmacogenomic effects or the pharmacokinetics/pharmacodynamics of sodium nitrite. |
| popPK | Vidrio_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological examination of vasorelaxation potency in rat aortic rings and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) for sodium nitrite. |
| PGx | Vidrio_1998 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between isoniazid and sodium nitrite, not a pharmacogenomic effect of a gene variant on the drug's PK or PD. |
| popPK | Vuorinen_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular smooth muscle relaxation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Vuorinen_1991 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of exogenous GTP and guanosine on nitrovasodilator response, not the influence of genetic variants or genotypes. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The study is a plant physiology investigation using sodium nitrite as a breakdown product/comparator of a nitric oxide donor, not a pharmacokinetic study of the drug. |
| PGx | Wang_2011 | not_relevant | 0 | 0 | The paper investigates plant physiology (macrophyte) and does not involve human pharmacogenomics or PK/PD parameters for sodium nitrite. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study is an in vitro toxicology/mechanistic study on cell viability and mitophagy, reporting no pharmacokinetic parameters (CL, V, etc.) for sodium nitrite. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper studies the toxicological mechanism of sodium nitrite co-exposure on cell viability and mitochondrial autophagy, not pharmacogenomic effects on PK or PD parameters. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PGx | Wanstall_1992 | not_relevant | 0 | 0 | The paper studies pulmonary hypertensive rats and vasodilator responses generally, not a specific gene variant's effect on sodium nitrite PK/PD. |
| popPK | Wanstall_1994 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study examining vasorelaxation in isolated rat pulmonary arteries, not a pharmacokinetic study reporting disposition parameters for sodium nitrite. |
| PGx | Wanstall_1994 | not_relevant | 0 | 0 | The study examines the effect of hypoxia (environmental factor) on pharmacodynamics, not a gene variant/genotype/phenotype. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | This is a review of Acanthamoeba keratitis redox biology; sodium nitrite appears only as an in-vitro NO-donor comparator with no PK parameters. |
| popPK | White_1988 | irrelevant | 0 | 0 | The study is an in vitro pharmacological experiment measuring vasodilation (EC50) rather than pharmacokinetic disposition parameters. |
| PGx | White_1988 | not_relevant | 0 | 0 | The paper compares the pharmacodynamic response to sodium nitrite in different vascular beds (basilar vs. umbilical arteries) but does not report any pharmacogenomic effects involving gene variants or genotypes. |
| popPK | Willis_2022 | irrelevant | 0 | 0 | The paper studies atmospheric aerosol chemistry and multiphase ozonolysis kinetics, not pharmacokinetics or drug disposition in biological systems. |
| PGx | Willis_2022 | not_relevant | 0 | 0 | The paper studies atmospheric chemistry and multiphase ozonolysis kinetics, not pharmacogenomics or human pharmacology. |
| popPK | Xiang_2018 | irrelevant | 0 | 0 | This is a PD model of baicalein in RAW264.7 cells; sodium nitrite appears only as a Griess assay standard, with no PK parameters for it. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | The paper investigates the Maillard reaction for fish protein hydrolysates and has no relation to sodium nitrite pharmacokinetics. |
| PGx | Yang_2015 | not_relevant | 0 | 0 | The paper investigates food chemistry and allergy reduction, containing no data on pharmacogenomics or sodium nitrite. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | The study is a toxicology/carcinogenesis investigation measuring aberrant crypt foci in mice, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Zhou_2016 | not_relevant | 0 | 0 | The paper studies the carcinogenic effect of sodium nitrite in mice and does not report any pharmacogenomic influence on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | da_2013 | irrelevant | 0 | 0 | This is a pharmacodynamic study in mice where sodium nitrite is used solely as a tool compound to assess corpus cavernosum relaxation, with no pharmacokinetic parameters reported. |
| PGx | da_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of PDE9 inhibition on smooth muscle relaxation using sodium nitrite as a non-selective NO donor tool, not a pharmacokinetic or pharmacodynamic parameter of sodium nitrite as a drug, and contains no genetic variation analysis. |
| popPK | de_2024 | irrelevant | 0 | 0 | The study focuses on the mechanism of vascular tolerance in mouse aortas rather than pharmacokinetic parameters like clearance or volume. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper investigates mechanisms of vascular tolerance to sodium nitrite in mice but does not report pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | von_2006 | irrelevant | 0 | 0 | The paper is a microbiological study on Staphylococcus aureus mutants and uses sodium nitrite only as a phenotypic marker (susceptibility test), not as a drug for pharmacokinetic analysis. |
| PGx | von_2006 | not_relevant | 0 | 0 | The paper investigates microbial physiology (Staphylococcus aureus) and antibiotic susceptibility, not human pharmacogenomics of sodium nitrite. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_nitrite%5D&body=Drug%3A%20sodium_nitrite%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_nitrite/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:08 UTC</sub>
