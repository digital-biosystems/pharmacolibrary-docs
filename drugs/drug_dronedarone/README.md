<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;dronedarone&quot;}]"></div>

# dronedarone

- **generic name:** dronedarone
- **ATC codes:** `C01BD07`
- **DrugBank:** [DB04855](https://go.drugbank.com/drugs/DB04855)
- **groups:** approved, investigational

## About

**Description.** Dronedarone is a Class III antiarrhythmic drug that works to restore the normal sinus rhythm in patients with paroxysmal or persistent atrial fibrillation. Atrial fibrillation is a common sustained arrhythmia where the treatment primarily focuses on stroke prevention and symptom management. It is managed by rate control, rhythm control, prevention of thromboembolic events, and treatment of the underlying disease.[A34604] Similar to [amiodarone], dronedarone is a multichannel blocker that works to control rhythm and rate in atrial fibrillation.[A186071] It meets criteria of all four Vaughan Williams antiarrhythmic drug classes by blocking sodium, potassium, and calcium ion channels and inhibiting β-adrenergic receptors.[A34604,L8699] 

Dronedarone is a related benzofuran compound to amiodarone but its chemical structure lacks iodine moieties which are associated with amiodarone-induced thyroid problems.[A34604,T28] Additionally, the methyl sulfonyl group in its structure renders dronedarone to be more lipophilic with a shorter half-life than amiodarone.[A34604] This ultimately leads to reduced tissue accumulation of the drug and decreased risk for organ toxicities, such as thyroid and pulmonary toxicities.[T28] Commonly marketed as Multaq®, dronedarone was approved by the FDA in July 2009 and Health Canada in August 2009. A safety concern for the risk of drug-induced hepatocellular injury has been issued following marketing of dronedarone.[L8800]

**Indication.** Dronedarone is indicated for the management of atrial fibrillation (AF) in patients in sinus rhythm with a history of paroxysmal or persistent AF to reduce the risk of hospitalization.[L8699]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 15:22 | 7:50 | 0/0/0 | 4/0/0 | 0/0/1 | 155,617/6,456 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 5/8 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmed_2023](drugs/drug_dronedarone/pd_Ahmed_2023_Mpro_enzymatic_activity.md) | Ahmed MS et al., FDA approved drugs with antiviral activ…, Biomedicine & pharmacothera… (2023) | [10.1016/j.biopha.2023.114614](https://doi.org/10.1016/j.biopha.2023.114614) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmed_2023](drugs/drug_dronedarone/pd_Ahmed_2023_NT5E_expression.md) | Ahmed MS et al., FDA approved drugs with antiviral activ…, Biomedicine & pharmacothera… (2023) | [10.1016/j.biopha.2023.114614](https://doi.org/10.1016/j.biopha.2023.114614) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmed_2023](drugs/drug_dronedarone/pd_Ahmed_2023_SARS_CoV_2_viral_replication.md) | Ahmed MS et al., FDA approved drugs with antiviral activ…, Biomedicine & pharmacothera… (2023) | [10.1016/j.biopha.2023.114614](https://doi.org/10.1016/j.biopha.2023.114614) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nishida_2025](drugs/drug_dronedarone/pd_Nishida_2025_cell_viability.md) | Nishida M et al., Exploratory high-throughput screening o…, BMC veterinary research (2025) | [10.1186/s12917-025-05053-8](https://doi.org/10.1186/s12917-025-05053-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thomas_2003](drugs/drug_dronedarone/pd_Thomas_2003_HERG.md) | Thomas D et al., Acute effects of dronedarone on both co…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705502](https://doi.org/10.1038/sj.bjp.0705502) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thomas_2003](drugs/drug_dronedarone/pd_Thomas_2003_KvLQT1_minK.md) | Thomas D et al., Acute effects of dronedarone on both co…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705502](https://doi.org/10.1038/sj.bjp.0705502) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yu_2020](drugs/drug_dronedarone/pd_Yu_2020_IKAS.md) | Yu Y et al., Inhibitory Effects of Dronedarone on Sm…, Medical science monitor : i… (2020) | [10.12659/MSM.924215](https://doi.org/10.12659/MSM.924215) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PITX2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Hwang_2021](drugs/drug_dronedarone/pgx_Hwang_2021_PITX2_Q100.md) | Hwang I et al., Computational Modeling for Antiarrhythm…, Frontiers in physiology (2021) | [10.3389/fphys.2021.650449](https://doi.org/10.3389/fphys.2021.650449) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dronedarone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP2J2` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…dministration, about 84% of the labeled dose is excreted in feces and 6% is excreted in ur…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1F (inhibitor), CACNA1S (inhibitor), CACNB1 (inhibitor), CACNB2 (inhibitor), CACNB3 (inhibitor), CACNB4 (inhibitor), KCNA5 (blocker), KCND3 (inhibitor), KCNH2 (inhibitor), KCNJ12 (inhibitor), KCNJ3 (inhibitor), KCNK2 (inhibitor), KCNQ1 (inhibitor), PITX2 (target), SCN5A (inhibitor), SLC8A1 (inhibitor), THRA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 87 matched, 85 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2019.pdf` | Baek IH, Dose proportionality and pharmacokineti…, Xenobiotica; the fate of fo… (2019) | popPK | 9 | [10.1080/00498254.2018.1496369](https://doi.org/10.1080/00498254.2018.1496369) | [29962267](https://pubmed.ncbi.nlm.nih.gov/29962267) | The paper is a PK study of dronedarone in rats reporting a compartmental model, but specific numeric parameter values (CL, V, ka) are not present in the provided text, only qualitative descriptions and bioavailability. |
| `Simó-Vicens_2017.pdf` | Simó-Vicens R et al., Effect of antiarrhythmic drugs on small…, European journal of pharmac… (2017) | pd | 5 | [10.1016/j.ejphar.2017.03.039](https://doi.org/10.1016/j.ejphar.2017.03.039) | [28322838](https://www.ncbi.nlm.nih.gov/pubmed/28322838) | metadata signals extractable PD data (IC50) |
| `Gautier_2003.pdf` | Gautier P et al., Electrophysiologic characterization of…, Journal of cardiovascular p… (2003) | pd | 4 | [10.1097/00005344-200302000-00007](https://doi.org/10.1097/00005344-200302000-00007) | [12548079](https://www.ncbi.nlm.nih.gov/pubmed/12548079) | metadata signals extractable PD data (IC50) |
| `Marcolino_2019.pdf` | Marcolino AIP et al., Comparative evaluation of the hepatotox…, Photochemical & photobiolog… (2019) | pd | 4 | [10.1039/c8pp00559a](https://doi.org/10.1039/c8pp00559a) | [31037283](https://www.ncbi.nlm.nih.gov/pubmed/31037283) | metadata signals extractable PD data (IC50) |
| `de_2022.pdf` | de Souza TG et al., Effects of amiodarone, amioder, and dro…, Parasitology research (2022) | pd | 4 | [10.1007/s00436-022-07521-8](https://doi.org/10.1007/s00436-022-07521-8) | [35435511](https://www.ncbi.nlm.nih.gov/pubmed/35435511) | metadata signals extractable PD data (IC50) |
| `Damy_2004.pdf` | Damy T et al., Pharmacokinetic and pharmacodynamic int…, Fundamental & clinical phar… (2004) | pgx | 8 | [10.1046/j.1472-8206.2003.00216.x](https://doi.org/10.1046/j.1472-8206.2003.00216.x) | [14748763](https://www.ncbi.nlm.nih.gov/pubmed/14748763) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Djebli_2015.pdf` | Djebli N et al., Physiologically based pharmacokinetic m…, Drug metabolism and disposi… (2015) | pgx | 8 | [10.1124/dmd.114.062596](https://doi.org/10.1124/dmd.114.062596) | [25609219](https://www.ncbi.nlm.nih.gov/pubmed/25609219) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Wang_2022.pdf` | Wang CC et al., Functional Analysis of Wild-Type and 27…, Current drug metabolism (2022) | pgx | 8 | [10.2174/1389200223666220613153917](https://doi.org/10.2174/1389200223666220613153917) | [35702776](https://www.ncbi.nlm.nih.gov/pubmed/35702776) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cheong_2017.pdf` | Cheong EJ et al., Application of Static Modeling --in the…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.116.073890](https://doi.org/10.1124/dmd.116.073890) | [28053220](https://www.ncbi.nlm.nih.gov/pubmed/28053220) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hanigan_2020.pdf` | Hanigan S et al., The real world use of combined P-glycop…, Journal of thrombosis and t… (2020) | pgx | 7 | [10.1007/s11239-020-02037-3](https://doi.org/10.1007/s11239-020-02037-3) | [31925665](https://www.ncbi.nlm.nih.gov/pubmed/31925665) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kim_2018.pdf` | Kim MS et al., Effect of dronedarone on the pharmacoki…, European journal of pharmac… (2018) | pgx | 7 | [10.1016/j.ejps.2017.09.029](https://doi.org/10.1016/j.ejps.2017.09.029) | [28942006](https://www.ncbi.nlm.nih.gov/pubmed/28942006) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wen_2022.pdf` | Wen HN et al., Predicting drug-drug interactions with…, Thrombosis research (2022) | pgx | 7 | [10.1016/j.thromres.2022.08.007](https://doi.org/10.1016/j.thromres.2022.08.007) | [35985100](https://www.ncbi.nlm.nih.gov/pubmed/35985100) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-19T15:18:49.783146+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2023 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of dronedarone's antiviral activity against SARS-CoV-2 and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Aimond_2000 | irrelevant | 0 | 0 | The study focuses on electrophysiological effects (action potentials, ionic currents) and antiarrhythmic activity, not pharmacokinetic disposition parameters. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MRP3 transporter inhibition, not a pharmacokinetic study reporting disposition parameters for dronedarone. |
| popPK | Baek_2019 | relevant | 9 | 2 | The paper is a PK study of dronedarone in rats reporting a compartmental model, but specific numeric parameter values (CL, V, ka) are not present in the provided text, only qualitative descriptions and bioavailability. |
| PD | Baek_2019 | not_relevant | 0 | 0 | The study focuses exclusively on pharmacokinetics (PK) and dose proportionality in rats, with no pharmacodynamic (PD) measurements or exposure-response analysis reported. |
| PGx | Bai_2020 | not_relevant | 0 | 0 | The paper investigates flavonoid-mediated CYP3A4 activation (drug-drug interaction), not the effect of a gene variant or genotype on dronedarone PK/PD. |
| popPK | Bogdan_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel effects and does not report pharmacokinetic parameters. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The study investigates the role of CYP enzymes in dronedarone metabolism and cytotoxicity in cell lines but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters in humans. |
| PGx | Chen_2021 | not_relevant | 0 | 0 | The paper characterizes CYP-overexpressing cell lines and tests stability using dronedarone as a probe, but does not report pharmacogenomic effects of human gene variants on dronedarone PK/PD parameters. |
| popPK | Chen_2021_2 | irrelevant | 0 | 0 | The paper is a mechanistic study on NLRP3 inhibition and does not report any pharmacokinetic parameters for dronedarone. |
| popPK | Cheng_2010 | irrelevant | 0 | 0 | The paper is a review of antiarrhythmic and anticoagulant agents for atrial fibrillation and does not report original quantitative pharmacokinetic parameters for dronedarone. |
| PD | Cheng_2010 | not_relevant | 1 | 0 | The text is a general review comparing pharmacology and efficacy of agents, mentioning dronededarone qualitatively without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Cheong_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between rivaroxaban and dronedarone, not the effect of a gene variant on dronedarone's PK/PD. |
| PGx | Choi_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between voriconazole and dronedarone, not a pharmacogenomic effect on dronedarone's PK/PD parameters. |
| popPK | Damy_2004 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| popPK | Deneer_2011 | irrelevant | 1 | 0 | The paper is a review that discusses dronedarone only qualitatively (stating no dose reduction is needed) without reporting any quantitative pharmacokinetic parameter values. |
| PD | Deneer_2011 | not_relevant | 1 | 0 | The paper is a qualitative review stating that no dose reduction is required for dronedarone in the elderly, but it does not provide any numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| PGx | Deneer_2011 | not_relevant | 1 | 0 | The paper is a general review of antiarrhythmic pharmacokinetics in the elderly and mentions dronedarone only to state that no dose reduction is required, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Denisov_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions mediated by CYP3A4, not pharmacogenomic effects of gene variants on dronedarone PK/PD. |
| PGx | Djebli_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of clopidogrel (CYP2C19), and dronedarone is only mentioned as a co-administered inhibitor for model validation, not as the subject of the pharmacogenomic analysis. |
| PGx | Dorian_2010 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetics and drug-drug interactions (CYP3A4, P-gp) but does not report any pharmacogenomic effects (gene variants) on dronedarone PK/PD. |
| PGx | Gandhi_2021 | not_relevant | 0 | 0 | The study is a retrospective claims database analysis of bleeding risk in patients taking dronedarone and DOACs, and it does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Gao_2011 | not_relevant | 0 | 0 | The study is a claims database analysis of prescribing adherence and contraindications, containing no genetic data or pharmacokinetic/pharmacodynamic measurements. |
| popPK | Gautier_2003 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Guillemare_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Guo_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on Kv1.5 inhibitors where dronedarone is used only as a positive control/comparator, and no pharmacokinetic parameters are reported. |
| PD | Guo_2014 | not_relevant | 1 | 0 | The paper reports qualitative comparison of Kv1.5 inhibition potency against dronedarone but does not provide numeric PD parameters or concentration-effect curves for dronedarone. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of Kir2.1 channels and does not report any pharmacokinetic parameters for dronedarone. |
| PD | Gómez_2014 | not_relevant | 0 | 0 | The paper explicitly states that dronedarone did not modify IKir2.1 currents, and no numeric PD parameters or dose-response relationship for dronedarone are reported. |
| PGx | Hanigan_2020 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (DDI) between anticoagulants and inhibitors (including dronedarone), not a pharmacogenomic effect of dronedarone. |
| PGx | Hong_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP3A4/3A5 inactivation by dronedarone in vitro and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Hügl_2023 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDI) between rivaroxaban and dronedarone/amiodarone, not pharmacogenomic effects (gene variants) on dronedarone's PK/PD. |
| popPK | Kambayashi_2020 | irrelevant | 2 | 0 | The study focuses on the electrophysiological effects of a deuterated analogue (poyendarone) in dogs and only qualitatively states that its pharmacokinetics are similar to dronedarone without providing quantitative PK parameters for dronedarone. |
| PGx | Karkhanis_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2J2 inhibition by dronedarone in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Karkhanis_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial toxicity in cardiomyocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Khan_2020 | irrelevant | 0 | 0 | The paper is a case report on acute hepatic and renal toxicity and does not report any pharmacokinetic parameters for dronedarone. |
| PD | Khan_2020 | not_relevant | 0 | 0 | The paper is a single case report of acute toxicity without any pharmacokinetic data, dose-response analysis, or numeric PD parameters. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PGx | Kim_2018 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction between dronedarone and carvedilol in rats, not the effect of a gene variant on dronedarone's PK/PD. |
| PGx | Klieber_2014 | not_relevant | 0 | 0 | The paper describes in vitro metabolic pathways and enzyme involvement (CYPs, MAO) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PD | Leow_2023 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for drug-drug interactions (PK only) and does not report any pharmacodynamic (PD) or exposure-response parameters for dronedarone. |
| PGx | Leow_2023 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for drug-drug interactions (dronedarone-rivaroxaban) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lip_2014 | irrelevant | 0 | 0 | The paper is a review of edoxaban, and dronedarone is only mentioned as a P-gp inhibitor in a drug-drug interaction context without any PK parameters for dronedarone itself. |
| PD | Lip_2014 | not_relevant | 1 | 0 | The paper is a review of edoxaban that only qualitatively mentions dronedarone as a P-gp inhibitor requiring dose adjustment, without providing any numeric PD parameters or exposure-response data for dronedarone. |
| popPK | Loewe_2014 | irrelevant | 0 | 0 | The paper is an in-silico electrophysiology study focusing on pharmacodynamic effects (action potential morphology) rather than pharmacokinetic disposition parameters. |
| popPK | Marcolino_2019 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Marcolino_2019 | not_relevant | 0 | 0 | The paper focuses on comparative toxicology (hepatotoxicity, phototoxicity) of dronedarone and its complexes, not on pharmacodynamic exposure-response modeling or dose-effect relationships for therapeutic efficacy. |
| popPK | Martinez-Sotillo_2019 | irrelevant | 0 | 0 | The study focuses on the antiproliferative mechanism of a new compound (AMIODER) in Leishmania, with dronedarone mentioned only as a background comparator, and no pharmacokinetic parameters are reported. |
| PD | Martinez-Sotillo_2019 | not_relevant | 0 | 0 | The paper focuses on the antiproliferative effect of AMIODER (a new benzofuran derivative) on Leishmania donovani, not dronedarone, and does not report dronedarone PD parameters. |
| popPK | Nishida_2025 | irrelevant | 0 | 0 | The study is an in-vitro high-throughput screening for antiproliferative activity (IC50) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for dronedarone. |
| popPK | Pamukcu_2011 | irrelevant | 2 | 0 | The paper is a review article summarizing pharmacokinetics and clinical practice without providing original quantitative disposition parameter values in the evidence. |
| PD | Pamukcu_2011 | not_relevant | 2 | 1 | The text is a review summary that qualitatively describes dronedarone's pharmacodynamic properties (ion channel blocking) and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Quintana-Villamandos_2019 | irrelevant | 0 | 0 | The study focuses on vascular remodeling and oxidative stress biomarkers in rats, not on the pharmacokinetic disposition parameters (CL, V, etc.) of dronedarone. |
| PD | Quintana-Villamandos_2019 | not_relevant | 2 | 1 | The study reports qualitative improvements in vascular function and remodeling after a fixed dose of dronedarone, but does not provide concentration-effect data, dose-response curves for the drug itself, or numeric PD parameters (e.g., EC50, Emax) for dronedarone. |
| popPK | Ridley_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report pharmacokinetic disposition parameters for dronedarone. |
| popPK | Rosa_2014 | irrelevant | 1 | 0 | The paper is a narrative review of clinical trials and does not report original quantitative pharmacokinetic parameter values for dronedarone. |
| PD | Rosa_2014 | not_relevant | 1 | 0 | The text is a review article summarizing clinical trials and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| PGx | Schafer_2010 | not_relevant | 0 | 0 | The paper is a general review of dronedarone clinical trials and safety, containing no information on pharmacogenomics or gene-variant effects on PK/PD. |
| popPK | Schmidt_2012 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study reporting IC50 values for channel inhibition, not a pharmacokinetic study with disposition parameters. |
| PGx | Shirolkar_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between dronedarone and warfarin, not pharmacogenomic effects of gene variants on dronedarone PK/PD. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of antiarrhythmic drugs on ion channels and does not report pharmacokinetic or pharmacodynamic modeling (exposure-response or dose-response) for dronedarone. |
| popPK | Thomas_2003 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study investigating channel blocking mechanisms (IC50, voltage shifts) in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Watanabe_2008 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring ion channel inhibition (IC50) in guinea pig myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wen_2022 | irrelevant | 0 | 0 | no_text gate: only 184 chars of text extracted (&lt; 400) |
| PD | Wen_2022 | not_relevant | 0 | 0 | The paper focuses on PK modeling and DDI prediction for apixaban and rivaroxaban, with no reported PD or exposure-response analysis for dronedarone. |
| PGx | Wen_2022 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) between anticoagulants and dronedarone, not pharmacogenomic effects. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action (SK channel inhibition) of dronedarone, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing a hERG channel mutation, and dronedarone is used only as a probe drug to assess channel inhibition, not as the subject of a pharmacokinetic study. |
| PGx | Zhanyi_2026 | not_relevant | 0 | 0 | The paper discusses amiodarone and direct oral anticoagulants, not dronedarone. |
| PGx | Zhu_2025 | not_relevant | 0 | 0 | The paper characterizes CYP2J2 activity in hESC-CMs and notes dronedarone is an inhibitor, but does not report a pharmacogenomic effect of a gene variant on dronedarone's PK or PD parameters. |
| popPK | de_2022 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | de_2022 | not_relevant | 0 | 0 | The paper investigates the in vitro antimicrobial effects of dronedarone on Trichomonas vaginalis, not pharmacodynamic exposure-response relationships in a clinical or physiological context. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
