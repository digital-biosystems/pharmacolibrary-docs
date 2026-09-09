# sparteine

- **generic name:** sparteine
- **ATC codes:** `C01BA04`
- **DrugBank:** [DB06727](https://go.drugbank.com/drugs/DB06727)
- **groups:** approved, withdrawn

## About

**Description.** Sparteine is a plant alkaloid derived from _Cytisus scoparius_ and _Lupinus mutabilis_ which may chelate calcium and magnesium. It is a sodium channel blocker, so it falls in the category of class 1a antiarrhythmic agents. Sparteine is not currently FDA-approved for human use, and its salt, sparteine sulfate, is one of the products that have been withdrawn or removed from the market for reasons of safety or effectiveness.[L43942]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 11:59 | 32:18 | 0/0/0 | 2/1/0 | 0/0/6 | 243,101/9,010 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 13/5 | 17/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Boido_2017](drugs/drug_sparteine/pd_Boido_2017_chronotropism.md) | Boido V et al., New arylsparteine derivatives as positi…, Journal of enzyme inhibitio… (2017) | [10.1080/14756366.2017.1279156](https://doi.org/10.1080/14756366.2017.1279156) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Boido_2017](drugs/drug_sparteine/pd_Boido_2017_inotropism.md) | Boido V et al., New arylsparteine derivatives as positi…, Journal of enzyme inhibitio… (2017) | [10.1080/14756366.2017.1279156](https://doi.org/10.1080/14756366.2017.1279156) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cely-Veloza_2023](drugs/drug_sparteine/pd_Cely_Veloza_2023_mycelial_growth_inhibition.md) | Cely-Veloza W et al., Antifungal activity against Fusarium ox…, Natural products and biopro… (2023) | [10.1007/s13659-023-00373-4](https://doi.org/10.1007/s13659-023-00373-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tasso_2023](drugs/drug_sparteine/pd_Tasso_2023_threshold_of_arrhythmia.md) | Tasso B et al., Further Quinolizidine Derivatives as An…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28196916](https://doi.org/10.3390/molecules28196916) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q21` · AUC ratio | metabolism | [Bathum_1999](drugs/drug_sparteine/pgx_Bathum_1999_CYP2C19_Q21.md) | Bathum L et al., Phenotypes and genotypes for CYP2D6 and…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00019.x](https://doi.org/10.1046/j.1365-2125.1999.00019.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Bathum_1999](drugs/drug_sparteine/pgx_Bathum_1999_CYP2D6_Q100.md) | Bathum L et al., Phenotypes and genotypes for CYP2D6 and…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00019.x](https://doi.org/10.1046/j.1365-2125.1999.00019.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Lennard_1990](drugs/drug_sparteine/pgx_Lennard_1990_CYP2D6_Q27.md) | Lennard MS, Genetic polymorphism of sparteine/debri…, Pharmacology & toxicology (1990) | [10.1111/j.1600-0773.1990.tb00830.x](https://doi.org/10.1111/j.1600-0773.1990.tb00830.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP1A2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Madsen_1995](drugs/drug_sparteine/pgx_Madsen_1995_CYP1A2_Q100.md) | Madsen H et al., Imipramine metabolism in relation to th…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04473.x](https://doi.org/10.1111/j.1365-2125.1995.tb04473.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Madsen_1995](drugs/drug_sparteine/pgx_Madsen_1995_CYP2D6_Q100.md) | Madsen H et al., Imipramine metabolism in relation to th…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04473.x](https://doi.org/10.1111/j.1365-2125.1995.tb04473.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Zanger_2021](drugs/drug_sparteine/pgx_Zanger_2021_CYP2D6_Q27.md) | Zanger UM et al., Tri-Allelic Haplotypes Determine and Di…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2078](https://doi.org/10.1002/cpt.2078) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 517 matched, 149 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_31 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eichelbaum_1979.pdf` | Eichelbaum M et al., Influence of the defective metabolism o…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00562060](https://doi.org/10.1007/BF00562060) | [499319](https://pubmed.ncbi.nlm.nih.gov/499319) | The evidence explicitly reports quantitative pharmacokinetic parameters (half-life and total plasma clearance) for sparteine in both metaboliser and non-metaboliser groups. |
| `Gram_1990.pdf` | Gram LF, Inadequate dosing and pharmacokinetic v…, Clinical neuropharmacology (1990) | pd | 5 | [10.1097/00002826-199001001-00004](https://doi.org/10.1097/00002826-199001001-00004) | [2199035](https://www.ncbi.nlm.nih.gov/pubmed/2199035) | metadata signals extractable PD data (concentrationeffect) |
| `Mueller_2005.pdf` | Mueller JA et al., Origin of enantioselection in chiral al…, Journal of the American Che… (2005) | pd | 5 | [10.1021/ja053195p](https://doi.org/10.1021/ja053195p) | [16231935](https://www.ncbi.nlm.nih.gov/pubmed/16231935) | metadata signals extractable PD data (concentrationeffect) |
| `unknown_1999.pdf` | unknown, Clomipramine dose-effect study in patie…, Clinical pharmacology and t… (1999) | pd | 5 | [10.1016/S0009-9236(99)90053-X](https://doi.org/10.1016/S0009-9236(99)90053-X) | [10460069](https://www.ncbi.nlm.nih.gov/pubmed/10460069) | metadata signals extractable PD data (concentration-effect) |
| `Echizen_2000.pdf` | Echizen H et al., Identification of CYP3A4 as the enzyme…, Drug metabolism and disposi… (2000) | pd | 4 | not captured | [10901704](https://www.ncbi.nlm.nih.gov/pubmed/10901704) | metadata signals extractable PD data (IC50) |
| `Ellis_1992.pdf` | Ellis SW et al., Catalytic activities of human debrisoqu…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90394-x](https://doi.org/10.1016/0006-2952(92)90394-x) | [1510710](https://www.ncbi.nlm.nih.gov/pubmed/1510710) | metadata signals extractable PD data (IC50) |
| `Honerjäger_1986.pdf` | Honerjäger P et al., Negative inotropic effects of tetrodoto…, Naunyn-Schmiedeberg's archi… (1986) | pd | 4 | [10.1007/BF00511411](https://doi.org/10.1007/BF00511411) | [2422563](https://www.ncbi.nlm.nih.gov/pubmed/2422563) | metadata signals extractable PD data (IC50) |
| `Jurima-Romet_1994.pdf` | Jurima-Romet M et al., Terfenadine metabolism in human liver.…, Drug metabolism and disposi… (1994) | pd | 4 | not captured | [7895601](https://www.ncbi.nlm.nih.gov/pubmed/7895601) | metadata signals extractable PD data (IC50) |
| `Körper_1998.pdf` | Körper S et al., Differential effects of alkaloids on so…, FEBS letters (1998) | pd | 4 | [10.1016/s0014-5793(98)01135-1](https://doi.org/10.1016/s0014-5793(98)01135-1) | [9781689](https://www.ncbi.nlm.nih.gov/pubmed/9781689) | metadata signals extractable PD data (IC50) |
| `Tyndale_1991.pdf` | Tyndale RF et al., Neuronal cytochrome P450IID1 (debrisoqu…, Molecular pharmacology (1991) | pd | 4 | not captured | [1857341](https://www.ncbi.nlm.nih.gov/pubmed/1857341) | metadata signals extractable PD data (IC50) |
| `Baumann_1996.pdf` | Baumann P, Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1996) | pgx | 8 | [10.2165/00003088-199631060-00004](https://doi.org/10.2165/00003088-199631060-00004) | [8968657](https://www.ncbi.nlm.nih.gov/pubmed/8968657) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brøsen_1993.pdf` | Brøsen K et al., Inhibition by paroxetine of desipramine…, European journal of clinica… (1993) | pgx | 8 | [10.1007/BF00316471](https://doi.org/10.1007/BF00316471) | [8513845](https://www.ncbi.nlm.nih.gov/pubmed/8513845) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Eichelbaum_1997.pdf` | Eichelbaum M et al., Impact of P450 genetic polymorphism on…, Advanced drug delivery revi… (1997) | pgx | 8 | [10.1016/s0169-409x(97)00042-2](https://doi.org/10.1016/s0169-409x(97)00042-2) | [10837557](https://www.ncbi.nlm.nih.gov/pubmed/10837557) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Fjordside_1999.pdf` | Fjordside L et al., The stereoselective metabolism of fluox…, Pharmacogenetics (1999) | pgx | 8 | [10.1097/00008571-199902000-00008](https://doi.org/10.1097/00008571-199902000-00008) | [10208643](https://www.ncbi.nlm.nih.gov/pubmed/10208643) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Halling_2008.pdf` | Halling J et al., CYP2D6 polymorphism in relation to tram…, Therapeutic drug monitoring (2008) | pgx | 8 | [10.1097/FTD.0b013e3181666b2f](https://doi.org/10.1097/FTD.0b013e3181666b2f) | [18520597](https://www.ncbi.nlm.nih.gov/pubmed/18520597) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Jeppesen_1996.pdf` | Jeppesen U et al., Dose-dependent inhibition of CYP1A2, CY…, European journal of clinica… (1996) | pgx | 8 | [10.1007/s002280050163](https://doi.org/10.1007/s002280050163) | [8880055](https://www.ncbi.nlm.nih.gov/pubmed/8880055) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Nielsen_1995.pdf` | Nielsen F et al., Lack of relationship between quinidine…, European journal of clinica… (1995) | pgx | 8 | [10.1007/BF00194341](https://doi.org/10.1007/BF00194341) | [8582470](https://www.ncbi.nlm.nih.gov/pubmed/8582470) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sindrup_1992.pdf` | Sindrup SH et al., The relationship between paroxetine and…, Clinical pharmacology and t… (1992) | pgx | 8 | [10.1038/clpt.1992.23](https://doi.org/10.1038/clpt.1992.23) | [1531950](https://www.ncbi.nlm.nih.gov/pubmed/1531950) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sindrup_1993.pdf` | Sindrup SH et al., Pharmacokinetics of citalopram in relat…, Therapeutic drug monitoring (1993) | pgx | 8 | [10.1097/00007691-199302000-00002](https://doi.org/10.1097/00007691-199302000-00002) | [8451774](https://www.ncbi.nlm.nih.gov/pubmed/8451774) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vormfelde_1997.pdf` | Vormfelde SV et al., Non-response to maprotiline caused by u…, European journal of clinica… (1997) | pgx | 8 | [10.1007/s002280050306](https://doi.org/10.1007/s002280050306) | [9272409](https://www.ncbi.nlm.nih.gov/pubmed/9272409) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Anzenbacherová_2000.pdf` | Anzenbacherová E et al., Use of a propafenone metabolic ratio as…, International journal of cl… (2000) | pgx | 7 | [10.5414/cpp38426](https://doi.org/10.5414/cpp38426) | [11020029](https://www.ncbi.nlm.nih.gov/pubmed/11020029) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brøsen_2001.pdf` | Brøsen K et al., Review of pharmacokinetic and pharmacod…, European neuropsychopharmac… (2001) | pgx | 7 | [10.1016/s0924-977x(01)00101-8](https://doi.org/10.1016/s0924-977x(01)00101-8) | [11532381](https://www.ncbi.nlm.nih.gov/pubmed/11532381) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kees_2001.pdf` | Kees F et al., Pharmacokinetics of therapeutic doses o…, British journal of clinical… (2001) | pgx | 7 | [10.1046/j.0306-5251.2001.01512.x](https://doi.org/10.1046/j.0306-5251.2001.01512.x) | [11736884](https://www.ncbi.nlm.nih.gov/pubmed/11736884) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Droll_1998.pdf` | Droll K et al., Comparison of three CYP2D6 probe substr…, Pharmacogenetics (1998) | pgx | 5 | [10.1097/00008571-199808000-00006](https://doi.org/10.1097/00008571-199808000-00006) | [9731719](https://www.ncbi.nlm.nih.gov/pubmed/9731719) | metadata signals extractable PGX data (CYP2D6) |
| `Halling_2005.pdf` | Halling J et al., Polymorphism of CYP2D6, CYP2C19, CYP2C9…, European journal of clinica… (2005) | pgx | 5 | [10.1007/s00228-005-0938-1](https://doi.org/10.1007/s00228-005-0938-1) | [16025294](https://www.ncbi.nlm.nih.gov/pubmed/16025294) | metadata signals extractable PGX data (CYP2D6) |
| `Klein_2025.pdf` | Klein K et al., Transcription factors of the Nuclear Fa…, Pharmacological research (2025) | pgx | 5 | [10.1016/j.phrs.2025.107998](https://doi.org/10.1016/j.phrs.2025.107998) | [41106572](https://www.ncbi.nlm.nih.gov/pubmed/41106572) | metadata signals extractable PGX data (CYP2D6) |
| `Niewinski_2002.pdf` | Niewinski P et al., CYP2D6 extensive, intermediate, and poo…, European journal of clinica… (2002) | pgx | 5 | [10.1007/s00228-002-0505-y](https://doi.org/10.1007/s00228-002-0505-y) | [12536989](https://www.ncbi.nlm.nih.gov/pubmed/12536989) | metadata signals extractable PGX data (CYP2D6) |
| `Paar_1997.pdf` | Paar WD et al., Polymorphic CYP2D6 mediates O-demethyla…, European journal of clinica… (1997) | pgx | 5 | [10.1007/s002280050368](https://doi.org/10.1007/s002280050368) | [9476037](https://www.ncbi.nlm.nih.gov/pubmed/9476037) | metadata signals extractable PGX data (CYP2D6) |
| `Slanar_2001.pdf` | Slanar O et al., Phenotype of cytochrome P450 CYP2D6 in…, Methods and findings in exp… (2001) | pgx | 5 | [10.1358/mf.2001.23.3.627948](https://doi.org/10.1358/mf.2001.23.3.627948) | [11523314](https://www.ncbi.nlm.nih.gov/pubmed/11523314) | metadata signals extractable PGX data (CYP2D6) |
| `Szewczuk-Bogusławska_2004.pdf` | Szewczuk-Bogusławska M et al., Doxepin inhibits CYP2D6 activity in vivo, Polish journal of pharmacol… (2004) | pgx | 5 | not captured | [15520506](https://www.ncbi.nlm.nih.gov/pubmed/15520506) | metadata signals extractable PGX data (CYP2D6) |
| `Xu_1995.pdf` | Xu BQ et al., Ethylmorphine O-deethylation in isolate…, Biochemical pharmacology (1995) | pgx | 5 | [10.1016/0006-2952(94)00481-z](https://doi.org/10.1016/0006-2952(94)00481-z) | [7872951](https://www.ncbi.nlm.nih.gov/pubmed/7872951) | metadata signals extractable PGX data (CYP2D1) |

<sub>queue written 2026-09-09T11:51:37.367579+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anzenbacherová_2000 | not_relevant | 0 | 0 | The paper focuses on propafenone pharmacokinetics and CYP2D6 phenotyping; sparteine is only used as a reference phenotyping probe, not the subject of the reported PK/PD effects. |
| popPK | Atal_1981 | irrelevant | 2 | 0 | The study focuses on the effect of herbal acrids on bioavailability (relative increase in blood levels) rather than reporting quantitative compartmental PK parameters (CL, V, ka) for sparteine. |
| popPK | Balant-Gorgia_1991 | irrelevant | 0 | 0 | The paper is a review of clomipramine pharmacokinetics, and sparteine is only mentioned as a probe drug for CYP2D6 polymorphism without any PK parameters reported for it. |
| popPK | Baumann_1996 | irrelevant | 0 | 0 | The paper is a review of SSRIs where sparteine is mentioned only as a diagnostic probe for CYP2D6 metabolizer status, with no quantitative PK parameters reported for sparteine itself. |
| PD | Baumann_1996 | not_relevant | 0 | 0 | The paper focuses on SSRIs and does not report pharmacodynamic or exposure-response data for sparteine. |
| PGx | Baumann_1996 | not_relevant | 0 | 0 | The paper focuses on SSRIs, not sparteine. |
| popPK | Beauvais_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on basophil histamine release where sparteine is used only as a potassium channel blocker, not as a subject drug for pharmacokinetic analysis. |
| PGx | Belpaire_1996 | not_relevant | 2 | 0 | The text is a general review of CYP450 polymorphisms and mentions sparteine only as a marker for CYP2D6, without reporting specific quantitative PK/PD parameter changes for sparteine itself. |
| popPK | Boido_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and pharmacodynamics study on sparteine derivatives as inotropic agents, reporting no pharmacokinetic parameters. |
| PGx | Boobis_1983 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (Ki values) for sparteine, not in vivo pharmacokinetic or pharmacodynamic parameters influenced by genotype. |
| popPK | Brøsen_1986 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for imipramine and desipramine, using sparteine only as a diagnostic probe to classify metabolizer phenotypes. |
| popPK | Brøsen_1989 | irrelevant | 1 | 0 | Sparteine is used only as a phenotyping probe to identify extensive metabolizers, and the study reports pharmacokinetic parameters for imipramine and desipramine, not sparteine. |
| popPK | Brøsen_1993 | irrelevant | 0 | 0 | The paper focuses on the inhibition of desipramine metabolism, with sparteine used only as a diagnostic probe for CYP2D6 phenotype, and no quantitative PK parameters for sparteine are provided. |
| PGx | Brøsen_1993_2 | not_relevant | 0 | 0 | The paper discusses SSRIs and mentions sparteine only as a marker for a polymorphism affecting paroxetine, not as the drug of interest for which PK/PD parameters are being reported. |
| PD | Brøsen_2001 | not_relevant | 0 | 0 | The paper is a review of citalopram interactions and does not report any pharmacodynamic or exposure-response data for sparteine. |
| PGx | Brøsen_2001 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving citalopram and sparteine, not pharmacogenomic effects of gene variants on sparteine PK/PD. |
| PD | Cho-Schultz_2009 | not_relevant | 0 | 0 | The paper describes the synthesis of Hsp90 inhibitors and reports cellular IC50 values for specific analogs, but does not report a pharmacodynamic or exposure-response relationship for sparteine, which is only mentioned as a chiral auxiliary in the synthesis. |
| PGx | Clark_1988 | not_relevant | 5 | 2 | The paper reports an association between poor sparteine oxidation phenotype and adverse reactions to other drugs (e.g., nifedipine), but does not report quantitative PK/PD parameter changes for sparteine itself. |
| PGx | Crewe_1992 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP2D6 by SSRIs using sparteine as a probe substrate, but does not report pharmacogenomic effects (gene variants) on sparteine PK/PD parameters. |
| popPK | Damkier_1999 | irrelevant | 1 | 0 | The study focuses on quinidine pharmacokinetics, using sparteine only as a CYP2D6 phenotyping probe without reporting quantitative disposition parameters for sparteine itself. |
| PGx | Dayer_1989 | not_relevant | 0 | 0 | The paper studies dextromethorphan metabolism and only mentions sparteine as an inhibitor of the enzyme, not as the drug being metabolized. |
| popPK | Ebner_1993 | irrelevant | 0 | 0 | The study focuses on aprindine metabolism and CYP2D6 inhibition, using sparteine only as a probe substrate for in-vitro enzyme activity rather than reporting pharmacokinetic parameters for sparteine itself. |
| PD | Echizen_2000 | not_relevant | 0 | 0 | The paper focuses on the metabolic identification of CYP3A4 for disopyramide and does not report any pharmacodynamic or exposure-response data for sparteine. |
| popPK | Eichelbaum_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine, using sparteine only as a phenotyping probe to classify subjects, and does not report quantitative PK parameters for sparteine itself. |
| popPK | Eichelbaum_1985 | irrelevant | 0 | 0 | The study focuses on carbamazepine pharmacokinetics, and sparteine is only mentioned as a probe drug for phenotyping without any reported quantitative PK parameters for sparteine. |
| PGx | Eichelbaum_1985 | not_relevant | 0 | 0 | The paper studies carbamazepine metabolism and explicitly states that carbamazepine epoxidation was not correlated with sparteine oxidation, providing no pharmacogenomic data for sparteine. |
| PD | Eichelbaum_1997 | not_relevant | 0 | 0 | The paper focuses on the impact of P450 polymorphisms on first-pass extraction (PK) of cardiovascular and neuroactive drugs, with no mention of sparteine or any pharmacodynamic (exposure-response) modeling or parameters. |
| PGx | Eichelbaum_1997 | not_relevant | 2 | 0 | The paper is a review discussing CYP2D6 polymorphisms generally and mentions sparteine only as a probe substrate for the enzyme, without reporting specific PK/PD data or quantitative effects for sparteine itself. |
| popPK | Eleno_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mast cell histamine release and calcium uptake, not a pharmacokinetic study, and reports no disposition parameters for sparteine. |
| PD | Ellis_1992 | not_relevant | 0 | 0 | The paper focuses on the in vitro catalytic activity of CYP2D6 in yeast and does not report any pharmacodynamic or exposure-response relationships for sparteine in humans or animal models. |
| popPK | Endrenyi_1991 | irrelevant | 2 | 0 | The paper is a methodological study on graphical distribution analysis (NTV plots) using sparteine metabolism data only as a secondary example to demonstrate the method, without reporting quantitative PK parameters like clearance or volume. |
| popPK | Engel_2022 | irrelevant | 2 | 1 | The study focuses on the transfer of quinolizidine alkaloids from feed to milk in cows, reporting transfer rates and half-lives for lupanine and other QAs, but sparteine is only mentioned as a reference point or minor component without specific PK parameter values. |
| popPK | Ereshefsky_1995 | irrelevant | 0 | 0 | Sparteine is used only as a probe substrate to measure in vitro CYP2D6 inhibition, and no pharmacokinetic parameters for sparteine are reported. |
| popPK | Fjordside_1999 | irrelevant | 0 | 0 | The paper focuses on fluoxetine metabolism with sparteine only as a phenotyping probe, and no quantitative PK parameters for sparteine are provided in the evidence. |
| PGx | Fjordside_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of fluoxetine, not sparteine, using sparteine only as a phenotyping marker. |
| popPK | Gerloff_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lansoprazole, not sparteine, which is only used as a phenotyping probe. |
| PGx | Gerloff_1996 | not_relevant | 0 | 0 | The study reports no correlation between sparteine metabolic phenotype and lansoprazole pharmacokinetics. |
| popPK | Gram_1990 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetic variability in tricyclic antidepressants and mentions sparteine only as a probe for genetic polymorphism, without reporting any quantitative PK parameters for sparteine. |
| PD | Gram_1990 | not_relevant | 0 | 0 | The paper discusses antidepressants and does not contain any data, analysis, or mention of sparteine. |
| PD | Granvil_2002 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, IC50) for CYP1A1 and CYP2D6, not in vivo pharmacodynamic exposure-response or dose-response relationships for sparteine. |
| popPK | Green_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor desensitization, not a pharmacokinetic study, and sparteine is only a comparator with no PK parameters reported. |
| PD | Green_2017 | not_relevant | 0 | 0 | The paper reports that sparteine had no effect on nicotinic acetylcholine receptors, providing no numeric PD parameters or dose-response relationship for sparteine. |
| popPK | Griese_1999 | relevant | 4 | 5 | The study reports specific metabolic clearance values (346 ml/min, 573 ml/min) and median metabolic ratios for sparteine in a West African population, providing quantitative disposition parameters, though it is primarily a pharmacogenetic study rather than a dedicated PK modeling study. |
| popPK | Gross_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flecainide in subjects phenotyped by sparteine metabolism, so sparteine is only a probe drug and no PK parameters for sparteine are reported. |
| popPK | Gross_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexfenfluramine, not sparteine, which is only mentioned as a CYP2D6 substrate for phenotyping. |
| PGx | Halling_2005 | not_relevant | 2 | 5 | The paper reports population allele frequencies and phenotypic distributions (PM/EM) for CYP2D6 using sparteine, but does not report specific pharmacokinetic parameters (e.g., AUC, clearance) or fitted effect sizes for the drug. |
| PGx | Halling_2008 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of tramadol, using sparteine only as a phenotyping probe for CYP2D6 activity, not as the drug of interest. |
| popPK | Heinig_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of repinotan, using sparteine only as a phenotyping probe for CYP2D6 status, not as the subject drug. |
| PGx | Helsby_1990 | not_relevant | 0 | 0 | The paper investigates the metabolism of proguanil and chlorproguanil, finding that sparteine does not inhibit their metabolism, but it does not report a pharmacogenomic effect on sparteine's own PK/PD parameters. |
| PD | Honerjäger_1986 | not_relevant | 0 | 0 | The paper focuses on tetrodotoxin and class 1 antiarrhythmic drugs, and does not report pharmacodynamic or exposure-response data for sparteine. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a structural molecular template for CYP2D6 substrates and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Jeppesen_1996 | irrelevant | 1 | 0 | Sparteine is used only as a probe substrate to assess CYP2D6 inhibition by SSRIs, and no quantitative PK parameters (CL, V, etc.) for sparteine are reported in the evidence. |
| PGx | Jeppesen_1996 | not_relevant | 0 | 0 | The paper investigates CYP inhibition by SSRIs and does not mention sparteine or pharmacogenomic effects on its PK/PD. |
| PD | Jurima-Romet_1994 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of terfenadine and its inhibition by other drugs, containing no pharmacodynamic or exposure-response data for sparteine. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 0 | The paper focuses on terfenadine metabolism and inhibition by antibiotics; sparteine is only mentioned as a CYP2D6 substrate that weakly inhibits terfenadine, with no pharmacogenomic analysis of sparteine PK/PD. |
| popPK | Jürgens_2002 | irrelevant | 2 | 0 | Sparteine is used only as a probe drug to measure CYP2D6 activity via metabolic ratios, not as the subject of a pharmacokinetic parameter estimation study. |
| PGx | Jürgens_2002 | not_relevant | 0 | 0 | The study investigates the effect of acute hypoxia on CYP2D6 activity, not the effect of a gene variant or genotype. |
| PD | Kamel_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and computational binding energies, but does not contain any pharmacokinetic data, exposure-response analysis, or in vivo pharmacodynamic modeling for sparteine. |
| popPK | Kees_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tropisetron, using sparteine only as a diagnostic probe for CYP2D6 activity without reporting sparteine PK parameters. |
| PGx | Kees_2001 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of tropisetron, not sparteine. |
| PGx | Klein_2025 | not_relevant | 0 | 0 | The paper reports that the NFIB variant rs28379954 has no association with CYP2D6 activity in sparteine cohorts. |
| PD | Lennard_1990 | not_relevant | 2 | 1 | The text is a review of the sparteine/debrisoquine polymorphism that discusses pharmacokinetic differences (clearance, half-life) between phenotypes but does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or a concentration-effect curve for sparteine. |
| popPK | Madeira_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2D6 inhibition by cimetidine, and sparteine is only mentioned as a clinical example of a CYP2D6 substrate without any pharmacokinetic parameters reported. |
| PGx | Marzo_1996 | not_relevant | 0 | 0 | The paper is a review discussing the use of sparteine as a phenotyping probe for CYP2D6, but it does not report specific pharmacokinetic or pharmacodynamic data or effect sizes for sparteine itself. |
| popPK | Mehvar_2002 | irrelevant | 0 | 0 | The paper is a review of chiral antiarrhythmic drugs where sparteine is only mentioned as a phenotyping probe for metabolism, with no PK parameters reported for sparteine itself. |
| PD | Mehvar_2002 | not_relevant | 1 | 0 | The text is a qualitative review of stereoselectivity in antiarrhythmic drugs and mentions sparteine only as a marker for metabolic phenotype, without providing any numeric PD parameters or concentration-effect data for sparteine. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a general review mentioning sparteine as a substrate for debrisoquine hydroxylase polymorphisms but provides no specific pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| PGx | Meyer_1990 | not_relevant | 2 | 0 | The text is a review of the molecular mechanisms and history of CYP2D6 polymorphism, describing the absence of the enzyme in poor metabolizers but does not report specific quantitative changes in sparteine PK/PD parameters. |
| popPK | Mikus_1991 | irrelevant | 0 | 0 | The study focuses on codeine metabolism in rat liver microsomes, with sparteine mentioned only as a comparator substrate for CYP2D6, and no pharmacokinetic parameters for sparteine are reported. |
| PD | Mikus_1991 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, Ki) for codeine metabolism, not a pharmacodynamic (exposure-response) relationship for sparteine. |
| PD | Mueller_2005 | not_relevant | 0 | 0 | The paper describes a chemical catalysis reaction (chiral alcohol oxidation) and does not report any pharmacodynamic or exposure-response data for the drug sparteine. |
| PGx | Nakamura_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of promethazine, not sparteine, and sparteine is only mentioned as an inhibitor of CYP2D6. |
| popPK | Nielsen_1994 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of clomipramine, using sparteine only as a phenotyping probe to classify subjects, and does not report quantitative PK parameters for sparteine itself. |
| popPK | Nielsen_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinidine, using sparteine only as a diagnostic probe to classify metabolizer status, and does not report PK parameters for sparteine itself. |
| PGx | Nielsen_1995 | not_relevant | 0 | 0 | The paper investigates the relationship between quinidine pharmacokinetics and the sparteine oxidation polymorphism, not the pharmacokinetics or pharmacodynamics of sparteine itself. |
| PGx | Niewinski_2002 | not_relevant | 2 | 0 | The paper reports population frequencies of CYP2D6 phenotypes and genotypes but does not provide quantitative PK/PD parameter values (e.g., AUC, clearance) for sparteine to demonstrate a pharmacogenomic effect size. |
| PGx | Paar_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tramadol, using sparteine only as a phenotyping probe for CYP2D6, not as the drug of interest. |
| PD | Pedersen_2005 | not_relevant | 0 | 0 | The paper focuses on CYP2D6 phenotyping using metabolic ratios (PK) and does not report any pharmacodynamic (exposure- or dose-response) relationship or numeric PD parameters for sparteine. |
| PGx | Pelclová_1996 | not_relevant | 0 | 0 | The paper uses sparteine as a probe drug to assess CYP2D6 phenotype in the context of toluene metabolism, but does not report pharmacokinetic parameters of sparteine itself. |
| popPK | Pugsley_1995 | irrelevant | 0 | 0 | The study focuses on cardiac electrophysiology and antiarrhythmic effects (mechanistic/pharmacodynamic) rather than pharmacokinetic disposition parameters. |
| popPK | Raganina_2025 | irrelevant | 0 | 0 | The paper is a review of the phytochemistry and toxicology of Oxytropis glabra, and while it mentions sparteine as a constituent, it does not report any quantitative pharmacokinetic parameters for sparteine. |
| PGx | Ranek_1993 | not_relevant | 0 | 0 | The study reports that subjects were fast metabolizers of sparteine but does not report a specific pharmacogenomic effect (genotype-phenotype association) on a PK parameter, nor does it provide quantitative effect sizes. |
| PGx | Relling_1989 | not_relevant | 2 | 0 | The text describes qualitative clinical symptoms (blurred vision, headache) in poor metabolizers but does not report quantitative pharmacokinetic or pharmacodynamic parameters for sparteine. |
| popPK | Schellens_1991 | irrelevant | 2 | 0 | The study focuses on metabolic inhibition by quinidine and reports qualitative changes (abolished formation) and ratios, but does not provide quantitative PK parameters (CL, V, ka) for sparteine in the evidence. |
| popPK | Sidhu_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of citalopram, with sparteine used only as a phenotyping probe for metabolizer status, not as the subject drug. |
| popPK | Sindrup_1992 | irrelevant | 0 | 0 | The provided evidence contains only the title of a study regarding paroxetine and sparteine polymorphism, with no quantitative pharmacokinetic parameters or data for sparteine. |
| popPK | Sindrup_1992_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of paroxetine, using sparteine only as a genetic probe to identify CYP2D6 polymorphisms, and does not report quantitative PK parameters for sparteine itself. |
| popPK | Sindrup_1993 | irrelevant | 0 | 0 | The study focuses on citalopram pharmacokinetics, using sparteine only as a diagnostic probe for CYP2D6 polymorphism rather than as the subject drug for PK parameter estimation. |
| PGx | Sindrup_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of citalopram, not sparteine, although it uses sparteine as a phenotyping probe. |
| PGx | Skjelbo_1992 | not_relevant | 0 | 0 | The paper studies the metabolism of imipramine and identifies CYP2D6 as the enzyme, but does not report pharmacokinetic or pharmacodynamic parameters for sparteine itself. |
| PGx | Szewczuk-Bogusławska_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (doxepin inhibiting CYP2D6) affecting sparteine metabolism, not a pharmacogenomic effect of a gene variant on sparteine PK/PD. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and antiviral activity study on plant alkaloids, not a pharmacokinetic study, and contains no PK parameters for sparteine. |
| popPK | Tasso_2023 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of quinolizidine derivatives as antiarrhythmic agents and does not report any pharmacokinetic parameters for sparteine. |
| PD | Tyndale_1991 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and sequence identity of neuronal CYP2D1 and its inhibition by cocaine, not on the pharmacokinetics or pharmacodynamics of sparteine itself. |
| PD | Vaswani_2003 | not_relevant | 0 | 0 | The paper is a general review of SSRIs and mentions sparteine only as a CYP2D6 probe substrate for therapeutic drug monitoring, without reporting any pharmacodynamic or exposure-response data for sparteine. |
| PD | Venhorst_2003 | not_relevant | 3 | 2 | The paper reports IC50 values for CYP2D inhibition, which are enzyme kinetics parameters, not pharmacodynamic (exposure-response) parameters for the drug's therapeutic effect. |
| popPK | Voitenko_1991 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of sparteine's mechanism of action on nicotinic receptors, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Volz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propafenone, using sparteine only as a diagnostic probe for CYP2D6 phenotyping without reporting quantitative PK parameters for sparteine itself. |
| popPK | Vormfelde_1997 | irrelevant | 0 | 0 | The provided evidence contains only a title regarding maprotiline and CYP2D6, with no mention of sparteine or any pharmacokinetic parameters. |
| PGx | Vormfelde_1997 | not_relevant | 0 | 0 | The paper discusses maprotiline and CYP2D6, not sparteine. |
| PGx | Xu_1995 | not_relevant | 0 | 0 | The study investigates the metabolism of ethylmorphine and codeine in rats, using sparteine only as a CYP2D1 inhibitor, and does not report pharmacokinetic or pharmacodynamic parameters of sparteine itself. |
| PGx | Yamazoe_1993 | not_relevant | 2 | 0 | The text is a general review of CYP2D6 polymorphisms and mentions sparteine only as a substrate example without reporting specific PK/PD parameter changes or quantitative effect sizes. |
| PGx | Zanger_2021 | not_relevant | 5 | 5 | The study reports in vitro functional effects of CYP2D6 variants on enzyme activity and protein levels, and confirms in vivo sparteine metabolic ratios, but does not report a fitted quantitative pharmacokinetic or pharmacodynamic effect size (e.g., AUC, clearance) for sparteine attributable to the specific gene variants. |
| PD | unknown_1999 | not_relevant | 0 | 0 | The paper studies clomipramine, not sparteine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sparteine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
