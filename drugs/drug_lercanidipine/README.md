<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;lercanidipine&quot;}]"></div>

# lercanidipine

- **generic name:** lercanidipine
- **ATC codes:** `C08CA13`, `C09BB02`, `C09DB08`
- **DrugBank:** [DB00528](https://go.drugbank.com/drugs/DB00528) · **PubChem:** [CID 65866](https://pubchem.ncbi.nlm.nih.gov/compound/65866)
- **molar mass:** 611.7272 g/mol (C36H41N3O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Lercanidipine is a calcium channel blocker used as an antihypertensive drug to treat high blood pressure. It is an approved medicine, available alone and in fixed combinations with ACE inhibitors or angiotensin II receptor blockers, and is used fairly widely, especially in Europe.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410492](https://www.wikidata.org/wiki/Q410492) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:20 | 1:05 | 0/0/0 | 0/0/0 | 0/0/0 | 78,653/3,053 | einfracz / qwen3.8-27b | 6 | 1/6 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lercanidipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA2D1 (blocker), CACNG1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 64 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jabor_2004.pdf` | Jabor VA et al., Enantioselective pharmacokinetics of le…, Journal of chromatography.… (2004) | popPK | 10 | [10.1016/j.jchromb.2004.09.038](https://doi.org/10.1016/j.jchromb.2004.09.038) | [15556551](https://pubmed.ncbi.nlm.nih.gov/15556551) | The study reports enantioselective pharmacokinetic parameters (Cl/f, Cmax, AUC) for lercanidipine in humans, but only median values for six subjects are provided without population PK model estimates (CL, V, Q, ka) or variability. |
| `Salem_2020.pdf` | Salem HF et al., A novel transdermal nanoethosomal gel o…, Drug delivery and translati… (2020) | popPK | 9 | [10.1007/s13346-019-00676-5](https://doi.org/10.1007/s13346-019-00676-5) | [31625026](https://pubmed.ncbi.nlm.nih.gov/31625026) | The study reports a population PK model in rats with significant enhancement in bioavailability, but specific numeric PK parameters (CL, V, Ka) are not explicitly listed in the provided abstract text. |
| `Jabor_2003.pdf` | Jabor VA et al., Enantioselective determination of lerca…, Journal of chromatography.… (2003) | popPK | 8 | [10.1016/j.jchromb.2003.08.029](https://doi.org/10.1016/j.jchromb.2003.08.029) | [14581082](https://pubmed.ncbi.nlm.nih.gov/14581082) | The paper describes a PK study of lercanidipine in humans, but the provided text only contains qualitative statements about plasma levels, with no specific quantitative PK parameters (CL, V, t1/2) listed. |
| `Li_2016.pdf` | Li X et al., A rapid and sensitive LC-MS/MS method f…, Journal of pharmaceutical a… (2016) | popPK | 5 | [10.1016/j.jpba.2016.05.013](https://doi.org/10.1016/j.jpba.2016.05.013) | [27232153](https://pubmed.ncbi.nlm.nih.gov/27232153) | The paper describes a bioequivalence study for lercanidipine in humans, implying the presence of PK parameters, but no numeric values (CL, V, Cmax, etc.) are provided in the extracted evidence. |
| `Deshpande_2016.pdf` | Deshpande PB et al., A novel nanoproliposomes of lercanidipi…, Life sciences (2016) | pd | 5 | [10.1016/j.lfs.2016.08.016](https://doi.org/10.1016/j.lfs.2016.08.016) | [27544752](https://www.ncbi.nlm.nih.gov/pubmed/27544752) | metadata signals extractable PD data (PK-PD) |
| `Angelico_1999.pdf` | Angelico P et al., Vascular-selective effect of lercanidip…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991772844](https://doi.org/10.1211/0022357991772844) | [10454048](https://www.ncbi.nlm.nih.gov/pubmed/10454048) | metadata signals extractable PD data (IC50) |
| `Brixius_2005.pdf` | Brixius K et al., Increased vascular selectivity and prol…, Clinical and experimental p… (2005) | pd | 4 | [10.1111/j.1440-1681.2005.04265.x](https://doi.org/10.1111/j.1440-1681.2005.04265.x) | [16173926](https://www.ncbi.nlm.nih.gov/pubmed/16173926) | metadata signals extractable PD data (IC50) |
| `Cominacini_1999.pdf` | Cominacini L et al., Comparative effects of different dihydr…, Journal of hypertension (1999) | pd | 4 | [10.1097/00004872-199917121-00009](https://doi.org/10.1097/00004872-199917121-00009) | [10703877](https://www.ncbi.nlm.nih.gov/pubmed/10703877) | metadata signals extractable PD data (IC50) |
| `Guarneri_1996.pdf` | Guarneri L et al., Pharmacological in vitro studies of the…, Arzneimittel-Forschung (1996) | pd | 4 | not captured | [8821512](https://www.ncbi.nlm.nih.gov/pubmed/8821512) | metadata signals extractable PD data (IC50) |
| `van_2000.pdf` | van der Lee R et al., The differential time courses of the va…, Journal of hypertension (2000) | pd | 4 | [10.1097/00004872-200018110-00021](https://doi.org/10.1097/00004872-200018110-00021) | [11081783](https://www.ncbi.nlm.nih.gov/pubmed/11081783) | metadata signals extractable PD data (IC50) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:20:15.769534+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aouam_2003 | irrelevant | 0 | 0 | The paper is a qualitative review of dihydropyridine generations and contains no quantitative pharmacokinetic parameters for lercanidipine. |
| PD | Aouam_2003 | not_relevant | 1 | 0 | The text is a qualitative review of dihydropyridine generations and contains no numeric PD parameters or exposure-response data for lercanidipine. |
| popPK | Bachmeier_2011 | irrelevant | 0 | 0 | The study focuses on the effect of lercanidipine on beta-amyloid clearance across the blood-brain barrier, not on the pharmacokinetic disposition parameters of lercanidipine itself. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper describes a method for detecting drug-drug interactions using FDA adverse event data and does not report any pharmacokinetic parameters for lercanidipine. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signal detection and temporal plausibility of drug-drug interactions in the FAERS database; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for lercanidipine. |
| PD | Brixius_2005 | not_relevant | 0 | 0 | The paper describes in vitro pharmacological efficacy and vascular selectivity in human tissue, not an in vivo exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy mechanisms and does not report quantitative pharmacokinetic parameters for lercanidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for lercanidipine. |
| PD | Cominacini_1999 | not_relevant | 0 | 0 | The paper focuses on the effects of dihydropyridines on adhesion molecules in an in vitro endothelial cell model and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for lercanidipine in humans or animals. |
| popPK | Deshpande_2016 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | Deshpande_2016 | not_relevant | 0 | 0 | The paper focuses on the formulation development and in vitro/preclinical efficacy of nanoproliposomes, lacking any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for lercanidipine. |
| PD | Epstein_2001 | not_relevant | 1 | 0 | The text is a qualitative review describing the mechanism and clinical efficacy of lercanidipine but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PD | Ghahremanpour_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of the SARS-CoV-2 main protease by 14 drugs and does not report pharmacokinetic or pharmacodynamic exposure-response data for lercanidipine. |
| popPK | Grassi_2017 | irrelevant | 0 | 0 | This is a narrative review focused on the clinical efficacy and management of hypertension with lercanidipine, lacking original quantitative pharmacokinetic parameter data (CL, V, t1/2, etc.). |
| popPK | Hanauer_2020 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the comparator drug carvedilol and its interaction with lercanidipine; while lercanidipine is dosed, the text explicitly states its pharmacokinetics were not affected but does not provide any quantitative disposition parameters (CL, V, etc.) for lercanidipine itself in the provided evidence. |
| popPK | Herbette_1998 | irrelevant | 2 | 0 | The text is a qualitative discussion of molecular properties and general pharmacokinetic concepts for lercanidipine, without reporting any quantitative parameter values (CL, V, etc.). |
| popPK | Jabor_2003 | relevant | 8 | 1 | The paper describes a PK study of lercanidipine in humans, but the provided text only contains qualitative statements about plasma levels, with no specific quantitative PK parameters (CL, V, t1/2) listed. |
| popPK | Khotko_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy (nephroprotection and cytokine levels) of lercanidipine, and contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Klotz_2002 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic interaction potentials (CYP3A4/P-gp) and general pharmacodynamic cautions, containing no numeric PD parameters or exposure-response data. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 and P-gp but does not report any effects of specific gene variants or genotypes (pharmacogenomics). |
| popPK | Lambert_2016 | irrelevant | 0 | 0 | The paper is a case report regarding an ibrutinib-verapamil interaction where lercanidipine is only mentioned as a substituted medication, containing no PK data for lercanidipine. |
| PGx | Lambert_2016 | not_relevant | 0 | 0 | The paper reports a clinical case of drug-drug interaction between ibrutinib and verapamil, with no mention of pharmacogenomic effects on lercanidipine PK/PD. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | This is a pharmacodynamic study assessing blood pressure effects and drug synergism, containing no pharmacokinetic parameters (CL, V, etc.) for lercanidipine. |
| popPK | Li_2016 | relevant | 5 | 0 | The paper describes a bioequivalence study for lercanidipine in humans, implying the presence of PK parameters, but no numeric values (CL, V, Cmax, etc.) are provided in the extracted evidence. |
| popPK | Palermiti_2025 | irrelevant | 0 | 0 | The paper describes the development and validation of a UHPLC-MS/MS method for quantifying lercanidipine in plasma, but it does not report any pharmacokinetic parameters (CL, V, T1/2) or model data. |
| popPK | Poncelet_2004 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy and safety (blood pressure reduction) of lercanidipine in hypertensive patients but does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Ranpise_2014 | not_relevant | 1 | 0 | The paper mentions an in vivo pharmacodynamic study but provides no numeric PD parameters, concentration-effect data, or dose-response curves in the provided text. |
| popPK | Repin_2021 | irrelevant | 1 | 0 | The study is an in vitro solubility and in silico PBPK simulation of lercanidipine polymorphism, not a clinical or preclinical pharmacokinetic study reporting quantitative disposition parameters for the drug in vivo. |
| PGx | Repin_2021 | not_relevant | 0 | 0 | The study focuses on chemical polymorphism and physiological conditions, not on genetic variants or pharmacogenomics. |
| popPK | Ritscher_2020 | irrelevant | 0 | 0 | This is a therapeutic drug monitoring (TDM) and adherence study that reports measured serum concentrations, not a pharmacokinetic study deriving disposition parameters (CL, V, etc.) for lercanidipine. |
| popPK | Rizzoni_2016 | irrelevant | 0 | 0 | The study is a pooled analysis of blood pressure dose-response effects, not a pharmacokinetic study, and contains no PK parameters for lercanidipine. |
| popPK | Robles_2004 | irrelevant | 1 | 0 | The study is a clinical evaluation of antihypertensive efficacy and safety in diabetic patients with renal failure, and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Robles_2005 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy and safety of doxazosin and lercanidipine in hypertensive patients but does not report any pharmacokinetic parameters or models for lercanidipine. |
| popPK | Robles_2010 | irrelevant | 0 | 0 | The study evaluates the antiproteinuric and antihypertensive clinical effects of lercanidipine but does not report any pharmacokinetic parameters (clearance, volume, etc.). |
| popPK | Robles_2016 | irrelevant | 0 | 0 | The study focuses on renal outcomes (albuminuria) and blood pressure, not pharmacokinetic disposition parameters. |
| popPK | Salem_2020 | relevant | 9 | 2 | The study reports a population PK model in rats with significant enhancement in bioavailability, but specific numeric PK parameters (CL, V, Ka) are not explicitly listed in the provided abstract text. |
| popPK | Sibille_2026 | irrelevant | 0 | 0 | This is an in vitro antiviral mechanistic study using lercanidipine as a drug of interest, not a pharmacokinetic study reporting disposition parameters. |
| PD | Sidorenko_2002 | not_relevant | 1 | 0 | The text is a qualitative review focusing on lacidipine and only mentions lercanidipine in the context of similarities, without providing any numeric PD parameters or exposure-response data. |
| popPK | Sironi_1996 | irrelevant | 0 | 0 | The study reports haemodynamic effects (blood pressure, resistance) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions using regression models and does not report any pharmacokinetic parameters for lercanidipine. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions in polypharmacy using regression models on real-world data and does not report any pharmacodynamic or exposure-response relationship for lercanidipine. |
| popPK | Topal_2009 | irrelevant | 0 | 0 | The study evaluates the clinical effects of lercanidipine on peritoneal dialysis parameters (ultrafiltration, Kt/V) rather than its pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Viguier_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study clustering adverse drug reaction signatures using disproportionality analysis (ROR) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for lercanidipine. |
| popPK | Wirtz_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of molecular mechanisms and lacks pharmacokinetic disposition parameters. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the effect of nicardipine on quetiapine metabolism; lercanidipine is only mentioned as one of several drugs screened in a single-point inhibition assay without any reported dose-response curve or numeric PD parameters. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of lercanidipine pharmacodynamics. |
| popPK | Zhou_2014 | irrelevant | 2 | 0 | The paper is a review of drug-drug interactions where lercanidipine is a co-administered precipitant or object drug, not a primary PK study reporting lercanidipine's own disposition parameters (CL, V, ka) in the context of a standalone model. |
| PGx | Zhou_2014 | not_relevant | 4 | 3 | This review focuses on drug-drug interactions (DDIs) involving pharmacokinetics, and although it mentions that CYP3A5 genotype status is a factor in the strength of DDIs for some DHP-CCBs, it does not provide specific quantitative data on how this genotype alters the PK/PD of lercanidipine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
