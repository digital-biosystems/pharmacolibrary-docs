<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;lysine&quot;}]"></div>

# lysine

- **generic name:** lysine
- **ATC codes:** `B05XB03`, `V03AF11`
- **DrugBank:** [DB00123](https://go.drugbank.com/drugs/DB00123) · **PubChem:** [CID 5962](https://pubchem.ncbi.nlm.nih.gov/compound/5962)
- **molar mass:** 146.1876 g/mol (C6H14N2O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Lysine is an essential amino acid used as an additive to intravenous solutions and as a detoxifying agent during antineoplastic treatment; it has also been linked to patent ductus arteriosus. It is approved and also regarded as a nutraceutical, though some of its uses remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20816880](https://www.wikidata.org/wiki/Q20816880) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:46 | 18:50 | 0/0/0 | 1/0/0 | 0/0/1 | 786,039/17,488 | ollama / qwen3.8:27b-mtp-q8_0 | 70 | 14/83 | 67/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Teng_2016_Kv7_2_7_3_currents](drugs/drug_lysine/pd_Teng_2016_Kv7_2_7_3_currents.md) | Kv7.2/7.3 currents ← QO58-lysine · direct sigmoid Emax (Hill) effect | — | Teng BC et al., Activation of neuronal Kv7/KCNQ/M-chann…, Acta pharmacologica Sinica (2016) | [10.1038/aps.2016.33](https://doi.org/10.1038/aps.2016.33) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **cyp-35D1** | `Q27` · CL/F | metabolism | [Collins_2025](drugs/drug_lysine/pgx_Collins_2025_cyp_35D1_Q27.md) | Collins JB et al., Naturally occurring variation in a cyto…, PLoS pathogens (2025) | [10.1371/journal.ppat.1012602](https://doi.org/10.1371/journal.ppat.1012602) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lysine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP-35D1 (metabolism), KARS1 (unknown), SLC16A10 (inhibitor), SLC16A10 (substrate), SLC7A1 (unknown), SLC7A2 (unknown), SLC7A3 (unknown), SLC7A4 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12043 matched, 228 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ignarro_1989.pdf` | Ignarro LJ et al., Basic polyamino acids rich in arginine,…, Circulation research (1989) | pd | 5 | [10.1161/01.res.64.2.315](https://doi.org/10.1161/01.res.64.2.315) | [2492213](https://www.ncbi.nlm.nih.gov/pubmed/2492213) | metadata signals extractable PD data (EC50) |
| `Jasmine_2024.pdf` | Jasmine S et al., Characterization of structural, biochem…, The Prostate (2024) | pd | 5 | [10.1002/pros.24707](https://doi.org/10.1002/pros.24707) | [38619005](https://www.ncbi.nlm.nih.gov/pubmed/38619005) | metadata signals extractable PD data (PK/PD) |
| `Agu_2022.pdf` | Agu KC et al., Biochemical investigation of the upstre…, Journal of biomolecular str… (2022) | pd | 4 | [10.1080/07391102.2020.1828171](https://doi.org/10.1080/07391102.2020.1828171) | [33016836](https://www.ncbi.nlm.nih.gov/pubmed/33016836) | metadata signals extractable PD data (EC50) |
| `Medley_1992.pdf` | Medley QG et al., Dictyostelium myosin II heavy-chain kin…, Biochimica et biophysica ac… (1992) | pd | 4 | [10.1016/0167-4889(92)90003-t](https://doi.org/10.1016/0167-4889(92)90003-t) | [1336402](https://www.ncbi.nlm.nih.gov/pubmed/1336402) | metadata signals extractable PD data (IC50) |
| `Primi_2026.pdf` | Primi MC et al., Allosteric inhibition of JAK2 with lysi…, European journal of medicin… (2026) | pd | 4 | [10.1016/j.ejmech.2025.118274](https://doi.org/10.1016/j.ejmech.2025.118274) | [41166767](https://www.ncbi.nlm.nih.gov/pubmed/41166767) | metadata signals extractable PD data (IC50) |
| `Wang_2018.pdf` | Wang B et al., Fungicidal activity of 10-deacetylbacat…, Pesticide biochemistry and… (2018) | pd | 4 | [10.1016/j.pestbp.2018.09.008](https://doi.org/10.1016/j.pestbp.2018.09.008) | [30497701](https://www.ncbi.nlm.nih.gov/pubmed/30497701) | metadata signals extractable PD data (EC50) |
| `Zhang_2022.pdf` | Zhang H et al., Optimization of a cell surface vimentin…, Bioorganic chemistry (2022) | pd | 4 | [10.1016/j.bioorg.2022.106113](https://doi.org/10.1016/j.bioorg.2022.106113) | [36108586](https://www.ncbi.nlm.nih.gov/pubmed/36108586) | metadata signals extractable PD data (EC50) |
| `Peer_2016.pdf` | Peer CJ et al., UGT1A1 genotype-dependent dose adjustme…, Journal of clinical pharmac… (2016) | pgx | 8 | [10.1002/jcph.627](https://doi.org/10.1002/jcph.627) | [26637161](https://www.ncbi.nlm.nih.gov/pubmed/26637161) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Li_2025.pdf` | Li J et al., Transcriptomics-based identification of…, BMC pregnancy and childbirth (2025) | pgx | 7 | [10.1186/s12884-025-08122-w](https://doi.org/10.1186/s12884-025-08122-w) | [41034826](https://www.ncbi.nlm.nih.gov/pubmed/41034826) | metadata signals extractable PGX data (DPYD, PK/PD-context) |
| `Wang_2022.pdf` | Wang K et al., Drug-drug interactions induced by Linde…, Bioorganic chemistry (2022) | pgx | 7 | [10.1016/j.bioorg.2021.105478](https://doi.org/10.1016/j.bioorg.2021.105478) | [34800885](https://www.ncbi.nlm.nih.gov/pubmed/34800885) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bäckström_2003.pdf` | Bäckström G et al., Genetic variation in the ATP-binding ca…, European journal of pharmac… (2003) | pgx | 5 | [10.1016/s0928-0987(03)00038-1](https://doi.org/10.1016/s0928-0987(03)00038-1) | [12694888](https://www.ncbi.nlm.nih.gov/pubmed/12694888) | metadata signals extractable PGX data (ABCG2) |
| `Xue_2023.pdf` | Xue J et al., Heterodimerization of Human UDP-Glucuro…, Drug metabolism and disposi… (2023) | pgx | 5 | [10.1124/dmd.123.001369](https://doi.org/10.1124/dmd.123.001369) | [37643881](https://www.ncbi.nlm.nih.gov/pubmed/37643881) | metadata signals extractable PGX data (UGT2B7) |

<sub>queue written 2026-10-06T00:34:25.395895+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agu_2022 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| popPK | Ajayi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enalapril and lisinopril, not the amino acid lysine. |
| popPK | Ali_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salicylate (from DL-lysine-acetyl salicylate), not lysine itself, and lysine is not the subject drug. |
| popPK | Allegaert_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amikacin, with ibuprofen-lysine serving only as a co-administered agent to assess drug-drug interactions. |
| PGx | Alradwan_2025 | not_relevant | 0 | 0 | The paper is a review of antibody-drug conjugate chemistry and does not report pharmacogenomic effects on lysine pharmacokinetics or pharmacodynamics. |
| PGx | Aramini_2021 | not_relevant | 0 | 0 | The paper investigates the impact of solid-state polymorphism (salt vs. cocrystal) on pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Aranda_1997 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ibuprofen (administered as ibuprofen lysine), not for lysine itself. |
| popPK | Arulananda_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of the drug AZD0466 (a BH3-mimetic conjugated to a poly-lysine dendrimer), not the amino acid lysine itself. |
| popPK | Auzat_1995 | irrelevant | 0 | 0 | The paper is a structural biology study on enzyme kinetics (phosphofructokinase) in E. coli, not a pharmacokinetic study of lysine. |
| PD | Auzat_1995 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and allosteric cooperativity (Hill coefficients) of a mutated phosphofructokinase, not a pharmacodynamic exposure-response relationship for the drug lysine. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin, not lysine. |
| PGx | Barzak_2024 | not_relevant | 0 | 0 | The paper describes a genetic variant affecting protein-protein interactions in a signaling pathway, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases, not a study of the amino acid lysine. |
| PD | Barzel_2026 | not_relevant | 3 | 1 | The paper is a review of population PK/PD models for therapeutic enzymes in lysosomal storage diseases, not a primary study on lysine, and it does not report specific numeric PD parameters for lysine. |
| PGx | Bassalo_2018 | not_relevant | 0 | 0 | The paper studies lysine metabolism in E. coli using CRISPR mutagenesis, not human pharmacogenomics or drug PK/PD. |
| popPK | Battisti_2023 | irrelevant | 0 | 0 | The paper describes a covalent activator of liver pyruvate kinase that modifies lysine residues, not a pharmacokinetic study of the drug lysine. |
| popPK | Begolo_2018 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of the drug AN7973 in trypanosomes, and lysine is only mentioned as a metabolite (methylated lysine) in the context of metabolic changes, not as a subject drug for pharmacokinetic analysis. |
| popPK | Bendjilali-Sabiani_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for micafungin, not lysine. |
| PD | Bendjilali-Sabiani_2026 | not_relevant | 0 | 0 | The study focuses on population pharmacokinetics (PK) of micafungin and uses Monte Carlo simulations for dosing optimization based on PK/PD targets (MIC), but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| PD | Bennett_1987 | not_relevant | 0 | 0 | The paper reports IC50 values for manoalide inhibiting phospholipase A2, not for lysine; lysine is only mentioned as a non-protective amino acid in the context of enzyme protection. |
| PGx | Berg_1993 | not_relevant | 0 | 0 | The paper investigates the effect of protein glycosylation (post-translational modification) on the functional properties of tPA, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of lysine. |
| PGx | Bhatla_2009 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the toxicity of cytosine arabinoside (ara-C), not lysine; the mention of lysine refers to an amino acid residue in the enzyme structure, not the drug. |
| popPK | Biolo_1992 | irrelevant | 2 | 5 | The study measures transmembrane transport rates and protein kinetics in muscle rather than standard systemic pharmacokinetic parameters (CL, V, ka) for lysine. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using neural ODEs and LASSO, demonstrating it on warfarin and generic data, but does not report pharmacokinetic parameters for lysine. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, applying it to weight development, generic PK, and warfarin PK/PD, but does not report any PD relationship or parameters for lysine. |
| PGx | Bäckström_2003 | not_relevant | 0 | 0 | The paper reports genetic variation in the ABCG2 transporter gene but does not measure or report any pharmacokinetic or pharmacodynamic parameters for lysine or any other drug. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper focuses on the production and antioxidant properties of peptides from bird's nest by-products, with no pharmacokinetic study of lysine. |
| PD | Cao_2022 | not_relevant | 0 | 0 | The paper reports antioxidant activity of peptides (EC50 for radical scavenging) but does not report a pharmacodynamic or exposure-response relationship for the drug lysine. |
| PGx | Cao_2026 | not_relevant | 0 | 0 | The paper investigates the role of SUMOylation on the MAFK protein in cancer biology, not the pharmacokinetics or pharmacodynamics of the amino acid lysine. |
| popPK | Chandrasekharan_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a gadolinium-based MRI contrast agent (Gd(DO3A-Lys)), not the drug lysine itself. |
| popPK | Chatterjee_1986 | irrelevant | 0 | 0 | The paper describes the structural characterization of a hemoglobin derivative cross-linked at lysine residues, not the pharmacokinetics of the drug lysine. |
| PD | Chatterjee_1986 | not_relevant | 0 | 0 | The paper describes the structural and functional characterization of a chemically modified hemoglobin derivative, not a pharmacodynamic exposure-response or dose-response relationship for a drug. |
| popPK | Clemmensen_2014 | irrelevant | 0 | 0 | The paper is a review of the GPRC6A receptor's physiology and pharmacology, not a pharmacokinetic study, and contains no disposition parameters for lysine. |
| popPK | Coughlin_2022 | irrelevant | 0 | 0 | The study is a clinical trial examining cognitive outcomes in patients with pyridoxine-dependent epilepsy and does not report any pharmacokinetic parameters for lysine. |
| PD | Dai_2024 | not_relevant | 3 | 2 | The paper reports in vitro enzyme IC50 values and cytotoxicity data, but lacks a pharmacokinetic (PK) component or an exposure-response (PD) model linking drug concentration in the system to a physiological effect over time. |
| popPK | Damen_2022 | irrelevant | 0 | 0 | The paper studies lysine-containing peptide amphiphiles as antiviral inhibitors, not the pharmacokinetics of the amino acid lysine itself. |
| popPK | Deutz_2025 | relevant | 8 | 2 | The study reports quantitative compartmental PK parameters (clearance, pool sizes, production rates) for lysine in a pig sepsis model, but the specific numeric values are located in Tables 4-8 which are not included in the provided evidence text. |
| PGx | Dhieb_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tramadol PK and metabolomic changes in lysine pathways, but does not report a pharmacogenomic effect on the PK/PD of lysine itself. |
| popPK | Doherty_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-trypanosomal activity of lysine-based peptidomimetics, not the pharmacokinetics of lysine itself. |
| PGx | Dotson_1989 | not_relevant | 0 | 0 | The paper studies the metabolism of sodium azide in maize plants, not the pharmacogenomics of lysine in humans or animals. |
| popPK | Dower_1998 | irrelevant | 0 | 0 | The study focuses on peptide agonists of the thrombopoietin receptor where lysine is used as a chemical linker, not as the subject drug for pharmacokinetic analysis. |
| PGx | Driuchina_2023 | not_relevant | 0 | 0 | The paper investigates gut microbiota and metabolites as biomarkers for fatty liver disease, not pharmacogenomic effects on the PK/PD of lysine. |
| PGx | Duldulao_2013 | not_relevant | 0 | 0 | The paper reports associations between gene polymorphisms and clinical toxicity (adverse events), not pharmacokinetic or pharmacodynamic parameters of lysine. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report pharmacokinetic parameters for lysine. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a software validation study comparing estimation precision of OpenPMX vs NONMEM using simulated PK/PD datasets; it does not report a specific pharmacodynamic relationship or numeric PD parameters for lysine. |
| PD | Fang_2021 | not_relevant | 0 | 0 | The paper reports an in vitro IC50 for a KDM4D inhibitor, not a pharmacodynamic or exposure-response relationship for the drug lysine. |
| popPK | Frankevich_2026 | irrelevant | 0 | 0 | The study is a metabolomic analysis of amino acid concentrations in pregnancy, not a pharmacokinetic study of lysine as a drug. |
| popPK | Freire_2021 | irrelevant | 0 | 0 | The paper studies peptide inhibitors of SARS-CoV-2 proteases and does not report pharmacokinetic parameters for the drug lysine. |
| PD | Gabriel_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Ki, IC50) for homocitrate synthase, which is a biochemical/pharmacological mechanism study, not a pharmacodynamic (exposure-response) relationship for the drug lysine in a biological system. |
| popPK | Gallagher_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity of novel compounds (NAAAs) targeting glycine receptors and transporters, not the pharmacokinetics of lysine. |
| PGx | Ganly_2022 | not_relevant | 0 | 0 | The paper investigates the metabolic and microenvironmental landscape of Hürthle cell carcinoma, not the pharmacokinetics or pharmacodynamics of lysine as a drug. |
| popPK | Groll_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antifungal drug ravuconazole (administered as a lysine prodrug), not lysine itself. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug iclepertin, not lysine. |
| popPK | Hassoun_2007 | irrelevant | 0 | 0 | The study is an in-vitro neuronal migration assay where poly-D-lysine is used as a coating material, not as a subject drug for pharmacokinetic analysis. |
| PGx | He_2017 | not_relevant | 0 | 0 | The study investigates the effect of pargyline on CYP3A4/3A7 gene expression and histone methylation, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Himanen_1995 | irrelevant | 0 | 0 | The paper studies the role of a specific lysine amino acid residue in hemoglobin S aggregation, not the pharmacokinetics of the drug lysine. |
| PD | Himanen_1995 | not_relevant | 0 | 0 | The paper describes a structural biology study on hemoglobin S aggregation and does not report a pharmacodynamic model or exposure-response relationship for the drug lysine. |
| PGx | Hirschey_2010 | not_relevant | 0 | 0 | The paper investigates the role of SIRT3 in fatty acid oxidation and mentions lysine acetylation as a post-translational modification, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug lysine. |
| popPK | Hirt_2008 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ibuprofen, not lysine (which is only mentioned as the salt form of the drug administered). |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study on covariate identification in PopPK modeling and does not report pharmacokinetic parameters for lysine. |
| PD | Hsu_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) covariate identification methods and simulation power, with no mention of pharmacodynamics, exposure-response, or dose-response relationships for lysine or any other drug. |
| popPK | Huang_2021 | irrelevant | 2 | 0 | The study focuses on mammary gland uptake and metabolism rates (transport/metabolism) rather than systemic pharmacokinetic parameters (CL, V, t1/2) for lysine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating an automated PopPK modeling framework (nlmixr2auto) on 22 unspecified clinical datasets and does not report specific PK parameters for lysine. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ignarro_1989 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Ignarro_1989 | not_relevant | 0 | 0 | The paper investigates the effects of polyamino acids on nitric oxide formation but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or numeric exposure-response parameters for lysine. |
| PGx | Iyer_1993 | not_relevant | 0 | 0 | The study investigates the PK/PD of a recombinant hirudin variant in dogs, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of the drug lysine. |
| popPK | Jaggupilli_2019 | irrelevant | 0 | 0 | The paper investigates the interaction of advanced glycation end-products (lysine derivatives) with bitter taste receptors in vitro, not the pharmacokinetics of lysine. |
| PGx | Jegodzinski_2025 | not_relevant | 0 | 0 | The paper reports a genetic association with endogenous metabolite levels (lysine) in a disease context, not a pharmacokinetic or pharmacodynamic effect of a drug. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not lysine. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, including PK parameters and exposure simulations, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| PGx | Jing_2022 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of a stable isostere of malonyllysine for research tools and contains no pharmacogenomic data or PK/PD parameters. |
| popPK | Jovanović_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adalimumab, not lysine. |
| PD | Jovanović_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of Adalimumab, reporting parameters like clearance and volume of distribution, but contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kadlecova_2012 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assessment of polylysine polymers, not a pharmacokinetic study of lysine. |
| popPK | Kamande_2019 | irrelevant | 0 | 0 | The paper is an in-vitro neuroscience study using poly-D-lysine as a cell culture substrate, not a pharmacokinetic study of lysine. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on population pharmacokinetics of multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not involve lysine. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulation framework for benchmarking covariate model building methods and does not report specific pharmacokinetic parameters for lysine. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (popPK) using simulated data; it does not report any pharmacodynamic (PD) or exposure-response relationships for lysine or any other drug. |
| PGx | Keller_2024 | not_relevant | 0 | 0 | The paper is a review on acetyltransferases in cardiovascular disease and aging, discussing lysine acetylation as a post-translational modification, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Kelly_1990 | not_relevant | 0 | 0 | The paper describes a genetic mutation in the MCAD enzyme causing a disease, not a pharmacogenomic effect on the PK/PD of lysine. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab (CT-P16), not lysine. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares PK parameters, but it does not model or report a pharmacodynamic (PD) or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Kist_2021 | not_relevant | 0 | 0 | The paper investigates the role of RIPK1 ubiquitination in TNF signaling and cell death, not the pharmacokinetics or pharmacodynamics of the amino acid lysine. |
| PD | Kocek_2026 | not_relevant | 1 | 1 | The paper reports a single biochemical IC50 value for an enzyme inhibitor but does not provide a pharmacodynamic model, exposure-response curve, or dose-effect analysis in a biological system. |
| popPK | Konai_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and antibacterial activity of membrane-active molecules containing lysine as a structural component, not the pharmacokinetics of lysine itself. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper describes a software framework (PKPy) and uses Theophylline as a validation dataset, not lysine. |
| PD | Kong_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) software framework and analyzes theophylline PK data; it contains no pharmacodynamic (PD) or exposure-response analysis for lysine or any other drug. |
| popPK | Kovalenko_1994 | irrelevant | 0 | 0 | The paper studies the structural role of a lysine residue in a protein (GroES) and is not a pharmacokinetic study of the drug lysine. |
| PD | Kovalenko_1994 | not_relevant | 0 | 0 | The paper describes structural biology and enzyme kinetics (ATP hydrolysis cooperativity) of protein chaperones, not pharmacodynamic exposure-response relationships for the drug lysine. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study focuses on warfarin, theophylline, and tobramycin, not lysine. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships for lysine or any other drug. |
| popPK | Käß_2014 | irrelevant | 0 | 0 | The paper is a bioprocess engineering study on microbial production of lysine, not a pharmacokinetic study of lysine disposition in a biological subject. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the radiopharmaceutical 177Lu-Dotatate, not for lysine, which is only a component of the co-administered amino acid solution. |
| PGx | Lang_2020 | not_relevant | 0 | 0 | The paper investigates the metabolic activation and reactive metabolites of the drug TM5441, not the pharmacokinetics or pharmacodynamics of lysine. |
| PGx | Lapinskas_1995 | not_relevant | 0 | 0 | The paper discusses yeast genetics and manganese homeostasis, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of lysine as a drug. |
| popPK | Lauer_2020 | irrelevant | 0 | 0 | The study measures aflatoxin B1-lysine adducts as a biomarker of environmental exposure, not the pharmacokinetics of lysine as a drug. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on KATP channel function using chemical reagents, not a pharmacokinetic study of lysine. |
| PD | Lee_1994 | not_relevant | 1 | 1 | The paper reports an EC50 for TNBS (a chemical reagent) inhibiting radioligand binding, but does not report a pharmacodynamic exposure-response relationship for the drug lysine. |
| PGx | Lei_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of L-lysine supplementation on autoimmune hepatitis in mice and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Lemoine_2015 | irrelevant | 0 | 0 | The study focuses on bioreactor engineering and microbial metabolism of Corynebacterium glutamicum, not the pharmacokinetics of lysine in a biological host. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study focuses on LSD1 inhibitors (drugs targeting an enzyme), not the pharmacokinetics of the amino acid lysine itself. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a clinical trial on Parkinson's disease that measures lysine as a biomarker/metabolite, not a pharmacokinetic study of lysine as a drug. |
| PGx | Li_2025_2 | not_relevant | 0 | 0 | The paper identifies lysine crotonylation-related biomarkers (DPYD, PRDX3) for pre-eclampsia diagnosis and does not report pharmacokinetic or pharmacodynamic parameters of lysine or any drug. |
| popPK | Li_2026 | irrelevant | 4 | 1 | The study models postprandial amino acid kinetics in pigs using a van Milgen model (parameters Ctarget, AUC, lambda, Cdelta) rather than standard PK parameters (CL, V, ka), and the specific numeric parameter values are located in Supplementary Table S1 which is not provided. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PF-06804103 (an antibody-drug conjugate), not lysine. |
| popPK | Li_2026_3 | irrelevant | 0 | 0 | The paper describes a material science study on fungal conidia and agrochemical delivery, not the pharmacokinetics of lysine. |
| popPK | Li_2026_4 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody gotistobart, not for the drug lysine. |
| PD | Li_2026_4 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for gotistobart but explicitly states that the model provides a foundation for *subsequent* exposure-response analyses, meaning no pharmacodynamic (PD) or exposure-response data or parameters are reported in this text. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remimazolam tosilate, not lysine. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PopPK and PBPK) modeling to derive dose recommendations based on exposure matching; it does not report any pharmacodynamic data, concentration-effect relationships, or numeric PD parameters. |
| PGx | Lin_2024 | not_relevant | 0 | 0 | The paper investigates the role of ABCG2-expressing endothelial cells in vascular development and regeneration, not the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Liochev_2005 | irrelevant | 0 | 0 | The paper discusses the biochemical mechanism of lysine biosynthesis in yeast and oxidative stress, not pharmacokinetic parameters. |
| PD | Liu_2019 | not_relevant | 3 | 2 | The paper reports a single IC50 value for an enzyme inhibitor and qualitative cell proliferation effects, but lacks a full concentration-response curve, dose-response analysis, or PK/PD modeling required for extractable PD parameters. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper investigates the effect of ARID1A loss on the efficacy of the BET inhibitor JQ1 in lung cancer, not the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Lohman_2015 | irrelevant | 0 | 0 | The paper studies nociceptin peptides and their interaction with ORL-1 receptors, not the pharmacokinetics of the amino acid lysine. |
| PGx | Lottenberg_1985 | not_relevant | 0 | 0 | The paper describes a case of plasminogen deficiency and its clinical consequences, not a pharmacogenomic effect on the PK/PD of lysine. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The paper investigates the allosteric activation mechanism of the enzyme SIRT6 by compound MDL-801, not the pharmacokinetics of the amino acid lysine. |
| PD | Ma_2020 | not_relevant | 3 | 2 | The paper reports a single IC50 value (183 nM) for compound 14q and qualitative dose-response trends (e.g., H3K4me1/2 accumulation, migration inhibition) but does not provide a fitted concentration-effect curve, Emax, or other numeric PD parameters derivable from the text. |
| popPK | Maggi_1986 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay in porcine seminal vesicles, not a pharmacokinetic study of lysine. |
| PD | Maggi_1986 | not_relevant | 0 | 0 | The paper studies vasopressin receptor binding and physiology in porcine seminal vesicles, not the pharmacodynamics of lysine. |
| PGx | Mao_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of bilirubin (targeting WNK1) and does not report pharmacogenomic effects on the PK or PD of lysine. |
| popPK | Mathie_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on the pungency of Tasmanian pepper compounds and their interaction with TRPA1 channels, not a pharmacokinetic study of lysine. |
| PGx | Matsuda_1979 | not_relevant | 0 | 0 | The paper describes a metabolic disorder (citrullinemia) affecting lysine metabolism, not a pharmacogenomic effect of a gene variant on the PK/PD of a drug. |
| PGx | McClurg_2017 | not_relevant | 0 | 0 | The paper investigates the role of a specific lysine residue (K311) in the ubiquitination and function of the androgen receptor, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PD | Menna_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for antiproliferative effects, which are dose-response metrics, but it is a medicinal chemistry study focused on structure-activity relationships rather than a pharmacodynamic modeling study; it lacks the specific PD parameterization (e.g., Emax, EC50 with curve fitting, or PK/PD linkage) typically required for extractable PD relationships in this context. |
| PD | Milelli_2018 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition (Ki/IC50) and a single-point cytotoxicity comparison, but lacks a dose-response curve or PK/PD analysis for lysine or the drug. |
| PGx | Miyauchi_2020 | not_relevant | 0 | 0 | The paper investigates the structural role of a di-lysine motif in UGT1A9 protein function, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Mohiuddin_2020 | not_relevant | 0 | 0 | The paper investigates chemical inhibitors of bacterial persistence and does not report pharmacogenomic effects on the PK/PD of lysine. |
| PGx | Morin_1971 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of endogenous amino acids (lysine) in cystinuria, not the effect of a gene variant on the PK/PD of a drug. |
| popPK | Mould_2017 | irrelevant | 0 | 0 | The paper describes the development of inhibitors for the enzyme Lysine Specific Demethylase 1 (LSD1), not the pharmacokinetics of the amino acid lysine. |
| PD | Mould_2017 | not_relevant | 3 | 2 | The paper reports a single EC50 value for a specific compound in a cellular assay, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) relationship or model. |
| PGx | Mummidivarapu_2018 | not_relevant | 0 | 0 | The paper describes structural biology of a supramolecular complex between cytochrome c and PEGylated calixarenes, not a pharmacogenomic effect on the PK/PD of lysine. |
| PGx | Murgia_2025 | not_relevant | 0 | 0 | The paper reports metabolomics biomarkers for Charcot-Marie-Tooth disease, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Nazarnezhad_2022 | not_relevant | 0 | 0 | The paper analyzes SNPs in miRNAs related to Hepatitis B infection and mentions "lysine degradation" as a pathway, but does not report pharmacogenomic effects on the PK or PD of the drug lysine. |
| PGx | Niazi_2021 | not_relevant | 0 | 0 | The paper investigates the effect of cell-penetrating peptides on ABCB1 expression and Doxorubicin cytotoxicity, not the pharmacokinetics or pharmacodynamics of lysine. |
| PGx | Nie_2017 | not_relevant | 0 | 0 | The paper discusses histone modifications (epigenetics) regulating UGT1A1 expression, not pharmacogenomic effects of gene variants on the PK/PD of lysine. |
| PGx | Niechi_2023 | not_relevant | 0 | 0 | The paper investigates the role of a lysine mutation in the ECE1c protein on glioblastoma cell aggressiveness, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| popPK | Nordmeier_2022 | irrelevant | 0 | 0 | The study investigates the in vitro pharmacodynamics (MOR activation) of the opioid U-47700 and its metabolites, not the pharmacokinetics of lysine. |
| popPK | OReilly_2006 | irrelevant | 0 | 0 | The paper studies the WNK kinase pathway in mouse kidney, where "lysine" refers to an amino acid residue in the protein structure, not the drug lysine. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of elafibranor and its metabolite GFT1007, not lysine. |
| popPK | Parton_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carprofen and aspirin (salicylate), not lysine; lysine is only mentioned as part of the compound name "DL-lysine acetyl salicylate" (aspirin). |
| popPK | Peer_2016 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Peer_2016 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of belinostat and UGT1A1 genotype, not on lysine, and does not report pharmacodynamic or exposure-response parameters. |
| PGx | Peer_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of belinostat, not lysine. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper studies a genetic disease (PKAN) and the effect of supplements on cellular markers and clinical symptoms, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper studies nutritional responses to amino acids in chickens, not the pharmacokinetics or pharmacodynamics of a drug. |
| PD | Primi_2026 | not_relevant | 3 | 2 | The paper reports a single IC50 value (160 nM) for a specific compound in a biochemical assay, but does not provide a dose-response curve, multiple data points, or a pharmacodynamic model (population or individual) to derive parameters like Emax or slope. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not lysine. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of imipenem and PK/PD target attainment (fT&gt;MIC), not on lysine or any pharmacodynamic exposure-response relationship for lysine. |
| popPK | Raj_2004 | irrelevant | 0 | 0 | The study focuses on protein turnover and amino acid transport kinetics in ESRD patients, not on the pharmacokinetic disposition parameters (CL, V, ka) of lysine as a drug. |
| popPK | Raschka_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acetylsalicylic acid (ASA) and its metabolite salicylic acid, not for lysine itself. |
| PD | Reshma_2017 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for enzyme inhibition (LAT), which is a pharmacological potency metric, but does not report a pharmacodynamic (exposure-response) relationship for the drug in a biological system (e.g., PK/PD fit, dose-effect curve in vivo or in vitro with time/concentration dynamics). |
| PGx | Reverdy_2018 | not_relevant | 0 | 0 | The paper studies protein lysine acetylation in Bacillus subtilis, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| popPK | Reymann_1986 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of amino acid transport in rat jejunum, not a pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for lysine. |
| PGx | Rinschen_2022 | not_relevant | 0 | 0 | The paper investigates lysine metabolism and its protective effects in hypertension but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Rizvi_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and imaging properties of peptide nanoparticles containing lysine residues, not the pharmacokinetics of lysine as a drug. |
| popPK | Rossoni_2025 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of gustatory sensitivity in bumblebees, not a pharmacokinetic study, and reports no disposition parameters for lysine. |
| PGx | Rother_2023 | not_relevant | 0 | 0 | The paper investigates the role of acid ceramidase and ASAH1 SNPs in innate immune memory and cytokine responses, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Saettini_2023 | not_relevant | 0 | 0 | The paper describes a genetic disease (KARS1 mutations) affecting lysine metabolism and immune function, but does not report pharmacogenomic effects on the PK/PD of a specific drug. |
| PGx | Sasaki_2018 | not_relevant | 0 | 0 | The paper describes a genetic variant associated with a disease phenotype (FSGS) and lipid metabolism, but does not report pharmacokinetic or pharmacodynamic parameters for the drug lysine. |
| popPK | Sawutz_1991 | irrelevant | 0 | 0 | The paper describes the synthesis and binding/functional characterization of a biotinylated bradykinin analog, not the pharmacokinetics of lysine. |
| PGx | Schuurmans_2025 | not_relevant | 0 | 0 | The paper investigates a genetic disease mechanism (ALDH7A1 deficiency) and a therapeutic target (AASS) in cell models, but does not report pharmacogenomic effects on the PK or PD of a specific drug. |
| popPK | Schwarz_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a PET tracer ([18F]MNI-1054) and an LSD1 inhibitor (TAK-418), not the amino acid lysine. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ocrelizumab, not lysine. |
| popPK | Shadrick_2018 | irrelevant | 0 | 0 | The paper describes the design and binding mechanisms of BET inhibitors targeting acetylated-lysine residues, not the pharmacokinetics of lysine itself. |
| PD | Shadrick_2018 | not_relevant | 0 | 0 | The paper reports in vitro binding thermodynamics (ITC) and cellular potency (EC50) for a BET inhibitor, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response relationship for lysine or the drug. |
| PD | Shen_1994 | not_relevant | 0 | 0 | The paper reports IC50 values for diphtheria toxin mutants, not a pharmacodynamic or exposure-response relationship for the drug lysine. |
| popPK | Shimohigashi_1995 | irrelevant | 0 | 0 | The paper investigates the interaction of snake venom enzymes with thrombin receptors and mentions lysine only in the context of a molecular recognition cluster, not as a drug subject to pharmacokinetic analysis. |
| popPK | Siddiqui_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of VDAC channels and NAC, where lysine is only mentioned as a binding site residue, not as a subject drug for PK analysis. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | The paper is a computational study on olfactory receptor interactions with haloanisoles, where "lysine" refers to an amino acid residue in the protein structure, not the drug lysine. |
| popPK | Smith_1981 | irrelevant | 0 | 0 | The paper studies the enzymatic regulation of aspartokinase by lysine, not the pharmacokinetics of lysine. |
| PD | Smith_1981 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Hill equation parameters for lysine-sensitive aspartokinase), not pharmacodynamic exposure-response relationships for a drug in a biological system. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii, not the pharmacokinetics of lysine. |
| popPK | Song_1994 | irrelevant | 0 | 0 | The paper studies the enzyme pantothenate kinase in E. coli, not the pharmacokinetics of the drug lysine. |
| PD | Song_1994 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and structural biology of pantothenate kinase in E. coli, not a pharmacodynamic exposure-response relationship for the drug lysine. |
| PGx | Song_2025 | not_relevant | 0 | 0 | The paper investigates lncRNAs associated with lysine crotonylation in glioma prognosis and immune response, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Sun_2021 | not_relevant | 0 | 0 | The paper describes the mechanism of CYP3A4 inactivation by icotinib and does not report any pharmacogenomic effects on lysine PK/PD parameters. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for 5-fluorouracil, not lysine. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Suzuki_1995 | irrelevant | 0 | 0 | The provided text is publisher boilerplate from BioOne and contains no scientific content, pharmacokinetic data, or mention of lysine. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not lysine. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin and does not report any pharmacodynamic (PD) or exposure-response models or parameters. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not lysine. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and sampling strategies for busulfan, with no mention of lysine or any pharmacodynamic (PD) parameters. |
| PD | Tang_2023 | not_relevant | 3 | 2 | The paper reports in vitro IC50 and anti-proliferative potency, but lacks a formal PK/PD model, exposure-response analysis, or derivable PD parameters (Emax, EC50, slope) linking systemic exposure to effect. |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, not lysine. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Teng_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of QO58-lysine (a Kv7 channel opener salt), not the amino acid lysine. |
| popPK | Tesfamariam_2022 | irrelevant | 0 | 0 | The study measures aflatoxin B1-lysine adducts as a biomarker of exposure to assess fetal growth, not the pharmacokinetics of lysine itself. |
| popPK | Tolmacheva_2013 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of lysine-containing amide conjugates, not the pharmacokinetics of lysine itself. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not contain any pharmacokinetic data or parameters for lysine. |
| PD | Tosca_2025 | not_relevant | 0 | 0 | The paper is a conceptual review on the application of Large Language Models in pharmacometrics and does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for lysine or any other drug. |
| PGx | Tripathy_2025 | not_relevant | 0 | 0 | The paper focuses on tumor organoid drug screening for gliomas and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Tso_2022 | irrelevant | 0 | 0 | The study is a metabolomics analysis of cardiovascular health in athletes, not a pharmacokinetic study of lysine as a drug. |
| popPK | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of PKPD models for anesthetic agents (e.g., fentanyl, propofol) and does not report pharmacokinetic parameters for lysine. |
| PD | Tulbah_2026 | not_relevant | 3 | 2 | The paper is a review of PK/PD models for anesthetic agents (propofol, remifentanil, fentanyl, etc.) and does not report any pharmacodynamic data or parameters for lysine. |
| PGx | Uchi_2021 | not_relevant | 0 | 0 | The paper reports genomic mutations in cancer genes (including KMT2D) but does not report pharmacokinetic or pharmacodynamic effects of lysine or any drug. |
| popPK | Vaswani_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the EZH2 inhibitor CPI-1205, not for the amino acid lysine. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper describes the mechanism of action of a fungicide (10-deacetylbacatin III) inhibiting lysine biosynthesis in a pathogen, not a pharmacodynamic exposure-response relationship for lysine as a drug in a host. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving CYP2C9 and mentions lysine residue modification as a molecular mechanism, but does not report a pharmacogenomic effect of a gene variant on the PK/PD of lysine. |
| PGx | Wang_2022_2 | not_relevant | 0 | 0 | The paper discusses a viral protein mutation affecting virus attachment and virulence, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Wang_2022_3 | not_relevant | 0 | 0 | The paper investigates the mechanism of ritonavir-induced hepatotoxicity via lncRNAs and CYP3A4, not the pharmacokinetics or pharmacodynamics of lysine. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper analyzes genetic characteristics of colorectal neuroendocrine neoplasms and mentions lysine degradation pathways in the context of cancer metastasis, but does not report pharmacogenomic effects on the PK or PD of the drug lysine. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on population pharmacokinetic models for polymyxin B, not lysine. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (popPK) model library for polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to evaluate uncertainty quantification metrics, not a pharmacokinetic study of lysine. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper focuses on uncertainty quantification methods for a simulated PK model (plasma concentration) and does not report any pharmacodynamic (PD) or exposure-response relationship for lysine or any other drug. |
| popPK | Weeks_2000 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a lysine-spermine conjugate (ORI 1202) as a polyamine transport inhibitor in vitro and in xenograft models, not the pharmacokinetic disposition parameters of lysine itself. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the evolutionary genomics of Wolbachia bacteria and their metabolic pathways (including lysine biosynthesis) in nematodes, not on human pharmacogenomics or drug PK/PD parameters. |
| popPK | Winne_1987 | irrelevant | 2 | 1 | The study is an in situ absorption mechanism analysis in rats focusing on unstirred layer resistance, not a systemic pharmacokinetic study reporting standard disposition parameters like clearance or volume of distribution for lysine. |
| PGx | Wraith_1992 | not_relevant | 0 | 0 | The paper discusses T cell receptor recognition of a peptide containing lysine in the context of autoimmunity, not the pharmacokinetics or pharmacodynamics of lysine as a drug. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The paper studies LSD1 inhibitors and histone lysine methylation, not the pharmacokinetics of the drug lysine. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper describes the discovery of histone acetyltransferase inhibitors and their biological activity, not the pharmacokinetics of the amino acid lysine. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction involving a WDR5 inhibitor and ABC transporters, not a pharmacogenomic effect of a gene variant on the PK/PD of lysine. |
| PGx | Wu_2026 | not_relevant | 0 | 0 | The paper describes a method for site-specific lysine lactylation using genetic code expansion, not a pharmacogenomic effect on the PK/PD of lysine as a drug. |
| popPK | Wu_2026_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not lysine. |
| PD | Wu_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not lysine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not lysine. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, but it does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daptomycin, not lysine. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PopPK) modeling and simulation of daptomycin exposure (AUC, Cmin) and probability of target/toxicity attainment; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for lysine or any other drug. |
| popPK | Xiong_2021 | irrelevant | 0 | 0 | The paper studies tick neuropeptides and receptor activity, not the pharmacokinetics of the drug lysine. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The study focuses on the development and pharmacodynamics of an anti-PCSK9 antibody, not the pharmacokinetics of lysine. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not lysine. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and exposure prediction (AUC) for polymyxin B, with no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Xue_2023 | not_relevant | 0 | 0 | The paper studies UGT enzyme dimerization and glucuronidation of zidovudine/propofol, not the pharmacokinetics or pharmacodynamics of lysine. |
| popPK | Yamazaki_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the drug PF06821497, not the amino acid lysine, which is only mentioned as part of a histone modification biomarker (H3K27me3). |
| PD | Yanagawa_1987 | not_relevant | 0 | 0 | The paper describes the purification of conotoxins and their binding to sodium channels, not the pharmacodynamics of lysine. |
| popPK | Yang_2000 | irrelevant | 0 | 0 | The study investigates the physiological effects of dietary lysine intake on hormones and metabolism in sows, not the pharmacokinetic disposition parameters (CL, V, ka) of lysine as a drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug iruplinalkib, not lysine. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not study lysine. |
| PD | Zaidi_2026 | not_relevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not contain any data, analysis, or parameters related to lysine or its pharmacodynamics. |
| PD | Zamora_1986 | not_relevant | 0 | 0 | The paper describes a toxicology model for NO2 exposure and mentions 3H-lysine incorporation only as a viability assay, not as a pharmacodynamic study of lysine itself. |
| PGx | Zhan_2025 | not_relevant | 0 | 0 | The study investigates causal relationships between circulating amino acids and sarcopenia traits using Mendelian randomization, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of lysine as a drug. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on the optimization of a peptoid for vimentin binding and its effect on lung cancer cells, with no mention of lysine or any pharmacodynamic/exposure-response analysis for lysine. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antifungal coumarin derivatives, and lysine is only mentioned as an amino acid residue in a molecular docking interaction, not as a subject drug for pharmacokinetic analysis. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of imipenem pharmacokinetics, not lysine. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates the role of the TRIM31 gene in atherosclerosis and LOX-1 ubiquitination, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Zhang_2026_2 | not_relevant | 0 | 0 | The paper describes a genetic mutation affecting lysine lactylation (a post-translational modification) and ovarian function, not the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | Zhao_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism-based inactivation of CYP3A by evodol and does not report any pharmacogenomic effects on the PK or PD of lysine. |
| PD | Zheng_2023 | not_relevant | 3 | 2 | The paper reports in vitro enzymatic and cellular IC50 values for a new compound class, but does not provide a pharmacokinetic (PK) profile or an exposure-response (PD) model linking plasma/tissue concentrations to effect. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The paper focuses on a prognostic model for hepatocellular carcinoma based on isonicotinylation (Kinic) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of lysine. |
| PGx | Zong_2024 | not_relevant | 0 | 0 | The paper describes a post-translational modification (lysine lactylation) mediated by AARS1 in cancer biology, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the drug lysine. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper is a review on the genetics of gout and innate immunity, focusing on uric acid and inflammasomes, and does not report pharmacogenomic effects on the PK or PD of lysine. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetics for immunoglobulins (IgG), not lysine. |
| PD | van_2026 | not_relevant | 3 | 0 | The paper is a systematic review of immunoglobulin PK/PD models and does not report any PD relationship or numeric parameters for lysine. |
| popPK | von_2013 | irrelevant | 0 | 0 | The paper focuses on antimalarial drug discovery targeting deoxyhypusine hydroxylase, where lysine is mentioned only as a structural component of the enzyme's substrate (EIF-5A), not as a subject drug for pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
