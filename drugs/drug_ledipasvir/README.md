<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Ledipasvir&quot;}]"></div>

# Ledipasvir

- **generic name:** Ledipasvir
- **ATC codes:** `J05AP51`
- **DrugBank:** [DB09027](https://go.drugbank.com/drugs/DB09027) · **PubChem:** [CID 67505836](https://pubchem.ncbi.nlm.nih.gov/compound/67505836)
- **molar mass:** 888.9999 g/mol (C49H54F2N8O6) — DrugBank
- **groups:** approved

## About

Ledipasvir is an antiviral drug used to treat hepatitis C infections. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409409](https://www.wikidata.org/wiki/Q15409409) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:46 | 9:57 | 0/0/0 | 0/1/0 | 0/0/0 | 253,739/4,814 | einfracz / qwen3.8-27b | 18 | 2/16 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ruiz_2021_luciferase_activity](drugs/drug_ledipasvir/pd_Ruiz_2021_luciferase_activity.md) | HCV genotype 2a susceptibility to sofosbuvir ← sofosbuvir · direct sigmoid Emax (Hill) effect | — | Ruiz I et al., Real-world efficacy and safety of direc…, European journal of gastroe… (2021) | [10.1097/MEG.0000000000002003](https://doi.org/10.1097/MEG.0000000000002003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ledipasvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate/transporter, `ABCG2` transporter | DrugBank actor |
| absorption | kidney | `ABCB1` substrate/transporter | DrugBank actor |
| absorption | liver | `ABCB1` substrate/transporter, `ABCG2` transporter | DrugBank actor |
| absorption | mammary gland | `ABCG2` transporter | DrugBank actor |
| absorption | placenta | `ABCB1` substrate/transporter | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate/transporter, `ABCG2` transporter | DrugBank actor |
| absorption | testis | `ABCB1` substrate/transporter, `ABCG2` transporter | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Genome polyprotein (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 450 matched, 73 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `AbdelMagid_2025.pdf` | AbdelMagid AM et al., Population Pharmacokinetics of Ledipasv…, Clinical therapeutics (2025) | popPK | 10 | [10.1016/j.clinthera.2024.11.022](https://doi.org/10.1016/j.clinthera.2024.11.022) | [39706761](https://pubmed.ncbi.nlm.nih.gov/39706761) | The paper reports a population PK model for ledipasvir in pediatric patients, but specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, likely residing in figures or supplementary material. |
| `Cheng_2016.pdf` | Cheng G et al., In Vitro Antiviral Activity and Resista…, Antimicrobial agents and ch… (2016) | pd | 4 | [10.1128/AAC.02524-15](https://doi.org/10.1128/AAC.02524-15) | [26824950](https://www.ncbi.nlm.nih.gov/pubmed/26824950) | metadata signals extractable PD data (EC50) |
| `Cusato_2018.pdf` | Cusato J et al., Pharmacogenetics of the anti-HCV drug s…, The Journal of antimicrobia… (2018) | pgx | 8 | [10.1093/jac/dky053](https://doi.org/10.1093/jac/dky053) | [29509884](https://www.ncbi.nlm.nih.gov/pubmed/29509884) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Casado_2014.pdf` | Casado JL et al., Recent advances in rilpivirine: new dat…, AIDS reviews (2014) | pgx | 7 | not captured | [25221991](https://www.ncbi.nlm.nih.gov/pubmed/25221991) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Talavera_2017.pdf` | Talavera Pons S et al., Managing drug-drug interactions with ne…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13095](https://doi.org/10.1111/bcp.13095) | [27530469](https://www.ncbi.nlm.nih.gov/pubmed/27530469) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T13:43:41.658307+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abaalkhail_2017 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy (SVR12) and safety of the drug in a specific patient population, but does not report any pharmacogenomic analysis or effects of genetic variants on the pharmacokinetic or pharmacodynamic parameters of ledipasvir. |
| popPK | AbdelMagid_2025 | relevant | 10 | 0 | The paper reports a population PK model for ledipasvir in pediatric patients, but specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, likely residing in figures or supplementary material. |
| PGx | Ampuero_2016 | not_relevant | 0 | 0 | The paper is a meta-analysis of viral genotype 3 treatment outcomes (SVR rates), not a study of host genetic variants affecting pharmacokinetics or pharmacodynamics of ledipasvir. |
| PGx | Asselah_2015 | not_relevant | 0 | 0 | The paper is a clinical review of HCV Genotype 4 treatments and does not report pharmacogenomic data for ledipasvir. |
| PGx | Balatow_2021 | not_relevant | 0 | 0 | The text is a general review of ledipasvir/sofosbuvir efficacy and guidelines, with no mention of pharmacogenomic variants affecting PK or PD parameters. |
| popPK | Barreiro-Costa_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on bis(spiropyrazolone)cyclopropanes for leishmaniasis; ledipasvir is only mentioned as a structural analog for context, and no PK data for ledipasvir are reported. |
| popPK | Brooks_2022 | irrelevant | 2 | 3 | The study reports pharmacokinetic parameters (half-life) for sofosbuvir's active metabolite (007-TP), not for ledipasvir itself, which serves only as the co-administered drug. |
| PGx | Burgess_2015 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) with ART and immunosuppressants, not pharmacogenomic effects (gene variants) on ledipasvir PK/PD. |
| PGx | Cacoub_2018 | not_relevant | 0 | 0 | The paper focuses on patient-reported outcomes (PROs) and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of ledipasvir. |
| popPK | Camus_2018 | irrelevant | 0 | 0 | The study characterizes resistance and susceptibility profiles (EC50) of HCV isolates to ledipasvir, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug. |
| popPK | Canini_2016 | irrelevant | 0 | 0 | The study models viral kinetics for danoprevir and mericitabine, not the pharmacokinetics of ledipasvir. |
| popPK | Canini_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of setrobuvir, not ledipasvir. |
| popPK | Carson_2026 | irrelevant | 0 | 0 | The study is a machine learning analysis predicting clinical treatment response and does not report pharmacokinetic parameters for ledipasvir. |
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper focuses on TD-6450 and NITD609 as anti-malarial agents, and does not report any pharmacokinetic data for ledipasvir. |
| PGx | Casado_2014 | not_relevant | 0 | 0 | The paper discusses rilpivirine and mentions no significant PK interactions with ledipasvir, but does not report any pharmacogenomic effects (gene variants) on ledipasvir PK/PD. |
| popPK | Cheng_2016 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity and resistance profiles (EC50 values), not pharmacokinetic disposition parameters. |
| PGx | Chuang_2016 | not_relevant | 0 | 0 | The study is a clinical trial assessing the efficacy and safety of ledipasvir/sofosbuvir in Taiwanese patients with HCV, and it does not report pharmacogenomic analyses linking genetic variants to PK or PD parameters. |
| PGx | Corma-Gómez_2019 | not_relevant | 0 | 0 | The study compares treatment durations and outcomes in HIV/HCV-coinfected patients but does not report pharmacogenomic effects on PK or PD parameters of ledipasvir. |
| PGx | Cuenca-Lopez_2017 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetics and pharmacodynamics of ledipasvir but does not report specific pharmacogenomic effects (gene variants) on these parameters. |
| PGx | Cusato_2018 | not_relevant | 5 | 3 | The primary pharmacogenomic effect reported is on the PK of sofosbuvir (metabolite GS-331007), not ledipasvir; while a subgroup analysis mentions an association for ledipasvir co-therapy, the main drug of interest in the context of the question is not the one whose PK/PD is being genetically modulated in the primary findings, and the ledipasvir mention is secondary/subgroup without detailed quantification for ledipasvir itself. |
| popPK | Evon_2022 | irrelevant | 0 | 0 | The study evaluates patient-reported symptoms and functional well-being (PROMIS scores) following viral cure, not pharmacokinetic parameters. |
| PGx | Feld_2014 | not_relevant | 0 | 0 | The paper reviews interferon-free strategies and nucleoside analogues (specifically sofosbuvir) and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ledipasvir. |
| PGx | Foster_2016 | not_relevant | 0 | 0 | The paper reports clinical outcomes (virological response, MELD scores) in patients with decompensated cirrhosis but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Friborg_2014 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assessment using HCV replicon cell lines, not a pharmacokinetic study, and reports no disposition parameters for ledipasvir. |
| PGx | Gottwein_2018 | not_relevant | 0 | 0 | The study investigates viral genotype and resistance mutations to NS5A, not human pharmacogenomic variations affecting PK or PD. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study focuses on computational screening of DPP4 inhibitors for diabetes, where ledipasvir appears only as a candidate compound in a screening table, with no pharmacokinetic parameters reported. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | The text discusses general HCV treatment guidelines and health economics in Hungary, with no specific pharmacogenomic data for ledipasvir. |
| popPK | Jonas_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of glecaprevir and pibrentasvir, not ledipasvir; ledipasvir is only mentioned in the background as a different approved regimen. |
| popPK | Kohli_2015 | irrelevant | 0 | 0 | This is a clinical efficacy trial reporting viral response rates, not a pharmacokinetic study; no PK parameters are reported. |
| popPK | Link_2014 | irrelevant | 2 | 1 | The paper is a medicinal chemistry discovery report focusing on the structural optimization of ledipasvir, providing only a single qualitative plasma half-life value (37-45 h) without a population PK model or full disposition parameters (CL, V). |
| PGx | Link_2014 | not_relevant | 0 | 0 | The paper describes the discovery and general pharmacokinetics/pharmacodynamics of ledipasvir but does not report any pharmacogenomic effects (gene variant impact). |
| PGx | Llaneras_2017 | not_relevant | 0 | 0 | The paper reviews clinical efficacy and safety data for HCV Genotype 4 treatment, but does not report pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of ledipasvir. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | The study reports in vitro EC50 values for antiviral efficacy against HCV subtypes, not pharmacokinetic disposition parameters (CL, V, Q, ka). |
| popPK | Perazzo_2020 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical efficacy (sustained virological response) and cost-effectiveness of generic HCV drugs, reporting no pharmacokinetic parameters for ledipasvir. |
| PGx | Premkumar_2017 | not_relevant | 0 | 0 | The paper discusses the efficacy and cost of generic direct-acting antivirals for HCV but does not report any pharmacogenomic effects on the PK or PD parameters of ledipasvir. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect (cholesterol levels) of a drug combination compared to another, but does not investigate the impact of any gene variant, genotype, or pharmacogenomic phenotype. |
| PGx | Schneider_2015 | not_relevant | 0 | 0 | The paper is a general review of HCV treatment regimens and does not discuss pharmacogenomic effects on ledipasvir PK/PD. |
| PGx | Smith_2015 | not_relevant | 0 | 0 | The paper is a general review of the pharmacology and clinical efficacy of ledipasvir-sofosbuvir and does not report any pharmacogenomic effects or genotype-specific PK/PD parameters. |
| PGx | Swallow_2016 | not_relevant | 0 | 0 | The study compares efficacy (SVR12) and adverse events between two drug regimens, not the effect of a specific genetic variant on the pharmacokinetics or pharmacodynamics of ledipasvir. |
| PGx | Talavera_2017 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) in chronic hepatitis C, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | The paper is a clinical review of HCV treatment in special populations and does not report any pharmacogenomic analysis or specific gene variants affecting ledipasvir PK/PD. |
| PGx | Wyles_2015 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy (SVR) of a treatment regimen in previously treated patients but does not report pharmacokinetic or pharmacodynamic parameters modified by a host gene variant or genotype. |
| popPK | Yang_2014 | irrelevant | 0 | 0 | The study characterizes the preclinical pharmacokinetics of GS-9451, while ledipasvir is only mentioned as a co-administered agent in in vitro combination assays. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The paper describes preclinical properties of GS-9451 and mentions ledipasvir only as a combination agent in vitro assays, without reporting pharmacogenomic effects on its PK or PD. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The study characterizes the preclinical pharmacokinetics of GS-9256, with ledipasvir only mentioned as a co-administered agent in in vitro antiviral activity assays. |
| PGx | Yang_2017 | not_relevant | 0 | 0 | The paper characterizes the preclinical properties of GS-9256, not ledipasvir, and reports species-based pharmacokinetics rather than human pharmacogenomic effects. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The study is an observational assessment of safety and efficacy (SVR12) of generic versus brand name drugs and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The paper is a summary of meeting highlights and clinical trial results, containing no pharmacogenomic analysis of gene variants affecting ledipasvir PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
