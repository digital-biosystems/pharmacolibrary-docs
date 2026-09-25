<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;tropisetron&quot;}]"></div>

# tropisetron

- **generic name:** tropisetron
- **ATC codes:** `A04AA03`
- **DrugBank:** [DB11699](https://go.drugbank.com/drugs/DB11699)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Tropisetron is an indole derivative with antiemetic activity. As a selective serotonin receptor antagonist, tropisetron competitively blocks the action of serotonin at 5HT3 receptors, resulting in suppression of chemotherapy- and radiotherapy-induced nausea and vomiting.

Tropisetron appears to be well tolerated with the most frequently reported adverse effect being headache. Extrapyramidal side effects are rare upon using tropisetron.

**Indication.** For the prevention of nausea and vomiting induced by cytotoxic therapy and postoperative.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 14:12 | 20:51 | 0/0/0 | 1/0/0 | 0/0/5 | 382,009/11,562 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 2/13 | 13/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [George_2021](drugs/drug_tropisetron/pd_George_2021_ASP.md) | George B et al., In Vitro Inhibition of Renal OCT2 and M…, International journal of mo… (2021) | [10.3390/ijms22126439](https://doi.org/10.3390/ijms22126439) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Moore_2025](drugs/drug_tropisetron/pgx_Moore_2025_CYP2D6_Q27.md) | Moore C et al., CYP2D6 genotype and associated 5-HT3 re…, Clinical and translational… (2025) | [10.1111/cts.70108](https://doi.org/10.1111/cts.70108) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Moore_2026](drugs/drug_tropisetron/pgx_Moore_2026_CYP2D6_Q27.md) | Moore C et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70291](https://doi.org/10.1002/cpt.70291) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SLC22A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Tzvetkov_2012](drugs/drug_tropisetron/pgx_Tzvetkov_2012_SLC22A1_Q100.md) | Tzvetkov MV et al., Effects of OCT1 polymorphisms on the ce…, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.75](https://doi.org/10.1038/tpj.2010.75) |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_tropisetron/pgx_guideline_CYP2D6_PA166161955_0.md) | guideline | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tropisetron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…out 20 minutes) and nearly complete (more than 95%). Due to first-pass metabolism in the l…”</sub> | prose |
| absorption | small intestine | <sub>“…The absorption of tropisetron from the gastrointestinal tract is rapid (mean half-life of…”</sub> | prose |
| metabolism | bile duct | <sub>“…the glucuronide or sulphate with excretion in the urine or bile (urine to faeces ratio 5:1…”</sub> | prose |
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | kidney | <sub>“…action to the glucuronide or sulphate with excretion in the urine or bile (urine to faeces…”</sub> | prose |
| metabolism | liver | `CYP2D6` metabolism, `SLC22A1` transport | paper PGx gene |
| excretion | bile duct | <sub>“…unchanged drug, 70% as metabolites; 15% is excreted in the feces.…”</sub> | prose |
| excretion | kidney | <sub>“…About 8% of tropisetron is excreted in the urine as unchanged drug, 70% as metabolites; 15…”</sub> | prose |

<sub>Actors without a tissue in the table: ERBB2 (binder), HTR3A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 157 matched, 118 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_1999_2.pdf` | Huang CT et al., Measurement and pharmacokinetic study o…, International journal of ph… (1999) | popPK | 8 | [10.1016/s0378-5173(99)00079-4](https://doi.org/10.1016/s0378-5173(99)00079-4) | [10341312](https://pubmed.ncbi.nlm.nih.gov/10341312) | The paper describes a pharmacokinetic study of tropisetron in rats using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Abedini_2025.pdf` | Abedini F et al., Repurposing serotonergic drugs for gast…, Molecular biology reports (2025) | pd | 4 | [10.1007/s11033-025-10474-7](https://doi.org/10.1007/s11033-025-10474-7) | [40202572](https://www.ncbi.nlm.nih.gov/pubmed/40202572) | metadata signals extractable PD data (IC50) |
| `Bachy_1993.pdf` | Bachy A et al., SR 57227A: a potent and selective agoni…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90282-m](https://doi.org/10.1016/0014-2999(93)90282-m) | [7689975](https://www.ncbi.nlm.nih.gov/pubmed/7689975) | metadata signals extractable PD data (IC50) |
| `González_1997.pdf` | González AA et al., Ondansetron facilitates neuromuscular t…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(97)83046-4](https://doi.org/10.1016/s0014-2999(97)83046-4) | [9218702](https://www.ncbi.nlm.nih.gov/pubmed/9218702) | metadata signals extractable PD data (EC50) |
| `Kilbinger_1995.pdf` | Kilbinger H et al., Benzimidazolones and renzapride facilit…, Naunyn-Schmiedeberg's archi… (1995) | pd | 4 | [10.1007/BF00233241](https://doi.org/10.1007/BF00233241) | [7609775](https://www.ncbi.nlm.nih.gov/pubmed/7609775) | metadata signals extractable PD data (EC50) |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Maksay_1996.pdf` | Maksay G, Distinct thermodynamic parameters of se…, Journal of neurochemistry (1996) | pd | 4 | [10.1046/j.1471-4159.1996.67010407.x](https://doi.org/10.1046/j.1471-4159.1996.67010407.x) | [8667020](https://www.ncbi.nlm.nih.gov/pubmed/8667020) | metadata signals extractable PD data (IC50) |
| `Maksay_1999.pdf` | Maksay G et al., Selective blocking effects of tropisetr…, Journal of neurochemistry (1999) | pd | 4 | [10.1046/j.1471-4159.1999.0730802.x](https://doi.org/10.1046/j.1471-4159.1999.0730802.x) | [10428078](https://www.ncbi.nlm.nih.gov/pubmed/10428078) | metadata signals extractable PD data (EC50) |
| `Nieto_2000.pdf` | Nieto JE et al., In vitro effects of 5-hydroxytryptamine…, American journal of veterin… (2000) | pd | 4 | [10.2460/ajvr.2000.61.1561](https://doi.org/10.2460/ajvr.2000.61.1561) | [11131599](https://www.ncbi.nlm.nih.gov/pubmed/11131599) | metadata signals extractable PD data (Emax) |
| `Potenza_1998.pdf` | Potenza MA et al., Functional evaluation of 5-hydroxytrypt…, Journal of autonomic pharma… (1998) | pd | 4 | [10.1046/j.1365-2680.1998.1820075.x](https://doi.org/10.1046/j.1365-2680.1998.1820075.x) | [9730261](https://www.ncbi.nlm.nih.gov/pubmed/9730261) | metadata signals extractable PD data (EC50) |
| `Slánský_1994.pdf` | Slánský J et al., The effect of immunomodulator muramyl d…, Pharmacology (1994) | pd | 4 | [10.1159/000139157](https://doi.org/10.1159/000139157) | [8309983](https://www.ncbi.nlm.nih.gov/pubmed/8309983) | metadata signals extractable PD data (EC50) |
| `Tam_1994.pdf` | Tam FS et al., Characterization of the 5-hydroxytrypta…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb16186.x](https://doi.org/10.1111/j.1476-5381.1994.tb16186.x) | [7812604](https://www.ncbi.nlm.nih.gov/pubmed/7812604) | metadata signals extractable PD data (EC50) |
| `Yang_1998.pdf` | Yang X et al., Prejunctional 5-HT receptors enhance ch…, Yan ke xue bao = Eye science (1998) | pd | 4 | not captured | [12580024](https://www.ncbi.nlm.nih.gov/pubmed/12580024) | metadata signals extractable PD data (EC50) |
| `Yang_2001.pdf` | Yang X et al., [Presynaptic 5-hydroxytryptamine recept…, [Zhonghua yan ke za zhi] Ch… (2001) | pd | 4 | not captured | [11770411](https://www.ncbi.nlm.nih.gov/pubmed/11770411) | metadata signals extractable PD data (EC50) |
| `Yildiz_1996.pdf` | Yildiz O et al., 5-HT1-like receptor-mediated contractio…, Journal of cardiovascular p… (1996) | pd | 4 | [10.1097/00005344-199607000-00002](https://doi.org/10.1097/00005344-199607000-00002) | [8797129](https://www.ncbi.nlm.nih.gov/pubmed/8797129) | metadata signals extractable PD data (Concentration-effect) |
| `Firkusny_1995.pdf` | Firkusny L et al., In vitro characterization of cytochrome…, Biochemical pharmacology (1995) | pgx | 8 | [10.1016/0006-2952(95)00021-q](https://doi.org/10.1016/0006-2952(95)00021-q) | [7598739](https://www.ncbi.nlm.nih.gov/pubmed/7598739) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hassan_2011.pdf` | Hassan BA et al., Genetic polymorphisms in the three mala…, Asian Pacific journal of ca… (2011) | pgx | 8 | not captured | [21517255](https://www.ncbi.nlm.nih.gov/pubmed/21517255) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kim_2003.pdf` | Kim MK et al., Effect of the CYP2D6 genotype on the ph…, European journal of clinica… (2003) | pgx | 8 | [10.1007/s00228-003-0595-1](https://doi.org/10.1007/s00228-003-0595-1) | [12728290](https://www.ncbi.nlm.nih.gov/pubmed/12728290) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Morse_2020.pdf` | Morse BL et al., Pharmacokinetics of Organic Cation Tran…, Drug metabolism and disposi… (2020) | pgx | 8 | [10.1124/dmd.119.088781](https://doi.org/10.1124/dmd.119.088781) | [31771949](https://www.ncbi.nlm.nih.gov/pubmed/31771949) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Babaoglu_2005.pdf` | Babaoglu MO et al., Association of the ABCB1 3435C&gt;T polymo…, Clinical pharmacology and t… (2005) | pgx | 5 | [10.1016/j.clpt.2005.08.015](https://doi.org/10.1016/j.clpt.2005.08.015) | [16338277](https://www.ncbi.nlm.nih.gov/pubmed/16338277) | metadata signals extractable PGX data (ABCB1) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 | not captured | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Kaiser_2002.pdf` | Kaiser R et al., Patient-tailored antiemetic treatment w…, Journal of clinical oncolog… (2002) | pgx | 5 | [10.1200/JCO.2002.09.064](https://doi.org/10.1200/JCO.2002.09.064) | [12065557](https://www.ncbi.nlm.nih.gov/pubmed/12065557) | metadata signals extractable PGX data (CYP2D6) |
| `Späth_2004.pdf` | Späth M et al., Treatment of fibromyalgia with tropiset…, Scandinavian journal of rhe… (2004) | pgx | 5 | [10.1080/03009740410007087](https://doi.org/10.1080/03009740410007087) | [15515418](https://www.ncbi.nlm.nih.gov/pubmed/15515418) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-18T14:06:01.679674+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abedini_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in cancer cells and does not report any pharmacokinetic parameters for tropisetron. |
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of VA21B7, with tropisetron serving only as a comparator agent in behavioral models, and no pharmacokinetic parameters are reported. |
| PD | Artaiz_1995 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of VA21B7; tropisetron is only mentioned as a comparator in behavioral tests without providing specific numeric dose-response parameters or concentration-effect data for it. |
| popPK | Bachy_1993 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Bachy_1993 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of SR 57227A, not tropisetron, and does not report exposure-response or dose-response PD parameters for tropisetron. |
| popPK | Barzegar-Fallah_2023 | irrelevant | 0 | 0 | The study investigates the in-vitro anticancer mechanisms of tropisetron in melanoma cell lines and does not report any pharmacokinetic parameters. |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The paper reports that the analyzed OCT1 promoter SNPs had no significant effect on the pharmacokinetics or efficacy of tropisetron. |
| popPK | Briejer_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT4 receptor agonism in guinea-pig colon, using tropisetron only as a receptor antagonist, and reports no pharmacokinetic parameters. |
| PD | Briejer_1993 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (EC50, pA2) for cisapride and R 76,186, not for tropisetron, which is used only as an antagonist. |
| popPK | Budhoo_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT4 receptors in human jejunal mucosa, using tropisetron only as a receptor antagonist, and reports no pharmacokinetic parameters. |
| PD | Budhoo_1996 | not_relevant | 3 | 2 | The paper reports a pA2 value for tropisetron in an in vitro Ussing chamber assay, which is a pharmacological potency metric rather than an in vivo exposure-response or dose-response relationship with standard PD parameters (Emax, EC50) for the drug's clinical effect. |
| popPK | Budhoo_1996_2 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptors in rat colon tissue where tropisetron is used only as a receptor antagonist, not as the subject drug for PK analysis. |
| PD | Budhoo_1996_2 | not_relevant | 3 | 2 | The paper reports receptor pharmacology (pA2 values) for tropisetron in an in vitro tissue model, not a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship or dose-effect curve for the drug in a biological system. |
| popPK | Callahan_2017 | irrelevant | 0 | 0 | The paper is a mechanistic and behavioral study focusing on receptor pharmacology and cognitive effects, containing no pharmacokinetic disposition parameters. |
| popPK | Downie_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological and binding study on 5-HT3 receptors, not a pharmacokinetic study, and tropisetron is only used as a competitor ligand. |
| PD | Downie_1995 | not_relevant | 0 | 0 | The paper investigates the interaction of trichloroethanol with 5-HT3 receptors and mentions tropisetron only as a control antagonist in binding assays, without reporting any pharmacodynamic or exposure-response relationship for tropisetron itself. |
| popPK | Felt_2024 | irrelevant | 0 | 0 | The paper is a structural biology study on 5-HT3A receptors and does not report pharmacokinetic parameters for tropisetron. |
| PD | Felt_2024 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of 5-HT3A receptors and does not report pharmacokinetic or pharmacodynamic exposure-response modeling or numeric PD parameters for tropisetron. |
| PGx | Fischer_1994 | not_relevant | 2 | 5 | The study demonstrates CYP2D6 involvement in tropisetron metabolism using inhibitors and recombinant systems, but it does not report pharmacogenomic effects (genotype-based differences) on PK or PD parameters in humans. |
| popPK | Fodor_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of glycine receptors where tropisetron is used only as a diagnostic agent to identify receptor subtypes, not as a subject for pharmacokinetic analysis. |
| PD | Fodor_2006 | not_relevant | 0 | 0 | The paper reports electrophysiological characterization of glycine receptors and IC50 values for neuroactive steroids, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for tropisetron. |
| popPK | Ford_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT4 receptor coupling in rat oesophagus, reporting receptor affinity (pA2) rather than pharmacokinetic disposition parameters for tropisetron. |
| popPK | Fukuda_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morphine, not tropisetron. |
| PD | Fukuda_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of morphine and the influence of OCT1 genetic variants, with no mention of tropisetron or any pharmacodynamic (exposure-response) analysis. |
| popPK | Färber_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for fibromyalgia and does not report any pharmacokinetic parameters for tropisetron. |
| popPK | George_2021 | irrelevant | 0 | 0 | The study is an in-vitro transporter inhibition assay (OCT2/MATE1) and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tropisetron. |
| popPK | Gilmore_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of netupitant and palonosetron, not tropisetron. |
| PD | Gilmore_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetic profiles of netupitant and palonosetron to support their combination, with no mention of tropisetron or any pharmacodynamic/exposure-response modeling. |
| popPK | Girard_2006 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of nefopam, using tropisetron only as a receptor antagonist probe, and contains no pharmacokinetic parameters for tropisetron. |
| PD | Girard_2006 | not_relevant | 0 | 0 | The paper studies nefopam's antinociception and receptor subtypes; tropisetron is only mentioned as an antagonist that did not modify the effect, with no PD or exposure-response analysis for tropisetron. |
| popPK | Gomez_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on cocaine-gated ion channels where tropisetron is mentioned only as a structural analog/comparator, with no pharmacokinetic parameters reported. |
| PD | Gomez_2025 | not_relevant | 0 | 0 | The paper focuses on cocaine chemogenetics and does not report pharmacodynamic or exposure-response data for tropisetron. |
| popPK | González_1997 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | González_1997 | not_relevant | 0 | 0 | The paper focuses on ondansetron, not tropisetron, and does not report PD parameters for the target drug. |
| popPK | Gul_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptors in isolated arteries, not a pharmacokinetic study, and tropisetron is used only as a receptor antagonist probe. |
| PD | Gul_2003 | not_relevant | 0 | 0 | The paper reports that tropisetron did not affect 5-HT-induced contractions, providing no numeric PD parameters or exposure-response relationship for tropisetron. |
| PGx | Hassan_2011 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of granisetron, not tropisetron. |
| popPK | Herbert_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal motility where tropisetron is used only as a negative control agent, with no pharmacokinetic parameters reported. |
| PD | Herbert_2005 | not_relevant | 0 | 0 | The paper studies acetaminophen, aspirin, and dipyrone; tropisetron is only mentioned as a negative control that did not change the effect of acetaminophen, with no PD parameters reported for it. |
| PGx | Ho_2006_2 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) affecting response but does not report specific quantitative PK/PD parameter changes for tropisetron. |
| PGx | Hsu_2010 | not_relevant | 0 | 0 | The paper is a general review of antiemetics that mentions tropisetron's metabolism via CYP2D6 but does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Huang_1999_2 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of tropisetron in rats using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of busulfan, not tropisetron. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper focuses on the external evaluation of population pharmacokinetic (PK) models for busulfan, not tropisetron, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Huddart_2019_2 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Huddart_2019_2 | not_relevant | 1 | 0 | The text is a title/summary line for a PharmGKB page and does not contain the full text or any numeric PD parameters. |
| popPK | Imanishi_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium dynamics where tropisetron is used only as a receptor antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Imanishi_2006 | not_relevant | 1 | 0 | The paper reports an IC50 for tropisetron in an in vitro cell assay, which is a pharmacological potency measure, not a pharmacodynamic (exposure-response) relationship for the drug's therapeutic effect in a biological system. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT7 receptors in porcine oviducts where tropisetron is used only as a non-effective antagonist, and no pharmacokinetic parameters are reported. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in porcine oviducts and mentions tropisetron only as a non-antagonist control; it does not report a PD or exposure-response relationship for tropisetron. |
| popPK | Ishibashi_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of dextromethorphan where tropisetron is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Ishibashi_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of dextromethorphan, not tropisetron; tropisetron is only mentioned as a control antagonist without reported numeric PD parameters. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on 5-HT3 receptor inhibition by terpenoids, and tropisetron is only mentioned as a clinical comparator, with no pharmacokinetic parameters reported. |
| PD | Jarvis_2016 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50, Hill coefficients) for citral, eucalyptol, and linalool, but does not contain any data or analysis for tropisetron. |
| popPK | Kazemi-Kjellberg_2001 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for treating postoperative nausea and vomiting, containing no pharmacokinetic parameters or disposition data for tropisetron. |
| PD | Kazemi-Kjellberg_2001 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively concludes there is "little evidence of dose-responsiveness" for tropisetron, providing no numeric PD parameters or extractable concentration-effect curves. |
| popPK | Kilbinger_1995 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Kilbinger_1995 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of benzimidazolones and renzapride on acetylcholine release via 5-HT4 receptors and does not report any pharmacodynamic or exposure-response data for tropisetron. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Kitazawa_1998 | not_relevant | 0 | 0 | The paper focuses on the mechanism of 5-HT7 receptors in porcine myometrium and does not report pharmacodynamic or exposure-response data for tropisetron. |
| popPK | Langlois_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of visceral hypersensitivity in rats where tropisetron is used as a comparator agent and no pharmacokinetic parameters are reported. |
| PD | Langlois_1996 | not_relevant | 0 | 0 | The paper explicitly states that tropisetron was inactive in the model, so no dose-response curve or numeric PD parameters are reported for it. |
| popPK | Lee_1993_2 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for tropisetron. |
| PD | Lee_1993_2 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical efficacy percentages and tolerability, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect relationships. |
| popPK | Linnik_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of benzamides in guinea-pig ileum where tropisetron is used only as a receptor antagonist probe, with no pharmacokinetic parameters reported. |
| popPK | Maksay_1996 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study focusing on thermodynamic parameters, not a pharmacokinetic study reporting disposition parameters for tropisetron. |
| PD | Maksay_1996 | not_relevant | 1 | 2 | The paper reports in vitro binding thermodynamics and IC50 values for receptor displacement, which are pharmacological potency metrics, not in vivo pharmacodynamic (exposure-response) or dose-response relationships for the drug's clinical effect. |
| popPK | Maksay_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor binding and allosteric modulation, not a pharmacokinetic study, and contains no disposition parameters for tropisetron. |
| popPK | Maksay_1999 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Maksay_1999 | not_relevant | 0 | 0 | The paper describes in vitro electrophysiological studies of tropisetron on recombinant glycine receptors, not a pharmacokinetic/pharmacodynamic or exposure-response analysis in a biological system. |
| PGx | Morse_2020 | not_relevant | 2 | 5 | The paper reports minimal pharmacokinetic changes for tropisetron in Oct1/2 knockout mice and explicitly notes species differences, indicating the mouse model does not reflect the human pharmacogenomic effect. |
| popPK | Nieto_2000 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Nieto_2000 | not_relevant | 0 | 0 | The paper focuses on the in vitro effects of 5-hydroxytryptamine and cisapride on horse jejunum, with no mention of tropisetron or any pharmacodynamic modeling for it. |
| PGx | OBrien_2013 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of the OCT1 transporter by HNF1 and explicitly states that the effect on the pharmacokinetics of tropisetron remains to be determined. |
| popPK | Papke_2005 | irrelevant | 0 | 0 | The paper is a mechanistic study on receptor binding and pharmacology, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a bioinformatics study on text mining algorithms for drug-gene relationships and does not contain any pharmacokinetic data or parameters for tropisetron. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and contains no pharmacokinetic or pharmacodynamic data for tropisetron. |
| popPK | Pickering_2012_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction trial focusing on pain scores, not a pharmacokinetic study, and reports no quantitative disposition parameters for tropisetron. |
| PD | Pickering_2012_2 | not_relevant | 1 | 0 | The study reports only qualitative pain score comparisons between groups without any concentration-effect modeling or numeric PD parameters. |
| popPK | Potenza_1998 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Potenza_1998 | not_relevant | 0 | 0 | The paper focuses on 5-HT receptor activity in rat resistance vessels and does not mention tropisetron or report any pharmacodynamic parameters for it. |
| popPK | Roila_1997 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety of 5-HT3 antagonists and does not report quantitative pharmacokinetic parameters for tropisetron. |
| PD | Roila_1997 | not_relevant | 1 | 0 | The text is a qualitative review comparing clinical efficacy and safety, mentioning dose-response curves in general terms but providing no numeric PD parameters or extractable concentration-effect data for tropisetron. |
| popPK | Rothlin_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions (IC50 values) and does not report pharmacokinetic disposition parameters for tropisetron. |
| PGx | Sanwald_1996 | not_relevant | 0 | 0 | The paper characterizes the CYP450 enzymes involved in the metabolism of dolasetron and compares it to tropisetron, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Sanwald_1996_2 | not_relevant | 2 | 5 | The paper reports in vitro metabolic inhibition by CYP2D6 but does not report in vivo pharmacokinetic or pharmacodynamic parameters or genotype-specific clinical effects. |
| popPK | Schoeffter_1994 | irrelevant | 0 | 0 | The study is an in-vitro receptor characterization assay in pig brain membranes, not a pharmacokinetic study, and tropisetron is used only as a receptor antagonist probe. |
| PD | Schoeffter_1994 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in pig brain membranes and reports that tropisetron did not significantly alter the 5-HT concentration-response curve, providing no numeric PD parameters or exposure-response relationship for tropisetron. |
| popPK | Segura_2010 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation in guinea pigs where tropisetron is used as a receptor antagonist, not a PK study reporting disposition parameters. |
| PD | Segura_2010 | not_relevant | 0 | 0 | The paper investigates the role of 5-HT receptors in airway hyperresponsiveness using pharmacological antagonists and agonists, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for tropisetron. |
| PGx | Shiee_2021 | not_relevant | 0 | 0 | The paper investigates the in vitro antiparasitic effects of tropisetron on Echinococcus granulosus, not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Slánský_1994 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Slánský_1994 | not_relevant | 0 | 0 | The paper investigates the effect of muramyl dipeptide on serotoninergic responses and does not report any pharmacodynamic or exposure-response data for tropisetron. |
| PGx | Späth_2004 | not_relevant | 2 | 0 | The paper mentions CYP2D6 as a hypothesis for dose efficacy in slow metabolizers but does not report measured pharmacokinetic or pharmacodynamic parameters linked to specific genotypes. |
| popPK | Tam_1994 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Tam_1994 | not_relevant | 0 | 0 | The paper investigates the receptor subtype involved in the inhibition of colonic muscle activity and does not report a pharmacodynamic or exposure-response relationship for tropisetron. |
| popPK | Toral_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of potassium channel blocking by ondansetron, with tropisetron serving only as a negative comparator, and no pharmacokinetic parameters are reported. |
| PD | Toral_1995 | not_relevant | 0 | 0 | The paper focuses on the potassium-channel blocking activity of ondansetron and explicitly states that tropisetron does not share this property, providing no PD or exposure-response data for tropisetron. |
| popPK | Verleden_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of ketotifen in guinea pig airways where tropisetron is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Verleden_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of ketotifen; tropisetron is used only as a negative control (5-HT3 antagonist) and no PD parameters or dose-response curves are reported for it. |
| popPK | Wardle_1993 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing 5-HT4 receptor activity in guinea-pig colon, not a pharmacokinetic study, and tropisetron is used only as a receptor antagonist probe. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy for postoperative nausea and vomiting, not a pharmacokinetic study, and it contains no PK parameters for tropisetron. |
| PD | Weibel_2020 | not_relevant | 1 | 0 | The paper is a network meta-analysis comparing clinical efficacy (risk ratios) of antiemetics; it does not report pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for tropisetron. |
| popPK | Yang_1998 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Yang_1998 | not_relevant | 0 | 0 | The paper focuses on the physiological mechanism of 5-HT receptors in the iris-ciliary body and does not report pharmacokinetic or pharmacodynamic modeling for tropisetron. |
| popPK | Yang_2001 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Yang_2001 | not_relevant | 0 | 0 | The paper focuses on the physiological mechanism of 5-HT receptors in the human iris-ciliary body and does not report pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for tropisetron. |
| popPK | Yildiz_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors in rabbit iliac artery where tropisetron is used only as a receptor antagonist probe, not as a subject for pharmacokinetic analysis. |
| PD | Yildiz_1993 | not_relevant | 0 | 0 | The paper reports that tropisetron had no effect on contractions, providing no numeric PD parameters or exposure-response relationship for the drug. |
| popPK | Yildiz_1996 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Yildiz_1996 | not_relevant | 0 | 0 | The paper investigates 5-HT1-like receptor-mediated contraction in human internal mammary artery and does not mention tropisetron or report any exposure-response or dose-response data for it. |
| popPK | Yuan_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms where tropisetron is used only as a comparator antagonist, not a PK study. |
| PD | Yuan_1998 | not_relevant | 3 | 2 | The paper reports an in vitro pharmacological study where tropisetron is used as a tool compound to characterize pinacidil's effects; it does not report a PK/PD or exposure-response relationship for tropisetron itself, nor does it provide numeric PD parameters (like Ki or pA2) for tropisetron, only stating it competitively inhibited the response at a single concentration. |
| popPK | Yuan_2011 | irrelevant | 0 | 0 | The study is a pharmacological investigation of smooth muscle contractions where tropisetron is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Yuan_2011 | not_relevant | 0 | 0 | The paper studies jatrorrhizine, not tropisetron; tropisetron is only mentioned as a negative control that did not inhibit the response. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not tropisetron, which is only mentioned as an antiemetic co-administered in the protocol. |
| PD | Zhang_2015 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for methotrexate, not tropisetron, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Zhou_2009_2 | irrelevant | 1 | 0 | The paper is a review of CYP2D6 polymorphisms that mentions tropisetron only qualitatively regarding efficacy in ultrarapid metabolizers, without providing any quantitative pharmacokinetic parameter values. |
| PD | Zhou_2009_2 | not_relevant | 1 | 0 | The text is a review article that qualitatively mentions a gene-concentration relationship for tropisetron but provides no numeric PD parameters, dose-response curves, or exposure-response data. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is a header for a conference abstract collection and does not contain the specific abstract or data for tropisetron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
