<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03C&quot;,&quot;href&quot;:&quot;atc/G03C.md&quot;},{&quot;label&quot;:&quot;tibolone&quot;}]"></div>

# tibolone

- **generic name:** tibolone
- **ATC codes:** `G03CX01`
- **DrugBank:** [DB09070](https://go.drugbank.com/drugs/DB09070) · **PubChem:** [CID 444008](https://pubchem.ncbi.nlm.nih.gov/compound/444008)
- **molar mass:** 312.453 g/mol (C21H28O2) — DrugBank
- **groups:** approved, investigational

## About

Tibolone is a synthetic steroid hormone medicine used to treat symptoms of menopause and to help prevent osteoporosis in postmenopausal women. It is approved and used in several countries, mainly in Europe and elsewhere outside the United States, where it has not been authorised.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413805](https://www.wikidata.org/wiki/Q413805) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:57 | 10:11 | 0/0/0 | 2/0/0 | 0/0/0 | 667,450/4,944 | einfracz / qwen3.8-27b | 32 | 3/29 | 30/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eilertsen_2006_D_dimer](drugs/drug_tibolone/pd_Eilertsen_2006_D_dimer.md) | D-dimer ← tibolone · stimulation effect | — | Eilertsen AL et al., Conventional-dose hormone therapy (HT)…, Maturitas (2006) | [10.1016/j.maturitas.2006.04.012](https://doi.org/10.1016/j.maturitas.2006.04.012) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [García-Juárez_2020_lordosis](drugs/drug_tibolone/pd_Garc_a_Ju_rez_2020_lordosis.md) | lordosis behavior ← tibolone · stimulation effect | — | García-Juárez M et al., Tibolone facilitates lordosis behavior…, Neuroscience letters (2020) | [10.1016/j.neulet.2020.135299](https://doi.org/10.1016/j.neulet.2020.135299) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tibolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SULT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `SULT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target), HSD3B1 (substrate), HSD3B2 (substrate), STS (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11159 matched, 76 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study or report parameters for tibolone. |
| popPK | Bodine_2002 | irrelevant | 0 | 0 | The paper describes in vitro ligand-binding and cell-based assays for a tibolone metabolite, reporting potency metrics (IC50, EC50, ED50) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methods study on automated pharmacometric modeling using neural ODEs and LASSO, demonstrating the approach on neonatal weight, simulated PK, and warfarin, with no mention of tibolone. |
| popPK | Casiano_2023 | irrelevant | 0 | 0 | This is a clinical systematic review of treatments for genitourinary syndrome of menopause, not a pharmacokinetic study, and it does not report any quantitative PK parameters (CL, V, ka, etc.) for tibolone. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study investigates population pharmacokinetics of rivaroxaban, not tibolone. |
| popPK | Chetrite_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of estrone sulphatase activity, not a pharmacokinetic study. |
| popPK | Chetrite_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (estrone sulfatase) and does not report quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| PGx | Clark_2010 | not_relevant | 2 | 0 | The paper reports a drug-drug interaction (tibolone inhibiting CYP3A4 affecting tacrolimus PK), not a pharmacogenomic effect (gene variant/genotype) on tibolone. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of belantamab mafodotin, not tibolone. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a review on Model-Informed Drug Development for analgesics and does not report pharmacokinetic parameters for tibolone. |
| popPK | Desreux_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of tibolone on tumor growth and estrogen metabolism in mice, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for tibolone itself. |
| popPK | Eilertsen_2006 | irrelevant | 0 | 0 | The paper is a clinical study on coagulation markers (hemostasis) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Eilertsen_2007 | irrelevant | 0 | 0 | The study investigates the effect of tibolone on the activated protein C system and does not report pharmacokinetic parameters (clearance, volume, etc.) for the drug. |
| popPK | García-Juárez_2020 | irrelevant | 0 | 0 | The study investigates behavioral pharmacology (lordosis behavior) in rats and does not report any quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the drug iclepertin, not tibolone. |
| popPK | Hasenbrink_2006 | irrelevant | 0 | 0 | This is an in-vitro receptor bioassay study assessing estrogenic potency, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of calaspargase pegol (CalPEG) in mice and humans, not tibolone. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated population pharmacokinetic modeling algorithms using 22 unrelated drug datasets (e.g., bedaquiline, cefaclor) and does not mention tibolone or provide parameters for it. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports a herbal-drug interaction (St John's wort and Tibolone) causing acute hepatitis, but does not report any gene variant, genotype, or phenotype affecting Tibolone's pharmacokinetics or pharmacodynamics. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not tibolone. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study evaluates pharmacokinetics for multiple myeloma drugs (carfilzomib, lenalidomide, melphalan, daratumumab, panobinostat) but does not mention or model tibolone. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulated pharmacokinetic benchmarking framework (PMX-CovEval) for method evaluation and does not report original quantitative disposition parameters for the specific drug tibolone. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of the bevacizumab biosimilar CT-P16, not tibolone. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper evaluates an LLM system for PopPK modeling using warfarin, theophylline, and tobramycin; tibolone is not the subject drug. |
| popPK | Landgren_2002 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of tibolone on climacteric symptoms and does not report any pharmacokinetic disposition parameters. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper is an epidemiological cohort study analyzing hepatocellular carcinoma risk, not a pharmacokinetic study, and contains no disposition parameters for tibolone. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy parameters (Emax, ET50) for hot flash relief, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics and dose optimization of PF-06804103 (an anti-HER2 antibody-drug conjugate), not tibolone. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study reports pharmacokinetics for gotistobart, not tibolone. |
| popPK | Lund_2004 | irrelevant | 0 | 0 | The study investigates acute vascular effects (vasodilation) in rabbit coronary arteries in vitro and reports pharmacodynamic parameters (EC50, AUC) rather than pharmacokinetic disposition parameters. |
| popPK | Lv_2021 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis focused on the effect of tibolone on lipid profiles (clinical outcomes), not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Nayak_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for marstacimab, not tibolone. |
| PGx | Notelovitz_2007 | not_relevant | 1 | 0 | The paper reviews general clinical practice and biological principles but does not report specific studies showing how gene variants alter PK or PD parameters of tibolone. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of elafibranor and its metabolite GFT1007, not tibolone. |
| PGx | Rigato_2007 | not_relevant | 2 | 2 | Case report of idiosyncratic hepatotoxicity where UGT1A1 genotype is cited as a risk factor, but no quantitative PK/PD parameter changes for tibolone are reported. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ocrelizumab in multiple sclerosis patients and does not involve tibolone. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic-pharmacodynamic model for meropenem and colistin/polymyxin B against Acinetobacter baumannii, with no mention of tibolone. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of 5-fluorouracil (5-FU) pharmacokinetics and does not contain any data for tibolone. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of busulfan, not tibolone. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for infliximab, not tibolone. |
| PGx | Vos_2002 | not_relevant | 0 | 0 | The study describes the general in vivo metabolism of tibolone in healthy volunteers and does not investigate any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | This is an epidemiological meta-analysis examining the association between hormone replacement therapy (including tibolone) and breast cancer risk; it reports relative risks for cancer incidence, not pharmacokinetic parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study is a population pharmacokinetic model library for polymyxin B, a different drug, and contains no data for tibolone. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study using the Monolix Oral1 demo dataset to introduce uncertainty metrics, not a pharmacokinetic study of the drug tibolone. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | The study is a simulation of a hypothetical drug to evaluate a model averaging algorithm, and does not report pharmacokinetic parameters for tibolone. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The paper describes the population pharmacokinetics of tacrolimus, not tibolone. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a systematic review and modeling study of daptomycin, not tibolone. |
| PGx | Yousuf_2022 | not_relevant | 0 | 0 | The paper performs in-silico ADME profiling and molecular docking for novel steroidal metabolites, but does not report pharmacogenomic studies or genotype-dependent effects on PK/PD parameters. |
| popPK | Zoma_2001 | irrelevant | 1 | 0 | The study measures hemodynamic parameters (blood flow) rather than pharmacokinetic parameters (clearance, volume, half-life) for tibolone. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for immunoglobulins (IVIg/SCIg), not tibolone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
