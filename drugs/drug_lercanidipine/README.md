<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;lercanidipine&quot;}]"></div>

# lercanidipine

- **generic name:** lercanidipine
- **ATC codes:** `C08CA13`, `C09BB02`, `C09DB08`
- **DrugBank:** [DB00528](https://go.drugbank.com/drugs/DB00528) · **PubChem:** [CID 65866](https://pubchem.ncbi.nlm.nih.gov/compound/65866)
- **molar mass:** 611.7272 g/mol (C36H41N3O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Lercanidipine is a calcium channel blocker of the dihydropyridine class. It is sold under various commercial names including Zanidip.

**Indication.** For the treatment of Hypertension, management of angina pectoris and Raynaud's syndrome

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 09:29 | 22:57 | 0/0/0 | 0/0/0 | 0/0/0 | 72,107/3,829 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/4 | 3/0 | 0 |

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
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jabor_2004.pdf` | Jabor VA et al., Enantioselective pharmacokinetics of le…, Journal of chromatography.… (2004) | popPK | 9 | [10.1016/j.jchromb.2004.09.038](https://doi.org/10.1016/j.jchromb.2004.09.038) | [15556551](https://pubmed.ncbi.nlm.nih.gov/15556551) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Cl/f) for lercanidipine enantiomers in healthy volunteers, with all numeric values explicitly present in the text. |
| `Reddy_2014.pdf` | Reddy GS et al., Gastroretentive pulsatile release table…, TheScientificWorldJournal (2014) | popPK | 8 | [10.1155/2014/421931](https://doi.org/10.1155/2014/421931) | [25525619](https://pubmed.ncbi.nlm.nih.gov/25525619) | The study reports in vivo pharmacokinetics for lercanidipine in rabbits, but the specific numeric parameter values are not present in the provided evidence. |
| `Salem_2020.pdf` | Salem HF et al., A novel transdermal nanoethosomal gel o…, Drug delivery and translati… (2020) | popPK | 8 | [10.1007/s13346-019-00676-5](https://doi.org/10.1007/s13346-019-00676-5) | [31625026](https://pubmed.ncbi.nlm.nih.gov/31625026) | The study reports in vivo pharmacokinetic parameters for lercanidipine in rats, but the specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| `Deshpande_2016.pdf` | Deshpande PB et al., A novel nanoproliposomes of lercanidipi…, Life sciences (2016) | pd | 5 | [10.1016/j.lfs.2016.08.016](https://doi.org/10.1016/j.lfs.2016.08.016) | [27544752](https://www.ncbi.nlm.nih.gov/pubmed/27544752) | metadata signals extractable PD data (PK-PD) |
| `Angelico_1999.pdf` | Angelico P et al., Vascular-selective effect of lercanidip…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991772844](https://doi.org/10.1211/0022357991772844) | [10454048](https://www.ncbi.nlm.nih.gov/pubmed/10454048) | metadata signals extractable PD data (IC50) |
| `Brixius_2005.pdf` | Brixius K et al., Increased vascular selectivity and prol…, Clinical and experimental p… (2005) | pd | 4 | [10.1111/j.1440-1681.2005.04265.x](https://doi.org/10.1111/j.1440-1681.2005.04265.x) | [16173926](https://www.ncbi.nlm.nih.gov/pubmed/16173926) | metadata signals extractable PD data (IC50) |
| `Cominacini_1999.pdf` | Cominacini L et al., Comparative effects of different dihydr…, Journal of hypertension (1999) | pd | 4 | [10.1097/00004872-199917121-00009](https://doi.org/10.1097/00004872-199917121-00009) | [10703877](https://www.ncbi.nlm.nih.gov/pubmed/10703877) | metadata signals extractable PD data (IC50) |
| `Ghahremanpour_2020.pdf` | Ghahremanpour MM et al., Identification of 14 Known Drugs as Inh…, ACS medicinal chemistry let… (2020) | pd | 4 | [10.1021/acsmedchemlett.0c00521](https://doi.org/10.1021/acsmedchemlett.0c00521) | [33324471](https://www.ncbi.nlm.nih.gov/pubmed/33324471) | metadata signals extractable PD data (IC50) |
| `Guarneri_1996.pdf` | Guarneri L et al., Pharmacological in vitro studies of the…, Arzneimittel-Forschung (1996) | pd | 4 | not captured | [8821512](https://www.ncbi.nlm.nih.gov/pubmed/8821512) | metadata signals extractable PD data (IC50) |
| `van_2000.pdf` | van der Lee R et al., The differential time courses of the va…, Journal of hypertension (2000) | pd | 4 | [10.1097/00004872-200018110-00021](https://doi.org/10.1097/00004872-200018110-00021) | [11081783](https://www.ncbi.nlm.nih.gov/pubmed/11081783) | metadata signals extractable PD data (IC50) |
| `Zhou_2014.pdf` | Zhou YT et al., Pharmacokinetic drug-drug interactions…, Therapeutics and clinical r… (2014) | pgx | 8 | [10.2147/TCRM.S55512](https://doi.org/10.2147/TCRM.S55512) | [24379677](https://www.ncbi.nlm.nih.gov/pubmed/24379677) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T09:26:29.960395+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aouam_2003 | irrelevant | 0 | 0 | The paper is a narrative review of dihydropyridine generations and contains no original quantitative pharmacokinetic parameters for lercanidipine. |
| PD | Aouam_2003 | not_relevant | 1 | 0 | The text is a qualitative review of dihydropyridine generations and contains no numeric PD parameters or exposure-response data for lercanidipine. |
| popPK | Bachmeier_2011 | irrelevant | 0 | 0 | The study investigates the effect of lercanidipine on amyloid-beta clearance across the blood-brain barrier, not the pharmacokinetic disposition parameters of lercanidipine itself. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on drug-drug interaction signal detection in the FAERS database and does not report any pharmacokinetic parameters for lercanidipine. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signal detection and temporal plausibility of drug-drug interactions in the FAERS database; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for lercanidipine. |
| PD | Brixius_2005 | not_relevant | 0 | 0 | The paper describes in vitro pharmacological efficacy and vascular selectivity in human tissue, not an in vivo exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for lercanidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for lercanidipine. |
| PD | Cominacini_1999 | not_relevant | 0 | 0 | The paper focuses on the effects of dihydropyridines on adhesion molecules in an in vitro endothelial cell model and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for lercanidipine in humans or animals. |
| popPK | Deshpande_2016 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | Deshpande_2016 | not_relevant | 0 | 0 | The paper focuses on the formulation development and in vitro/preclinical efficacy of nanoproliposomes, lacking any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for lercanidipine. |
| PD | Epstein_2001 | not_relevant | 1 | 0 | The text is a qualitative review describing the mechanism and clinical efficacy of lercanidipine but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PD | Ghahremanpour_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of the SARS-CoV-2 main protease by 14 drugs and does not report pharmacokinetic or pharmacodynamic exposure-response data for lercanidipine. |
| popPK | Grassi_2017 | irrelevant | 0 | 0 | The paper is a clinical review of lercanidipine's efficacy and tolerability in hypertension, containing no original pharmacokinetic data or quantitative disposition parameters. |
| popPK | Hanauer_2020 | irrelevant | 2 | 0 | The study focuses on carvedilol pharmacokinetics and lercanidipine is a co-administered agent; no quantitative disposition parameters (CL, V, ka) for lercanidipine are reported in the evidence. |
| popPK | Herbette_1998 | irrelevant | 2 | 0 | The paper is a mechanistic/review discussion of molecular properties and cholesterol tolerance without reporting quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for lercanidipine. |
| popPK | Jabor_2003 | irrelevant | 2 | 0 | The paper describes an analytical method for enantioselective determination and mentions a PK study but does not report quantitative disposition parameters (CL, V, etc.) in the provided evidence. |
| popPK | Khotko_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the nephroprotective and anti-inflammatory effects of lercanidipine, not a pharmacokinetic study, and reports no PK parameters. |
| PD | Klotz_2002 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic interaction potentials (CYP3A4/P-gp) and general pharmacodynamic cautions, containing no numeric PD parameters or exposure-response data. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 and P-gp but does not report any pharmacogenomic effects (gene variants) on lercanidipine PK/PD. |
| popPK | Lambert_2016 | irrelevant | 0 | 0 | The paper is a case report about an ibrutinib-verapamil interaction where lercanidipine is only mentioned as a replacement antihypertensive, with no PK parameters reported. |
| PGx | Lambert_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between ibrutinib and verapamil, not a pharmacogenomic effect on lercanidipine. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of blood pressure lowering and drug synergism, reporting no pharmacokinetic parameters for lercanidipine. |
| popPK | Li_2016 | irrelevant | 2 | 0 | The paper describes an analytical method and a bioequivalence study but does not report specific quantitative disposition parameters (CL, V, ka, etc.) for lercanidipine in the provided evidence. |
| popPK | Palermiti_2025 | irrelevant | 0 | 0 | The paper describes a UHPLC-MS/MS analytical method for quantifying lercanidipine in plasma and does not report any pharmacokinetic parameters. |
| popPK | Poncelet_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing blood pressure outcomes in different age groups, and it does not report any quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for lercanidipine. |
| PD | Ranpise_2014 | not_relevant | 1 | 0 | The paper mentions an in vivo pharmacodynamic study but provides no numeric PD parameters, concentration-effect data, or dose-response curves in the provided text. |
| popPK | Reddy_2014 | relevant | 8 | 0 | The study reports in vivo pharmacokinetics for lercanidipine in rabbits, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Repin_2021 | irrelevant | 2 | 0 | The study focuses on in-vitro solubility and in-silico PBPK simulations of polymorphs rather than reporting quantitative human or animal disposition parameters (CL, V, ka) for lercanidipine. |
| PGx | Repin_2021 | not_relevant | 0 | 0 | The study investigates the impact of crystal polymorphism (solid-state form) on pharmacokinetics, not genetic variants or genotypes. |
| popPK | Ritscher_2020 | irrelevant | 2 | 0 | The paper is a therapeutic drug monitoring (TDM) study for adherence assessment that uses literature-derived PK parameters (Table 3) to calculate cut-offs, rather than reporting original quantitative PK parameter estimates (CL, V, etc.) for lercanidipine. |
| popPK | Rizzoni_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Robles_2004 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial reporting blood pressure and renal function outcomes, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for lercanidipine. |
| popPK | Robles_2005 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the safety and efficacy of doxazosin in hypertensive patients, with lercanidipine serving only as a background therapy, and no pharmacokinetic parameters are reported. |
| popPK | Robles_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing the antiproteinuric and antihypertensive effects of lercanidipine, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Robles_2016 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal outcomes (albuminuria) and blood pressure, not a pharmacokinetic study reporting disposition parameters for lercanidipine. |
| popPK | Salem_2020 | relevant | 8 | 2 | The study reports in vivo pharmacokinetic parameters for lercanidipine in rats, but the specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Sibille_2026 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism of lercanidipine against HCMV and does not report any pharmacokinetic parameters. |
| PD | Sidorenko_2002 | not_relevant | 1 | 0 | The text is a qualitative review focusing on lacidipine and only mentions lercanidipine in the context of similarities, without providing any numeric PD parameters or exposure-response data. |
| popPK | Sironi_1996 | irrelevant | 1 | 0 | The study reports haemodynamic effects (blood pressure, resistance) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions using regression models, not a pharmacokinetic study, and lercanidipine is only listed as a potential predictor for bleeding ADRs without any PK parameters. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions in polypharmacy using regression models on real-world data and does not report any pharmacodynamic or exposure-response relationship for lercanidipine. |
| popPK | Topal_2009 | irrelevant | 0 | 0 | The study evaluates the clinical effects of lercanidipine on peritoneal transport in dialysis patients and does not report any pharmacokinetic parameters for the drug. |
| PD | Viguier_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study clustering adverse drug reaction signatures using disproportionality analysis (ROR) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for lercanidipine. |
| popPK | Wirtz_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium channel binding and does not report pharmacokinetic parameters. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the effect of nicardipine on quetiapine metabolism; lercanidipine is only mentioned as one of several drugs screened in a single-point inhibition assay without any reported dose-response curve or numeric PD parameters. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of lercanidipine pharmacodynamics. |
| popPK | Zhou_2014 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PGx | Zhou_2014 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions between calcium channel blockers and statins, not pharmacogenomic effects on lercanidipine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
