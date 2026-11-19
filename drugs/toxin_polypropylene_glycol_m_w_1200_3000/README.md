<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Polypropylene glycol (m w 1,200-3,000)&quot;}]"></div>

# Polypropylene glycol (m w 1,200-3,000)

- **generic name:** Polypropylene glycol (m w 1,200-3,000)
- **T3DB:** [T3D4917](http://www.t3db.ca/toxins/T3D4917) · **PubChem:** [CID 32881](https://pubchem.ncbi.nlm.nih.gov/compound/32881)

## About

Polypropylene glycol (m w 1,200-3,000) is used as a food additive [EAFUS] ("EAFUS: Everything Added to Food in the United States. [http://www.eafus.com/]"). Polypropylene glycol (m w 1,200-3,000) belongs to the family of Secondary Alcohols. These are compounds containing a secondary alcohol functional group, with the general structure HOC(R)(R') (R,R'=alkyl, aryl).

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4917">T3DB T3D4917</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 25322-69-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:53262">ChEBI 53262</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 16:24 | 15:43 | 0/0/0 | 0/0/0 | 0/0/0 | 487,922/17,214 | ollama / glm-5.3-flash | 16 | 4/12 | 16/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 54 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shi_2022.pdf` | Shi M et al., Quantitative analysis of polypropylene…, Journal of chromatography. A (2022) | popPK | 5 | [10.1016/j.chroma.2022.463214](https://doi.org/10.1016/j.chroma.2022.463214) | [35709604](https://pubmed.ncbi.nlm.nih.gov/35709604) | Cellular pharmacokinetics of PPG (including PPG2K, in the 1200–3000 MW range) in MCF-7 cells is reported, but the study is in vitro and no numeric kinetic parameters appear in the provided evidence (likely in figures). |

<sub>queue written 2026-11-14 16:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baman_2022 | irrelevant | 0 | 0 | Paper on mobile health arrhythmia detection devices; polypropylene glycol is not mentioned and no toxicokinetic parameters are present. |
| popPK | Basu_2018 | irrelevant | 0 | 0 | The paper concerns pharmacokinetics/dynamics of insulin aspart in humans with type 1 diabetes; polypropylene glycol appears only (if at all) as a reagent mention (polyethylene glycol precipitation), with no kinetic parameters for the subject substance. |
| popPK | Belolipetskaia_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of propranolol, with polypropylene glycol not appearing as the subject substance. |
| popPK | Boers_2017 | irrelevant | 0 | 0 | The substance polypropylene glycol (MW 1200-3000) does not appear anywhere in this paper; 'PPG' here means postprandial glucose, and kinetic parameters concern glucose/guar gum fluxes in humans, not the test substance. |
| popPK | Carvalho_2010 | irrelevant | 0 | 0 | Polypropylene glycol appears only as a formulation excipient (PPG-5-CETETH-20 surfactant) in a drug delivery study with no kinetic parameters for the substance itself. |
| popPK | Cherukula_2019 | irrelevant | 1 | 0 | This is a nanoparticle drug-delivery study of PHEA-PEG-glycine (PPG) NPs carrying IR-780 dye, not the industrial substance polypropylene glycol (MW 1200–3000); no toxicokinetic parameters for that substance are reported, and any nanoparticle distribution imaging is qualitative with values only in supplementary figures not provided. |
| popPK | Chiang_2024 | irrelevant | 0 | 0 | A review of sleep apnea wearable devices with no toxicokinetic parameters for polypropylene glycol; the substance is not mentioned at all. |
| popPK | Collins_2013 | irrelevant | 1 | 1 | PPG is only a structural block of a drug-delivery polymer; the kinetics reported (dethreading, cholesterol efflux) are not toxicokinetic parameters for PPG itself, and no numeric values are provided in the evidence. |
| popPK | Corcoran_1987 | irrelevant | 0 | 0 | The paper measures fingertip blood flow by thermal clearance in humans; polypropylene glycol is not studied and no toxicokinetic parameters are reported. |
| popPK | Craigmill_2004 | irrelevant | 0 | 0 | "PPG" in this paper is procaine penicillin G, not polypropylene glycol (MW 1200–3000); no kinetic parameters for the target substance. |
| popPK | Fang_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of saxagliptin vs acarbose in diabetes with no toxicokinetic parameters for polypropylene glycol; the polypropylene glycol substance does not appear at all. |
| popPK | Flint_2011 | irrelevant | 0 | 0 | The paper concerns liraglutide's effects on glucose, insulin and gastric emptying in humans; polypropylene glycol (MW 1200-3000) does not appear anywhere, and no toxicokinetic parameters for it are present. |
| popPK | Gao_2016 | irrelevant | 1 | 0 | Polypropylene glycol (Pluronic F68) is only a surface-coating excipient for paclitaxel; no kinetic parameters are reported for it, and no numeric values appear. |
| popPK | Gu_2016 | irrelevant | 0 | 0 | This is a clinical efficacy/safety study of saxagliptin; polypropylene glycol is not mentioned and no kinetic parameters for it are reported. |
| popPK | Guevara_1998 | irrelevant | 0 | 0 | The paper studies TIPS effects on renal function in cirrhosis; polypropylene glycol Mw 1200-3000 is not mentioned and no kinetic parameters of it exist. |
| popPK | Gupta_2004 | irrelevant | 0 | 0 | The paper concerns insulin resistance markers in humans; polypropylene glycol MW 1200–3000 does not appear at all, and no kinetic parameters for it are present. |
| popPK | Heise_2020 | irrelevant | 0 | 0 | The paper reports PK parameters for ultra rapid insulin lispro, aspart analogues and glucose, not for polypropylene glycol (MW 1200-3000), which does not appear at all. |
| popPK | Hernández-Capistrán_2024 | irrelevant | 0 | 0 | This is a review of wearable devices for autism; "clearance" refers to FDA device clearance, not pharmacokinetic clearance, and no toxicokinetic parameters for polypropylene glycol appear. |
| popPK | Hompesch_2012 | irrelevant | 0 | 0 | The paper studies insulin lispro with hyaluronidase in type 2 diabetes; polypropylene glycol appears nowhere as subject substance, vehicle, or parameter. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The paper concerns insulin glargine/lixisenatide pharmacodynamics in diabetic patients; polypropylene glycol is not the subject substance and no kinetic parameters for it appear. |
| popPK | Jalan_1996 | irrelevant | 0 | 0 | Paper concerns renal sodium handling after TIPSS in cirrhotic patients; polypropylene glycol MW 1200–3000 is nowhere mentioned and no kinetic parameters for it exist. |
| popPK | Kanado_2019 | irrelevant | 0 | 0 | The paper concerns P-glycoprotein regulation and digoxin renal clearance; polypropylene glycol MW 1200-3000 is not the subject substance and no parameters for it appear. |
| popPK | Kaushal_2023 | irrelevant | 0 | 0 | Review on Leishmania surface proteins with no toxicokinetic data for polypropylene glycol. |
| popPK | Kumar_2019 | irrelevant | 0 | 0 | Polypropylene glycol appears only as part of a Pluronic (PEG-PPG-PEG) excipient in solid dispersions; all pharmacokinetic parameters (AUC, exposure) belong to IIIM-290, not PPG itself. |
| popPK | Kunii_2007 | irrelevant | 2 | 2 | PEG-PPG-PEG serves only as a nanoparticle carrier; the kinetic parameters (AUC, MRT) pertain to camptothecin, not polypropylene glycol, and values are not quantitatively given. |
| popPK | Lamos_2013 | irrelevant | 0 | 0 | This is a review of canagliflozin; polypropylene glycol does not appear as the subject substance and no kinetic parameters for it are reported. |
| popPK | Lazarowski_2007 | irrelevant | 0 | 0 | The paper concerns P-glycoprotein and refractory epilepsy; polypropylene glycol is not mentioned and no toxicokinetic parameters for it appear. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | Polypropylene/propylene glycol appears only as a formulation vehicle for cordycepin, with no kinetic parameters for the substance itself. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper concerns penicillin G in sows; polypropylene glycol is absent from the evidence. |
| popPK | Li_2021 | irrelevant | 1 | 1 | The kinetic subject is poloxamer 124, a different substance from polypropylene glycol MW 1200-3000, and no numeric half-life or other PK values appear in the abstract. |
| popPK | Meiffren_2019 | irrelevant | 0 | 0 | The paper concerns insulin glargine/lispro PK in diabetic patients; polypropylene glycol is not the subject substance and no kinetic parameters for it appear. |
| popPK | Miyashita_2013 | irrelevant | 0 | 0 | "PPG" here means pylorus-preserving gastrectomy, not polypropylene glycol; the paper studies H. pylori clearance after surgery with no toxicokinetic parameters for the substance. |
| popPK | Mofo_2018 | irrelevant | 0 | 0 | This is a pharmacogenetics review of OCT1 polymorphisms and metformin response; polypropylene glycol (MW 1200–3000) is not the subject and no kinetic parameters for it appear. |
| popPK | Moreno_2023 | irrelevant | 0 | 0 | The paper studies NBD amphiphile interactions with P-glycoprotein; polypropylene glycol merely appears (garbled text) as a reagent/vehicle, with no toxicokinetic parameters for it. |
| popPK | Neumiller_2010 | irrelevant | 0 | 0 | The paper is a review of saxagliptin; polypropylene glycol has no role and no kinetic parameters for it appear. |
| popPK | Nielsen_1981 | irrelevant | 0 | 0 | The paper is about turkey erythrocyte adenylate cyclase biochemistry; polypropylene glycol does not appear and no toxicokinetic parameters are present. |
| popPK | Owens_2020 | irrelevant | 2 | 3 | The paper is a review of rapid-acting insulin analogues (faster aspart, ultra-rapid lispro, BioChaperone Lispro); polypropylene glycol (MW 1200–3000) does not appear as the subject substance, and the numeric pharmacokinetic parameters reported relate to insulins, not to PPG. |
| popPK | Partsch_1988 | irrelevant | 0 | 0 | Paper on venous leg ulcers pathogenesis; PPG here means photoplethysmography, not polypropylene glycol, and no kinetic parameters for the substance appear. |
| popPK | Peng_2014 | irrelevant | 0 | 0 | "PPG" here is PAMAM-PEG, not polypropylene glycol MW 1200–3000, and kinetics concern methotrexate, not the substance. |
| popPK | Pettis_2011 | irrelevant | 0 | 0 | The paper reports insulin pharmacokinetics in diabetic patients; polypropylene glycol does not appear as a study substance. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | A hypothesis/review paper on pterygopalatine ganglion cell death in dry eye with no toxicokinetic parameters for polypropylene glycol of any kind. |
| popPK | Ryan_2005 | irrelevant | 0 | 0 | The paper concerns pramlintide pharmacokinetics in diabetes patients; polypropylene glycol appears not at all, and no kinetic parameters for it are present. |
| popPK | Sarkar_2017 | irrelevant | 0 | 0 | Poly(propylene glycol) appears only as a structural component of a nanoparticle vehicle; no quantitative toxicokinetic parameters for it are reported. |
| popPK | Shi_2022 | relevant | 5 | 2 | Cellular pharmacokinetics of PPG (including PPG2K, in the 1200–3000 MW range) in MCF-7 cells is reported, but the study is in vitro and no numeric kinetic parameters appear in the provided evidence (likely in figures). |
| popPK | Shimoyama_2007 | irrelevant | 0 | 0 | Surgical/nutritional outcome study with no toxicokinetic parameters for polypropylene glycol. |
| popPK | Smith_2023 | irrelevant | 0 | 0 | The paper reports insulin clearance in humans; polypropylene glycol (MW 1200-3000) never appears as subject, vehicle, or comparator. |
| popPK | Song_2018 | irrelevant | 0 | 0 | "PPG" here is a polyamine-gEFITINIB prodrug, not polypropylene glycol; the paper reports no kinetic parameters (half-life, clearance, partition coefficients) for polypropylene glycol, only IC50/apoptosis values and fluorescence release kinetics in cells/mice. |
| popPK | Soroker_2000 | irrelevant | 0 | 0 | No polypropylene glycol and no quantitative toxicokinetic parameters; the paper is about hydrocarbon circulation in desert ants. |
| popPK | Su_2020 | irrelevant | 0 | 0 | Clinical biomarker study of 1,5-anhydroglucitol in coronary plaque rupture; polypropylene glycol (mw 1200-3000) is not mentioned, and no kinetic parameters of any substance are reported. |
| popPK | Sumners_2014 | irrelevant | 0 | 0 | This paper studies glucose clearance and pancreas physiology in chickens; polypropylene glycol does not appear as a subject substance or with any kinetic parameters (only possibly as a vehicle). |
| popPK | Thrivikraman_2025 | irrelevant | 0 | 0 | PPG appears only as part of a drug-delivery excipient (PEG-PPG-PEG copolymer), with no kinetic parameters reported for polypropylene glycol itself. |
| popPK | Trujillo_2017 | irrelevant | 0 | 0 | The paper concerns lixisenatide pharmacokinetics/efficacy; polypropylene glycol appears nowhere as the subject substance and no kinetic parameters for it are reported. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper concerns berberine's effect on glycemia in diabetic rats; polypropylene glycol (MW 1200-3000) is not a subject substance and no kinetic parameters for it appear. |
| popPK | Zambrowicz_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of LX4211 (SGLT1/2 inhibitor) in diabetic patients; polypropylene glycol never appears and no kinetic parameters for it are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolypropylene_glycol_m_w_1200_3000%5D&body=Drug%3A%20polypropylene_glycol_m_w_1200_3000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_polypropylene_glycol_m_w_1200_3000/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
