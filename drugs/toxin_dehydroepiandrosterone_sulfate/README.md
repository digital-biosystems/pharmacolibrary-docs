<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Dehydroepiandrosterone sulfate&quot;}]"></div>

# Dehydroepiandrosterone sulfate

- **generic name:** Dehydroepiandrosterone sulfate
- **T3DB:** [T3D4242](http://www.t3db.ca/toxins/T3D4242) · **DrugBank:** [DB05804](https://go.drugbank.com/drugs/DB05804) · **PubChem:** [CID 12594](https://pubchem.ncbi.nlm.nih.gov/compound/12594)
- **groups:** investigational

## About

Dehydroepiandrosterone sulfate or DHEAS is the sulfated form of dehydroepiandrosterone (DHEA). This sulfation is reversibly catalyzed by sulfotransferase 2A1 (SULT2A1) primarily in the adrenals, the liver, and small intestine. In the blood, most DHEA is found as DHEAS with levels that are about 300 times higher than those of free DHEA. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** endogenous, ingestion
- **Sources and uses:** Investigated for use/treatment in asthma and burns and burn infections.
- **Mechanism of toxicity:** Although it predominantly functions as an endogenous precursor to more potent androgens such as testosterone and dihydroxytestosterone, DHEA (which is produced from DHEAS) has been found to possess some degree of androgenic activity in its own right, acting as a low affinity (Ki = 1 μM), weak partial agonist of the androgen receptor. DHEA has also been found to bind to and activate the ERα and ERβ estrogen receptors with Ki values of 1.1 μM and 0.5 μM, respectively. …
- **Health effects:** Some researchers believe DHEAS supplements might actually raise the risk of breast cancer, prostate cancer, heart disease, diabetes and stroke. DHEAS may stimulate tumor growth in types of cancer that are sensitive to hormones, such as some types of breast, uterine, and prostate cancer. …
- **Minimal risk levels (ATSDR):** Dehydroepiandrosterone sulfate levels above 1890 micromol/L or 700-800 µg/dL are highly suggestive of adrenal dysfunction.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4242">T3DB T3D4242</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 651-48-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16814">ChEBI 16814</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Dehydroepiandrosterone | metabolite | — (mass units only) | — | — | — | — |
| Testosterone | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bird_1984_reference](drugs/toxin_dehydroepiandrosterone_sulfate/DehydroepiandrosteroneSulfate_Bird1984_reference.md) | — | 1-compartment (no model) | 0 | Bird CE et al., Dehydroepiandrosterone sulfate: kinetic…, Clinical and investigative… (1984) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Haning_1991_reference](drugs/toxin_dehydroepiandrosterone_sulfate/DehydroepiandrosteroneSulfate_Haning1991_reference.md) | — | 1-compartment (no model) | 0 | Haning RV et al., Metabolic clearance rate of dehydroepia…, The Journal of clinical end… (1991) | [10.1210/jcem-72-5-1088](https://doi.org/10.1210/jcem-72-5-1088) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Schiebinger_1986_reference](drugs/toxin_dehydroepiandrosterone_sulfate/DehydroepiandrosteroneSulfate_Schiebinger1986_reference.md) | — | 1-compartment (no model) | 0 | Schiebinger RJ et al., The effect of serum prolactin on plasma…, The Journal of clinical end… (1986) | [10.1210/jcem-62-1-202](https://doi.org/10.1210/jcem-62-1-202) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dehydroepiandrosterone_sulfate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLCO1A2` unknown, `SLCO2B1` unknown | DrugBank actor |
| distribution | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| metabolism | liver | `CYP3A7` substrate, `SLCO1B1` unknown, `SLCO1B3` unknown, `SLCO2B1` unknown | DrugBank actor |
| excretion | kidney | `SLC22A8` unknown | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` inducer | DrugBank actor |
| — | ovary | `CYP19A1` inducer | DrugBank actor |
| — | testis | `CYP19A1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS2 (inducer), SLC10A6 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 22:15 | 30:13 | 0/3/0 | 0/0/0 | 0/0/0 | 468,373/29,877 | einfracz / qwen3.8-27b | 20 | 3/15 | 20/0 | 0 |

## Coverage

- **PubMed hits:** 171 matched, 130 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bird_1984.pdf` | Bird CE et al., Dehydroepiandrosterone sulfate: kinetic…, Clinical and investigative… (1984) | popPK | 10 |  | [6236000](https://pubmed.ncbi.nlm.nih.gov/6236000) | The paper reports quantitative metabolic clearance rates, plasma levels, and production rates for dehydroepiandrosterone sulfate in humans. |
| `Haning_1991.pdf` | Haning RV et al., Metabolic clearance rate of dehydroepia…, The Journal of clinical end… (1991) | popPK | 10 | [10.1210/jcem-72-5-1088](https://doi.org/10.1210/jcem-72-5-1088) | [1827126](https://pubmed.ncbi.nlm.nih.gov/1827126) | The paper explicitly reports the metabolic clearance rate of dehydroepiandrosterone sulfate (13.6 L/day) and related kinetic parameters in humans. |
| `Longcope_1996.pdf` | Longcope C, Dehydroepiandrosterone metabolism, The Journal of endocrinolog… (1996) | popPK | 10 |  | [8943796](https://pubmed.ncbi.nlm.nih.gov/8943796) | The text explicitly reports the metabolic clearance rate (MCR) for DHEAS as ~13 l/day (noted as 131/day in evidence, likely a typo for 13), which is a quantitative kinetic parameter. |
| `Arlt_1998.pdf` | Arlt W et al., Oral dehydroepiandrosterone for adrenal…, The Journal of clinical end… (1998) | popPK | 9 | [10.1210/jcem.83.6.4850](https://doi.org/10.1210/jcem.83.6.4850) | [9626121](https://pubmed.ncbi.nlm.nih.gov/9626121) | The paper reports quantitative pharmacokinetic parameters (AUC) for dehydroepiandrosterone sulfate (DHEA(S)) in humans. |
| `Longcope_1998.pdf` | Longcope C, Androgen metabolism and the menopause, Seminars in reproductive en… (1998) | popPK | 9 | [10.1055/s-2007-1016260](https://doi.org/10.1055/s-2007-1016260) | [9711675](https://pubmed.ncbi.nlm.nih.gov/9711675) | The paper reports a specific quantitative metabolic clearance rate (MCR) of ~12 L/day for DHEAS in humans. |
| `Schiebinger_1986.pdf` | Schiebinger RJ et al., The effect of serum prolactin on plasma…, The Journal of clinical end… (1986) | popPK | 9 | [10.1210/jcem-62-1-202](https://doi.org/10.1210/jcem-62-1-202) | [2999177](https://pubmed.ncbi.nlm.nih.gov/2999177) | The paper reports quantitative metabolic clearance rates (MCR) and production rates (PR) for dehydroepiandrosterone sulfate in human subjects. |
| `Straub_2004.pdf` | Straub RH et al., Renal clearance and daily excretion of…, Annals of the rheumatic dis… (2004) | popPK | 9 | [10.1136/ard.2003.014274](https://doi.org/10.1136/ard.2003.014274) | [15249323](https://pubmed.ncbi.nlm.nih.gov/15249323) | The paper reports quantitative renal clearance and excretion data for DHEAS in human patients, but specific numeric values are not explicitly listed in the abstract evidence provided. |
| `Frye_2000.pdf` | Frye RF et al., Sex differences in the pharmacokinetics…, Journal of clinical pharmac… (2000) | popPK | 8 |  | [10868310](https://pubmed.ncbi.nlm.nih.gov/10868310) | The paper reports quantitative pharmacokinetic parameters (Cmax, AUC, fold-increases) for dehydroepiandrosterone sulfate (DHEA-S) in humans, but specific numerical values for half-life, clearance, or distribution volume are not explicitly listed in the provided evidence. |
| `Lavallée_1997.pdf` | Lavallée B et al., Effect of insulin on serum levels of de…, Clinical endocrinology (1997) | popPK | 8 | [10.1046/j.1365-2265.1997.d01-1736.x](https://doi.org/10.1046/j.1365-2265.1997.d01-1736.x) | [9059564](https://pubmed.ncbi.nlm.nih.gov/9059564) | The study reports kinetic parameters (metabolic clearance rate, steady-state levels) for DHEA and DHEAS, but specific numeric values are not visible in the provided text evidence, likely residing in tables or figures not included. |
| `Zimmerman_2013.pdf` | Zimmerman Y et al., The pharmacokinetics and pharmacodynami…, The European journal of con… (2013) | popPK | 8 | [10.3109/13625187.2013.822061](https://doi.org/10.3109/13625187.2013.822061) | [23944295](https://pubmed.ncbi.nlm.nih.gov/23944295) | The paper reports pharmacokinetic changes (exposure) for DHEA and DHEA-S, but specific numeric kinetic parameters (e.g., clearance, half-life) are likely in full text/figures not fully detailed in the abstract snippet. |
| `Huang_2010.pdf` | Huang J et al., Kinetic analysis of bile acid sulfation…, Xenobiotica; the fate of fo… (2010) | popPK | 7 | [10.3109/00498250903514607](https://doi.org/10.3109/00498250903514607) | [20102295](https://pubmed.ncbi.nlm.nih.gov/20102295) | The paper provides in vitro Vmax and Km values for the sulfation of DHEA (the precursor to DHEA sulfate) by SULT2A1, which are valid toxicokinetic parameters for the substance's metabolic formation. |
| `Bonen_1987.pdf` | Bonen A et al., Pituitary, ovarian, and adrenal hormone…, International journal of sp… (1987) | popPK | 5 | [10.1055/s-2008-1025723](https://doi.org/10.1055/s-2008-1025723) | [3429092](https://pubmed.ncbi.nlm.nih.gov/3429092) | The paper reports qualitative kinetic changes (clearance reduction, time-course) for DHEA-S in humans but lacks numeric rate constants or half-life values in the provided evidence. |
| `Leblanc_2003.pdf` | Leblanc M et al., Bioavailability and pharmacokinetics of…, The Journal of clinical end… (2003) | popPK | 5 | [10.1210/jc.2003-022012](https://doi.org/10.1210/jc.2003-022012) | [12970301](https://pubmed.ncbi.nlm.nih.gov/12970301) | The paper reports pharmacokinetic parameters (clearance, half-life, bioavailability) for the parent compound DHEA, not DHEA sulfate (DHEA-S), which is mentioned only as a metabolite; no specific quantitative kinetic parameters (half-life, clearance, etc.) for DHEA-S itself are provided in the evidence. |

<sub>queue written 2026-11-09 22:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_1999 | irrelevant | 1 | 0 | The paper reports a qualitative finding that DHEA sulfate is transported by the LST-1 protein, but provides no quantitative kinetic parameters (like Km, Vmax, or rates) specifically for DHEA sulfate. |
| popPK | Acacio_2004 | irrelevant | 4 | 0 | The paper studies DHEA (the precursor) as the subject, reporting no changes in pharmacokinetic values but providing no numeric kinetic parameters or half-lives for DHEA sulfate itself in the text. |
| popPK | Arlt_1999 | irrelevant | 2 | 5 | The paper reports AUCs for DHEAS resulting from DHEA administration, but does not report specific kinetic parameters (half-life, clearance, rate constants) for DHEAS itself, and focuses on DHEA as the primary subject. |
| popPK | Arlt_2000 | irrelevant | 0 | 0 | The paper reports clinical outcomes and qualitative changes in hormone concentrations for DHEA (the substrate), but does not provide quantitative toxicokinetic parameters for dehydroepiandrosterone sulfate (DHEAS) such as half-life, clearance, or rate constants. |
| popPK | Bakos_2022 | relevant | 8 | 4 | The paper identifies dehydroepiandrosterone sulfate (DHEAS) as a substrate for OATP3A1 in in vitro cell assays and reports kinetic parameters (saturation, inhibition) with numeric values likely present in figures or text (specifically Km/Vmax implied for uptake), although specific numeric DHEAS constants are not explicitly listed in the provided text snippet. |
| popPK | Balasubramonian_2024 | irrelevant | 2 | 1 | The paper reports kinetic parameters (Km) for steroid sulfatase activity using estrone sulfate (E1S) as the substrate, not dehydroepiandrosterone sulfate (DHEAS), which is only mentioned in the introduction as a general example of a sulfated steroid. |
| PGx | Berstein_2002 | not_relevant | 3 | 3 | The study reports no significant difference in DHEA-S concentrations between CYP17 genotypes, thus failing to report a pharmacogenomic effect on a PK/PD parameter for the compound. |
| PGx | Berstein_2002_2 | not_relevant | 0 | 0 | The paper reports no significant difference in DHEA-S levels between CYP17 genotypes. |
| PGx | Boger-Megiddo_2008 | not_relevant | 0 | 0 | The paper reports associations between a genetic variant, endogenous hormone levels, and disease risk, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of dehydroepiandrosterone sulfate as a drug. |
| popPK | Bonen_1987 | relevant | 5 | 0 | The paper reports qualitative kinetic changes (clearance reduction, time-course) for DHEA-S in humans but lacks numeric rate constants or half-life values in the provided evidence. |
| popPK | Boudou_1995 | irrelevant | 0 | 0 | The paper reports on the metabolic interconversion of DHEA sulfate in dialysis patients but provides no quantitative toxicokinetic parameters (such as clearance, half-life, or rate constants) for dehydroepiandrosterone sulfate itself. |
| popPK | Carlström_2002 | irrelevant | 1 | 0 | The paper reports an exposure/pharmacokinetic association study linking DHEAS levels to albumin, but provides no specific quantitative kinetic parameters (like half-life, clearance rate constants, or volume of distribution) for DHEAS. |
| popPK | Cawley_2004 | irrelevant | 1 | 2 | The study reports pharmacokinetics of DHEA (precursor) and a specific metabolite (3alpha,5-cyclo), but provides no quantitative kinetic parameters (half-life, clearance, etc.) for dehydroepiandrosterone sulfate itself. |
| PGx | Chaudhary_2025 | not_relevant | 2 | 2 | The study analyzes genetic association with PCOS disease risk and compares biomarkers (like DHEA-S) between case and control groups, rather than reporting a pharmacogenomic effect of a genotype on the PK/PD parameters of dehydroepiandrosterone_sulfate as a drug. |
| popPK | Ci_2007 | irrelevant | 0 | 0 | The paper investigates the transport of cephalosporin antibiotics (ceftizoxime, cefazolin) and uses dehydroepiandrosterone sulfate only as a substrate for characterizing MRP4 activity, not as the subject of a toxicokinetic study. |
| popPK | Clarke_2002 | irrelevant | 0 | 0 | This is an epidemiological study of bone mineral density predictors that measures DHEA-S levels but provides no kinetic parameters (half-life, clearance, etc.) for the substance. |
| PGx | Cutolo_2000 | not_relevant | 2 | 0 | The paper discusses DHEAS levels and steroidogenic gene polymorphisms in the context of rheumatoid arthritis pathology, but does not report pharmacokinetic or pharmacodynamic parameters of DHEAS as an administered drug affected by a specific genotype. |
| popPK | Davidson_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 3-acetyl-7-oxo-dehydroepiandrosterone, not dehydroepiandrosterone_sulfate itself. |
| PGx | Deswal_2019 | not_relevant | 0 | 0 | The study investigates genetic associations with PCOS risk and LH levels, not the pharmacokinetics or pharmacodynamics of dehydroepiandrosterone sulfate (DHEA-S). |
| popPK | Di_2019 | irrelevant | 0 | 0 | The paper is an epidemiological study correlating blood hormone concentrations with concussion recovery time and symptoms; it reports no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for DHEA-S. |
| PGx | Donovan_2005 | not_relevant | 0 | 0 | The study investigates the effect of St John's Wort on steroid levels but does not report a pharmacogenomic effect (gene variant/genotype) on DHEAS PK/PD parameters. |
| popPK | Duszczyk-Budhathoki_2012 | irrelevant | 0 | 0 | The paper reports neurochemical changes (amino acid levels) in response to DHEAS and thimerosal, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for DHEAS itself. |
| popPK | Fang_2010 | irrelevant | 0 | 0 | The paper describes transporter localization and qualitative changes in serum levels in mice but does not report specific quantitative kinetic parameters (e.g., half-life, clearance, rate constants) for DHEAS. |
| PGx | Freire_2021 | not_relevant | 0 | 0 | The paper studies the effect of pesticide metabolites on serum DHEAS levels and gene-environment interactions, not the pharmacokinetic or pharmacodynamic parameters of DHEAS used as a drug. |
| popPK | Fritz_1986 | irrelevant | 0 | 0 | The paper reports metabolic clearance rates for dehydroepiandrosterone (DHEA) and estradiol, but dehydroepiandrosterone sulfate (DHEA-S) is only reported as having "no significant change" in concentration without any specific quantitative kinetic parameters (clearance, half-life, etc.) provided for DHEA-S. |
| popPK | Frye_2000 | relevant | 8 | 2 | The paper reports quantitative pharmacokinetic parameters (Cmax, AUC, fold-increases) for dehydroepiandrosterone sulfate (DHEA-S) in humans, but specific numerical values for half-life, clearance, or distribution volume are not explicitly listed in the provided evidence. |
| popPK | Gambineri_2006 | irrelevant | 0 | 0 | The paper reports an association between genetic polymorphism and hormone levels in a clinical population, containing no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for dehydroepiandrosterone sulfate. |
| PGx | Gambineri_2006 | not_relevant | 0 | 0 | The paper investigates the association between a HSD11B1 genotype and dehydroepiandrosterone sulfate (DHEA-S) as an endogenous hormonal biomarker in PCOS, not as a drug administered to the patient. |
| popPK | Gaum_2020 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting associations between PCB exposure and DHEAS concentrations, but it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) for dehydroepiandrosterone sulfate. |
| PGx | Grube_2007 | not_relevant | 0 | 0 | The study investigates transporter protein expression and functional interaction in placenta, but does not report on genetic variants, genotypes, or pharmacogenomic effects on DHEAS pharmacokinetics. |
| PGx | Grube_2018 | not_relevant | 0 | 0 | The paper is a review of neurosteroid transporters in the brain and does not report pharmacogenomic effects of gene variants on the PK or PD of DHEAS. |
| popPK | Hubinont_1988 | irrelevant | 0 | 0 | The paper is an observational case report on a pregnant woman with renal failure and does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for dehydroepiandrosterone_sulfate, only qualitative trends in serum concentration. |
| PGx | Hung_2014 | not_relevant | 0 | 0 | The paper reports in silico screening of Traditional Chinese Medicine compounds to inhibit CYP2C9 for anti-aging purposes, not the pharmacokinetic or pharmacodynamic effects of a gene variant/genotype on dehydroepiandrosterone sulfate (DHEA-S). |
| popPK | Hvizdak_2023 | irrelevant | 2 | 2 | The study measures enzyme inhibition constants ($K_i$) for PFAS compounds (e.g., PFOA, PFOS) against CYP3A7, not the kinetic parameters of DHEA-S itself, which is used only as a substrate in the activity assay. |
| popPK | Isidori_2003 | irrelevant | 0 | 0 | The paper reports changes in serum DHEAS concentrations over time in response to GH therapy but does not provide any quantitative toxicokinetic parameters (e.g., half-life, clearance, or rate constants). |
| PGx | Jääskeläinen_2008 | not_relevant | 0 | 0 | The study investigates the genetic association with basal hormone levels and metabolic syndrome, not the pharmacokinetics or pharmacodynamics of dehydroepiandrosterone_sulfate administration. |
| popPK | Kandel_2021 | relevant | 3 | 8 | The paper reports in vitro enzymatic kinetics (Vmax, Km, IC50, kinact) for CYP3A7-mediated DHEA-S oxidation, which are quantitative parameters of the substance's metabolism, though the study is in vitro and focuses on inhibitor effects rather than systemic toxicokinetic parameters. |
| PGx | Kavardzhikova_2010 | not_relevant | 0 | 0 | The paper studies phenotypes of polycystic ovary syndrome and hormone levels, not pharmacogenomic effects on the PK/PD of dehydroepiandrosterone sulfate. |
| popPK | Kirschner_1983 | relevant | 4 | 0 | The paper discusses androgen clearance kinetics in women (including DHEA-sulfate) but provides no numeric parameter values in the evidence. |
| popPK | Koritnik_1983 | irrelevant | 0 | 0 | The paper describes a radioimmunoassay and reports circulating concentrations of DHAS, but does not provide quantitative toxicokinetic parameters such as half-life, clearance rate constants, or partition coefficients. |
| popPK | La_2001 | irrelevant | 0 | 0 | The paper is an epidemiological/review discussion of breast cancer risk factors and does not report any quantitative toxicokinetic parameters (half-life, clearance, etc.) for dehydroepiandrosterone sulfate. |
| PGx | Lakatošová_2022 | not_relevant | 0 | 0 | The paper studies the relationship between endogenous steroid hormone levels (including DHEA-S) and autism behavioral traits, not the pharmacokinetics or pharmacodynamics of exogenous dehydroepiandrosterone sulfate as a drug. |
| PGx | Lam_2014 | not_relevant | 0 | 0 | The study investigates insulin metabolism in PCOS and does not report PK or PD parameters for dehydroepiandrosterone_sulfate. |
| popPK | Lavallée_1997 | relevant | 8 | 3 | The study reports kinetic parameters (metabolic clearance rate, steady-state levels) for DHEA and DHEAS, but specific numeric values are not visible in the provided text evidence, likely residing in tables or figures not included. |
| popPK | Leblanc_2002 | irrelevant | 2 | 0 | The paper describes a pharmacokinetic study of DHEA (the precursor) and measures DHEA-S levels qualitatively (as increased or plateauing), but provides no numeric quantitative kinetic parameters (such as half-life, clearance, or rate constants) for DHEA-S in the evidence text. |
| popPK | Leblanc_2003 | irrelevant | 5 | 2 | The paper reports pharmacokinetic parameters (clearance, half-life, bioavailability) for the parent compound DHEA, not DHEA sulfate (DHEA-S), which is mentioned only as a metabolite; no specific quantitative kinetic parameters (half-life, clearance, etc.) for DHEA-S itself are provided in the evidence. |
| PGx | Li_2019 | not_relevant | 1 | 0 | The paper is a review of CYP3A7 biology and general metabolism, discussing DHEA-S as an endogenous substrate rather than reporting a specific gene variant's effect on the pharmacokinetics of DHEA-S as a drug. |
| PGx | Liang_2022 | not_relevant | 2 | 5 | The study investigates the causal effect of DHEAS levels on lipid metabolism, not the impact of genetic variants on DHEAS pharmacokinetics or pharmacodynamics. |
| popPK | Lundgren_1996 | irrelevant | 1 | 0 | The paper measures plasma concentrations of dehydroepiandrosterone sulfate but does not report specific kinetic parameters (clearance, half-life, partition coefficients) for this substance, only for estrone/estrone sulfate. |
| PGx | Malagnino_2018 | not_relevant | 2 | 2 | The paper characterizes a transporter splice variant (LST-3TM12) and its substrate affinity for DHEA-S, but does not report how a human gene variant/genotype alters PK/PD parameters. |
| popPK | Martel_1994 | irrelevant | 0 | 0 | The paper reports the tissue distribution of enzymatic activities required to metabolize DHEA-S, but it does not provide quantitative kinetic parameters (such as rate constants, half-lives, or partition coefficients) for DHEA-S disposition. |
| popPK | Matsubara_2014 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of abiraterone, and DHEA-S is measured only as a pharmacodynamic marker of androgen suppression, not as the subject of kinetic parameter estimation. |
| PGx | Medwid_2021 | not_relevant | 0 | 0 | The paper reports no association between SLCO2B1 genetic variants and DHEAS plasma concentrations. |
| popPK | Meno-Tetang_1999 | irrelevant | 1 | 0 | The paper reports pharmacokinetic parameters for prednisolone, not for the subject substance dehydroepiandrosterone sulfate (DHEA-SO4), which was used as a co-exposure to test interactions. |
| popPK | Meno-Tetang_2001 | irrelevant | 0 | 0 | The study measures DHEA-S concentrations only to confirm exposure to DHEA (prasterone), but reports quantitative pharmacokinetic parameters only for prednisolone. |
| popPK | Miller_1997 | irrelevant | 0 | 0 | The paper is a cross-sectional biomarker study correlating FSH levels with aging markers, reporting static concentrations of DHEAS but containing no kinetic parameters (half-life, clearance, etc.) for dehydroepiandrosterone_sulfate. |
| popPK | Nishimura_2008 | irrelevant | 0 | 0 | The paper reports kinetic parameters (Km, Vmax) for zidovudine (AZT), while dehydroepiandrosterone sulfate (DHEAS) acts solely as a modulator/co-exposure and has no reported toxicokinetic parameters itself. |
| popPK | Noguchi_2017 | irrelevant | 1 | 0 | The paper focuses on levocetirizine kinetics, with dehydroepiandrosterone sulfate serving only as a substrate for inhibitor studies without providing quantitative kinetic parameters for its own disposition. |
| popPK | Parker_2000 | irrelevant | 0 | 0 | The paper reports the tissue localization (immunohistochemistry) of the enzyme DHEA sulfotransferase in rhesus macaques, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for dehydroepiandrosterone sulfate. |
| PGx | Pehlivanov_2007 | not_relevant | 0 | 0 | The study investigates the clinical characteristics of PCOS phenotypes and measures DHEA-S levels, but does not investigate pharmacogenomic effects (gene variants) on DHEA-S pharmacokinetics or pharmacodynamics. |
| popPK | Petrylak_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of the drug orteronel and reports DHEA-S only as a biomarker of efficacy without providing quantitative kinetic parameters (half-life, clearance, etc.) for DHEA-S itself. |
| popPK | Ponjee_1994 | irrelevant | 0 | 0 | The study measures changes in serum DHEAS concentrations before and after a marathon to infer physiological stress effects, but it does not provide quantitative toxicokinetic parameters such as half-life, clearance, or rate constants for DHEAS itself. |
| popPK | Prothon_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of AZD7594, and dehydroepiandrosterone sulfate is measured only as a secondary biomarker with no kinetic parameters reported for it. |
| popPK | Prothon_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for velsecorat (AZD7594), not dehydroepiandrosterone sulfate (DHEA-S), which was only measured as an unaffected pharmacodynamic biomarker. |
| popPK | Pugeat_1989 | irrelevant | 0 | 0 | The paper is a general review of androgen metabolism and binding proteins without reporting specific quantitative toxicokinetic parameters (half-life, clearance, etc.) for DHEA sulfate. |
| PGx | Ramanathan_2021 | not_relevant | 0 | 0 | The paper reports an association between gene variants (DENND1A, THADA, FSHR) and elevated endogenous DHEAS levels in PCOS patients, which is a disease phenotype/physiological parameter, not a PK/PD response to exogenous dehydroepiandrosterone_sulfate administration. |
| PGx | Rebbeck_2010 | not_relevant | 1 | 1 | The study analyzes the effect of genotypes on endogenous steroid hormone levels (physiology), not the pharmacokinetic or pharmacodynamic parameters of dehydroepiandrosterone sulfate as an administered drug. |
| popPK | Santos_2010 | irrelevant | 0 | 0 | The study reports pharmacological and immunological outcomes (parasite load, cytokines) in rats, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, concentration-time profile) for DHEA-S. |
| PGx | Schuetz_1993 | not_relevant | 0 | 0 | The paper studies CYP3A7 expression in placenta/endometrium and its physiological role in steroid metabolism, but it does not report a pharmacogenomic effect of gene variants on PK/PD parameters for dehydroepiandrosterone_sulfate. |
| PGx | Schuit_2005 | not_relevant | 0 | 0 | The paper explicitly states that no association between ESR1 genotypes and dehydroepiandrosterone sulfate (DHEA-S) concentrations was observed. |
| popPK | Senner_1985 | irrelevant | 2 | 0 | The paper focuses on DHEA (not the sulfate form) in baboons and models placental clearance based on blood flow, but no numeric kinetic parameters are provided in the evidence. |
| popPK | Shen_2017 | irrelevant | 1 | 0 | The paper reports changes in plasma DHEAS levels in response to OATP inhibition (pharmacokinetics of a marker/drug interaction) but does not provide standalone toxicokinetic parameters (half-life, clearance, partition coefficients) for DHEAS as a subject substance, and no numeric values for DHEAS kinetics are present in the evidence. |
| PGx | Shui_2025 | not_relevant | 0 | 0 | The paper reports a Mendelian randomization study on DHEA-S as a metabolite and AMD risk, not a pharmacokinetic/pharmacodynamic parameter of DHEA-S as a drug. |
| popPK | Stanczyk_2009 | irrelevant | 0 | 0 | The study subjects were dehydroepiandrosterone (DHEA), not dehydroepiandrosterone sulfate (DHEA-S), and DHEA-S is only reported as a metabolite with concentration levels rather than specific kinetic parameters for DHEA-S itself. |
| popPK | Strajhar_2019 | irrelevant | 0 | 0 | The paper investigates the effect of d-amphetamine/lisdexamfetamine on steroid levels, with dehydroepiandrosterone sulfate acting as a responder biomarker rather than the subject substance for which toxicokinetic parameters are reported. |
| popPK | Straub_2004 | relevant | 9 | 3 | The paper reports quantitative renal clearance and excretion data for DHEAS in human patients, but specific numeric values are not explicitly listed in the abstract evidence provided. |
| popPK | Strott_2003 | irrelevant | 0 | 0 | The paper is a review focused on the physiological functions of cholesterol sulfate, with dehydroepiandrosterone sulfate mentioned only as a comparator in plasma concentrations, and no quantitative kinetic parameters for DHEA sulfate are reported. |
| PGx | Suzuki_2003 | not_relevant | 0 | 0 | The paper describes the transport mechanism of DHEAS by the ABCG2 protein but does not report on genetic variants or pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Szmulewitz_2018 | irrelevant | 0 | 0 | The paper reports on abiraterone acetate pharmacokinetics and uses dehydroepiandrosterone sulfate (DHEA-S) only as a biomarker for androgen levels, providing no kinetic parameters for DHEA-S itself. |
| PGx | Tin_2024 | not_relevant | 0 | 0 | The study investigates the association between alcohol intake and DHEAS levels, using a genetic variant (ADH1B) only as an instrument for alcohol consumption (Mendelian Randomization), not to study the pharmacogenomics of DHEAS itself. |
| popPK | Tomaszewski_2009 | irrelevant | 0 | 0 | The paper reports epidemiological associations between circulating DHEA-S levels and renal function, but contains no toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Wang_2005 | irrelevant | 1 | 0 | The paper reports changes in serum and urine concentrations of dehydroepiandrosterone sulfate due to diet but explicitly states that clearance was measured for testosterone (not DHEA-S) and provides no quantitative kinetic parameters (half-life, clearance, etc.) for DHEA-S. |
| popPK | Werkström_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD5423, and DHEA-S is mentioned only as a biomarker with no kinetic parameters reported. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study is an epidemiological association analysis of serum DHEAS levels and HBV clearance outcomes, reporting no pharmacokinetic parameters (e.g., half-life, clearance, volume of distribution) for DHEAS itself. |
| PGx | Wu_2014 | not_relevant | 0 | 0 | The study examines the association between DHEAS levels and hepatitis B clearance; it does not report a pharmacokinetic or pharmacodynamic effect of DHEAS modulated by a gene variant. |
| PGx | Xie_2019 | not_relevant | 0 | 0 | The paper mentions DHEA sulfate only as evidence of cytosolic contamination in microsomal preparations and does not investigate pharmacogenomic effects on its PK/PD parameters. |
| popPK | Xie_2021 | irrelevant | 0 | 0 | The paper is an epidemiological cohort study assessing associations between baseline hormone levels and cancer survival, reporting hazard ratios rather than any quantitative toxicokinetic parameters for dehydroepiandrosterone_sulfate. |
| PGx | Yamakita_2002 | not_relevant | 0 | 0 | The paper is a case report on an adrenocortical adenoma and does not report any pharmacogenomic effect of a gene variant on the PK or PD of dehydroepiandrosterone_sulfate. |
| popPK | Zhao_2000 | irrelevant | 0 | 0 | The study measures circulating concentrations of DHEAS as a correlate for leptin levels but does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for DHEAS. |
| popPK | Zimmerman_2013 | relevant | 8 | 2 | The paper reports pharmacokinetic changes (exposure) for DHEA and DHEA-S, but specific numeric kinetic parameters (e.g., clearance, half-life) are likely in full text/figures not fully detailed in the abstract snippet. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdehydroepiandrosterone_sulfate%5D&body=Drug%3A%20dehydroepiandrosterone_sulfate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dehydroepiandrosterone_sulfate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 22:07 UTC</sub>
