<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;sodium bicarbonate&quot;}]"></div>

# sodium bicarbonate

- **generic name:** sodium bicarbonate
- **ATC codes:** `B05CB04`, `B05XA02`
- **DrugBank:** [DB01390](https://go.drugbank.com/drugs/DB01390) · **PubChem:** [CID 516892](https://pubchem.ncbi.nlm.nih.gov/compound/516892)
- **molar mass:** 84.0066 g/mol (CHNaO3) — DrugBank
- **groups:** approved, investigational

## About

Sodium bicarbonate is used to treat conditions such as cardiac arrest, heartburn, indigestion, gastroesophageal reflux disease, and renal tubular acidosis. It is an approved medicine, given as intravenous electrolyte and irrigating salt solutions, and is widely available, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q179731](https://www.wikidata.org/wiki/Q179731) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:38 | 6:15 | 0/0/0 | 1/0/0 | 0/1/0 | 216,189/6,643 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 7/48 | 27/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Khorolsuren_2021_NCI](drugs/drug_sodium_bicarbonate/pd_Khorolsuren_2021_NCI.md) | normalized cell index ← sodium bicarbonate · direct sigmoid Emax (Hill) effect | — | Khorolsuren Z et al., Effect of dental antiseptic agents on t…, The Saudi dental journal (2021) | [10.1016/j.sdentj.2021.09.016](https://doi.org/10.1016/j.sdentj.2021.09.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Khorolsuren_2021_cell_viability](drugs/drug_sodium_bicarbonate/pd_Khorolsuren_2021_cell_viability.md) | cell viability ← sodium bicarbonate · direct sigmoid Emax (Hill) effect | — | Khorolsuren Z et al., Effect of dental antiseptic agents on t…, The Saudi dental journal (2021) | [10.1016/j.sdentj.2021.09.016](https://doi.org/10.1016/j.sdentj.2021.09.016) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C19** | `Q22` · CL | metabolism | [Zhang_2023](drugs/drug_sodium_bicarbonate/pgx_Zhang_2023_CYP2C19_Q22.md) | Zhang R et al., Pharmacokinetics and bioequivalence eva…, Scientific reports (2023) | [10.1038/s41598-022-27286-5](https://doi.org/10.1038/s41598-022-27286-5) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_bicarbonate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: CACNA1H (blocker), Hydrogen ions (neutralizer), KCND3 (blocker), SLC4A10 (substrate), SLC4A4 (substrate), SLC4A5 (substrate), SLC4A7 (substrate), SLC4A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 270 matched, 133 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akinwumi_2020.pdf` | Akinwumi IA et al., Bioassay-guided isolation and identific…, Steroids (2020) | pd | 4 | [10.1016/j.steroids.2020.108636](https://doi.org/10.1016/j.steroids.2020.108636) | [32165210](https://www.ncbi.nlm.nih.gov/pubmed/32165210) | metadata signals extractable PD data (IC50) |
| `Bourova_2003.pdf` | Bourova L et al., delta-Opioid receptors exhibit high eff…, Journal of neurochemistry (2003) | pd | 4 | [10.1046/j.1471-4159.2003.01667.x](https://doi.org/10.1046/j.1471-4159.2003.01667.x) | [12641725](https://www.ncbi.nlm.nih.gov/pubmed/12641725) | metadata signals extractable PD data (EC50) |
| `Clark_2000.pdf` | Clark JF et al., Intact smooth muscle metabolism: its re…, Frontiers in bioscience : a… (2000) | pd | 4 | [10.2741/a489](https://doi.org/10.2741/a489) | [10966870](https://www.ncbi.nlm.nih.gov/pubmed/10966870) | metadata signals extractable PD data (EC50) |
| `Jenssen_1993.pdf` | Jenssen T et al., Dose-response effects of lactate infusi…, European journal of clinica… (1993) | pd | 4 | [10.1111/j.1365-2362.1993.tb00789.x](https://doi.org/10.1111/j.1365-2362.1993.tb00789.x) | [8404995](https://www.ncbi.nlm.nih.gov/pubmed/8404995) | metadata signals extractable PD data (sigmoid) |
| `Shilling_2000.pdf` | Shilling AD et al., Determining relative estrogenicity by q…, Toxicology and applied phar… (2000) | pd | 4 | [10.1006/taap.2000.8912](https://doi.org/10.1006/taap.2000.8912) | [10799344](https://www.ncbi.nlm.nih.gov/pubmed/10799344) | metadata signals extractable PD data (EC50) |
| `Jing_2021.pdf` | Jing S et al., Pharmacokinetics and Pharmacodynamics o…, Advances in therapy (2021) | pgx | 8 | [10.1007/s12325-021-01644-7](https://doi.org/10.1007/s12325-021-01644-7) | [33575950](https://www.ncbi.nlm.nih.gov/pubmed/33575950) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Liu_2011.pdf` | Liu R et al., Effects of sodium bicarbonate and ammon…, Drug metabolism and pharmac… (2011) | pgx | 8 | [10.2133/dmpk.dmpk-10-rg-039](https://doi.org/10.2133/dmpk.dmpk-10-rg-039) | [21084767](https://www.ncbi.nlm.nih.gov/pubmed/21084767) | metadata signals extractable PGX data (SLC15A2, PK/PD-context) |
| `Mazer-Amirshahi_2019.pdf` | Mazer-Amirshahi M et al., Prolonged QRS Widening After Aripiprazo…, Pediatric emergency care (2019) | pgx | 8 | [10.1097/PEC.0000000000001502](https://doi.org/10.1097/PEC.0000000000001502) | [29746361](https://www.ncbi.nlm.nih.gov/pubmed/29746361) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Chen_2010.pdf` | Chen RN et al., Development of swelling/floating gastro…, European journal of pharmac… (2010) | pgx | 5 | [10.1016/j.ejps.2009.10.015](https://doi.org/10.1016/j.ejps.2009.10.015) | [19903527](https://www.ncbi.nlm.nih.gov/pubmed/19903527) | metadata signals extractable PGX data (CYP2C9) |
| `Graham_2010.pdf` | Graham DY et al., Dual proton pump inhibitor plus amoxici…, Journal of gastroenterology (2010) | pgx | 5 | [10.1007/s00535-010-0220-x](https://doi.org/10.1007/s00535-010-0220-x) | [20195646](https://www.ncbi.nlm.nih.gov/pubmed/20195646) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-06T00:34:53.411176+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agergaard_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not sodium bicarbonate. |
| PD | Agergaard_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of tacrolimus and its distribution into PBMCs, containing no pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| PD | Akinwumi_2020 | not_relevant | 0 | 0 | The paper reports in vitro bioassay data (IC50, pH changes) for plant extracts and isolated compounds, using sodium bicarbonate only as a qualitative/quantitative reference standard, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for sodium bicarbonate itself. |
| popPK | Al-Sulaiti_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not sodium bicarbonate. |
| PD | Al-Sulaiti_2025 | not_relevant | 0 | 0 | The paper is a systematic review of vancomycin population pharmacokinetics in ECMO patients and does not report any pharmacodynamic or exposure-response data for sodium bicarbonate. |
| PGx | Alayed_2024 | not_relevant | 0 | 0 | The paper is a case report of a genetic disease (Carbonic Anhydrase II deficiency) and does not report a pharmacogenomic effect on the PK/PD of sodium bicarbonate. |
| PGx | Amara_2010 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association for lisinopril (angiotensinogen gene), not sodium bicarbonate, which was used as a prophylactic adjunct. |
| popPK | Aminy_2026 | irrelevant | 0 | 0 | The study investigates the effect of toothpaste formulations on salivary calcium levels, not the pharmacokinetics of sodium bicarbonate. |
| PD | An_2023 | not_relevant | 0 | 0 | The paper is a comparative review of clinical guidelines for sepsis management and does not report any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for sodium bicarbonate. |
| popPK | Asif_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antiviral agent L-3'-Fd4C, using sodium bicarbonate only as a buffer solution to test bioavailability, not as the subject drug. |
| popPK | Auchtung_2025 | irrelevant | 0 | 0 | The paper studies the effects of antibiotics on gastrointestinal microbiota and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | Auchtung_2025 | not_relevant | 0 | 0 | The paper investigates the effects of antibiotics on gastrointestinal microbiota and does not contain any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| popPK | Barbhaiya_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinoxacin, using sodium bicarbonate only as a co-administered agent to alter urinary pH. |
| popPK | Bedia_2025 | irrelevant | 0 | 0 | The paper investigates DNA damage responses to carboplatin in ovarian carcinoma cell lines and does not involve sodium bicarbonate pharmacokinetics. |
| PD | Bedia_2025 | not_relevant | 0 | 0 | The paper investigates DNA damage response mechanisms to carboplatin and does not report any pharmacodynamic or exposure-response relationship for sodium bicarbonate. |
| popPK | Beffinger_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of an IL-12Fc fusion protein in glioblastoma models, not sodium bicarbonate. |
| PD | Beffinger_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and efficacy of an IL-12Fc fusion protein in glioblastoma models and does not contain any data, analysis, or mention of sodium bicarbonate. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review on bacterial endophytic secondary metabolites and does not contain any pharmacokinetic data for sodium bicarbonate. |
| PD | Biju_2026 | not_relevant | 0 | 0 | The paper is a review on bacterial endophytic secondary metabolites and does not contain any pharmacodynamic or exposure-response data for sodium bicarbonate. |
| PD | Bolanowska_1990 | not_relevant | 0 | 0 | The paper describes the biochemical activation of an enzyme (FPGS) by sodium bicarbonate, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Bourova_2003 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Bourova_2003 | not_relevant | 0 | 0 | The paper focuses on delta-opioid receptor signaling and G-protein activation, containing no data or analysis regarding sodium bicarbonate pharmacodynamics. |
| popPK | Bühler_2015 | irrelevant | 0 | 0 | The study analyzes the surface roughness of human teeth after air polishing with sodium bicarbonate, which is a mechanical/dental study, not a pharmacokinetic study. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of Losartan (CYP2C9), not sodium bicarbonate, which is used only as an excipient in the formulation. |
| PGx | Chobanyan-Jürgens_2026 | not_relevant | 0 | 0 | The study investigates urinary metabolomics of voriconazole and does not report pharmacogenomic effects on the PK/PD of sodium bicarbonate. |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | The paper describes a chemogenetic protocol for neuropharmacology in mice and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | Ciscato_2025 | not_relevant | 0 | 0 | The paper describes a chemogenetic tool (CATCH) for receptor antagonism and does not report any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| popPK | Clark_2000 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Clark_2000 | not_relevant | 0 | 0 | The paper focuses on smooth muscle metabolism and responses to cyanide and pyruvate, with no mention of sodium bicarbonate or its pharmacodynamic parameters. |
| PD | Cleaveland_1996 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Ki) and cytotoxicity (IC50) for a novel inhibitor (NSC 665564), not pharmacodynamic or exposure-response data for sodium bicarbonate. |
| popPK | Curtis_2024 | irrelevant | 0 | 0 | The study investigates the association between NT-proBNP levels and intradialytic hypotension in hemodialysis patients, with no pharmacokinetic analysis of sodium bicarbonate. |
| PGx | Desta_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of pantoprazole (CYP2C19), not sodium bicarbonate, which is only used as a vehicle. |
| PD | Doan_2001 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of lansoprazole (intragastric pH), not sodium bicarbonate, which is only mentioned as an excipient in the suspension formulation. |
| PD | Dorr_1985 | not_relevant | 0 | 0 | The paper reports that sodium bicarbonate was ineffective as an antidote but provides no concentration-effect data, dose-response curve, or numeric PD parameters for sodium bicarbonate. |
| PGx | Duke_2003 | not_relevant | 0 | 0 | The paper studies the cardiovascular effects of RAS inhibitors in rats and does not report any pharmacogenomic effects on the PK or PD of sodium bicarbonate. |
| PGx | Elbe_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of omeprazole, midazolam, and yohimbine, not sodium bicarbonate. |
| PGx | Ersoy_2019 | not_relevant | 0 | 0 | The paper investigates the effect of sodium bicarbonate on bacterial antibiotic susceptibility (MRSA), not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of sodium bicarbonate. |
| popPK | Gaviria_2024 | irrelevant | 0 | 0 | The study evaluates the antihypertensive activity of earthworm hydrolysates, and sodium bicarbonate is only mentioned as a reagent for purging the worms, not as the subject drug for pharmacokinetic analysis. |
| PD | Gaviria_2024 | not_relevant | 0 | 0 | The paper evaluates the antihypertensive effects of earthworm protein hydrolysates, not sodium bicarbonate, which is only used as a cleaning agent in the preparation process. |
| PGx | Graham_2010 | not_relevant | 0 | 0 | The paper evaluates H. pylori eradication rates and does not report pharmacokinetic or pharmacodynamic parameters for sodium bicarbonate. |
| popPK | Gross_1998 | irrelevant | 0 | 0 | The study investigates the electrophysiological kinetics of the Na-HCO3 cotransporter in renal cells, not the pharmacokinetic disposition parameters (CL, V, t1/2) of sodium bicarbonate as a drug. |
| popPK | Gruber_2025 | irrelevant | 0 | 0 | The paper is a mass spectrometry imaging benchmark study for sulfatides in a mouse model and does not report pharmacokinetic parameters for sodium bicarbonate. |
| PD | Gruber_2025 | not_relevant | 0 | 0 | The paper is a mass spectrometry imaging benchmark dataset for lipid annotation and does not report any pharmacodynamic or exposure-response relationship for sodium bicarbonate. |
| popPK | Gyunesh_2025 | irrelevant | 0 | 0 | The paper describes an in vitro tool for assessing trophoblast invasion and contains no pharmacokinetic data for sodium bicarbonate. |
| PD | Gyunesh_2025 | not_relevant | 0 | 0 | The paper describes a deep learning tool for analyzing trophoblast invasion in vitro and does not report any pharmacodynamic or exposure-response data for sodium bicarbonate. |
| PD | Havelaar_2001 | not_relevant | 0 | 0 | The paper studies the dose-response of Salmonella infection, not the pharmacodynamics of sodium bicarbonate, which is only used as a gastric acid neutralizer. |
| PD | He_2012 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro/in vivo evaluation of a drug delivery system for bergenin and cetirizine; sodium bicarbonate is mentioned only as an excipient, and no pharmacodynamic or exposure-response data for it are reported. |
| PGx | Hirai_2026 | not_relevant | 0 | 0 | The paper discusses mineralocorticoid receptor antagonists and drug-drug interactions, not pharmacogenomic effects on sodium bicarbonate. |
| popPK | Hoyt_2025 | irrelevant | 0 | 0 | The paper studies food allergen absorption and anaphylaxis in mice, not the pharmacokinetics of sodium bicarbonate. |
| PD | Hoyt_2025 | not_relevant | 0 | 0 | The paper studies the mechanism of anaphylaxis involving leukotrienes and DPEP1, and does not report any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| popPK | Ibáñez_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, with sodium bicarbonate serving only as an excipient in the formulation, not as the subject drug. |
| PGx | Islam_2015 | not_relevant | 0 | 0 | The paper investigates the effect of storage temperature on cell viability and morphology, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of sodium bicarbonate. |
| popPK | Isono_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate, not sodium bicarbonate. |
| PD | Isono_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not a pharmacodynamic (PD) or exposure-response model for sodium bicarbonate. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of SARS-CoV-2 protease inhibitors and contains no pharmacokinetic data for sodium bicarbonate. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper reports biochemical IC50 and antiviral EC50 values for SARS-CoV-2 PLpro inhibitors, but does not contain any pharmacodynamic or exposure-response data for sodium bicarbonate. |
| PD | Jackson_1982 | not_relevant | 0 | 0 | The paper investigates the relative potency of spironolactone, triamterene, and potassium chloride, not sodium bicarbonate. |
| PD | Jenssen_1993 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for sodium lactate, not sodium bicarbonate; bicarbonate is only used as a control. |
| PD | Jing_2021 | not_relevant | 2 | 1 | The study reports PK/PD comparison and genotype effects but does not provide a concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for sodium bicarbonate. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The paper is a clinical chemistry atlas for rat toxicity and does not report pharmacokinetic parameters for sodium bicarbonate. |
| PD | Kadyrov_2025 | not_relevant | 0 | 0 | The paper is a clinical chemistry atlas for rat toxicity and does not report any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| PD | Kamaraj_2012 | not_relevant | 0 | 0 | The paper reports IC50 values for medicinal plant extracts against malaria parasites, not a pharmacodynamic or exposure-response relationship for sodium bicarbonate. |
| popPK | Kamberi_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, using sodium bicarbonate only as an agent to alter urinary pH, not as the subject drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational model for predicting drug-food interactions and does not report pharmacokinetic parameters for sodium bicarbonate. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for sodium bicarbonate. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside (an NO donor) on tobacco plants, not sodium bicarbonate, and does not involve human pharmacogenomics. |
| PD | Kim_2018 | not_relevant | 3 | 2 | The study reports a comparative bioequivalence analysis of acid inhibition (percent decrease from baseline) between two formulations, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for sodium bicarbonate. |
| PD | Kim_2019 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative/summary PD endpoints (gastric pH, % time &gt;4) for a single dose, but does not provide a concentration-effect model, Emax/EC50, or dose-response curve with numeric PD parameters. |
| PD | Klein_2017 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (concentration-time profiles) of cefazolin and metronidazole, not pharmacodynamics or exposure-response relationships for sodium bicarbonate. |
| popPK | Krishnaprabhu_2024 | irrelevant | 0 | 0 | The paper is a review of local anesthesia complications and does not contain pharmacokinetic data for sodium bicarbonate. |
| PD | Krishnaprabhu_2024 | not_relevant | 0 | 0 | The paper is a review of case reports regarding epinephrine-induced necrosis and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sodium bicarbonate. |
| PGx | Kyan_2026 | not_relevant | 0 | 0 | The paper is a case report of atomoxetine overdose and does not report any pharmacogenomic effects on the PK or PD of sodium bicarbonate. |
| PD | Latham_2014 | not_relevant | 0 | 0 | The text is a general review of infiltrative anesthesia techniques and mentions sodium bicarbonate only as a qualitative buffering agent to reduce pain, without providing any numeric PD parameters, dose-response data, or concentration-effect analysis. |
| PD | LeBoeuf_1989 | not_relevant | 0 | 0 | The paper investigates the effect of culture medium pH and bicarbonate concentration on the sensitivity of a cell assay to carcinogens, not the pharmacodynamic response of a biological system to sodium bicarbonate as a therapeutic agent. |
| PGx | Lee_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (simvastatin and clarithromycin) causing rhabdomyolysis, with no mention of pharmacogenomic variants affecting sodium bicarbonate PK/PD. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper investigates the physiological role of the NBCe1-A transporter in renal ammonia metabolism and acid-base homeostasis, not the pharmacokinetics or pharmacodynamics of sodium bicarbonate as a therapeutic drug. |
| PGx | Leeder_2008 | not_relevant | 0 | 0 | The paper evaluates a CYP2D6 phenotyping assay using dextromethorphan; sodium bicarbonate is used only as a vehicle/adjunct and is not the drug of interest for pharmacogenomic analysis. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper studies renal physiology and transporter abundance in response to diet and genetic knockout, not the pharmacokinetics or pharmacodynamics of sodium bicarbonate as a drug. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper focuses on the detection of DNA adducts (dA-ALI) from Aristolochic Acid I and does not report pharmacogenomic effects on the PK/PD of sodium bicarbonate. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | The paper investigates the binding of europium probes to serum albumin and is unrelated to the pharmacokinetics of sodium bicarbonate. |
| PD | Li_2025_2 | not_relevant | 0 | 0 | The paper investigates the binding of europium complexes to proteins and does not report any pharmacodynamic or exposure-response relationship for sodium bicarbonate. |
| PGx | Liu_2011 | not_relevant | 0 | 0 | The study investigates the effect of sodium bicarbonate on the pharmacokinetics of cephalexin, not the pharmacokinetics or pharmacodynamics of sodium bicarbonate itself. |
| PD | Lv_2025 | not_relevant | 0 | 0 | The paper uses sodium bicarbonate as a chemical reagent for synthesis, not as a drug, and reports no pharmacodynamic or exposure-response data for it. |
| popPK | M_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antioxidant activity of cyclic dipeptides and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | M_2026 | not_relevant | 0 | 0 | The paper studies the synthesis and antioxidant activity of cyclic dipeptides, not the pharmacodynamics of sodium bicarbonate. |
| popPK | Maiga_2025 | irrelevant | 0 | 0 | The paper describes an in-vitro pharmacodynamic assay for antimalarial drugs (dihydroartemisinin, chloroquine, etc.) and does not study sodium bicarbonate. |
| PGx | Mazer-Amirshahi_2019 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect (CYP2D6) on the toxicity of aripiprazole, not on the pharmacokinetic or pharmacodynamic parameters of sodium bicarbonate. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper is a clinical case series on phage therapy and FMT for UTIs and contains no pharmacokinetic data for sodium bicarbonate. |
| PD | McCallin_2026 | not_relevant | 0 | 0 | The paper reports on phage therapy and FMT for UTIs and does not contain any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| popPK | Morse_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atorvastatin, with sodium bicarbonate used only as a co-administered agent to modify gastric pH, not as the subject drug. |
| popPK | Mégarbane_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chloroquine, and sodium bicarbonate is only mentioned as a co-administered treatment. |
| PD | Mégarbane_2010 | not_relevant | 0 | 0 | The paper reports a PD model for chloroquine, not sodium bicarbonate; sodium bicarbonate is only mentioned as a treatment administered to a subset of patients. |
| PGx | Navarro_2026 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of amitriptyline, not sodium bicarbonate, and does not report a pharmacogenomic effect on sodium bicarbonate parameters. |
| PD | Neumar_1995 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends for epinephrine and sodium bicarbonate (e.g., biphasic survival curve) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect model for sodium bicarbonate. |
| PD | Nilsson_1982 | not_relevant | 0 | 0 | The text describes the effect of sodium bicarbonate on methadone pharmacokinetics (half-life), not a pharmacodynamic (exposure-response) relationship for sodium bicarbonate itself. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not sodium bicarbonate. |
| PD | Olivo_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not a pharmacodynamic (PD) or exposure-response model for sodium bicarbonate. |
| PGx | Ovaska_2010 | not_relevant | 0 | 0 | The paper is a case report on propafenone poisoning and does not report pharmacogenomic effects on the PK/PD of sodium bicarbonate. |
| PGx | Ozdemir_2004 | not_relevant | 0 | 0 | The paper investigates the effect of urine pH (induced by sodium bicarbonate) on CYP2D6 probe drug ratios, not the pharmacokinetics or pharmacodynamics of sodium bicarbonate itself. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The paper is a review of extemporaneous formulations for pediatric patients and does not report any pharmacokinetic parameters for sodium bicarbonate. |
| PD | Pai_2026 | not_relevant | 0 | 0 | The paper is a review on extemporaneous compounding practices and challenges in pediatrics, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sodium bicarbonate. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime in rats, not sodium bicarbonate. |
| popPK | Palchak_2026 | irrelevant | 0 | 0 | The paper investigates the formulation of terpenes in poly(2-oxazoline) micelles and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | Palchak_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and physicochemical characterization of terpene-loaded poly(2-oxazoline) micelles, containing no pharmacodynamic or exposure-response data for sodium bicarbonate. |
| PGx | Petersiel_2024 | not_relevant | 0 | 0 | The paper investigates the effect of sodium bicarbonate on the MIC of beta-lactams in MRSA bacteria, not the effect of human gene variants on the PK/PD of sodium bicarbonate. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism, with no mention of sodium bicarbonate pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not contain any pharmacodynamic or exposure-response analysis for sodium bicarbonate. |
| PD | Pratha_2016 | not_relevant | 3 | 2 | The study reports comparative pharmacodynamic endpoints (intragastric pH) for omeprazole/sodium bicarbonate vs. lansoprazole, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for sodium bicarbonate. |
| PD | Raphael_2020 | not_relevant | 3 | 2 | The paper reports mean differences in pharmacodynamic endpoints (serum bicarbonate, urinary ammonium) between two fixed doses, but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Rybakowski_2013 | not_relevant | 0 | 0 | The paper discusses the SLC4A10 gene (sodium bicarbonate transporter) in the context of lithium response, not the pharmacokinetics or pharmacodynamics of the drug sodium bicarbonate. |
| popPK | S_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial evaluation of novel triazole compounds and does not involve sodium bicarbonate or pharmacokinetic studies. |
| PD | S_2025 | not_relevant | 0 | 0 | The paper studies novel triazole hybrid compounds as antimicrobial agents, not sodium bicarbonate, and reports no pharmacodynamic or exposure-response analysis. |
| popPK | Saleem_2026 | irrelevant | 0 | 0 | The study investigates the analgesic efficacy of tapentadol in breast cancer patients and does not report pharmacokinetic parameters for sodium bicarbonate. |
| PD | Saleem_2026 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the analgesic efficacy of tapentadol; sodium bicarbonate is only mentioned as an inactive placebo excipient, and no pharmacodynamic or exposure-response analysis is performed for it. |
| popPK | Santos_2010 | irrelevant | 0 | 0 | The study evaluates the effect of sodium bicarbonate ingestion on blood pressure, not its pharmacokinetic parameters. |
| popPK | Saunders_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of exercise performance outcomes for beta-alanine, where sodium bicarbonate is only a co-supplement/comparator, and no pharmacokinetic parameters are reported. |
| popPK | Shames_1971 | irrelevant | 2 | 0 | Sodium bicarbonate is used as a tracer to characterize the bicarbonate subsystem for deconvolution of glucose oxidation data, not as the subject drug for PK parameter estimation. |
| popPK | Shilling_2000 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Shilling_2000 | not_relevant | 0 | 0 | The paper focuses on estrogenicity and vitellogenin induction in rainbow trout, not sodium bicarbonate pharmacodynamics. |
| PD | Singh_1980 | not_relevant | 0 | 0 | The paper investigates the effect of pH changes induced by imidazole on oxytocin dose-response curves, not the pharmacodynamic properties of sodium bicarbonate itself. |
| PD | Springfield_2022 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative/semi-quantitative effects (temperature changes, bioavailability) for butorphanol, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for sodium bicarbonate or butorphanol. |
| PD | Suzuki_1990 | not_relevant | 0 | 0 | The paper investigates the modulatory effect of bicarbonate on the pharmacodynamics of Bay K 8644 and other agents, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for sodium bicarbonate itself. |
| popPK | Taylor_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, not sodium bicarbonate. |
| PD | Taylor_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not sodium bicarbonate, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Taylor_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not sodium bicarbonate. |
| PGx | Thacker_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of pantoprazole, not sodium bicarbonate, which is only used as a vehicle for administration. |
| popPK | Thakre_2026 | irrelevant | 0 | 0 | The study investigates neuroplasticity mechanisms in rats using ampakines and hypoxia, and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | Thakre_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of phrenic motor facilitation using an ampakine and hypoxia, not sodium bicarbonate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | The paper describes a gold-based PROTAC targeting MERTK in cell culture and does not involve sodium bicarbonate or its pharmacokinetics. |
| PD | Thomas_2026 | not_relevant | 0 | 0 | The paper investigates the degradome of a gold-based PROTAC (AuPROTAC) and does not involve sodium bicarbonate or report any pharmacodynamic exposure-response relationships for it. |
| popPK | Tsuda_1984 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate, with sodium bicarbonate serving only as a co-administered agent to modify urine pH, not as the subject drug. |
| PD | Urakov_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for CK2 inhibitors, not a pharmacodynamic or exposure-response relationship for sodium bicarbonate. |
| popPK | Vallée_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftazidime-avibactam, not sodium bicarbonate. |
| PD | Vallée_2025 | not_relevant | 0 | 0 | The paper focuses on the PK distribution of ceftazidime-avibactam and does not study sodium bicarbonate or report any pharmacodynamic parameters. |
| PGx | Virreira_2019 | not_relevant | 0 | 0 | The paper investigates the expression and regulation of the sodium bicarbonate cotransporter NBCe1 in thyroid tissue, not the pharmacokinetics or pharmacodynamics of sodium bicarbonate as a drug. |
| popPK | Wei_2026 | irrelevant | 0 | 0 | The paper investigates FFAR4 in colorectal cancer and does not study sodium bicarbonate pharmacokinetics. |
| popPK | Wiedemar_2025 | irrelevant | 0 | 0 | The paper investigates the molecular target of the antimalarial drug gamhépathiopine in Plasmodium falciparum and does not involve sodium bicarbonate or pharmacokinetic parameters. |
| PD | Wiedemar_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of gamhépathiopine, not sodium bicarbonate. |
| PGx | Yamazaki_2019 | not_relevant | 0 | 0 | The paper compares two treatments for chemotherapy-induced diarrhea and mentions UGT1A1 genotypes only to confirm group balance, without reporting any pharmacogenomic effect on the PK or PD of sodium bicarbonate. |
| PD | Yu_2023 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative PD outcomes (intragastric pH percentages) for a formulation comparison, but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for sodium bicarbonate. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of blood-brain barrier proteins and does not report pharmacokinetic parameters for sodium bicarbonate. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on proteomic profiling of the blood-brain barrier and PBPK modeling for phenytoin; it does not report any pharmacodynamic or exposure-response data for sodium bicarbonate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
