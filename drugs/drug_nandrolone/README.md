<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;nandrolone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nandrolone_Wijnand1985_reference&quot;,&quot;label&quot;:&quot;Wijnand_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nandrolone/Nandrolone_Wijnand1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nandrolone

- **generic name:** nandrolone
- **ATC codes:** `A14AB01`, `S01XA11`
- **DrugBank:** [DB13169](https://go.drugbank.com/drugs/DB13169) · **PubChem:** [CID 9904](https://pubchem.ncbi.nlm.nih.gov/compound/9904)
- **molar mass:** 274.3978 g/mol (C18H26O2) — DrugBank
- **groups:** investigational

## About

**Description.** Nandrolone, also known as 19-nortestosterone or 19-norandrostenolone, is a synthetic anabolic-androgenic steroid (AAS) derived from testosterone.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nandrolone | parent | 274.398 | C18H26O2 | DrugBank | [9904](https://pubchem.ncbi.nlm.nih.gov/compound/9904) | Wijnand_1985 |
| nandrolone decanoate | metabolite | 428.657 | C28H44O3 | PubChem | [9677](https://pubchem.ncbi.nlm.nih.gov/compound/9677) | Wijnand_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 17:59 | 49:53 | 0/1/0 | 0/0/0 | 0/0/2 | 304,928/17,894 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/12 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wijnand_1985_reference](drugs/drug_nandrolone/Nandrolone_Wijnand1985_reference.md) | — | general linear (no model) | 1 | Wijnand HP et al., Pharmacokinetic parameters of nandrolon…, Acta endocrinologica. Suppl… (1985) | [10.1530/acta.0.109s00019](https://doi.org/10.1530/acta.0.109s00019) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **UGT2B15** | `Q22` · CL | metabolism | [Strahm_2013](drugs/drug_nandrolone/pgx_Strahm_2013_UGT2B15_Q22.md) | Strahm E et al., Implication of Human UGT2B7, 2B15, and…, Frontiers in endocrinology (2013) | [10.3389/fendo.2013.00075](https://doi.org/10.3389/fendo.2013.00075) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **UGT2B7** | `Q22` · CL | metabolism | [Strahm_2013](drugs/drug_nandrolone/pgx_Strahm_2013_UGT2B7_Q22.md) | Strahm E et al., Implication of Human UGT2B7, 2B15, and…, Frontiers in endocrinology (2013) | [10.3389/fendo.2013.00075](https://doi.org/10.3389/fendo.2013.00075) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nandrolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT2B7` metabolism | paper PGx gene |
| metabolism | liver | `UGT2B15` metabolism, `UGT2B7` metabolism | paper PGx gene |
| metabolism | small intestine | `UGT2B7` metabolism | paper PGx gene |
| target | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 144 matched, 76 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wijnand_1985.pdf` | Wijnand HP et al., Pharmacokinetic parameters of nandrolon…, Acta endocrinologica. Suppl… (1985) | popPK | 10 | [10.1530/acta.0.109s00019](https://doi.org/10.1530/acta.0.109s00019) | [3865478](https://pubmed.ncbi.nlm.nih.gov/3865478) | The evidence explicitly reports quantitative pharmacokinetic parameters for nandrolone, including half-lives and serum clearance. |
| `Minto_1997.pdf` | Minto CF et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacology… (1997) | popPK | 9 | not captured | [9103484](https://pubmed.ncbi.nlm.nih.gov/9103484) | The study is a PK/PD analysis of nandrolone esters using a mixed-effects model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Kalicharan_2016_2.pdf` | Kalicharan RW et al., Fundamental understanding of drug absor…, European journal of pharmac… (2016) | popPK | 8 | [10.1016/j.ejps.2015.12.011](https://doi.org/10.1016/j.ejps.2015.12.011) | [26690043](https://pubmed.ncbi.nlm.nih.gov/26690043) | The paper describes a PK study of nandrolone decanoate and discusses absorption mechanisms, but the provided evidence contains no specific numeric parameter values (e.g., CL, V, ka). |
| `Singh_2014.pdf` | Singh GK et al., Pharmacokinetic-pharmacodynamic study o…, The Journal of clinical end… (2014) | popPK | 8 | [10.1210/jc.2014-1243](https://doi.org/10.1210/jc.2014-1243) | [24684468](https://pubmed.ncbi.nlm.nih.gov/24684468) | The study reports PK parameters (Cmax, Tmax) for nandrolone but lacks compartmental model parameters (CL, V, ka) and the full concentration-time data required for population PK extraction. |
| `Ray_2005.pdf` | Ray JE et al., Therapeutic drug monitoring of atazanav…, British journal of clinical… (2005) | pd | 5 | [10.1111/j.1365-2125.2005.02413.x](https://doi.org/10.1111/j.1365-2125.2005.02413.x) | [16120068](https://www.ncbi.nlm.nih.gov/pubmed/16120068) | metadata signals extractable PD data (exposure-response) |
| `Liang_1993.pdf` | Liang MT et al., Effects of anabolic steroids and endura…, International journal of sp… (1993) | pd | 4 | [10.1055/s-2007-1021186](https://doi.org/10.1055/s-2007-1021186) | [8407062](https://www.ncbi.nlm.nih.gov/pubmed/8407062) | metadata signals extractable PD data (Emax) |
| `Ponec_1981.pdf` | Ponec M et al., Corticoids and cultured human epidermal…, The Journal of investigativ… (1981) | pd | 4 | [10.1111/1523-1747.ep12525761](https://doi.org/10.1111/1523-1747.ep12525761) | [6165779](https://www.ncbi.nlm.nih.gov/pubmed/6165779) | metadata signals extractable PD data (IC50) |
| `Chowdhury_2017.pdf` | Chowdhury P et al., Analysis of Elevated Levels of Nandrolo…, Drug metabolism letters (2017) | pgx | 7 | [10.2174/1872312811666171114145535](https://doi.org/10.2174/1872312811666171114145535) | [29141576](https://www.ncbi.nlm.nih.gov/pubmed/29141576) | metadata signals extractable PGX data (CYP1, PK/PD-context) |
| `Gårevik_2011.pdf` | Gårevik N et al., Long term perturbation of endocrine par…, The Journal of steroid bioc… (2011) | pgx | 5 | [10.1016/j.jsbmb.2011.08.005](https://doi.org/10.1016/j.jsbmb.2011.08.005) | [21884791](https://www.ncbi.nlm.nih.gov/pubmed/21884791) | metadata signals extractable PGX data (UGT2B17) |

<sub>queue written 2026-09-26T17:50:10.426874+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayoub_2017 | irrelevant | 0 | 0 | The study investigates dimethandrolone undecanoate (DMAU), not nandrolone, and nandrolone is not mentioned as a subject or comparator. |
| PD | Baydoun_2014 | not_relevant | 3 | 5 | The paper reports IC50 values for anti-leishmanial activity, which are dose-response metrics, but it is a pharmacological screening study rather than a pharmacokinetic/pharmacodynamic (PK/PD) analysis of nandrolone's exposure-response relationship in a biological system. |
| popPK | Belkien_1985 | irrelevant | 2 | 1 | The study focuses on 19-nortestosterone esters (NP/ND) rather than nandrolone, and only reports half-lives without volume or clearance parameters. |
| popPK | Cattani_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of estradiol and spironolactone, not nandrolone. |
| PD | Cattani_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of estradiol and spironolactone, not nandrolone, and does not report any pharmacodynamic or exposure-response relationships. |
| PGx | Chowdhury_2017 | not_relevant | 0 | 0 | The study investigates the effect of nandrolone on CYP enzymes, not the effect of a gene variant on nandrolone pharmacokinetics or pharmacodynamics. |
| popPK | Clark_1996 | irrelevant | 0 | 0 | The study focuses on behavioral and endocrine effects of nandrolone decanoate in rats, not pharmacokinetic disposition parameters. |
| PD | Dirikolu_2023 | not_relevant | 1 | 0 | The paper is a review that explicitly states only minimal pharmacodynamic studies have been carried out and does not report any numeric PD parameters or exposure-response relationships. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | The paper focuses on the antioxidant properties of oolong tea compounds and their effects on breast cancer genes, with no mention of nandrolone or pharmacokinetic parameters. |
| PD | Ferrer_2025 | not_relevant | 0 | 0 | The paper investigates oolong tea bioactive compounds and their effects on breast cancer genes, with no mention of nandrolone or any pharmacodynamic modeling. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a review/methodology study on DILI prediction using a dataset of 241 drugs and does not report specific pharmacokinetic parameters for nandrolone. |
| PD | Geci_2026 | not_relevant | 0 | 0 | The paper focuses on drug-induced liver injury (DILI) prediction using BSEP inhibition and does not mention nandrolone or report any pharmacodynamic parameters for it. |
| popPK | Ghorbanizamani_2026 | irrelevant | 0 | 0 | The paper is a review on upconversion nanoparticles and does not contain any pharmacokinetic data for nandrolone. |
| PD | Ghorbanizamani_2026 | not_relevant | 0 | 0 | The paper is a review on upconversion nanoparticles in biomedical applications and contains no information regarding nandrolone or any pharmacodynamic modeling. |
| popPK | Guan_2005 | irrelevant | 1 | 0 | The paper describes an analytical method for detecting steroids in equine plasma and mentions application to a PK study, but it does not report any quantitative pharmacokinetic parameters (CL, V, t1/2) for nandrolone. |
| PGx | Gårevik_2011 | not_relevant | 2 | 5 | The paper reports an association between UGT2B17 genotype and the detectability of a biomarker (testosterone/nandrolone metabolites) in the context of doping control, but does not report a pharmacogenomic effect on the PK/PD parameters (e.g., clearance, half-life, receptor sensitivity) of nandrolone itself. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The study focuses on the immunological effects of estrogen in primates and does not report pharmacokinetic parameters for nandrolone. |
| PD | Hahn_2025 | not_relevant | 0 | 0 | The paper studies the immunological effects of 17β-estradiol in rhesus macaques and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | He_2016 | irrelevant | 0 | 0 | The study focuses on the binding of norethindrone derivatives to human serum albumin using in-vitro spectroscopy and does not report pharmacokinetic parameters for nandrolone. |
| popPK | Heldring_2024 | irrelevant | 0 | 0 | The paper is a mechanistic modeling study of estrogen receptor signaling and cell cycle progression in MCF7 cells, and does not report pharmacokinetic parameters for nandrolone. |
| PD | Heldring_2024 | not_relevant | 0 | 0 | The paper focuses on 17β-estradiol (E2) signaling and cell cycle dynamics in MCF7 cells, not nandrolone. |
| popPK | Herencia-Ropero_2024 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and efficacy of the PARP inhibitor saruparib in cancer models and does not involve nandrolone or report any pharmacokinetic parameters for it. |
| PD | Herencia-Ropero_2024 | not_relevant | 0 | 0 | The paper reports antitumor efficacy in PDX models for saruparib (AZD5305), not nandrolone, and does not provide exposure-response or dose-response PD parameters. |
| popPK | Hild_2010 | irrelevant | 0 | 0 | The study focuses on liver toxicity markers (BSP clearance, enzymes) in rabbits for various androgens, does not include nandrolone, and does not report pharmacokinetic parameters for nandrolone. |
| popPK | Hilpert_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and hepatotoxicity of BAY1128688, not nandrolone. |
| popPK | Hohmann_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing functional outcomes (muscle strength, bone density) after knee arthroplasty and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for nandrolone. |
| PD | Howe_1997 | not_relevant | 0 | 0 | The paper focuses on the feasibility of using filter paper for sample collection and transport, reporting only on assay accuracy and stability, without providing any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for nandrolone. |
| popPK | Hyndman_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of estradiol-17β in cats, not nandrolone. |
| PD | Hyndman_2020 | not_relevant | 0 | 0 | The paper studies estradiol cypionate in cats, not nandrolone, and reports only PK parameters without a PD model. |
| popPK | Iyer_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, using nandrolone decanoate only as a suppressant agent, and does not report PK parameters for nandrolone. |
| popPK | Joumaa_2002 | irrelevant | 0 | 0 | The study investigates the physiological effects of nandrolone on skeletal muscle contractility (twitch, K+ and caffeine contractures) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Joumaa_2002 | not_relevant | 0 | 0 | The text describes general physiological mechanisms of muscle contraction and lists factors affecting anabolic steroid studies, but does not report any specific exposure-response or dose-response data, curves, or numeric PD parameters for nandrolone. |
| popPK | Kalicharan_2016 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of benzyl alcohol (BOH) as the subject drug, with nandrolone decanoate serving only as a co-administered component in the oil depot formulation. |
| popPK | Kalicharan_2016_2 | relevant | 8 | 0 | The paper describes a PK study of nandrolone decanoate and discusses absorption mechanisms, but the provided evidence contains no specific numeric parameter values (e.g., CL, V, ka). |
| popPK | Kalinine_2014 | irrelevant | 0 | 0 | The study investigates the neurobehavioral and mechanistic effects of nandrolone on glutamate homeostasis in mice, reporting no pharmacokinetic parameters. |
| popPK | Klingelhöfer_2020 | irrelevant | 0 | 0 | The paper describes a bioanalytical method for detecting hormonal activity in products and does not report pharmacokinetic parameters for nandrolone. |
| PD | Klingelhöfer_2020 | not_relevant | 2 | 1 | The paper describes a bioanalytical method for detecting agonists/antagonists and mentions investigating dose-response curves for nandrolone to optimize sensitivity, but it does not report specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data for nandrolone in the provided text. |
| popPK | Kumar_1990 | irrelevant | 0 | 0 | The study investigates 7 alpha-methyl-19-nortestosterone (7MENT), not nandrolone. |
| popPK | Kumar_1997 | irrelevant | 0 | 0 | The study investigates 7 alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Liang_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac contractile function, not a pharmacokinetic study, and reports no disposition parameters for nandrolone. |
| PD | Liang_1993 | not_relevant | 1 | 0 | The study reports qualitative group differences in cardiac function (e.g., lowered Emax in the combined group) but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for nandrolone. |
| popPK | Lima_2020 | irrelevant | 0 | 0 | The study is a toxicological investigation of renal function and oxidative stress in rats, not a pharmacokinetic study, and reports no disposition parameters for nandrolone. |
| popPK | Long_1996 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment examining aggression in rats, not a pharmacokinetic study, and reports no disposition parameters for nandrolone. |
| PD | Long_1996 | not_relevant | 3 | 2 | The paper reports qualitative dose-response observations (e.g., low vs. high doses) but does not provide numeric concentration-effect data, PK parameters, or a fitted PD model with extractable parameters like Emax or EC50. |
| PD | Long_2000 | not_relevant | 2 | 1 | The paper reports qualitative dose effects (high vs low dose) on seizure kindling but provides no numeric concentration-effect data, PK parameters, or derivable PD parameters (Emax, EC50, etc.). |
| popPK | McGill_2025 | irrelevant | 0 | 0 | The paper studies the effects of 17α-estradiol on APOE4 mice and does not involve nandrolone or report any pharmacokinetic parameters for it. |
| PD | McGill_2025 | not_relevant | 0 | 0 | The paper studies 17α-estradiol, not nandrolone, and reports group-level statistical comparisons rather than a pharmacodynamic exposure-response model. |
| popPK | Minto_1997 | relevant | 9 | 0 | The study is a PK/PD analysis of nandrolone esters using a mixed-effects model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Norton_2000 | irrelevant | 0 | 0 | The study investigates cardiac contractile function and beta-adrenoceptor responses in rats, not the pharmacokinetic disposition parameters of nandrolone. |
| PD | Norton_2000 | not_relevant | 2 | 1 | The study reports a qualitative attenuation of cardiac contractile response to isoproterenol following nandrolone administration, but it does not provide a concentration-effect or dose-response curve for nandrolone itself, nor does it derive numeric PD parameters (e.g., EC50, Emax) for the drug's effect. |
| popPK | Oluwatuyi_2025 | irrelevant | 0 | 0 | The paper is a computational study on phyto-compounds for prostate cancer and does not report pharmacokinetic parameters for nandrolone. |
| PD | Oluwatuyi_2025 | not_relevant | 0 | 0 | The paper is a computational study on phyto-compounds as 17β-HSD inhibitors and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| PGx | Palermo_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition by other drugs) on nandrolone metabolism, not pharmacogenomic effects of gene variants. |
| popPK | Pastuszak_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of testosterone undecanoate, not nandrolone. |
| PD | Pastuszak_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of testosterone undecanoate and simulates exposure changes for different dosing regimens, but it does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters for nandrolone (or any drug). |
| popPK | Penna_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cardiac beta-adrenoceptor expression and contractility, not a pharmacokinetic study, and reports no disposition parameters for nandrolone. |
| PD | Ponec_1981 | not_relevant | 0 | 0 | The paper reports that nandrolone did not show any affinity for the corticoid binding system and provides no numeric PD parameters or dose-response relationship for nandrolone. |
| popPK | Pozzi_2013 | irrelevant | 0 | 0 | The study is a toxicological investigation of genetic damage (comet assay/micronucleus test) and does not report any pharmacokinetic parameters for nandrolone. |
| PD | Pozzi_2013 | not_relevant | 3 | 2 | The study reports a qualitative dose-response relationship for genetic damage (comet assay) at two doses but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| PD | Ray_2005 | not_relevant | 0 | 0 | The paper focuses on therapeutic drug monitoring of atazanavir and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Raymond_2025 | irrelevant | 0 | 0 | The paper is a cancer biology study focusing on the GRPR/E-cadherin pathway in melanoma and does not report pharmacokinetic parameters for nandrolone. |
| PD | Raymond_2025 | not_relevant | 0 | 0 | The paper focuses on the GRPR signaling pathway in melanoma and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Singh_2014 | relevant | 8 | 2 | The study reports PK parameters (Cmax, Tmax) for nandrolone but lacks compartmental model parameters (CL, V, ka) and the full concentration-time data required for population PK extraction. |
| popPK | Singh_2019 | irrelevant | 0 | 0 | The paper focuses on the PK-PD of antibody-drug conjugates (specifically T-vc-MMAE) in mice and does not involve nandrolone. |
| PD | Singh_2019 | not_relevant | 0 | 0 | The paper focuses on the PK-PD modeling of an antibody-drug conjugate (T-vc-MMAE) and does not mention nandrolone. |
| popPK | Soma_2007 | irrelevant | 1 | 0 | The study focuses on boldenone and stanozolol pharmacokinetics in horses, reporting only baseline endogenous nandrolone concentrations rather than disposition parameters for nandrolone as the subject drug. |
| popPK | Suvisaari_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Suvisaari_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7 alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not contain any pharmacokinetic data or parameters for nandrolone. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The paper is a review of natural supplements in breast cancer and does not mention nandrolone or report any pharmacodynamic or exposure-response data. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper describes a cancer drug degradation platform (FolTAC-dual) and does not involve the drug nandrolone or its pharmacokinetics. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper focuses on FolTAC-dual degraders for EGFR/HER2 and PD-L1/VISTA and does not mention nandrolone or report any pharmacodynamic parameters for it. |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 11β-MNTDC/11β-MNT, not nandrolone. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper focuses on plant biochemistry and cardenolide biosynthesis, not the pharmacokinetics of nandrolone. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the enzymatic mechanism of cardenolide biosynthesis in plants and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Yuen_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 11β-MNTDC, not nandrolone. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper is a review of Pueraria mirifica and does not report pharmacokinetic parameters for nandrolone. |
| PD | Zeng_2026 | not_relevant | 0 | 0 | The paper is a review of Pueraria mirifica and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | van_1993 | irrelevant | 2 | 0 | The text is a qualitative review describing general pharmacokinetic principles of anabolic steroids without reporting any specific quantitative disposition parameters (CL, V, ka, etc.) for nandrolone. |
| PD | van_1993 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and mentions pharmacodynamic patterns only in general terms without providing any numeric PD parameters or exposure-response data. |
| popPK | Łach_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on PaPE-1 and neuroprotection, with no mention of nandrolone or its pharmacokinetic parameters. |
| PD | Łach_2026 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of PaPE-1 in an in vitro model and does not contain any data, analysis, or mention of nandrolone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 17:50 UTC</sub>
