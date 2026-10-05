<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;rimonabant&quot;}]"></div>

# rimonabant

- **generic name:** rimonabant
- **ATC codes:** `A08AX01`
- **DrugBank:** [DB06155](https://go.drugbank.com/drugs/DB06155) · **PubChem:** [CID 104850](https://pubchem.ncbi.nlm.nih.gov/compound/104850)
- **molar mass:** 463.787 g/mol (C22H21Cl3N4O) — DrugBank
- **groups:** approved, withdrawn

## About

Rimonabant is an antiobesity drug, a cannabinoid receptor antagonist used to treat obesity. It was approved but later withdrawn, including from the European Union market, and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412529](https://www.wikidata.org/wiki/Q412529) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:10 | 4:43 | 0/0/0 | 1/1/1 | 0/0/0 | 158,287/4,422 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Baur_2012_GABA_A_receptor_mediated_ionic_currents](drugs/drug_rimonabant/pd_Baur_2012_GABA_A_receptor_mediated_ionic_currents.md) | GABA(A) receptor-mediated ionic currents ← rimonabant · direct Emax (saturable) effect | — | Baur R et al., The cannabinoid CB1 receptor antagonist…, British journal of pharmaco… (2012) | [10.1111/j.1476-5381.2011.01405.x](https://doi.org/10.1111/j.1476-5381.2011.01405.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Guagnini_2006_EFS_induced_contractions](drugs/drug_rimonabant/pd_Guagnini_2006_EFS_induced_contractions.md) | electrically evoked contractions of longitudinal muscle from small intestine ← rimonabant · direct Emax (saturable) effect | — | Guagnini F et al., Tolerance to cannabinoid response on th…, British journal of pharmaco… (2006) | [10.1038/sj.bjp.0706813](https://doi.org/10.1038/sj.bjp.0706813) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Guan_2016_VAS](drugs/drug_rimonabant/pd_Guan_2016_VAS.md) | visual analogue scale of feeling high ← rimonabant · categorical (graded) response model | — | Guan Z et al., Pharmacokinetic/pharmaco-dynamic modell…, British journal of clinical… (2016) | [10.1111/bcp.12852](https://doi.org/10.1111/bcp.12852) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Guan_2016_HR](drugs/drug_rimonabant/pd_Guan_2016_HR.md) | heart rate ← rimonabant · direct Emax (saturable) effect | — | Guan Z et al., Pharmacokinetic/pharmaco-dynamic modell…, British journal of clinical… (2016) | [10.1111/bcp.12852](https://doi.org/10.1111/bcp.12852) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rimonabant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CNR1 (target), GPR55 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 113 matched, 74 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ravula_2018.pdf` | Ravula A et al., Simultaneous quantification of cannabin…, Journal of pharmaceutical a… (2018) | pd | 5 | [10.1016/j.jpba.2018.07.004](https://doi.org/10.1016/j.jpba.2018.07.004) | [30077950](https://www.ncbi.nlm.nih.gov/pubmed/30077950) | metadata signals extractable PD data (exposure-response) |
| `Kimura_2023.pdf` | Kimura M et al., Inhibitors of cannabinoid receptor 1 su…, Virology (2023) | pd | 4 | [10.1016/j.virol.2023.109867](https://doi.org/10.1016/j.virol.2023.109867) | [37633192](https://www.ncbi.nlm.nih.gov/pubmed/37633192) | metadata signals extractable PD data (IC50) |
| `Mazeh_2021.pdf` | Mazeh AC et al., Pharmacological characterisation of the…, European journal of pharmac… (2021) | pd | 4 | [10.1016/j.ejphar.2021.174433](https://doi.org/10.1016/j.ejphar.2021.174433) | [34416240](https://www.ncbi.nlm.nih.gov/pubmed/34416240) | metadata signals extractable PD data (EC50) |
| `Moise_2008.pdf` | Moise AM et al., An endocannabinoid signaling system mod…, Psychopharmacology (2008) | pd | 4 | [10.1007/s00213-008-1209-5](https://doi.org/10.1007/s00213-008-1209-5) | [18545985](https://www.ncbi.nlm.nih.gov/pubmed/18545985) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T21:08:20.585430+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alen_2013 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating the interaction between ghrelin and CB1 receptors on food intake in rats, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for rimonabant. |
| popPK | Allen_2026 | irrelevant | 0 | 0 | The paper is a systematic review of alcohol use disorder pharmacotherapies (naltrexone, baclofen) and does not report pharmacokinetic parameters for rimonabant. |
| PD | Allen_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trial outcomes (alcohol consumption/abstinence) by sex; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for rimonabant or any other drug. |
| popPK | Baur_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor modulation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Braida_2007 | irrelevant | 0 | 0 | The study investigates the behavioral effects of salvinorin A in zebrafish, using rimonabant only as a pharmacological antagonist to block receptor activity, not as the subject of pharmacokinetic analysis. |
| popPK | Cooper_2024 | irrelevant | 0 | 0 | The study focuses on the efficacy and PK of TM38837 and TM39875, with rimonabant mentioned only as a historical comparator without providing its quantitative PK parameters. |
| PD | Cooper_2024 | not_relevant | 0 | 0 | The paper evaluates TM38837 and TM39875, not rimonabant, and does not report numeric PD parameters for rimonabant. |
| popPK | Dvorácskó_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo pharmacological activity of rimonabant analogs, not the pharmacokinetic disposition parameters of rimonabant itself. |
| PD | Dvorácskó_2023 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (Ki) and functional EC50/Emax values for novel analogs, but does not report any pharmacokinetic data, exposure-response relationships, or in vivo dose-response curves for rimonabant itself. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper concerns the toxicology and food occurrence of Δ8-THC and Δ9-THC, not the pharmacokinetics of rimonabant. |
| PD | EFSA_2025 | not_relevant | 0 | 0 | The paper concerns the derivation of a health-based guidance value for Δ8-THC and does not report any pharmacodynamic or exposure-response data for rimonabant. |
| popPK | Forget_2005 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment using rimonabant as a tool to study nicotine conditioning, and it does not report any pharmacokinetic parameters for rimonabant. |
| popPK | Forget_2006 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats assessing the effect of rimonabant on nicotine-induced conditioned place preference, with no pharmacokinetic parameters reported. |
| popPK | Glatfelter_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacology of synthetic cannabinoid receptor agonists (SCRAs) where rimonabant is used only as a radioligand or antagonist, not as the subject drug for PK analysis. |
| PGx | Gomaraschi_2005 | not_relevant | 0 | 0 | The text is a general conference summary that mentions rimonabant clinical data but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | González_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of rimonabant's motor effects in a rat model of Parkinson's disease and does not report any pharmacokinetic parameters. |
| popPK | Grim_2017 | irrelevant | 0 | 0 | The study is a pharmacological analysis of receptor affinity (pA2/pKB) in mice, not a pharmacokinetic study reporting disposition parameters for rimonabant. |
| popPK | Guagnini_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of cannabinoid tolerance in intestinal muscle strips, reporting receptor affinity (pA2) and functional potency (IC50) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Guan_2016 | irrelevant | 1 | 0 | The paper focuses on PK/PD modeling of THC and CB1 antagonists (likely including rimonabant as a comparator) in a challenge test, but the provided evidence contains no specific quantitative PK parameters (CL, V, ka) for rimonabant. |
| popPK | Gustafsson_2014 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment of rimonabant in cell lines and does not report pharmacokinetic disposition parameters. |
| PD | Gustafsson_2014 | not_relevant | 0 | 0 | The paper discusses in vitro cytotoxicity (EC50) of rimonabant in cell lines to explain the lack of human liver injury, but does not report an in vivo pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for the drug in humans. |
| PGx | Gustafsson_2014 | not_relevant | 0 | 0 | The paper discusses in vitro toxicity of rimonabant in cell lines but does not report any pharmacogenomic effects on PK or PD parameters in humans. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a review introduction summarizing the field and does not report specific pharmacogenomic effects on PK/PD parameters for rimonabant. |
| popPK | Haney_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AEF0117, not rimonabant. |
| popPK | Hoi_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of oleamide's vasorelaxant effects in rat mesenteric arteries, using rimonabant only as a receptor antagonist to probe mechanism, with no pharmacokinetic parameters reported. |
| popPK | Hsieh_2007 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC-MS/MS) for quantifying rimonabant in mouse plasma and does not report any pharmacokinetic parameters. |
| PD | Hsieh_2007 | not_relevant | 0 | 0 | The paper describes an analytical HPLC-MS/MS method for rimonabant and mentions supporting a PD study, but it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Iqbal_2007 | not_relevant | 0 | 0 | The paper is a general review of the endocannabinoid system and obesity pathophysiology, mentioning rimonabant's general efficacy but containing no pharmacogenomic data or genotype-specific PK/PD effects. |
| PGx | Jesudason_2008 | not_relevant | 0 | 0 | The paper is a general review of the endocannabinoid system and mentions rimonabant's clinical effects, but it does not report specific pharmacogenomic effects of gene variants on rimonabant's PK or PD parameters. |
| popPK | Jordan_2020 | irrelevant | 0 | 0 | The study focuses on the behavioral pharmacology of a novel CB2 inverse agonist (Xie2-64) for cocaine use disorder, with rimonabant mentioned only as a historical comparator and no PK parameters reported. |
| PD | Jordan_2020 | not_relevant | 0 | 0 | The paper focuses on the novel compound Xie2-64 and only mentions rimonabant in the introduction as background context for failed clinical trials, providing no pharmacodynamic data or parameters for rimonabant. |
| popPK | Järbe_2010 | irrelevant | 1 | 0 | The study reports functional half-lives derived from behavioral antagonism assays, not pharmacokinetic disposition parameters (CL, V, ka) from a PK model. |
| popPK | Karelia_2024 | irrelevant | 0 | 0 | The study is an in-vitro cancer cell line screening where rimonabant is used only as a CB1 antagonist tool compound, not as the subject drug for pharmacokinetic analysis. |
| PD | Karelia_2024 | not_relevant | 0 | 0 | The paper does not report a pharmacodynamic or exposure-response relationship for rimonabant; it is only mentioned as a CB1 antagonist used to test the mechanism of action of other compounds. |
| popPK | Kim_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cannabinoid effects on synaptic plasticity in rat hippocampal neurons, using rimonabant only as a receptor antagonist, and reports no pharmacokinetic parameters. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new CB1 ligands and does not report pharmacokinetic parameters for rimonabant. |
| PD | Kim_2009 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro binding affinity (IC50) for a new compound, not a pharmacodynamic or exposure-response analysis for rimonabant. |
| popPK | Kimura_2023 | irrelevant | 0 | 0 | The paper focuses on the antiviral mechanism of cannabinoid receptor 1 inhibitors against Lujo virus and does not report pharmacokinetic parameters for rimonabant. |
| PD | Kimura_2023 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of cannabinoid receptor 1 inhibitors against Lujo virus and does not report pharmacodynamic or exposure-response data for rimonabant. |
| popPK | Kirkedal_2017 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment where rimonabant is used only as a co-administered antagonist, with no pharmacokinetic parameters reported. |
| PD | Kirkedal_2017 | not_relevant | 1 | 0 | The paper investigates the dose-response of AA-5HT, not rimonabant; rimonabant is used only as a qualitative antagonist to confirm mechanism, with no PD parameters reported for it. |
| popPK | Klumpers_2013 | irrelevant | 2 | 0 | Rimonabant is used as a comparator agent to the subject drug TM38837, and no quantitative PK parameters for rimonabant are reported in the evidence. |
| PD | Klumpers_2013 | not_relevant | 4 | 3 | The paper reports a population PK-PD model and provides numeric effect estimates (percent change) for rimonabant, but it does not provide the specific numeric PD parameters (e.g., EC50, Emax, slope) or the concentration-effect curve data required to derive them. |
| popPK | Lee_2009 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new CB1 ligands, mentioning rimonabant only as historical context without reporting any pharmacokinetic parameters. |
| PD | Lee_2009 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities (IC50) for new chemical compounds, not pharmacodynamic exposure-response or dose-response relationships for rimonabant. |
| popPK | Mabou_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cannabigerol (CBG) in mice, with rimonabant used only as a pharmacological tool to probe CB1 receptor involvement, not as the subject drug. |
| PD | Mabou_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cannabigerol (CBG) and uses rimonabant only as a mechanistic probe to test CB1 involvement, without reporting any exposure-response or dose-response data for rimonabant itself. |
| PGx | Mackowiak_2019 | not_relevant | 0 | 0 | The paper discusses rimonabant as a CAR antagonist in a screening context but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Mazeh_2021 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Mazeh_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacological characterization of cannabidiol, not rimonabant, and does not report PD parameters for the target drug. |
| popPK | Mika_2022 | irrelevant | 0 | 0 | The study investigates the anti-obesity effects of KSK-60 and KSK-74 in rats and does not involve rimonabant or report its pharmacokinetic parameters. |
| PD | Mika_2022 | not_relevant | 0 | 0 | The paper studies KSK-60 and KSK-74, not rimonabant; rimonabant is only mentioned in the introduction as a withdrawn drug. |
| popPK | Moise_2008 | irrelevant | 0 | 0 | The paper title indicates a behavioral study in hamsters with no evidence of pharmacokinetic parameter reporting for rimonabant. |
| PD | Moise_2008 | not_relevant | 0 | 0 | The paper studies endocannabinoid signaling in hamsters and does not report pharmacodynamic or exposure-response data for rimonabant. |
| popPK | Mustafa_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacology of LDK1258, with rimonabant serving only as a comparator agent, and no PK parameters for rimonabant are reported. |
| PD | Mustafa_2020 | not_relevant | 0 | 0 | The paper focuses on the compound LDK1258 and only mentions rimonabant as a control agent to demonstrate off-target effects; it does not report any pharmacodynamic or exposure-response parameters for rimonabant. |
| popPK | Netherland_2010 | irrelevant | 0 | 0 | The paper is a mechanistic study on ACAT inhibition and does not report any pharmacokinetic parameters for rimonabant. |
| popPK | Nicolussi_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacology of guineensine, using rimonabant only as a comparator antagonist to block effects, with no PK parameters reported for rimonabant. |
| PD | Nicolussi_2014 | not_relevant | 0 | 0 | The paper focuses on guineensine; rimonabant is only used as a qualitative antagonist to confirm CB1 involvement, with no exposure-response or dose-response analysis or numeric PD parameters reported for it. |
| popPK | Nishio_2012 | irrelevant | 0 | 0 | The study is a mechanistic investigation of appetite regulation in zebrafish and does not report pharmacokinetic parameters for rimonabant. |
| PD | Nishio_2012 | not_relevant | 3 | 2 | The paper reports a single EC50 value for rimonabant but focuses on qualitative gene expression changes (CART down-regulation) without providing a full dose-response curve or population PK/PD model parameters. |
| popPK | Owens_2016 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where rimonabant is used only as a CB1 antagonist to block effects, with no pharmacokinetic parameters reported. |
| PD | Owens_2016 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of SA-57 and only qualitatively mentions that rimonabant blocked generalization, without providing any numeric dose-response parameters or concentration-effect data for rimonabant. |
| popPK | Owens_2017 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in mice where rimonabant is used as a comparator antagonist, and no pharmacokinetic parameters are reported. |
| PGx | Pinson_2020 | not_relevant | 0 | 0 | The paper investigates the metabolism and activity of the synthetic cannabinoid 5F-AKB48, using rimonabant only as a pharmacological antagonist in animal models, and does not report pharmacogenomic effects on rimonabant's PK or PD. |
| popPK | Ravula_2018 | irrelevant | 2 | 0 | The evidence consists only of the title, which indicates rimonabant is a co-administered agent in a study focused on cannabinoids, and no quantitative PK parameter values are present. |
| PD | Ravula_2018 | not_relevant | 0 | 0 | The paper focuses on the simultaneous quantification of cannabinoids and rimonabant in rat plasma to characterize pharmacokinetics, with no mention of pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Ravula_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of THC in rats, with rimonabant used only as a pharmacological probe to assess dependence, not as the subject of PK analysis. |
| PD | Ravula_2019 | not_relevant | 4 | 2 | The text describes a PK/PD model for THC and a dose-response for rimonabant, but the provided abstract does not contain the specific numeric PD parameters (e.g., EC50, Emax, slope) or curve data required for extraction. |
| popPK | Selley_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor efficacy using rimonabant as an antagonist in mixtures, and it does not report any pharmacokinetic parameters. |
| popPK | Soliman_2021 | irrelevant | 0 | 0 | The paper is a systematic review of antinociceptive efficacy in animal pain models and does not report pharmacokinetic parameters for rimonabant. |
| PD | Soliman_2021 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of preclinical animal studies; it does not report specific numeric pharmacodynamic parameters (e.g., EC50, Emax) for rimonabant, nor does it provide an extractable concentration-effect curve. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of rimonabant or its pharmacokinetics. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (e.g., simvastatin, atorvastatin) and does not contain any data, analysis, or mention of rimonabant. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | The paper is an in vitro pharmacology resource describing off-target activities and adverse drug reactions, not a pharmacokinetic study reporting disposition parameters for rimonabant. |
| PD | Sutherland_2023 | not_relevant | 0 | 0 | The paper is a database resource for in vitro secondary pharmacology (AC50 values) and safety margins, not a pharmacodynamic study reporting exposure-response or dose-response relationships for rimonabant. |
| popPK | Terry_2010 | irrelevant | 0 | 0 | The study is a PET imaging trial for CB1 receptor quantification using radioligands, where rimonabant is used only as a receptor blocker/comparator, not as the subject drug for PK analysis. |
| PGx | Viveros_2008 | not_relevant | 0 | 0 | The paper is a general review of the endocannabinoid system and mentions rimonabant as a drug example, but it does not report any pharmacogenomic studies or genotype-specific effects on PK/PD parameters. |
| popPK | Vlot_2017 | irrelevant | 2 | 0 | The paper is a mechanistic PBPK-QSAR modeling study using rimonabant as a simulation example, not a study reporting original quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of a novel NAAA inhibitor (F96), using rimonabant only as a CB1 antagonist comparator to rule out cannabinoid receptor involvement, and does not report any pharmacokinetic parameters for rimonabant. |
| PD | Yang_2015 | not_relevant | 0 | 0 | The paper studies the NAAA inhibitor F96, not rimonabant; rimonabant is only used as a negative control antagonist. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on rimonabant analogues and does not report any pharmacokinetic parameters. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-inflammatory activity and does not report any pharmacokinetic parameters for rimonabant. |
| popPK | Yun_2016 | irrelevant | 0 | 0 | The study focuses on the cardiotoxicity and hERG channel inhibition of the synthetic cannabinoid JWH-030, using rimonabant only as a mechanistic comparator (CB1 antagonist) without reporting any pharmacokinetic parameters for it. |
| PD | Yun_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of JWH-030 (reporting its IC50), while rimonabant is only mentioned as a negative control antagonist that did not inhibit cytotoxicity, with no PD parameters reported for rimonabant. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The study focuses on CB1 receptor signalling bias and kinetic modelling of receptor internalisation, not the pharmacokinetic disposition parameters (CL, V, etc.) of rimonabant. |
| PD | Zhu_2020 | not_relevant | 0 | 0 | The paper focuses on CB1 receptor signalling bias using a specific set of ligands (CP55,940, WIN55,212-2, etc.) and does not mention or analyze rimonabant. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of rimonabant pharmacodynamics. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 300 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for rimonabant. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
