<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Trihexyphenidyl&quot;}]"></div>

# Trihexyphenidyl

- **generic name:** Trihexyphenidyl
- **T3DB:** [T3D2770](http://www.t3db.ca/toxins/T3D2770) · **DrugBank:** [DB00376](https://go.drugbank.com/drugs/DB00376) · **PubChem:** [CID 5572](https://pubchem.ncbi.nlm.nih.gov/compound/5572)
- **groups:** approved, investigational

## About

Trihexyphenidyl is only found in individuals that have used or taken this drug. It is one of the centrally acting muscarinic antagonists used for treatment of parkinsonian disorders and drug-induced extrapyramidal movement disorders and as an antispasmodic. Trihexyphenidyl is a selective M1 muscarinic acetylcholine receptor antagonist. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral.
Trihexyphenidyl is rapidly absorbed from the gastrointestinal tract.
- **Sources and uses:** Indicated for the treatment of parkinson's disease and extrapyramidal reactions caused by drugs.
- **Mechanism of toxicity:** Trihexyphenidyl is a selective M1 muscarinic acetylcholine receptor antagonist. It is able to discriminate between the M1 (cortical or neuronal) and the peripheral muscarinic subtypes (cardiac and glandular). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2770">T3DB T3D2770</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 144-11-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:518411">ChEBI 518411</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ishizaki_1998_reference](drugs/toxin_trihexyphenidyl/Trihexyphenidyl_Ishizaki1998_reference.md) | — | 1-compartment (no model) | 0 | Ishizaki J et al., Influence of ammonium chloride on the t…, The Journal of pharmacy and… (1998) | [10.1111/j.2042-7158.1998.tb07137.x](https://doi.org/10.1111/j.2042-7158.1998.tb07137.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Wei_1989_carbachol_induced_polyphosphoinositide_turnover](drugs/toxin_trihexyphenidyl/pd_Wei_1989_carbachol_induced_polyphosphoinositide_turnover.md) | carbachol-induced polyphosphoinositide turnover ← trihexyphenidyl · inhibition effect | — | Wei JW et al., Studies of blocking mechanisms of carba…, The International journal o… (1989) | [10.1016/0020-711x(89)90027-x](https://doi.org/10.1016/0020-711x(89)90027-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trihexyphenidyl).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB3 (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 08:10 | 16:04 | 0/1/0 | 1/0/0 | 0/0/0 | 310,933/8,488 | einfracz / qwen3.8-flash-next | 17 | 1/13 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 104 matched, 97 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burke_1985.pdf` | Burke RE et al., Pharmacokinetics of trihexyphenidyl aft…, Annals of neurology (1985) | popPK | 10 | [10.1002/ana.410180107](https://doi.org/10.1002/ana.410180107) | [4037749](https://pubmed.ncbi.nlm.nih.gov/4037749) | The text explicitly reports a quantitative elimination half-life of 3.7 +/- 0.4 hours for trihexyphenidyl in humans. |
| `Ishizaki_1998.pdf` | Ishizaki J et al., Influence of ammonium chloride on the t…, The Journal of pharmacy and… (1998) | popPK | 10 | [10.1111/j.2042-7158.1998.tb07137.x](https://doi.org/10.1111/j.2042-7158.1998.tb07137.x) | [9720625](https://pubmed.ncbi.nlm.nih.gov/9720625) | The paper explicitly reports quantitative tissue-plasma concentration ratios (Kp) for trihexyphenidyl in rats, with specific numerical values provided for lung tissue. |

<sub>queue written 2026-11-13 08:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2013 | irrelevant | 0 | 0 | The paper is a public health/epidemiological study regarding Medicaid coverage and smoking cessation in pregnant women, containing no toxicokinetic data for trihexyphenidyl. |
| popPK | Ananias_2011 | irrelevant | 0 | 0 | The paper concerns a bombesin radiopharmaceutical and contains no mention of trihexyphenidyl or its kinetic parameters. |
| PGx | Angrisani_2018 | not_relevant | 0 | 0 | The paper discusses the function of the DKC1 gene in cellular energy metabolism and cancer, with no mention of the drug trihexyphenidyl or any pharmacokinetic/pharmacodynamic parameters associated with it. |
| popPK | Atherly_2014 | irrelevant | 0 | 0 | The paper is a health policy study on Medicaid physician fees and preventive care, containing no toxicokinetic data for trihexyphenidyl. |
| PGx | Bin_2011 | not_relevant | 0 | 0 | The paper discusses drug resistance mutations in Plasmodium falciparum (malaria parasite) related to chloroquine, not human pharmacogenomics or the drug trihexyphenidyl. |
| popPK | Bohlen_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for furan and 2-methylfuran, not trihexyphenidyl. |
| PGx | Bossini-Castillo_2021 | not_relevant | 0 | 0 | The paper focuses on Genomic Risk Scores for systemic sclerosis susceptibility and does not involve trihexyphenidyl or its pharmacokinetics/pharmacodynamics. |
| popPK | Brocks_1999 | irrelevant | 3 | 1 | This is a review article summarizing general pharmacokinetic trends for a class of drugs, containing no specific numeric values for trihexyphenidyl itself. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper reports clinical outcomes and mentions trihexyphenidyl only as a co-administered treatment with a dosage, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for trihexyphenidyl. |
| popPK | Cordova_2013 | irrelevant | 0 | 0 | The paper is a health economics study on insurance decisions and contains no toxicokinetic data for trihexyphenidyl. |
| popPK | Cui_2026 | irrelevant | 0 | 0 | The paper is about machine learning graph neural networks for molecular activity prediction and does not report toxicokinetic parameters for trihexyphenidyl. |
| popPK | Cápka_1999 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying trihexyphenidyl in serum but reports no quantitative kinetic parameters (e.g., clearance, half-life, partition coefficients). |
| popPK | DE_1955 | irrelevant | 0 | 0 | no_text gate: only 34 chars of text extracted (&lt; 400) |
| PGx | Estrela_2008 | not_relevant | 0 | 0 | The paper studies ABCB1 population genetics and ancestry stratification in Brazilians, with no mention of trihexyphenidyl or any PK/PD parameters. |
| PGx | Goldenberg_2010 | not_relevant | 0 | 0 | The paper studies beta-blockers in Long-QT Syndrome, not trihexyphenidyl, and reports clinical risk factors rather than pharmacokinetic/pharmacodynamic parameters. |
| popPK | Gourni_2009 | irrelevant | 0 | 0 | The paper focuses on bombesin derivatives and their Technetium complexes, with no mention of trihexyphenidyl or related kinetic parameters. |
| PGx | Han_2021 | not_relevant | 0 | 0 | The paper investigates CYP3A4 variants' effects on acalabrutinib and ibrutinib metabolism, not trihexyphenidyl. |
| PGx | Haque_2017 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by a plant compound (ACA) and does not report pharmacogenomic effects on trihexyphenidyl PK or PD. |
| popPK | Harvey_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on Medicaid expansion and prenatal care access, containing no trihexyphenidyl toxicokinetic data. |
| popPK | Hawkins_2022 | irrelevant | 0 | 0 | The paper discusses breast pump claims and breastfeeding rates, with no mention of trihexyphenidyl or any toxicokinetic parameters. |
| popPK | Ishaque_2016 | irrelevant | 0 | 0 | The paper is a neuroimaging study on pediatric brain injury from drowning and contains no data or mention of trihexyphenidyl. |
| PGx | Jeong_2026 | not_relevant | 0 | 0 | The paper discusses RNF213 genotyping for intracranial arterial disease and does not involve trihexyphenidyl or its pharmacokinetics/pharmacodynamics. |
| PGx | Jiang_2019 | not_relevant | 0 | 0 | The paper investigates the heritability of cerebral blood flow in older twins and does not involve the drug trihexyphenidyl or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Ju_2017 | not_relevant | 0 | 0 | The paper investigates the drug warfarin, not trihexyphenidyl. |
| popPK | Kremer_2023 | irrelevant | 0 | 0 | The paper focuses on furan and 2-methylfuran metabolites in human urine after coffee intake, with no mention of trihexyphenidyl. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper is about hospital payment adjustments under Medicare's Value-Based Purchasing program and contains no information on trihexyphenidyl or toxicokinetics. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper describes a fluorescent probe for Acylaminoacyl-Peptide Hydrolase (APEH) and does not mention trihexyphenidyl or report any toxicokinetic parameters for it. |
| popPK | López-Roldán_2013 | irrelevant | 0 | 0 | The paper is an ecological risk assessment of river water pollutants, and trihexyphenidyl is not the subject of study nor are any toxicokinetic parameters reported for it. |
| PGx | Martínez-López_2026 | not_relevant | 0 | 0 | The paper investigates the genetic association of Complement C4 copy numbers with systemic sclerosis disease risk/subtypes, not the pharmacogenomics of trihexyphenidyl. |
| popPK | Matsuya_1994 | irrelevant | 0 | 0 | The paper is a clinical case report of vitamin E deficiency where trihexyphenidyl is mentioned only as a therapeutic agent, with no toxicokinetic parameters reported. |
| PGx | McErlane_2005 | not_relevant | 0 | 0 | The paper concerns gene therapy with CYP2B6 for AQ4N activation, unrelated to the drug trihexyphenidyl. |
| PGx | Mera_2007 | not_relevant | 0 | 0 | The paper focuses on the biochemical kinetics and structural analysis of the enzyme adenosyltransferase (ACA) involved in vitamin B12 metabolism, with no mention of the drug trihexyphenidyl or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Nagase_1983 | irrelevant | 0 | 0 | The paper concerns ovostatin purification and properties in chickens, with no mention of trihexyphenidyl or any toxicokinetic data. |
| PGx | Nongpiur_2019 | not_relevant | 0 | 0 | The paper focuses on genetic risk factors for primary angle closure glaucoma and diagnostic imaging parameters, with no mention of the drug trihexyphenidyl or its pharmacokinetics/pharmacodynamics. |
| popPK | Owen_1989 | irrelevant | 1 | 0 | The paper describes an analytical method for measuring trihexyphenidyl in fluids but does not report any quantitative kinetic parameters themselves. |
| PGx | Reshetnikov_2024 | not_relevant | 0 | 0 | The paper investigates genetic associations with fetal growth restriction (FGR), not the pharmacokinetics or pharmacodynamics of trihexyphenidyl. |
| popPK | Rivera-Calimlim_1976 | irrelevant | 1 | 1 | The paper reports on the absorption of chlorpromazine in rats treated with trihexyphenidyl, not the toxicokinetics of trihexyphenidyl itself. |
| popPK | Rivera-González_2022 | irrelevant | 0 | 0 | The paper is a health policy study on Medicaid funding and does not mention trihexyphenidyl or report any toxicokinetic parameters. |
| popPK | Roberts_1996 | irrelevant | 2 | 1 | Trihexyphenidyl (benzhexol) is a co-administered comparator/drug affecting the kinetics of levodopa; no kinetic parameters for trihexyphenidyl itself are reported. |
| PGx | Rodrigues_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects of SLCO1B1/SLCO2B1 variants on atorvastatin response, not trihexyphenidyl. |
| popPK | Satoh_1996 | irrelevant | 0 | 0 | The paper is an occupational exposure and health effects study for acetone, containing no mention of trihexyphenidyl or any kinetic parameters for it. |
| popPK | Seiber_2019 | irrelevant | 0 | 0 | The paper is about Medicaid enrollment disparities and contains no toxicokinetic data or parameters for trihexyphenidyl. |
| PGx | Sleiman_2022 | not_relevant | 0 | 0 | The paper discusses SHQ1 variants associated with dystonia and mentions a failed trial of levodopa, but does not investigate trihexyphenidyl or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Suarez-Kurtz_2007 | not_relevant | 0 | 0 | The paper discusses CYP3A5*3 genotyping methodology and population admixture, but does not investigate trihexyphenidyl or any drug-specific pharmacokinetic/pharmacodynamic effects. |
| popPK | Sue_1996 | irrelevant | 0 | 0 | Trihexyphenidyl is mentioned only as a therapeutic intervention for dyskinesia; no toxicokinetic parameters or data for the substance are reported. |
| PGx | Takei_2024 | not_relevant | 2 | 0 | The paper reports a drug-drug interaction case study involving CYP2D6 inhibition by levomepromazine, but does not report any pharmacogenomic effect (gene variant/genotype) on trihexyphenidyl's PK/PD parameters. |
| PGx | Tan_2023 | not_relevant | 0 | 0 | The study investigates genetic associations with rheumatoid arthritis susceptibility and bone metabolism markers, not pharmacogenomic effects on trihexyphenidyl PK/PD parameters. |
| PGx | Vargas-Toscano_2020 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (IC50, apoptosis, cell cycle) of trihexyphenidyl on glioblastoma stem cells for drug repurposing purposes, but does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wong_2014 | irrelevant | 0 | 0 | The paper is a health policy study on veterans' insurance enrollment and contains no toxicokinetic data or mention of trihexyphenidyl. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The paper investigates the association between AQP4 gene polymorphisms and schizophrenia risk/susceptibility in a case-control study, without reporting any pharmacokinetic or pharmacodynamic parameters of trihexyphenidyl. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper concerns the PK/PD modeling of acalabrutinib and its metabolite, with no mention or kinetic data for trihexyphenidyl. |
| PGx | Xu_2022 | not_relevant | 0 | 0 | The paper focuses on acalabrutinib, not trihexyphenidyl. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The paper focuses on bacterial RNA regulation (GcvB/yifK) and translation initiation, with no mention of trihexyphenidyl or human pharmacokinetics/pharmacodynamics. |
| popPK | Yang_2019 | irrelevant | 2 | 2 | The paper describes an analytical method for bioequivalence, reporting only confidence intervals for Cmax and AUC without providing specific numeric kinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for haloperidol; trihexyphenidyl is mentioned only as one of several co-administered antiparkinsonian drugs, with no kinetic data reported for it. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The paper is a review about flavonoids and acarbose, and does not mention trihexyphenidyl or report any kinetic parameters for it. |
| PGx | van_2006 | not_relevant | 0 | 0 | The paper reports CYP2D6 polymorphisms affecting metoclopramide metabolism causing dystonia; trihexyphenidyl is mentioned only as the rescue treatment, not the drug being studied. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrihexyphenidyl%5D&body=Drug%3A%20trihexyphenidyl%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_trihexyphenidyl/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 08:07 UTC</sub>
