<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;celiprolol&quot;}]"></div>

# celiprolol

- **generic name:** celiprolol
- **ATC codes:** `C07AB08`
- **DrugBank:** [DB04846](https://go.drugbank.com/drugs/DB04846) · **PubChem:** [CID 2663](https://pubchem.ncbi.nlm.nih.gov/compound/2663)
- **molar mass:** 379.501 g/mol (C20H33N3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Celiprolol is indicated for the management of mild to moderate hypertension and effort-induced angina pectoris. It is simultaneously a selective β1 receptor antagonist, a β2 receptor partial agonist and a weak α2 receptor antagonist. In 2010 a clinical trial has suggested a use for this medication in the prevention of vascular complications of a rare inherited disease called vascular Ehlers–Danlos syndrome. This study demonstrated decreased incidence of arterial rupture or dissection (a specific type of arterial rupture in which the layers of the vessel separate prior to complete failure of the artery wall). Celiprolol is not approved for use by the FDA in the treatment of vascular Ehlers–Danlos syndrome.

**Indication.** Celiprolol is indicated for the management of mild to moderate hypertension and effort-induced angina pectoris.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 16:13 | 2:32 | 0/0/0 | 0/1/0 | 0/0/3 | 42,565/2,132 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Sauvaget_2010_E_max](drugs/drug_celiprolol/pd_Sauvaget_2010_E_max.md) | celiprolol-induced vasodilatation (aortic relaxation) ← celiprolol · direct Emax (saturable) effect | — | Sauvaget F et al., Positive influence of AT(1) receptor an…, European journal of pharmac… (2010) | [10.1016/j.ejphar.2010.07.003](https://doi.org/10.1016/j.ejphar.2010.07.003) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ABCB1** | `Q17` · AUC∞ | transport | [Hirvensalo_2022](drugs/drug_celiprolol/pgx_Hirvensalo_2022_ABCB1_Q17.md) | Hirvensalo P et al., Pharmacogenomics of celiprolol - eviden…, Clinical and translational… (2022) | [10.1111/cts.13159](https://doi.org/10.1111/cts.13159) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SLCO1A2** | `Q17` · AUC∞ | transport | [Hirvensalo_2022](drugs/drug_celiprolol/pgx_Hirvensalo_2022_SLCO1A2_Q17.md) | Hirvensalo P et al., Pharmacogenomics of celiprolol - eviden…, Clinical and translational… (2022) | [10.1111/cts.13159](https://doi.org/10.1111/cts.13159) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **SLCO2B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Hirvensalo_2022](drugs/drug_celiprolol/pgx_Hirvensalo_2022_SLCO2B1_Q100.md) | Hirvensalo P et al., Pharmacogenomics of celiprolol - eviden…, Clinical and translational… (2022) | [10.1111/cts.13159](https://doi.org/10.1111/cts.13159) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=celiprolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport, `SLCO1A2` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport, `SLCO2B1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport, `SLCO1A2` transport, `SLCO2B1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 63 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ieiri_2012.pdf` | Ieiri I et al., Microdosing clinical study: pharmacokin…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011408612](https://doi.org/10.1177/0091270011408612) | [21593283](https://pubmed.ncbi.nlm.nih.gov/21593283) | The study is a population PK analysis of celiprolol, but the evidence only provides AUC values and lacks specific numeric values for clearance, volume, or rate constants. |
| `Lipka_1995.pdf` | Lipka E et al., Celiprolol double-peak occurrence and g…, Journal of pharmacokinetics… (1995) | popPK | 9 | [10.1007/BF02354285](https://doi.org/10.1007/BF02354285) | [8834196](https://pubmed.ncbi.nlm.nih.gov/8834196) | The paper describes a population pharmacokinetic study of celiprolol in dogs with a two-compartment model, but the specific numeric parameter values are not present in the provided abstract text. |
| `Hauck_1994.pdf` | Hauck RW et al., Pharmacological actions of the selectiv…, British journal of pharmaco… (1994) | pd | 5 | [10.1111/j.1476-5381.1994.tb17098.x](https://doi.org/10.1111/j.1476-5381.1994.tb17098.x) | [7858847](https://www.ncbi.nlm.nih.gov/pubmed/7858847) | metadata signals extractable PD data (IC50) |
| `West_2025.pdf` | West MA et al., Significance of gut breast cancer resis…, Drug metabolism and disposi… (2025) | pd | 5 | [10.1016/j.dmd.2025.100056](https://doi.org/10.1016/j.dmd.2025.100056) | [40220705](https://www.ncbi.nlm.nih.gov/pubmed/40220705) | metadata signals extractable PD data (IC50) |
| `Jasper_1988.pdf` | Jasper JR et al., Molecular mechanism of beta-adrenergic…, FASEB journal : official pu… (1988) | pd | 4 | [10.1096/fasebj.2.13.2901994](https://doi.org/10.1096/fasebj.2.13.2901994) | [2901994](https://www.ncbi.nlm.nih.gov/pubmed/2901994) | metadata signals extractable PD data (EC50) |
| `Lima_1996.pdf` | Lima JJ, Relationship between beta adrenoceptor…, Journal of receptor and sig… (1996) | pd | 4 | [10.3109/10799899609039956](https://doi.org/10.3109/10799899609039956) | [8968966](https://www.ncbi.nlm.nih.gov/pubmed/8968966) | metadata signals extractable PD data (EC50) |
| `Ohlstein_1998.pdf` | Ohlstein EH et al., Carvedilol inhibits endothelin-1 biosyn…, Journal of molecular and ce… (1998) | pd | 4 | [10.1006/jmcc.1997.0582](https://doi.org/10.1006/jmcc.1997.0582) | [9500873](https://www.ncbi.nlm.nih.gov/pubmed/9500873) | metadata signals extractable PD data (IC50) |
| `Yue_1992.pdf` | Yue TL et al., Carvedilol, a new beta-adrenoceptor ant…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90130-v](https://doi.org/10.1016/0014-2999(92)90130-v) | [1355437](https://www.ncbi.nlm.nih.gov/pubmed/1355437) | metadata signals extractable PD data (IC50) |
| `Yue_1994.pdf` | Yue TL et al., Carvedilol, a new vasodilating beta adr…, Cardiovascular research (1994) | pd | 4 | [10.1093/cvr/28.3.400](https://doi.org/10.1093/cvr/28.3.400) | [7909721](https://www.ncbi.nlm.nih.gov/pubmed/7909721) | metadata signals extractable PD data (IC50) |
| `Kashihara_2017.pdf` | Kashihara Y et al., Small-Dosing Clinical Study: Pharmacoki…, Journal of pharmaceutical s… (2017) | pgx | 8 | [10.1016/j.xphs.2017.03.010](https://doi.org/10.1016/j.xphs.2017.03.010) | [28322941](https://www.ncbi.nlm.nih.gov/pubmed/28322941) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Huang_2008.pdf` | Huang J et al., Effect of pluronic F68 block copolymer…, International journal of ph… (2008) | pgx | 7 | [10.1016/j.ijpharm.2007.12.028](https://doi.org/10.1016/j.ijpharm.2007.12.028) | [18242899](https://www.ncbi.nlm.nih.gov/pubmed/18242899) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `de_2024.pdf` | de Vries M et al., Evaluation of the Clinical Drug-Drug In…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1408](https://doi.org/10.1002/cpdd.1408) | [38752475](https://www.ncbi.nlm.nih.gov/pubmed/38752475) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-01T16:13:41.971731+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez-Guerra_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor effects in rats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Caruso_1985 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Caruso_1986 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (heart rate, blood pressure, RPP) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is a review of fruit juice-drug interactions and mentions celiprolol only as a drug with decreased bioavailability due to orange juice, without providing specific quantitative PK parameters. |
| PD | Chen_2018 | not_relevant | 1 | 0 | The paper is a review of food-drug interactions and mentions celiprolol only in the context of decreased bioavailability (PK interaction) with orange juice, without providing any pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper is a review of food-drug interactions and mentions celiprolol only in the context of decreased bioavailability due to orange juice, without reporting any pharmacogenomic effects. |
| popPK | Dunn_1995 | irrelevant | 0 | 0 | The paper is a clinical review of pharmacological properties and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for celiprolol. |
| PD | Dunn_1995 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and pharmacological properties, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Engman_2001 | not_relevant | 0 | 0 | The paper uses celiprolol as a P-glycoprotein substrate in a cell line model to validate the system, but does not report any pharmacogenomic effects of gene variants on celiprolol's PK or PD parameters. |
| popPK | Greenblatt_2009 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions and bioavailability qualitatively without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for celiprolol. |
| PD | Greenblatt_2009 | not_relevant | 1 | 0 | The text is a review discussing qualitative bioavailability changes of celiprolol due to OATP inhibition by fruit juices, without reporting any numeric pharmacodynamic parameters or concentration-effect relationships. |
| popPK | Hauck_1994 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| popPK | Huang_2008 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of transport and metabolism, not a pharmacokinetic study reporting quantitative disposition parameters for celiprolol. |
| PD | Huang_2008 | not_relevant | 0 | 0 | The paper investigates the effect of an excipient (Pluronic F68) on in vitro transport and metabolism, not the pharmacodynamic exposure-response relationship of the drug celiprolol itself. |
| PGx | Huang_2008 | not_relevant | 0 | 0 | The paper investigates the effect of a pharmaceutical excipient (Pluronic F68) on drug transport and metabolism, not the effect of a gene variant or genotype. |
| popPK | Ieiri_2012 | relevant | 9 | 2 | The study is a population PK analysis of celiprolol, but the evidence only provides AUC values and lacks specific numeric values for clearance, volume, or rate constants. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | The paper is a review article that discusses celiprolol as under-investigated but does not provide original quantitative pharmacokinetic parameter values in the provided evidence. |
| PGx | Jankovic_2014 | not_relevant | 2 | 0 | The paper is a review that explicitly states celiprolol was under-investigated and does not report specific pharmacogenomic effect sizes for it. |
| popPK | Jasper_1988 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Jasper_1988 | not_relevant | 0 | 0 | The paper discusses the molecular mechanism of beta-blockers with ISA but does not report specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for celiprolol. |
| popPK | Jasper_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of carteolol and its metabolite, mentioning celiprolol only as a comparator for intrinsic sympathomimetic activity without reporting any pharmacokinetic parameters. |
| PD | Jasper_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of carteolol and its metabolite, mentioning celiprolol only as a qualitative comparator for intrinsic sympathomimetic activity without providing any numeric PD parameters or exposure-response data for celiprolol. |
| PGx | Kashihara_2017 | not_relevant | 5 | 2 | The study reports that SLCO2B1*3 had no effect on celiprolol PK and does not report ABCG2 effects on celiprolol, only on sulfasalazine and rosuvastatin. |
| PGx | Lilja_2004 | not_relevant | 0 | 0 | The study explicitly states that no association was found between MDR1 polymorphisms and the degree of interaction, meaning no pharmacogenomic effect was reported. |
| popPK | Lima_1996 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Lima_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships for celiprolol. |
| popPK | Lipka_1995 | relevant | 9 | 0 | The paper describes a population pharmacokinetic study of celiprolol in dogs with a two-compartment model, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Marchetti_2016 | irrelevant | 0 | 0 | The paper studies a novel hybrid anticancer drug, and celiprolol is only mentioned as a comparator for efflux transporter permeability, not as the subject of a PK study. |
| PD | Marchetti_2016 | not_relevant | 0 | 0 | The paper focuses on a novel hybrid anti-tubulin drug; celiprolol is mentioned only as a reference compound for efflux transporter permeability studies, with no PD or exposure-response analysis performed for it. |
| PGx | Marchetti_2016 | not_relevant | 0 | 0 | The paper focuses on a novel hybrid anti-tubulin drug and only mentions celiprolol as a reference compound for efflux transporter permeability ratios, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | McAuley_1997 | irrelevant | 0 | 0 | The study is a validation of blood pressure measurement devices using celiprolol as a pharmacodynamic agent, and it does not report any pharmacokinetic parameters for celiprolol. |
| PD | McAuley_1997 | not_relevant | 1 | 0 | The paper uses celiprolol only as a pharmacodynamic intervention to validate a blood pressure measurement device (Finapres) and reports no concentration-effect or dose-response analysis or numeric PD parameters. |
| PGx | Methaneethorn_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic interactions with fruit juices, not pharmacogenomic effects based on gene variants. |
| popPK | Milne_1991 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.). |
| PD | Milne_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing therapeutic efficacy and general pharmacodynamic properties without providing specific numeric PD parameters, concentration-effect curves, or formal PK/PD modeling data. |
| popPK | Morales_2014 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of respiratory safety in asthma, not a pharmacokinetic study, and contains no PK parameters for celiprolol. |
| PD | Morales_2014 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting pooled mean effects and a qualitative mention of a dose-response relationship, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve for celiprolol. |
| popPK | Neve_1985 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic disposition parameters for celiprolol. |
| popPK | Ohlstein_1998 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Ohlstein_1998 | not_relevant | 0 | 0 | The paper investigates carvedilol, not celiprolol, and focuses on endothelin-1 biosynthesis in cell culture rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Riddell_1987 | irrelevant | 1 | 0 | The paper is a review article that summarizes pharmacodynamic and pharmacokinetic properties qualitatively but does not provide specific quantitative PK parameter values (e.g., CL, V, t1/2) in the provided evidence. |
| PD | Riddell_1987 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic properties and therapeutic efficacy comparisons without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Sauvaget_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation mechanisms and does not report any pharmacokinetic parameters for celiprolol. |
| popPK | Schliep_1984 | irrelevant | 0 | 0 | The study focuses on the beta-adrenoceptor selectivity of bisoprolol, with celiprolol serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Schliep_1984 | not_relevant | 1 | 1 | The paper focuses on bisoprolol and only provides a single selectivity ratio for celiprolol without detailed dose-response curves or numeric PD parameters for celiprolol. |
| popPK | Silke_1986 | irrelevant | 0 | 0 | The study reports hemodynamic and cardiac function parameters, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for celiprolol. |
| PD | Silke_1986 | not_relevant | 5 | 2 | The paper describes a dose-response study with specific doses and qualitative hemodynamic changes, but the provided text does not contain the numeric data points or fitted parameters (Emax, EC50) required to derive a quantitative PD relationship. |
| popPK | Silke_1986_2 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (cardiac performance) rather than pharmacokinetic disposition parameters. |
| PD | Silke_1986_2 | not_relevant | 4 | 2 | The paper describes a comparative dose-response study with qualitative hemodynamic outcomes (e.g., increased cardiac index) but does not provide numeric PD parameters (Emax, EC50) or quantitative concentration-effect curves in the provided text. |
| popPK | Silke_1997 | irrelevant | 0 | 0 | The study focuses on heart-rate variability and pharmacodynamic effects of celiprolol, not pharmacokinetic parameters. |
| popPK | Sung_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carvedilol's antiproliferative effects, with celiprolol serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Sung_1993 | not_relevant | 0 | 0 | The paper reports that celiprolol stimulated DNA synthesis at a single concentration (10 µM) but does not provide a concentration-response curve or numeric PD parameters (e.g., EC50, Emax) for celiprolol. |
| PGx | Tanaka_2013 | not_relevant | 0 | 0 | The study investigates a food-drug interaction (grapefruit juice) affecting OATP transporters, not a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Taylor_1986 | irrelevant | 0 | 0 | The text is a pharmacodynamic review discussing hemodynamic effects and lacks any quantitative pharmacokinetic parameters for celiprolol. |
| PD | Taylor_1986 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacological mechanisms of beta-blockers and celiprolol, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Taylor_1988 | irrelevant | 0 | 0 | The text is a qualitative review of pharmacological properties and does not report any quantitative pharmacokinetic parameters for celiprolol. |
| PD | Taylor_1988 | not_relevant | 1 | 0 | The text is a qualitative review of the ideal pharmacological profile of beta-blockers and mentions celiprolol's properties without providing any numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Taylor_1989 | irrelevant | 0 | 0 | The text is a qualitative review of celiprolol's clinical benefits and risk factor reversal, containing no quantitative pharmacokinetic parameters. |
| PD | Taylor_1989 | not_relevant | 1 | 0 | The text is a qualitative review of celiprolol's pharmacodynamic benefits and risk factor reversal, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | West_2025 | irrelevant | 0 | 0 | The study focuses on rosuvastatin drug-drug interactions and transporter characterization, with celiprolol mentioned only as a comparator substrate for OATP2B1 without any PK parameters reported. |
| PD | West_2025 | not_relevant | 0 | 0 | The paper focuses on rosuvastatin drug-drug interactions and transporter kinetics (OATP2B1/BCRP), with no pharmacodynamic or exposure-response analysis for celiprolol. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions mediated by OATP transporters, not pharmacogenomic effects of gene variants on celiprolol PK/PD. |
| popPK | Yue_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant properties, not a pharmacokinetic study, and celiprolol is only a comparator. |
| PD | Yue_1992 | not_relevant | 0 | 0 | The paper focuses on the antioxidant properties of carvedilol; celiprolol is only mentioned as a comparator with no specific numeric PD parameters or dose-response curve provided for it. |
| popPK | Yue_1992_2 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Yue_1992_2 | not_relevant | 0 | 0 | The paper studies carvedilol, not celiprolol, and focuses on neutrophil superoxide release rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Yue_1994 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Yue_1994 | not_relevant | 0 | 0 | The paper focuses on the endothelial protective effects of carvedilol, not celiprolol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper evaluates drug-drug interactions involving pritelivir and celiprolol, not pharmacogenomic effects of gene variants on celiprolol. |
| popPK | van_1990 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing the mechanism of hybrid antihypertensive drugs and does not report any quantitative pharmacokinetic parameters for celiprolol. |
| PD | van_1990 | not_relevant | 1 | 0 | The text is a qualitative review describing the pharmacological classification of hybrid antihypertensive agents and does not provide any numeric PD parameters or exposure-response data for celiprolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
