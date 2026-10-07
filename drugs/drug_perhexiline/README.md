<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;perhexiline&quot;}]"></div>

# perhexiline

- **generic name:** perhexiline
- **ATC codes:** `C08EX02`
- **DrugBank:** [DB01074](https://go.drugbank.com/drugs/DB01074) · **PubChem:** [CID 4746](https://pubchem.ncbi.nlm.nih.gov/compound/4746)
- **molar mass:** 277.4879 g/mol (C19H35N) — DrugBank
- **groups:** approved

## About

Perhexiline is a calcium channel blocker and vasodilator used as a cardiovascular drug, mainly for angina. It is considered approved, though it is not authorised in the European Union and is used only in a few countries such as Australia and New Zealand.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1232737](https://www.wikidata.org/wiki/Q1232737) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:05 | 4:06 | 0/0/0 | 2/0/1 | 0/0/1 | 112,194/5,780 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 4/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bouwmeester_2023_cell_viability](drugs/drug_perhexiline/pd_Bouwmeester_2023_cell_viability.md) | cell viability ← perhexiline · direct Emax (saturable) effect | — | Bouwmeester MC et al., Drug Metabolism of Hepatocyte-like Orga…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28020621](https://doi.org/10.3390/molecules28020621) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obara_2025_Relative_cell_viability](drugs/drug_perhexiline/pd_Obara_2025_Relative_cell_viability.md) | Relative cell viability ← perhexiline · direct sigmoid Emax (Hill) effect | — | Obara C et al., Development of a CYP2D6-enhanced HepaRG…, PloS one (2025) | [10.1371/journal.pone.0339559](https://doi.org/10.1371/journal.pone.0339559) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Midei_2021_JTpeak_c](drugs/drug_perhexiline/pd_Midei_2021_JTpeak_c.md) | JTpeak_c ← perhexiline · direct linear effect | — | Midei MG et al., Electrophysiological and ECG Effects of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1934](https://doi.org/10.1002/jcph.1934) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Midei_2021_QTcF](drugs/drug_perhexiline/pd_Midei_2021_QTcF.md) | QTcF ← perhexiline · direct linear effect | — | Midei MG et al., Electrophysiological and ECG Effects of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1934](https://doi.org/10.1002/jcph.1934) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Chong_2015](drugs/drug_perhexiline/pgx_Chong_2015_CYP2D6_Q22.md) | Chong CR et al., Stereoselective handling of perhexiline…, European journal of clinica… (2015) | [10.1007/s00228-015-1934-8](https://doi.org/10.1007/s00228-015-1934-8) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=perhexiline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CPT1A (inhibitor), CPT1B (inhibitor), CPT2 (inhibitor), KCNH2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 109 matched, 103 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kennedy_1998.pdf` | Kennedy JA et al., Effect of trimetazidine on carnitine pa…, Cardiovascular drugs and th… (1998) | pd | 4 | [10.1023/a:1007768716934](https://doi.org/10.1023/a:1007768716934) | [9825181](https://www.ncbi.nlm.nih.gov/pubmed/9825181) | metadata signals extractable PD data (IC50) |
| `Kennedy_2000.pdf` | Kennedy JA et al., Effect of perhexiline and oxfenicine on…, Journal of cardiovascular p… (2000) | pd | 4 | [10.1097/00005344-200012000-00016](https://doi.org/10.1097/00005344-200012000-00016) | [11117381](https://www.ncbi.nlm.nih.gov/pubmed/11117381) | metadata signals extractable PD data (IC50) |
| `Kennedy_2006.pdf` | Kennedy JA et al., Effect of the anti-anginal agent, perhe…, European journal of pharmac… (2006) | pd | 4 | [10.1016/j.ejphar.2005.11.058](https://doi.org/10.1016/j.ejphar.2005.11.058) | [16413015](https://www.ncbi.nlm.nih.gov/pubmed/16413015) | metadata signals extractable PD data (IC50) |
| `Rampe_1995.pdf` | Rampe D et al., Voltage- and time-dependent block by pe…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616429](https://www.ncbi.nlm.nih.gov/pubmed/7616429) | metadata signals extractable PD data (IC50) |
| `Silver_1985.pdf` | Silver PJ et al., Effects of the calcium antagonists perh…, The Journal of pharmacology… (1985) | pd | 4 | not captured | [3162016](https://www.ncbi.nlm.nih.gov/pubmed/3162016) | metadata signals extractable PD data (IC50) |
| `Ashrafian_2007.pdf` | Ashrafian H et al., Perhexiline, Cardiovascular drug reviews (2007) | pgx | 8 | [10.1111/j.1527-3466.2007.00006.x](https://doi.org/10.1111/j.1527-3466.2007.00006.x) | [17445089](https://www.ncbi.nlm.nih.gov/pubmed/17445089) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Davies_2006.pdf` | Davies BJ et al., The influence of CYP2D6 genotype on tro…, British journal of clinical… (2006) | pgx | 8 | [10.1111/j.1365-2125.2005.02570.x](https://doi.org/10.1111/j.1365-2125.2005.02570.x) | [16487226](https://www.ncbi.nlm.nih.gov/pubmed/16487226) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Davies_2007.pdf` | Davies BJ et al., CYP2B6, CYP2D6, and CYP3A4 catalyze the…, Drug metabolism and disposi… (2007) | pgx | 8 | [10.1124/dmd.106.012252](https://doi.org/10.1124/dmd.106.012252) | [17050648](https://www.ncbi.nlm.nih.gov/pubmed/17050648) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Davies_2008.pdf` | Davies BJ et al., Steady-state pharmacokinetics of the en…, British journal of clinical… (2008) | pgx | 8 | [10.1111/j.1365-2125.2007.03015.x](https://doi.org/10.1111/j.1365-2125.2007.03015.x) | [17875193](https://www.ncbi.nlm.nih.gov/pubmed/17875193) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Inglis_2007.pdf` | Inglis SC et al., Effect of CYP2D6 metabolizer status on…, Pharmacogenetics and genomi… (2007) | pgx | 8 | [10.1097/FPC.0b013e32800ffba0](https://doi.org/10.1097/FPC.0b013e32800ffba0) | [17429312](https://www.ncbi.nlm.nih.gov/pubmed/17429312) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sallustio_2002.pdf` | Sallustio BC et al., Pharmacokinetics of the antianginal age…, British journal of clinical… (2002) | pgx | 8 | [10.1046/j.1365-2125.2002.01618.x](https://doi.org/10.1046/j.1365-2125.2002.01618.x) | [12207628](https://www.ncbi.nlm.nih.gov/pubmed/12207628) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sørensen_2003.pdf` | Sørensen LB et al., Polymorphic hydroxylation of perhexilin…, British journal of clinical… (2003) | pgx | 8 | [10.1046/j.1365-2125.2003.01805.x](https://doi.org/10.1046/j.1365-2125.2003.01805.x) | [12814462](https://www.ncbi.nlm.nih.gov/pubmed/12814462) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hussein_2001.pdf` | Hussein R et al., Population pharmacokinetics of perhexil…, Therapeutic drug monitoring (2001) | pgx | 7 | [10.1097/00007691-200112000-00007](https://doi.org/10.1097/00007691-200112000-00007) | [11802096](https://www.ncbi.nlm.nih.gov/pubmed/11802096) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Jones_2004.pdf` | Jones TE et al., Concentration-time profile for perhexil…, British journal of clinical… (2004) | pgx | 7 | [10.1046/j.1365-2125.2003.02003.x](https://doi.org/10.1046/j.1365-2125.2003.02003.x) | [14998422](https://www.ncbi.nlm.nih.gov/pubmed/14998422) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sheikh_2014.pdf` | Sheikh AR et al., Interaction of terbinafine (anti-fungal…, Heart, lung & circulation (2014) | pgx | 7 | [10.1016/j.hlc.2013.11.012](https://doi.org/10.1016/j.hlc.2013.11.012) | [24373912](https://www.ncbi.nlm.nih.gov/pubmed/24373912) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Barclay_2003.pdf` | Barclay ML et al., Correlation of CYP2D6 genotype with per…, Pharmacogenetics (2003) | pgx | 5 | [10.1097/00008571-200310000-00006](https://doi.org/10.1097/00008571-200310000-00006) | [14515061](https://www.ncbi.nlm.nih.gov/pubmed/14515061) | metadata signals extractable PGX data (CYP2D6) |
| `Crespi_1995.pdf` | Crespi CL et al., Comparison of substrate metabolism by w…, Pharmacogenetics (1995) | pgx | 5 | [10.1097/00008571-199508000-00007](https://doi.org/10.1097/00008571-199508000-00007) | [8528270](https://www.ncbi.nlm.nih.gov/pubmed/8528270) | metadata signals extractable PGX data (CYP2D6) |
| `Davies_2004.pdf` | Davies BJ et al., Clinical inhibition of CYP2D6-catalysed…, British journal of clinical… (2004) | pgx | 5 | [10.1046/j.1365-2125.2003.02033.x](https://doi.org/10.1046/j.1365-2125.2003.02033.x) | [15025744](https://www.ncbi.nlm.nih.gov/pubmed/15025744) | metadata signals extractable PGX data (CYP2D6) |
| `Gardiner_2005.pdf` | Gardiner SJ et al., Pharmacogenetic testing for drug metabo…, Pharmacogenetics and genomi… (2005) | pgx | 5 | [10.1097/01213011-200505000-00013](https://doi.org/10.1097/01213011-200505000-00013) | [15864139](https://www.ncbi.nlm.nih.gov/pubmed/15864139) | metadata signals extractable PGX data (CYP2D6) |
| `Kerry_1994.pdf` | Kerry NL et al., The role of CYP2D6 in primary and secon…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb04348.x](https://doi.org/10.1111/j.1365-2125.1994.tb04348.x) | [7826826](https://www.ncbi.nlm.nih.gov/pubmed/7826826) | metadata signals extractable PGX data (CYP2D6) |
| `Zhang_2009.pdf` | Zhang M et al., Determination of perhexiline and its me…, Journal of chromatography.… (2009) | pgx | 5 | [10.1016/j.jchromb.2009.07.021](https://doi.org/10.1016/j.jchromb.2009.07.021) | [19646935](https://www.ncbi.nlm.nih.gov/pubmed/19646935) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T05:01:57.954139+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2019 | irrelevant | 0 | 0 | The paper focuses on methodological development for visual predictive checks using simulated data and an irinotecan case study, with no mention of perhexiline. |
| PD | Arshad_2019 | not_relevant | 0 | 0 | The paper focuses on methodological development of visual predictive checks for mixture models using irinotecan PK data, with no mention of perhexiline or any pharmacodynamic/exposure-response analysis. |
| popPK | Batra_1991 | irrelevant | 0 | 0 | The study is an in-vitro cell proliferation assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Bouwmeester_2023 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment using perhexiline as a probe compound to determine EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Bouwmeester_2023 | not_relevant | 0 | 0 | The paper evaluates in vitro toxicity and drug metabolism in organoids but does not report pharmacogenomic effects on perhexiline PK/PD parameters. |
| popPK | Brogden_1987 | irrelevant | 0 | 0 | The paper is a review of disopyramide, and perhexiline is only mentioned as a comparator drug without any pharmacokinetic data provided. |
| PD | Brogden_1987 | not_relevant | 0 | 0 | The paper is a review of disopyramide and only mentions perhexiline in a list of comparable drugs without providing any specific pharmacodynamic data or parameters for it. |
| popPK | Carlsson_2009 | irrelevant | 0 | 0 | The paper is a methodological study on NONMEM mixture models and does not report pharmacokinetic parameters for perhexiline. |
| PD | Carlsson_2009 | not_relevant | 0 | 0 | The paper is a methodological study on NONMEM mixture subroutines and does not report any pharmacodynamic or exposure-response data for perhexiline. |
| PGx | Chong_2015 | not_relevant | 5 | 2 | The paper mentions CYP2D6 status but focuses on stereoselective myocardial accumulation and does not report specific pharmacokinetic or pharmacodynamic effect sizes for perhexiline based on genotype. |
| PGx | Chong_2022 | not_relevant | 2 | 0 | The paper mentions CYP2D6 poor metabolizer phenotype requiring dosage reduction, but does not report quantitative pharmacokinetic or pharmacodynamic parameters for this genotype. |
| PGx | Clark_1988 | not_relevant | 2 | 0 | The paper investigates the association between sparteine oxidation phenotype and adverse drug reactions, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for perhexiline. |
| popPK | Coppens-Exandier_2026 | irrelevant | 0 | 0 | The paper describes lentiviral vector construction for CYP2D6 expression in HepaRG cells and does not report pharmacokinetic parameters for perhexiline. |
| PD | Coppens-Exandier_2026 | not_relevant | 0 | 0 | The text describes the generation of CYP2D6-expressing HepaRG cell lines using lentiviral vectors and CRISPR/Cas9, with no mention of perhexiline or any pharmacodynamic/exposure-response analysis. |
| PGx | Coppens-Exandier_2026 | not_relevant | 2 | 5 | The paper reports in vitro toxicity differences (IC50) in CYP2D6-transgenic cells versus parental cells, but does not report a pharmacogenomic effect on PK/PD parameters in humans or a specific genotype-phenotype correlation for perhexiline. |
| PGx | Corkindale_2007 | not_relevant | 0 | 0 | The paper is a qualitative study on the adoption of pharmacogenetic testing in Australia and does not report any pharmacokinetic or pharmacodynamic data for perhexiline. |
| PGx | Crespi_1995 | not_relevant | 0 | 0 | The paper studies CYP2D6 variants using bufuralol, debrisoquine, metoprolol, and sparteine as substrates; perhexiline is only mentioned as an inhibitor, not as the substrate for which PK/PD parameters are being analyzed. |
| PGx | Davies_2006_2 | not_relevant | 2 | 0 | The paper describes a new analytical method for measuring perhexiline enantiomers and mentions CYP2D6 polymorphism as background context, but it does not report pharmacogenomic data or quantify the effect of genotypes on PK parameters. |
| PGx | Davies_2006_3 | not_relevant | 2 | 5 | The paper describes an analytical method for perhexiline metabolites and reports PK data only for CYP2D6 extensive metabolizers, without comparing different genotypes to demonstrate a pharmacogenomic effect. |
| popPK | Dhakal_2022 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity investigation of perhexiline on cancer cells and does not report any pharmacokinetic parameters. |
| popPK | Duan_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study identifying perhexiline as a KRAS inhibitor in organoids and does not report pharmacokinetic parameters. |
| PD | Duan_2024 | not_relevant | 0 | 0 | The text describes a drug screening and mechanism of action study but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Ehrlich_2006 | irrelevant | 0 | 0 | The paper is an electrophysiological study characterizing potassium currents in pig atrium, where perhexiline is used only as a pharmacological tool to block Kv1.5 channels, not as a subject for pharmacokinetic analysis. |
| PGx | Eichelbaum_1984 | not_relevant | 2 | 0 | The paper mentions perhexiline only as an example of a drug with impaired metabolism in poor metabolizers, without reporting specific PK/PD data or quantitative effects for perhexiline. |
| PGx | Eichelbaum_1992 | not_relevant | 2 | 0 | The paper is a general review of pharmacogenomic principles and mentions perhexiline only as a qualitative example of a drug where slow acetylators are at risk for toxicity, without reporting specific PK/PD parameter data or effect sizes. |
| PGx | Farrell_2002 | not_relevant | 3 | 0 | The text mentions a CYP2D6 polymorphism affecting perhexiline oxidation (PK) in the context of drug-induced liver disease, but it is a general review statement without specific data, effect sizes, or detailed pharmacokinetic parameters. |
| PGx | Gardiner_2005 | not_relevant | 0 | 0 | The paper is a survey of clinical testing utilization and does not report pharmacokinetic or pharmacodynamic data or effect sizes for perhexiline. |
| popPK | Gardiner_2006 | irrelevant | 0 | 0 | The paper is a review of pharmacogenetics that mentions perhexiline only as a candidate for genetic testing, without reporting any quantitative pharmacokinetic parameters. |
| PD | Gardiner_2006 | not_relevant | 1 | 0 | The text is a review discussing the potential for pharmacogenetic testing of perhexiline but does not report any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Gardiner_2006 | not_relevant | 2 | 0 | The paper is a general review that lists perhexiline as a drug with a "potential case" for testing but does not report specific pharmacogenomic effects on PK/PD parameters or provide quantitative data. |
| PGx | Griffiths_2024 | not_relevant | 0 | 0 | The paper discusses CYP2D6 polymorphisms in the introduction as background for perhexiline's variable PK, but the study itself investigates the pharmacodynamic effects of perhexiline and a derivative on cell proliferation in PAH, without reporting new pharmacogenomic data or quantitative PK/PD changes based on genotype. |
| popPK | Grima_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on sodium channel inhibition, not a pharmacokinetic study, and reports no disposition parameters for perhexiline. |
| popPK | Hamdan_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CPT-1 inhibition where perhexiline is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Hamdan_2001 | not_relevant | 1 | 0 | The paper reports IC50 values for S-15176 and mentions perhexiline as a comparator, but does not provide numeric PD parameters or an exposure-response relationship for perhexiline itself. |
| popPK | Hussein_2001 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Hussein_2001 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of perhexiline and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Hussein_2001 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics using routine monitoring data and does not report any pharmacogenomic effects or gene variant associations. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a structural molecular template for CYP2D6 substrates and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Jones_2004 | not_relevant | 0 | 0 | The study analyzes intra- and inter-day variability in perhexiline concentrations in a general patient population without stratifying by genotype or reporting pharmacogenomic effects. |
| popPK | Kennedy_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (CPT-1) and does not report pharmacokinetic disposition parameters for perhexiline. |
| popPK | Kennedy_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition (CPT-1) and does not report pharmacokinetic parameters for perhexiline. |
| PD | Kennedy_1998 | not_relevant | 3 | 5 | The paper reports an IC50 for perhexiline (77 umol/L) in a comparative enzymatic assay, but it is a single-point potency value from a mechanistic study, not a full exposure-response or dose-response relationship analysis for the drug's clinical effect. |
| popPK | Kennedy_1999 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of coronary vasodilation in rat hearts, not pharmacokinetic disposition parameters. |
| popPK | Kennedy_2000 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Kennedy_2000 | not_relevant | 0 | 0 | The paper describes a functional study of perhexiline on isolated rat hearts but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Kennedy_2006 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Kennedy_2006 | not_relevant | 0 | 0 | The paper investigates the effect of perhexiline on superoxide formation in isolated cells/tissues, which is a pharmacological mechanism study, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response analysis in a biological system with drug concentration data. |
| popPK | Kerry_1994 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Kerry_1994 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of dextromethorphan by CYP2D6 and does not contain any pharmacodynamic or exposure-response data for perhexiline. |
| PGx | Kerry_1994 | not_relevant | 0 | 0 | The paper studies dextromethorphan, not perhexiline. |
| PGx | Ling_2011 | not_relevant | 0 | 0 | The study investigates the effects of age, weight, renal function, and cardiac status on perhexiline pharmacokinetics, but does not report any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The paper is a review discussing genetic polymorphisms and mentions perhexiline only as an example of a drug affected by debrisoquine hydroxylase deficiency, without providing any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics that mentions perhexiline only as an example of a drug metabolized by debrisoquine hydroxylase, without providing any specific concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The text mentions perhexiline as a substrate affected by debrisoquine hydroxylase polymorphisms but provides no specific data, effect sizes, or quantitative PK/PD parameters for perhexiline. |
| popPK | Midei_2021 | irrelevant | 2 | 1 | The study is a thorough QT (TQT) assessment focused on cardiac ion channel effects and ECG parameters, reporting only sparse PK summary statistics (Cmax, Tmax) without quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Neul_2021 | not_relevant | 0 | 0 | The study explicitly states that OCT- and MATE1-dependent transport of perhexiline was not detected, and its toxicity appears independent from these transporters. |
| popPK | Obara_2025 | irrelevant | 0 | 0 | The study is an in-vitro cell model development paper that uses perhexiline only as a substrate to demonstrate CYP2D6 activity and cytotoxicity, without reporting any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Obara_2025 | not_relevant | 2 | 5 | The paper reports an in vitro cell model study showing that increased CYP2D6 expression reduces perhexiline cytotoxicity, but it does not report a pharmacogenomic effect (genotype-based) on a PK or PD parameter in humans. |
| popPK | Perrier_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium channels in rat brain slices where perhexiline is used only as a pharmacological probe and found to be inactive, with no pharmacokinetic parameters reported. |
| PD | Perrier_1992 | not_relevant | 0 | 0 | The paper reports that perhexiline was inactive in the assay and provides no numeric PD parameters or concentration-effect relationship for it. |
| popPK | Rampe_1995 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PGx | Schlaepfer_2020 | not_relevant | 0 | 0 | The paper is a review of CPT1A biology and therapeutic potential, with no mention of perhexiline or its pharmacokinetics/pharmacodynamics. |
| PGx | Shah_2006 | not_relevant | 2 | 0 | The paper is a review discussing the theoretical possibility of pharmacogenetic rescue for perhexiline but does not report specific gene variants or quantitative PK/PD parameter changes. |
| PGx | Sheikh_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inhibiting CYP2D6) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Silver_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of contractile protein function and does not report pharmacokinetic parameters. |
| popPK | Silver_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values for calmodulin inhibition, not pharmacokinetic disposition parameters. |
| popPK | Singh_1986 | irrelevant | 0 | 0 | The paper is a review of calcium antagonist mechanisms and classifications, mentioning perhexiline only as a Type IV agent without reporting any pharmacokinetic parameters. |
| PD | Singh_1986 | not_relevant | 1 | 0 | The text is a qualitative review classifying calcium antagonists and mentions perhexiline only as a Type IV agent without providing any numeric PD parameters or exposure-response data. |
| popPK | Sinnappah_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, not perhexiline. |
| PD | Sinnappah_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of metformin in haemodialysis patients and does not report any pharmacodynamic or exposure-response relationship for perhexiline. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockers in cat papillary muscles and does not report pharmacokinetic parameters for perhexiline. |
| PGx | Tseng_2017 | not_relevant | 0 | 0 | The paper reports the development of new chemical analogues to avoid CYP2D6 metabolism, not the effect of a specific human gene variant on the PK/PD of perhexiline. |
| popPK | Walker_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of HERG channel inhibition and does not report pharmacokinetic disposition parameters. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper describes the development of an LC-MS/MS assay for perhexiline and mentions CYP2D6 polymorphism in the introduction, but it does not report any data or results regarding the effect of genetic variants on PK or PD parameters. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of TRIM28 in myocardial ferroptosis and uses perhexiline only as a therapeutic agent to test efficacy, without reporting any pharmacokinetic parameters. |
| PD | Zhu_2026 | not_relevant | 1 | 0 | The paper mentions perhexiline qualitatively as an inhibitor of ferroptosis but provides no concentration-effect data, dose-response curves, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
