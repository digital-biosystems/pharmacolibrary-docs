<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# loperamide

- **generic name:** loperamide
- **ATC codes:** `A07DA03`
- **DrugBank:** [DB00836](https://go.drugbank.com/drugs/DB00836) · **PubChem:** [CID 3955](https://pubchem.ncbi.nlm.nih.gov/compound/3955)
- **molar mass:** 477.038 g/mol (C29H33ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Loperamide is an antidiarrhoeal medicine used to treat diarrhoea, including in conditions such as shigellosis and irritable bowel syndrome. It is widely used and appears on the WHO list of essential medicines, and is also being investigated for other uses such as managing withdrawal symptoms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423751](https://www.wikidata.org/wiki/Q423751) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:04 | 4:30 | 0/2/0 | 0/1/0 | 0/0/1 | 147,041/5,139 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 4/14 | 17/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Valenzuela_2025_loperamide](drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md) | ▶ model + simulator | 1-compartment, oral | 8 | Valenzuela B et al., Evaluation of the Effect of Loperamide…, Clinical and translational… (2025) | [10.1111/cts.70114](https://doi.org/10.1111/cts.70114) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Valenzuela_2025_m1](drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md) | ▶ model + simulator | 1-compartment, oral | 8 | Valenzuela B et al., Evaluation of the Effect of Loperamide…, Clinical and translational… (2025) | [10.1111/cts.70114](https://doi.org/10.1111/cts.70114) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Valenzuela_2025_QTcF](drugs/drug_loperamide/pd_Valenzuela_2025_QTcF.md) | placebo-adjusted change from baseline in Fridericia-corrected QT interval ← M1 · delayed effect through an effect compartment | model (no simulator) | Valenzuela B et al., Evaluation of the Effect of Loperamide…, Clinical and translational… (2025) | [10.1111/cts.70114](https://doi.org/10.1111/cts.70114) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP3A4** | `Q27` · CL/F | metabolism | [Lin_2019](drugs/drug_loperamide/pgx_Lin_2019_CYP3A4_Q27.md) | Lin QM et al., Functional characteristics of CYP3A4 al…, Infection and drug resistan… (2019) | [10.2147/IDR.S215129](https://doi.org/10.2147/IDR.S215129) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=loperamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1A (blocker), CALM1 (inhibitor), KCNH2 (blocker), OPRD1 (target), OPRK1 (target), OPRM1 (target), POMC (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 130 matched, 57 returned
- **screened:** 9  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noh_2021.pdf` | Noh K et al., Use of Intravenous Infusion Study Desig…, Drug metabolism and disposi… (2021) | popPK | 8 | [10.1124/dmd.120.000242](https://doi.org/10.1124/dmd.120.000242) | [33262223](https://pubmed.ncbi.nlm.nih.gov/33262223) | The study reports PK parameters for loperamide in rats, but the specific numeric values are not present in the provided evidence text. |
| `Kalvass_2007.pdf` | Kalvass JC et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacology… (2007) | pd | 5 | [10.1124/jpet.107.119560](https://doi.org/10.1124/jpet.107.119560) | [17646430](https://www.ncbi.nlm.nih.gov/pubmed/17646430) | metadata signals extractable PD data (EC50) |
| `Xu_2018.pdf` | Xu C et al., A continuous-time multistate Markov mod…, Cancer chemotherapy and pha… (2018) | pd | 5 | [10.1007/s00280-018-3621-9](https://doi.org/10.1007/s00280-018-3621-9) | [29915982](https://www.ncbi.nlm.nih.gov/pubmed/29915982) | metadata signals extractable PD data (Emax) |
| `Montgomery_2016.pdf` | Montgomery LE et al., Autonomic modification of intestinal sm…, Advances in physiology educ… (2016) | pd | 4 | [10.1152/advan.00038.2015](https://doi.org/10.1152/advan.00038.2015) | [26873897](https://www.ncbi.nlm.nih.gov/pubmed/26873897) | metadata signals extractable PD data (concentration-effect) |
| `Huang_2015.pdf` | Huang L et al., Differential role of P-glycoprotein and…, Xenobiotica; the fate of fo… (2015) | pgx | 7 | [10.3109/00498254.2014.997324](https://doi.org/10.3109/00498254.2014.997324) | [25539457](https://www.ncbi.nlm.nih.gov/pubmed/25539457) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Niemi_2006.pdf` | Niemi M et al., Itraconazole, gemfibrozil and their com…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-006-0133-z](https://doi.org/10.1007/s00228-006-0133-z) | [16758263](https://www.ncbi.nlm.nih.gov/pubmed/16758263) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Flores-Angulo_2015.pdf` | Flores-Angulo C et al., [Allelic variants of the CYP2D6: *4, *6…, Revista peruana de medicina… (2015) | pgx | 5 | not captured | [26732924](https://www.ncbi.nlm.nih.gov/pubmed/26732924) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-04T19:01:14.329313+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_2022 | irrelevant | 0 | 0 | The study uses loperamide only as a tool to induce constipation in rats to test the effects of ginger extract, and does not report any pharmacokinetic parameters for loperamide. |
| PD | Abidi_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for Zingiber officinale (ZOAE), not for loperamide, which is only used as a tool to induce constipation. |
| PGx | Baig_2020 | not_relevant | 0 | 0 | The paper investigates the anti-cancer mechanism of loperamide in cell lines and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Baker_2007 | not_relevant | 0 | 0 | The paper is a general pharmacological review that mentions CYP3A4 metabolism but does not report specific gene variants or genotypes affecting loperamide PK/PD parameters. |
| PGx | Campodónico_2022 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of cinitapride, not loperamide. |
| PGx | Damont_2016 | not_relevant | 0 | 0 | The study investigates the effect of P-gp inhibitors (cyclosporin A and dipyridamole) on loperamide PK, not the effect of a gene variant or genotype. |
| PGx | Deshpande_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of the ABCB1 mutation on acepromazine, not loperamide. |
| popPK | Diwakarla_2020 | irrelevant | 0 | 0 | The study investigates the pharmacological effect of an RXFP4 agonist on colonic motility in mice, using loperamide only as a tool to induce constipation, and reports no pharmacokinetic parameters for loperamide. |
| PD | Diwakarla_2020 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for INSL5-A13, not loperamide; loperamide is used only as a constipating agent at a single fixed dose. |
| popPK | Dominguez-Gomez_2026 | irrelevant | 0 | 0 | The study is an in silico cardiac safety assessment using ion-channel block data (IC50) and does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) for loperamide. |
| popPK | Farwell_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [(11)C]N-desmethyl-loperamide (a metabolite/analogue) as a P-gp probe, not the disposition parameters of the parent drug loperamide itself. |
| PGx | Flores-Angulo_2015 | not_relevant | 0 | 0 | The paper reports population allele frequencies and phenotype predictions for CYP2D6 but does not measure or report any pharmacokinetic or pharmacodynamic parameters for loperamide. |
| PGx | Haaz_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of irinotecan, not loperamide, and does not report pharmacogenomic effects on loperamide PK/PD. |
| PGx | Hogan_2026 | not_relevant | 0 | 0 | The paper focuses on in vitro-in vivo translation of P-gp transport parameters using cell lines, not on human pharmacogenomic variants affecting loperamide PK/PD. |
| PGx | Huang_2015 | not_relevant | 0 | 0 | The study uses animal knockout models to assess transporter function, not human pharmacogenomic variants affecting loperamide PK/PD. |
| PGx | Hussain_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Berberis lycium extract and does not report any pharmacogenomic effects on the PK or PD of loperamide. |
| popPK | Iqbal_2022 | irrelevant | 0 | 0 | The study investigates the phytochemicals and laxative effects of Chrozophora tinctoria, using loperamide only as a comparator agent to induce constipation, and reports no pharmacokinetic parameters for loperamide. |
| PD | Iqbal_2022 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of plant extracts (Chrozophora tinctoria) and uses loperamide only as a positive control to induce constipation; it does not report a pharmacodynamic or exposure-response relationship for loperamide itself. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of loperamide on CYP enzymes in vitro, not the effect of genetic variants on loperamide's pharmacokinetics or pharmacodynamics. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports herbal-drug interactions (e.g., St John's wort and loperamide causing delirium) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Kalvass_2007 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Kalvass_2007 | not_relevant | 0 | 0 | The paper focuses on seven other opioids and does not report pharmacokinetic or pharmacodynamic data for loperamide. |
| popPK | Kodaira_2014 | irrelevant | 2 | 0 | Loperamide is one of 19 compounds used to validate a general brain/CSF distribution model, and no specific quantitative PK parameters (CL, V, ka) for loperamide are reported in the evidence. |
| popPK | Kreisl_2010 | irrelevant | 2 | 1 | The study uses 11C-N-desmethyl-loperamide as a PET radiotracer to quantify P-glycoprotein function at the blood-brain barrier, rather than reporting systemic pharmacokinetic parameters (CL, V, ka) for loperamide itself. |
| PGx | Lammoglia_2022 | not_relevant | 0 | 0 | The paper is a review of cardiac toxicity and ECG changes associated with loperamide use, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Long_2017 | not_relevant | 2 | 0 | The paper describes a clinical case of loperamide toxicity in a dog with the ABCB1-1Δ mutation and its treatment, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, ED50) or fitted effect sizes for the gene variant. |
| PGx | Loos_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (DDI) between loperamide and docetaxel/ritonavir in mice, not the impact of genetic variants on loperamide pharmacokinetics or pharmacodynamics. |
| popPK | Lubberink_2016 | irrelevant | 0 | 0 | This is a review of PET tracers for P-glycoprotein function, where loperamide is only mentioned as the parent of a tracer (N-desmetyl-loperamide), not as the subject of a PK parameter study. |
| PGx | Mealey_2017 | not_relevant | 0 | 0 | The paper describes the establishment of a cell line for assessing P-gp substrates and mentions loperamide as a known substrate, but it does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Montgomery_2016 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Montgomery_2016 | not_relevant | 0 | 0 | The provided text is only a title regarding autonomic modification of intestinal smooth muscle contractility and contains no data, analysis, or mention of loperamide or pharmacodynamic parameters. |
| PGx | Niemi_2006 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibitors) rather than the effect of a gene variant or genotype on pharmacokinetics. |
| popPK | Noh_2021 | relevant | 8 | 0 | The study reports PK parameters for loperamide in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Paranjpe_2019 | not_relevant | 0 | 0 | The paper reviews neratinib and mentions loperamide only as a prophylactic treatment for diarrhea, without reporting any pharmacogenomic effects on loperamide's PK or PD parameters. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening where loperamide is only a comparator agent found to be cytotoxic, with no pharmacokinetic parameters reported. |
| PD | Pasquereau_2021 | not_relevant | 0 | 0 | The paper reports that loperamide was highly cytotoxic and did not warrant further testing, providing no numeric PD parameters or concentration-effect relationship for loperamide. |
| PGx | Roseberry_2023 | not_relevant | 0 | 0 | The paper discusses loperamide only as a potential repurposed drug for anxiety based on biomarker matching, without reporting any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ryu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET radioligand 18F-FCWAY, and loperamide is used only as a probe substrate to test P-glycoprotein inhibition, not as the subject drug for PK parameter estimation. |
| PGx | Schrickx_2014 | not_relevant | 0 | 0 | The paper reports in vitro P-gp inhibition by spinosad and lists loperamide as a reference substrate, but does not report any pharmacogenomic effect (gene variant) on loperamide's PK or PD. |
| popPK | Seneca_2009 | irrelevant | 2 | 1 | The study focuses on PET imaging and radiation dosimetry of a radiotracer (11C-N-desmethyl-loperamide) rather than reporting standard pharmacokinetic disposition parameters (CL, V, ka) for loperamide itself. |
| popPK | Sher_2022 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract using loperamide only as a tool to induce constipation, and does not report any pharmacokinetic parameters for loperamide. |
| PD | Sher_2022 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of Chrozophora tinctoria extract, using loperamide only as a tool to induce constipation in the animal model, and does not report any pharmacodynamic or exposure-response relationship for loperamide itself. |
| PGx | Simon_2021 | not_relevant | 0 | 0 | The paper is a case report on loperamide misuse and cardiotoxicity, containing no information on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Storelli_2021 | irrelevant | 1 | 0 | The study focuses on in vitro blood-brain barrier permeability and P-gp efflux modeling for N-desmethyl loperamide, not systemic pharmacokinetic parameters (CL, V, t1/2) for loperamide itself. |
| popPK | Tran_2005 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic analysis of P-gp transport kinetics in cell monolayers, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for loperamide. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| PD | Xu_2018 | not_relevant | 0 | 0 | The paper focuses on a Markov model for diarrhea in breast cancer patients treated with lumretuzumab, pertuzumab, and paclitaxel, and does not report any pharmacodynamic or exposure-response data for loperamide. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP/transporter inhibitors, not pharmacogenomic effects of gene variants on loperamide PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 19:01 UTC</sub>
