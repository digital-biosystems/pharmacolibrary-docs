<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tilidine&quot;}]"></div>

# tilidine

- **generic name:** tilidine
- **ATC codes:** `N02AX01`, `N02AX51`
- **DrugBank:** [DB13787](https://go.drugbank.com/drugs/DB13787) · **PubChem:** not captured
- **molar mass:** 273.376 g/mol (C17H23NO2) — DrugBank
- **groups:** investigational

## About

Tilidine is an opioid painkiller used to treat moderate to severe pain. It is classified as investigational in DrugBank and is not authorised in the European Union; it is used mainly in a few countries such as Germany, often combined with naloxone.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421108](https://www.wikidata.org/wiki/Q421108) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:44 | 0:45 | 0/1/0 | 1/0/0 | 0/0/2 | 108,282/3,415 | einfracz / qwen3.8-27b | 23 | 12/12 | 22/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Ringwelski_1975_reference](drugs/drug_tilidine/Tilidine_Ringwelski1975_reference.md) | — | 1-compartment (no model) | 1 | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Thierry_2005_cAMP](drugs/drug_tilidine/pd_Thierry_2005_cAMP.md) | cAMP accumulation ← tilidine · inhibition effect | — | Thierry C et al., Actions of tilidine and nortilidine on…, European journal of pharmac… (2005) | [10.1016/j.ejphar.2004.11.020](https://doi.org/10.1016/j.ejphar.2004.11.020) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C19** | `Q305` · kfm | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP2C19_Q305.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q305` · kfm | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP3A4_Q305.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tilidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` formation, `CYP3A4` formation | paper PGx gene |
| metabolism | small intestine | `CYP3A4` formation | paper PGx gene |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 172 matched, 58 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brennscheidt_2007.pdf` | Brennscheidt U et al., Pharmacokinetics of tilidine and naloxo…, Arzneimittel-Forschung (2007) | popPK | 8 | [10.1055/s-0031-1296591](https://doi.org/10.1055/s-0031-1296591) | [17396621](https://pubmed.ncbi.nlm.nih.gov/17396621) | The study describes a PK investigation of tilidine and its metabolites in hepatic impairment patients, but the abstract only provides relative changes (e.g., 44% reduction in Cmax) compared to healthy controls rather than absolute numeric parameter values (CL, V, etc.) for the study population. |
| `Ringwelski_1975.pdf` | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | popPK | 8 | not captured | [1140877](https://pubmed.ncbi.nlm.nih.gov/1140877) | The paper reports a compartmental model for tilidine in humans with specific half-life values for absorption and elimination, but primary clearance and volume parameters are not explicitly listed as numeric values in the provided text. |
| `Vollmer_1976.pdf` | Vollmer KO et al., [ On the metabolism of ethyl-DL-trans-2…, Arzneimittel-Forschung (1976) | popPK | 7 | not captured | [1037201](https://pubmed.ncbi.nlm.nih.gov/1037201) | The paper is a pharmacokinetic study on tilidine in rats and dogs, but the provided evidence contains only qualitative descriptions of distribution and excretion without specific numeric values for clearance, volume, or half-life. |
| `Eichbaum_2015.pdf` | Eichbaum C et al., Pre-systemic elimination of tilidine: l…, Basic & clinical pharmacolo… (2015) | pgx | 7 | [10.1111/bcpt.12328](https://doi.org/10.1111/bcpt.12328) | [25223231](https://www.ncbi.nlm.nih.gov/pubmed/25223231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Weiss_2008.pdf` | Weiss J et al., In vitro metabolism of the opioid tilid…, Naunyn-Schmiedeberg's archi… (2008) | pgx | 7 | [10.1007/s00210-008-0294-7](https://doi.org/10.1007/s00210-008-0294-7) | [18516595](https://www.ncbi.nlm.nih.gov/pubmed/18516595) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wustrow_2012.pdf` | Wustrow I et al., In vitro identification of the cytochro…, Naunyn-Schmiedeberg's archi… (2012) | pgx | 7 | [10.1007/s00210-012-0737-z](https://doi.org/10.1007/s00210-012-0737-z) | [22349139](https://www.ncbi.nlm.nih.gov/pubmed/22349139) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-07T05:44:26.755984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baradaran_2025 | irrelevant | 0 | 0 | The paper describes an optical coherence tomography imaging system and contains no pharmacokinetic data or information regarding tilidine. |
| popPK | Brennscheidt_2000 | irrelevant | 4 | 0 | The study models the active metabolite nortilidine (which counts as tilidine PK), but no quantitative parameter values (CL, V, t1/2) are present in the provided evidence text. |
| popPK | Brennscheidt_2007 | relevant | 8 | 2 | The study describes a PK investigation of tilidine and its metabolites in hepatic impairment patients, but the abstract only provides relative changes (e.g., 44% reduction in Cmax) compared to healthy controls rather than absolute numeric parameter values (CL, V, etc.) for the study population. |
| popPK | Chiappini_2021 | irrelevant | 0 | 0 | The paper is a clinical study on the prevalence of opioid dependence in the elderly and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Chue-Sang_2019 | irrelevant | 0 | 0 | The paper is a review of optical phantoms for biomedical polarimetry and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Cook_1988 | irrelevant | 0 | 0 | The paper is a neurophysiology study on fetal lambs investigating evoked potentials and does not involve tilidine or pharmacokinetic parameters. |
| popPK | Cordonnier_1987 | irrelevant | 0 | 0 | The paper is a case report of a fatal poisoning describing qualitative identification and quantitation via chromatography/mass spectrometry, but does not report quantitative population pharmacokinetic parameters (CL, V, ka, etc.) or a PK model for tilidine. |
| popPK | Cottrill_2021 | irrelevant | 0 | 0 | The study is a pharmacogenomic analysis of pain medication metabolizing enzymes in humans and does not measure or report quantitative pharmacokinetic parameters (such as clearance or volume) for tilidine. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper catalogs genotypes and metabolic phenotypes (e.g., metabolizer status) for tilidine but does not report measured changes in specific PK or PD parameters. |
| popPK | Dubinsky_1975 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Eichbaum_2015 | not_relevant | 0 | 0 | The study investigates the effect of CYP3A4 inhibition/activation (using grapefruit juice and efavirenz) on tilidine pharmacokinetics, but does not report on genetic variants or pharmacogenomic effects. |
| popPK | Feng_2017 | irrelevant | 1 | 0 | The paper is a review of opioid drug interactions; tilidine is listed only as a subject in antimycotic and protease inhibitor interaction summaries without specific quantitative PK parameters (CL, V, ka) provided in the evidence. |
| popPK | Freye_2000 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (transit time, pupillary reflex) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | GIESE_1961 | irrelevant | 0 | 0 | The paper is a study on the regeneration of the protozoan Blepharisma undulans and contains no information regarding the drug tilidine or pharmacokinetic parameters. |
| popPK | Gailevičius_2020 | irrelevant | 0 | 0 | The paper is a materials science study on the optical birefringence of black silicon surfaces and contains no pharmacokinetic data for tilidine. |
| popPK | Giorgetti_2024 | irrelevant | 0 | 0 | The paper is a forensic case series focusing on novel synthetic opioids (U-47700, MeACF) where tilidine is merely a co-detected substance without reported quantitative PK parameters. |
| PD | Grün_2009 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative changes in analgesic effect (pain thresholds) using non-parametric ANOVA, but does not provide a concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for tilidine. |
| PGx | Grün_2009 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic interaction caused by the co-administration of voriconazole, not a pharmacogenomic effect based on genetic variants or genotypes. |
| popPK | Hankemeier_1991 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the analgesic efficacy of tilidine during a procedure, reporting only pain scores and not pharmacokinetic parameters. |
| popPK | Hoffmeister_1988 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in rhesus monkeys assessing stimulus effects (generalization) of codeine and other opioids, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Hristova_2024 | irrelevant | 0 | 0 | The paper is a theoretical optics study on polarization retarders and contains no pharmacokinetic data or mention of tilidine. |
| popPK | Högger_1999 | irrelevant | 1 | 0 | The study focuses on analgesic efficacy and only mentions "pronounced interindividual differences" in plasma levels without providing any quantitative PK parameters (CL, V, ka, etc.). |
| PD | Högger_1999 | not_relevant | 2 | 1 | The study reports qualitative efficacy rankings and mentions plasma levels but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for tilidine. |
| PD | Högger_2000 | not_relevant | 2 | 1 | The study reports a qualitative correlation between plasma epinephrine levels and adverse effects (vertigo) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model for the analgesic or adverse effect. |
| popPK | Jage_2008 | irrelevant | 0 | 0 | The paper is a qualitative clinical review of analgesics with no original quantitative pharmacokinetic data for tilidine. |
| popPK | Jage_2008_2 | irrelevant | 0 | 0 | The paper is a narrative review of perioperative analgesia without original quantitative pharmacokinetic parameters or models for tilidine. |
| popPK | Jasinski_1986 | irrelevant | 0 | 0 | The study focuses on subjective effects and abuse potential (behavioral/pharmacodynamic outcomes) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jobski_2024 | irrelevant | 0 | 0 | The study is a descriptive analysis of pain medication regimens (utilization patterns) after hip fractures, not a pharmacokinetic study reporting disposition parameters for tilidine. |
| popPK | Kleine-Borgmann_2021 | irrelevant | 0 | 0 | This is a pharmacodynamics/clinical pain study analyzing analgesic efficacy and side effects in healthy volunteers, with no pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| popPK | Krüger_2014 | irrelevant | 0 | 0 | The study is an internet survey regarding opioid misuse and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Leary_1976 | irrelevant | 0 | 0 | The study is a clinical efficacy comparison of tilidine and morphine for pain relief, with no pharmacokinetic parameters (CL, V, ka, etc.) reported or extracted. |
| popPK | Lien_2022 | irrelevant | 0 | 0 | The paper is a biophotonics study on collagen glycation and birefringence, containing no pharmacokinetic data or mention of tilidine. |
| popPK | Lötsch_2005 | irrelevant | 0 | 0 | The paper is a general review on opioid metabolism; it mentions tilidine only as an example of a prodrug and does not provide quantitative PK parameters (CL, V, etc.) for tilidine. |
| popPK | Maalouli_2024 | irrelevant | 1 | 0 | This is an analytical method development study for exhaled breath aerosol analysis that only qualitatively confirms detection of tilidine without reporting any pharmacokinetic parameters. |
| popPK | Naoumkina_2024 | irrelevant | 0 | 0 | The paper is a review on naturally colored cotton and textile applications, containing no pharmacokinetic data for tilidine. |
| popPK | Oldenbourg_1998 | irrelevant | 0 | 0 | The paper describes birefringence measurements of microtubules using polarized light microscopy and contains no pharmacokinetic data for tilidine. |
| popPK | Radbruch_2013 | irrelevant | 0 | 0 | The paper is a review of abuse and misuse potential, containing no pharmacokinetic parameter values for tilidine. |
| popPK | Richards_2022 | irrelevant | 0 | 0 | This is a global epidemiological study analyzing opioid consumption rates, not a pharmacokinetic study reporting disposition parameters for tilidine. |
| popPK | Ringwelski_1975 | relevant | 8 | 4 | The paper reports a compartmental model for tilidine in humans with specific half-life values for absorption and elimination, but primary clearance and volume parameters are not explicitly listed as numeric values in the provided text. |
| popPK | Romagnoli_1975 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (respiratory depression) rather than pharmacokinetics, and no quantitative disposition parameters (CL, V, etc.) for tilidine are reported. |
| popPK | Saarnivaara_1980 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| popPK | Schutter_2010 | irrelevant | 0 | 0 | The paper is a clinical observational study on buprenorphine efficacy in patients who previously used tilidine as a comparator, with no pharmacokinetic data reported. |
| popPK | Schutter_2010_2 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| popPK | Shah_2016 | irrelevant | 0 | 0 | The paper is a review on low protein diet management in chronic kidney disease and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper focuses on pharmacovigilance and regression modeling of adverse drug reactions in polypharmacy, containing no pharmacokinetic data for tilidine. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction risk using regression models on polypharmacy data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Tegeder_1999 | irrelevant | 0 | 0 | The paper is a review discussing the general effects of liver disease on opioid pharmacokinetics without reporting original quantitative disposition parameters for tilidine. |
| popPK | Trojan_1978 | irrelevant | 0 | 0 | The paper is a review of tilidine abuse and dependence, lacking original pharmacokinetic data or quantitative disposition parameters. |
| popPK | Vollmer_1976 | relevant | 7 | 0 | The paper is a pharmacokinetic study on tilidine in rats and dogs, but the provided evidence contains only qualitative descriptions of distribution and excretion without specific numeric values for clearance, volume, or half-life. |
| popPK | Vormfelde_2001 | irrelevant | 0 | 0 | The paper discusses methadone-related mortality and prevention strategies, with no pharmacokinetic data for tilidine. |
| popPK | Wall_2020 | irrelevant | 0 | 0 | The paper is a clinical audit regarding prescribing practices and pharmacy supply of analgesics, not a pharmacokinetic study; no PK parameters are reported. |
| popPK | Weber_2020 | irrelevant | 0 | 0 | The paper is a general review of pain therapy strategies and contains no original quantitative pharmacokinetic data for tilidine. |
| popPK | Weber_2025 | irrelevant | 0 | 0 | The paper is a general review of pain therapy in palliative care and does not contain original pharmacokinetic data, numeric parameter values, or compartmental models for tilidine. |
| popPK | Weiss_2008 | irrelevant | 0 | 0 | The study is in-vitro mechanistic only, reporting metabolic kinetics (Km, Vmax) rather than quantitative disposition parameters (CL, V, ka, half-life) for tilidine. |
| PGx | Weiss_2008 | not_relevant | 0 | 0 | The study focuses on in vitro enzyme kinetics and drug-drug interactions, without reporting pharmacogenomic effects (genotype-based) on tilidine PK/PD. |
| PGx | Wustrow_2012 | not_relevant | 0 | 0 | The paper is an in vitro study identifying CYP enzymes and kinetic parameters (Km, Vmax) using liver microsomes and recombinant proteins, and it does not investigate gene variants or genotypes affecting PK/PD in humans. |
| popPK | Wörz_1984 | irrelevant | 0 | 0 | The paper discusses the therapy of cancer pain with morphine and other opioids (pethidine, tramadol, buprenorphine) but does not mention tilidine or provide any pharmacokinetic data for it. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes a microscopy imaging technique (GROM) and contains no pharmacokinetic data or information regarding the drug tilidine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:44 UTC</sub>
