<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;theobromine&quot;}]"></div>

# theobromine

- **generic name:** theobromine
- **ATC codes:** `C03BD01`, `R03DA07`
- **DrugBank:** [DB01412](https://go.drugbank.com/drugs/DB01412) · **PubChem:** [CID 5429](https://pubchem.ncbi.nlm.nih.gov/compound/5429)
- **molar mass:** 180.164 g/mol (C7H8N4O2) — DrugBank
- **groups:** investigational

## About

**Description.** Theobromine (3,7-dimethylxanthine) is the principle alkaloid in Theobroma cacao (the cacao bean) and other plants. A xanthine alkaloid that is used as a bronchodilator and as a vasodilator. It has a weaker diuretic activity than theophylline and is also a less powerful stimulant of smooth muscle. It has practically no stimulant effect on the central nervous system. It was formerly used as a diuretic and in the treatment of angina pectoris and hypertension. (From Martindale, The Extra Pharmacopoeia, 30th ed, pp1318-9)

**Indication.** theobromine is used as a vasodilator, a diuretic, and heart stimulant. And similar to caffeine, it may be useful in management of fatigue and orthostatic hypotension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 08:06 | 1:11:47 | 0/0/0 | 1/0/0 | 0/0/2 | 211,067/12,351 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/12 | 12/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Pelligand_2020_diuresis](drugs/drug_theobromine/pd_Pelligand_2020_diuresis.md) | diuresis ← torasemide · model not identified | — | Pelligand L et al., Population Pharmacokinetics and Pharmac…, Frontiers in veterinary sci… (2020) | [10.3389/fvets.2020.00151](https://doi.org/10.3389/fvets.2020.00151) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Pelligand_2020_natriuresis](drugs/drug_theobromine/pd_Pelligand_2020_natriuresis.md) | natriuresis ← torasemide · model not identified | — | Pelligand L et al., Population Pharmacokinetics and Pharmac…, Frontiers in veterinary sci… (2020) | [10.3389/fvets.2020.00151](https://doi.org/10.3389/fvets.2020.00151) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP1A2** | `Q27` · CL/F | metabolism | [Alcorta-García_2020](drugs/drug_theobromine/pgx_Alcorta_Garc_a_2020_CYP1A2_Q27.md) | Alcorta-García MR et al., Modulation of CYP2E1 metabolic activity…, Molecular and cellular pedi… (2020) | [10.1186/s40348-020-00096-3](https://doi.org/10.1186/s40348-020-00096-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2E1** | `Q27` · CL/F | metabolism | [Alcorta-García_2020](drugs/drug_theobromine/pgx_Alcorta_Garc_a_2020_CYP2E1_Q27.md) | Alcorta-García MR et al., Modulation of CYP2E1 metabolic activity…, Molecular and cellular pedi… (2020) | [10.1186/s40348-020-00096-3](https://doi.org/10.1186/s40348-020-00096-3) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=theobromine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` metabolism/substrate, `CYP2E1` metabolism/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), NT5E (inhibitor), PDE4B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 145 matched, 127 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zandvliet_2005.pdf` | Zandvliet AS et al., Population pharmacokinetics of caffeine…, Basic & clinical pharmacolo… (2005) | popPK | 8 | [10.1111/j.1742-7843.2005.pto960111.x](https://doi.org/10.1111/j.1742-7843.2005.pto960111.x) | [15667599](https://pubmed.ncbi.nlm.nih.gov/15667599) | The study reports population PK parameters for theobromine as a metabolite, but specific numeric values for theobromine are not explicitly listed in the provided text (only caffeine parameters are given). |
| `Noh_2015.pdf` | Noh K et al., Effects of baicalin on oral pharmacokin…, Biomolecules & therapeutics (2015) | pd | 5 | [10.4062/biomolther.2014.134](https://doi.org/10.4062/biomolther.2014.134) | [25767690](https://www.ncbi.nlm.nih.gov/pubmed/25767690) | metadata signals extractable PD data (IC50) |
| `Orón_1993.pdf` | Orón JD et al., Effects of alkylxanthines on contractil…, The Journal of pharmacy and… (1993) | pd | 5 | [10.1111/j.2042-7158.1993.tb07181.x](https://doi.org/10.1111/j.2042-7158.1993.tb07181.x) | [7908975](https://www.ncbi.nlm.nih.gov/pubmed/7908975) | metadata signals extractable PD data (IC50) |
| `Cadena-Carrera_2023.pdf` | Cadena-Carrera S et al., Green-based methods to obtain bioactive…, Natural product research (2023) | pd | 4 | [10.1080/14786419.2022.2140802](https://doi.org/10.1080/14786419.2022.2140802) | [36370059](https://www.ncbi.nlm.nih.gov/pubmed/36370059) | metadata signals extractable PD data (EC50) |
| `Daly_1983.pdf` | Daly JW et al., Subclasses of adenosine receptors in th…, Cellular and molecular neur… (1983) | pd | 4 | [10.1007/BF00734999](https://doi.org/10.1007/BF00734999) | [6309393](https://www.ncbi.nlm.nih.gov/pubmed/6309393) | metadata signals extractable PD data (EC50) |
| `Farias_2021.pdf` | Farias IV et al., In Vitro Free Radical Scavenging Proper…, Mediators of inflammation (2021) | pd | 4 | [10.1155/2021/7688153](https://doi.org/10.1155/2021/7688153) | [34759771](https://www.ncbi.nlm.nih.gov/pubmed/34759771) | metadata signals extractable PD data (EC50) |
| `Grillo_2019.pdf` | Grillo G et al., Cocoa bean shell waste valorisation; ex…, Food research international… (2019) | pd | 4 | [10.1016/j.foodres.2018.08.057](https://doi.org/10.1016/j.foodres.2018.08.057) | [30599932](https://www.ncbi.nlm.nih.gov/pubmed/30599932) | metadata signals extractable PD data (EC50) |
| `Müller_1993.pdf` | Müller CE et al., Stimulation of calcium release by caffe…, Biochemical pharmacology (1993) | pd | 4 | [10.1016/0006-2952(93)90589-o](https://doi.org/10.1016/0006-2952(93)90589-o) | [8250969](https://www.ncbi.nlm.nih.gov/pubmed/8250969) | metadata signals extractable PD data (EC50) |
| `Tassaneeyakul_1992.pdf` | Tassaneeyakul W et al., Caffeine as a probe for human cytochrom…, Pharmacogenetics (1992) | pd | 4 | [10.1097/00008571-199208000-00004](https://doi.org/10.1097/00008571-199208000-00004) | [1306118](https://www.ncbi.nlm.nih.gov/pubmed/1306118) | metadata signals extractable PD data (IC50) |
| `Arnaud_2011.pdf` | Arnaud MJ, Pharmacokinetics and metabolism of natu…, Handbook of experimental ph… (2011) | pgx | 8 | [10.1007/978-3-642-13443-2_3](https://doi.org/10.1007/978-3-642-13443-2_3) | [20859793](https://www.ncbi.nlm.nih.gov/pubmed/20859793) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Jiang_2021.pdf` | Jiang Z et al., Simultaneous quantitation of serum caff…, Biomedical chromatography :… (2021) | pgx | 8 | [10.1002/bmc.5141](https://doi.org/10.1002/bmc.5141) | [34041763](https://www.ncbi.nlm.nih.gov/pubmed/34041763) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Gates_1999.pdf` | Gates S et al., Cytochrome P450 isoform selectivity in…, British journal of clinical… (1999) | pgx | 7 | [10.1046/j.1365-2125.1999.00890.x](https://doi.org/10.1046/j.1365-2125.1999.00890.x) | [10215755](https://www.ncbi.nlm.nih.gov/pubmed/10215755) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Jeppesen_1996.pdf` | Jeppesen U et al., A fluvoxamine-caffeine interaction study, Pharmacogenetics (1996) | pgx | 7 | [10.1097/00008571-199606000-00003](https://doi.org/10.1097/00008571-199606000-00003) | [8807660](https://www.ncbi.nlm.nih.gov/pubmed/8807660) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Noh_2011.pdf` | Noh K et al., Effects of rutaecarpine on the metaboli…, Archives of pharmacal resea… (2011) | pgx | 7 | [10.1007/s12272-011-0114-3](https://doi.org/10.1007/s12272-011-0114-3) | [21468923](https://www.ncbi.nlm.nih.gov/pubmed/21468923) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Novitskaia_2013.pdf` | Novitskaia IaG et al., [Evaluation of pharmacokinetic interact…, Eksperimental'naia i klinic… (2013) | pgx | 7 | not captured | [24003488](https://www.ncbi.nlm.nih.gov/pubmed/24003488) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Tao_2015.pdf` | Tao J et al., Theoretical study on the N-demethylatio…, Journal of molecular graphi… (2015) | pgx | 7 | [10.1016/j.jmgm.2015.06.017](https://doi.org/10.1016/j.jmgm.2015.06.017) | [26218892](https://www.ncbi.nlm.nih.gov/pubmed/26218892) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Walton_2001.pdf` | Walton K et al., Uncertainty factors for chemical risk a…, Food and chemical toxicolog… (2001) | pgx | 7 | [10.1016/s0278-6915(01)00006-0](https://doi.org/10.1016/s0278-6915(01)00006-0) | [11397514](https://www.ncbi.nlm.nih.gov/pubmed/11397514) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Cornelis_2016.pdf` | Cornelis MC et al., Genome-wide association study of caffei…, Human molecular genetics (2016) | pgx | 5 | [10.1093/hmg/ddw334](https://doi.org/10.1093/hmg/ddw334) | [27702941](https://www.ncbi.nlm.nih.gov/pubmed/27702941) | metadata signals extractable PGX data (CYP1A2) |

<sub>queue written 2026-09-28T07:57:38.470242+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2023 | irrelevant | 0 | 0 | The paper is a phytochemical and neuroprotective study where theobromine is only identified as a secondary metabolite in a plant extract, with no pharmacokinetic parameters reported. |
| PD | Ahmad_2023 | not_relevant | 0 | 0 | The paper investigates a plant extract and mentions theobromine only as one of many identified phytoconstituents; it does not report any pharmacodynamic or exposure-response analysis for theobromine itself. |
| PGx | Alcorta-García_2020 | not_relevant | 5 | 5 | The paper reports an association between acetaminophen ingestion and caffeine metabolism (theobromine ratio), but does not report a pharmacogenomic effect (gene variant) on the PK/PD parameter. |
| popPK | Anyanwu_2019 | irrelevant | 0 | 0 | The study investigates the antidiabetic effects of a plant extract in rats and does not involve theobromine or report any pharmacokinetic parameters. |
| PD | Anyanwu_2019 | not_relevant | 0 | 0 | The paper studies the antidiabetic effects of a plant extract (Anthocleista vogelii) and does not mention theobromine or report any pharmacodynamic parameters for it. |
| popPK | Armstrong_2020 | irrelevant | 0 | 0 | The study focuses on the extraction and biological activities of tea compounds, not the pharmacokinetics of theobromine. |
| PD | Armstrong_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for a complex tea extract, not a pharmacodynamic exposure-response relationship for the specific drug theobromine. |
| PGx | Arnaud_2011 | not_relevant | 2 | 0 | The paper is a general review of methylxanthine pharmacokinetics and mentions phenotyping for polymorphisms but does not report specific quantitative pharmacogenomic effects of gene variants on theobromine PK/PD parameters. |
| PGx | Attar_2023 | not_relevant | 0 | 0 | The study investigates the in vitro inhibition of CYP2D6 by tea methylxanthines and does not report any pharmacogenomic effects (gene variants) on the PK or PD of theobromine. |
| popPK | Auxtero_2021 | irrelevant | 0 | 0 | The paper is a review of herb-drug interactions and does not report quantitative pharmacokinetic parameters for theobromine. |
| PD | Auxtero_2021 | not_relevant | 0 | 0 | The paper is a literature review of potential herb-drug interactions and does not report any specific pharmacodynamic or exposure-response data for theobromine. |
| PGx | Baur_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of caffeine on attention in ADORA2A carriers, but does not report how the genotype changes the PK or PD parameters of theobromine. |
| popPK | Berends_2015 | irrelevant | 0 | 0 | The paper is a narrative review of cardiometabolic effects and does not report original quantitative pharmacokinetic parameters for theobromine. |
| PD | Berends_2015 | not_relevant | 1 | 0 | The text is a review summarizing general findings and calling for future dose-response trials, but it does not report specific numeric PD parameters or extractable concentration-effect curves for theobromine. |
| popPK | Biscussi_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on theobromine derivatives as acetylcholinesterase inhibitors, reporting in-vitro IC50 values and docking results, but no pharmacokinetic parameters for theobromine itself. |
| PD | Biscussi_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel theobromine derivatives, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship in a biological system with PD parameters. |
| PGx | Bittencourt_2013 | not_relevant | 0 | 0 | The paper investigates the antioxidant effects of guaraná extract on cell viability and oxidative stress in vitro, with no mention of gene variants, genotypes, or pharmacokinetic/pharmacodynamic parameters of theobromine. |
| popPK | Brent_2011 | irrelevant | 0 | 0 | The paper focuses on caffeine reproductive risks and does not report quantitative pharmacokinetic parameters for theobromine. |
| PD | Brent_2011 | not_relevant | 0 | 0 | The paper is a risk assessment review of caffeine (not theobromine) and does not report any extractable pharmacodynamic model or numeric dose-response parameters. |
| popPK | Brunmair_2021 | irrelevant | 2 | 0 | The study focuses on sweat metabolomics and uses theobromine as a caffeine metabolite for network modeling rather than reporting standard population PK parameters (CL, V, ka) for theobromine as the subject drug. |
| PD | Brunmair_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters (metabolic rate constants) for theobromine as a caffeine metabolite, but does not report any pharmacodynamic (PD) or exposure-response relationship for theobromine itself. |
| popPK | CHABRIER_1951 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | CHABRIER_1951 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Cadena-Carrera_2023 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Cadena-Carrera_2023 | not_relevant | 0 | 0 | The provided text is only a title fragment regarding green extraction methods and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for theobromine. |
| PGx | Cazeneuve_1994 | not_relevant | 0 | 0 | The paper studies the developmental maturation of caffeine metabolism in liver microsomes, not the effect of a specific gene variant or genotype on the pharmacokinetics or pharmacodynamics of theobromine. |
| PGx | Chung_1998 | not_relevant | 0 | 0 | The study investigates the metabolic pathways of caffeine in rat liver microsomes, not the pharmacokinetics or pharmacodynamics of theobromine in humans or the effect of genetic variants on theobromine parameters. |
| PGx | Chung_2000 | not_relevant | 0 | 0 | The study assesses the effect of age and smoking on caffeine metabolism, not the effect of a gene variant on theobromine pharmacokinetics. |
| PGx | Cornelis_2016 | not_relevant | 2 | 5 | The paper reports GWAS associations for caffeine metabolites (including theobromine) in a general population, not a pharmacogenomic effect on the PK/PD of theobromine as a drug. |
| popPK | Dahab_2024 | irrelevant | 0 | 0 | The study focuses on in silico and in vitro evaluations of anticancer theobromine derivatives, reporting no pharmacokinetic parameters for theobromine. |
| popPK | Daly_1983 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Daly_1983 | not_relevant | 1 | 0 | The text is a title of a review or general study on adenosine receptor subclasses and methylxanthines, lacking specific numeric PD parameters or exposure-response data for theobromine. |
| PGx | Daniel_2001 | not_relevant | 0 | 0 | The study investigates the effect of phenothiazine neuroleptics on caffeine metabolism in rat liver, not the effect of a gene variant on theobromine pharmacokinetics or pharmacodynamics. |
| popPK | Eissa_2023 | irrelevant | 0 | 0 | The study focuses on the in vitro biological evaluation and molecular docking of theobromine derivatives as VEGFR-2 inhibitors, containing no pharmacokinetic data. |
| PD | Eissa_2023 | not_relevant | 3 | 3 | The paper reports single-point IC50 values for a theobromine derivative (15a) but does not provide a full concentration-effect curve, dose-response model, or PK/PD analysis required to derive dynamic PD parameters like Emax or slope. |
| popPK | Eissa_2023_2 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study of a theobromine derivative (T-1-PCPA) as an anticancer agent, reporting no pharmacokinetic parameters for theobromine itself. |
| popPK | Eissa_2023_3 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study of a theobromine derivative as a VEGFR-2 inhibitor, reporting no pharmacokinetic parameters for theobromine. |
| popPK | Eissa_2023_4 | irrelevant | 0 | 0 | The paper focuses on the design and in vitro/in silico anti-cancer assessment of theobromine derivatives, not on the pharmacokinetic disposition of theobromine itself. |
| PD | Eissa_2023_4 | not_relevant | 3 | 3 | The paper reports single-point IC50 values for a theobromine derivative, which constitutes a dose-response metric but lacks the full concentration-effect curve or PK/PD modeling required for extractable PD parameters in the context of the prompt's focus on relationship modeling. |
| popPK | Eissa_2023_5 | irrelevant | 0 | 0 | The paper focuses on the design, synthesis, and in vitro/in silico evaluation of a theobromine derivative (T-1-MTA) as an anticancer agent, reporting no pharmacokinetic parameters for theobromine itself. |
| popPK | Eissa_2023_6 | irrelevant | 0 | 0 | The paper studies a new xanthine derivative (T-1-MCPAB) for anti-cancer properties and does not report pharmacokinetic parameters for theobromine. |
| PD | Eissa_2023_6 | not_relevant | 0 | 0 | The paper studies a new xanthine derivative (T-1-MCPAB), not theobromine, and reports only in vitro IC50 values without any PK/PD modeling or exposure-response analysis for theobromine. |
| popPK | Eissa_2023_7 | irrelevant | 0 | 0 | The paper is an in-vitro and in-silico study of a theobromine derivative for anticancer properties, containing no pharmacokinetic data. |
| popPK | Eissa_2024 | irrelevant | 0 | 0 | The study is a computational and in vitro investigation of a theobromine derivative's anticancer properties, containing no pharmacokinetic data. |
| popPK | Eissa_2024_2 | irrelevant | 0 | 0 | The paper describes a new theobromine derivative for cancer treatment using in silico and in vitro methods, with no pharmacokinetic parameters for theobromine itself. |
| popPK | Elkaeed_2022 | irrelevant | 0 | 0 | The paper focuses on the design and in vitro anticancer activity of a theobromine derivative, not the pharmacokinetics of theobromine itself. |
| popPK | Elkaeed_2025 | irrelevant | 0 | 0 | The study focuses on the computational design and in vitro anticancer activity of a theobromine derivative, not the pharmacokinetics of theobromine itself. |
| popPK | Elkaeed_2025_2 | irrelevant | 0 | 0 | The study focuses on the in silico and in vitro anti-cancer properties of a theobromine derivative (T-1-NBAB) and does not report pharmacokinetic parameters for theobromine. |
| PGx | Eugster_1993 | not_relevant | 0 | 0 | The paper studies caffeine metabolism and CYP1A1/2 interactions in yeast, not the pharmacogenomics of theobromine. |
| popPK | Farias_2021 | irrelevant | 0 | 0 | The study is a phytochemical and in-vitro pharmacological investigation of Ilex paraguariensis extracts, not a pharmacokinetic study, and reports no disposition parameters for theobromine. |
| PD | Farias_2021 | not_relevant | 0 | 0 | The paper focuses on the in vitro antioxidant and anti-inflammatory properties of Ilex paraguariensis and its markers, with no mention of theobromine or any pharmacokinetic/pharmacodynamic modeling. |
| PGx | Gates_1999 | not_relevant | 0 | 0 | The paper investigates the enzymatic isoforms responsible for theobromine metabolism in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Georgiev_2019 | not_relevant | 0 | 0 | The paper investigates in vitro CYP3A4 inhibition by tea methylxanthines and does not report any pharmacogenomic effects (gene variants) on the PK or PD of theobromine. |
| popPK | Graefe-Mody_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linagliptin, not theobromine. |
| PD | Graefe-Mody_2012 | not_relevant | 1 | 0 | The paper focuses on linagliptin PK in hepatic impairment and reports only median DPP-4 inhibition percentages without concentration-response modeling or numeric PD parameters for theobromine. |
| popPK | Grillo_2019 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Grillo_2019 | not_relevant | 0 | 0 | The paper focuses on the extraction of theobromine from cocoa bean shells using cavitational reactors and does not report any pharmacodynamic or exposure-response data. |
| PGx | Grzegorzewski_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of caffeine and its metabolites (including theobromine) in the context of CYP1A2 phenotyping, but it does not report pharmacogenomic effects on the PK/PD parameters of theobromine itself as a drug. |
| PGx | Gu_1992 | not_relevant | 2 | 5 | The paper describes in vitro enzyme kinetics of caffeine metabolism by CYP1A2 and CYP2E1, not the effect of a specific gene variant on the PK/PD of theobromine. |
| popPK | Hashmi_2025 | irrelevant | 0 | 0 | The paper is a review of anticancer purine scaffolds and does not report pharmacokinetic parameters for theobromine. |
| PD | Hashmi_2025 | not_relevant | 1 | 0 | The paper is a review of synthesis and SAR for purine scaffolds; it mentions theobromine-based anticancer agents but does not report specific exposure-response or dose-response PD parameters for theobromine itself. |
| popPK | Hayati_2025 | irrelevant | 0 | 0 | The study is a metabolomics and cytotoxicity analysis of plant extracts where theobromine is only identified as a potential compound, with no pharmacokinetic parameters reported. |
| PD | Hayati_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts and identifies theobromine as a potential contributor via metabolomics, but it does not report a specific concentration-effect relationship or numeric PD parameters for theobromine itself. |
| PGx | Jeppesen_1996 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (fluvoxamine inhibiting CYP1A2) affecting caffeine metabolism, not a pharmacogenomic effect of a gene variant on theobromine. |
| PGx | Jiang_2021 | not_relevant | 2 | 0 | The paper focuses on caffeine as a CYP1A2 probe drug; theobromine is only a measured metabolite, and no pharmacogenomic effect on theobromine's PK/PD is reported. |
| PGx | Jodynis-Liebert_1999 | not_relevant | 0 | 0 | The study investigates the effect of chemical inducers (toluidines/DNTs) on caffeine metabolism in rats, not the effect of a gene variant/genotype on theobromine PK/PD. |
| PGx | Larsen_2011 | not_relevant | 0 | 0 | The paper uses theobromine as a chemical auxiliary to control CYP3A4 selectivity in synthetic chemistry, not as a drug subject to pharmacogenomic analysis. |
| popPK | Lee_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for caffeine, not theobromine. |
| PD | Lee_2002 | not_relevant | 1 | 0 | The paper reports pharmacokinetic parameters and qualitative efficacy/adverse effects but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Logan_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology analysis of locomotor activity in mice and does not report any pharmacokinetic parameters for theobromine. |
| popPK | Long_2021 | irrelevant | 0 | 0 | The paper is a review of caffeine pharmacokinetics in preterm infants, and theobromine is only mentioned as a metabolite of caffeine, not as the subject drug. |
| PD | Long_2021 | not_relevant | 1 | 0 | The paper is a review of caffeine (not theobromine) focusing on PK and clinical outcomes, lacking specific numeric PD parameters or concentration-effect curves. |
| popPK | Machnik_2017 | irrelevant | 2 | 0 | The study focuses on establishing irrelevant concentrations (IRLs) using the Toutain model rather than reporting standard quantitative disposition parameters like clearance, volume, or half-life for theobromine. |
| popPK | Maderazo_1990 | irrelevant | 0 | 0 | The study focuses on pentoxifylline and its analogs, not theobromine. |
| popPK | Murata_2022 | irrelevant | 0 | 0 | The paper is a review of IVIVE-PBPK models for CNS drug disposition and does not report quantitative pharmacokinetic parameters for theobromine. |
| PD | Murata_2022 | not_relevant | 0 | 0 | The paper is a review of PK/PBPK modeling for brain drug disposition and mentions theobromine only as a compound used in a cited PK study, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Musk_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and mitotic block override, not a pharmacokinetic study, and reports no disposition parameters for theobromine. |
| PD | Musk_1990 | not_relevant | 3 | 2 | The paper describes qualitative dose-response trends and relative potency rankings for theobromine but does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for theobromine. |
| popPK | Müller_1993 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Müller_1993 | not_relevant | 0 | 0 | The paper focuses on caffeine analogs in pheochromocytoma cells and does not report pharmacodynamic or exposure-response data for theobromine. |
| popPK | Ngwalero_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bedaquiline and its metabolite M2, not theobromine. |
| PD | Ngwalero_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of bedaquiline and its metabolite M2 (plasma vs. intracellular concentrations) and does not report any pharmacodynamic or exposure-response relationship for theobromine. |
| PGx | Noh_2011 | not_relevant | 0 | 0 | The study investigates the effect of a drug (rutaecarpine) on caffeine metabolism, not the effect of a gene variant/genotype on theobromine PK/PD. |
| popPK | Noh_2015 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Noh_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of caffeine and the effect of baicalin, with no mention of theobromine or any pharmacodynamic/exposure-response analysis. |
| PGx | Novitskaia_2013 | not_relevant | 0 | 0 | The paper studies the effect of drug inducers/inhibitors on CYP activity in rats, not the effect of genetic variants on theobromine pharmacokinetics. |
| PGx | Novitskaia_2013_2 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic drug-drug interaction (aphobazole inducing CYP1A2) in rats, not a pharmacogenomic effect of a gene variant on theobromine. |
| popPK | Orón_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle contractility and does not report any pharmacokinetic parameters for theobromine. |
| PGx | Park_1999 | not_relevant | 2 | 5 | The paper reports FMO3 genotype effects on FMO enzyme activity (phenotype) using caffeine/theobromine ratio as a probe, but does not report pharmacokinetic parameters (e.g., AUC, t1/2) of theobromine itself. |
| popPK | Peikov_1995 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro pharmacological activity of xanthine derivatives, not on the pharmacokinetic disposition parameters of theobromine. |
| popPK | Pelligand_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of torasemide and furosemide in dogs, not theobromine. |
| popPK | Priyanka_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Azadirachta indica (Neem) and its antimicrobial properties, with no mention of theobromine or pharmacokinetic parameters. |
| PD | Priyanka_2026 | not_relevant | 0 | 0 | The paper is a review of the plant Azadirachta indica (Neem) and its bioactive compounds; it does not discuss theobromine or report any pharmacodynamic or exposure-response data. |
| popPK | QUEVAUVILLER_1950 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | QUEVAUVILLER_1950 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Rasouli_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of VLDL secretion in rat hepatocytes where theobromine is used only as a non-specific cAMP-phosphodiesterase inhibitor control, not as the subject drug for PK analysis. |
| PD | Rasouli_2006 | not_relevant | 0 | 0 | The paper reports that theobromine did not have any significant effect on triacylglycerol secretion and provides no numeric PD parameters or concentration-effect relationship for it. |
| PGx | Regal_2005 | not_relevant | 0 | 0 | The paper investigates the kinetic mechanism of caffeine metabolism by CYP1A2 using isotope effects and does not report pharmacogenomic effects on theobromine PK/PD parameters. |
| popPK | Renner_1982 | irrelevant | 0 | 0 | The paper is a genotoxicity study examining sister-chromatid exchanges and does not report any pharmacokinetic parameters for theobromine. |
| PD | Renner_1982 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent genotoxicity (SCEs) for theobromine but provides no numeric concentration-effect parameters, Emax/EC50, or quantitative PD model. |
| popPK | Reshetnikov_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro acetylcholinesterase inhibition of methylxanthine derivatives, containing no pharmacokinetic data for theobromine. |
| PD | Reshetnikov_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel methylxanthine derivatives, not pharmacodynamic or exposure-response data for theobromine. |
| popPK | Rodríguez-Rodríguez_2022 | irrelevant | 0 | 0 | The study investigates the vasoactive properties and mechanism of action of cocoa shell extract and its components (including theobromine) in rat arteries, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Sachse_1999 | not_relevant | 0 | 0 | The study investigates the effect of FMO3 polymorphisms on clozapine and caffeine metabolism, not theobromine. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The study is a metabolomics investigation for Parkinson's disease biomarkers and does not report pharmacokinetic parameters for theobromine. |
| PD | Santos_2024 | not_relevant | 0 | 0 | The paper focuses on metabolomics biomarkers for Parkinson's disease diagnosis and does not report any pharmacodynamic or exposure-response analysis for theobromine. |
| PGx | Saunders_2023 | not_relevant | 0 | 0 | The paper discusses caffeine and its effects on sports performance, not theobromine, and does not report specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Scattolin_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on palladium complexes using theobromine as a ligand precursor, reporting in vitro cytotoxicity rather than pharmacokinetic parameters. |
| PD | Scattolin_2018 | not_relevant | 3 | 2 | The paper reports IC50 values for palladium complexes containing theobromine-derived ligands, which is a dose-response metric for the metal complex, not a pharmacodynamic exposure-response relationship for theobromine itself. |
| popPK | Shreevatsa_2021 | irrelevant | 0 | 0 | The paper is a computational study on NQO1 inhibitors and does not involve theobromine or pharmacokinetic parameters. |
| PD | Shreevatsa_2021 | not_relevant | 0 | 0 | The paper is a computational study on NQO1 inhibitors (specifically Orientin) and does not mention theobromine or report any pharmacodynamic or exposure-response data. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | The study focuses on the toxicity of 7-methylxanthine, using theobromine only as a comparator agent, and does not report any pharmacokinetic parameters for theobromine. |
| PD | Singh_2021 | not_relevant | 0 | 0 | The paper focuses on the toxicity of 7-methylxanthine, using theobromine only as a comparator for acute mortality and does not report any exposure-response or dose-response PD parameters for theobromine. |
| PGx | Spatzenegger_2000 | not_relevant | 0 | 0 | The study investigates caffeine metabolism in rats, not the pharmacokinetics or pharmacodynamics of theobromine itself. |
| popPK | Stark_2006 | irrelevant | 0 | 0 | The paper is a sensory and chemical analysis of taste compounds in cocoa, not a pharmacokinetic study, and contains no PK parameters for theobromine. |
| popPK | Stavric_1988 | irrelevant | 0 | 0 | The paper is a review focused on theophylline toxicity and does not report quantitative pharmacokinetic parameters for theobromine. |
| PD | Stavric_1988 | not_relevant | 1 | 0 | The paper is a qualitative review of theophylline toxicity and explicitly notes that dose-response effects are controversial due to analytical issues, without providing specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | Takeuchi_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of methylxanthines on urinary prostaglandin excretion in rats and does not report pharmacokinetic parameters for theobromine. |
| PGx | Tao_2015 | not_relevant | 0 | 0 | The paper is a theoretical computational study of the metabolic mechanism and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Tassaneeyakul_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of caffeine metabolism, where theobromine is only a metabolite, and no pharmacokinetic parameters for theobromine are reported. |
| PD | Tassaneeyakul_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, IC50, Ki) for caffeine metabolism, not pharmacodynamic exposure-response or dose-response relationships for theobromine. |
| PGx | Tassaneeyakul_1992 | not_relevant | 0 | 0 | The paper investigates caffeine metabolism and CYP450 enzyme kinetics in vitro, not the pharmacogenomics of theobromine. |
| popPK | Tripodi_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of a cocoa extract's effect on protein aggregation, where theobromine is merely identified as a component, not studied for pharmacokinetics. |
| PD | Tripodi_2024 | not_relevant | 1 | 0 | The paper identifies theobromine as a component of the extract but does not report specific exposure-response or dose-response data for theobromine alone, nor does it provide numeric PD parameters for it. |
| popPK | Uney_2011 | irrelevant | 2 | 0 | Theobromine is a metabolite of the subject drug caffeine, not the subject drug itself, and no specific PK parameters (CL, V, etc.) for theobromine are reported. |
| popPK | Uneyama_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of caffeine and xanthine derivatives on neuronal chloride currents, not a pharmacokinetic study of theobromine. |
| popPK | Valodia_2022 | irrelevant | 0 | 0 | The paper is a review of phenytoin metabolism in smokers and does not report pharmacokinetic parameters for theobromine. |
| PD | Valodia_2022 | not_relevant | 0 | 0 | The paper is a literature review regarding phenytoin and nicotine/smoke-free products, containing no data or analysis for theobromine. |
| PGx | Walton_2001 | not_relevant | 0 | 0 | The paper analyzes interspecies pharmacokinetic differences for risk assessment, not the effect of human gene variants on theobromine PK/PD. |
| PGx | Yu_2016 | not_relevant | 0 | 0 | The study investigates the effect of pregnancy (physiological state) on caffeine PK, not the effect of a gene variant/genotype on theobromine PK/PD. |
| PGx | Zamora_2025 | not_relevant | 0 | 0 | The study investigates the correlation between CYP1A2 gene copy number variation and enzyme activity/protein levels in dogs, but does not report pharmacokinetic or pharmacodynamic parameters of theobromine (e.g., clearance, AUC, half-life) in vivo. |
| popPK | Zandvliet_2005 | relevant | 8 | 2 | The study reports population PK parameters for theobromine as a metabolite, but specific numeric values for theobromine are not explicitly listed in the provided text (only caffeine parameters are given). |
| PD | Zandvliet_2005 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of caffeine and its metabolites, with no mention of pharmacodynamic modeling or exposure-response relationships. |
| PGx | Zhang_2024 | not_relevant | 2 | 0 | The paper discusses coffee metabolism and mentions genetic polymorphism as a potential factor for individual differences, but it does not report specific pharmacogenomic effects on the PK or PD parameters of theobromine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on purine metabolism and uric acid in kidney disease, not the pharmacokinetics of theobromine. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on purine metabolism and uric acid in AKI-to-CKD transition and does not report any pharmacodynamic or exposure-response data for theobromine. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | The paper is a structural biology study on Notum inhibition by caffeine, where theobromine is only mentioned as a non-binding metabolite/comparator, and no pharmacokinetic parameters are reported. |
| PD | Zhao_2020 | not_relevant | 0 | 0 | The paper explicitly states that theobromine does not inhibit Notum activity, and no numeric PD parameters or dose-response curves are reported for it. |
| popPK | Zhou_2025 | irrelevant | 1 | 2 | The study is an epidemiological analysis of dietary intake and periodontitis, not a pharmacokinetic study, and the only PK values mentioned (half-life, clearance) are cited from a reference rather than derived from the study's own data. |
| PD | Zhou_2025 | not_relevant | 2 | 1 | The study is a cross-sectional epidemiological analysis of dietary intake (dose) and disease prevalence (outcome) using logistic regression, lacking any pharmacokinetic data, concentration-effect modeling, or specific PD parameters like Emax or EC50. |
| popPK | deVries_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amantadine, not theobromine. |
| PD | deVries_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of amantadine in renal impairment and does not report any pharmacodynamic or exposure-response relationship for theobromine. |
| PGx | Środa-Pomianek_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction of theobromine with a phenothiazine derivative in cancer cells, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of theobromine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
