<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amprenavir&quot;}]"></div>

# Amprenavir

- **generic name:** Amprenavir
- **T3DB:** [T3D2863](http://www.t3db.ca/toxins/T3D2863) · **DrugBank:** [DB00701](https://go.drugbank.com/drugs/DB00701) · **PubChem:** [CID 65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016)
- **groups:** approved, withdrawn

## About

Amprenavir is only found in individuals that have used or taken this drug. It is a protease inhibitor used to treat HIV infection.Amprenavir inhibits the HIV viral proteinase enzyme which prevents cleavage of the gag-pol polyprotein, resulting in noninfectious, immature viral particles.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly absorbed after oral administration in HIV-1-infected patients with a time to peak concentration (T<sub>max</sub>) typically between 1 and 2 hours after a single oral dose. The absolute oral bioavailability of amprenavir in humans has not been established.
- **Sources and uses:** For the treatment of HIV-1 infection in combination with other antiretroviral agents.
- **Mechanism of toxicity:** Amprenavir inhibits the HIV viral proteinase enzyme which prevents cleavage of the gag-pol polyprotein, resulting in noninfectious, immature viral particles.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2863">T3DB T3D2863</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 161814-49-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2684">ChEBI 2684</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amprenavir | parent | 505.63 | C25H35N3O6S | PubChem | [65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016) | Shibata_2002 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Shibata_2002_reference](drugs/toxin_amprenavir/Amprenavir_Shibata2002_reference.md) | — | 1-compartment (no model) | 1 | Shibata N et al., Drug interactions between HIV protease…, Journal of pharmaceutical s… (2002) | [10.1002/jps.10051](https://doi.org/10.1002/jps.10051) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amprenavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate, `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 21:46 | 47:44 | 0/1/0 | 0/0/0 | 0/0/0 | 1,424,378/48,229 | ollama / glm-5.3-flash | 72 | 10/54 | 71/1 | 0 |

## Coverage

- **PubMed hits:** 1390 matched, 230 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shibata_2002.pdf` | Shibata N et al., Drug interactions between HIV protease…, Journal of pharmaceutical s… (2002) | popPK | 9 | [10.1002/jps.10051](https://doi.org/10.1002/jps.10051) | [11920753](https://pubmed.ncbi.nlm.nih.gov/11920753) | PBPK model of amprenavir disposition in rats with metabolic clearance/kinetic parameters, but specific numeric values for amprenavir are likely in tables/figures not fully shown in this abstract. |
| `Jones_2014.pdf` | Jones RM et al., Multiple imputation for assessment of e…, Environmental research (2014) | pd | 5 | [10.1016/j.envres.2014.07.027](https://doi.org/10.1016/j.envres.2014.07.027) | [25461881](https://www.ncbi.nlm.nih.gov/pubmed/25461881) | metadata signals extractable PD data (exposure-response) |
| `Mundy_2012.pdf` | Mundy LM et al., Overall benefit of antiretroviral treat…, AIDS (London, England) (2012) | pd | 5 | [10.1097/QAD.0b013e328351997f](https://doi.org/10.1097/QAD.0b013e328351997f) | [22301413](https://www.ncbi.nlm.nih.gov/pubmed/22301413) | metadata signals extractable PD data (exposure-response) |
| `Rodrigues_2020.pdf` | Rodrigues AD et al., Induction of Human Intestinal and Hepat…, Drug metabolism and disposi… (2020) | pgx | 8 | [10.1124/dmd.119.089615](https://doi.org/10.1124/dmd.119.089615) | [31879282](https://www.ncbi.nlm.nih.gov/pubmed/31879282) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fung_2000.pdf` | Fung HB et al., Amprenavir: a new human immunodeficienc…, Clinical therapeutics (2000) | pgx | 7 | [10.1016/S0149-2918(00)80044-2](https://doi.org/10.1016/S0149-2918(00)80044-2) | [10868554](https://www.ncbi.nlm.nih.gov/pubmed/10868554) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pal_2006.pdf` | Pal D et al., MDR- and CYP3A4-mediated drug-herbal in…, Life sciences (2006) | pgx | 7 | [10.1016/j.lfs.2005.12.010](https://doi.org/10.1016/j.lfs.2005.12.010) | [16442130](https://www.ncbi.nlm.nih.gov/pubmed/16442130) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wire_2006.pdf` | Wire MB et al., Fosamprenavir : clinical pharmacokineti…, Clinical pharmacokinetics (2006) | pgx | 7 | [10.2165/00003088-200645020-00002](https://doi.org/10.2165/00003088-200645020-00002) | [16485915](https://www.ncbi.nlm.nih.gov/pubmed/16485915) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-12 21:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreasen_1981 | irrelevant | 0 | 0 | The paper concerns rat liver glucocorticoid receptors and nucleotide effects, with no amprenavir data or kinetic parameters. |
| PGx | Anwar_2018 | not_relevant | 0 | 0 | No pharmacogenomic content; "T4 genotype" is the amoeba's genotype, and the paper addresses nanoparticle-drug conjugation, not gene variants affecting PK/PD. |
| PGx | Ardicli_2023 | not_relevant | 0 | 0 | Study examines cattle fattening performance traits, not drug PK/PD parameters of amprenavir or any drug. |
| popPK | Arman_2024 | irrelevant | 0 | 0 | In silico docking/ADMET predictions of modified antiviral derivatives; no empirical toxicokinetic parameters measured for amprenavir in any species. |
| popPK | Barnette_1999 | irrelevant | 0 | 0 | Review chapter on PDE4 inhibitors with no amprenavir data or kinetic parameters present. |
| popPK | Barrett_1994 | irrelevant | 0 | 0 | The paper is about cloning an ovine melanocortin receptor; amprenavir is never mentioned and no kinetic parameters for it exist. |
| PGx | Billington_2017 | not_relevant | 2 | 1 | Text mentions β2 agonist pharmacogenetics broadly; no amprenavir data and no specific PK/PD genotype effects reported. |
| popPK | Buratti_2013 | irrelevant | 0 | 0 | Paper concerns algal toxins (YTX/homo-YTX) in mussels; amprenavir does not appear at all and no kinetic parameters for it are reported. |
| PGx | Campos_2019 | not_relevant | 0 | 0 | No pharmacogenomic effect on amprenavir PK/PD is reported; the paper concerns NO pathway characterization in tortoise aorta. |
| popPK | Castelli_2023 | irrelevant | 0 | 0 | "AMP" here refers to amphetamine from a transdermal patch, not amprenavir; no amprenavir kinetic parameters are present. |
| popPK | Chang_2026 | irrelevant | 0 | 0 | This is a clinical dose-response meta-analysis of stimulants in ADHD with no toxicokinetic parameters for amprenavir; amprenavir does not appear at all. |
| popPK | Chaparro_2021 | irrelevant | 0 | 0 | The paper concerns airborne magnetic particles in lichens; amprenavir does not appear and no kinetic parameters for it exist. |
| popPK | Chaparro_2024 | irrelevant | 0 | 0 | Paper studies airborne magnetic particle accumulation in plants; amprenavir appears nowhere and no kinetic parameters for it are reported. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | Paper concerns cloning of a turkey beta-adrenergic receptor; amprenavir is not mentioned and no kinetic parameters exist. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | No amprenavir or any kinetic parameter appears; this is a molecular biology study of mouse CD59 regulation. |
| popPK | Chen_2015_2 | irrelevant | 0 | 0 | All kinetic parameters (Vd, clearance, bioavailability) belong to metformin, not amprenavir. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper is about antimicrobial peptides in a fish species, with no data on amprenavir or any toxicokinetic parameters. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | A mini-review of antimicrobial peptides in fish with no amprenavir or kinetic parameters of any kind. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | Amprenavir does not appear anywhere in this paper; it is a phytochemical/multi-omics study of Isodon lophanthoides extract in mice with no kinetics for the substance, and no values to extract. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The kinetic parameters (Cmax, Tmax, AUC, half-life) belong to gingerenone A, not amprenavir; amprenavir does not appear in the paper at all. |
| PGx | Chen_2026_2 | not_relevant | 0 | 0 | Review of ADPKD therapies (tolvaptan, farabursen, etc.) with no mention of amprenavir or genetic effects on its PK/PD parameters. |
| PGx | Chin_2023 | not_relevant | 0 | 2 | Text only mentions "conceivable pharmacogenomic liabilities" for STING-targeting immunotherapy; no gene variant effects on amprenavir PK/PD are reported. |
| popPK | Chouchène_2022 | irrelevant | 0 | 0 | The paper reports synthesis, antimicrobial activity, and DFT of spiropyrrolidine derivatives with no amprenavir toxicokinetic parameters (amprenavir is not the subject; only unrelated in-silico ADMET of the synthesized compounds is mentioned). |
| popPK | Cisterna-García_2026 | irrelevant | 0 | 0 | The paper concerns antimicrobial peptide databases and prediction tools; amprenavir is never mentioned and no kinetic parameters for it appear. |
| PGx | Crisafulli_2011 | not_relevant | 0 | 0 | The paper reviews pharmacogenetics of antidepressants and does not address amprenavir at all. |
| PGx | Cronholm_1968 | not_relevant | 0 | 0 | Paper concerns 5'-AMP histamine sensitivity in mice and unrelated chemotherapy; no amprenavir or pharmacogenomic PK/PD data. |
| PGx | Cui_2018 | not_relevant | 0 | 0 | Paper concerns MIF genotype effects on olanzapine metabolic side effects, not amprenavir PK/PD. |
| PGx | Daniel_2023 | not_relevant | 0 | 0 | Paper concerns TRIP6 gene regulation in breast cancer cells; no gene effect on amprenavir PK/PD reported. |
| PGx | Defez_1981 | not_relevant | 0 | 0 | E. coli beta-glucoside metabolism genetics; no amprenavir or PK/PD pharmacogenomic data. |
| popPK | Djordjevic_2024 | irrelevant | 0 | 0 | The paper reports kinetic parameters (clearance, population PK model) only for carbamazepine; amprenavir does not appear as the subject substance at all. |
| popPK | Dolphin_1980 | irrelevant | 0 | 0 | The paper concerns neuronal protein phosphorylation (Protein I) and contains no kinetic parameters for amprenavir or any xenobiotic toxicokinetics. |
| popPK | Duarte-Araújo_2009 | irrelevant | 0 | 0 | Study concerns ATP catabolism and ACh release in rat myenteric plexus; amprenavir is never mentioned and no kinetic parameters for it exist. |
| PGx | Döhr_2001 | not_relevant | 0 | 0 | Paper engineers CPR cofactor preference in vitro; no amprenavir PK/PD or gene-variant drug effect reported. |
| popPK | Ehrlich_1991 | irrelevant | 0 | 0 | The paper concerns rat ARPP-21 phosphoprotein mRNA characterization and contains no amprenavir or any kinetic parameter for it. |
| popPK | Entwistle_1990 | irrelevant | 0 | 0 | Paper concerns MSH receptor binding in rat lacrimal glands; amprenavir does not appear at all, and no amprenavir kinetic parameters are present. |
| PGx | Erdenee_2021 | not_relevant | 0 | 0 | Sheep CREB1 indel and body morphometric traits; no amprenavir PK/PD parameter involved. |
| popPK | Feng_2025 | irrelevant | 0 | 0 |  |
| PGx | Floris_2026 | not_relevant | 0 | 0 | Guidelines document on pharmacogenetic testing policy; no amprenavir PK/PD gene-variant effects reported. |
| popPK | Fodor_2024 | irrelevant | 0 | 0 | The paper concerns corazonin/GnRH peptide signaling in Lymnaea stagnalis with no kinetic parameters for amprenavir. |
| PGx | Foerster_2022 | not_relevant | 0 | 0 | Review on autophagy and intestinal epithelial barrier; no mention of amprenavir or pharmacogenomic PK/PD effects. |
| popPK | Fraguas_2025 | irrelevant | 0 | 0 | The paper characterizes the AMPK inhibitor BAY-3827 structurally and cellularly; amprenavir does not appear, and no kinetic parameters (half-life, clearance, etc.) for it are reported. |
| PGx | Fung_2000 | not_relevant | 3 | 3 | Review describes amprenavir PK parameters and CYP metabolism but reports no gene variant/genotype effect on PK or PD parameters. |
| popPK | Fuss_2010 | irrelevant | 0 | 0 | Paper describes adenylyl cyclase biochemistry in honeybee brain with no amprenavir toxicokinetic parameters of any kind. |
| popPK | Ghofrani_2009 | irrelevant | 0 | 0 | The paper is about sildenafil and other pulmonary hypertension therapies; amprenavir is not mentioned and no kinetic parameters for it appear. |
| PGx | Gong_2025 | not_relevant | 0 | 0 | General description of ClinGen PGxWG frameworks; no gene variants or amprenavir PK/PD data reported. |
| popPK | Greene_1995 | irrelevant | 0 | 0 | The paper concerns PKA gene expression during mouse palate development and contains no amprenavir toxicokinetic parameters. |
| popPK | Guicherit_1991 | irrelevant | 0 | 0 | The paper is about mouse adenylosuccinate synthetase cloning; amprenavir is never mentioned and no kinetic parameters for it appear. |
| popPK | Guicherit_1994 | irrelevant | 0 | 0 | The paper concerns adenylosuccinate synthetase gene cloning in mouse T-lymphoma cells and contains no data on amprenavir at all. |
| PGx | Halat-Wolska_2025 | not_relevant | 0 | 0 | Genetic study of Alport syndrome (COL4A3/4/5 variants) with no drug exposure or PK/PD parameters for amprenavir. |
| popPK | Hanson_1985 | irrelevant | 0 | 0 | "AmP" here is 4-aminophentermine, a radiotracer for brain imaging, not amprenavir; no amprenavir kinetic parameters exist. |
| PGx | Harris_2018 | not_relevant | 0 | 0 | Paper is about HSV-1 in Alzheimer's disease pathogenesis; no PK/PD or pharmacogenomic data on amprenavir. |
| PGx | Hartwig_2021 | not_relevant | 0 | 0 | The paper concerns metformin's effect on FOXO3/ROS in immune cells and contains no data on amprenavir PK or PD parameters. |
| PGx | Hsu_2024 | not_relevant | 0 | 0 | Paper is about antimicrobial peptide design (tilapia piscidin), not amprenavir, and no gene variant effects on PK/PD parameters are reported. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | Paper is about an insect pattern-recognition protein; amprenavir and any kinetic parameters are entirely absent. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters (half-life, clearance, Vd) but for VRC01, not for amprenavir, which does not appear at all. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The paper concerns the antibody VRC01, not amprenavir; amprenavir is never mentioned and no amprenavir kinetic parameters appear anywhere. |
| PGx | Hudoyo_2017 | not_relevant | 0 | 0 | No drug is involved; the paper studies AMPD2 gene knockout effects on glucose metabolism, not a pharmacogenomic effect on a PK/PD parameter of amprenavir. |
| popPK | Imjongjirak_2017 | irrelevant | 0 | 0 | No amprenavir or any toxicokinetic parameters appear; paper concerns an antimicrobial peptide from crabs. |
| popPK | Inazuka_2012 | irrelevant | 0 | 0 | Amprenavir is never mentioned; the paper is about NUAK1 knock-out mice and glucose metabolism with no kinetic parameters for the substance. |
| popPK | Iwatsubo_2006 | irrelevant | 0 | 0 | The paper discusses adenylyl cyclase drug targeting with no kinetic parameters for amprenavir. |
| popPK | Jakobsen_2026 | irrelevant | 0 | 0 | The paper concerns the anti-CD73 antibody Sym024, not amprenavir; amprenavir is mentioned nowhere. |
| popPK | Jaleel_2005 | irrelevant | 0 | 0 | The paper is about LKB1/SNRK kinase biology and contains no amprenavir kinetic parameters or any mention of amprenavir. |
| popPK | Jayachandran_2026 | irrelevant | 0 | 0 | The paper reports kinetic parameters for rifapentine/desacetyl rifapentine, not amprenavir; amprenavir does not appear at all. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper is about D-β-casein 197 antimicrobial peptide against bacterial biofilms; amprenavir is never mentioned and no kinetic parameters for it exist. |
| popPK | Jimenez-Toro_2023 | irrelevant | 0 | 0 | The paper concerns ampicillin/ceftriaxone against Enterococcus faecalis, with no amprenavir data of any kind — "AMP" here is ampicillin, not amprenavir. |
| popPK | Johansson_1983 | irrelevant | 0 | 0 | The paper concerns affinity partitioning of yeast phosphofructokinase and contains no toxicokinetic data for amprenavir. |
| popPK | Jones_2014 | irrelevant | 0 | 0 | No amprenavir or any toxicokinetic parameter; the paper concerns statistical imputation of atrazine water-monitoring data. |
| PGx | Kelly_2012 | not_relevant | 0 | 0 | Paper discusses roflumilast, not amprenavir, and contains no pharmacogenomic effects on PK/PD parameters. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | Paper reports EC50s of octopus peptide CPT on AVP/oxytocin receptors, not kinetic parameters for amprenavir, which is not mentioned at all. |
| popPK | Kitani_2015 | irrelevant | 0 | 0 | No amprenavir or any toxicokinetic parameters are present; the paper concerns fish L-amino acid oxidase and bacterial challenge. |
| popPK | Klein_1997 | irrelevant | 0 | 0 | The paper is about serotonin N-acetyltransferase and melatonin rhythms with no amprenavir data or parameters of any kind. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | Paper discusses lercanidipine; amprenavir only mentioned as a CYP3A4 inhibitor with no genetic variant effect on its PK/PD parameters. |
| PGx | Kong_2022 | not_relevant | 0 | 0 | Review of PDE11A genetics/disease biology; no mention of amprenavir or any drug PK/PD parameter. |
| popPK | Kopperschläger_1985 | irrelevant | 0 | 0 | The paper studies yeast phosphofructokinase partition coefficients; amprenavir is not mentioned at all. |
| popPK | Krstevska_2022 | irrelevant | 0 | 0 | A text-mining review of PBPK modeling literature with no amprenavir kinetic parameters anywhere. |
| PGx | Kulkarni_2025 | not_relevant | 0 | 0 | Scoping review cataloging gene–drug associations; no amprenavir-specific genotype effect on a PK/PD parameter reported. |
| popPK | Kumar_2018 | irrelevant | 0 | 0 | The paper reviews EPAC/cAMP signaling in cancer and contains no toxicokinetic parameters, concentrations, or kinetic models for amprenavir in any species. |
| popPK | Kwast-Welfeld_1993 | irrelevant | 0 | 0 | The paper concerns CRE-binding proteins in mammalian cells with no amprenavir or toxicokinetic data whatsoever. |
| PGx | Lazzaro_2020 | not_relevant | 0 | 0 | Review of antimicrobial peptides generally; no gene variant effect on amprenavir PK/PD reported. |
| popPK | Leonard_1987 | irrelevant | 0 | 0 | The paper studies NGF-regulated mRNAs in PC12 cells and contains no amprenavir kinetic data of any kind. |
| PGx | Li_2011 | not_relevant | 2 | 3 | Study identifies CYP450 isoenzymes metabolizing berberine and metabolite activities, but reports no gene variant/genotype/phenotype effect on amprenavir PK/PD; amprenavir not studied. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Paper concerns a Toll receptor in crayfish antiviral immunity; amprenavir and any kinetic parameters are entirely absent. |
| popPK | Liang_2014 | irrelevant | 0 | 0 | Amprenavir is not mentioned at all; the paper concerns AMPK activation, COX-2 inhibitors and fatty liver in mice with no kinetic parameters for the substance of interest. |
| PGx | Lincoln_1975 | not_relevant | 0 | 0 | Paper studies cAMP in Cloudman melanoma cells; no amprenavir or pharmacogenomic PK/PD effects reported. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The paper concerns a crayfish lysozyme and antibacterial immunity; amprenavir is not mentioned and no kinetic parameters are present. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | This is a mechanism study of sevoflurane-induced apoptosis in rats; amprenavir is not mentioned, and no toxicokinetic parameters for amprenavir appear anywhere in the text. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | Paper studies diosmetin and ABCG2 in barrier function; no amprenavir PK/PD or pharmacogenomics reported. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | Paper concerns cGAS/STING biology in γδ T cells with no amprenavir kinetic data of any kind. |
| PGx | Ludwig_1980 | not_relevant | 0 | 0 | Paper concerns retinoic acid effects on melanoma cell protein kinase, not amprenavir pharmacogenomics. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The paper studies pimodivir synergy in vitro; amprenavir does not appear at all, and no toxicokinetic parameters of any subject substance are reported. |
| popPK | Lupo_2022 | irrelevant | 0 | 0 | The paper concerns berberine (a different substance); amprenavir does not appear at all. |
| popPK | Lv_2019 | irrelevant | 0 | 0 | The paper concerns the antimicrobial peptide mytimacin-4 in mussels and contains no kinetic parameters for amprenavir at all. |
| PGx | Macchiaiolo_2020 | not_relevant | 0 | 0 | Paper describes ADSL deficiency phenotype; no drug exposure or PK/PD parameters for amprenavir or any drug. |
| PGx | Markowitz_2022 | not_relevant | 0 | 0 | Paper discusses amphetamine/methylphenidate PK, not amprenavir, and reports no gene-variant effect on PK/PD parameters. |
| popPK | Martin_2006 | irrelevant | 0 | 0 | The paper is about the Hint2 protein and hepatocellular carcinoma; amprenavir is never mentioned and no kinetic parameters for it appear. |
| PGx | Martín-Bórnez_2025 | not_relevant | 0 | 0 | Paper studies COMT variants and Parkinson's disease risk/levodopa-related outcomes, with no pharmacokinetic or pharmacodynamic parameters for amprenavir reported. |
| PGx | Martín-Bórnez_2025_2 | not_relevant | 0 | 0 | The paper examines COMT variants vs Parkinson's disease risk and levodopa-related outcomes (LID, motor, cognition); amprenavir and any PK/PD parameter of it are not studied. |
| popPK | Matsukawa_1996 | irrelevant | 0 | 0 | Paper is about tissue distribution of PD-ECGF protein, not amprenavir; no amprenavir kinetic parameters at all. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | Amprenavir appears only as a name in a list of predicted drug-repurposing candidates; no kinetic parameters of any kind, human or animal. |
| PGx | McKeage_2009 | not_relevant | 1 | 2 | Darunavir review discusses resistance mutations and PK generally, but no gene variant effect on amprenavir PK/PD parameters. |
| PGx | McNamara_1994 | not_relevant | 0 | 0 | Paper on adipose lipid metabolism in lactation; no drugs or pharmacogenomic parameters mentioned. |
| PGx | Melmed_1983 | not_relevant | 0 | 0 | Paper concerns lipoprotein lipase in macrophage cell lines; no amprenavir or PK/PD pharmacogenomic data. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Cisapride drug–drug interaction review; amprenavir mentioned only as CYP3A4 inhibitor, no gene variant effect on any PK/PD parameter. |
| PGx | Mineo_1995 | not_relevant | 0 | 0 | Paper discusses myogenic hyperuricemia and purine metabolism; no amprenavir or pharmacogenomic PK/PD effect mentioned. |
| PGx | Mitchell-White_2024 | not_relevant | 0 | 0 | In vitro biochemical ABCG2 ligand-binding assay development; no gene variant/genotype effect on amprenavir PK/PD reported (amprenavir not even mentioned). |
| popPK | Mitchell_2020 | irrelevant | 0 | 0 | The paper concerns secretoneurin/secretogranin-2 biology and contains no kinetic parameters for amprenavir. |
| popPK | Mitra_2008 | irrelevant | 0 | 0 | The paper concerns doxorubicin toxicokinetics in rats; amprenavir does not appear at all. |
| PGx | Morisaki_1992 | not_relevant | 0 | 0 | Paper concerns AMPD1 deficiency, not amprenavir or any drug PK/PD parameter. |
| popPK | Muda_1996 | irrelevant | 0 | 0 | The paper is about the protein phosphatase MKP-3, not the substance amprenavir, and contains no kinetic parameters of amprenavir. |
| popPK | Mundy_2012 | irrelevant | 0 | 1 | Fracture-risk outcome study with no kinetic parameters for amprenavir, which appears only as one drug among exposures in a cohort analysis. |
| popPK | Naeem_2026 | irrelevant | 0 | 0 | The paper is a review of Terminalia arjuna in ulcerative colitis and contains no kinetic parameters or any mention of amprenavir at all. |
| PGx | Nies_2012 | not_relevant | 2 | 1 | Review only mentions MATE transport of amprenavir and calls for studying genetic variants, but reports no pharmacogenomic effect on PK/PD parameters. |
| PGx | Oduro_2022 | not_relevant | 0 | 0 | Review of cGAS-STING signaling in cardiovascular/metabolic disease; no amprenavir or pharmacogenomic PK/PD data mentioned. |
| PGx | Oehlen_1993 | not_relevant | 0 | 0 | Yeast CDC25/glycolysis study with no amprenavir or pharmacogenomic PK/PD content. |
| popPK | Ortega_2024 | irrelevant | 0 | 0 | The paper studies Atlantic salmon NK-lysin antimicrobial peptides; amprenavir is never mentioned and no kinetic parameters for it exist in the evidence. |
| popPK | Padinha_2000 | irrelevant | 0 | 0 | The paper concerns metal contamination and stress indices in Spartina maritima; amprenavir does not appear at all. |
| PGx | Pal_2006 | not_relevant | 2 | 3 | Reports herbal (St. John's wort) drug interactions with amprenavir, not a gene variant/genotype effect on its PK/PD; no fitted effect sizes. |
| popPK | Panayiotou_2014 | irrelevant | 0 | 0 | A review on human adenylate kinase isoforms with no amprenavir-specific kinetic parameters, concentrations, or models. |
| popPK | Patel_2001 | irrelevant | 0 | 0 | Paper is about adenylyl cyclase signaling; amprenavir and any kinetic parameters are absent. |
| PGx | Pliszka_2001 | not_relevant | 0 | 0 | Review about ADHD drug development with no data on gene variants affecting amprenavir PK/PD. |
| popPK | Pu_2025 | irrelevant | 0 | 0 | The paper concerns the ENPP1 inhibitor ISM5939; amprenavir is never mentioned and no kinetic parameters for it appear. |
| PGx | Puttrevu_2020 | not_relevant | 0 | 5 | The paper models selegiline, not amprenavir; CYP polymorphism effects described are for selegiline metabolites only. |
| popPK | Qin_2019 | irrelevant | 0 | 0 | The paper concerns a TNF-like gene in prawns and contains no amprenavir kinetic data whatsoever. |
| popPK | Rac_2005 | irrelevant | 0 | 0 | The paper concerns fluoride in snails, with no quantitative kinetic parameters for amprenavir. |
| popPK | Rahman_2021 | irrelevant | 0 | 0 | Amprenavir appears only as a chemically similar drug predicted by screening; no kinetic parameters for it are reported. |
| popPK | Reeves_2023 | irrelevant | 0 | 0 | The paper models VRC01 antibody PK/PD and HIV viral load kinetics; amprenavir is not the subject and no amprenavir kinetic parameter values appear in the evidence. |
| PGx | Rick_1987 | not_relevant | 0 | 0 | Paper concerns von Willebrand's disease platelet aggregation in pregnancy; no amprenavir or genetic effects on PK/PD parameters reported. |
| PGx | Rodrigues_2020 | not_relevant | 0 | 0 | Review on OATP induction by drug-drug interactions; no gene variant effect on amprenavir PK/PD. |
| PGx | Rodríguez_2019 | not_relevant | 0 | 0 | Amprenavir is not studied; paper concerns β-peptide antifungals and morphogenesis modulators in Candida with no pharmacogenomic PK/PD data. |
| popPK | Rorke_2002 | irrelevant | 0 | 0 | The paper is a review of adenosine in asthma/COPD with no amprenavir content or kinetic parameters at all. |
| popPK | Rossenkhan_2025 | irrelevant | 0 | 0 | HIV acquisition timing estimation study with no amprenavir kinetic parameters of any kind. |
| popPK | Roszkowska_2008 | irrelevant | 0 | 0 | Gene expression study of AMP-deaminase/5'-nucleotidase in placenta; no amprenavir toxicokinetic parameters. |
| popPK | Sale_2002 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Saleem_2025 | irrelevant | 0 | 0 | A review of machine learning for antimicrobial peptides with no amprenavir kinetic parameters of any kind; "AUC" values are model performance metrics, not pharmacokinetics. |
| PGx | Sallam_2021 | not_relevant | 0 | 0 | Plant DNA methylation study in maize; no amprenavir or PK/PD data. |
| PGx | Salomon_1981 | not_relevant | 0 | 0 | Paper concerns S49 lymphoma cAMP metabolism variants, with no relation to amprenavir PK/PD. |
| popPK | Saxton_2025 | irrelevant | 0 | 0 | A cardiovascular digital-twin modelling paper with no amprenavir or any toxicokinetic data; the numeric parameters are hemodynamic resistances/volumes, not drug kinetic values. |
| popPK | Seaton_2023 | irrelevant | 0 | 0 | The paper's PK modelling concerns VRC01, a different substance; no amprenavir is mentioned at all. |
| popPK | Shi_2013 | irrelevant | 0 | 0 | The paper concerns a crayfish immune protein and contains no toxicokinetic parameters for amprenavir. |
| PGx | Smirnova_2023 | not_relevant | 0 | 0 | Proteomics study of MBP interactome in HEK293T cells; no drug, PK/PD parameter, or gene variant effect on amprenavir is reported. |
| popPK | Srinivasan_2025 | irrelevant | 0 | 0 | The paper concerns ethanol metabolism in deer mice; amprenavir never appears in any capacity. |
| popPK | Stapf_2025 | irrelevant | 0 | 0 | The paper is entirely about ampicillin/sulbactam (different substance); amprenavir does not appear anywhere. |
| popPK | Stapleton_1996 | irrelevant | 0 | 0 | Paper is about AMP-activated protein kinase isoforms, with no amprenavir or kinetic parameters; the substance match is spurious ("AMP"). |
| popPK | Sugamori_1998 | irrelevant | 0 | 0 | The paper concerns dopamine D1-like receptor ligands, not amprenavir toxicokinetics, and contains no kinetic parameters for amprenavir. |
| popPK | Suleiman_2017 | irrelevant | 0 | 0 | Paper is about carcinin tissue distribution in crabs, with no amprenavir or kinetic parameters of any kind. |
| popPK | Suzuki_2026 | irrelevant | 0 | 0 | The substance is ampicillin (AMP), not amprenavir, and no kinetic parameters are reported — only microbiome/metabolome/immunological outcomes. |
| PGx | Tang_2022 | not_relevant | 0 | 0 | Study concerns antibiotic-induced bacterial c-di-AMP/STING inflammation; no host or bacterial gene variant alters amprenavir PK/PD parameters, and amprenavir is not mentioned. |
| popPK | Teyssières_2016 | irrelevant | 0 | 0 | The subject substances are oligourea foldamer antimicrobial peptide mimics studied in mice; amprenavir is not mentioned, and no amprenavir kinetic parameters appear. |
| PGx | Thapa_2023 | not_relevant | 1 | 5 | No drug studied; paper examines AHCY-1 mutation effects on SAM/SAH metabolism and lifespan in C. elegans, not pharmacokinetic/pharmacodynamic parameters of a drug like amprenavir. |
| PGx | Thomeas-McEwing_2022 | not_relevant | 6 | 3 | Drug is treprostinil, not amprenavir; associations with dose are not amprenavir PK/PD parameters. |
| PGx | Toyama_2016 | not_relevant | 0 | 0 | Paper is about AMPK-mediated mitochondrial fission, no relation to amprenavir PK/PD or pharmacogenomics. |
| popPK | Tung_2025 | irrelevant | 0 | 0 | The paper concerns ampicillin and ceftriaxone, not amprenavir, so there are no kinetic parameters for the subject substance. |
| popPK | Türeci_2011 | irrelevant | 0 | 0 | Paper concerns conservation of claudin-18 gene expression across species; amprenavir and any kinetic parameters are entirely absent. |
| popPK | Udeochu_2023 | irrelevant | 0 | 0 | Paper is about tau/cGAS neuroinflammation; amprenavir never appears, and kinetic values (brain:plasma 1.97, half-lives 12.4/10.3 h) belong to TDI-6570, partly residing in Extended Data Fig. 10/Supplementary Table 10. |
| popPK | Varani_2017 | irrelevant | 0 | 0 | Review of adenosine A1 receptor pharmacology with no kinetic parameters or mention of amprenavir. |
| popPK | Venema_1997 | irrelevant | 0 | 0 | This is a cloning/tissue-distribution study of aminopeptidase P with no amprenavir kinetic parameters reported. |
| popPK | Verlinden_2013 | irrelevant | 0 | 0 | The paper characterizes an allatotropin receptor in bumblebees; amprenavir does not appear anywhere in the evidence, and no kinetic parameters for it are reported. |
| popPK | Verlinden_2015 | irrelevant | 0 | 0 | The paper characterizes a dopamine receptor in Tribolium castaneum; amprenavir does not appear at all and no kinetic parameters for it are present. |
| PGx | Viollet_2012 | not_relevant | 0 | 0 | The paper is about metformin mechanisms in T2D, and does not touch amprenavir's pharmacokinetics/pharmacodynamics. |
| popPK | Vyas_2005 | irrelevant | 0 | 0 | The paper concerns amphotericin B (Amp B), a different substance; amprenavir never appears as the subject of any kinetic parameter. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper concerns porcine cGAS cloning and innate immunity with no amprenavir or kinetic parameters of any kind. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | Paper is a transcriptomics visualization tool with no pharmacogenomic effect on amprenavir PK/PD parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | A review of structural simplification in drug design; amprenavir is not the subject and no amprenavir kinetic parameters are reported. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | No toxicokinetic data for amprenavir; this is an insect immunity study with amprenavir absent entirely. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | Paper is about deep learning design of antimicrobial peptides; amprenavir does not appear in any kinetic context and no toxicokinetic parameters are present. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | Paper is about deep learning for anti-tubercular peptides; no amprenavir or pharmacogenomic PK/PD effects reported. |
| popPK | Wani_2021 | irrelevant | 0 | 0 | The substance studied is crocetin, not amprenavir; amprenavir is entirely absent from the evidence. |
| PGx | Wani_2021 | not_relevant | 0 | 0 | Paper studies crocetin's autophagy-mediated Aβ clearance; no amprenavir or pharmacogenomic PK/PD effects reported. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro BCRP inhibition assay comparing drugs, not a gene variant/genotype effect on amprenavir PK/PD. |
| popPK | Wilson_1976 | irrelevant | 0 | 0 | Paper concerns adenylate kinase isozymes in humans; amprenavir is not mentioned anywhere. |
| PGx | Wire_2006 | not_relevant | 0 | 0 | Paper discusses fosamprenavir/amprenavir PK and drug interactions but no gene variant/genotype effects on PK or PD parameters are reported. |
| PGx | Witte_2024 | not_relevant | 0 | 0 | The paper is about plant nucleotide signaling molecules, with no relation to amprenavir or pharmacogenomics of PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper studies the CHK1 inhibitor SRA737 and olaparib in ovarian cancer models; amprenavir does not appear and no kinetic parameters for it are present. |
| popPK | Yan_2013 | irrelevant | 0 | 0 | Shrimp p38 MAPK gene study with no kinetic parameters for amprenavir or any toxicokinetic data. |
| PGx | Yang_2017 | not_relevant | 0 | 0 | LKB1 polymorphism and AML prognosis are unrelated to amprenavir PK/PD. |
| popPK | Yin_2021 | irrelevant | 0 | 0 | Amprenavir is not the subject; all kinetic parameters reported belong to methamphetamine and ketamine in zebrafish. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | Amprenavir is not studied at all; "Amp" only appears as part of a plasmid vector name (pcDNA1/Amp), with no kinetic parameters for the substance. |
| popPK | Zhang_2003 | irrelevant | 0 | 0 | The paper is about human NAD biosynthesis enzyme structure and does not mention amprenavir or any kinetic parameters for it. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper reviews ALDH2 polymorphisms in cancer risk/progression and contains no data on amprenavir or any PK/PD parameter of it. |
| PGx | Zhang_2021_2 | not_relevant | 0 | 0 | Paper concerns Cd/Mo toxicity in duck cells; no amprenavir or pharmacogenomic PK/PD effect reported. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper concerns cGAS inhibitors (XL-3156/XL-3158, RU.521); amprenavir is not mentioned, so no amprenavir kinetic parameters exist. |
| PGx | Zhao_2025_2 | not_relevant | 0 | 0 | Paper concerns antifungal peptides, no pharmacogenomic effect on amprenavir PK/PD. |
| popPK | Zheng_2005 | irrelevant | 0 | 0 | No amprenavir kinetic parameters of any kind; the paper concerns a testis-specific gene, with amprenavir absent entirely. |
| popPK | Zhou_1990 | irrelevant | 0 | 0 | Paper is about cloning dopamine receptors; no amprenavir or kinetic parameters at all. |
| popPK | Zhou_2002 | irrelevant | 0 | 0 | The paper is a review about the neuropeptide PACAP with no mention of amprenavir or any kinetic parameters for it. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | No amprenavir or any kinetic parameter appears; the paper concerns crustacean antibacterial immunity. |
| PGx | Zong_2024 | not_relevant | 0 | 0 | Paper is about AARS1 lactylation of p53 in cancer, with no amprenavir PK/PD or pharmacogenomic data. |
| popPK | Zwicker_2012 | irrelevant | 0 | 0 | The paper is about psoriasin/koebnerisin (S100 proteins) in skin biology, with no amprenavir or kinetic data whatsoever. |
| popPK | deCamp_2026 | irrelevant | 0 | 0 | The paper concerns VRC01 antibody prophylaxis of HIV-1 acquisition with no amprenavir toxicokinetic parameters. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamprenavir%5D&body=Drug%3A%20amprenavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amprenavir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 21:41 UTC</sub>
